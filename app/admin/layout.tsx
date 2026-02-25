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

  const primaryEmail = user.emailAddresses?.[0]?.emailAddress;
  const isAdminEmail = primaryEmail?.toLowerCase() === 'poweldayck@gmail.com';

  // Check if user has admin role in the database
  let dbUser = null;
  try {
    dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      select: { role: true },
    });
  } catch (error) {
    console.error("Error fetching user role in admin layout:", error);
  }

  const role = dbUser?.role || (isAdminEmail ? 'ADMIN' : 'CUSTOMER');

  // If user is not an admin, redirect to the customer dashboard
  if (role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
    redirect('/portal/dashboard');
  }

  return <>{children}</>;
}
