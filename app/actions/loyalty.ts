"use server";

import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function claimDailyReward() {
  const { userId: clerkId } = await auth();
  
  if (!clerkId) {
    throw new Error("Unauthorized");
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true }
    });

    if (!dbUser) {
      return { success: false, error: "User not found" };
    }

    // Check if the user has claimed a reward in the last 24 hours
    const lastClaim = await prisma.activityLog.findFirst({
      where: {
        userId: dbUser.id,
        action: 'CLAIM_DAILY_REWARD',
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
        }
      }
    });

    if (lastClaim) {
      return { success: false, error: "Reward already claimed today. Come back tomorrow!" };
    }

    const updatedUser = await prisma.user.update({
      where: { id: dbUser.id },
      data: { 
        loyaltyPoints: { 
          increment: 100 
        },
        activityLogs: {
          create: {
            module: 'LOYALTY',
            action: 'CLAIM_DAILY_REWARD',
            details: { points: 100 }
          }
        }
      }
    });
    
    revalidatePath('/portal/loyalty');
    revalidatePath('/portal/dashboard');
    
    return { success: true, points: updatedUser.loyaltyPoints };
  } catch (error) {
    console.error("Error claiming daily reward:", error);
    return { success: false, error: "Failed to update points" };
  }
}

export async function redeemReward(rewardName: string, pointsCost: number) {
  const { userId: clerkId } = await auth();
  
  if (!clerkId) {
    throw new Error("Unauthorized");
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true, loyaltyPoints: true }
    });

    if (!dbUser) {
      return { success: false, error: "User not found" };
    }

    if (dbUser.loyaltyPoints < pointsCost) {
      return { success: false, error: "Insufficient points" };
    }

    const updatedUser = await prisma.user.update({
      where: { id: dbUser.id },
      data: { 
        loyaltyPoints: { 
          decrement: pointsCost 
        },
        activityLogs: {
          create: {
            module: 'LOYALTY',
            action: 'REDEEM_REWARD',
            details: { reward: rewardName, points: pointsCost }
          }
        }
      }
    });
    
    revalidatePath('/portal/loyalty');
    revalidatePath('/portal/dashboard');
    
    return { success: true, points: updatedUser.loyaltyPoints };
  } catch (error) {
    console.error("Error redeeming reward:", error);
    return { success: false, error: "Failed to redeem reward" };
  }
}
