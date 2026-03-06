"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

export async function createEventBooking(data: {
  userId: string;
  eventId: string;
  ticketCount: number;
  totalAmount: number;
  attendees: { name: string; email: string }[];
}) {
  try {
    return await prisma.$transaction(async (tx) => {
      // 1. Create the Event Booking
      const eventBooking = await tx.eventBooking.create({
        data: {
          userId: data.userId,
          eventId: data.eventId,
          ticketCount: data.ticketCount,
          totalAmount: data.totalAmount,
          status: 'CONFIRMED', // Assuming immediate confirmation for this flow
        },
      });

      // 2. Create the associated Booking record for the overarching system
      await tx.booking.create({
        data: {
          bookingRef: `EVT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
          userId: data.userId,
          serviceType: 'EVENT',
          status: 'CONFIRMED',
          paymentStatus: 'PAID', // Assuming paid for this flow
          totalAmount: data.totalAmount,
          finalAmount: data.totalAmount,
          eventBookingId: eventBooking.id,
        },
      });

      // 3. Generate individual tickets
      const ticketsData = data.attendees.map((attendee) => ({
        eventBookingId: eventBooking.id,
        ticketNumber: `TKT-${uuidv4().substring(0, 8).toUpperCase()}`,
        attendeeName: attendee.name,
        attendeeEmail: attendee.email,
        status: 'VALID' as const,
      }));

      await tx.ticket.createMany({
        data: ticketsData,
      });

      // 4. Update the event's sold tickets count
      await tx.event.update({
        where: { id: data.eventId },
        data: {
          soldTickets: {
            increment: data.ticketCount,
          },
        },
      });

      revalidatePath('/portal/tickets');
      revalidatePath(`/events`);
      return { success: true, eventBookingId: eventBooking.id };
    });
  } catch (error) {
    console.error("Error creating event booking:", error);
    return { success: false, error: "Failed to create event booking" };
  }
}

export async function getUserTickets(userId: string) {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        eventBooking: {
          userId: userId,
        },
      },
      include: {
        eventBooking: {
          include: {
            event: true,
          },
        },
      },
      orderBy: {
        eventBooking: {
          event: {
            startDate: 'asc',
          },
        },
      },
    });
    return { success: true, tickets };
  } catch (error) {
    console.error("Error fetching user tickets:", error);
    return { success: false, error: "Failed to fetch user tickets" };
  }
}

export async function getAllEventBookings() {
  try {
    const bookings = await prisma.eventBooking.findMany({
      include: {
        user: true,
        event: true,
        tickets: true,
        booking: true, // Overarching system booking
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, bookings };
  } catch (error) {
    console.error("Error fetching all event bookings:", error);
    return { success: false, error: "Failed to fetch event bookings" };
  }
}

export async function cancelTicket(id: string) {
  try {
    await prisma.ticket.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
    revalidatePath('/portal/tickets');
    revalidatePath('/admin/tickets');
    return { success: true };
  } catch (error) {
    console.error("Error cancelling ticket:", error);
    return { success: false, error: "Failed to cancel ticket" };
  }
}

export async function markTicketUsed(id: string) {
  try {
    await prisma.ticket.update({
      where: { id },
      data: { 
        status: 'USED',
        scannedAt: new Date(),
      },
    });
    revalidatePath('/admin/tickets');
    revalidatePath('/portal/tickets');
    return { success: true };
  } catch (error) {
    console.error("Error marking ticket used:", error);
    return { success: false, error: "Failed to mark ticket used" };
  }
}
