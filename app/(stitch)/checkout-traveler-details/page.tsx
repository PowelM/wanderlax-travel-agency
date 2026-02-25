"use client";
 
 
import React from 'react';

export default function CheckoutTravelerDetailsPage() {
  return (
    <div className="stitch-screen">
      <div className="layout-container flex h-full grow flex-col">
{/* Top Navigation */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">travel_explore</span>
</div>
<h2 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight tracking-tight uppercase">Wanderlux</h2>
</div>
<div className="flex flex-1 justify-end items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back to itinerary
                </a>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/30" data-alt="User profile avatar of a traveler" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7fEIl3GsPm9aAfLJa2Ys499E_DZ1ukwJYxcKJRu6gF046pP-yNNDK_tx66IABExrqN5MAmeRj28Dy_JdBHCDTYELjW70mOGAgUTC5Zll3SHrrSkpvolQnhiQyuNk3bhwhyXBfAtYu6EC0I79awoht71xZugiMce1t2oGJBcaNgeJkXRpPJ5C8oV4SDBXxROVXIA6mIBRG87j60622dof5SZcqTBKVOvxaQybYG0EUPtJroKIx_49bs7om54zfh7TteUn0ZAwLGA')" }}></div>
</div>
</header>
<main className="flex-1 px-6 md:px-20 py-8 lg:py-12">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Main Content Column */}
<div className="lg:col-span-8 flex flex-col gap-8">
{/* Progress Stepper */}
<div className="flex flex-col gap-4">
<div className="flex justify-between items-end">
<div>
<h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Traveler Details</h1>
<p className="text-slate-500 dark:text-slate-400 mt-1">Step 1 of 3: Secure your spot on the coast</p>
</div>
<p className="text-primary font-bold text-lg">33%</p>
</div>
<div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: "33%" }}></div>
</div>
<div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
<span className="text-primary">Travelers</span>
<span>Add-ons</span>
<span>Payment</span>
</div>
</div>
{/* Primary Traveler Form */}
<div className="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 lg:p-8">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary">person</span>
<h2 className="text-xl font-bold text-slate-900 dark:text-white">Primary Traveler</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
<input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="As it appears on passport" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
<input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="email@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
<div className="flex">
<select className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-l-lg border-r-0 px-2 text-sm dark:text-white outline-none">
<option>+1</option>
<option>+44</option>
<option>+39</option>
</select>
<input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-r-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Passport Number</label>
<input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="Enter passport ID" type="text"/>
</div>
</div>
</div>
{/* Additional Travelers */}
<div className="bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 lg:p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">group_add</span>
<h2 className="text-xl font-bold text-slate-900 dark:text-white">Additional Traveler</h2>
</div>
<span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase">Traveler 2</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
<input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="As it appears on passport" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Passport Number</label>
<input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="Enter passport ID" type="text"/>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="glare-sweep group flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20">
                            Continue to Add-ons
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
{/* Sidebar Summary */}
<div className="lg:col-span-4">
<div className="sticky top-28 flex flex-col gap-6">
<div className="bg-white dark:bg-primary/10 border border-slate-200 dark:border-primary/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
<div className="h-48 bg-cover bg-center relative" data-alt="Scenic aerial view of Positano on the Amalfi Coast" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZwtZSEcUr70RzOw7gEoi7Uz-A2-gbvQyVUc_6x0E5o45hMA-Lagogdk3bT_ITMuwSIjM3IMwInp7kOqYd_rmGSWjP8EOFpMQ-E1yiFWT_6YteNjH7zsRvqpcGsd_w0FrfutTbG5wiZZyEaBr_a-otasm9Sz0HJh_GzznmF1etH-YPMtDvXmKGBbIMCuNykmY4yY1VFiNYF8S_mj6Wwfgk1kj5LzgewCd9-0lNDVAHBs2WwRSQYUUT4RQPR9n5e08SObJf-91iIA')" }}>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2 inline-block">Premium Tour</span>
<h3 className="text-white font-bold text-xl leading-tight">The Eternal Amalfi Coast</h3>
</div>
</div>
<div className="p-6 flex flex-col gap-5">
<div className="flex flex-col gap-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">calendar_today</span>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Selected Dates</p>
<p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Oct 12 — Oct 19, 2024</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">group</span>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Travelers</p>
<p className="text-sm font-semibold text-slate-800 dark:text-slate-100">2 Adults</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">hotel</span>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Accommodation</p>
<p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Luxury Sea-view Suite</p>
</div>
</div>
</div>
<div className="h-px bg-slate-200 dark:bg-primary/20 w-full"></div>
<div className="flex flex-col gap-2">
<div className="flex justify-between text-sm">
<span className="text-slate-500 dark:text-slate-400">Tour Base Price (x2)</span>
<span className="font-semibold dark:text-white">$4,998</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500 dark:text-slate-400">Taxes &amp; Fees</span>
<span className="font-semibold dark:text-white">$245</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-lg font-bold text-slate-900 dark:text-white">Subtotal</span>
<span className="text-2xl font-black text-primary">$5,243</span>
</div>
</div>
</div>
</div>
<div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-4 items-center">
<span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
<div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
<strong className="text-slate-900 dark:text-slate-100 block mb-0.5">Secure Booking</strong>
                                Your information is protected by industry-standard SSL encryption.
                            </div>
</div>
</div>
</div>
</div>
</main>
<footer className="mt-auto border-t border-slate-200 dark:border-primary/10 px-6 md:px-20 py-8 bg-background-light dark:bg-background-dark/80 backdrop-blur-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="size-6 bg-primary/20 rounded-md flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">travel_explore</span>
</div>
<span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Wanderlux Exclusives</span>
</div>
<div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
<a className="hover:text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
<a className="hover:text-primary transition-colors" href="#">Support</a>
</div>
<p className="text-xs text-slate-500">© 2024 Wanderlux Tours. All rights reserved.</p>
</div>
</footer>
</div>
    </div>
  );
}
