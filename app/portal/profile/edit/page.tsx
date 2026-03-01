'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

interface ProfileData {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  avatarUrl: string | null;
  role: string;
  createdAt: string;
}

export default function ProfilePage() {
  const { user: clerkUser, isLoaded } = useUser();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const fetchProfile = React.useCallback(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    try {
      const res = await fetch('/api/user/profile', {
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setFirstName(data.firstName || '');
        setLastName(data.lastName || '');
        setPhone(data.phone || '');
      } else if (res.status === 404 && clerkUser) {
        // Fallback to Clerk data if DB profile doesn't exist yet
        setFirstName(clerkUser.firstName || '');
        setLastName(clerkUser.lastName || '');
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        console.error('Fetch profile request timed out');
      } else {
        console.error('Failed to fetch profile:', err);
      }
    } finally {
      setLoading(false);
      clearTimeout(timeoutId);
    }
  }, [clerkUser]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSave = async () => {
    setSaving(true);
    setToast(null);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const res = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setEditing(false);
        setToast({ type: 'success', message: 'Profile updated successfully!' });
      } else {
        setToast({ type: 'error', message: 'Failed to update profile.' });
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        setToast({ type: 'error', message: 'Request timed out. Please try again.' });
      } else {
        setToast({ type: 'error', message: 'Network error. Please try again.' });
      }
    } finally {
      setSaving(false);
      clearTimeout(timeoutId);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const handleCancel = () => {
    setFirstName(profile?.firstName || '');
    setLastName(profile?.lastName || '');
    setPhone(profile?.phone || '');
    setEditing(false);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const roleLabel = (role: string) => {
    const labels: Record<string, string> = {
      CUSTOMER: 'Customer',
      CONSULTANT: 'Travel Consultant',
      ADMIN: 'Administrator',
      SUPER_ADMIN: 'Super Admin',
    };
    return labels[role] || role;
  };

  if (!isLoaded || loading) {
    return (
      <div className="relative min-h-screen w-full pt-[72px]">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-white/5 rounded w-48" />
            <div className="h-64 bg-white/5 rounded-3xl" />
          </div>
        </div>
      </div>
    );
  }

  const avatarUrl = clerkUser?.imageUrl || profile?.avatarUrl;
  const displayName = [profile?.firstName, profile?.lastName].filter(Boolean).join(' ') || clerkUser?.fullName || 'Traveler';

  return (
    <div className="relative min-h-screen w-full pt-[72px] overflow-x-hidden text-slate-100">
      <style>{`
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          opacity: 0.05;
          z-index: 50;
          pointer-events: none;
          background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuBCQHEMVh5D98jz39YYJLtcHazo1BuxJ8Dx9PwUaDdOclmH8H9j3d1LtABaoTLPYuaTIOpAKgWGxYZc2KTnvhF0VmUtt488vpEy-gxcRLNvvfc9IOo-4CXk9TGXJhAkUFPmjXA0d42CjC6g58awbIgm5bGrFa5lsFYlxaZ8-r1dOgvRTXdqi4gAtw-OICZm73jvzwLDt3bdR96OsKWNcDaVWY7hgHB250JZSbSKI8RMhPqW52YE7rEIE_ZrDluEc-zVnQJKdZ5cyw);
        }
        .glare-sweep {
          position: relative;
          overflow: hidden;
        }
        .glare-sweep::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(30deg);
          transition: all 0.5s;
        }
        .glare-sweep:hover::after {
          left: 120%;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
      <div className="noise-overlay"></div>
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4">
          <div
            className={`flex items-center gap-3 p-4 rounded-xl border shadow-2xl transition-all animate-fade-in-up ${
              toast.type === 'success'
                ? 'bg-green-500/90 border-green-500/50 text-white backdrop-blur-md'
                : 'bg-red-500/90 border-red-500/50 text-white backdrop-blur-md'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {toast.type === 'success' ? 'check_circle' : 'error'}
            </span>
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined">person</span>
              <span className="font-semibold text-sm">Account Settings</span>
            </div>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group" href="#security">
              <span className="material-symbols-outlined group-hover:text-white">shield</span>
              <span className="text-sm group-hover:text-white">Privacy & Security</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group" href="#preferences">
              <span className="material-symbols-outlined group-hover:text-white">settings</span>
              <span className="text-sm group-hover:text-white">Preferences</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group" href="/portal/history">
              <span className="material-symbols-outlined group-hover:text-white">flight_takeoff</span>
              <span className="text-sm group-hover:text-white">Trip History</span>
            </Link>
            
            <hr className="border-white/10 my-4" />
            
            <div className="p-4 glass-card rounded-2xl">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Member Status</p>
              <p className="text-lg font-bold text-primary italic">
                {profile?.role === 'ADMIN' || profile?.role === 'SUPER_ADMIN' ? 'ELITE ADMIN' : 'CRIMSON ELITE'}
              </p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-3">
                <div className="bg-primary h-full w-[85%] rounded-full shadow-[0_0_8px_#c51110]"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">1,200 points to Black Diamond</p>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-10">
            {/* Profile Overview */}
            <section className="space-y-6" id="profile">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">Profile Overview</h3>
                {!editing && (
                  <button
                    onClick={() => setEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg text-sm font-medium transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                    Edit Profile
                  </button>
                )}
              </div>
              
              <div className="glass-card p-8 rounded-3xl space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative group">
                    {avatarUrl ? (
                      <div 
                        className="size-32 rounded-full bg-center bg-cover border-2 border-primary shadow-[0_0_20px_rgba(197,17,16,0.2)]"
                        style={{ backgroundImage: `url("${avatarUrl}")` }}
                      />
                    ) : (
                      <div className="size-32 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(197,17,16,0.2)]">
                        <span className="material-symbols-outlined text-primary text-5xl">person</span>
                      </div>
                    )}
                    <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                    </button>
                  </div>
                  <div className="flex-1 space-y-1 text-center md:text-left">
                    <h4 className="text-xl font-bold">{displayName}</h4>
                    <p className="text-slate-400 text-sm">Member since {profile?.createdAt ? formatDate(profile.createdAt) : 'Unknown'} • Location Unspecified</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-[11px] font-bold text-primary uppercase border border-primary/20 tracking-wider">
                        {roleLabel(profile?.role || 'CUSTOMER')}
                      </span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-[11px] font-bold text-slate-300 uppercase border border-white/10 tracking-wider">
                        Verified Identity
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      value={editing ? firstName : (profile?.firstName || '—')}
                      onChange={editing ? (e) => setFirstName(e.target.value) : undefined}
                      readOnly={!editing}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors read-only:opacity-70 read-only:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      value={editing ? lastName : (profile?.lastName || '—')}
                      onChange={editing ? (e) => setLastName(e.target.value) : undefined}
                      readOnly={!editing}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors read-only:opacity-70 read-only:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      value={profile?.email || clerkUser?.primaryEmailAddress?.emailAddress || '—'}
                      readOnly
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors opacity-70 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      value={editing ? phone : (profile?.phone || '—')}
                      onChange={editing ? (e) => setPhone(e.target.value) : undefined}
                      readOnly={!editing}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors read-only:opacity-70 read-only:outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Travel Documents */}
            <section className="space-y-6" id="documents">
              <h3 className="text-2xl font-bold tracking-tight">Travel Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-3xl border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-4">
                    <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">menu_book</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-green-500/10 text-green-500 rounded border border-green-500/20">VALID</span>
                  </div>
                  <h5 className="font-bold">Passport (G-Series)</h5>
                  <p className="text-xs text-slate-400 mt-1">Number: **** **** 4821</p>
                  <div className="mt-4 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">Expiry Date</p>
                      <p className="text-sm font-medium">12 Oct 2028</p>
                    </div>
                    <button className="text-xs text-primary font-bold hover:underline">View Details</button>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-3xl border-l-4 border-l-amber-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="size-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                      <span className="material-symbols-outlined">assignment_ind</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-amber-500/10 text-amber-500 rounded border border-amber-500/20">EXPIRING SOON</span>
                  </div>
                  <h5 className="font-bold">Schengen Visa (Multi)</h5>
                  <p className="text-xs text-slate-400 mt-1">Status: Active</p>
                  <div className="mt-4 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">Expiry Date</p>
                      <p className="text-sm font-medium text-amber-500">15 Dec 2024</p>
                    </div>
                    <button className="text-xs text-primary font-bold hover:underline">Renew Now</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Preferences & Security */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Preferences */}
              <section className="space-y-6" id="preferences">
                <h3 className="text-xl font-bold">Preferences</h3>
                <div className="glass-card p-6 rounded-3xl space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Default Currency</label>
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-primary focus:ring-0">
                      <option className="bg-[#0a0a0a]">USD ($)</option>
                      <option className="bg-[#0a0a0a]" defaultValue="EUR (€)">EUR (€)</option>
                      <option className="bg-[#0a0a0a]">KES (KSh)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">System Language</label>
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-primary focus:ring-0">
                      <option className="bg-[#0a0a0a]" defaultValue="English (EN)">English (EN)</option>
                      <option className="bg-[#0a0a0a]">Français (FR)</option>
                      <option className="bg-[#0a0a0a]">Kiswahili (SW)</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-10 h-5 bg-white/10 rounded-full peer-checked:bg-primary transition-colors"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
                    </div>
                    <span className="text-sm font-medium group-hover:text-white transition-colors">Newsletter Subscription</span>
                  </label>
                </div>
              </section>

              {/* Security */}
              <section className="space-y-6" id="security">
                <h3 className="text-xl font-bold">Security</h3>
                <div className="glass-card p-6 rounded-3xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">Two-Factor Auth</p>
                      <p className="text-[11px] text-slate-500">Secure via Authenticator</p>
                    </div>
                    <div className="relative cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-10 h-5 bg-white/10 rounded-full peer-checked:bg-primary transition-colors"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
                    </div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">lock_reset</span>
                    Change Password
                  </button>
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-[10px] text-primary font-bold uppercase mb-1">Last Login</p>
                    <p className="text-xs text-slate-400">2 hours ago • IP: 192.168.1.42 (Paris, FR)</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Linked Accounts */}
            <section className="space-y-6">
              <h3 className="text-xl font-bold">Linked Accounts</h3>
              <div className="glass-card p-6 rounded-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-900 flex items-center justify-center">
                        <svg className="size-4 fill-white" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.08 4.44-1.12 1.12-2.8 2.32-5.76 2.32-4.64 0-8.44-3.76-8.44-8.4s3.8-8.4 8.44-8.4c2.48 0 4.4 1 5.8 2.32l2.32-2.32c-2.12-2.04-4.88-3.2-8.12-3.2-6.56 0-12 5.44-12 12s5.44 12 12 12c3.56 0 6.24-1.16 8.32-3.32 2.16-2.16 2.84-5.2 2.84-7.68 0-.48-.04-1-.12-1.44h-11.04z" /></svg>
                      </div>
                      <span className="text-xs font-bold">Google</span>
                    </div>
                    <span className="text-[10px] text-green-500 font-bold">LINKED</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-900 flex items-center justify-center">
                        <svg className="size-4 fill-white" viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-3.04.805-.98 2.15-1.62 3.23-1.62.03 0 .05.01.068.03zM3 17.25c0 2.21 1.95 4.88 3.5 4.88.58 0 1.13-.39 1.85-.39 1.47 0 2.22.73 3.53.73 1.55 0 3.12-2.43 3.12-4.83 0-3.28-3.34-4.45-3.34-4.45a3.89 3.89 0 0 0-2.61.8c-.58.42-1.14 1.05-1.59 1.05-.45 0-1.01-.62-1.59-1.04a3.91 3.91 0 0 0-2.87-.81C3 12.8 3 17.25 3 17.25z" /></svg>
                      </div>
                      <span className="text-xs font-bold">Apple ID</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold hover:text-white cursor-pointer transition-colors">LINK</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-900 flex items-center justify-center">
                        <svg className="size-4 fill-white" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" /></svg>
                      </div>
                      <span className="text-xs font-bold">LinkedIn</span>
                    </div>
                    <span className="text-[10px] text-green-500 font-bold">LINKED</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions Footer */}
            {editing && (
              <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
                <button className="text-xs text-slate-500 hover:text-red-500 font-bold transition-colors uppercase tracking-widest hidden sm:block">Deactivate My Account</button>
                <div className="flex gap-4 w-full sm:w-auto">
                  <button 
                    onClick={handleCancel}
                    className="flex-1 sm:flex-none sm:px-8 py-3 rounded-xl border border-white/10 font-bold text-sm hover:bg-white/5 transition-all text-slate-300 hover:text-white"
                  >
                    Cancel Changes
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 sm:flex-none sm:px-10 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-[0_0_20px_rgba(197,17,16,0.3)] glare-sweep disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save All Changes'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 grid grid-cols-4 py-3 z-50">
        <Link href="/tours" className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">explore</span>
          <span className="text-[10px]">Explore</span>
        </Link>
        <Link href="/portal/wishlist" className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
          <span className="text-[10px]">Saved</span>
        </Link>
        <Link href="/portal/history" className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">receipt_long</span>
          <span className="text-[10px]">Trips</span>
        </Link>
        <Link href="/portal/profile" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[20px]">account_circle</span>
          <span className="text-[10px]">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
