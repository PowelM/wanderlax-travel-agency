import { currentUser } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const user = await currentUser()

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const primaryEmail = user.emailAddresses?.[0]?.emailAddress;
    const isAdminEmail = primaryEmail?.toLowerCase() === 'poweldayck@gmail.com';

    // Look up user in database by Clerk ID
    let dbUser = null;
    try {
      dbUser = await prisma.user.findUnique({
        where: { clerkId: user.id },
        select: { role: true, email: true, firstName: true, lastName: true },
      })
    } catch (error) {
      console.error("Error fetching user role in /api/auth/role:", error);
    }

    if (!dbUser) {
      // User exists in Clerk but not yet synced to DB or DB failed
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
  } catch (error) {
    console.error('Error fetching user role:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
