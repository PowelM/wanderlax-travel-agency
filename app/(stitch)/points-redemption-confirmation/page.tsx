"use client";
 
 
import React from 'react';

export default function PointsRedemptionConfirmationPage() {
  return (
    <div className="stitch-screen">
      {/* Background Content (Simulating Screen 9) */}
<div className="fixed inset-0 z-0 overflow-hidden opacity-40 blur-sm grayscale">
<header className="p-6 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">diamond</span>
<span className="text-xl font-bold tracking-tighter">ELITE VOYAGER</span>
</div>
<div className="flex gap-4">
<div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800"></div>
</div>
</header>
<main className="max-w-6xl mx-auto p-8 grid grid-cols-3 gap-6">
<div className="col-span-3 h-48 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
<div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
<div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
<div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
</main>
</div>
{/* Modal Backdrop */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md">
<div className="noise-overlay absolute inset-0"></div>
{/* Modal Content */}
<div className="relative w-full max-w-lg bg-white dark:bg-[#141414] rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
{/* PageHeading Component Style Integration */}
<div className="p-6 border-b border-slate-100 dark:border-white/5">
<div className="flex justify-between items-start">
<div>
<h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Confirm Redemption</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Review your selection and authorize the points transfer.</p>
</div>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
</div>
<div className="p-6 space-y-6">
{/* Experience Preview */}
<div className="flex flex-col @xl:flex-row gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
<div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg shrink-0 overflow-hidden" data-alt="Luxurious private dinner set on a torch-lit beach at dusk" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZH9v6Wbe2GdOGpSRg9kkloOOFS42jwEUbC_FlD60oqZuX-WtYc2A7D_LrVLb9WnJ_JSLfHhEz7yVv7K62rTXN2bX3rRfoQsBzQPbiGEkDNf4AhN6VVQAafdsYHx_VntaCGmk7DLbxy7EEb7PLqU8hQWx8oHrlygJeOjA04Xh_56sFzYOvph-cmW6ulDcopJrvnjRaASciZeCUWAXJu51q8Fffjp4g8ZPLydfIwhw1LU7gCIy3_CgOafojt_TLLse_tSCQKjTSpw')" }}>
</div>
<div className="flex flex-col justify-center">
<span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Ultra-Exclusive</span>
<h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Private Island Dinner</h3>
<p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">A bespoke five-course culinary journey under the stars at a secluded tropical paradise.</p>
</div>
</div>
{/* Points Breakdown */}
<div className="space-y-3 bg-slate-50/50 dark:bg-black/20 p-4 rounded-xl">
<div className="flex justify-between items-center">
<span className="text-slate-500 dark:text-slate-400 text-sm">Current Balance</span>
<span className="text-slate-900 dark:text-white font-medium">1,250,000 <span className="text-[10px] opacity-60">PTS</span></span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500 dark:text-slate-400 text-sm">Points Required</span>
<span className="text-accent font-bold">- 450,000 <span className="text-[10px] opacity-60">PTS</span></span>
</div>
<div className="pt-3 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
<span className="text-slate-900 dark:text-white font-bold text-sm">Remaining Balance</span>
<span className="text-primary font-bold">800,000 <span className="text-[10px] opacity-60">PTS</span></span>
</div>
</div>
{/* Security Verification */}
<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-400 text-sm">shield_lock</span>
<h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider">Security Verification</h4>
</div>
<p className="text-slate-500 dark:text-slate-400 text-xs italic">Enter your 6-digit security code to authorize this transaction.</p>
<div className="flex gap-2 justify-between">
<input className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-900 dark:text-white" maxLength={1} type="text"/>
<input className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-900 dark:text-white" maxLength={1} type="text"/>
<input className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-900 dark:text-white" maxLength={1} type="text"/>
<div className="flex items-center text-slate-300 dark:text-slate-600">—</div>
<input className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-900 dark:text-white" maxLength={1} type="text"/>
<input className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-900 dark:text-white" maxLength={1} type="text"/>
<input className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-900 dark:text-white" maxLength={1} type="text"/>
</div>
</div>
</div>
{/* Actions */}
<div className="p-6 bg-slate-50 dark:bg-white/5 flex flex-col sm:flex-row gap-3">
<button className="glare-sweep flex-1 bg-accent text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-lg shadow-accent/20 transition-all active:scale-[0.98]">
                    Confirm &amp; Redeem
                </button>
<button className="flex-1 bg-transparent border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    Cancel
                </button>
</div>
</div>
</div>
    </div>
  );
}
