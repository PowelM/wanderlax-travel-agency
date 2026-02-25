import { currentUser, auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authObject = await auth();
  const userId = authObject?.userId ?? null;
  const user = await currentUser();

  // If not authenticated, redirect to login
  if (!userId || !user) {
    redirect('/portal/login');
  }

  const primaryEmail = user.emailAddresses?.[0]?.emailAddress;
  const isAdminEmail = primaryEmail?.toLowerCase() === 'poweldayck@gmail.com';

  // Check if user has admin role in the database
  let dbUser: { role: string } | null = null;
  try {
    // userId is guaranteed to be a non-null string here due to the guard above
    dbUser = await prisma.user.findUnique({
      where: { clerkId: userId as string },
      select: { role: true },
    });
  } catch (error) {
    console.error("Error fetching user role in admin layout:", error);
    // Fall back to email-based check if DB query fails
  }

  const role = dbUser?.role || (isAdminEmail ? 'ADMIN' : 'CUSTOMER');

  // If user is not an admin, redirect to the customer dashboard
  if (role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
    redirect('/portal/dashboard');
  }

  return <>{children}</>;
}
