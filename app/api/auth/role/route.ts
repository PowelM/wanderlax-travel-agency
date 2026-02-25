import { currentUser } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const user = await currentUser()

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Look up user in database by Clerk ID
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      select: { role: true, email: true, firstName: true, lastName: true },
    })

    if (!dbUser) {
      // User exists in Clerk but not yet synced to DB — return default role
      return NextResponse.json({
        role: 'CUSTOMER',
        email: user.emailAddresses?.[0]?.emailAddress,
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
