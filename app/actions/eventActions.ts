"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";
import { Decimal } from "@prisma/client/runtime/library";

// ============ ADMIN ACTIONS ============

export async function createEvent(data: {
  title: string;
  slug: string;
  description: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  totalCapacity: number;
  category: "CONFERENCE" | "CONCERT" | "EXPERIENCE" | "WORKSHOP" | "OTHER";
  organizer?: string;
  images: string[];
  highlights: string[];
  ticketTypes: Array<{
    name: string;
    basePrice: number;
    maxQuantity: number;
    earlyBirdEndDate?: Date;
    earlyBirdPrice?: number;
    surgeThreshold?: number;
    surgeMultiplier?: number;
  }>;
  seatingZones?: Array<{
    sectionName: string;
    capacity: number;
    priceModifier?: number;
  }>;
  refundPolicy?: {
    cancellationDeadlineDays: number;
    refundPercentageBeforeDeadline: number;
    refundPercentageAfterDeadline: number;
    refundPercentageAfterEvent?: number;
  };
}) {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("Unauthorized");

    let dbUser = await prisma.user.findUnique({
      where: { clerkId: clerkUser.id },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          clerkId: clerkUser.id,
          email: clerkUser.emailAddresses[0]?.emailAddress || "",
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
        },
      });
    }

    // Ensure unique slug
    let uniqueSlug = data.slug;
    let counter = 1;
    while (await (prisma as any).event.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${data.slug}-${counter}`;
      counter++;
    }

    // Create Event
    const event = await (prisma as any).event.create({
      data: {
        title: data.title,
        slug: uniqueSlug,
        description: data.description,
        destination: data.destination,
        startDate: data.startDate,
        endDate: data.endDate,
        totalCapacity: data.totalCapacity,
        category: data.category,
        organizer: data.organizer || undefined,
        images: data.images,
        highlights: data.highlights,
        status: "DRAFT",
        ticketTypes: {
          create: data.ticketTypes.map((tt) => ({
            name: tt.name,
            basePrice: new Decimal(tt.basePrice),
            maxQuantity: tt.maxQuantity,
            earlyBirdEndDate: tt.earlyBirdEndDate,
            earlyBirdPrice: tt.earlyBirdPrice
              ? new Decimal(tt.earlyBirdPrice)
              : null,
            surgeThreshold: tt.surgeThreshold,
            surgeMultiplier: tt.surgeMultiplier
              ? new Decimal(tt.surgeMultiplier)
              : null,
          })),
        },
        ...(data.seatingZones && {
          seatingZones: {
            create: data.seatingZones.map((sz) => ({
              sectionName: sz.sectionName,
              capacity: sz.capacity,
              priceModifier: sz.priceModifier
                ? new Decimal(sz.priceModifier)
                : new Decimal(1.0),
            })),
          },
        }),
        ...(data.refundPolicy && {
          refundPolicy: {
            create: {
              cancellationDeadlineDays: data.refundPolicy
                .cancellationDeadlineDays,
              refundPercentageBeforeDeadline:
                data.refundPolicy.refundPercentageBeforeDeadline,
              refundPercentageAfterDeadline:
                data.refundPolicy.refundPercentageAfterDeadline,
              refundPercentageAfterEvent:
                data.refundPolicy.refundPercentageAfterEvent || 0,
            },
          },
        }),
      },
      include: {
        ticketTypes: true,
        seatingZones: true,
        refundPolicy: true,
      },
    });

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: dbUser.id,
        module: "EVENTS",
        action: "CREATE_EVENT",
        details: { eventId: event.id, title: event.title },
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");

    return { success: true, event };
  } catch (error) {
    console.error("Error creating event:", error);
    return { success: false, error: String(error) };
  }
}

export async function updateEvent(
  eventId: string,
  data: Partial<Parameters<typeof createEvent>[0]>
) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await (prisma as any).user.findUnique({
      where: { clerkId: user.id },
    });

    if (!dbUser) throw new Error("User not found in database");

    const event = await (prisma as any).event.update({
      where: { id: eventId },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.description && { description: data.description }),
        ...(data.destination && { destination: data.destination }),
        ...(data.startDate && { startDate: data.startDate }),
        ...(data.endDate && { endDate: data.endDate }),
        ...(data.totalCapacity && { totalCapacity: data.totalCapacity }),
        ...(data.category && { category: data.category }),
        ...(data.organizer !== undefined && { organizer: data.organizer }),
        ...(data.images && { images: data.images }),
        ...(data.highlights && { highlights: data.highlights }),
        
        // Handle Ticket Types
        ...(data.ticketTypes && {
          ticketTypes: {
            deleteMany: {}, // Delete old ones (Be careful if tickets exist)
            create: data.ticketTypes.map((tt) => ({
              name: tt.name,
              basePrice: new Decimal(tt.basePrice),
              maxQuantity: tt.maxQuantity,
              earlyBirdEndDate: tt.earlyBirdEndDate,
              earlyBirdPrice: tt.earlyBirdPrice ? new Decimal(tt.earlyBirdPrice) : null,
              surgeThreshold: tt.surgeThreshold,
              surgeMultiplier: tt.surgeMultiplier ? new Decimal(tt.surgeMultiplier) : null,
            })),
          },
        }),

        // Handle Seating Zones
        ...(data.seatingZones && {
          seatingZones: {
            deleteMany: {},
            create: data.seatingZones.map((sz) => ({
              sectionName: sz.sectionName,
              capacity: sz.capacity,
              priceModifier: sz.priceModifier ? new Decimal(sz.priceModifier) : new Decimal(1.0),
            })),
          },
        }),

        // Handle Refund Policy
        ...(data.refundPolicy && {
          refundPolicy: {
            upsert: {
              create: {
                cancellationDeadlineDays: data.refundPolicy.cancellationDeadlineDays,
                refundPercentageBeforeDeadline: data.refundPolicy.refundPercentageBeforeDeadline,
                refundPercentageAfterDeadline: data.refundPolicy.refundPercentageAfterDeadline,
                refundPercentageAfterEvent: data.refundPolicy.refundPercentageAfterEvent || 0,
              },
              update: {
                cancellationDeadlineDays: data.refundPolicy.cancellationDeadlineDays,
                refundPercentageBeforeDeadline: data.refundPolicy.refundPercentageBeforeDeadline,
                refundPercentageAfterDeadline: data.refundPolicy.refundPercentageAfterDeadline,
                refundPercentageAfterEvent: data.refundPolicy.refundPercentageAfterEvent || 0,
              },
            },
          },
        }),
      },
      include: {
        ticketTypes: true,
        seatingZones: true,
        refundPolicy: true,
      },
    });

    await prisma.activityLog.create({
      data: {
        userId: dbUser.id,
        module: "EVENTS",
        action: "UPDATE_EVENT",
        details: { eventId: event.id },
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");
    return { success: true, event };
  } catch (error) {
    console.error("Error updating event:", error);
    return { success: false, error: String(error) };
  }
}

export async function publishEvent(eventId: string) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    const event = await (prisma as any).event.update({
      where: { id: eventId },
      data: { status: "PUBLISHED" },
    });

    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "EVENTS",
        action: "PUBLISH_EVENT",
        details: { eventId },
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");

    return { success: true, event };
  } catch (error) {
    console.error("Error publishing event:", error);
    return { success: false, error: String(error) };
  }
}

export async function cancelEvent(eventId: string, reason?: string) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    const event = await (prisma as any).event.update({
      where: { id: eventId },
      data: { status: "CANCELLED" },
    });

    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "EVENTS",
        action: "CANCEL_EVENT",
        details: { eventId, reason },
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");

    return { success: true, event };
  } catch (error) {
    console.error("Error cancelling event:", error);
    return { success: false, error: String(error) };
  }
}

export async function getAdminEvents() {
  try {
    const events = await (prisma as any).event.findMany({
      include: {
        ticketTypes: true,
        seatingZones: true,
        tickets: {
          where: { status: { in: ["AVAILABLE", "ISSUED"] } },
        },
        refundPolicy: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return {
      success: true,
      events: events.map((e: any) => ({
        ...e,
        ticketTypes: e.ticketTypes.map((t: any) => ({
          ...t,
          basePrice: typeof t.basePrice === 'object' && t.basePrice !== null ? Number(t.basePrice) : t.basePrice,
          earlyBirdPrice: t.earlyBirdPrice ? Number(t.earlyBirdPrice) : null,
          surgeMultiplier: t.surgeMultiplier ? Number(t.surgeMultiplier) : null,
        })),
        seatingZones: e.seatingZones.map((z: any) => ({
          ...z,
          priceModifier: typeof z.priceModifier === 'object' && z.priceModifier !== null ? Number(z.priceModifier) : z.priceModifier,
        })),
        ticketsSold: e.tickets.length,
      }))
    };
  } catch (error) {
    console.error("Error fetching admin events:", error);
    return { success: false, events: [], error: String(error) };
  }
}

// ============ CUSTOMER ACTIONS ============

export async function getPublicEvents() {
  try {
    const events = await (prisma as any).event.findMany({
      where: { status: "PUBLISHED" },
      include: {
        ticketTypes: true,
        seatingZones: true,
        tickets: {
          where: { status: { in: ["AVAILABLE", "ISSUED"] } },
        },
      },
      orderBy: { startDate: "asc" },
    });

    return events.map((e: any) => {
      const capacityRemaining =
        e.totalCapacity - e.tickets.length;
      const isSoldOut = capacityRemaining <= 0;

      return {
        ...e,
        ticketsSold: e.tickets.length,
        capacityRemaining,
        isSoldOut,
        basePrice: Math.min(
          ...e.ticketTypes.map((t: any) =>
            t.earlyBirdPrice && new Date() < (t.earlyBirdEndDate || new Date(0))
              ? Number(t.earlyBirdPrice)
              : Number(t.basePrice)
          )
        ),
      };
    });
  } catch (error) {
    console.error("Error fetching public events:", error);
    return [];
  }
}

export async function getEventBySlug(slug: string) {
  try {
    const event = await (prisma as any).event.findUnique({
      where: { slug },
      include: {
        ticketTypes: true,
        seatingZones: true,
        tickets: true,
      },
    });

    if (!event) return null;

    const ticketsSold = event.tickets.filter((t: any) => t.status !== "CANCELLED").length;
    const capacityRemaining = event.totalCapacity - ticketsSold;

    return {
      ...event,
      ticketTypes: event.ticketTypes.map((t: any) => ({
        ...t,
        basePrice: typeof t.basePrice === 'object' && t.basePrice !== null ? Number(t.basePrice) : t.basePrice,
        earlyBirdPrice: t.earlyBirdPrice ? Number(t.earlyBirdPrice) : null,
        surgeMultiplier: t.surgeMultiplier ? Number(t.surgeMultiplier) : null,
        quantitySold: event.tickets.filter((tick: any) => tick.ticketTypeId === t.id && tick.status !== 'CANCELLED').length,
      })),
      seatingZones: event.seatingZones.map((z: any) => ({
        ...z,
        priceModifier: typeof z.priceModifier === 'object' && z.priceModifier !== null ? Number(z.priceModifier) : z.priceModifier,
      })),
      ticketsSold,
      capacityRemaining,
      isSoldOut: capacityRemaining <= 0,
    };
  } catch (error) {
    console.error("Error fetching event by slug:", error);
    return null;
  }
}

export async function getEventById(eventId: string) {
  try {
    const event = await (prisma as any).event.findUnique({
      where: { id: eventId },
      include: {
        ticketTypes: true,
        seatingZones: true,
        tickets: true,
        refundPolicy: true,
      },
    });

    if (!event) return { success: false, error: 'Event not found' };

    const ticketsSold = event.tickets.filter((t: any) => t.status !== "CANCELLED").length;
    const capacityRemaining = event.totalCapacity - ticketsSold;

    return {
      success: true,
      event: {
        ...event,
        ticketTypes: event.ticketTypes.map((t: any) => ({
          ...t,
          basePrice: Number(t.basePrice),
          earlyBirdPrice: t.earlyBirdPrice ? Number(t.earlyBirdPrice) : null,
          surgeMultiplier: t.surgeMultiplier ? Number(t.surgeMultiplier) : null,
        })),
        seatingZones: event.seatingZones.map((z: any) => ({
          ...z,
          priceModifier: Number(z.priceModifier),
        })),
        ticketsSold,
        capacityRemaining,
        isSoldOut: capacityRemaining <= 0,
      }
    };
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    return { success: false, error: 'Failed to fetch event' };
  }
}

export async function deleteEvent(eventId: string) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    // Check if there are any active tickets before deleting
    const ticketsCount = await (prisma as any).ticket.count({
      where: {
        eventId,
        status: { in: ["RESERVED", "ISSUED"] }
      }
    });

    if (ticketsCount > 0) {
      throw new Error("Cannot delete event with active bookings. Cancel the event instead.");
    }

    await (prisma as any).event.delete({
      where: { id: eventId }
    });

    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "EVENTS",
        action: "DELETE_EVENT",
        details: { eventId },
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");

    return { success: true };
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, error: String(error) };
  }
}


// ============ PRICING LOGIC ============

function calculateTicketPrice(
  ticketType: any,
  seatSection?: any,
  bookingDate: Date = new Date()
): number {
  let price = Number(ticketType.basePrice);

  // Apply early-bird pricing
  if (
    ticketType.earlyBirdEndDate &&
    bookingDate < ticketType.earlyBirdEndDate &&
    ticketType.earlyBirdPrice
  ) {
    price = Number(ticketType.earlyBirdPrice);
  }

  // Apply section multiplier
  if (seatSection && seatSection.priceModifier) {
    price *= Number(seatSection.priceModifier);
  }

  return price;
}

async function applyDynamicPricing(
  eventId: string,
  ticketTypeId: string,
  bookingDate: Date = new Date()
): Promise<number> {
  try {
    const ticketType = await (prisma as any).eventTicketType.findUnique({
      where: { id: ticketTypeId },
      include: { event: true },
    });

    if (!ticketType) throw new Error("Ticket type not found");

    let price = Number(ticketType.basePrice);

    // Early-bird pricing
    if (
      ticketType.earlyBirdEndDate &&
      bookingDate < ticketType.earlyBirdEndDate &&
      ticketType.earlyBirdPrice
    ) {
      price = Number(ticketType.earlyBirdPrice);
    }
    // Surge pricing
    else if (
      ticketType.surgeThreshold &&
      ticketType.surgeMultiplier
    ) {
      const capacityPercentage =
        (ticketType.quantitySold / ticketType.maxQuantity) * 100;
      if (capacityPercentage >= ticketType.surgeThreshold) {
        price = Number(ticketType.basePrice) * Number(ticketType.surgeMultiplier);
      }
    }

    return price;
  } catch (error) {
    console.error("Error applying dynamic pricing:", error);
    return 0;
  }
}

// ============ TICKET BOOKING ============

export async function createTicketBooking(data: {
  eventSlug: string;
  ticketTypeId: string;
  quantity: number;
  seatSectionId?: string;
  attendeeDetails: Array<{
    name: string;
    email: string;
  }>;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
}) {
  try {
    // Get user
    let user = await prisma.user.findUnique({
      where: { clerkId: data.clerkId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: data.clerkId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });
    }

    // Get event
    const event = await (prisma as any).event.findUnique({
      where: { slug: data.eventSlug },
      include: {
        ticketTypes: true,
        seatingZones: true,
        refundPolicy: true,
      },
    });

    if (!event) throw new Error("Event not found");
    if (event.status !== "PUBLISHED")
      throw new Error("Event is not available for booking");

    // Get ticket type
    const ticketType = await (prisma as any).eventTicketType.findUnique({
      where: { id: data.ticketTypeId },
    });

    if (!ticketType) throw new Error("Ticket type not found");
    if (ticketType.eventId !== event.id)
      throw new Error("Ticket type does not belong to this event");

    // Check availability
    const availableTickets =
      ticketType.maxQuantity - ticketType.quantitySold;
    if (availableTickets < data.quantity) {
      if (availableTickets === 0) {
        // Suggest waitlist
        return {
          success: false,
          error: "SOLD_OUT",
          message: "This ticket type is sold out. Join the waitlist?",
        };
      }
      throw new Error(
        `Only ${availableTickets} tickets available`
      );
    }

    // Check seating capacity if applicable
    let seatSection;
    if (data.seatSectionId) {
      seatSection = await prisma.eventSeating.findUnique({
        where: { id: data.seatSectionId },
      });

      if (!seatSection) throw new Error("Seat section not found");
      if (
        seatSection.bookedCount + data.quantity >
        seatSection.capacity
      ) {
        throw new Error(
          `Seat section capacity exceeded. Only ${seatSection.capacity - seatSection.bookedCount} seats available.`
        );
      }
    }

    // Calculate price
    const ticketPrice = await applyDynamicPricing(
      event.id,
      data.ticketTypeId
    );
    const totalAmount = ticketPrice * data.quantity;

    // Create booking record
    const bookingRef = `WL-E-${Math.floor(1000 + Math.random() * 9000)}`;
    const booking = await (prisma as any).booking.create({
      data: {
        bookingRef,
        userId: user.id,
        serviceType: "EVENT" as any,
        status: "PENDING",
        paymentStatus: "PENDING",
        totalAmount: new Decimal(totalAmount),
        finalAmount: new Decimal(totalAmount),
        currency: "USD",
        eventId: event.id,
        ticketQuantity: data.quantity,
      },
    });

    // Create individual ticket records
    const tickets = await Promise.all(
      data.attendeeDetails.map((attendee) =>
        (prisma as any).ticket.create({
          data: {
            eventId: event.id,
            userId: user.id,
            ticketTypeId: data.ticketTypeId,
            seatSectionId: data.seatSectionId,
            attendeeName: attendee.name,
            attendeeEmail: attendee.email,
            pricePaid: new Decimal(ticketPrice),
            status: "RESERVED",
            qrCode: `QR-${booking.id.substring(0, 8)}-${Math.random().toString(36).substring(7)}`,
          },
        })
      )
    );

    // Update ticket type sold count
    await (prisma as any).eventTicketType.update({
      where: { id: data.ticketTypeId },
      data: { quantitySold: { increment: data.quantity } },
    });

    // Update seating if applicable
    if (data.seatSectionId) {
      await (prisma as any).eventSeating.update({
        where: { id: data.seatSectionId },
        data: { bookedCount: { increment: data.quantity } },
      });
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "EVENTS",
        action: "BOOK_TICKETS",
        details: {
          bookingId: booking.id,
          eventId: event.id,
          quantity: data.quantity,
          amount: totalAmount,
        },
      },
    });

    revalidatePath("/portal/book");
    revalidatePath("/events");

    return {
      success: true,
      booking: {
        id: booking.id,
        bookingRef: booking.bookingRef,
        eventId: event.id,
        eventTitle: event.title,
        ticketType: ticketType.name,
        quantity: data.quantity,
        totalAmount,
        tickets,
      },
    };
  } catch (error) {
    console.error("Error creating ticket booking:", error);
    return { success: false, error: String(error) };
  }
}

// ============ WAITLIST ============

export async function addToWaitlist(data: {
  eventSlug: string;
  ticketTypeId: string;
  quantity: number;
  clerkId: string;
  email: string;
}) {
  try {
    // Get user
    let user = await prisma.user.findUnique({
      where: { clerkId: data.clerkId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: data.clerkId,
          email: data.email,
        },
      });
    }

    // Get event
    const event = await (prisma as any).event.findUnique({
      where: { slug: data.eventSlug },
    });

    if (!event) throw new Error("Event not found");

    // Get highest position
    const lastWaitlist = await (prisma as any).eventWaitlist.findFirst({
      where: {
        eventId: event.id,
        ticketTypeId: data.ticketTypeId,
      },
      orderBy: { position: "desc" },
    });

    const position = (lastWaitlist?.position || 0) + 1;

    // Create waitlist entry
    const waitlistEntry = await (prisma as any).eventWaitlist.create({
      data: {
        eventId: event.id,
        userId: user.id,
        ticketTypeId: data.ticketTypeId,
        quantity: data.quantity,
        position,
        status: "WAITING",
      },
    });

    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "EVENTS",
        action: "JOIN_WAITLIST",
        details: {
          eventId: event.id,
          position,
        },
      },
    });

    return {
      success: true,
      waitlistEntry: {
        id: waitlistEntry.id,
        position: waitlistEntry.position,
        eventTitle: event.title,
      },
    };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return { success: false, error: String(error) };
  }
}

export async function getEventWaitlist(eventId: string) {
  try {
    const waitlist = await (prisma as any).eventWaitlist.findMany({
      where: { eventId },
      include: { user: true },
      orderBy: { position: "asc" },
    });

    return waitlist;
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return [];
  }
}

export async function promoteFromWaitlist(
  eventId: string,
  ticketTypeId: string,
  availableTickets: number
) {
  try {
    const waitlistEntries = await (prisma as any).eventWaitlist.findMany({
      where: {
        eventId,
        ticketTypeId,
        status: "WAITING",
      },
      orderBy: { position: "asc" },
      take: availableTickets,
    });

    for (const entry of waitlistEntries) {
      await (prisma as any).eventWaitlist.update({
        where: { id: entry.id },
        data: {
          status: "PROMOTED",
          promotedAt: new Date(),
        },
      });

      // In a real implementation, send email notification here
      console.log(
        `Promoted user ${entry.userId} from waitlist position ${entry.position}`
      );
    }

    return { success: true, promoted: waitlistEntries.length };
  } catch (error) {
    console.error("Error promoting waitlist:", error);
    return { success: false, error: String(error) };
  }
}

// ============ REFUNDS ============

export async function processRefund(
  bookingId: string,
  reason?: string
) {
  try {
    const booking = await (prisma as any).booking.findUnique({
      where: { id: bookingId },
      include: {
        user: true,
      },
    });

    if (!booking || !(booking as any).eventId)
      throw new Error("Invalid booking or no event associated");

    const event = await (prisma as any).event.findUnique({
      where: { id: (booking as any).eventId },
      include: { refundPolicy: true },
    });

    if (!event) throw new Error("Event not found");

    // Calculate refund amount
    let refundPercentage = 0;
    if (event.refundPolicy) {
      const daysUntilEvent = Math.floor(
        (event.startDate.getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (daysUntilEvent > event.refundPolicy.cancellationDeadlineDays) {
        refundPercentage =
          event.refundPolicy.refundPercentageBeforeDeadline;
      } else if (daysUntilEvent > 0) {
        refundPercentage =
          event.refundPolicy.refundPercentageAfterDeadline;
      } else {
        refundPercentage =
          event.refundPolicy.refundPercentageAfterEvent;
      }
    }

    const refundAmount =
      Number(booking.finalAmount) * (refundPercentage / 100);

    // Update booking and tickets
    await (prisma as any).booking.update({
      where: { id: bookingId },
      data: {
        status: "CANCELLED",
        paymentStatus: "REFUNDED",
      },
    });

    // Update ticket statuses and free up capacity
    const tickets = await (prisma as any).ticket.findMany({
      where: {
        eventId: booking.eventId,
        userId: booking.userId,
        status: { in: ["AVAILABLE", "ISSUED"] },
      },
    });

    for (const ticket of tickets) {
      await (prisma as any).ticket.update({
        where: { id: ticket.id },
        data: {
          status: "REFUNDED",
          refundedAt: new Date(),
        },
      });

      // Free up seating
      if (ticket.seatSectionId) {
        await (prisma as any).eventSeating.update({
          where: { id: ticket.seatSectionId },
          data: { bookedCount: { decrement: 1 } },
        });
      }
    }

    // Decrement ticket type sold count
    if (booking.ticketQuantity) {
      await (prisma as any).eventTicketType.updateMany({
        where: {
          eventId: booking.eventId,
        },
        data: {
          quantitySold: {
            decrement: booking.ticketQuantity,
          },
        },
      });
    }

    // Try to promote waitlist
    if (booking.ticketQuantity) {
      const waitlistTicketTypeId = tickets[0]?.ticketTypeId;
      if (waitlistTicketTypeId) {
        await promoteFromWaitlist(
          booking.eventId,
          waitlistTicketTypeId,
          booking.ticketQuantity
        );
      }
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: booking.userId,
        module: "EVENTS",
        action: "PROCESS_REFUND",
        details: {
          bookingId,
          refundAmount,
          refundPercentage,
          reason,
        },
      },
    });

    return {
      success: true,
      refund: {
        bookingId,
        originalAmount: Number(booking.finalAmount),
        refundAmount,
        refundPercentage,
      },
    };
  } catch (error) {
    console.error("Error processing refund:", error);
    return { success: false, error: String(error) };
  }
}

// ============ BUNDLED BOOKINGS ============

export async function createBundledEventTourBooking(data: {
  eventSlug: string;
  ticketTypeId: string;
  quantity: number;
  tourSlug: string;
  attendeeDetails: Array<{ name: string; email: string }>;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  tourStartDate: string;
  tourEndDate: string;
  tourGuestCount: number;
  tourTotalAmount: number;
}) {
  try {
    // Create ticket booking
    const ticketResult = await createTicketBooking({
      eventSlug: data.eventSlug,
      ticketTypeId: data.ticketTypeId,
      quantity: data.quantity,
      attendeeDetails: data.attendeeDetails,
      clerkId: data.clerkId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    if (!ticketResult.success) {
      return ticketResult;
    }

    // Import and call tour booking (avoid circular dependency)
    const bookingActions = await import('./bookingActions');
    const { createTourBooking } = bookingActions;

    const tourResult = await createTourBooking({
      tourSlug: data.tourSlug,
      tourName: "", // Will be looked up
      startDate: data.tourStartDate,
      endDate: data.tourEndDate,
      guestCount: data.tourGuestCount,
      totalAmount: data.tourTotalAmount,
      clerkId: data.clerkId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    if (!tourResult.success) {
      return tourResult;
    }

    // Link both bookings via bundledTourBookingId
    const user = await prisma.user.findUnique({
      where: { clerkId: data.clerkId },
    });

    if (user) {
      const eventBooking = await prisma.booking.findUnique({
        where: { id: (ticketResult as any).booking.id },
      });

      if (eventBooking) {
        await (prisma as any).booking.update({
          where: { id: eventBooking.id },
          data: {
            bundledTourBookingId: (tourResult as any).booking.id,
          },
        });
      }
    }

    revalidatePath("/portal/book");

    return {
      success: true,
      bookings: {
        eventBooking: (ticketResult as any).booking,
        tourBooking: (tourResult as any).booking,
      },
    };
  } catch (error) {
    console.error("Error creating bundled booking:", error);
    return { success: false, error: String(error) };
  }
}
