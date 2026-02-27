"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

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

    // Handle complex sorting in JS for now as Prisma relational sorting (like min price of rooms) can be tricky
    const sortedHotels = [...hotels];
    if (filters.sortBy === 'Price: Low to High') {
        sortedHotels.sort((a, b) => {
            const minPriceA = Math.min(...a.rooms.map(r => Number(r.pricePerNight)));
            const minPriceB = Math.min(...b.rooms.map(r => Number(r.pricePerNight)));
            return (isFinite(minPriceA) ? minPriceA : 0) - (isFinite(minPriceB) ? minPriceB : 0);
        });
    } else if (filters.sortBy === 'Price: High to Low') {
        sortedHotels.sort((a, b) => {
            const minPriceA = Math.min(...a.rooms.map(r => Number(r.pricePerNight)));
            const minPriceB = Math.min(...b.rooms.map(r => Number(r.pricePerNight)));
            return (isFinite(minPriceB) ? minPriceB : 0) - (isFinite(minPriceA) ? minPriceA : 0);
        });
    }

    return JSON.parse(JSON.stringify(sortedHotels));
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
}
