"use server";

import { prisma } from "@/lib/prisma";
import { BookingStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getAdminBookings() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            avatarUrl: true,
            role: true,
          }
        },
        carHireBooking: {
          include: {
            car: true,
          }
        },
        hotelBooking: {
          include: {
            hotel: true,
            room: true,
          }
        },
        tourBooking: {
          include: {
            tourPackage: {
              include: {
                destination: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    
    // Convert to plain object to handle Prisma Decimals crossing the Server/Client boundary
    return JSON.parse(JSON.stringify(bookings));
  } catch (error) {
    console.error("Error fetching admin bookings:", error);
    return [];
  }
}

export async function updateBookingStatus(id: string, newStatus: BookingStatus) {
  try {
    const updated = await prisma.booking.update({
      where: { id },
      data: { status: newStatus }
    });
    
    revalidatePath("/admin/bookings");
    return { success: true, booking: JSON.parse(JSON.stringify(updated)) };
  } catch (error) {
    console.error("Error updating booking status:", error);
    return { success: false, error: "Failed to update booking status" };
  }
}

export async function deleteBooking(id: string) {
  try {
    await prisma.booking.delete({
      where: { id }
    });
    
    revalidatePath("/admin/bookings");
    return { success: true };
  } catch (error) {
    console.error("Error deleting booking:", error);
    return { success: false, error: "Failed to delete booking" };
  }
}

export async function createManualBooking(data: {
  email: string;
  firstName: string;
  lastName: string;
  serviceType: import("@prisma/client").ServiceType;
  totalAmount: number;
}) {
  try {
    // Upsert user based on email
    let user = await prisma.user.findUnique({ where: { email: data.email } });
    
    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: `manual_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: "CUSTOMER",
        }
      });
    }

    const bookingRef = `WL-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    
    const newBooking = await prisma.booking.create({
      data: {
        bookingRef,
        userId: user.id,
        serviceType: data.serviceType,
        status: "PENDING",
        paymentStatus: "PENDING",
        totalAmount: data.totalAmount,
        finalAmount: data.totalAmount,
        currency: "USD",
      },
      include: {
        user: true,
      }
    });

    revalidatePath("/admin/bookings");
    return { success: true, booking: JSON.parse(JSON.stringify(newBooking)) };
  } catch (error) {
    console.error("Error creating manual booking:", error);
    return { success: false, error: "Failed to create booking." };
  }
}

export async function getUserItineraries(clerkId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        tourBookings: {
          include: {
            tourPackage: {
              include: {
                destination: true,
                itinerary: {
                  orderBy: {
                    dayNumber: 'asc'
                  }
                }
              }
            }
          },
          orderBy: {
            startDate: 'desc'
          }
        }
      }
    });

    if (!user) return [];

    return JSON.parse(JSON.stringify(user.tourBookings));
  } catch (error) {
    console.error("Error fetching user itineraries:", error);
    return [];
  }
}
export async function createTourBooking(data: {
  tourSlug: string;
  tourName: string;
  startDate: string;
  endDate: string;
  guestCount: number;
  totalAmount: number;
  specialRequirements?: string;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}) {
  try {
    // 1. Identify or Create User
    let user = await prisma.user.findUnique({ where: { clerkId: data.clerkId } });
    
    if (!user) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
      if (user) {
        // Link clerkId if user found by email
        user = await prisma.user.update({
          where: { id: user.id },
          data: { clerkId: data.clerkId }
        });
      } else {
        // Create new user
        user = await prisma.user.create({
          data: {
            clerkId: data.clerkId,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            avatarUrl: data.avatarUrl,
            role: "CUSTOMER",
          }
        });
      }
    }

    // 2. Find Tour Package
    const tourPackage = await prisma.tourPackage.findUnique({
      where: { slug: data.tourSlug }
    });

    if (!tourPackage) {
      // If slug doesn't match, try finding by name (fallback for static data)
      const fallbackTour = await prisma.tourPackage.findFirst({
        where: { title: { contains: data.tourName, mode: 'insensitive' } }
      });
      if (!fallbackTour) throw new Error(`Tour package not found: ${data.tourName}`);
      data.tourSlug = fallbackTour.slug;
    }

    const tourId = tourPackage?.id || (await prisma.tourPackage.findFirst({ where: { title: data.tourName } }))?.id;
    if (!tourId) throw new Error("Tour package not found");

    // 3. Create TourBooking
    const tourBooking = await prisma.tourBooking.create({
      data: {
        userId: user.id,
        tourPackageId: tourId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        guestCount: data.guestCount,
        totalAmount: data.totalAmount,
        status: "PENDING",
        specialRequirements: data.specialRequirements,
      }
    });

    // 4. Create Main Booking record
    const bookingRef = `WL-${Math.floor(1000 + Math.random() * 9000)}`;
    const mainBooking = await prisma.booking.create({
      data: {
        bookingRef,
        userId: user.id,
        serviceType: "TOUR_PACKAGE",
        tourBookingId: tourBooking.id,
        status: "PENDING",
        paymentStatus: "PENDING",
        totalAmount: data.totalAmount,
        finalAmount: data.totalAmount,
        currency: "USD",
      }
    });

    // 5. Log Activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "BOOKINGS",
        action: "CREATE",
        details: { bookingRef, tourName: data.tourName }
      }
    });

    revalidatePath("/portal/dashboard");
    revalidatePath("/admin/bookings");

    return { success: true, booking: JSON.parse(JSON.stringify(mainBooking)) };
  } catch (error) {
    console.error("Error creating tour booking:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to create booking" };
  }
}
export async function createHotelBooking(data: {
  hotelSlug: string;
  roomId: string;
  startDate: string;
  endDate: string;
  guestCount: number;
  totalAmount: number;
  specialRequirements?: string;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}) {
  try {
    // 1. Identify or Create User
    let user = await prisma.user.findUnique({ where: { clerkId: data.clerkId } });
    
    if (!user) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
      if (user) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { clerkId: data.clerkId }
        });
      } else {
        user = await prisma.user.create({
          data: {
            clerkId: data.clerkId,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            avatarUrl: data.avatarUrl,
            role: "CUSTOMER",
          }
        });
      }
    }

    // 2. Fetch Hotel and Room to verify IDs
    const hotel = await prisma.hotel.findUnique({
      where: { slug: data.hotelSlug }
    });
    if (!hotel) throw new Error("Hotel not found");

    const room = await prisma.hotelRoom.findUnique({
      where: { id: data.roomId }
    });
    if (!room) throw new Error("Room not found");

    const checkInDate = new Date(data.startDate);
    const checkOutDate = new Date(data.endDate);
    const totalNights = Math.max(1, Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)));

    // 3. Create HotelBooking
    const hotelBooking = await prisma.hotelBooking.create({
      data: {
        userId: user.id,
        hotelId: hotel.id,
        roomId: room.id,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guestsAdults: data.guestCount,
        guestsKids: 0,
        totalNights,
        pricePerNight: room.pricePerNight,
        totalAmount: data.totalAmount,
        status: "PENDING",
        specialRequests: data.specialRequirements,
      }
    });

    // 4. Create Main Booking record
    const bookingRef = `WL-H-${Math.floor(1000 + Math.random() * 9000)}`;
    const mainBooking = await prisma.booking.create({
      data: {
        bookingRef,
        userId: user.id,
        serviceType: "HOTEL_STAY" as import("@prisma/client").ServiceType,
        hotelBookingId: hotelBooking.id,
        status: "PENDING",
        paymentStatus: "PENDING",
        totalAmount: data.totalAmount,
        finalAmount: data.totalAmount,
        currency: "USD",
      }
    });

    // 5. Log Activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        module: "BOOKINGS",
        action: "CREATE",
        details: { bookingRef, hotelName: hotel.name, roomName: room.name }
      }
    });

    revalidatePath("/portal/dashboard");
    revalidatePath("/admin/bookings");

    return { success: true, booking: JSON.parse(JSON.stringify(mainBooking)) };
  } catch (error) {
    console.error("Error creating hotel booking:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to create booking" };
  }
}
