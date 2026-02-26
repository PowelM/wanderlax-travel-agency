"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { getUserItineraries } from '@/app/actions/bookingActions';

interface ItineraryBooking {
  id: string;
  startDate: string;
  endDate: string;
  status: string;
  tourPackage: {
    title: string;
    category: string;
    images: string[];
    destination: {
      name: string;
      country: string;
    };
  };
}

export default function PortalItineraryPage() {
  const { user, isLoaded } = useUser();
  const [itineraries, setItineraries] = useState<ItineraryBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItineraries = async () => {
      if (isLoaded && user) {
        const data = await getUserItineraries(user.id);
        setItineraries(data);
      }
      setLoading(false);
    };
    fetchItineraries();
  }, [isLoaded, user]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full pt-[72px]">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tighter">My Itineraries</h1>
          <p className="text-slate-400 text-lg">Detailed day-by-day plans for your upcoming and past journeys.</p>
        </div>

        {itineraries.length === 0 ? (
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-12 text-center">
            <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">event_busy</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Itineraries Found</h2>
            <p className="text-slate-400 mb-8">You haven&apos;t booked any tours yet. Start exploring our exclusive destinations to begin your journey.</p>
            <Link 
              href="/tours" 
              className="inline-flex items-center justify-center bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
            >
              Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((booking) => (
              <Link 
                key={booking.id} 
                href={`/portal/itinerary/${booking.id}`}
                className="group bg-surface-dark border border-border-dark rounded-2xl overflow-hidden hover:border-primary/50 transition-all transform hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={booking.tourPackage.images[0] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
                    alt={booking.tourPackage.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-2">
                      {booking.tourPackage.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">{booking.tourPackage.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    {booking.tourPackage.destination.name}, {booking.tourPackage.destination.country}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-6">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    {new Date(booking.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} — {new Date(booking.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border-dark">
                    <span className={`text-xs font-bold uppercase tracking-widest ${
                      booking.status === 'CONFIRMED' ? 'text-green-500' : 'text-primary'
                    }`}>
                      {booking.status}
                    </span>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                      View Itinerary
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Support Section */}
        <div className="mt-20 p-8 bg-background-dark border border-border-dark rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary">
              <span className="material-symbols-outlined text-4xl">support_agent</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Need a customized itinerary?</h3>
              <p className="text-slate-400">Our expert consultants can craft the perfect journey tailored to your preferences.</p>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="whitespace-nowrap bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Request Private Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
