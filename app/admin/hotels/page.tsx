import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHotelsClient } from '@/components/admin/AdminHotelsClient';
import { getAdminHotels } from '@/app/actions/hotelActions';

export const dynamic = 'force-dynamic';

export default async function AdminHotelsPage() {
  const hotels = await getAdminHotels();

  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminHotelsClient initialHotels={hotels} />
        </main>
      </div>
    </div>
  );
}
