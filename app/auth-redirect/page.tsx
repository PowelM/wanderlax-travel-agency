import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function AuthRedirectPage() {
  const user = await currentUser();

  // If not authenticated, send to login
  if (!user) {
    redirect('/sign-in');
  }

  const primaryEmail = user.emailAddresses?.[0]?.emailAddress;
  const isAdminEmail = primaryEmail?.toLowerCase() === 'poweldayck@gmail.com';

  // Look up user role in the database
  let dbUser = null;
  try {
    dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      select: { role: true },
    });
  } catch (error) {
    console.error("Error fetching user role in auth-redirect:", error);
  }

  const role = dbUser?.role || (isAdminEmail ? 'ADMIN' : 'CUSTOMER');

  // Route based on role
  if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
    redirect('/admin');
  }

  // Default: CUSTOMER, CONSULTANT, or user not yet synced
  redirect('/portal/dashboard');
}
