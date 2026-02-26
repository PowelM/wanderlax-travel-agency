import { prisma } from '../lib/prisma'

async function clearUserData(clerkId: string) {
  const user = await prisma.user.findUnique({
    where: { clerkId },
    include: {
      bookings: true,
      tourBookings: true,
      hotelBookings: true,
      carHireBookings: true,
    }
  })

  if (!user) {
    console.log('User not found')
    return
  }

  console.log(`Clearing data for user: ${user.email} (${user.id})`)

  // Delete dependent records first to maintain referential integrity
  
  // 1. Travelers in TourBookings
  await prisma.tourTraveler.deleteMany({
    where: {
      tourBooking: {
        userId: user.id
      }
    }
  })

  // 2. Invoices linked to Bookings
  await prisma.invoice.deleteMany({
    where: {
      booking: {
        userId: user.id
      }
    }
  })

  // 3. Payments
  await prisma.payment.deleteMany({
    where: { userId: user.id }
  })

  // 4. Activity Logs
  await prisma.activityLog.deleteMany({
    where: { userId: user.id }
  })

  // 5. Notifications
  await prisma.notification.deleteMany({
    where: { userId: user.id }
  })

  // 6. Wishlist Items
  await prisma.wishlistItem.deleteMany({
    where: { userId: user.id }
  })

  // 7. Appointments
  await prisma.appointment.deleteMany({
    where: {
      OR: [
        { clientId: user.id },
        { consultantId: user.id }
      ]
    }
  })

  // 8. Specific Service Bookings
  await prisma.tourBooking.deleteMany({
    where: { userId: user.id }
  })

  await prisma.hotelBooking.deleteMany({
    where: { userId: user.id }
  })

  await prisma.carHireBooking.deleteMany({
    where: { userId: user.id }
  })

  // 9. Central Booking table entries
  await prisma.booking.deleteMany({
    where: { userId: user.id }
  })

  console.log('All user-specific data cleared successfully.')
}

// In a real scenario, we'd get the clerkId from the auth session.
// For this cleanup tool, we'll need to specify which user to clear.
const targetClerkId = process.argv[2]
if (!targetClerkId) {
  console.error('Please provide a Clerk ID as an argument.')
  process.exit(1)
}

clearUserData(targetClerkId)
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
