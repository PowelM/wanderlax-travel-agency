"use server";

import { prisma } from "@/lib/prisma";
import { Prisma, Car } from "@prisma/client";
import { revalidatePath } from "next/cache";

export interface CarFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  transmission?: string;
  fuelType?: string;
}

export async function getCars(filters?: CarFilters) {
  try {
    const whereClause: Prisma.CarWhereInput = {
      status: "AVAILABLE", // Only show available cars
    };

    if (filters) {
      if (filters.category) {
        whereClause.category = filters.category as Prisma.EnumCarCategoryFilter<"Car">;
      }
      
      if (filters.transmission) {
        whereClause.transmission = filters.transmission;
      }
      
      if (filters.fuelType) {
        whereClause.fuelType = filters.fuelType;
      }

      if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
        whereClause.dailyRate = {};
        if (filters.minPrice !== undefined) {
          whereClause.dailyRate.gte = filters.minPrice;
        }
        if (filters.maxPrice !== undefined) {
          whereClause.dailyRate.lte = filters.maxPrice;
        }
      }
    }

    const cars = await prisma.car.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Convert to plain object to handle Prisma Decimals crossing the Server/Client boundary
    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}

/** Admin-only: fetches ALL cars regardless of status */
export async function getAllCars() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: { createdAt: "desc" },
    });
    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.error("Error fetching all cars:", error);
    return [];
  }
}

export async function createCar(data: Partial<Omit<Car, "id" | "createdAt" | "updatedAt">> & { name?: string, type?: string, plate?: string, pricePerDay?: number, fuel?: string, image?: string }) {
  try {
    const car = await prisma.car.create({
      data: {
        make: data.name ? data.name.split(" ")[0] || "Unknown" : (data.make || "Unknown"),
        model: data.name ? data.name.split(" ").slice(1).join(" ") || data.name : (data.model || "Car"),
        year: data.year || new Date().getFullYear(),
        licensePlate: data.plate || data.licensePlate || `TEMP-${Date.now()}`,
        category: data.category || "SUV",
        capacity: data.capacity || 4, // Default
        transmission: data.transmission || "Automatic",
        fuelType: data.fuel || data.fuelType || "Petrol",
        dailyRate: data.pricePerDay || data.dailyRate || 200,
        images: data.images && data.images.length > 0 ? data.images : (data.image ? [data.image] : []),
        status: data.status || "AVAILABLE",
        mileage: data.mileage ? parseInt(data.mileage as unknown as string) : null,
        features: data.features && data.features.length > 0 ? data.features : (data.type ? [data.type] : []),
      },
    });
    revalidatePath('/car-hire');
    revalidatePath('/admin/fleet');
    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Error creating car:", error);
    throw new Error("Failed to create car");
  }
}

export async function updateCar(id: string, data: Partial<Car> & { name?: string, type?: string, plate?: string, pricePerDay?: number, fuel?: string, image?: string }) {
  try {
    const car = await prisma.car.update({
      where: { id },
      data: {
        make: data.name ? data.name.split(" ")[0] || "Unknown" : data.make,
        model: data.name ? data.name.split(" ").slice(1).join(" ") || data.name : data.model,
        licensePlate: data.plate || data.licensePlate,
        category: data.category,
        transmission: data.transmission,
        fuelType: data.fuel || data.fuelType,
        dailyRate: data.pricePerDay || data.dailyRate,
        status: data.status,
        mileage: data.mileage ? parseInt(data.mileage as unknown as string) : undefined,
        images: data.images && data.images.length > 0 ? data.images : (data.image ? [data.image] : undefined),
        features: data.features && data.features.length > 0 ? data.features : (data.type ? [data.type] : undefined),
      },
    });
    revalidatePath('/car-hire');
    revalidatePath('/admin/fleet');
    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Error updating car:", error);
    throw new Error("Failed to update car");
  }
}

export async function updateCarStatus(id: string, status: Car["status"]) {
  try {
    const car = await prisma.car.update({
      where: { id },
      data: { status },
    });
    revalidatePath('/car-hire');
    revalidatePath('/admin/fleet');
    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Error updating car status:", error);
    throw new Error("Failed to update car status");
  }
}

export async function deleteCar(id: string) {
  try {
    await prisma.car.delete({
      where: { id },
    });
    revalidatePath('/car-hire');
    revalidatePath('/admin/fleet');
    return { success: true };
  } catch (error) {
    console.error("Error deleting car:", error);
    throw new Error("Failed to delete car");
  }
}
