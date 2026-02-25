"use client";
 
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function WanderluxHomepageMobileVersionPage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
{/* Sticky Header */}
<header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
<div className="flex items-center justify-between px-6 h-16">
<div className="flex items-center gap-2">
<span className="text-primary material-symbols-outlined text-3xl font-bold">diamond</span>
<h1 className="text-xl font-extrabold tracking-tighter uppercase">Wanderlux</h1>
</div>
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</header>
<main className="pt-0">
{/* Hero Section */}
<section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
<img alt="Luxury private jet over mountains" className="w-full h-full object-cover" data-alt="Cinematic wide shot of a luxury private jet flying over snow capped mountains at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDggn6SnOvcy6wDtr1FCwsh6rSZofC6j-FsRvCCMbp3GospoNxwRaVgHoM5iPz8wlPcuWkBadhEmcAT4alXIALqYxPS8IdNsw2uwA5imfpj6v9Xlt_6XlmlVBj1SQFaFxcH3-Zgn0nDII8-2D3Zz9-57N7vXViAXg0tMIdLxYoSzwPUajvwoNMF8G4jLlMT6ccqLAz6ByX3YIVgg1_bQ1c5z_7vllnMDuprNWu1aAhk9PKvnmftpp4tu7AB-SB0qF7JlEiyRS4uDQ"/>
</div>
<div className="relative z-20 px-6 text-center">
<span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Bespoke Journeys</span>
<h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                    Redefining Luxury<br/>
<span className="text-primary typewriter">Travel</span>
</h2>
<button className="glare-sweep bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(197,17,16,0.4)] active:scale-95 transition-all">
                    Explore Private Fleet
                </button>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
<span className="material-symbols-outlined text-white/50">expand_more</span>
</div>
</section>
{/* Booking Bar (Vertically Stacked) */}
<section className="px-6 -mt-20 relative z-30 pb-12">
<div className="glass rounded-2xl overflow-hidden shadow-2xl">
{/* Tabs */}
<div className="flex border-b border-white/10">
<button className="flex-1 py-4 flex flex-col items-center gap-1 bg-primary text-white">
<span className="material-symbols-outlined text-xl">flight</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Flights</span>
</button>
<button className="flex-1 py-4 flex flex-col items-center gap-1 text-white/60">
<span className="material-symbols-outlined text-xl">hotel</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Hotels</span>
</button>
<button className="flex-1 py-4 flex flex-col items-center gap-1 text-white/60">
<span className="material-symbols-outlined text-xl">directions_car</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Cars</span>
</button>
<button className="flex-1 py-4 flex flex-col items-center gap-1 text-white/60">
<span className="material-symbols-outlined text-xl">explore</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Tours</span>
</button>
</div>
{/* Inputs */}
<div className="p-6 space-y-4">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-white/40 ml-1">From</label>
<div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
<span className="material-symbols-outlined text-primary">location_on</span>
<input className="bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/20 w-full" placeholder="Departure City" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-white/40 ml-1">To</label>
<div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
<span className="material-symbols-outlined text-primary">near_me</span>
<input className="bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/20 w-full" placeholder="Destination City" type="text"/>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1 space-y-1">
<label className="text-[10px] uppercase font-bold text-white/40 ml-1">Date</label>
<div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
<span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
<span className="text-sm text-white/60">Oct 24</span>
</div>
</div>
<div className="flex-1 space-y-1">
<label className="text-[10px] uppercase font-bold text-white/40 ml-1">Guests</label>
<div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
<span className="material-symbols-outlined text-primary text-sm">person</span>
<span className="text-sm text-white/60">2 Adults</span>
</div>
</div>
</div>
<button className="w-full bg-primary py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform mt-2">
                        Search Itineraries
                    </button>
</div>
</div>
</section>
{/* Featured Destinations */}
<section className="py-12 bg-background-dark">
<div className="px-6 mb-8 flex justify-between items-end">
<div>
<h3 className="text-3xl font-extrabold italic tracking-tight">Curated<br/>Destinations</h3>
</div>
<button className="text-primary font-bold text-sm uppercase flex items-center gap-1">
                    View All <span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
