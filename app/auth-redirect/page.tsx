import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function AuthRedirectPage() {
  let user = null;
  try {
    user = await currentUser();
  } catch (err) {
    console.error("Clerk currentUser() Error in auth-redirect:", err);
  }

  // If not authenticated, send to login
  if (!user) {
    redirect('/portal/login');
  }

  const primaryEmail = user.emailAddresses?.[0]?.emailAddress || '';
  const isAdminEmail = primaryEmail.toLowerCase() === 'poweldayck@gmail.com';

  // Ensure user exists in database (Manual Sync / Upsert)
  // This handles the race condition where the Clerk Webhook might be slow
  let role = isAdminEmail ? 'ADMIN' : 'CUSTOMER';
  
  try {
    const dbUser = await prisma.user.upsert({
      where: { clerkId: user.id },
      update: {
        email: primaryEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.imageUrl,
      },
      create: {
        clerkId: user.id,
        email: primaryEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.imageUrl,
        role: isAdminEmail ? 'ADMIN' : 'CUSTOMER',
      },
      select: { role: true },
    });
    
    if (dbUser) {
      role = dbUser.role;
    }
  } catch (error) {
    console.error("Error syncing user in auth-redirect:", error);
    // Fallback to role determined by email if DB fails
  }

  // Route based on role
  if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
    redirect('/admin');
  }

  // Default: CUSTOMER, CONSULTANT
  redirect('/portal/dashboard');
}
