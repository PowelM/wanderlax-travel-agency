import { currentUser, auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('[API/Role] Starting role identification');
    
    // Wrap Clerk calls in a timeout race to prevent hanging
    const clerkData = await Promise.race([
      Promise.all([auth(), currentUser()]),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Clerk API timeout')), 10000)
      )
    ]);

    const [{ userId }, user] = clerkData;

    if (!userId || !user) {
      console.log('[API/Role] User not authenticated');
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const primaryEmail = user.emailAddresses?.[0]?.emailAddress;
    const isAdminEmail = primaryEmail?.toLowerCase() === 'poweldayck@gmail.com';

    // Look up user in database by Clerk ID with a potential timeout wrapper
    let dbUser = null;
    try {
      console.log(`[API/Role] Querying Prisma for user: ${userId}`);
      // Add a simple timeout race for Prisma
      dbUser = await Promise.race([
        prisma.user.findUnique({
          where: { clerkId: userId },
          select: { role: true, email: true, firstName: true, lastName: true },
        }),
        new Promise<null>((_, reject) => setTimeout(() => reject(new Error('Prisma timeout')), 5000))
      ]);
      console.log(`[API/Role] Prisma returned: ${dbUser ? 'User found' : 'User not found'}`);
    } catch (error: unknown) {
      console.error("[API/Role] Error fetching user role in /api/auth/role:", error);
    }

    if (!dbUser) {
      console.log('[API/Role] Falling back to default role');
      return NextResponse.json({
        role: isAdminEmail ? 'ADMIN' : 'CUSTOMER',
        email: primaryEmail,
        synced: false,
      })
    }

    return NextResponse.json({
      role: dbUser.role,
      email: dbUser.email,
      firstName: dbUser.firstName,
      lastName: dbUser.lastName,
      synced: true,
    })
  } catch (error: unknown) {
    console.error('[API/Role] Internal server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
