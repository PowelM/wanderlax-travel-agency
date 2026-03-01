'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TripHistoryCard } from './TripHistoryCard';

export default function TripHistoryList({ initialBookings }: { initialBookings: unknown[] }) {
  const [filter, setFilter] = useState<'ALL' | 'COMPLETED' | 'UPCOMING'>('ALL');

  const filteredBookings = initialBookings.filter((booking) => {
    if (filter === 'ALL') return true;
    
    // Calculate if it's actually completed based on end dates (mimicking logic in Card)
    let isCompleted = booking.status === 'COMPLETED';
    
    // We could use a more robust check here if we wanted to replicate the exact date logic,
    // but the `status` string is usually the source of truth if the backend maintains it well.
    // However, the card uses a dynamic check: `if (end < new Date()) isCompleted = true;`
    // Let's implement that simplified dynamic check for the filter to match the card exactly:
    let bookingEnd: Date | null = null;
    
    if (booking.serviceType === 'TOUR_PACKAGE' && booking.tourBooking) {
      bookingEnd = new Date(booking.tourBooking.endDate);
    } else if (booking.serviceType === 'HOTEL' && booking.hotelBooking) {
      bookingEnd = new Date(booking.hotelBooking.checkOut);
    } else if (booking.serviceType === 'CAR_HIRE' && booking.carHireBooking) {
      bookingEnd = new Date(booking.carHireBooking.returnDateTime);
    }

    if (bookingEnd && bookingEnd < new Date()) {
      isCompleted = true;
    }

    if (filter === 'COMPLETED') return isCompleted;
    if (filter === 'UPCOMING') return !isCompleted;
    
    return true;
  });

  return (
    <>
      {/* Header Section Filter Buttons */}
      <div className="flex items-center gap-2 border-b-2 border-primary/20 pb-2 mb-12">
        <button 
          onClick={() => setFilter('ALL')}
          className={`px-4 py-2 text-sm font-bold transition-colors -mb-2.5 ${filter === 'ALL' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary'}`}
        >
          All Trips
        </button>
        <button 
          onClick={() => setFilter('COMPLETED')}
          className={`px-4 py-2 text-sm font-bold transition-colors -mb-2.5 ${filter === 'COMPLETED' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary'}`}
        >
          Completed
        </button>
        <button 
          onClick={() => setFilter('UPCOMING')}
          className={`px-4 py-2 text-sm font-bold transition-colors -mb-2.5 ${filter === 'UPCOMING' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary'}`}
        >
          Upcoming
        </button>
      </div>

      {/* Journey List */}
      <div className="flex flex-col gap-10">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-20 bg-white/50 dark:bg-card-dark/50 rounded-2xl border border-slate-200 dark:border-border-dark">
            <p className="text-slate-500 dark:text-slate-400 text-lg">You have no {filter === 'ALL' ? '' : filter.toLowerCase()} booking history.</p>
            <Link href="/tours" className="mt-4 inline-block px-6 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-lg hover:bg-primary/90 transition-all">
              Explore Destinations
            </Link>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <TripHistoryCard key={booking.id} booking={booking} />
          ))
        )}
      </div>
    </>
  );
}
