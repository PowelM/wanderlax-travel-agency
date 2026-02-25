"use client";

import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminMessagesPage() {
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminHeader 
            title="Messages & Notifications" 
            description="View your messages and latest alerts here."
          />
          
          <div className="flex-1 flex flex-col justify-center items-center text-slate-400">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">forum</span>
            <p>Your messages will appear here.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
