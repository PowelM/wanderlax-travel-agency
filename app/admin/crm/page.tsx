"use client";


import React, { useState, useMemo } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

// ─── Types ────────────────────────────────────────────────────────────────────

type CustomerStatus = 'VIP' | 'Active' | 'Lead' | 'Inactive';

interface BookingHistoryItem {
  destination: string;
  hotel: string;
  dates: string;
  type: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  amount: number;
  image: string;
}

interface ActivityItem {
  color: string;
  title: string;
  time: string;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  status: CustomerStatus;
  totalSpent: number;
  bookingsCount: number;
  avgStay: number;
  avatar: string;
  isOnline: boolean;
  lastActive: string;
  preferences: string[];
  notes: string;
  bookingHistory: BookingHistoryItem[];
  recentActivity: ActivityItem[];
}

// ─── Sample Data ──────────────────────────────────────────────────────────────

const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 1,
    name: 'Alice Vanderbilt',
    email: 'alice.vanderbilt@email.com',
    phone: '+1 212-555-0101',
    location: 'New York, USA',
    birthday: 'Oct 24, 1985',
    status: 'VIP',
    totalSpent: 45200,
    bookingsCount: 12,
    avgStay: 5.4,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByPqNBVhuLARyGPrBGQKd7oysBbDnCpKOAxzQ6PIAxqD2c-16_GMbaRo-eKaKS2cZr-WwkCnY2B-2XKKvcl0jeXU2DUCL1J0iOnTy4gT3h9-LKwCHQRPqFQx9aMIX4QoT2ISVu7Wag2KczIWglrIcUhFu1f0IL8FV5rH2He-9w81WIDVUVcUIFfVCVS3OApJWqRTLYlj4mupTPi9U3Ggwv1zyKSiJYIcNaOTJzEbnuWRTZpCq-Xr72kFb2kXO9dfGcekkuAcfJoQ',
    isOnline: true,
    lastActive: '2h ago',
    preferences: ['First Class Only', 'Vegan Meals', 'Private Transfer', 'Pet Friendly', 'Late Checkout', 'High Floor'],
    notes: 'Client prefers modern architecture hotels. Allergic to peanuts. Usually travels with spouse and 1 small dog. Prefers communication via email over phone calls.',
    recentActivity: [
      { color: 'bg-emerald-500', title: 'Email Opened: "Your upcoming trip to Kyoto"', time: 'Today, 10:30 AM' },
      { color: 'bg-blue-500', title: 'Booking Confirmed #WL-8892', time: 'Yesterday, 4:15 PM' },
      { color: 'bg-slate-500', title: 'Invoice Sent #INV-2023-001', time: 'Oct 12, 2:00 PM' },
      { color: 'bg-slate-500', title: 'Updated Preferences', time: 'Oct 05, 11:20 AM' },
    ],
    bookingHistory: [
      { destination: 'Kyoto, Japan', hotel: 'Aman Kyoto', dates: 'Oct 20 – Oct 25, 2024', type: 'Leisure', status: 'Upcoming', amount: 12450, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3boOYVrR1n0H6uoqOD2LfJwHLRQEgSY3MhagWxxKofUfsAEY8jJsuwea18cx3q5UE2utYGNY1W6oxgh7DBDwyWkR_2vBOHqpWTedgQYAhUDiECdNEtDUgwKHcF9CqyBCcCj7CANLtAcDBEnKDEAuJKgj_1bs4lrHEMR9LTrcA16nL3jN64GEnNKUagaEoZjDM1yzxCk1-_78gHplYBNoiSM8tI7rhifX1ee_PDlKhfOYad3yismWuZ8QrZpNr7YVejzRiShx8Mw' },
      { destination: 'Maldives', hotel: 'Soneva Jani', dates: 'Aug 15 – Aug 22, 2023', type: 'Honeymoon', status: 'Completed', amount: 28900, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdVK9qXAXFMbLsRvUu0coXmt3aq45ZhRtTjUJ3RmDlcvvO5vNZLaJ3KY-sOT5aki81_W4Vq2P2oTTQtfKbv5-ug-bbXxbRZxOAQum2WSSGOM6XiDIMkGasBkscC3fc-eUhQHEP3vnZtoCF0rEo6adXZ2n09-Ehq6bF40AeUUJpvKIC5r0FtjHEgNult_jUlPe2kV3pXxlnUgvMGLeuSlOfbo_bypjjiGfYQ5F8ZTuR1O05GK_2ApGiefuG45bB5SaVuvPZc5K5fg' },
      { destination: 'Paris, France', hotel: 'Ritz Paris', dates: 'Jun 10 – Jun 14, 2023', type: 'Business', status: 'Completed', amount: 3850, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx48um9kPtux1-ffmE_fvtWjTx959Spt-P27lKHgcpLysuArbGo6qiePQxKfqDHNQyfp3t1lSXzZDk20-sbouUtRDncVxZO9OuhgUfumiBm-IlFHl4UMW2igpOZrYKGwyBaA7AWC1KAju8_KiZ16pJ0_Lr6m-bHGEjf6jLD9NUR-qrqc81Q38FvMLdv13PyANKnGM0ZHtfJJSPTx8E9Xpf9WOTUzjmVvBjETHL4ES6qWR0AzW6Kn1K62VBKCz9Jci_B_Wd70bL6Q' },
    ],
  },
  {
    id: 2,
    name: 'James Rothschild',
    email: 'james.rothschild@email.com',
    phone: '+44 20-7946-0102',
    location: 'London, UK',
    birthday: 'Mar 15, 1978',
    status: 'Active',
    totalSpent: 12800,
    bookingsCount: 4,
    avgStay: 3.2,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6FB6fWAPamLblnZlYftAGZES91TeRIeM8FyZRG8sZKJx-2xgzM5xkwRkdCPhJHBuG3qLkq8m0C2iM81drqniFBUSFqkR4q663FqSD1-U0mhc3OAMky2yxhmWVhN21UYbZOFeNtdE3p2b2u67d7sHl8VLnsGNXOcfdyCY8aiGvvZnzyQW2lZ8UXkw5SA7UooF8HsZ0v6ohBfNH49A1A7x79RK1thRQf7yIp-Zx4CYcvnUhZfuDNgTxN16Z_F_b7cyFkh16OhPlUQ',
    isOnline: false,
    lastActive: '1d ago',
    preferences: ['Business Class', 'Aisle Seat', 'Room Service', 'Non-smoking'],
    notes: 'Long-term corporate client. Frequently travels for business. Prefers city-center hotels with conference facilities.',
    recentActivity: [
      { color: 'bg-blue-500', title: 'Booking Request Submitted', time: 'Yesterday, 9:00 AM' },
      { color: 'bg-slate-500', title: 'Invoice Paid #INV-2023-045', time: 'Nov 01, 3:00 PM' },
    ],
    bookingHistory: [
      { destination: 'Singapore', hotel: 'Marina Bay Sands', dates: 'Dec 01 – Dec 05, 2024', type: 'Business', status: 'Upcoming', amount: 5400, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3boOYVrR1n0H6uoqOD2LfJwHLRQEgSY3MhagWxxKofUfsAEY8jJsuwea18cx3q5UE2utYGNY1W6oxgh7DBDwyWkR_2vBOHqpWTedgQYAhUDiECdNEtDUgwKHcF9CqyBCcCj7CANLtAcDBEnKDEAuJKgj_1bs4lrHEMR9LTrcA16nL3jN64GEnNKUagaEoZjDM1yzxCk1-_78gHplYBNoiSM8tI7rhifX1ee_PDlKhfOYad3yismWuZ8QrZpNr7YVejzRiShx8Mw' },
      { destination: 'Dubai, UAE', hotel: 'Burj Al Arab', dates: 'Sep 10 – Sep 14, 2023', type: 'Business', status: 'Completed', amount: 7400, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdVK9qXAXFMbLsRvUu0coXmt3aq45ZhRtTjUJ3RmDlcvvO5vNZLaJ3KY-sOT5aki81_W4Vq2P2oTTQtfKbv5-ug-bbXxbRZxOAQum2WSSGOM6XiDIMkGasBkscC3fc-eUhQHEP3vnZtoCF0rEo6adXZ2n09-Ehq6bF40AeUUJpvKIC5r0FtjHEgNult_jUlPe2kV3pXxlnUgvMGLeuSlOfbo_bypjjiGfYQ5F8ZTuR1O05GK_2ApGiefuG45bB5SaVuvPZc5K5fg' },
    ],
  },
  {
    id: 3,
    name: 'Elena Medici',
    email: 'elena.medici@email.com',
    phone: '+39 06-555-0103',
    location: 'Rome, Italy',
    birthday: 'Jul 08, 1992',
    status: 'Lead',
    totalSpent: 0,
    bookingsCount: 0,
    avgStay: 0,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs2qNHZc1Mj7NEiw5WcJoOK_jhV5u07bBR4Zo5-nUZOMdMUEh6JoXJqzIfYTMINqYFSwZ4dBBJTOXehfTLdhV_jTM4dStwPm-B4p3sA53B6JxsZsXYSyGz0I2duEY8CZca2XrDTfVmcH_aF_NkWx2tWh9PN8pXnOU1hovbbquxRaS5GkGo1cucN-1bXsbWHZ8IVpF0fnm8hQ_deLfxiWNzFwq22as-QQ8tv-0hnZjxATE70GWrLPhhXaUiUdQqDBDghqrpwIkt6A',
    isOnline: false,
    lastActive: '5d ago',
    preferences: ['Boutique Hotels', 'Local Cuisine', 'Walking Tours'],
    notes: 'Potential high-value lead. Interested in cultural and historical tour packages across Europe. In conversation stage.',
    recentActivity: [
      { color: 'bg-yellow-500', title: 'Inquiry Submitted via Website', time: '5 days ago' },
      { color: 'bg-slate-500', title: 'Brochure Email Sent', time: '6 days ago' },
    ],
    bookingHistory: [],
  },
  {
    id: 4,
    name: 'Chen Wei',
    email: 'chen.wei@email.com',
    phone: '+86 10-555-0104',
    location: 'Beijing, China',
    birthday: 'Jan 20, 1980',
    status: 'VIP',
    totalSpent: 88500,
    bookingsCount: 21,
    avgStay: 7.1,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA23M0pJEvjO7Z1bEjfJHqpVIYHauZ8J91KLUvlVhmtEIarEeIjTXYHegffwXa59JgFtXVk1nMZejQO9XM988YMCmzT5_JmS-w5yjbFYEwQDm5lJ3RgT-gDBQxrCsW7Qe_xgCyIZAvDSt8PDx6mdwgoPY-H38Viw7V1bOIL3KYGyvisrByyAOOZgaNtAeXBGr4V2QG8HIr5_2Rz0Z6XYoIfDcl3MvCozAqdZb1whTRIL4iWT1ZS-urdpKoWJntzzzAepE6u_47iRQ',
    isOnline: true,
    lastActive: '1w ago',
    preferences: ['Suite Only', 'Concierge Service', 'Airport Pickup', 'Spa Access', 'Fine Dining'],
    notes: 'Top-spending client. Brings large business delegations. Requires Mandarin-speaking guides. Interested in exclusive private island experiences.',
    recentActivity: [
      { color: 'bg-emerald-500', title: 'Package Proposal Accepted', time: '1 week ago' },
      { color: 'bg-blue-500', title: 'Call with Travel Consultant', time: '8 days ago' },
      { color: 'bg-slate-500', title: 'Annual Review Meeting', time: 'Sep 30, 2:00 PM' },
    ],
    bookingHistory: [
      { destination: 'Bali, Indonesia', hotel: 'Four Seasons Bali', dates: 'Feb 10 – Feb 17, 2024', type: 'Leisure', status: 'Upcoming', amount: 22000, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3boOYVrR1n0H6uoqOD2LfJwHLRQEgSY3MhagWxxKofUfsAEY8jJsuwea18cx3q5UE2utYGNY1W6oxgh7DBDwyWkR_2vBOHqpWTedgQYAhUDiECdNEtDUgwKHcF9CqyBCcCj7CANLtAcDBEnKDEAuJKgj_1bs4lrHEMR9LTrcA16nL3jN64GEnNKUagaEoZjDM1yzxCk1-_78gHplYBNoiSM8tI7rhifX1ee_PDlKhfOYad3yismWuZ8QrZpNr7YVejzRiShx8Mw' },
      { destination: 'Swiss Alps', hotel: 'Badrutt Palace', dates: 'Jan 05 – Jan 12, 2024', type: 'Leisure', status: 'Completed', amount: 35000, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx48um9kPtux1-ffmE_fvtWjTx959Spt-P27lKHgcpLysuArbGo6qiePQxKfqDHNQyfp3t1lSXzZDk20-sbouUtRDncVxZO9OuhgUfumiBm-IlFHl4UMW2igpOZrYKGwyBaA7AWC1KAju8_KiZ16pJ0_Lr6m-bHGEjf6jLD9NUR-qrqc81Q38FvMLdv13PyANKnGM0ZHtfJJSPTx8E9Xpf9WOTUzjmVvBjETHL4ES6qWR0AzW6Kn1K62VBKCz9Jci_B_Wd70bL6Q' },
    ],
  },
  {
    id: 5,
    name: 'Sofia Marchetti',
    email: 'sofia.marchetti@email.com',
    phone: '+33 1-555-0105',
    location: 'Paris, France',
    birthday: 'Apr 12, 1990',
    status: 'Inactive',
    totalSpent: 6200,
    bookingsCount: 2,
    avgStay: 4.0,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByPqNBVhuLARyGPrBGQKd7oysBbDnCpKOAxzQ6PIAxqD2c-16_GMbaRo-eKaKS2cZr-WwkCnY2B-2XKKvcl0jeXU2DUCL1J0iOnTy4gT3h9-LKwCHQRPqFQx9aMIX4QoT2ISVu7Wag2KczIWglrIcUhFu1f0IL8FV5rH2He-9w81WIDVUVcUIFfVCVS3OApJWqRTLYlj4mupTPi9U3Ggwv1zyKSiJYIcNaOTJzEbnuWRTZpCq-Xr72kFb2kXO9dfGcekkuAcfJoQ',
    isOnline: false,
    lastActive: '3mo ago',
    preferences: ['Eco-Hotels', 'Adventure Sports', 'Backpacker'],
    notes: 'Inactive for 3 months. Consider sending a re-engagement offer or promotional email.',
    recentActivity: [
      { color: 'bg-slate-500', title: 'Last Booking Completed', time: '3 months ago' },
    ],
    bookingHistory: [
      { destination: 'Costa Rica', hotel: 'Nayara Springs', dates: 'Aug 01 – Aug 05, 2023', type: 'Adventure', status: 'Completed', amount: 6200, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdVK9qXAXFMbLsRvUu0coXmt3aq45ZhRtTjUJ3RmDlcvvO5vNZLaJ3KY-sOT5aki81_W4Vq2P2oTTQtfKbv5-ug-bbXxbRZxOAQum2WSSGOM6XiDIMkGasBkscC3fc-eUhQHEP3vnZtoCF0rEo6adXZ2n09-Ehq6bF40AeUUJpvKIC5r0FtjHEgNult_jUlPe2kV3pXxlnUgvMGLeuSlOfbo_bypjjiGfYQ5F8ZTuR1O05GK_2ApGiefuG45bB5SaVuvPZc5K5fg' },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<CustomerStatus, string> = {
  VIP: 'bg-primary/20 text-primary',
  Active: 'bg-blue-500/20 text-blue-400',
  Lead: 'bg-yellow-500/20 text-yellow-400',
  Inactive: 'bg-slate-500/20 text-slate-400',
};

const BOOKING_STATUS_STYLES: Record<string, string> = {
  Upcoming: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
};

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

// ─── Add / Edit Customer Modal ─────────────────────────────────────────────────

interface CustomerFormProps {
  title: string;
  initial?: Partial<Customer>;
  onClose: () => void;
  onSave: (data: Partial<Customer>) => void;
}

function CustomerFormModal({ title, initial = {}, onClose, onSave }: CustomerFormProps) {
  const [form, setForm] = useState({
    name: initial.name ?? '',
    email: initial.email ?? '',
    phone: initial.phone ?? '',
    location: initial.location ?? '',
    birthday: initial.birthday ?? '',
    status: (initial.status ?? 'Lead') as CustomerStatus,
    notes: initial.notes ?? '',
  });

  const handle = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const inputCls = "w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-surface-dark border border-border-dark rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-text-muted hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Body */}
        <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Full Name</label>
              <input className={inputCls} value={form.name} onChange={handle('name')} placeholder="e.g. Alice Vanderbilt" />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Email</label>
              <input className={inputCls} type="email" value={form.email} onChange={handle('email')} placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Phone</label>
              <input className={inputCls} value={form.phone} onChange={handle('phone')} placeholder="+1 212-555-0100" />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Location</label>
              <input className={inputCls} value={form.location} onChange={handle('location')} placeholder="City, Country" />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Birthday</label>
              <input className={inputCls} value={form.birthday} onChange={handle('birthday')} placeholder="Jan 01, 1990" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Status</label>
              <select className={inputCls} value={form.status} onChange={handle('status')}>
                <option value="VIP">VIP</option>
                <option value="Active">Active</option>
                <option value="Lead">Lead</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Notes</label>
              <textarea className={`${inputCls} resize-none`} rows={3} value={form.notes} onChange={handle('notes')} placeholder="Internal notes about this client..." />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border-dark">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-text-muted hover:text-white border border-border-dark hover:bg-white/5 transition-colors">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
          >
            Save Customer
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Email Modal ───────────────────────────────────────────────────────────────

function EmailModal({ customer, onClose }: { customer: Customer; onClose: () => void }) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sent, setSent] = useState(false);

  const inputCls = "w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all";

  const handleSend = () => {
    setSent(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-surface-dark border border-border-dark rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark">
          <h2 className="text-lg font-bold text-white">Send Email</h2>
          <button onClick={onClose} className="text-text-muted hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">To</label>
            <input className={inputCls} readOnly value={customer.email} />
          </div>
          <div>
            <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Subject</label>
            <input className={inputCls} value={subject} onChange={e => setSubject(e.target.value)} placeholder="Email subject..." />
          </div>
          <div>
            <label className="block text-xs text-text-muted mb-1.5 font-medium uppercase tracking-wide">Message</label>
            <textarea className={`${inputCls} resize-none`} rows={5} value={body} onChange={e => setBody(e.target.value)} placeholder="Write your message..." />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border-dark">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-text-muted hover:text-white border border-border-dark hover:bg-white/5 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={sent}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20 disabled:opacity-60"
          >
            {sent ? (
              <><span className="material-symbols-outlined text-[18px]">check_circle</span> Sent!</>
            ) : (
              <><span className="material-symbols-outlined text-[18px]">send</span> Send Email</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Confirmation ───────────────────────────────────────────────────────

function DeleteConfirmModal({ customer, onClose, onConfirm }: { customer: Customer; onClose: () => void; onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-surface-dark border border-border-dark rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-red-400">delete_forever</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Delete Customer?</h3>
        <p className="text-sm text-text-muted mb-6">Are you sure you want to remove <span className="text-white font-medium">{customer.name}</span> from your CRM? This action cannot be undone.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={onClose} className="px-5 py-2 rounded-lg text-sm text-text-muted hover:text-white border border-border-dark hover:bg-white/5 transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-colors">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

type FilterTab = 'All Clients' | 'VIP' | 'Active' | 'Lead' | 'Inactive';
const FILTER_TABS: FilterTab[] = ['All Clients', 'VIP', 'Active', 'Lead', 'Inactive'];

export default function WanderluxAdminCustomerCrmPage() {
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [selectedId, setSelectedId] = useState<number>(INITIAL_CUSTOMERS[0].id);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All Clients');

  // Modals
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const selectedCustomer = customers.find(c => c.id === selectedId)!;

  // ── Filtered list ──
  const filtered = useMemo(() => {
    let list = customers;
    if (activeFilter !== 'All Clients') list = list.filter(c => c.status === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.location.toLowerCase().includes(q));
    }
    return list;
  }, [customers, activeFilter, search]);

  // ── Handlers ──
  const handleAdd = (data: Partial<Customer>) => {
    const newCustomer: Customer = {
      id: Date.now(),
      name: data.name ?? 'New Customer',
      email: data.email ?? '',
      phone: data.phone ?? '',
      location: data.location ?? '',
      birthday: data.birthday ?? '',
      status: (data.status ?? 'Lead') as CustomerStatus,
      totalSpent: 0,
      bookingsCount: 0,
      avgStay: 0,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByPqNBVhuLARyGPrBGQKd7oysBbDnCpKOAxzQ6PIAxqD2c-16_GMbaRo-eKaKS2cZr-WwkCnY2B-2XKKvcl0jeXU2DUCL1J0iOnTy4gT3h9-LKwCHQRPqFQx9aMIX4QoT2ISVu7Wag2KczIWglrIcUhFu1f0IL8FV5rH2He-9w81WIDVUVcUIFfVCVS3OApJWqRTLYlj4mupTPi9U3Ggwv1zyKSiJYIcNaOTJzEbnuWRTZpCq-Xr72kFb2kXO9dfGcekkuAcfJoQ',
      isOnline: false,
      lastActive: 'Just now',
      preferences: [],
      notes: data.notes ?? '',
      recentActivity: [{ color: 'bg-green-500', title: 'Customer Added to CRM', time: 'Just now' }],
      bookingHistory: [],
    };
    setCustomers(prev => [newCustomer, ...prev]);
    setSelectedId(newCustomer.id);
    setShowAdd(false);
  };

  const handleEdit = (data: Partial<Customer>) => {
    setCustomers(prev => prev.map(c => c.id === selectedId ? {
      ...c,
      name: data.name ?? c.name,
      email: data.email ?? c.email,
      phone: data.phone ?? c.phone,
      location: data.location ?? c.location,
      birthday: data.birthday ?? c.birthday,
      status: (data.status ?? c.status) as CustomerStatus,
      notes: data.notes ?? c.notes,
    } : c));
    setShowEdit(false);
  };

  const handleDelete = () => {
    const remaining = customers.filter(c => c.id !== selectedId);
    setCustomers(remaining);
    setSelectedId(remaining[0]?.id ?? 0);
    setShowDelete(false);
  };

  return (
    <div className="stitch-screen h-screen overflow-hidden">
      <div className="flex h-full w-full overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
          {/* Header */}
          <AdminHeader title="Customer Management" description="Manage high-net-worth clients and interactions">
            <button
              onClick={() => setShowAdd(true)}
              className="flex items-center gap-2 px-4 h-10 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span className="hidden sm:inline">Add Customer</span>
            </button>
          </AdminHeader>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-12 gap-6 h-full min-h-[800px]">

              {/* ── Left Column: Search & List ── */}
              <div className="col-span-12 xl:col-span-4 flex flex-col gap-4 h-full">

                {/* Search */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-text-muted group-focus-within:text-primary transition-colors">search</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-surface-dark text-white placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-primary/50 sm:text-sm shadow-sm transition-all"
                    placeholder="Search clients..."
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {FILTER_TABS.map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-colors ${
                        activeFilter === tab
                          ? 'bg-primary/20 text-primary border-primary/20'
                          : 'bg-surface-dark hover:bg-border-dark text-text-muted border-transparent'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Customer List */}
                <div className="bg-surface-dark rounded-xl border border-border-dark overflow-hidden flex flex-col flex-1">
                  <div className="overflow-y-auto flex-1">
                    {filtered.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-40 text-center px-4">
                        <span className="material-symbols-outlined text-text-muted text-4xl mb-2">person_search</span>
                        <p className="text-sm text-text-muted">No clients match your search.</p>
                      </div>
                    ) : (
                      filtered.map(customer => {
                        const isActive = customer.id === selectedId;
                        return (
                          <div
                            key={customer.id}
                            onClick={() => setSelectedId(customer.id)}
                            className={`p-4 border-b border-border-dark hover:bg-white/5 cursor-pointer transition-colors border-l-2 ${
                              isActive ? 'bg-white/5 border-l-primary' : 'border-l-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <div
                                  className="h-10 w-10 rounded-full bg-cover bg-center"
                                  style={{ backgroundImage: `url('${customer.avatar}')` }}
                                />
                                {customer.isOnline && (
                                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-surface-dark" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                  <h4 className={`text-sm truncate ${isActive ? 'font-bold text-white' : 'font-medium text-white'}`}>{customer.name}</h4>
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ml-2 ${STATUS_STYLES[customer.status]}`}>{customer.status}</span>
                                </div>
                                <p className="text-xs text-text-muted truncate">{customer.email}</p>
                              </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">payments</span>
                                {fmt(customer.totalSpent)}
                              </span>
                              <span>Last active: {customer.lastActive}</span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                  {/* List footer */}
                  <div className="p-3 border-t border-border-dark text-xs text-text-muted text-center">
                    {filtered.length} of {customers.length} clients
                  </div>
                </div>
              </div>

              {/* ── Right Column: Detail View ── */}
              {selectedCustomer ? (
                <div className="col-span-12 xl:col-span-8 h-full flex flex-col gap-6 overflow-y-auto pr-2">

                  {/* Profile Header */}
                  <div className="bg-surface-dark rounded-xl border border-border-dark p-6 relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none rounded-xl" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-5">
                      {/* Avatar with online dot */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="h-24 w-24 rounded-xl bg-cover bg-center shadow-xl ring-4 ring-surface-dark"
                          style={{ backgroundImage: `url('${selectedCustomer.avatar}')` }}
                        />
                        <div className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full flex items-center justify-center bg-surface-dark">
                          <div className={`h-3.5 w-3.5 rounded-full border-2 border-surface-dark ${selectedCustomer.isOnline ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                        </div>
                      </div>

                      {/* Info block */}
                      <div className="flex-1 min-w-0">
                        {/* Name row */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{selectedCustomer.name}</h2>
                          {selectedCustomer.status === 'VIP' ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                              VIP Platinum
                            </span>
                          ) : (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap ${STATUS_STYLES[selectedCustomer.status]}`}>
                              {selectedCustomer.status}
                            </span>
                          )}
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted mb-4">
                          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">location_on</span>{selectedCustomer.location}</span>
                          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">cake</span>{selectedCustomer.birthday}</span>
                          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">call</span>{selectedCustomer.phone}</span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          <button
                            onClick={() => setShowEdit(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                            Edit
                          </button>
                          <button
                            onClick={() => setShowEmail(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
                          >
                            <span className="material-symbols-outlined text-[18px]">mail</span>
                            Email
                          </button>
                          <button
                            onClick={() => setShowDelete(true)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium transition-colors border border-red-500/20"
                            title="Delete customer"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 rounded-lg bg-background-dark border border-border-dark">
                            <p className="text-xs text-text-muted mb-1">Total Spent</p>
                            <p className="text-base sm:text-lg font-bold text-white">{fmt(selectedCustomer.totalSpent)}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-background-dark border border-border-dark">
                            <p className="text-xs text-text-muted mb-1">Bookings</p>
                            <p className="text-base sm:text-lg font-bold text-white">{selectedCustomer.bookingsCount}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-background-dark border border-border-dark">
                            <p className="text-xs text-text-muted mb-1">Avg. Stay</p>
                            <p className="text-base sm:text-lg font-bold text-white">{selectedCustomer.avgStay > 0 ? `${selectedCustomer.avgStay}N` : '—'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats & Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Preferences */}
                    <div className="bg-surface-dark rounded-xl border border-border-dark p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Travel Preferences</h3>
                        <span className="material-symbols-outlined text-text-muted">tune</span>
                      </div>
                      {selectedCustomer.preferences.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedCustomer.preferences.map(pref => (
                            <span key={pref} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">
                              {pref}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-text-muted italic">No preferences recorded.</p>
                      )}
                      <div className="mt-6">
                        <p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">Notes</p>
                        <p className="text-sm text-white leading-relaxed">
                          {selectedCustomer.notes || 'No notes yet.'}
                        </p>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                      </div>
                      <div className="flex-1 overflow-y-auto space-y-4 pr-1 max-h-[220px]">
                        {selectedCustomer.recentActivity.length > 0 ? (
                          selectedCustomer.recentActivity.map((item, i) => (
                            <div key={i} className="flex gap-3">
                              <div className={`mt-1 flex-shrink-0 h-2 w-2 rounded-full ${item.color}`} />
                              <div>
                                <p className="text-sm text-white font-medium">{item.title}</p>
                                <p className="text-xs text-text-muted mt-0.5">{item.time}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-text-muted italic">No recent activity.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Booking History */}
                  <div className="bg-surface-dark rounded-xl border border-border-dark p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-white">Booking History</h3>
                      <span className="text-xs text-text-muted">{selectedCustomer.bookingHistory.length} bookings</span>
                    </div>
                    {selectedCustomer.bookingHistory.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="text-text-muted text-xs uppercase tracking-wider border-b border-border-dark">
                              <th className="pb-3 pl-2 font-medium">Destination</th>
                              <th className="pb-3 font-medium">Dates</th>
                              <th className="pb-3 font-medium">Type</th>
                              <th className="pb-3 font-medium">Status</th>
                              <th className="pb-3 font-medium text-right pr-2">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            {selectedCustomer.bookingHistory.map((booking, i) => (
                              <tr key={i} className="border-b border-border-dark last:border-0 hover:bg-white/5 transition-colors">
                                <td className="py-4 pl-2">
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-14 rounded bg-cover bg-center" style={{ backgroundImage: `url('${booking.image}')` }} />
                                    <div>
                                      <p className="font-bold text-white">{booking.destination}</p>
                                      <p className="text-xs text-text-muted">{booking.hotel}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 text-text-muted">{booking.dates}</td>
                                <td className="py-4 text-text-muted">{booking.type}</td>
                                <td className="py-4">
                                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${BOOKING_STATUS_STYLES[booking.status]}`}>
                                    {booking.status}
                                  </span>
                                </td>
                                <td className="py-4 text-right pr-2 font-medium text-white">{fmt(booking.amount)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <span className="material-symbols-outlined text-text-muted text-4xl mb-2">flight_takeoff</span>
                        <p className="text-sm text-text-muted">No bookings yet for this client.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="col-span-12 xl:col-span-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-text-muted text-6xl mb-4 block">person_search</span>
                    <p className="text-text-muted">Select a client to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* ── Modals ── */}
      {showAdd && (
        <CustomerFormModal
          title="Add New Customer"
          onClose={() => setShowAdd(false)}
          onSave={handleAdd}
        />
      )}
      {showEdit && selectedCustomer && (
        <CustomerFormModal
          title="Edit Customer"
          initial={selectedCustomer}
          onClose={() => setShowEdit(false)}
          onSave={handleEdit}
        />
      )}
      {showEmail && selectedCustomer && (
        <EmailModal
          customer={selectedCustomer}
          onClose={() => setShowEmail(false)}
        />
      )}
      {showDelete && selectedCustomer && (
        <DeleteConfirmModal
          customer={selectedCustomer}
          onClose={() => setShowDelete(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}
