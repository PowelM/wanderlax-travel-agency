import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface EventProps {
  event: {
    id: string;
    title: string;
    slug: string;
    description: string;
    startDate: Date;
    location: string;
    images: string[];
    price: any;
  };
}

export default function EventCard({ event }: EventProps) {
  const imageUrl = event.images && event.images.length > 0 ? event.images[0] : '/placeholder-destination.jpg';
  
  return (
    <Link href={`/events/${event.slug}`} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={event.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1 text-sm font-bold text-white shadow-lg flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px] text-primary">sell</span>
          ${Number(event.price).toFixed(2)}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-left">
        <h3 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
            <span>{new Date(event.startDate).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span className="truncate">{event.location}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-white text-sm font-bold uppercase tracking-widest">Reserve Tickets</span>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
}
