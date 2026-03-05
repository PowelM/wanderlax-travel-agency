import { getAdminEvents } from '@/app/actions/eventActions';
import { AdminEventsClient } from '@/components/admin/AdminEventsClient';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';

export const metadata = {
  title: 'Events Management - Admin',
  description: 'Manage your events and ticket sales',
};

export default async function EventsAdminPage() {
  const user = await currentUser();

  if (!user || (user.unsafeMetadata?.role !== 'ADMIN' && user.unsafeMetadata?.role !== 'SUPER_ADMIN')) {
    redirect('/');
  }

  const events = await getAdminEvents();

  return <AdminEventsClient initialEvents={events} />;
}
