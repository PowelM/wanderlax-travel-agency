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
