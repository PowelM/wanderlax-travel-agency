const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const toursToSeed = [
  {
    title: 'Maldives Escape',
    description: '7 nights in an overwater villa with all-inclusive dining and private sunset cruises.',
    price: 5400,
    durationDays: 7,
    category: 'BEACH',
    destinationName: 'Maldives'
  },
  {
    title: 'Ancient Kyoto',
    description: 'Explore the historic temples, tea ceremonies, and bamboo forests of ancient Japan.',
    price: 3200,
    durationDays: 5,
    category: 'CULTURAL',
    destinationName: 'Japan' // Assuming Kyoto is already there or Japan
  },
  {
    title: 'Swiss Alpine Trek',
    description: 'Guided hiking tour through the breathtaking landscapes of Zermatt and Interlaken.',
    price: 4150,
    durationDays: 8,
    category: 'ADVENTURE',
    destinationName: 'Swiss Alps'
  },
  {
    title: 'Santorini Sunset',
    description: 'Experience the magic of the Aegean Sea with wine tasting and private yacht tours.',
    price: 3800,
    durationDays: 6,
    category: 'BEACH',
    destinationName: 'Greece'
  },
  {
    title: 'NYC Penthouse Week',
    description: 'Luxury stay in Manhattan with Broadway tickets and helicopter tour included.',
    price: 6200,
    durationDays: 5,
    category: 'CULTURAL',
    destinationName: 'United States'
  },
  {
    title: 'Mystic Machu Picchu',
    description: 'A guided journey through the Sacred Valley to the lost city of the Incas.',
    price: 2900,
    durationDays: 6,
    category: 'ADVENTURE',
    destinationName: 'Peru'
  }
];

async function main() {
  for (const tour of toursToSeed) {
    const slug = tour.title.toLowerCase().replace(/ /g, '-');
    
    // Create or find destination first based on some dummy info if not exists
    let dest = await prisma.destination.findFirst({
        where: { name: { contains: tour.destinationName, mode: 'insensitive' } }
    });

    if (!dest) {
        dest = await prisma.destination.create({
            data: {
                name: tour.destinationName,
                slug: tour.destinationName.toLowerCase().replace(/ /g, '-'),
                country: tour.destinationName,
                continent: 'Global',
                description: `Beautiful destination: ${tour.destinationName}`,
                images: []
            }
        });
    }

    const existingTour = await prisma.tourPackage.findFirst({
      where: { title: tour.title }
    });

    if (!existingTour) {
      await prisma.tourPackage.create({
        data: {
          destinationId: dest.id,
          title: tour.title,
          slug: slug,
          category: tour.category,
          overview: tour.description,
          durationDays: tour.durationDays,
          durationNights: tour.durationDays - 1,
          basePrice: tour.price,
          groupSizeMin: 1,
          groupSizeMax: 10,
          included: ['Accommodation'],
          excluded: [],
          images: [],
          status: 'ACTIVE'
        }
      });
      console.log(`Created: ${tour.title}`);
    } else {
      console.log(`Already exists: ${tour.title}`);
    }
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
