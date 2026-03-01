import { currentUser, auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('[API/Role] Starting role identification');
    
    // In Next.js 15 App Router, wrapping headers-accessing functions like 
    // auth() and currentUser() in Promise.race can break the async context
    // and cause a 500 error. Just await them sequentially.
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      console.log('[API/Role] User not authenticated');
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const primaryEmail = user.emailAddresses?.[0]?.emailAddress;
    const isAdminEmail = primaryEmail?.toLowerCase() === 'poweldayck@gmail.com';

    let dbUser = null;
    try {
      console.log(`[API/Role] Querying Prisma for user: ${userId}`);
      dbUser = await prisma.user.findUnique({
        where: { clerkId: userId },
        select: { role: true, email: true, firstName: true, lastName: true },
      });
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
