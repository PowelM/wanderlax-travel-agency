import { getGeneralSettings } from "@/app/actions/settingsActions";
import { AdminSettingsClient } from "../../../components/admin/AdminSettingsClient";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: 'Settings - Admin Dashboard',
};

export default async function AdminSettingsPage() {
  const settings = await getGeneralSettings() || {};
  
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminSettingsClient initialSettings={settings} />
        </main>
      </div>
    </div>
  );
}
