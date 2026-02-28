"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function toggleWishlistItem(itemType: string, itemId: string, path?: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Find user in DB
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const existingItem = await prisma.wishlistItem.findUnique({
    where: {
      userId_itemType_itemId: {
        userId: user.id,
        itemType,
        itemId,
      },
    },
  });

  if (existingItem) {
    await prisma.wishlistItem.delete({
      where: {
        id: existingItem.id,
      },
    });
  } else {
    await prisma.wishlistItem.create({
      data: {
        userId: user.id,
        itemType,
        itemId,
      },
    });
  }

  revalidatePath("/portal/dashboard");
  revalidatePath("/portal/wishlist");
  revalidatePath("/tours");
  if (path) {
    revalidatePath(path);
  }
}

export async function getWishlistItems() {
  const { userId } = await auth();

  if (!userId) {
    return [];
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      wishlistItems: true,
    },
  });

  return user?.wishlistItems || [];
}
