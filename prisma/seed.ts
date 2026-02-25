import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  console.log("🌍 Starting Wanderlux seed...");

  // Seed destinations
  const maldives = await prisma.destination.upsert({
    where: { slug: "maldives" },
    update: {},
    create: {
      name: "Maldives",
      slug: "maldives",
      country: "Maldives",
      continent: "Asia",
      description: "Crystal-clear waters, overwater villas, and pristine white-sand beaches make the Maldives the ultimate tropical paradise.",
      images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBTpBxYrTRuys4EpukZ7pAKpCdISHESgode32osxKs03Jl4Waja66Mw5rpWTbClN8vzRZOoaV7hHoGFJOc3r6Wwz6z8nDoJ1ewT9J7K0KCBqMMD-11M1JGivAFkt65uPLm8Zyajq5hkIVbswsthaHHGP0mg_AMYcOpazisdB5PV3dcIjy7XHL2AiAtgZLp-QMJeSegpq0U-ozvXJdOjeDn7mdSnjwbo6nZlvq6SWD-HM9fZLepd6u5DxcmDm4vdMTw5msOlGE2htg"],
      featured: true,
    },
  });

  const switzerland = await prisma.destination.upsert({
    where: { slug: "swiss-alps" },
    update: {},
    create: {
      name: "Swiss Alps",
      slug: "swiss-alps",
      country: "Switzerland",
      continent: "Europe",
      description: "Breathtaking alpine scenery, world-class skiing, and luxury chalets nestled in pristine mountain villages.",
      images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCxIjYgqRX1q1PfxVue80is3SCJJmQ4BbUUNsT8bhuV13c-UZ2Z0k-0noPvafkSDyIjbLrABLhSk9MnRwEsCi1dGKjyhGRW6sSwetStKgXumTgBh0zBblZFKAvvaBS6mmAQKvY-mkY6xhNULNZ9521hWHP22WnHRDra2NQ_4EM7AY64lBpksEpZR5b0Yz0QQNIR-hWNbR9of74vQtyRVX8ioqnOJfr4yGew0E4438dRUoHWRBrBayZcMv9OGGDar04K784_333R4Q"],
      featured: true,
    },
  });

  const japan = await prisma.destination.upsert({
    where: { slug: "kyoto-japan" },
    update: {},
    create: {
      name: "Kyoto",
      slug: "kyoto-japan",
      country: "Japan",
      continent: "Asia",
      description: "Ancient temples, bamboo forests, and traditional tea ceremonies in Japan's cultural heart.",
      images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB_hhE52OZGgrrDPr3sPjMHs5sxUWPsEuBUaMhEHMiiZrHL3nq36rEfumHZzVvZzBqAciFltS802kVcL7QdQDNS8t7vNhnEnSTdzabGKtWFWUToeZg24ztzWiOQKUK6hfEWB6d2sbdQZ0PXHxt7zMSRZQlnsy2dQctFb66cKArvDoD2RLLDJRCjkrzL1UVmpk8XjR6uqkcyJKi1UV3Fd7hhTy_TUaBc9G-bs18Zm1v2UMDkJF4GfvugGQ_CC3Rlf62I6LhYaIIiBw"],
      featured: true,
    },
  });

  const kenya = await prisma.destination.upsert({
    where: { slug: "masai-mara-kenya" },
    update: {},
    create: {
      name: "Masai Mara",
      slug: "masai-mara-kenya",
      country: "Kenya",
      continent: "Africa",
      description: "One of Africa's most spectacular wildlife reserves, home to the Great Migration and the Big Five.",
      images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      featured: true,
    },
  });

  console.log(`✅ Seeded ${4} destinations: ${maldives.name}, ${switzerland.name}, ${japan.name}, ${kenya.name}`);

  // Seed TourPackages
  const tourPackages = [
    {
      destinationId: maldives.id,
      title: "Maldives Overwater Luxury Escape",
      slug: "maldives-overwater-luxury-escape",
      category: "BEACH" as const,
      overview: "Experience the magic of the Maldives in this all-inclusive luxury escape. Stay in stunning overwater bungalows surrounded by crystal-clear lagoons, enjoy world-class snorkeling, diving, and sunset cruises. Perfect for honeymooners and couples seeking an unforgettable tropical paradise.",
      durationDays: 7,
      durationNights: 6,
      basePrice: 4200,
      groupSizeMin: 2,
      groupSizeMax: 8,
      included: ["Return flights", "Private speedboat transfers", "All meals & drinks", "Snorkeling equipment", "Sunset cruise", "Spa access", "Water sports"],
      excluded: ["Travel insurance", "Personal expenses", "Optional excursions", "Visa fees"],
      images: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "ACTIVE",
    },
    {
      destinationId: maldives.id,
      title: "Maldives Honeymoon Paradise",
      slug: "maldives-honeymoon-paradise",
      category: "HONEYMOON" as const,
      overview: "Say 'I do' to an extraordinary honeymoon in the Maldives. This exclusive package offers private beach dinners, couples spa treatments, champagne breakfasts, and a private island excursion — all designed to create memories that last a lifetime.",
      durationDays: 10,
      durationNights: 9,
      basePrice: 6800,
      groupSizeMin: 2,
      groupSizeMax: 2,
      included: ["Return flights", "Private villa with plunge pool", "All meals & premium drinks", "Couples spa treatment", "Private beach dinner", "Sunset dolphin cruise", "Snorkeling trip"],
      excluded: ["Travel insurance", "Personal shopping", "Additional excursions"],
      images: [
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "ACTIVE",
    },
    {
      destinationId: switzerland.id,
      title: "Swiss Alps Adventure Trek",
      slug: "swiss-alps-adventure-trek",
      category: "ADVENTURE" as const,
      overview: "Challenge yourself with the ultimate Swiss Alps adventure! Trek through iconic mountain passes, conquer glacier walks, and experience the thrill of via ferrata routes. Each evening, relax in cozy mountain huts while enjoying breathtaking panoramic views of the Alps.",
      durationDays: 8,
      durationNights: 7,
      basePrice: 3500,
      groupSizeMin: 4,
      groupSizeMax: 12,
      included: ["Guided treks", "Mountain hut accommodation", "Breakfast & dinner daily", "Cable car passes", "Trekking poles", "Safety equipment", "Airport transfers"],
      excluded: ["Flights", "Travel insurance", "Lunches", "Personal gear"],
      images: [
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "ACTIVE",
    },
    {
      destinationId: switzerland.id,
      title: "Swiss Alps Family Winter Wonderland",
      slug: "swiss-alps-family-winter-wonderland",
      category: "FAMILY" as const,
      overview: "Create magical winter memories with your family in the Swiss Alps. Enjoy beginner-friendly ski lessons, snowshoe adventures, bob-sledding, a visit to an ice cave, and cozy evenings in a charming chalet with a fireplace — all perfectly tailored for families.",
      durationDays: 6,
      durationNights: 5,
      basePrice: 2800,
      groupSizeMin: 3,
      groupSizeMax: 20,
      included: ["Chalet accommodation", "Ski lift passes", "Beginner ski lessons", "Snowshoe rental", "Bob-sled experience", "Daily breakfast", "Kids club activities"],
      excluded: ["Flights", "Travel insurance", "Lunches & dinners", "Advanced ski lessons"],
      images: [
        "https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1548941608-e9e93ac12ff7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "DRAFT",
    },
    {
      destinationId: japan.id,
      title: "Kyoto Cultural Immersion",
      slug: "kyoto-cultural-immersion",
      category: "CULTURAL" as const,
      overview: "Immerse yourself in 3,000 years of Japanese history and culture. Visit over 20 UNESCO World Heritage temples and shrines, participate in a traditional tea ceremony, learn the art of ikebana flower arranging, and explore the enchanting Arashiyama bamboo forest. A journey that will transform your perspective.",
      durationDays: 9,
      durationNights: 8,
      basePrice: 3100,
      groupSizeMin: 2,
      groupSizeMax: 16,
      included: ["Traditional ryokan stay (3 nights)", "Hotel accommodation (5 nights)", "Daily breakfast", "Tea ceremony class", "Ikebana workshop", "Licensed English-speaking guide", "JR Rail Pass (7-day)", "Airport transfers"],
      excluded: ["International flights", "Travel insurance", "Lunches & dinners (except breakfast)", "Personal purchases"],
      images: [
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "ACTIVE",
    },
    {
      destinationId: kenya.id,
      title: "Masai Mara Great Migration Safari",
      slug: "masai-mara-great-migration-safari",
      category: "SAFARI" as const,
      overview: "Witness one of nature's greatest spectacles — the Great Migration — as over 1.5 million wildebeest thunder across the Mara River. This premium safari includes game drives at dawn and dusk, a Maasai village visit, hot air balloon safari, and luxurious tented camp accommodation under the African stars.",
      durationDays: 7,
      durationNights: 6,
      basePrice: 5500,
      groupSizeMin: 2,
      groupSizeMax: 10,
      included: ["Luxury tented camp (full board)", "All game drives in 4x4", "Hot air balloon safari with champagne breakfast", "Maasai village cultural visit", "Park entry fees", "Airport transfers (Nairobi)", "Professional safari guide"],
      excluded: ["International flights to Nairobi", "Travel insurance", "Visa fees", "Tips & gratuities", "Personal purchases"],
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      status: "ACTIVE",
    },
  ];

  let tourCount = 0;
  for (const pkg of tourPackages) {
    await prisma.tourPackage.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: pkg,
    });
    tourCount++;
  }

  console.log(`✅ Seeded ${tourCount} tour packages`);

  // Seed a newsletter subscriber
  await prisma.newsletterSubscriber.upsert({
    where: { email: "demo@wanderlux.com" },
    update: {},
    create: {
      email: "demo@wanderlux.com",
      firstName: "Demo",
      source: "seed",
    },
  });

  console.log("✅ Seeded newsletter subscriber");

  // Seed a promotion
  await prisma.promotion.upsert({
    where: { code: "WANDERLUX2025" },
    update: {},
    create: {
      code: "WANDERLUX2025",
      description: "Welcome offer - 10% off your first booking",
      discountType: "PERCENTAGE",
      discountValue: 10,
      validFrom: new Date("2025-01-01"),
      validUntil: new Date("2025-12-31"),
      maxUses: 1000,
      isActive: true,
    },
  });

  console.log("✅ Seeded promotion code");
  console.log("🎉 Seed complete!");
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