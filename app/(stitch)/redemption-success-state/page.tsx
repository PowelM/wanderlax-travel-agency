"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function RedemptionSuccessStatePage() {
  return (
    <div className="stitch-screen">
      {/* Main Container */}
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* Navigation Header */}
<header className="flex items-center justify-between border-b border-primary/10 px-6 py-4 lg:px-40 bg-background-light dark:bg-background-dark">
<div className="flex items-center gap-4 text-primary">
<div className="size-6">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Wanderlux</h2>
</div>
<button className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</header>
<main className="flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-4xl mx-auto w-full relative">
{/* Subtle Glow Effect Decoration */}
<div className="absolute inset-0 glow-overlay pointer-events-none"></div>
{/* Hero Section */}
<div className="w-full @container mb-8">
<div className="relative overflow-hidden rounded-xl aspect-[16/9] lg:aspect-[21/9] shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
<img alt="Luxury private island dinner setup" className="absolute inset-0 w-full h-full object-cover" data-alt="Cinematic luxury private island dinner beach setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAz7P4LtTfQ5sAEnfNqdkgftQXCcukYvI3GBZmraRgRIG_ueVaKnz3iCLdkTi7aT8Nk5eQHz3UU4fAJBy7ZE5jaW4yPhQIKPC2RL3IiBRJBq4M7aTFpQpCWhpOfeuyVgzn_YtC_0ChImO4oFcNkL-YAaJgw6r-ngflM0tw8CoUwVoop0JvT5Glv7SLPmNTV89MJ7YE94lZC0JjcizxYq3wGLVLfqXVSd4QfU-6_B9c99ZCPBuTA89I-vX7TGL19Ys0fkayHbh4YQ"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="flex items-center gap-2 mb-2">
<span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white uppercase">Confirmed</span>
</div>
<h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">Adventure Awaits, Julian!</h1>
</div>
</div>
</div>
{/* Success Message & Summary */}
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
<span className="material-symbols-outlined text-4xl">celebration</span>
</div>
<h2 className="text-3xl font-bold mb-3">Redemption Successful</h2>
<p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                        Your exclusive Private Island Dinner has been secured. Get ready for an unforgettable evening under the stars.
                    </p>
</div>
{/* Redemption Details Card */}
<div className="w-full max-w-2xl bg-white dark:bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-xl mb-10 relative overflow-hidden">
{/* Accent Pattern */}
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl">diamond</span>
</div>
<div className="flex flex-col md:flex-row gap-6 relative z-10">
<div className="flex-1">
<p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-1">Experience</p>
<h3 className="text-xl font-bold mb-4">Private Island Dinner</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="text-sm">Maldives Signature Retreat</span>
</div>
<div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
<span className="text-sm">October 24, 2024 • 7:00 PM</span>
</div>
</div>
</div>
<div className="md:w-px bg-primary/20"></div>
<div className="flex flex-col justify-center items-center md:items-end md:text-right">
<p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase mb-1">Updated Balance</p>
<div className="text-2xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">stars</span>
                                85,420 <span className="text-sm font-normal text-slate-400 uppercase">pts</span>
</div>
<p className="text-primary text-[10px] font-bold mt-1 tracking-wider">-15,000 pts redeemed</p>
</div>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
<button className="flex-1 bg-primary text-white font-bold py-4 px-8 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
<span>View Trip Details</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="flex-1 bg-transparent border border-primary/30 text-primary font-bold py-4 px-8 rounded-xl hover:bg-primary/5 transition-all">
                        Back to Home
                    </button>
</div>
{/* Footer Tagline */}
<p className="mt-12 text-slate-400 dark:text-slate-500 text-xs uppercase tracking-[0.3em] font-medium">
                    The pinnacle of luxury travel
                </p>
</main>
</div>
</div>
    </div>
  );
}
