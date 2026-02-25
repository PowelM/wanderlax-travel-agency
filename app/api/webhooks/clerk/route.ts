import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured verifying webhook', {
      status: 400,
    })
  }

  // Handle the event
  const eventType = evt.type

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url, phone_numbers } = evt.data
    const primaryEmail = email_addresses?.[0]?.email_address
    const primaryPhone = phone_numbers?.[0]?.phone_number

    if (!primaryEmail) {
      return new Response('Error: No email address found', { status: 400 })
    }

    // Auto-detect admin role based on email
    const ADMIN_EMAIL = 'poweldayck@gmail.com'
    const userRole = primaryEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? 'ADMIN' : 'CUSTOMER'

    try {
      await prisma.user.upsert({
        where: { clerkId: id },
        update: {
          email: primaryEmail,
          firstName: first_name,
          lastName: last_name,
          avatarUrl: image_url,
          phone: primaryPhone,
          role: userRole,
        },
        create: {
          clerkId: id,
          email: primaryEmail,
          firstName: first_name,
          lastName: last_name,
          avatarUrl: image_url,
          phone: primaryPhone,
          role: userRole,
        },
      })
    } catch (error) {
      console.error('Error syncing user:', error)
      return new Response('Error saving user sync', { status: 500 })
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data

    if (id) {
       try {
        await prisma.user.delete({
          where: { clerkId: id },
        })
       } catch(error) {
         console.error('Error deleting user:', error)
         return new Response('Error deleting user sync', { status: 500 })
       }
    }
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
