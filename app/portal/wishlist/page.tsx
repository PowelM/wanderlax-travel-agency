"use client";
import React, { useState } from 'react';
import Link from 'next/link';

type WishlistItem = {
  id: string;
  location: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: 'Private Jets' | 'Villas' | 'Other';
};

const initialItems: WishlistItem[] = [
  {
    id: '1',
    location: 'Oceania • Private Island',
    title: 'The Brando Reserve',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHDZw2P1Bt42QqK3S_ze8EGY_eGv8ylghIyD24u4tctGSvrm3TkZi7DTdX8k96quBef24tZEXLSw2m20GtGFi5Ag8QdytJo0u1UHOT5luYFRwTasxvpdOnjnaw45l_DSdmb5buDAY19_syqliRIKNq1QVMzjDw5hXX9Xcwo0DCf9YRg3Yo9QTnIf02G1y16jN5feXinGeao4CjtRdK1ZMNSVasRdK-RLDUXDSKqA55KiebzwSE1zFM8ZyMClE3iGDMTdjHCEk_YA',
    price: 24900,
    rating: 4.9,
    reviews: 120,
    category: 'Villas',
  },
  {
    id: '2',
    location: 'Kyoto • Zen Experience',
    title: 'Aman Kyoto Sanctuary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJfQGGrlZ1FJuDxdSJqjTokju1EWXWtHli-FGMs1L38ktE0sA8i3rqQEPVhmSe-y211S0WrLDDiuwMB7F3MY9gdlInRaVBnGNmEAZgjLndTuplAYLpIeqKeA8TYY9lIgqjAmR1gLbhcciBrBv9ZWwScwywuqYsqPTV2LpSWmUXGtEcTQ4QXtxhEkaFrqvmUVFA8Ix688GLdZ2WS1_aptrJDgnH9jLcqg_ffI1a97RHgKy-4Rk_F32GnS6tofOtGQIWJbqcg4XNXw',
    price: 18500,
    rating: 5.0,
    reviews: 85,
    category: 'Villas',
  },
  {
    id: '3',
    location: 'Tanzania • Ultra-Luxury Safari',
    title: 'Singita Grumeti',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-xCu15TkqE2gKjOy-5legZG_kg0k-seYoAyjTOJxAXXXWYZMHHxygiznrneGLQ9P_K3wpW-YOr8l_5HZ6etP9mDO8uJorzVhASmkxFlAz6BiwBiBwnfMlpp7mpgX1ego9SEcLS1AgD93gTapFSJO0WEXaFYyea1GikFOzLl2Obk4_kNbl15zalhbZuv6BwuOXoaTJZ092rPMCDBFvPOWta5RDPZ-cObH0RDMViIg9jPVa77kts7MyGQyI8FAZG8P-t8qxlHsePw',
    price: 32000,
    rating: 4.8,
    reviews: 42,
    category: 'Villas',
  }
];

