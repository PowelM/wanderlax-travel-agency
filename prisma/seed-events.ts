import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding events...");

  // Clear existing events (optional, comment out to preserve)
  // await prisma.event.deleteMany({});

  const events = [
    {
      title: "Tech Summit 2024",
      slug: "tech-summit-2024",
      description:
        "Join industry leaders for 3 days of cutting-edge tech talks, networking, and workshops. Explore AI, cloud computing, and web3 innovation.",
      destination: "San Francisco, USA",
      startDate: new Date("2024-06-15"),
      endDate: new Date("2024-06-17"),
      totalCapacity: 500,
      category: "CONFERENCE" as const,
      organizer: "Tech Events Inc.",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178f50fcff1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      highlights: [
        "Keynote speeches from industry legends",
        "Hands-on technical workshops",
        "Exclusive networking sessions",
        "Complimentary meals and beverages",
        "Certificate of attendance",
      ],
    },
    {
      title: "Jazz Festival Under the Stars",
      slug: "jazz-festival-2024",
      description:
        "Experience world-class jazz performances from renowned musicians in an intimate outdoor setting. Three nights of pure musical magic.",
      destination: "New Orleans, USA",
      startDate: new Date("2024-07-20"),
      endDate: new Date("2024-07-22"),
      totalCapacity: 800,
      category: "CONCERT" as const,
      organizer: "Jazz Traditions",
      images: [
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      highlights: [
        "5 superb jazz bands from around the world",
        "Gourmet local cuisine",
        "VIP lounge access",
        "Live radio broadcast",
      ],
    },
    {
      title: "Wine Tasting Masterclass",
      slug: "wine-tasting-masterclass",
      description:
        "Learn from certified sommeliers the art of wine appreciation. Taste premium wines from Bordeaux, Tuscany, and Napa Valley.",
      destination: "Napa Valley, USA",
      startDate: new Date("2024-05-10"),
      endDate: new Date("2024-05-10"),
      totalCapacity: 100,
      category: "EXPERIENCE" as const,
      organizer: "Wine Academy",
      images: [
        "https://images.unsplash.com/photo-1510812431401-41d2cab2707c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      highlights: [
        "Tasting of 12 premium wines",
        "3-course gourmet meal paired with wines",
        "Take-home wine selection",
        "Certificate of completion",
      ],
    },
    {
      title: "Digital Marketing Workshop",
      slug: "digital-marketing-workshop",
      description:
        "Master the latest digital marketing strategies including SEO, content marketing, social media, and paid advertising. Perfect for entrepreneurs and marketers.",
      destination: "London, UK",
      startDate: new Date("2024-04-22"),
      endDate: new Date("2024-04-23"),
      totalCapacity: 200,
      category: "WORKSHOP" as const,
      organizer: "Marketing Masters",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      highlights: [
        "Live case studies from successful campaigns",
        "Hands-on practical training",
        "Marketing tools access",
        "Networking with industry experts",
        "Lunch and refreshments included",
      ],
    },
  ];

  for (const eventData of events) {
    const existingEvent = await prisma.event.findUnique({
      where: { slug: eventData.slug },
    });

    if (existingEvent) {
      console.log(`⏭️  Skipping ${eventData.title} (already exists)`);
      continue;
    }

    const event = await prisma.event.create({
      data: {
        ...eventData,
        status: "PUBLISHED" as const,
        ticketTypes: {
          create: [
            {
              name: "General Admission",
              basePrice: 99,
              maxQuantity: 300,
              earlyBirdEndDate: new Date(
                new Date(eventData.startDate).getTime() - 30 * 24 * 60 * 60 * 1000
              ),
              earlyBirdPrice: 79,
            },
            {
              name: "VIP",
              basePrice: 249,
              maxQuantity: 100,
              earlyBirdEndDate: new Date(
                new Date(eventData.startDate).getTime() - 30 * 24 * 60 * 60 * 1000
              ),
              earlyBirdPrice: 199,
            },
            {
              name: "Premium",
              basePrice: 399,
              maxQuantity: 50,
              earlyBirdEndDate: new Date(
                new Date(eventData.startDate).getTime() - 30 * 24 * 60 * 60 * 1000
              ),
              earlyBirdPrice: 329,
            },
          ],
        },
        seatingZones: {
          create: [
            {
              sectionName: "General Floor",
              capacity: 300,
              priceModifier: 1.0,
            },
            {
              sectionName: "VIP Section",
              capacity: 100,
              priceModifier: 1.5,
            },
            {
              sectionName: "Premium Box",
              capacity: 50,
              priceModifier: 2.0,
            },
          ],
        },
        refundPolicy: {
          create: {
            cancellationDeadlineDays: 14,
            refundPercentageBeforeDeadline: 100,
            refundPercentageAfterDeadline: 50,
            refundPercentageAfterEvent: 0,
          },
        },
      },
      include: {
        ticketTypes: true,
        seatingZones: true,
        refundPolicy: true,
      },
    });

    console.log(`✅ Created event: ${event.title}`);
  }

  console.log("✨ Events seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
