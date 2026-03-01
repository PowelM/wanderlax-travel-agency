"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { getStaffWithPermissions, updateStaffPermissions } from '@/app/actions/staffActions';

interface Permission {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  export: boolean;
}

interface StaffPermissions {
  [module: string]: Permission;
}

interface StaffInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  jobTitle: string;
  department: string;
  avatarUrl: string;
  isActive: boolean;
  staffProfileId: string;
}

const INITIAL_PERMISSIONS: StaffPermissions = {
  bookings: { view: false, create: false, edit: false, delete: false, export: false },
  fleet: { view: false, create: false, edit: false, delete: false, export: false },
  catalogue: { view: false, create: false, edit: false, delete: false, export: false },
  users: { view: false, create: false, edit: false, delete: false, export: false },
  reports: { view: false, create: false, edit: false, delete: false, export: false },
  payments: { view: false, create: false, edit: false, delete: false, export: false },
  settings: { view: false, create: false, edit: false, delete: false, export: false },
};

export default function AdminStaffPermissionsClient({ staffId }: { staffId: string }) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [staff, setStaff] = useState<StaffInfo | null>(null);
  const [permissions, setPermissions] = useState<StaffPermissions>(INITIAL_PERMISSIONS);

  const fetchData = useCallback(async () => {
    const data = await getStaffWithPermissions(staffId);
    if (data) {
      setStaff({
        id: data.id,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email,
        role: data.role,
        jobTitle: data.staffProfile?.jobTitle || 'Staff Member',
        department: data.staffProfile?.department || 'N/A',
        avatarUrl: data.avatarUrl || `https://ui-avatars.com/api/?name=${data.firstName}+${data.lastName}&background=random`,
        isActive: data.staffProfile?.isActive || false,
        staffProfileId: data.staffProfile?.id || '',
      });

      if (data.staffProfile?.permissions && data.staffProfile.permissions.length > 0) {
        const mappedPermissions: StaffPermissions = { ...INITIAL_PERMISSIONS };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.staffProfile.permissions.forEach((p: any) => {
          const mod = String(p.module || '').toLowerCase();
          if (mappedPermissions[mod]) {
            mappedPermissions[mod] = {
              view: p.canView,
              create: p.canCreate,
              edit: p.canEdit,
              delete: p.canDelete,
              export: p.canExport,
            };
          }
        });
        setPermissions(mappedPermissions);
      }
    }
    setLoading(false);
  }, [staffId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [fetchData]);

  const togglePermission = (module: string, action: keyof Permission) => {
    setPermissions(prev => ({
      ...prev,
      [module]: {
        ...prev[module],
        [action]: !prev[module][action]
      }
    }));
  };

  const handleUpdate = async () => {
    if (!staff?.staffProfileId) return;
    setSaving(true);
    const res = await updateStaffPermissions(staff.staffProfileId, permissions);
    if (res.success) {
      alert('Permissions updated successfully!');
    } else {
      alert('Failed to update permissions: ' + res.error);
    }
    setSaving(false);
  };

  if (loading || !staff) {
    return (
      <div className="flex h-screen w-full bg-[#0a0a0b] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-[#0a0a0b] text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar />
      
      <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-[#0a0a0b] overflow-y-auto">
        <header className="h-16 border-b border-border-light dark:border-white/5 bg-surface-light/80 dark:bg-black/40 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight">Staff Permissions</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background-light dark:ring-[#0a0a0b]"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center ring-2 ring-border-light dark:ring-white/10" style={{ backgroundImage: `url('${staff.avatarUrl}')` }}></div>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                  <Link className="hover:text-primary transition-colors" href="/admin/staff">Staff & Roles</Link>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span className="text-slate-900 dark:text-white font-medium">{staff.firstName} {staff.lastName}</span>
                </div>
                <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Role & Permissions Matrix</h1>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => fetchData()}
                  className="px-4 py-2 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-sm font-semibold border border-border-light dark:border-white/10"
                >
                  Discard Changes
                </button>
                <button 
                  onClick={handleUpdate}
                  disabled={saving}
                  className="relative overflow-hidden group px-6 py-2 bg-primary text-white rounded-lg transition-all hover:bg-primary/90 text-sm font-bold shadow-lg shadow-primary/25 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">{saving ? 'sync' : 'save'}</span>
                    {saving ? 'Updating...' : 'Update Permissions'}
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col items-center text-center pb-6 border-b border-border-light dark:border-white/5">
                    <div className="relative mb-4">
                      <div className="size-24 rounded-full bg-cover bg-center border-2 border-border-light dark:border-white/10 ring-4 ring-primary/10" style={{ backgroundImage: `url('${staff.avatarUrl}')` }}></div>
                      <div className={`absolute bottom-1 right-1 size-5 border-2 border-surface-light dark:border-[#141414] rounded-full ${staff.isActive ? 'bg-green-500' : 'bg-slate-500'}`} title={staff.isActive ? 'Active' : 'Inactive'}></div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{staff.firstName} {staff.lastName}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{staff.jobTitle}</p>
                    <div className="mt-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full border border-border-light dark:border-white/10">ID: {staff.id.slice(0, 8).toUpperCase()}</span>
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${staff.isActive ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-slate-500/10 text-slate-500 border-slate-500/20'}`}>{staff.isActive ? 'Active' : 'Inactive'}</span>
                    </div>
                  </div>
                  <div className="pt-6 space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Role</label>
                      <div className="relative">
                        <div className="w-full bg-slate-50 dark:bg-black/20 border border-border-light dark:border-white/5 text-slate-900 dark:text-white text-sm rounded-lg p-3 flex justify-between items-center opacity-70">
                          {staff.role}
                          <span className="material-symbols-outlined text-[18px]">lock</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department</label>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-black/20 rounded-lg border border-border-light dark:border-white/5">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">group</span>
                        <span className="text-sm text-slate-900 dark:text-white font-medium">{staff.department}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact</label>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-[18px]">mail</span>
                          {staff.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-xl p-6 shadow-sm">
                  <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">security</span>
                    Security Access
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    This user currently has access to <span className="text-primary font-bold">{Object.values(permissions).filter(p => p.view).length} modules</span>. Changes will be applied instantly across the entire platform.
                  </p>
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <p className="text-xs text-amber-700 dark:text-amber-400 font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">warning</span>
                      Requires supervisor audit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-border-light dark:border-white/5 bg-slate-50 dark:bg-white/5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Module Access Matrix</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Fine-tune module access levels for this staff member.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-white/5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          <th className="p-4 font-bold border-b border-border-light dark:border-white/5 min-w-[200px]">Module</th>
                          {['View', 'Create', 'Edit', 'Delete', 'Export'].map(action => (
                            <th key={action} className="p-4 font-bold text-center border-b border-border-light dark:border-white/5 w-24">{action}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-light dark:divide-white/5">
                        {Object.entries(permissions).map(([module, perms]) => (
                          <tr key={module} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            <td className="p-4">
                              <div className="flex items-center gap-4">
                                <div className={`p-2.5 rounded-xl ${
                                  module === 'bookings' ? 'bg-blue-500/10 text-blue-500' :
                                  module === 'fleet' ? 'bg-purple-500/10 text-purple-500' :
                                  module === 'catalogue' ? 'bg-orange-500/10 text-orange-500' :
                                  module === 'users' ? 'bg-green-500/10 text-green-500' :
                                  module === 'reports' ? 'bg-amber-500/10 text-amber-500' :
                                  module === 'payments' ? 'bg-emerald-500/10 text-emerald-500' :
                                  'bg-slate-500/10 text-slate-500'
                                }`}>
                                  <span className="material-symbols-outlined">
                                    {module === 'bookings' ? 'calendar_month' :
                                     module === 'fleet' ? 'directions_bus' :
                                     module === 'catalogue' ? 'map' :
                                     module === 'users' ? 'person' :
                                     module === 'reports' ? 'analytics' :
                                     module === 'payments' ? 'payments' :
                                     'settings'}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 dark:text-white capitalize">{module}</div>
                                  <div className="text-xs text-slate-500">
                                    {module === 'bookings' ? 'Reservations & Management' :
                                     module === 'fleet' ? 'Vehicles & Rentals' :
                                     module === 'catalogue' ? 'Packages & Content' :
                                     module === 'users' ? 'Profiles & Roles' :
                                     module === 'reports' ? 'Audits & Statistics' :
                                     module === 'payments' ? 'Invoices & Revenue' :
                                     'System Configuration'}
                                  </div>
                                </div>
                              </div>
                            </td>
                            {(['view', 'create', 'edit', 'delete', 'export'] as Array<keyof Permission>).map(action => (
                              <td key={action} className="p-4 text-center">
                                <label className="inline-flex relative items-center cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={perms[action]}
                                    onChange={() => togglePermission(module, action)}
                                  />
                                  <div className="w-10 h-5.5 bg-slate-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                                </label>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-white/5 border-t border-border-light dark:border-white/5 flex justify-between items-center text-slate-500 text-xs italic">
                    <span>Last audited: 2 hours ago</span>
                    <button 
                      onClick={() => setPermissions({
                        bookings: { view: true, create: false, edit: false, delete: false, export: false },
                        fleet: { view: true, create: false, edit: false, delete: false, export: false },
                        catalogue: { view: true, create: false, edit: false, delete: false, export: false },
                        users: { view: true, create: false, edit: false, delete: false, export: false },
                        reports: { view: true, create: false, edit: false, delete: false, export: false },
                        payments: { view: true, create: false, edit: false, delete: false, export: false },
                        settings: { view: true, create: false, edit: false, delete: false, export: false },
                      })}
                      className="text-primary font-bold hover:underline uppercase not-italic tracking-wider"
                    >
                      Reset Permissions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
