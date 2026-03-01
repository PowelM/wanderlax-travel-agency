import { prisma } from './lib/prisma';

async function testLoyalty() {
  console.log("Testing Loyalty System...");
  
  // Find a test user
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log("No user found to test with.");
    return;
  }

  console.log(`Testing with user ID: ${user.id}`);
  console.log(`Initial points: ${user.loyaltyPoints}`);

  // Check last claim
  const lastClaim = await prisma.activityLog.findFirst({
    where: {
      userId: user.id,
      action: 'CLAIM_DAILY_REWARD',
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    }
  });

  if (lastClaim) {
    console.log("User already claimed in the last 24h. Manual override for testing...");
    // For test purposes, we won't actually block here, but we'll see if it works
  } else {
    console.log("No recent claim found. Proceeding with claim...");
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        loyaltyPoints: { increment: 100 },
        activityLogs: {
          create: {
            module: 'LOYALTY',
            action: 'CLAIM_DAILY_REWARD',
            details: { points: 100 }
          }
        }
      },
      include: {
        activityLogs: {
          where: { module: 'LOYALTY' },
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      }
    });

    console.log(`Success! New points: ${updatedUser.loyaltyPoints}`);
    if (updatedUser.activityLogs.length > 0) {
      console.log(`New activity log created at: ${updatedUser.activityLogs[0].createdAt}`);
    } else {
      console.log("Warning: Activity log not found in response.");
    }
  } catch (error) {
    console.error("Test failed:", error);
  }
}

testLoyalty()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
