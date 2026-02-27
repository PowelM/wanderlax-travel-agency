const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Check if destination exists
  let destination = await prisma.destination.findFirst({
    where: { name: 'Tanzania' }
  });

  if (!destination) {
    destination = await prisma.destination.create({
      data: {
        name: 'Tanzania',
        slug: 'tanzania',
        country: 'Tanzania',
        continent: 'Africa',
        description: 'Home to the Serengeti and Mount Kilimanjaro',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAae9-jgMtfLY4pZTb4At9kVVP0UyuN4ztEK3DfJyYBEKE971nIMS6zfggnNE4222TwuLC9qq0YmB-tqps4gRz_4oHkWZu9FTcu9RMCYyonHusYO-t0KIyenuZ8ZhATYeUgTkbssukdVW9eAHzo_46bLV52y6MCPq0dWHG8YQ99Mu3q8btP2iMLF8PpevjJAP4ut8hFo5YouwpHeIpWZ_7NQ0NAOtm2TMlTWUGl25gZSucltOaB_RiK03g-jT6fU2EwpDsbOLiFhg'],
        featured: true
      }
    });
    console.log('Created Destination: Tanzania');
  }

  // Create the tour package
  const tourName = 'The Royal Serengeti Safari';
  const slug = 'the-royal-serengeti-safari';

  let tour = await prisma.tourPackage.findUnique({
    where: { slug }
  });

  if (!tour) {
    tour = await prisma.tourPackage.create({
      data: {
        destinationId: destination.id,
        title: tourName,
        slug: slug,
        category: 'SAFARI',
        overview: 'Immerse yourself in the wild heart of Africa with our exclusive 10-day safari. Experience private game drives, luxury tented camps, and intimate encounters with the Big Five.',
        durationDays: 10,
        durationNights: 9,
        basePrice: 12000.00,
        groupSizeMin: 1,
        groupSizeMax: 10,
        included: ['Accommodation', 'Meals', 'Game Drives', 'Transfers'],
        excluded: ['International Flights', 'Visas'],
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAae9-jgMtfLY4pZTb4At9kVVP0UyuN4ztEK3DfJyYBEKE971nIMS6zfggnNE4222TwuLC9qq0YmB-tqps4gRz_4oHkWZu9FTcu9RMCYyonHusYO-t0KIyenuZ8ZhATYeUgTkbssukdVW9eAHzo_46bLV52y6MCPq0dWHG8YQ99Mu3q8btP2iMLF8PpevjJAP4ut8hFo5YouwpHeIpWZ_7NQ0NAOtm2TMlTWUGl25gZSucltOaB_RiK03g-jT6fU2EwpDsbOLiFhg']
      }
    });
    console.log(`Created TourPackage: ${tourName}`);
  } else {
    console.log(`TourPackage already exists: ${tourName}`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
