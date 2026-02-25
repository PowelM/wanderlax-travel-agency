"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function MobileNavigationRefinedAnimationsPage() {
  return (
    <div className="stitch-screen">
      <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
<div className="absolute inset-0 noise-bg pointer-events-none" style={{ backgroundAttachment: "fixed", opacity: "0.035" }}></div>
<div className="relative z-10 flex flex-col h-full">
<header className="flex items-center justify-between p-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-custom">
<span className="text-white font-bold text-xs">W</span>
</div>
<span className="text-xl font-extrabold tracking-tighter uppercase dark:text-white">Wanderlux</span>
</div>
<button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors hover:rotate-90 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl text-slate-900 dark:text-white">close</span>
</button>
</header>
<nav className="flex-1 flex flex-col justify-center px-8 space-y-6 animate-slide-down-fade">
<div className="group relative flex items-center animate-slide-in [animation-delay:200ms]">
<div className="absolute -left-4 w-1 h-8 bg-primary rounded-full"></div>
<a className="text-4xl md:text-5xl font-bold tracking-tight text-primary transition-all" href="#">Home</a>
</div>
<div className="group flex items-center animate-slide-in [animation-delay:300ms]">
<a className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-300 hover:text-primary transition-colors" href="#">Destinations</a>
</div>
<div className="group flex items-center animate-slide-in [animation-delay:400ms]">
<a className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-300 hover:text-primary transition-colors" href="#">Experiences</a>
</div>
<div className="group flex items-center animate-slide-in [animation-delay:500ms]">
<a className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-300 hover:text-primary transition-colors" href="#">About</a>
</div>
<div className="group flex items-center animate-slide-in [animation-delay:600ms]">
<a className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-300 hover:text-primary transition-colors" href="#">Contact</a>
</div>
</nav>
<footer className="p-8 space-y-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm border-t border-slate-200 dark:border-white/10">
<div className="flex flex-col gap-6">
<h4 className="text-primary text-xs font-black uppercase tracking-[0.2em]">Connect With Us</h4>
<div className="flex items-center gap-6">
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl">brand_family</span>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl">group</span>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl">terminal</span>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex-1 flex bg-slate-200 dark:bg-white/5 rounded-lg p-1">
<button className="flex-1 py-2 text-xs font-bold rounded-md bg-white dark:bg-primary text-slate-900 dark:text-white shadow-sm">EN</button>
<button className="flex-1 py-2 text-xs font-bold text-slate-500 dark:text-slate-400">FR</button>
<button className="flex-1 py-2 text-xs font-bold text-slate-500 dark:text-slate-400">ES</button>
</div>
<div className="flex-1 flex bg-slate-200 dark:bg-white/5 rounded-lg p-1">
<button className="flex-1 py-2 text-xs font-bold rounded-md bg-white dark:bg-primary text-slate-900 dark:text-white shadow-sm">USD</button>
<button className="flex-1 py-2 text-xs font-bold text-slate-500 dark:text-slate-400">EUR</button>
<button className="flex-1 py-2 text-xs font-bold text-slate-500 dark:text-slate-400">GBP</button>
</div>
</div>
<div className="flex justify-between items-center opacity-40">
<p className="text-[10px] uppercase tracking-widest font-bold">© 2024 Wanderlux Private Ltd.</p>
<p className="text-[10px] uppercase tracking-widest font-bold">Privacy Policy</p>
</div>
</footer>
</div>
<div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
</div>
    </div>
  );
}