export default function TravelerWishlistSavedJourneysPage() {
  const [items, setItems] = useState<WishlistItem[]>(initialItems);
  const [activeFilter, setActiveFilter] = useState<'All Saved' | 'Private Jets' | 'Villas'>('All Saved');

  const filteredItems = items.filter(item => {
    if (activeFilter === 'All Saved') return true;
    return item.category === activeFilter;
  });

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="stitch-screen">
      <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden pt-[72px]">
<main className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-20 py-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="space-y-2">
<h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight">Your Dream <span className="text-primary italic">Portfolio</span></h1>
<p className="text-slate-400 text-lg max-w-xl">A curated selection of the world&apos;s most exclusive escapes, reserved for your next journey.</p>
</div>
<div className="flex items-center gap-4 bg-accent-dark/30 p-1 rounded-xl border border-primary/10">
<button 
  onClick={() => setActiveFilter('All Saved')}
  className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${activeFilter === 'All Saved' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-100'}`}
>
  All Saved
</button>
<button 
  onClick={() => setActiveFilter('Private Jets')}
  className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${activeFilter === 'Private Jets' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-100'}`}
>
  Private Jets
</button>
<button 
  onClick={() => setActiveFilter('Villas')}
  className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${activeFilter === 'Villas' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-100'}`}
>
  Villas
</button>
</div>
</div>
{filteredItems.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-2xl">
    <span className="material-symbols-outlined text-6xl text-slate-500 mb-4">heart_broken</span>
    <h3 className="text-2xl font-bold text-slate-100 mb-2">No items found</h3>
    <p className="text-slate-400">Save some destinations to your wishlist to see them here.</p>
  </div>
) : (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {filteredItems.map(item => (
  <div key={item.id} className="group relative flex flex-col rounded-2xl overflow-hidden bg-card-dark border border-primary/5 shadow-2xl transition-transform hover:-translate-y-2">
  <div className="relative h-96 w-full bg-cover bg-center" data-alt={item.title} style={{ backgroundImage: `url('${item.image}')` }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-80"></div>
  <button 
    onClick={() => handleRemove(item.id)}
    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full glass-panel text-primary hover:scale-110 hover:bg-primary hover:text-white transition-all z-10"
    aria-label="Remove from wishlist"
  >
  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>heart_minus</span>
  </button>
  <div className="absolute bottom-6 left-6 right-6">
  <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">{item.location}</p>
  <h3 className="text-3xl font-bold text-slate-100 leading-tight">{item.title}</h3>
  </div>
  </div>
  <div className="p-8 flex flex-col gap-6">
  <div className="flex justify-between items-end">
  <div>
  <p className="text-slate-500 text-sm uppercase font-medium tracking-wide">Starting from</p>
  <p className="text-2xl font-bold text-slate-100">${item.price.toLocaleString()} <span className="text-sm font-normal text-slate-500">/ stay</span></p>
  </div>
  <div className="text-right">
  <div className="flex items-center gap-1 text-yellow-500 mb-1">
  <span className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
  <span className="text-sm font-bold">{item.rating.toFixed(1)}</span>
  </div>
  <p className="text-slate-500 text-xs uppercase font-medium">{item.reviews} reviews</p>
  </div>
  </div>
  <button className="glare-sweep w-full bg-primary text-white py-4 rounded-xl font-extrabold uppercase tracking-widest text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
                              Book Now <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
  </button>
  </div>
  </div>
  ))}
</div>
)}
<div className="mt-24 pt-12 border-t border-primary/10">
<div className="flex items-center justify-between mb-10">
<div>
<h2 className="text-3xl font-bold text-slate-100 tracking-tight">Handpicked for You</h2>
<p className="text-slate-500 mt-1">Based on your recent interest in high-altitude wellness and private islands.</p>
</div>
<Link className="text-primary font-bold uppercase text-xs tracking-widest hover:underline" href="/tours">Explore All Recommendations</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col md:flex-row glass-panel rounded-2xl overflow-hidden group">
<div className="md:w-2/5 h-64 md:h-auto bg-cover bg-center" data-alt="Luxury alpine chalet with pool and mountain view" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdePNStwCOy7G9STqsY0z6l_4fMj2mVlSyD413IyfD-7oHCUpG2slsFQl_KVNg9nIMAeXB50k7HHre6fQpjAJaIk4FqOuObcj9xR-PWWcJ2bElEAo-Q34Aw12fTZ525PP3-0KagcDP27fogLWydTX3nxiJ83MOAS9d47irDHG3nTN7ccHFWkVypkVV3CmPvnZQezLX6X7IWg_-yfF6dYbe4QK-zdWDQiOI7-9T3oqI4mi97julFS-nUl3iFcqhkoSOIFlOVqKWXQ')" }}></div>
<div className="md:w-3/5 p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase rounded-full">New Addition</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary transition-colors">favorite</span>
</div>
<h4 className="text-xl font-bold text-slate-100 mb-2">The Alpina Gstaad Peak</h4>
<p className="text-slate-400 text-sm line-clamp-2">Exclusive access to the ultimate Swiss mountain retreat, featuring private helicopter transfers and a Michelin-starred personal chef.</p>
</div>
<div className="mt-6 flex items-center justify-between">
<p className="text-lg font-bold text-slate-100">$12,400 <span className="text-xs font-normal text-slate-500">/ night</span></p>
<button className="text-primary text-sm font-bold uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    Details <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row glass-panel rounded-2xl overflow-hidden group">
<div className="md:w-2/5 h-64 md:h-auto bg-cover bg-center" data-alt="Mediterranean coastline with luxury white yacht" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPB_30BIjrXuWvcsysn5g5gsn8zwU0lhPOPa-sPYDwRqhvIkKe5jXONChgHHdHBTWRE1BRjdKIprTlTG-gRLrSkHWWFiVVB_FJaA7xDhYUH6AH6MjR7OusPYYTLdePpLSoDYb8k2UfISPN1ekSSQ6PLZHlJb9HEI5yO-IkSN0uchcxqI8NdXptJaPBekt16TopOWBEiXzZc6erDfwCoiInyhJs7ddBVlcpwr989HK6ZdnXUZx6fSuSwbpwjuxuSOBvehAt3E0dRQ')" }}></div>
<div className="md:w-3/5 p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase rounded-full">Highly Rated</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary transition-colors">favorite</span>
</div>
<h4 className="text-xl font-bold text-slate-100 mb-2">Amalfi Coast Superyacht</h4>
<p className="text-slate-400 text-sm line-clamp-2">A 7-day bespoke voyage through Positano and Capri aboard the 65m Wanderlux Solis. Fully crewed excellence.</p>
</div>
<div className="mt-6 flex items-center justify-between">
<p className="text-lg font-bold text-slate-100">$85,000 <span className="text-xs font-normal text-slate-500">/ week</span></p>
<button className="text-primary text-sm font-bold uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    Details <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
