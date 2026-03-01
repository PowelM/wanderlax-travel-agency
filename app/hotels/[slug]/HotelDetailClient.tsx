"use client";

import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HotelDetailClient({ hotel }: { hotel: any }) {
  const lowestPrice = hotel.rooms.length > 0 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? Math.min(...hotel.rooms.map((r: any) => Number(r.pricePerNight)))
    : null;

  const averageRating = hotel.reviews.length > 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? (hotel.reviews.reduce((acc: number, rev: any) => acc + rev.rating, 0) / hotel.reviews.length).toFixed(1)
    : 'New';

  const getStarCount = (ratingStr: string) => {
    const map: Record<string, number> = {
      'FIVE_STAR': 5,
      'FOUR_STAR': 4,
      'THREE_STAR': 3,
      'TWO_STAR': 2,
      'ONE_STAR': 1
    };
    return map[ratingStr] || 0;
  };

  const starCount = getStarCount(hotel.starRating);

  return (
    <div className="bg-hotel-bg text-white min-h-screen pt-[72px]">
      {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={hotel.images[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600'} 
          alt={hotel.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-bg via-hotel-bg/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
               {Array.from({ length: 5 }).map((_, i) => (
                   <span key={i} className={`material-symbols-outlined text-yellow-500 ${i < starCount ? 'filled' : ''}`}>star</span>
               ))}
               <span className="text-sm font-bold ml-2">{averageRating} ({hotel.reviews.length} reviews)</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter">{hotel.name}</h1>
            <p className="flex items-center gap-2 text-hotel-text-muted text-lg">
              <span className="material-symbols-outlined text-primary">location_on</span>
              {hotel.address}, {hotel.destination.name}, {hotel.destination.country}
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Overview</h2>
            <p className="text-hotel-text-muted leading-relaxed text-lg">
              {hotel.description}
            </p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {hotel.amenities.map((amenity: string) => (
                <div key={amenity} className="flex items-center gap-3 bg-hotel-surface p-4 rounded-xl border border-hotel-border">
                  <span className="material-symbols-outlined text-primary">done</span>
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rooms */}
          <section id="available-rooms">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Available Rooms</h2>
            <div className="space-y-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {hotel.rooms.map((room: any) => (
                <div key={room.id} className="bg-hotel-surface border border-hotel-border rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:border-primary/50 transition-colors">
                  <div className="w-full sm:w-64 h-48 sm:h-auto overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={room.images[0] || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800'} 
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{room.name}</h3>
                        <span className="text-2xl font-black text-primary">${room.pricePerNight}<span className="text-xs font-normal text-hotel-text-muted">/night</span></span>
                      </div>
                      <p className="text-hotel-text-muted text-sm mb-4">{room.description}</p>
                      <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-hotel-text-muted">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">group</span> {room.capacityAdults} Adults</span>
                        {room.capacityKids > 0 && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">child_care</span> {room.capacityKids} Kids</span>}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-hotel-border flex justify-between items-center">
                      <div className="flex gap-2">
                        {room.amenities?.slice(0, 3).map((a: string) => (
                          <span key={a} className="text-[10px] bg-hotel-bg px-2 py-1 rounded border border-hotel-border uppercase font-black">{a}</span>
                        ))}
                      </div>
                      <Link href={`/portal/book?hotel=${hotel.slug}&room=${room.id}`} className="bg-white text-black hover:bg-slate-200 px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                        Reserve Room
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="space-y-8 relative">
          {/* Booking Card */}
          <div className="bg-hotel-surface border border-hotel-border p-8 rounded-2xl sticky top-24 shadow-2xl z-10">
            <div className="mb-6">
              <span className="text-sm text-hotel-text-muted font-bold uppercase tracking-widest block mb-1">Starting from</span>
              <span className="text-4xl font-black text-white">${lowestPrice}</span>
              <span className="text-hotel-text-muted">/night</span>
            </div>
            <div className="space-y-4 mb-8">
               <div className="bg-hotel-bg p-4 rounded-xl border border-hotel-border">
                  <span className="text-[10px] text-hotel-text-muted font-black uppercase tracking-[0.2em] block mb-1">Check-in</span>
                  <input type="date" className="bg-transparent border-none text-white font-bold w-full focus:ring-0 [color-scheme:dark]" defaultValue="2026-10-12" />
               </div>
               <div className="bg-hotel-bg p-4 rounded-xl border border-hotel-border">
                  <span className="text-[10px] text-hotel-text-muted font-black uppercase tracking-[0.2em] block mb-1">Guests</span>
                  <p className="font-bold text-white">2 Adults, 1 Room</p>
               </div>
            </div>
            <button 
              onClick={() => document.getElementById('available-rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Check Availability
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-xs text-hotel-text-muted mt-4 font-medium italic">
              Best price guaranteed with loyalty points
            </p>
          </div>

          {/* Location / Mini Map */}
          <div className="bg-hotel-surface border border-hotel-border rounded-2xl overflow-hidden relative z-0">
             <div className="h-48 bg-cover bg-center grayscale opacity-40 hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=" + hotel.latitude + "," + hotel.longitude + "&zoom=14&size=400x200&key=AIzaSy...')" }}></div>
             <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-sm text-hotel-text-muted mb-4 line-clamp-2">{hotel.address}</p>
                <button 
                  onClick={() => {}} 
                  className="text-primary text-sm font-bold flex items-center gap-1 hover:underline group"
                >
                  View on interactive map 
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">open_in_new</span>
                </button>
             </div>
          </div>
        </aside>
      </div>

      {/* Reviews Section */}
      <section className="bg-surface-dark/30 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-2 text-white">Guest Feedbacks</h2>
              <p className="text-hotel-text-muted">Verified reviews from our premium club members</p>
            </div>
            <button className="bg-hotel-surface border border-hotel-border hover:border-primary px-6 py-2 rounded-lg text-sm font-bold text-white transition-colors">Write a review</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {hotel.reviews.map((review: any) => (
              <div key={review.id} className="bg-hotel-bg border border-hotel-border p-8 rounded-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {review.user.firstName?.[0] || 'U'}
                    </div>
                    <div>
                      <p className="font-bold">{review.user.firstName} {review.user.lastName}</p>
                      <p className="text-xs text-hotel-text-muted uppercase font-black tracking-widest">{new Date(review.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`material-symbols-outlined text-sm ${i < review.rating ? 'filled' : ''}`}>star</span>
                    ))}
                  </div>
                </div>
                <h4 className="font-bold mb-2">{review.title}</h4>
                <p className="text-hotel-text-muted leading-relaxed italic">&quot;{review.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
