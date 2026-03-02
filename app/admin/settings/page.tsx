import { getGeneralSettings } from "@/app/actions/settingsActions";
import { AdminSettingsClient } from "../../../components/admin/AdminSettingsClient";

export const metadata = {
  title: 'Settings - Admin Dashboard',
};

export default async function AdminSettingsPage() {
  const settings = await getGeneralSettings() || {};
  
  return <AdminSettingsClient initialSettings={settings} />;
}
