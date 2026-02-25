"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
export default function CheckoutPaymentPage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pt-[72px]">
<div className="layout-container flex h-full grow flex-col">
<main className="flex-1 px-4 lg:px-40 py-8">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Checkout Details */}
<div className="lg:col-span-8 flex flex-col gap-8">
{/* Progress Stepper */}
<div className="flex flex-col gap-4 bg-primary/5 p-6 rounded-xl border border-primary/10">
<div className="flex justify-between items-end">
<div>
<p className="text-primary font-bold text-sm uppercase tracking-tighter">Step 3 of 3</p>
<h1 className="text-2xl font-extrabold">Payment &amp; Confirmation</h1>
</div>
<p className="text-slate-500 text-sm font-medium">Almost there • 100% complete</p>
</div>
<div className="relative h-2 w-full bg-primary/10 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-1000" style={{ width: "100%" }}></div>
</div>
<p className="text-slate-400 text-xs italic">Finalizing your luxury escape to the Swiss Alps</p>
</div>
{/* Payment Methods Selection */}
<section className="flex flex-col gap-6">
<div className="flex items-center gap-2 border-b border-primary/20 pb-2">
<span className="material-symbols-outlined text-primary">payments</span>
<h2 className="text-xl font-bold">Select Payment Method</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="relative flex cursor-pointer flex-col gap-3 rounded-xl border-2 border-primary bg-primary/5 p-4 ring-offset-background-dark focus-within:ring-2 focus-within:ring-primary">
<input checked className="sr-only" name="payment-method" type="radio"/>
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary scale-125">credit_card</span>
<div className="h-4 w-4 rounded-full border-4 border-primary bg-white"></div>
</div>
<span className="font-bold text-sm">Credit Card</span>
</label>
<label className="relative flex cursor-pointer flex-col gap-3 rounded-xl border-2 border-slate-700 hover:border-primary/50 bg-background-dark p-4 transition-colors">
<input className="sr-only" name="payment-method" type="radio"/>
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-slate-400">ios</span>
<div className="h-4 w-4 rounded-full border-2 border-slate-700"></div>
</div>
<span className="font-bold text-sm text-slate-400">Apple Pay</span>
</label>
<label className="relative flex cursor-pointer flex-col gap-3 rounded-xl border-2 border-slate-700 hover:border-primary/50 bg-background-dark p-4 transition-colors">
<input className="sr-only" name="payment-method" type="radio"/>
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-slate-400">account_balance</span>
<div className="h-4 w-4 rounded-full border-2 border-slate-700"></div>
</div>
<span className="font-bold text-sm text-slate-400">Bank Transfer</span>
</label>
</div>
</section>
{/* Card Form */}
<section className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[120px] rotate-12">shield_lock</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="col-span-1 md:col-span-2 space-y-2">
<label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Cardholder Name</label>
<input className="w-full bg-background-dark border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-4 px-4 text-white placeholder:text-slate-600 transition-all" placeholder="ALEXANDER VANDERGRIFT" type="text"/>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Card Number</label>
<div className="relative">
<input className="w-full bg-background-dark border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-4 px-4 text-white placeholder:text-slate-600 transition-all" placeholder="•••• •••• •••• 4421" type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
<div className="w-8 h-5 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold italic">VISA</div>
<div className="w-8 h-5 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold italic">MC</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Expiry Date</label>
<input className="w-full bg-background-dark border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-4 px-4 text-white placeholder:text-slate-600 transition-all" placeholder="MM / YY" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold uppercase tracking-wider text-slate-400">CVV / CVC</label>
<div className="relative">
<input className="w-full bg-background-dark border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-4 px-4 text-white placeholder:text-slate-600 transition-all" placeholder="•••" type="password"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-help" title="3 digits on back of card">info</span>
</div>
</div>
</div>
<div className="mt-8 flex items-start gap-3">
<input className="mt-1 rounded border-slate-700 text-primary focus:ring-primary bg-background-dark" id="save-card" type="checkbox"/>
<label className="text-sm text-slate-400" htmlFor="save-card">Save this card for future Wanderlux adventures. Your data is encrypted and secure.</label>
</div>
</section>
{/* Trust Badges */}
<div className="flex flex-wrap justify-center md:justify-start gap-8 py-4 opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">verified</span>
<span className="text-[10px] font-bold uppercase tracking-widest">PCI DSS Compliant</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">lock</span>
<span className="text-[10px] font-bold uppercase tracking-widest">SSL Secure Layer</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">security</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Norton Secured</span>
</div>
</div>
</div>
{/* Right Column: Sidebar Summary */}
<aside className="lg:col-span-4">
<div className="sticky top-24 flex flex-col gap-6">
<div className="bg-background-dark border border-primary/20 rounded-2xl p-6 overflow-hidden relative shadow-xl">
<div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
<h3 className="text-lg font-bold mb-6 flex items-center justify-between">
                                    Order Summary
                                    <span className="text-xs font-normal text-slate-500 uppercase">1 Item</span>
