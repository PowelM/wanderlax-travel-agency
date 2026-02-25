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

  console.log(`✅ Seeded ${3} destinations: ${maldives.name}, ${switzerland.name}, ${japan.name}`);

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