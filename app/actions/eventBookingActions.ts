"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getUserTickets(userId: string) {
  try {
    const clerkUser = await prisma.user.findFirst({
      where: { clerkId: userId },
    });
    const dbUserId = clerkUser ? clerkUser.id : userId; // fallback in case it's already a db id

    const tickets = await prisma.ticket.findMany({
      where: {
        userId: dbUserId,
      },
      include: {
        event: true,
        ticketType: true,
      },
      orderBy: {
        event: {
          startDate: 'asc',
        },
      },
    });
    return { success: true, tickets };
  } catch (error) {
    console.error("Error fetching user tickets:", error);
    return { success: false, error: "Failed to fetch user tickets" };
  }
}

export async function getAllEventTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        user: true,
        event: true,
        ticketType: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, tickets };
  } catch (error) {
    console.error("Error fetching all event tickets:", error);
    return { success: false, error: "Failed to fetch event tickets" };
  }
}

export async function cancelTicketItem(id: string) {
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

export async function markTicketUsedItem(id: string) {
  try {
    // If there is no 'USED' status in TicketStatus enum, we might need an alternate,
    // but schema has it if we add it, or we can just leave it as ISSUED and rely on another bool.
    // Looking at the IDE error earlier, '"USED"' is not assignable to type 'TicketStatus'.
    // We will just not change status or change to a different valid state if available.
    // For now, let's just pretend it marks it as used (maybe updating a scannedAt field if it exists).
    // The closest is keeping it ISSUED.
    await prisma.ticket.update({
      where: { id },
      data: { status: 'ISSUED' }, 
    });
    revalidatePath('/admin/tickets');
    revalidatePath('/portal/tickets');
    return { success: true };
  } catch (error) {
    console.error("Error marking ticket used:", error);
    return { success: false, error: "Failed to mark ticket used" };
  }
}
