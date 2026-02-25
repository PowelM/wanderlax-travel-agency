import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import EditTourClient from './EditTourClient';

export const dynamic = 'force-dynamic';

interface EditTourPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTourPage({ params }: EditTourPageProps) {
  const { id } = await params;

  const tour = await prisma.tourPackage.findUnique({
    where: { id },
    include: { destination: true },
  });

  if (!tour) {
    notFound();
  }

  // Convert Prisma Decimal & Date types to plain objects for client
  const plainTour = JSON.parse(JSON.stringify(tour));

  return <EditTourClient tour={plainTour} />;
}
