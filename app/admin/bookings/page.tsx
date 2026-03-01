import React from 'react';
import { AdminBookingsClient } from '@/components/admin/AdminBookingsClient';
import { getAdminBookings } from '@/app/actions/bookingActions';

// Set rendering approach for Next.js - force dynamic 
export const dynamic = 'force-dynamic';

export default async function AdminBookingsPage() {
  const bookings = await getAdminBookings();

  return <AdminBookingsClient initialBookings={bookings} />;
}
