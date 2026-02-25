import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST() {
  const ADMIN_EMAIL = 'poweldayck@gmail.com'

  try {
    // Check if the user already exists by email
    const existingUser = await prisma.user.findUnique({
      where: { email: ADMIN_EMAIL },
    })

    if (existingUser) {
      // Update the existing user's role to ADMIN
      const updatedUser = await prisma.user.update({
        where: { email: ADMIN_EMAIL },
        data: { role: 'ADMIN' },
      })

      return NextResponse.json({
        message: 'Admin role updated successfully',
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          role: updatedUser.role,
        },
      })
    }

    return NextResponse.json({
      message: 'Admin user not found in database. Please sign up with poweldayck@gmail.com first, then call this endpoint again.',
      hint: 'The user will be auto-assigned ADMIN role on next sign-in via the webhook.',
    }, { status: 404 })
  } catch (error) {
    console.error('Error seeding admin:', error)
    return NextResponse.json({ error: 'Failed to seed admin user' }, { status: 500 })
  }
}
