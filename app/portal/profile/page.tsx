'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    try {
      const res = await fetch('/api/user/profile');
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
    } catch (err) {
      console.error('Failed to fetch profile:', err);
    } finally {
      setLoading(false);
    }
  }, [clerkUser]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSave = async () => {
    setSaving(true);
    setToast(null);
    try {
      const res = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone }),
      });
      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setEditing(false);
        setToast({ type: 'success', message: 'Profile updated successfully!' });
      } else {
        setToast({ type: 'error', message: 'Failed to update profile.' });
      }
    } catch {
      setToast({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSaving(false);
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-surface-dark rounded w-48" />
            <div className="h-64 bg-surface-dark rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  const avatarUrl = clerkUser?.imageUrl || profile?.avatarUrl;
  const displayName = [profile?.firstName, profile?.lastName].filter(Boolean).join(' ') || clerkUser?.fullName || 'Traveler';

  return (
    <div className="relative min-h-screen w-full pt-[72px]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/portal/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-white">My Profile</span>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div
            className={`mb-6 flex items-center gap-3 p-4 rounded-xl border transition-all animate-fade-in-up ${
              toast.type === 'success'
                ? 'bg-green-500/10 border-green-500/20 text-green-400'
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {toast.type === 'success' ? 'check_circle' : 'error'}
            </span>
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden">
          {/* Header Banner */}
          <div className="relative h-32 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent">
            <div className="absolute -bottom-12 left-6">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={displayName}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-2xl border-4 border-surface-dark object-cover shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-2xl border-4 border-surface-dark bg-primary/20 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-primary text-4xl">person</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-16 px-6 pb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">{displayName}</h1>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                    profile?.role === 'ADMIN' || profile?.role === 'SUPER_ADMIN'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-primary/10 text-primary border-primary/20'
                  }`}>
                    <span className="material-symbols-outlined text-[14px]">
                      {profile?.role === 'ADMIN' || profile?.role === 'SUPER_ADMIN' ? 'shield' : 'person'}
                    </span>
                    {roleLabel(profile?.role || 'CUSTOMER')}
                  </span>
                  {profile?.createdAt && (
                    <span className="text-xs text-slate-500">Member since {formatDate(profile.createdAt)}</span>
                  )}
                </div>
              </div>
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

            {/* Info Fields */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">First Name</label>
                  {editing ? (
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                      placeholder="Enter first name"
                    />
                  ) : (
                    <p className="text-white text-sm py-2.5">{profile?.firstName || '—'}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Last Name</label>
                  {editing ? (
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                      placeholder="Enter last name"
                    />
                  ) : (
                    <p className="text-white text-sm py-2.5">{profile?.lastName || '—'}</p>
                  )}
                </div>
              </div>

              {/* Email (read-only always) */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-[18px]">mail</span>
                  <p className="text-white text-sm py-2.5">{profile?.email || clerkUser?.primaryEmailAddress?.emailAddress || '—'}</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                    Verified
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Phone Number</label>
                {editing ? (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                    placeholder="Enter phone number"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-[18px]">phone</span>
                    <p className="text-white text-sm py-2.5">{profile?.phone || '—'}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Edit Actions */}
            {editing && (
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border-dark">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-red-700 disabled:opacity-50 text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(198,16,16,0.3)] hover:shadow-[0_0_20px_rgba(198,16,16,0.5)]"
                >
                  {saving ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">save</span>
                      Save Changes
                    </>
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2.5 text-slate-400 hover:text-white border border-border-dark hover:border-slate-500 rounded-lg text-sm font-medium transition-all"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <Link
            href="/portal/dashboard"
            className="flex items-center gap-3 p-4 bg-surface-dark border border-border-dark rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">dashboard</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Dashboard</p>
              <p className="text-xs text-slate-400">Back to overview</p>
            </div>
          </Link>
          <Link
            href="/portal/wishlist"
            className="flex items-center gap-3 p-4 bg-surface-dark border border-border-dark rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Wishlist</p>
              <p className="text-xs text-slate-400">Saved destinations</p>
            </div>
          </Link>
          <Link
            href="/portal/loyalty"
            className="flex items-center gap-3 p-4 bg-surface-dark border border-border-dark rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">loyalty</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Loyalty</p>
              <p className="text-xs text-slate-400">Points & rewards</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
