import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminBookingsClient } from '@/components/admin/AdminBookingsClient';
import { getAdminBookings } from '@/app/actions/bookingActions';

// Set rendering approach for Next.js - force dynamic 
export const dynamic = 'force-dynamic';

export default async function AdminBookingsPage() {
  const bookings = await getAdminBookings();

  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminBookingsClient initialBookings={bookings} />
        </main>
      </div>
    </div>
  );
}
