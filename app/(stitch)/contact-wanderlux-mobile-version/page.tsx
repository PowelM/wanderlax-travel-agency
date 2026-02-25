"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function ContactWanderluxMobileVersionPage() {
  return (
    <div className="stitch-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col noise-bg overflow-x-hidden">
{/* TopAppBar */}
<nav className="flex items-center bg-background-dark/90 backdrop-blur-md sticky top-0 z-50 p-4 border-b border-white/5 justify-between">
<div className="text-white flex size-12 shrink-0 items-center justify-start">
<span className="material-symbols-outlined text-3xl">menu</span>
</div>
<h1 className="text-white text-xl font-bold tracking-widest uppercase flex-1 text-center">Wanderlux</h1>
<div className="flex w-12 items-center justify-end">
<button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-white">
<span className="material-symbols-outlined text-2xl">account_circle</span>
</button>
</div>
</nav>
{/* Hero Section */}
<section className="px-6 pt-12 pb-8">
<span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Get In Touch</span>
<h2 className="text-white text-4xl font-bold leading-tight tracking-tight mb-4">Contact Us</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed">Tell us about your journey and we'll craft the perfect experience for your next destination.</p>
</section>
{/* Form Section */}
<section className="px-6 py-6">
<div className="space-y-6">
<div className="flex flex-col gap-1.5">
<label className="text-white/70 text-sm font-medium uppercase tracking-wider">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20" placeholder="Alexander Sterling" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-white/70 text-sm font-medium uppercase tracking-wider">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20" placeholder="sterling@wanderlux.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-white/70 text-sm font-medium uppercase tracking-wider">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20" placeholder="Share your dream itinerary..." rows={4}></textarea>
</div>
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-lg tracking-widest uppercase transition-all shadow-lg shadow-primary/20">
                    Send Inquiry
                </button>
</div>
</section>
{/* Map & HQ Info */}
<section className="mt-12 px-6">
<div className="relative h-64 w-full rounded-xl overflow-hidden border border-white/10 mb-8">
<img alt="Dark minimal world map" className="w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="A high-end dark minimalist map showing world locations" data-location="London" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBczTAVv2RvmCzWYOpf3PVDlCkAUaf7BdIm-iFMcXPw36LneSZOCNhshpPIEyeeDbNPn36-kDTvysYNnu2Wanl2nRtrG3krXY0PGSWyUDWy7RbRnkTSdbjIWRB8H3KG1DIOmkpB1akQPWMfzz2X5bikdvZDxENn-2c7DZOxOenVBbKITwrviSFaRYIS8m2HYcm34B9c_xl1oz4DF7viEBqtpACkh5jJqiiUO-oPI1s8NkRhwb9bB-T4PULrteZpuxoPSQW9Ukm-Vg"/>
<div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(219,20,60,0.8)]"></div>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
<h3 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
<span className="material-symbols-outlined text-primary">location_on</span>
                    Global HQ
                </h3>
<div className="space-y-4 text-slate-400 font-light">
<p>124 Bond Street<br/>Mayfair, London<br/>W1S 1AR, UK</p>
<p className="pt-4 border-t border-white/5">concierge@wanderlux.com</p>
<p>+44 20 7946 0123</p>
</div>
{/* Social Links */}
<div className="flex gap-6 mt-8 pt-8 border-t border-white/5">
<a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">camera</span></a>
<a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
</div>
</div>
</section>
{/* FAQ Section */}
<section className="bg-white/[0.02] py-16 px-6 border-t border-white/5">
<h2 className="text-white text-3xl font-bold mb-8">Frequently Asked Questions</h2>
{/* Search Bar */}
<div className="relative mb-10">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/40">search</span>
<input className="w-full bg-white/5 border border-white/10 rounded-full h-14 pl-12 pr-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20" placeholder="Search for answers..." type="text"/>
</div>
{/* Categories */}
<div className="flex overflow-x-auto gap-3 pb-6 mb-8 no-scrollbar">
<button className="whitespace-nowrap bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">General</button>
<button className="whitespace-nowrap bg-white/5 text-white/70 px-6 py-2 rounded-full text-sm border border-white/10">Booking</button>
<button className="whitespace-nowrap bg-white/5 text-white/70 px-6 py-2 rounded-full text-sm border border-white/10">Luxury Fleet</button>
<button className="whitespace-nowrap bg-white/5 text-white/70 px-6 py-2 rounded-full text-sm border border-white/10">Insurance</button>
</div>
{/* Accordion items */}
<div className="space-y-4">
<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left py-2">
<span className="text-white font-medium">How do I book a bespoke itinerary?</span>
<span className="material-symbols-outlined text-primary">expand_more</span>
</button>
</div>
<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left py-2">
<span className="text-white font-medium">What is your cancellation policy?</span>
<span className="material-symbols-outlined text-white/30">expand_more</span>
</button>
</div>
<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left py-2">
<span className="text-white font-medium">Do you provide private jet charters?</span>
<span className="material-symbols-outlined text-white/30">expand_more</span>
</button>
</div>
</div>
</section>
{/* CTA Section */}
<section className="px-6 py-20 bg-primary/5 text-center">
<h3 className="text-white text-2xl font-bold mb-4">Still have questions?</h3>
<p className="text-slate-400 mb-10 font-light">Our lifestyle managers are available 24/7 to assist with your requirements.</p>
<div className="flex flex-col gap-4">
<button className="w-full bg-white text-background-dark font-bold py-4 rounded-lg tracking-widest uppercase shadow-xl">
                    Live Chat
                </button>
<button className="w-full bg-transparent border border-white/20 text-white font-bold py-4 rounded-lg tracking-widest uppercase">
                    Call Concierge
                </button>
</div>
</section>
{/* Footer Footer */}
<footer className="p-8 text-center border-t border-white/5">
<p className="text-white/20 text-xs tracking-widest uppercase">© 2024 Wanderlux Global. All Rights Reserved.</p>
</footer>
</div>
    </div>
  );
}
