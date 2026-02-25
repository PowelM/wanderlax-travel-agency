import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminToursClient } from '@/components/admin/AdminToursClient';
import { getAdminTours } from '@/app/actions/tourActions';

export const dynamic = 'force-dynamic';

export default async function AdminToursPage() {
  const tours = await getAdminTours();

  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminToursClient initialTours={tours} />
        </main>
      </div>
    </div>
  );
}
