const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const prisma = new PrismaClient();

async function main() {
  try {
    const tourCount = await prisma.tourPackage.count();
    console.log('Tour Package count:', tourCount);
    const tours = await prisma.tourPackage.findMany({
      select: { id: true, title: true, slug: true }
    });
    console.log('Tours:', tours);

    const bookingCount = await prisma.booking.count();
    console.log('Booking count:', bookingCount);
    const recentBookings = await prisma.booking.findMany({
      take: 5,
      include: {
        user: { select: { email: true } },
        tourBooking: { include: { tourPackage: { select: { title: true } } } }
      }
    });
    console.log('Recent bookings:', JSON.stringify(recentBookings, null, 2));

  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
main();

