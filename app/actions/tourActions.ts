"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAdminTours() {
  try {
    const tours = await prisma.tourPackage.findMany({
      include: {
        destination: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Convert to plain object to handle Prisma Decimals crossing the Server/Client boundary
    return JSON.parse(JSON.stringify(tours));
  } catch (error) {
    console.error("Error fetching admin tours:", error);
    return [];
  }
}

export async function getDestinations() {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, country: true },
    });
    return JSON.parse(JSON.stringify(destinations));
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
}

export async function getPublicTours() {
  try {
    const tours = await prisma.tourPackage.findMany({
      where: { status: "ACTIVE" },
      include: {
        destination: true,
        reviews: { select: { rating: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return JSON.parse(JSON.stringify(tours));
  } catch (error) {
    console.error("Error fetching public tours:", error);
    return [];
  }
}

export interface TourFormData {
  destinationId: string;
  title: string;
  slug: string;
  category: string;
  overview: string;
  durationDays: number;
  durationNights: number;
  basePrice: number;
  groupSizeMin: number;
  groupSizeMax: number;
  included: string[];
  excluded: string[];
  images: string[];
  status: string;
}

export async function createTour(data: TourFormData) {
  try {
    const tour = await prisma.tourPackage.create({
      data: {
        destinationId: data.destinationId,
        title: data.title,
        slug: data.slug,
        category: data.category as "SAFARI" | "BEACH" | "CULTURAL" | "ADVENTURE" | "HONEYMOON" | "FAMILY",
        overview: data.overview,
        durationDays: data.durationDays,
        durationNights: data.durationNights,
        basePrice: data.basePrice,
        groupSizeMin: data.groupSizeMin,
        groupSizeMax: data.groupSizeMax,
        included: data.included,
        excluded: data.excluded,
        images: data.images,
        status: data.status,
      },
    });

    revalidatePath("/admin/tours");
    revalidatePath("/tours");
    return { success: true, tour: JSON.parse(JSON.stringify(tour)) };
  } catch (error) {
    console.error("Error creating tour:", error);
    return { success: false, error: "Failed to create tour" };
  }
}

export async function updateTour(id: string, data: Partial<TourFormData>) {
  try {
    const updateData: Record<string, unknown> = { ...data };
    if (data.category) {
      updateData.category = data.category as "SAFARI" | "BEACH" | "CULTURAL" | "ADVENTURE" | "HONEYMOON" | "FAMILY";
    }

    const tour = await prisma.tourPackage.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/tours");
    revalidatePath("/tours");
    return { success: true, tour: JSON.parse(JSON.stringify(tour)) };
  } catch (error) {
    console.error("Error updating tour:", error);
    return { success: false, error: "Failed to update tour" };
  }
}

export async function updateTourStatus(id: string, newStatus: string) {
  try {
    const updated = await prisma.tourPackage.update({
      where: { id },
      data: { status: newStatus },
    });

    revalidatePath("/admin/tours");
    revalidatePath("/tours");
    return { success: true, tour: JSON.parse(JSON.stringify(updated)) };
  } catch (error) {
    console.error("Error updating tour status:", error);
    return { success: false, error: "Failed to update tour status" };
  }
}

export async function deleteTour(id: string) {
  try {
    await prisma.tourPackage.delete({
      where: { id },
    });

    revalidatePath("/admin/tours");
    revalidatePath("/tours");
    return { success: true };
  } catch (error) {
    console.error("Error deleting tour:", error);
    return { success: false, error: "Failed to delete tour" };
  }
}
