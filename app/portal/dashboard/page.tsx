/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';

const upcomingTrips = [
  {
    destination: 'Santorini, Greece',
    dates: 'Mar 15 - Mar 21, 2025',
    status: 'Confirmed',
    statusColor: 'bg-green-500/10 text-green-500 border-green-500/20',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvoQ7Zvip5jn5ZaFMHXoEM4xSKpCN2Ih2qoH0roUXhbzZs-7ZSqG8ZzL4Cz9kS-1-Y94c1ZUregXQuU632IIgKboaohmGPX5sLqEMrmlsRbPTWfhkyEXX03RQX4ubesRC1WGOHYMWXtk02bodDUkEgW3RZBf1fS2YIeKYmJNbDrmFbaFpCmOAXTzN0x70thPnuXAKVWvKaUbJOCQcLZ5P4BlzU-UJuyNV_kxRfFIVfdzBuseetH5kf6snTVp9pJjzvqwRukC7lmg',
    type: 'Hotel & Tour',
  },
  {
    destination: 'Kyoto, Japan',
    dates: 'Apr 10 - Apr 16, 2025',
    status: 'Pending',
    statusColor: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_hhE52OZGgrrDPr3sPjMHs5sxUWPsEuBUaMhEHMiiZrHL3nq36rEfumHZzVvZzBqAciFltS802kVcL7QdQDNS8t7vNhnEnSTdzabGKtWFWUToeZg24ztzWiOQKUK6hfEWB6d2sbdQZ0PXHxt7zMSRZQlnsy2dQctFb66cKArvDoD2RLLDJRCjkrzL1UVmpk8XjR6uqkcyJKi1UV3Fd7hhTy_TUaBc9G-bs18Zm1v2UMDkJF4GfvugGQ_CC3Rlf62I6LhYaIIiBw',
    type: 'Cultural Tour',
  },
];

const quickLinks = [
  { icon: 'person', label: 'My Profile', href: '/portal/profile', description: 'View & edit your info' },
  { icon: 'explore', label: 'Browse Tours', href: '/tours', description: 'Find your next adventure' },
  { icon: 'favorite', label: 'My Wishlist', href: '/portal/wishlist', description: 'Saved destinations' },
  { icon: 'loyalty', label: 'Loyalty Points', href: '/portal/loyalty', description: '2,450 points available' },
  { icon: 'support_agent', label: 'Concierge', href: '/contact', description: '24/7 support' },
];

export default async function TravelerProfileDashboardPage() {
  const user = await currentUser();
  const userName = user?.firstName || 'Traveler';

  return (
    <div className="relative min-h-screen w-full pt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome back, {userName}</h1>
          <p className="text-slate-400 text-lg">Here&apos;s an overview of your upcoming journeys and account.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-surface-dark border border-border-dark rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">confirmation_number</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-sm text-slate-400">Active Bookings</p>
          </div>
          <div className="bg-surface-dark border border-border-dark rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">public</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-sm text-slate-400">Countries Visited</p>
          </div>
          <div className="bg-surface-dark border border-border-dark rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">loyalty</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-white">2,450</p>
            <p className="text-sm text-slate-400">Reward Points</p>
          </div>
          <div className="bg-surface-dark border border-border-dark rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">favorite</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-white">5</p>
            <p className="text-sm text-slate-400">Wishlist Items</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Trips */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Upcoming Trips</h2>
              <Link href="/tours" className="text-primary text-sm font-medium hover:underline">Book New Trip</Link>
            </div>

            {upcomingTrips.map((trip) => (
              <div key={trip.destination} className="group bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-48 h-32 sm:h-auto relative">
                    <img src={trip.image} alt={trip.destination} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{trip.destination}</h3>
                        <p className="text-sm text-slate-400">{trip.type}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${trip.statusColor}`}>
                        {trip.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                        {trip.dates}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Link href="/contact" className="text-sm font-medium text-primary hover:underline">View Details</Link>
                      <span className="text-border-dark">|</span>
                      <Link href="/contact" className="text-sm font-medium text-slate-400 hover:text-white">Contact Concierge</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Past Trips */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
              <div className="bg-surface-dark border border-border-dark rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Maldives Escape completed</p>
                    <p className="text-xs text-slate-400">Feb 10, 2025</p>
                  </div>
                  <Link href="/tours" className="text-xs text-primary font-medium hover:underline">Leave Review</Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-[20px]">loyalty</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">+500 loyalty points earned</p>
                    <p className="text-xs text-slate-400">Feb 10, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-[20px]">payment</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Payment of $3,800 processed</p>
                    <p className="text-xs text-slate-400">Jan 28, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 bg-surface-dark border border-border-dark rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{link.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{link.label}</p>
                    <p className="text-xs text-slate-400">{link.description}</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 ml-auto text-[18px]">chevron_right</span>
                </Link>
              ))}
            </div>

            {/* Concierge CTA */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
                <h3 className="text-white font-bold">Need Help?</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4">Our dedicated concierge is available 24/7 for any travel needs.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors">
                Contact Concierge
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
