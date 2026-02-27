import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  console.log("🏨 Seeding Hotels...");

  // Get Japan destination
  const kyoto = await prisma.destination.findFirst({
    where: { slug: "kyoto-japan" }
  });

  if (!kyoto) {
    console.log("❌ Kyoto destination not found. Please run the main seed first.");
    return;
  }

  const hotels = [
    {
      name: "The Royal Kyoto Resort",
      slug: "the-royal-kyoto-resort",
      description: "A sanctuary of peace in the heart of Kyoto's historic Higashiyama district, offering luxury with traditional Japanese aesthetics.",
      starRating: "FIVE_STAR" as const,
      address: "Higashiyama Ward, Kyoto",
      latitude: 34.9961,
      longitude: 135.7774,
      amenities: ["Free Wifi", "Pool", "Spa & Wellness", "Gym", "Restaurant", "Bar"],
      images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuC3LboRjFRBURcDK81YS2v0nIq8kE4O6WyivnqM816-FjZ-s97NPdp8dah9YsazAcO07rSurdssBW7jYT2QlIQi6bwiQ-o7zsUxwW3X7nkYicZ7UBZ2xx2Tkklb62hCp1xzapDUFP9iB22Jkp4UpWUTwi38_zNpWBX0-zS1FX_EAWcnEqewSvnAmuGieRkgLu3IFAU4qHWcvlaniG3KsaGV0cZFiyqxHm7f785h3hu99hyIwUfNo02YzpR0wMxF9sF7lwNuEvHj9g"],
      destinationId: kyoto.id,
      rooms: {
        create: [
          {
            name: "Grand Suite",
            type: "SUITE" as const,
            pricePerNight: 850,
            capacityAdults: 2,
            amenities: ["City View", "Private Balcony"],
            isActive: true
          },
          {
             name: "Deluxe King Room",
             type: "DELUXE" as const,
             pricePerNight: 650,
             capacityAdults: 2,
             amenities: ["Garden View"],
             isActive: true
          }
        ]
      }
    },
    {
      name: "Sakura Modern Inn",
      slug: "sakura-modern-inn",
      description: "Contemporary design meets traditional minimalist style in this centrally-located boutique hotel.",
      starRating: "FOUR_STAR" as const,
      address: "Shimogyo Ward, Kyoto",
      latitude: 34.9858,
      longitude: 135.7588,
      amenities: ["Free Wifi", "Restaurant", "Gym"],
      images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBmck2ExUd_W2H_reGKJxUMj6GIC02F26YTDdlfB44YpRs98YXz7d5XVCaqfiqMWhmCG421VQmKVW3kojk94vM6wieUrOue_GcuaBCrqG8gh1P6iZmkEkEqWlbf8hcx-fGngeVknKxvJJnwopWkaMbgsXpc2r-vJI0UIx59GDjS-5vIN4xY1dhD_lCYQjYHxVtUbXedntxNslFQMQPG1sqz8FzLsi8AvxDBiT853c2kf-jSfaskrWQZEH_r-ducMy9bEjv6xo8qww"],
      destinationId: kyoto.id,
      rooms: {
        create: [
          {
            name: "Standard Twin",
            type: "STANDARD" as const,
            pricePerNight: 420,
            capacityAdults: 2,
            amenities: ["Tea selection"],
            isActive: true
          }
        ]
      }
    },
    {
      name: "Grand Arashiyama",
      slug: "grand-arashiyama",
      description: "Nestled along the banks of the Hozu River, experience tranquility with breathtaking river views.",
      starRating: "FIVE_STAR" as const,
      address: "Arashiyama, Kyoto",
      latitude: 35.0116,
      longitude: 135.6774,
      amenities: ["Free Wifi", "Pool", "Spa & Wellness", "River View", "Free Breakfast"],
      images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCbZ2r920Z0kijZ_Bu5HmbPvE0FFM9Raf3QTaVk01FYvhGiQB-RqDIKNPpK371ODJyfNo8dAuZAYuFalY0KJLKZLA4zy38gkhiK0OsuPWRqoFdGI5etmCO9XbEsUZrhh4yMS5PbLJU2J-rme3-e7NfgQNlSbxHOu4vSW4cCEkM1PqtD186d7B6CJxilKjvU_nsMh4rp73SnTR3kzccRFKR0X8erqv3p6jyb2-QAPigPLRFpNAhJgPbTMeB3RsxqUQxo7lXE-Y8YqQ"],
      destinationId: kyoto.id,
      rooms: {
        create: [
          {
            name: "Riverside Suite",
            type: "SUITE" as const,
            pricePerNight: 620,
            capacityAdults: 2,
            amenities: ["River View", "Balcony"],
            isActive: true
          }
        ]
      }
    },
    {
        name: "The Gion Elite",
        slug: "the-gion-elite",
        description: "Elegant and sophisticated stay in the heart of Kyoto's famous Gion district.",
        starRating: "FOUR_STAR" as const,
        address: "Gion, Kyoto",
        latitude: 35.0037,
        longitude: 135.7766,
        amenities: ["Free Wifi", "Gym", "Bar", "City Center"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBmZVgMzw2CAfwZp3Oz5AKEsV5POQQH6XBZGBP-1EQodlRD8VV4yWL-xMAw5qBtrBwYFKSIRXaDKzF0Lm6vbAjJknXrj-V0L4eLzfjBd53-uhATLiA0T_KS13PvP2dJFC5Ro8BAymBZY7j58XPbAaO-u2DNfv4gcjPjjDKsP3NO8NsjsVdFEBzNhoPOxEXqMIDPEtgT8Ym13b3gMNlRgJsJ4t--nraYEzxcq90zuxNmNOcu6zpD3lh83DD7AIXmoq7xVhvv9OPh-w"],
        destinationId: kyoto.id,
        rooms: {
          create: [
            {
              name: "Executive King",
              type: "DELUXE" as const,
              pricePerNight: 345,
              capacityAdults: 2,
              amenities: ["City View"],
              isActive: true
            }
          ]
        }
      }
  ];

  for (const hotel of hotels) {
    await prisma.hotel.upsert({
      where: { slug: hotel.slug },
      update: {},
      create: hotel
    });
  }

  console.log(`✅ Seeded ${hotels.length} hotels.`);
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
