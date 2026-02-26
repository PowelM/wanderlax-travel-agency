import React, { useState, useEffect, useMemo } from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { updateStaffRole, toggleStaffStatus, deleteStaff, createStaff } from '@/app/actions/staffActions';

interface StaffMember {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  avatarUrl: string | null;
  role: string;
  staffProfile: {
    id: string;
    jobTitle: string | null;
    isActive: boolean;
    department: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminStaffClient() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // New Staff Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch('/api/admin/staff');
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.details || errorData.error || 'Failed to fetch staff');
        }
        const data = await res.json();
        setStaff(data);
      } catch (e: unknown) {
        console.error('Staff fetch error:', e instanceof Error ? e.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchStaff();
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return staff.filter(s =>
      `${s.firstName ?? ''} ${s.lastName ?? ''}`.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q)
    );
  }, [staff, search]);

  const stats = useMemo(() => {
    return {
      total: staff.length,
      active: staff.filter(s => s.staffProfile?.isActive).length,
      admins: staff.filter(s => ['ADMIN', 'SUPER_ADMIN'].includes(s.role)).length,
    };
  }, [staff]);

  // Paginated data
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedStaff = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const handleRoleChange = async (id: string, role: string) => {
    const prev = staff.find(s => s.id === id);
    if (!prev) return;
    setStaff(st => st.map(s => s.id === id ? { ...s, role } : s));
    const res = await updateStaffRole(id, role);
    if (!res.success) {
      setStaff(st => st.map(s => s.id === id ? prev : s));
      alert('Failed to update role');
    }
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    const prev = staff.find(s => s.id === id);
    if (!prev) return;
    
    // Optimistic update
    setStaff(st => st.map(s => s.id === id ? { ...s, staffProfile: s.staffProfile ? { ...s.staffProfile, isActive } : { id: 'temp', userId: id, isActive, department: null, jobTitle: null } } : s));
    
    const res = await toggleStaffStatus(id, isActive);
    if (!res.success) {
      console.error('Failed to toggle status:', res.error);
      setStaff(st => st.map(s => s.id === id ? prev : s));
      alert('Failed to toggle status: ' + (res.error || 'Unknown error'));
    } else if (res.profile) {
      // Update with server data
      setStaff(st => st.map(s => s.id === id ? { ...s, staffProfile: res.profile } : s));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this staff member?')) return;
    const prev = staff;
    setStaff(st => st.filter(s => s.id !== id));
    const res = await deleteStaff(id);
    if (!res.success) {
      setStaff(prev);
      alert('Failed to delete staff: ' + (res.error || 'Unknown error'));
    }
  };

  const handleCreateStaff = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
    };

    const res = await createStaff(data);
    if (res.success) {
      setStaff(prev => [res.user, ...prev]);
      setIsModalOpen(false);
    } else {
      alert('Failed to create staff member: ' + res.error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex h-screen w-full">
      <AdminSidebar />
      <main className="flex-1 flex flex-col overflow-hidden bg-background-dark text-white">
        <AdminHeader title="Team Management" description="Manage staff members, roles, and status.">
          <div className="flex gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-all font-semibold text-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add</span> Add Staff
            </button>
          </div>
        </AdminHeader>
        
        <div className="p-6 flex-1 overflow-auto flex flex-col gap-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-dark p-5 rounded-xl border border-border-dark flex items-center gap-4 hover:border-primary/30 transition-colors group">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-semibold uppercase">Total Staff</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
            <div className="bg-surface-dark p-5 rounded-xl border border-border-dark flex items-center gap-4 hover:border-green-500/30 transition-colors group">
              <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-semibold uppercase">Active</p>
                <p className="text-2xl font-bold">{stats.active}</p>
              </div>
            </div>
            <div className="bg-surface-dark p-5 rounded-xl border border-border-dark flex items-center gap-4 hover:border-purple-500/30 transition-colors group">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <span className="material-symbols-outlined">admin_panel_settings</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-semibold uppercase">Admins</p>
                <p className="text-2xl font-bold">{stats.admins}</p>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input 
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border-dark bg-surface-dark text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="Search by name or email..." 
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
            />
          </div>

          {/* Table */}
          <div className="bg-surface-dark rounded-xl border border-border-dark overflow-hidden flex-1 flex flex-col min-h-0">
            <div className="overflow-auto flex-1">
              <table className="min-w-full divide-y divide-border-dark">
                <thead className="bg-background-dark sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Staff Member</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark bg-surface-dark">
                  {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td className="px-6 py-4"><div className="flex gap-3"><div className="h-10 w-10 rounded-full bg-slate-800"></div><div className="h-10 w-32 bg-slate-800 rounded"></div></div></td>
                        <td className="px-6 py-4"><div className="h-4 w-48 bg-slate-800 rounded"></div></td>
                        <td className="px-6 py-4"><div className="h-8 w-24 bg-slate-800 rounded"></div></td>
                        <td className="px-6 py-4"><div className="h-6 w-16 bg-slate-800 rounded"></div></td>
                        <td className="px-6 py-4"><div className="h-6 w-10 bg-slate-800 rounded ml-auto"></div></td>
                      </tr>
                    ))
                  ) : paginatedStaff.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-20 text-center">
                        <span className="material-symbols-outlined text-5xl text-text-secondary/20 mb-3 block">person_off</span>
                        <p className="text-text-secondary">No staff members found matching your search.</p>
                      </td>
                    </tr>
                  ) : (
                    paginatedStaff.map(s => (
                      <tr key={s.id} className="hover:bg-background-dark/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {s.avatarUrl ? (
                              <div className="h-10 w-10 rounded-full bg-cover bg-center border border-border-dark" style={{ backgroundImage: `url('${s.avatarUrl}')` }} />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary border border-primary/20 uppercase">
                                {s.firstName?.charAt(0) ?? 'U'}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-bold group-hover:text-primary transition-colors">{s.firstName} {s.lastName}</p>
                              <p className="text-[10px] text-text-secondary uppercase font-semibold">Joined {new Date(s.createdAt).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-text-secondary">{s.email}</td>
                        <td className="px-6 py-4">
                          <select 
                            value={s.role} 
                            onChange={e => handleRoleChange(s.id, e.target.value)} 
                            className="bg-background-dark text-[11px] font-bold text-white p-1.5 px-3 rounded-lg border border-border-dark focus:border-primary outline-none hover:bg-surface-dark transition-colors"
                          >
                            <option value="ADMIN">ADMIN</option>
                            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                            <option value="CONSULTANT">CONSULTANT</option>
                            <option value="STAFF">STAFF</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => handleToggleActive(s.id, !(s.staffProfile?.isActive ?? false))} 
                            className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                              s.staffProfile?.isActive 
                                ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20' 
                                : 'bg-slate-500/10 text-slate-400 border-slate-500/20 hover:bg-slate-500/20'
                            }`}
                          >
                            {s.staffProfile?.isActive ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => handleDelete(s.id)} 
                            className="text-text-secondary hover:text-red-400 transition-all p-2 rounded-lg hover:bg-red-400/10"
                            title="Remove Member"
                          >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="p-4 border-t border-border-dark bg-background-dark/30 flex items-center justify-between">
                <p className="text-xs text-text-secondary">
                  Showing <span className="text-white font-bold">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="text-white font-bold">{Math.min(currentPage * itemsPerPage, filtered.length)}</span> of <span className="text-white font-bold">{filtered.length}</span> members
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded-lg border border-border-dark bg-surface-dark disabled:opacity-30 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          currentPage === i + 1 ? 'bg-primary text-white' : 'hover:bg-surface-dark text-text-secondary'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded-lg border border-border-dark bg-surface-dark disabled:opacity-30 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add Staff Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-surface-dark border border-border-dark rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-border-dark flex justify-between items-center bg-background-dark/50">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person_add</span>
                  Add Team Member
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
              </div>
              <form onSubmit={handleCreateStaff} className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider">First Name</label>
                    <input required name="firstName" type="text" placeholder="John" className="w-full bg-background-dark border border-border-dark rounded-xl p-3 text-white text-sm focus:border-primary outline-none transition-all placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider">Last Name</label>
                    <input required name="lastName" type="text" placeholder="Doe" className="w-full bg-background-dark border border-border-dark rounded-xl p-3 text-white text-sm focus:border-primary outline-none transition-all placeholder:text-slate-600" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                  <input required name="email" type="email" placeholder="john@wanderlux.com" className="w-full bg-background-dark border border-border-dark rounded-xl p-3 text-white text-sm focus:border-primary outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider">Assigned Role</label>
                  <select required name="role" className="w-full bg-background-dark border border-border-dark rounded-xl p-3 text-white text-sm focus:border-primary outline-none transition-all cursor-pointer">
                    <option value="STAFF">Staff Member</option>
                    <option value="CONSULTANT">Travel Consultant</option>
                    <option value="ADMIN">Administrator</option>
                    <option value="SUPER_ADMIN">Super Admin</option>
                  </select>
                </div>
                
                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 text-sm font-bold text-text-secondary hover:text-white bg-surface-light/5 border border-border-dark rounded-xl transition-all">Cancel</button>
                  <button 
                    disabled={isSubmitting} 
                    type="submit" 
                    className="flex-1 py-3 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-xl disabled:opacity-50 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        Creating...
                      </>
                    ) : (
                      'Confirm Member'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
