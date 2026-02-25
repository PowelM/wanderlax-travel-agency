import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function AuthRedirectPage() {
  const user = await currentUser();

  // If not authenticated, send to login
  if (!user) {
    redirect('/sign-in');
  }

  // Look up user role in the database
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    select: { role: true },
  });

  // Route based on role
  if (dbUser?.role === 'ADMIN' || dbUser?.role === 'SUPER_ADMIN') {
    redirect('/admin');
  }

  // Default: CUSTOMER, CONSULTANT, or user not yet synced
  redirect('/portal/dashboard');
}
