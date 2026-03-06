"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getEvents() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { startDate: 'asc' },
    });
    return { success: true, events };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { success: false, error: "Failed to fetch events" };
  }
}

export async function getUpcomingEvents() {
  try {
    const events = await prisma.event.findMany({
      where: {
        status: 'UPCOMING',
        startDate: {
          gt: new Date()
        }
      },
      orderBy: { startDate: 'asc' },
    });
    return { success: true, events };
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return { success: false, error: "Failed to fetch upcoming events" };
  }
}

export async function getEventBySlug(slug: string) {
  try {
    const event = await prisma.event.findUnique({
      where: { slug },
    });
    if (!event) return { success: false, error: "Event not found" };
    return { success: true, event };
  } catch (error) {
    console.error("Error fetching event:", error);
    return { success: false, error: "Failed to fetch event" };
  }
}

export async function getEventById(id: string) {
  try {
    const event = await prisma.event.findUnique({
      where: { id },
    });
    if (!event) return { success: false, error: "Event not found" };
    return { success: true, event };
  } catch (error) {
    console.error("Error fetching event:", error);
    return { success: false, error: "Failed to fetch event" };
  }
}

export async function createEvent(data: any) {
  try {
    const event = await prisma.event.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        category: data.category,
        status: data.status,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        location: data.location,
        price: data.price,
        capacity: data.capacity,
        images: data.images || [],
        featured: data.featured || false,
      },
    });
    revalidatePath('/admin/events');
    revalidatePath('/events');
    return { success: true, event };
  } catch (error) {
    console.error("Error creating event:", error);
    return { success: false, error: "Failed to create event" };
  }
}

export async function updateEvent(id: string, data: any) {
  try {
    const event = await prisma.event.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        category: data.category,
        status: data.status,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        location: data.location,
        price: data.price,
        capacity: data.capacity,
        images: data.images || [],
        featured: data.featured,
      },
    });
    revalidatePath('/admin/events');
    revalidatePath('/events');
    revalidatePath(`/events/${event.slug}`);
    return { success: true, event };
  } catch (error) {
    console.error("Error updating event:", error);
    return { success: false, error: "Failed to update event" };
  }
}

export async function deleteEvent(id: string) {
  try {
    await prisma.event.delete({
      where: { id },
    });
    revalidatePath('/admin/events');
    revalidatePath('/events');
    return { success: true };
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, error: "Failed to delete event" };
  }
}