<div className="flex flex-col gap-8 px-6">
{/* Paris */}
<div className="relative h-[450px] w-full rounded-2xl overflow-hidden group">
<img alt="Paris at night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Stunning aerial view of the Eiffel Tower and Paris streets at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMwqpP5DpWRMXao991I4rp3Rr7_G3YxDRHsttajYcZmPCjw_PN9G_KwRu8ukoJooTvajg6M-upTX93CQXloPuvvMZ2KSa1hI2eZ3ioIrz104TxARYB6tahhxp1k5w_iVeN79tusM7tQ6JM6GIHtvx5SCvnuV4vWnac_A24RUky5afkug1AkglNUD4K72cn6kvi8-QRv1on6Io2I8aGvh-MMkAGJULwixGgwh4kHFhXE82sSmL5YmCJYcP5b_HtkxNwxae5iYStww"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<span className="w-8 h-[1px] bg-primary"></span>
<span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">France</span>
</div>
<h4 className="text-3xl font-bold mb-4">Midnight in Paris</h4>
<div className="flex items-center justify-between">
<span className="text-white/60 text-sm">Starting at $12,400</span>
<div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
<span className="material-symbols-outlined">north_east</span>
</div>
</div>
</div>
</div>
{/* Bali */}
<div className="relative h-[450px] w-full rounded-2xl overflow-hidden group">
<img alt="Bali villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Luxury infinity pool overlooking a tropical jungle valley in Bali" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDKtWjGwOvaIsYU1YRTpxuBSzwy3bpH2ghKhxsXjWOoWwHM4L2boilMoocly5FFJeE08jg4pG2E4Q1Am6CKh3Slx5fwK1yua8Z7-gz1D6fLiqjL379LrD6510YuF0rvfVwOeXX_mW_r-_DV1ssKrxH-w4XOI0ruX15HJsmAGk35xszfaojFCy1jHWQSYAF-bmwZs46rBah1LBIYJYwDHu8mgLPZUQFLAifE2DVqy7yT5cuRkpkuFbNUz1dNdjy9qAFNJyCO1TrUw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<span className="w-8 h-[1px] bg-primary"></span>
<span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Indonesia</span>
</div>
<h4 className="text-3xl font-bold mb-4">Ubud Sanctuary</h4>
<div className="flex items-center justify-between">
<span className="text-white/60 text-sm">Starting at $8,900</span>
<div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
<span className="material-symbols-outlined">north_east</span>
</div>
</div>
</div>
</div>
{/* Nairobi */}
<div className="relative h-[450px] w-full rounded-2xl overflow-hidden group">
<img alt="Safari landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A group of elephants walking across the savanna with Mount Kilimanjaro in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4oin-SPgxeTtXUt_gVMyFhTguAdTauhAT8J59d40nKfxY9TR5ogMUMO_xPCjVGS0VkBOeL8J_NhSIICHGuy4FqDovmn0iG8mF9FCyM2YgZ7ADxD1aZdkvwr2QV8viPbJ1NOYBFfMx3SCGCYg3xqTCHFI6WVMHFQS4WpgK9iv8XrFExd3RZU7Iah5TVshpD2lNyYL9bhkxqeeyWDqoX-TYSNligFdxskIhH_QiiaKU6SheDGC08Q1swQKIomkvAqmUIpe270GAVQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<span className="w-8 h-[1px] bg-primary"></span>
<span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Kenya</span>
</div>
<h4 className="text-3xl font-bold mb-4">Masai Mara Private</h4>
<div className="flex items-center justify-between">
<span className="text-white/60 text-sm">Starting at $15,600</span>
<div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
<span className="material-symbols-outlined">north_east</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Stats Section */}
<section className="py-16 border-y border-white/10 bg-surface">
<div className="grid grid-cols-3 divide-x divide-white/10 text-center">
<div className="px-2">
<p className="text-2xl font-bold text-primary">120+</p>
<p className="text-[10px] uppercase tracking-tighter text-white/40">Countries</p>
</div>
<div className="px-2">
<p className="text-2xl font-bold text-primary">15k</p>
<p className="text-[10px] uppercase tracking-tighter text-white/40">VIP Clients</p>
</div>
<div className="px-2">
<p className="text-2xl font-bold text-primary">24/7</p>
<p className="text-[10px] uppercase tracking-tighter text-white/40">Concierge</p>
</div>
</div>
</section>
{/* Services Section */}
<section className="py-20 px-6">
<h3 className="text-3xl font-bold mb-10 text-center">Elite Services</h3>
<div className="flex flex-col gap-4">
{/* Card 1 */}
<div className="glass p-6 rounded-2xl flex items-start gap-4 active:border-primary/50 transition-colors">
<div className="bg-primary/20 p-3 rounded-xl">
<span className="material-symbols-outlined text-primary text-3xl">car_rental</span>
</div>
<div>
<h5 className="text-lg font-bold mb-1">Chauffeur Excellence</h5>
<p className="text-white/50 text-sm leading-relaxed">Rolls Royce &amp; Mercedes S-Class fleets with professional staff.</p>
</div>
</div>
{/* Card 2 */}
<div className="glass p-6 rounded-2xl flex items-start gap-4 active:border-primary/50 transition-colors">
<div className="bg-primary/20 p-3 rounded-xl">
<span className="material-symbols-outlined text-primary text-3xl">meeting_room</span>
</div>
<div>
<h5 className="text-lg font-bold mb-1">Villa Buyouts</h5>
<p className="text-white/50 text-sm leading-relaxed">Exclusive access to off-market private estates globally.</p>
</div>
</div>
{/* Card 3 */}
<div className="glass p-6 rounded-2xl flex items-start gap-4 active:border-primary/50 transition-colors">
<div className="bg-primary/20 p-3 rounded-xl">
<span className="material-symbols-outlined text-primary text-3xl">map</span>
</div>
<div>
<h5 className="text-lg font-bold mb-1">Bespoke Itineraries</h5>
<p className="text-white/50 text-sm leading-relaxed">Hand-crafted travel plans by regional culture experts.</p>
</div>
</div>
{/* Card 4 */}
<div className="glass p-6 rounded-2xl flex items-start gap-4 active:border-primary/50 transition-colors">
<div className="bg-primary/20 p-3 rounded-xl">
<span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
</div>
<div>
<h5 className="text-lg font-bold mb-1">24/7 Consultation</h5>
<p className="text-white/50 text-sm leading-relaxed">Global lifestyle management and real-time support.</p>
</div>
</div>
</div>
</section>
{/* Newsletter */}
<section className="py-20 px-6 bg-primary/10 border-t border-primary/20">
<div className="text-center mb-8">
<h4 className="text-2xl font-bold mb-3">Join The Inner Circle</h4>
<p className="text-white/60 text-sm">Unlock secret destinations and private invites.</p>
</div>
<div className="space-y-4">
<input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary text-white" placeholder="Email address" type="email"/>
<button className="w-full bg-primary py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl active:bg-primary/80 transition-all">
                    Subscribe
                </button>
</div>
</section>
</main>
{/* Bottom Navigation Bar */}
<nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 bg-black/60 backdrop-blur-xl">
<div className="flex h-16 items-center justify-around px-2">
<a className="flex flex-col items-center gap-1 text-primary" href="#">
<span className="material-symbols-outlined fill-1">home</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-white/40" href="#">
<span className="material-symbols-outlined">explore</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Discover</span>
</a>
<a className="flex flex-col items-center gap-1 text-white/40" href="#">
<span className="material-symbols-outlined">airplane_ticket</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Bookings</span>
</a>
<a className="flex flex-col items-center gap-1 text-white/40" href="#">
<span className="material-symbols-outlined">favorite</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Saved</span>
</a>
<a className="flex flex-col items-center gap-1 text-white/40" href="#">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
</a>
</div>
</nav>
<footer className="pb-28 pt-10 px-6 text-center text-white/20 text-[10px] uppercase tracking-[0.2em]">
        © 2024 Wanderlux International. All Rights Reserved.
    </footer>
    </div>
  );
}
