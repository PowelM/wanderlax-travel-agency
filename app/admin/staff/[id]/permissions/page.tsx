"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

// We'll define a simple get/update actions for permissions if they don't exist,
// but looking at staffActions.ts, we have `getStaffWithPermissions` and `updateStaffPermissions`.
import { getStaffWithPermissions, updateStaffPermissions } from '@/app/actions/staffActions';

const MODULES = ['DASHBOARD', 'USERS', 'BOOKINGS', 'HOTELS', 'TOURS', 'CARS', 'FLIGHTS', 'STAFF', 'SETTINGS', 'REPORTS'];

export default function EditStaffPermissionsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id: staffId } = React.use(params);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [staff, setStaff] = useState<any>(null);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [permissions, setPermissions] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchPerms = async () => {
      try {
        const data = await getStaffWithPermissions(staffId);
        setStaff(data);
        
        // Initialize permissions
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const permsMap: Record<string, any> = {};
        
        // Default all to false
        MODULES.forEach(mod => {
          permsMap[mod.toLowerCase()] = { view: false, create: false, edit: false, delete: false, export: false };
        });

        // Overlay existing
        if (data?.staffProfile?.permissions) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.staffProfile.permissions.forEach((p: any) => {
            const mod = p.module.toLowerCase();
            permsMap[mod] = {
              view: p.canView,
              create: p.canCreate,
              edit: p.canEdit,
              delete: p.canDelete,
              export: p.canExport
            };
          });
        }
        
        setPermissions(permsMap);
      } catch (e) {
        console.error("Failed to load permissions", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPerms();
  }, [staffId]);

  const handleToggle = (mod: string, action: 'view'|'create'|'edit'|'delete'|'export') => {
    setPermissions(prev => ({
      ...prev,
      [mod]: {
        ...prev[mod],
        [action]: !prev[mod][action]
      }
    }));
  };

  const handleEnableAll = () => {
    const permsMap: Record<string, any> = {};
    MODULES.forEach(mod => {
      permsMap[mod.toLowerCase()] = { view: true, create: true, edit: true, delete: true, export: true };
    });
    setPermissions(permsMap);
  };

  const handleDisableAll = () => {
    const permsMap: Record<string, any> = {};
    MODULES.forEach(mod => {
      permsMap[mod.toLowerCase()] = { view: false, create: false, edit: false, delete: false, export: false };
    });
    setPermissions(permsMap);
  };

  const handleSave = async () => {
    if (!staff?.staffProfile?.id) return;
    setSaving(true);
    try {
      const res = await updateStaffPermissions(staff?.staffProfile?.id, permissions);
      if (res?.success) {
        router.push('/admin/staff');
      } else {
        alert("Failed to save permissions: " + res?.error);
      }
    } catch (e) {
      console.error(e);
      alert("Error saving permissions");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-[#120d0d]">
        <AdminSidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
        </main>
      </div>
    );
  }

  if (!staff) {
    return (
      <div className="flex h-screen w-full bg-[#120d0d]">
        <AdminSidebar />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-xl text-white font-bold mb-4">Staff Member Not Found</h2>
          <button onClick={() => router.push('/admin/staff')} className="text-primary hover:underline">Back to Staff</button>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background-dark text-white">
      <AdminSidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <AdminHeader title="Edit Permissions" description={`Set access levels for ${staff.firstName} ${staff.lastName}`}>
          <div className="flex gap-3">
            <button onClick={() => router.push('/admin/staff')} className="px-4 py-2 rounded-lg border border-border-dark text-text-secondary hover:text-white transition-colors text-sm font-medium">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-red-700 transition-colors text-sm disabled:opacity-50">
              {saving ? 'Saving...' : 'Save Permissions'}
            </button>
          </div>
        </AdminHeader>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header info */}
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 mb-8 flex items-center gap-6">
               <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary border border-primary/20 relative overflow-hidden">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 {staff.avatarUrl ? <img src={staff.avatarUrl} alt="" className="w-full h-full object-cover" /> : staff.firstName?.[0] || 'U'}
               </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
                  <div>
                    <h2 className="text-xl font-bold">{staff.firstName} {staff.lastName}</h2>
                    <p className="text-text-secondary text-sm">{staff.email} • {staff.role}</p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={handleDisableAll}
                      className="px-4 py-2 rounded-lg border border-border-dark text-text-secondary hover:text-white transition-colors text-xs font-bold uppercase tracking-wider"
                    >
                      Disable All
                    </button>
                    <button 
                      onClick={handleEnableAll}
                      className="px-4 py-2 rounded-lg bg-green-600/20 text-green-400 border border-green-600/30 hover:bg-green-600/30 transition-colors text-xs font-bold uppercase tracking-wider"
                    >
                      Enable All
                    </button>
                  </div>
                </div>
            </div>

            {/* Permissions Grid */}
            <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-dark border-b border-border-dark">
                    <th className="py-4 px-6 text-xs font-semibold text-text-secondary uppercase tracking-wider">Module</th>
                    <th className="py-4 px-6 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">View</th>
                    <th className="py-4 px-6 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">Create</th>
                    <th className="py-4 px-6 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">Edit</th>
                    <th className="py-4 px-6 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">Delete</th>
                    <th className="py-4 px-6 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">Export</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  {MODULES.map(module => {
                    const mod = module.toLowerCase();
                    const perms = permissions[mod] || { view: false, create: false, edit: false, delete: false, export: false };
                    
                    return (
                      <tr key={module} className="hover:bg-background-dark transition-colors">
                        <td className="py-4 px-6">
                            <span className="text-sm font-semibold capitalize text-white">{module.toLowerCase()}</span>
                        </td>
                        {(['view', 'create', 'edit', 'delete', 'export'] as const).map(action => (
                          <td key={action} className="py-4 px-6 text-center">
                            <button
                              type="button"
                              onClick={() => handleToggle(mod, action)}
                              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${perms[action] ? 'bg-primary' : 'bg-slate-700'}`}
                            >
                              <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${perms[action] ? 'translate-x-4' : 'translate-x-0'}`} />
                            </button>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
