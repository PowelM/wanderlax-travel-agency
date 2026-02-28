import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHotelBySlug } from '@/app/actions/hotelActions';

interface HotelDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: HotelDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);
  
  return {
    title: hotel ? `${hotel.name} | Wanderlux Travel Agency` : 'Hotel Not Found',
    description: hotel?.description || 'Hotel details',
  };
}

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);

  if (!hotel) {
    notFound();
  }

  const lowestPrice = hotel.rooms.length > 0 
    ? Math.min(...hotel.rooms.map((r: any) => Number(r.pricePerNight)))
    : null;

  const averageRating = hotel.reviews.length > 0
    ? (hotel.reviews.reduce((acc: number, rev: any) => acc + rev.rating, 0) / hotel.reviews.length).toFixed(1)
    : 'New';

  return (
    <div className="bg-hotel-bg text-white min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <img 
          src={hotel.images[0] || 'https://via.placeholder.com/1600x900?text=No+Hotel+Image'} 
          alt={hotel.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-bg via-hotel-bg/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
               {Array.from({ length: 5 }).map((_, i) => (
                   <span key={i} className={`material-symbols-outlined text-yellow-500 ${i < (parseInt(hotel.starRating.split('_')[0]) || 0) ? 'filled' : ''}`}>star</span>
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
          <section>
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Available Rooms</h2>
            <div className="space-y-6">
              {hotel.rooms.map((room: any) => (
                <div key={room.id} className="bg-hotel-surface border border-hotel-border rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:border-primary/50 transition-colors">
                  <div className="w-full sm:w-64 h-48 sm:h-auto overflow-hidden">
                    <img 
                      src={room.images[0] || 'https://via.placeholder.com/400x300?text=No+Room+Image'} 
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
        <aside className="space-y-8">
          {/* Booking Card */}
          <div className="bg-hotel-surface border border-hotel-border p-8 rounded-2xl sticky top-24 shadow-2xl">
            <div className="mb-6">
              <span className="text-sm text-hotel-text-muted font-bold uppercase tracking-widest block mb-1">Starting from</span>
              <span className="text-4xl font-black text-white">${lowestPrice}</span>
              <span className="text-hotel-text-muted">/night</span>
            </div>
            <div className="space-y-4 mb-8">
               <div className="bg-hotel-bg p-4 rounded-xl border border-hotel-border">
                  <span className="text-[10px] text-hotel-text-muted font-black uppercase tracking-[0.2em] block mb-1">Check-in</span>
                  <p className="font-bold">Select Date</p>
               </div>
               <div className="bg-hotel-bg p-4 rounded-xl border border-hotel-border">
                  <span className="text-[10px] text-hotel-text-muted font-black uppercase tracking-[0.2em] block mb-1">Guests</span>
                  <p className="font-bold">2 Adults, 1 Room</p>
               </div>
            </div>
            <button className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              Check Availability
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-xs text-hotel-text-muted mt-4 font-medium italic">
              Best price guaranteed with loyalty points
            </p>
          </div>

          {/* Location / Mini Map */}
          <div className="bg-hotel-surface border border-hotel-border rounded-2xl overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLjxD74aD-UYR1c_3fppC_-FyDCg_dRjNF8wwOcU1SJSuCgvkWfeKhBvp8uNl0z6YoJdTwESAz08FtNilT5pSC9Rs-sf-6vMRN2mXkVUb9mltqShF71VT8-N85BE6pO7_Gc6DfhUMuwKovxkoSZPHxa6V-5iP4aT8FOVtDF3kDWLhjgrI_Sp9DtLBlWU4sDAUXkjnsdJwUSC85Yv0dFAo_zmltiLauWcFE_h1r5i9gWzpl6pgTcy6N2kP_IQalgxzhZSrrf7NFRA')", opacity: 0.6 }}></div>
            <div className="p-6">
               <h3 className="font-bold text-lg mb-2">Location</h3>
               <p className="text-sm text-hotel-text-muted mb-4">{hotel.address}</p>
               <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                 View on interactive map <span className="material-symbols-outlined text-sm">open_in_new</span>
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
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">Guest Feedbacks</h2>
              <p className="text-hotel-text-muted">Verified reviews from our premium club members</p>
            </div>
            <button className="bg-hotel-surface border border-hotel-border px-6 py-2 rounded-lg text-sm font-bold">Write a review</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
