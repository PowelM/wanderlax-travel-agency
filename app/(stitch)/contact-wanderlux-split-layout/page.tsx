"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function ContactWanderluxSplitLayoutPage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
{/* Navigation */}
<header className="fixed top-0 w-full z-40 border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
<div className="flex items-center gap-3">
<div className="size-6 text-primary">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
</svg>
</div>
<h1 className="text-xl font-extrabold tracking-tight uppercase">Wanderlux</h1>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Destinations</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Experiences</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all glare-sweep">
                INQUIRE NOW
            </button>
</div>
</header>
<main className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
{/* Hero Title */}
<div className="mb-16">
<h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Connect with Excellence</h2>
<h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none max-w-2xl">
                TELL US ABOUT <br/> <span className="text-primary italic">YOUR JOURNEY.</span>
</h3>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
{/* Left Side: Form */}
<section>
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Name</label>
<input className="w-full bg-slate-900/50 border-b border-slate-800 focus:border-primary focus:ring-0 px-0 py-4 text-lg transition-colors placeholder:text-slate-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
<input className="w-full bg-slate-900/50 border-b border-slate-800 focus:border-primary focus:ring-0 px-0 py-4 text-lg transition-colors placeholder:text-slate-700" placeholder="john@wanderlux.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
<select className="w-full bg-slate-900/50 border-b border-slate-800 focus:border-primary focus:ring-0 px-0 py-4 text-lg transition-colors appearance-none">
<option>Bespoke Trip Planning</option>
<option>Corporate Retreats</option>
<option>Wedding &amp; Honeymoon</option>
<option>General Inquiry</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Message</label>
<textarea className="w-full bg-slate-900/50 border-b border-slate-800 focus:border-primary focus:ring-0 px-0 py-4 text-lg transition-colors placeholder:text-slate-700 resize-none" placeholder="Describe your dream destination..." rows={4}></textarea>
</div>
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-lg tracking-[0.2em] uppercase glare-sweep transition-all flex items-center justify-center gap-3" type="submit">
                        Send Message
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
</form>
</section>
{/* Right Side: Details & Map */}
<section className="space-y-12">
{/* Map Container */}
<div className="relative w-full aspect-video rounded-xl overflow-hidden grayscale contrast-125 border border-slate-800">
<div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none"></div>
<img className="w-full h-full object-cover" data-alt="Dark stylized world map luxury aesthetic" data-location="London" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFZXRNMDKFI-D7vli5ugYAv0ukmItj6Oeo207ZMuRd1oc4ewm795AvWwprpcfc4PvfSBjqYwEU7cZHzfDFwU81MSlLO7tRXFEqUWJepJyB9brRUtp2_jwB5Er5zzYULkVHBwFQsGlKSnr9tGlqB-9qa6T58ntKZ4xm9O0_1pk9mxqlYq2tcsfQroJH4Ppf0citr-mvBjtrsy315GqnWets_wHHmMaAdEB-gu_bvmhwL84AoUs5nqp4OevFSOTsmMO31rgmRGzY4g"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="size-4 bg-primary rounded-full animate-ping absolute"></div>
<div className="size-4 bg-primary rounded-full"></div>
</div>
</div>
{/* Contact Details */}
<div className="grid md:grid-cols-2 gap-10">
<div className="space-y-6">
<h4 className="text-sm font-bold uppercase tracking-widest border-l-2 border-primary pl-4">Global HQ</h4>
<address className="not-italic text-slate-400 space-y-4">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">location_on</span>
<p>12 Mayfair Gardens, London<br/>W1J 8HT, United Kingdom</p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary">call</span>
<p>+44 20 7946 0123</p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary">mail</span>
<p>concierge@wanderlux.com</p>
</div>
</address>
</div>
<div className="space-y-6">
<h4 className="text-sm font-bold uppercase tracking-widest border-l-2 border-primary pl-4">Connect</h4>
<div className="flex flex-col gap-4 text-slate-400">
<a className="flex items-center gap-4 hover:text-primary transition-colors group" href="#">
<div className="size-8 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-sm">share</span>
</div>
<span>Instagram</span>
</a>
<a className="flex items-center gap-4 hover:text-primary transition-colors group" href="#">
<div className="size-8 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-sm">share</span>
</div>
<span>LinkedIn</span>
</a>
<a className="flex items-center gap-4 hover:text-primary transition-colors group" href="#">
<div className="size-8 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-sm">share</span>
</div>
<span>Twitter / X</span>
</a>
</div>
</div>
</div>
</section>
</div>
</main>
{/* Footer Simple */}
<footer className="border-t border-slate-900 py-10 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-slate-500 uppercase tracking-widest">© 2024 Wanderlux Travel. Private &amp; Confidential.</p>
<div className="flex gap-8 text-xs text-slate-500 uppercase tracking-widest">
<a className="hover:text-primary" href="#">Privacy Policy</a>
<a className="hover:text-primary" href="#">Terms of Service</a>
</div>
</div>
</footer>
{/* Floating WhatsApp */}
<a className="fixed bottom-8 right-8 z-50 group" href="#">
<div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all"></div>
<div className="relative bg-primary text-white size-14 rounded-full flex items-center justify-center shadow-2xl glare-sweep">
<svg className="size-7 fill-current" viewBox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
</svg>
</div>
</a>
    </div>
  );
}
