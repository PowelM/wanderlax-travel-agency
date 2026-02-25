import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  // If not authenticated, redirect to login
  if (!user) {
    redirect('/portal/login');
  }

  // Check if user has admin role in the database
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    select: { role: true },
  });

  // If user is not an admin, redirect to the customer dashboard
  if (!dbUser || (dbUser.role !== 'ADMIN' && dbUser.role !== 'SUPER_ADMIN')) {
    redirect('/portal/dashboard');
  }

  return <>{children}</>;
}
