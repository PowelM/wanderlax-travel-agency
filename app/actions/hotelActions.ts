"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export interface HotelFilters {
  destination?: string;
  minPrice?: number;
  maxPrice?: number;
  starRatings?: number[];
  amenities?: string[];
  sortBy?: string;
}

export async function getHotels(filters: HotelFilters = {}) {
  try {
    const where: Prisma.HotelWhereInput = {
      isActive: true,
    };

    if (filters.destination) {
      where.destination = {
        name: {
          contains: filters.destination,
          mode: 'insensitive',
        },
      };
    }

    if (filters.starRatings && filters.starRatings.length > 0) {
      where.starRating = {
        in: filters.starRatings.map(rating => {
          switch (rating) {
            case 1: return 'ONE_STAR';
            case 2: return 'TWO_STAR';
            case 3: return 'THREE_STAR';
            case 4: return 'FOUR_STAR';
            case 5: return 'FIVE_STAR';
            default: return 'UNRATED';
          }
        }),
      };
    }

    if (filters.amenities && filters.amenities.length > 0) {
      where.amenities = {
        hasEvery: filters.amenities,
      };
    }

    // Since price is on the room, we need to find hotels that have rooms within the price range
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      where.rooms = {
        some: {
          pricePerNight: {
            gte: filters.minPrice,
            lte: filters.maxPrice,
          }
        }
      }
    }

    let orderBy: Prisma.HotelOrderByWithRelationInput = {
      createdAt: 'desc'
    };

    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'Price: Low to High':
               // Note: Sorting by a relation's aggregate isn't directly supported in a single query like this easily if there are multiple rooms.
               // For simplicity, we might sort by the lowest room price if possible, or handle it in JS.
               // Let's stick with simple sorting for now and handle complex ones on the client or via a more complex query if needed.
               // A simplified approach is just fetching and sorting in memory if the dataset isn't huge, but doing it in DB is better.
                break;
            case 'Price: High to Low':
                break;
            case 'Top Rated':
                 orderBy = {
                     starRating: 'desc'
                 };
                break;
            default:
                break;
        }
    }


    const hotels = await prisma.hotel.findMany({
      where,
      include: {
        destination: true,
        rooms: true,
        reviews: true,
      },
      orderBy,
    });

    const sortedHotels = [...hotels];
    if (filters.sortBy === 'Price: Low to High') {
        sortedHotels.sort((a, b) => {
            const minPriceA = a.rooms.length > 0 ? Math.min(...a.rooms.map(r => Number(r.pricePerNight))) : Infinity;
            const minPriceB = b.rooms.length > 0 ? Math.min(...b.rooms.map(r => Number(r.pricePerNight))) : Infinity;
            return minPriceA - minPriceB;
        });
    } else if (filters.sortBy === 'Price: High to Low') {
        sortedHotels.sort((a, b) => {
            const minPriceA = a.rooms.length > 0 ? Math.min(...a.rooms.map(r => Number(r.pricePerNight))) : -Infinity;
            const minPriceB = b.rooms.length > 0 ? Math.min(...b.rooms.map(r => Number(r.pricePerNight))) : -Infinity;
            return minPriceB - minPriceA;
        });
    }

    return JSON.parse(JSON.stringify(sortedHotels));

  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
}

export async function getHotelBySlug(slug: string) {
  try {
    const hotel = await prisma.hotel.findUnique({
      where: { slug },
      include: {
        destination: true,
        rooms: {
          where: { isActive: true },
        },
        reviews: {
          include: {
            user: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!hotel) return null;

    return JSON.parse(JSON.stringify(hotel));
  } catch (error) {
    console.error("Error fetching hotel by slug:", error);
    return null;
  }
}

export async function getAdminHotels() {
  try {
    const hotels = await prisma.hotel.findMany({
      include: {
        destination: true,
        rooms: true,
        reviews: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return JSON.parse(JSON.stringify(hotels));
  } catch (error) {
    console.error("Error fetching admin hotels:", error);
    return [];
  }
}

export async function createHotel(data: Prisma.HotelUncheckedCreateInput) {
  try {
    const hotel = await prisma.hotel.create({
      data: {
        ...data,
        isActive: true,
      },
    });
    revalidatePath('/hotels');
    revalidatePath('/admin/hotels');
    return JSON.parse(JSON.stringify(hotel));
  } catch (error) {
    console.error("Error creating hotel:", error);
    return null;
  }
}

export async function updateHotel(id: string, data: Prisma.HotelUncheckedUpdateInput) {
  try {
    const hotel = await prisma.hotel.update({
      where: { id },
      data,
    });
    revalidatePath('/hotels');
    revalidatePath('/admin/hotels');
    revalidatePath(`/hotels/${hotel.slug}`);
    return JSON.parse(JSON.stringify(hotel));
  } catch (error) {
    console.error("Error updating hotel:", error);
    return null;
  }
}

export async function deleteHotel(id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // Find all hotel bookings for this hotel
      const hotelBookings = await tx.hotelBooking.findMany({
        where: { hotelId: id },
        select: { id: true },
      });
      const hotelBookingIds = hotelBookings.map((b) => b.id);

      if (hotelBookingIds.length > 0) {
        // Find the Booking wrapper IDs that reference these HotelBookings
        const bookings = await tx.booking.findMany({
          where: { hotelBookingId: { in: hotelBookingIds } },
          select: { id: true },
        });
        const bookingIds = bookings.map((b) => b.id);

        if (bookingIds.length > 0) {
          // Payment → Booking has no onDelete: Cascade, must delete first
          await tx.payment.deleteMany({
            where: { bookingId: { in: bookingIds } },
          });
          // Invoice has onDelete: Cascade on Booking, but delete explicitly to be safe
          await tx.invoice.deleteMany({
            where: { bookingId: { in: bookingIds } },
          });
          // Now delete the Booking wrappers
          await tx.booking.deleteMany({
            where: { id: { in: bookingIds } },
          });
        }

        // Now delete the HotelBookings themselves
        await tx.hotelBooking.deleteMany({
          where: { hotelId: id },
        });
      }

      // Delete reviews linked to this hotel
      await tx.review.deleteMany({
        where: { hotelId: id },
      });

      // Delete wishlist items referencing this hotel
      await tx.wishlistItem.deleteMany({
        where: { itemType: 'hotel', itemId: id },
      });

      // HotelRoom already has onDelete: Cascade so rooms are handled automatically.
      // Delete the hotel itself
      await tx.hotel.delete({ where: { id } });
    });

    revalidatePath('/hotels');
    revalidatePath('/admin/hotels');
    return { success: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error deleting hotel:", message);
    return { success: false, error: message };
  }
}
export async function getRoomById(id: string) {
  try {
    const room = await prisma.hotelRoom.findUnique({
      where: { id },
    });
    return JSON.parse(JSON.stringify(room));
  } catch (error) {
    console.error("Error fetching room by id:", error);
    return null;
  }
}

export async function getHotelById(id: string) {
  try {
    const hotel = await prisma.hotel.findUnique({
      where: { id },
      include: {
        destination: true,
      },
    });
    return JSON.parse(JSON.stringify(hotel));
  } catch (error) {
    console.error("Error fetching hotel by id:", error);
    return null;
  }
}
