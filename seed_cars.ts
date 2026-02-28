import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const cars = [
    {
      make: 'Mercedes-Benz',
      model: 'S-Class',
      year: 2023,
      category: 'LUXURY' as const,
      licensePlate: 'ABC-1234',
      capacity: 4,
      transmission: 'Automatic',
      fuelType: 'Diesel',
      dailyRate: 250,
      status: 'AVAILABLE' as const,
      features: ['Luxury Sedan'],
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'],
      mileage: 12000,
    },
    {
      make: 'Range Rover',
      model: 'Autobiography',
      year: 2023,
      category: 'SUV' as const,
      licensePlate: 'RRA-9988',
      capacity: 5,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      dailyRate: 380,
      status: 'AVAILABLE' as const,
      features: ['Premium SUV'],
      images: ['https://images.unsplash.com/photo-1590362891991-f203bf3ed878?auto=format&fit=crop&w=800&q=80'],
      mileage: 45000,
    },
    {
      make: 'Porsche',
      model: '911 Carrera',
      year: 2022,
      category: 'LUXURY' as const,
      licensePlate: 'PRS-9111',
      capacity: 2,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      dailyRate: 450,
      status: 'AVAILABLE' as const,
      features: ['Sports Coupe'],
      images: ['https://images.unsplash.com/photo-1503376760367-152e00e84ec8?auto=format&fit=crop&w=800&q=80'],
      mileage: 8000,
    },
    {
      make: 'Tesla',
      model: 'Model S Plaid',
      year: 2024,
      category: 'LUXURY' as const,
      licensePlate: 'TSL-5544',
      capacity: 5,
      transmission: 'Automatic',
      fuelType: 'Electric',
      dailyRate: 220,
      status: 'AVAILABLE' as const,
      features: ['Electric Luxury'],
      images: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80'],
      mileage: 15000,
    },
    {
      make: 'BMW',
      model: 'X5 xDrive',
      year: 2023,
      category: 'SUV' as const,
      licensePlate: 'BMX-2023',
      capacity: 5,
      transmission: 'Automatic',
      fuelType: 'Diesel',
      dailyRate: 290,
      status: 'AVAILABLE' as const,
      features: ['Luxury SUV'],
      images: ['https://images.unsplash.com/photo-1556189250-72ba00fec186?auto=format&fit=crop&w=800&q=80'],
      mileage: 32000,
    },
    {
      make: 'Audi',
      model: 'A8 L',
      year: 2023,
      category: 'LUXURY' as const,
      licensePlate: 'ADL-8888',
      capacity: 4,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      dailyRate: 270,
      status: 'AVAILABLE' as const,
      features: ['Executive Sedan'],
      images: ['https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80'],
      mileage: 10000,
    },
    {
      make: 'Toyota',
      model: 'Land Cruiser Prado',
      year: 2022,
      category: 'SUV' as const,
      licensePlate: 'KDB-567Y',
      capacity: 7,
      transmission: 'Automatic',
      fuelType: 'Diesel',
      dailyRate: 180,
      status: 'AVAILABLE' as const,
      features: ['4x4 Offroader'],
      images: ['https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80'],
      mileage: 60300,
    }
  ];

  for (const car of cars) {
    try {
      await prisma.car.create({ data: car });
    } catch(e: any) {
      if (e.code === 'P2002') console.log(`Skipped duplicate: ${car.model}`);
      else throw e;
    }
  }
  console.log("Seeded 7 cars successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