</h3>
<div className="flex gap-4 mb-6">
<div className="size-16 rounded-lg overflow-hidden flex-shrink-0 border border-slate-700">
<img alt="Swiss Alps Luxury Retreat" className="w-full h-full object-cover" data-alt="Snowy mountain peaks and luxury chalet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG1uknSwrsSzJ6hiSY2xOMWrpSY0NmEpo-GgCs5IYvW04KUHJm9zps_UjvS_hVU2hCy4Q2eBNv__6abcG2kOXDaBwvbiq6Puu6d9CP4K9TgXSTg6ptKbDNSLw68iVkX5I482YJYIoe4Pmz37x5vgDXgo1ACBX-cyYcrZD0a0psH-kaCB_Jdto6_sFPrcz3CSYDqhR95imh75ZmvtBND6KaAwoJC74yC2gWJPk-qeFANcu86kU3k51PPzKJw4WNhW_6w7CzlOLuyw"/>
</div>
<div>
<h4 className="text-sm font-bold">Swiss Alps Luxury Escape</h4>
<p className="text-xs text-slate-500 mt-1">Dec 24 - Dec 31, 2024</p>
<p className="text-xs text-slate-500">2 Adults, 1 Junior Suite</p>
</div>
</div>
<div className="space-y-3 py-6 border-t border-b border-slate-800">
<div className="flex justify-between text-sm">
<span className="text-slate-400">Subtotal</span>
<span>$12,450.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Service Fee (6%)</span>
<span>$747.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Taxes</span>
<span>$210.00</span>
</div>
<div className="flex justify-between text-sm text-green-500 font-medium">
<span>Membership Discount</span>
<span>-$500.00</span>
</div>
</div>
<div className="pt-6">
<div className="flex justify-between items-end mb-6">
<div className="flex flex-col">
<span className="text-xs uppercase font-bold text-slate-500 tracking-widest">Total Amount</span>
<span className="text-xs text-slate-600">All prices in USD</span>
</div>
<span className="text-3xl font-black text-white">$12,907.00</span>
</div>
<button className="glare-sweep w-full bg-primary hover:bg-primary/90 text-white font-extrabold py-5 rounded-xl shadow-[0_0_20px_rgba(195,9,9,0.3)] transition-all group active:scale-[0.98]">
<span className="flex items-center justify-center gap-2">
                                            CONFIRM &amp; PAY
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
</button>
<p className="text-[10px] text-center text-slate-500 mt-4 leading-relaxed">
                                        By clicking "Confirm &amp; Pay", you agree to Wanderlux's 
                                        <Link className="underline text-slate-400 hover:text-primary" href="/about">Terms of Service</Link> and 
                                        <Link className="underline text-slate-400 hover:text-primary" href="/about">Cancellation Policy</Link>.
                                    </p>
</div>
</div>
{/* Assistance Card */}
<div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
<div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<p className="text-xs font-bold">Need assistance?</p>
<p className="text-[11px] text-slate-400">Our lifestyle managers are available 24/7</p>
</div>
</div>
</div>
</aside>
</div>
</main>
</div>
</div>
    </div>
  );
}
