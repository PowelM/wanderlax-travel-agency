"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function WanderluxHomepageEnhancedAnimationsPage() {
  return (
    <div className="stitch-screen">
      <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
{/* Header */}
<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border-dark/0 bg-background-dark/20 backdrop-blur-0 px-6 py-4 lg:px-10 transition-all duration-500 hover:bg-background-dark/80 hover:backdrop-blur-md hover:border-border-dark/50">
<div className="flex items-center gap-3 text-white">
<div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
<span className="material-symbols-outlined text-2xl">diamond</span>
</div>
<h2 className="text-white text-xl font-bold tracking-tight">Wanderlux</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#">Destinations</a>
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#">Experiences</a>
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#">Services</a>
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#">Journal</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-red-700 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(198,16,16,0.3)] hover:shadow-[0_0_20px_rgba(198,16,16,0.5)] glare-effect">
                    Book Now
                </button>
<button className="md:hidden text-white">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</header>
{/* Hero Section */}
<div className="relative pt-20">
<div className="relative h-[85vh] w-full overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 bg-cover bg-center parallax-bg" data-alt="Luxury resort infinity pool overlooking ocean sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAG-nBSVSDd4-CVEQdzja6yF4EgsR0kyY6tli9EV_yc_1h3nJrKtg4ZfLt8ra6BLEXhboYRg6UmfcqF4mjOo0kAmvJKuaYW-QKYjPiU-DCGo7rOC2eKhjNFA5ACaf7lkFA5zw82VYhLg3h5mc8-2oNNDVptw_GvDEflviYie68wKIjn7wrH33tgp-9VMYi3k-y7ITa7S0jT55DlysArwCsNTsUi3lT2tJOLcOrVe4uKovEtstFyl8ffHZZ1eMHwZ9PxvRQSfwXLkw')" }}>
</div>
{/* Overlays */}
<div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-transparent to-background-dark"></div>
<div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>
{/* Content */}
<div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10 max-w-5xl mx-auto">
<div className="space-y-6 animate-fade-in-up">
<h2 className="text-primary font-medium tracking-widest uppercase text-sm md:text-base mb-2">Curated journeys for the discerning traveler</h2>
<h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">Experience the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 reveal-text">Extraordinary</span></h1>
<p className="text-slate-300 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed pt-4">
                            Unlock a world of unparalleled luxury. From private jets to secluded islands, we craft moments that last a lifetime.
                        </p>
<div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex items-center justify-center h-14 px-8 rounded-full bg-white text-background-dark hover:bg-slate-100 font-bold text-base transition-all transform hover:scale-105 glare-effect">
                                Start Your Journey
                            </button>
<button className="flex items-center justify-center h-14 px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-medium text-base transition-all">
<span className="material-symbols-outlined mr-2">play_circle</span>
                                Watch Film
                            </button>
</div>
</div>
</div>
</div>
</div>
{/* Booking Bar (Overlapping Hero) */}
<div className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
<div className="bg-surface-dark/80 backdrop-blur-xl border border-border-dark rounded-2xl shadow-2xl p-2 md:p-4">
{/* Tabs */}
<div className="flex overflow-x-auto pb-4 md:pb-0 border-b border-border-dark/50 md:border-b-0 gap-6 md:gap-8 px-4 mb-4 md:mb-0">
<button className="flex items-center gap-2 pb-3 md:pb-4 border-b-2 border-primary text-white transition-colors whitespace-nowrap">
<span className="material-symbols-outlined filled">flight</span>
<span className="font-bold text-sm">Flights</span>
</button>
<button className="flex items-center gap-2 pb-3 md:pb-4 border-b-2 border-transparent text-text-muted hover:text-white transition-colors whitespace-nowrap">
<span className="material-symbols-outlined">hotel</span>
<span className="font-bold text-sm">Hotels</span>
</button>
<button className="flex items-center gap-2 pb-3 md:pb-4 border-b-2 border-transparent text-text-muted hover:text-white transition-colors whitespace-nowrap">
<span className="material-symbols-outlined">directions_car</span>
<span className="font-bold text-sm">Cars</span>
</button>
<button className="flex items-center gap-2 pb-3 md:pb-4 border-b-2 border-transparent text-text-muted hover:text-white transition-colors whitespace-nowrap">
<span className="material-symbols-outlined">map</span>
<span className="font-bold text-sm">Tours</span>
</button>
</div>
{/* Inputs */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
<div className="bg-background-dark/50 rounded-lg p-3 border border-border-dark hover:border-primary/50 transition-colors group cursor-pointer">
<label className="block text-xs text-text-muted font-medium mb-1">Destination</label>
<div className="flex items-center justify-between text-white font-semibold">
<span>Where to?</span>
<span className="material-symbols-outlined text-text-muted group-hover:text-white">search</span>
</div>
</div>
<div className="bg-background-dark/50 rounded-lg p-3 border border-border-dark hover:border-primary/50 transition-colors group cursor-pointer">
<label className="block text-xs text-text-muted font-medium mb-1">Check In - Out</label>
<div className="flex items-center justify-between text-white font-semibold">
<span>Add Dates</span>
<span className="material-symbols-outlined text-text-muted group-hover:text-white">calendar_month</span>
</div>
</div>
<div className="bg-background-dark/50 rounded-lg p-3 border border-border-dark hover:border-primary/50 transition-colors group cursor-pointer">
<label className="block text-xs text-text-muted font-medium mb-1">Travelers</label>
<div className="flex items-center justify-between text-white font-semibold">
<span>2 Guests</span>
<span className="material-symbols-outlined text-text-muted group-hover:text-white">group</span>
</div>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold rounded-lg h-full min-h-[56px] flex items-center justify-center transition-all shadow-[0_0_15px_rgba(198,16,16,0.3)] glare-effect">
                        Search Availability
                    </button>
</div>
</div>
</div>
{/* Featured Destinations */}
<section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full fade-up-on-scroll">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Destinations</h2>
<p className="text-text-muted">Hand-picked locations for your next adventure</p>
</div>
<div className="flex gap-2">
<button className="size-10 rounded-full border border-border-dark bg-surface-dark hover:bg-border-dark text-white flex items-center justify-center transition-colors">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<button className="size-10 rounded-full border border-border-dark bg-surface-dark hover:bg-border-dark text-white flex items-center justify-center transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
{/* Destination Card 1 */}
<div className="min-w-[280px] md:min-w-[340px] snap-center group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Venice Canal" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Venice canal with gondola sunset" data-location="Venice, Italy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfElhVBZd9Ptim2jWHPlAn09P2UGo2XUL7FW85EqAs_RYv88scy-kUMyMM8k53u_Kr_hKeTDi4hoi2nEOdonWBmNAMAOZCOCL01u-Gku0r5NdySiWBANAlwQ7gvW2_EXf63PnIrpPAJwXe1gptVE2_36ij5xdl4nYby2GnOMuvNE2dq7dENzF6Bq2Yv55JG5_efsO0H8sFShpPDOKyQegWTmTjZpZeqbCfQX7oPMBbhTWtrZupZ3Y-dzEOq0d0TTKV_c6UwYOXAg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold mb-3">Popular</span>
<h3 className="text-2xl font-bold text-white mb-1">Venice</h3>
<div className="flex items-center justify-between">
<p className="text-slate-300 text-sm">Italy</p>
<span className="text-white font-bold text-lg">$1,200<span className="text-xs font-normal text-slate-400">/night</span></span>
</div>
</div>
</div>
{/* Destination Card 2 */}
<div className="min-w-[280px] md:min-w-[340px] snap-center group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Maldives Bungalow" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Overwater bungalow in Maldives turquoise water" data-location="Malé, Maldives" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTpBxYrTRuys4EpukZ7pAKpCdISHESgode32osxKs03Jl4Waja66Mw5rpWTbClN8vzRZOoaV7hHoGFJOc3r6Wwz6z8nDoJ1ewT9J7K0KCBqMMD-11M1JGivAFkt65uPLm8Zyajq5hkIVbswsthaHHGP0mg_AMYcOpazisdB5PV3dcIjy7XHL2AiAtgZLp-QMJeSegpq0U-ozvXJdOjeDn7mdSnjwbo6nZlvq6SWD-HM9fZLepd6u5DxcmDm4vdMTw5msOlGE2htg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-3">Beach</span>
<h3 className="text-2xl font-bold text-white mb-1">Maldives</h3>
<div className="flex items-center justify-between">
<p className="text-slate-300 text-sm">South Asia</p>
<span className="text-white font-bold text-lg">$2,450<span className="text-xs font-normal text-slate-400">/night</span></span>
</div>
</div>
</div>
{/* Destination Card 3 */}
<div className="min-w-[280px] md:min-w-[340px] snap-center group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Alps Mountain View" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Snowy mountain peaks in Swiss Alps" data-location="Zermatt, Switzerland" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxIjYgqRX1q1PfxVue80is3SCJJmQ4BbUUNsT8bhuV13c-UZ2Z0k-0noPvafkSDyIjbLrABLhSk9MnRwEsCi1dGKjyhGRW6sSwetStKgXumTgBh0zBblZFKAvvaBS6mmAQKvY-mkY6xhNULNZ9521hWHP22WnHRDra2NQ_4EM7AY64lBpksEpZR5b0Yz0QQNIR-hWNbR9of74vQtyRVX8ioqnOJfr4yGew0E4438dRUoHWRBrBayZcMv9OGGDar04K784_333R4Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-3">Ski</span>
<h3 className="text-2xl font-bold text-white mb-1">Swiss Alps</h3>
<div className="flex items-center justify-between">
<p className="text-slate-300 text-sm">Switzerland</p>
<span className="text-white font-bold text-lg">$3,100<span className="text-xs font-normal text-slate-400">/night</span></span>
</div>
</div>
</div>
{/* Destination Card 4 */}
<div className="min-w-[280px] md:min-w-[340px] snap-center group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Tokyo Neon Street" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Neon lit street in Tokyo at night" data-location="Tokyo, Japan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDniwPg-EnPxcMasV7QF8BEPIPiDsDYrRweZ3nudIoyCD3EcmxGEo6xggYf5OoBgo9Cj8yJuimmETZcoO6rogTTpACSJJTNHBt_CSRliATG2NUKyv7YjngYfHOWOKBVMTV-ueahhDXyhqX0cfuoxqfkbT0gYGSdMBm227VxCY-_tNIjtP2slcZ3yAHc5h6LcJFOU3NpMiHiRo4RNGxAugHXufMzgYT7rtCQ95WFjd8RLAalR4htzd_bFEDeCS9dNRUtefRHq6f5Cg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-3">Urban</span>
<h3 className="text-2xl font-bold text-white mb-1">Tokyo</h3>
<div className="flex items-center justify-between">
<p className="text-slate-300 text-sm">Japan</p>
<span className="text-white font-bold text-lg">$950<span className="text-xs font-normal text-slate-400">/night</span></span>
</div>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="py-20 bg-surface-dark relative">
<div className="absolute inset-0 bg-noise opacity-30"></div>
<div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 sticky top-24">
<h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
<h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Seamless booking for every leg of your trip.</h3>
<p className="text-text-muted mb-8 text-lg">We handle the details so you can focus on the experience. From door-to-door transportation to exclusive access.</p>
<button className="group flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
                            View All Services 
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
{/* Service 1 */}
<div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 fade-up-on-scroll">
<div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">flight_takeoff</span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Private Jets</h4>
<p className="text-text-muted text-sm leading-relaxed">Skip the lines and fly in absolute comfort. We arrange charters that fit your schedule perfectly.</p>
</div>
{/* Service 2 */}
<div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 fade-up-on-scroll">
<div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">apartment</span>
</div>
<h4 className="text-xl font-bold text-white mb-3">5-Star Suites</h4>
<p className="text-text-muted text-sm leading-relaxed">Access to the world's most exclusive penthouses and suites, inspected for quality assurance.</p>
</div>
{/* Service 3 */}
<div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 fade-up-on-scroll">
<div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">directions_car</span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Chauffeur Service</h4>
<p className="text-text-muted text-sm leading-relaxed">Premium vehicles at your disposal 24/7. Professional drivers who know the local routes.</p>
</div>
{/* Service 4 */}
<div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 fade-up-on-scroll">
<div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">restaurant</span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Fine Dining</h4>
<p className="text-text-muted text-sm leading-relaxed">Reservations at Michelin-starred restaurants and private chef experiences in your villa.</p>
</div>
</div>
</div>
</div>
</section>
{/* Stats Section */}
<section className="py-16 border-y border-border-dark bg-background-dark/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl font-black text-white">120+</span>
<span className="text-text-muted text-sm font-medium uppercase tracking-wider">Countries</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl font-black text-white">15k</span>
<span className="text-text-muted text-sm font-medium uppercase tracking-wider">Happy Travelers</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl font-black text-white">850</span>
<span className="text-text-muted text-sm font-medium uppercase tracking-wider">Luxury Partners</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl font-black text-white">24/7</span>
<span className="text-text-muted text-sm font-medium uppercase tracking-wider">Concierge Support</span>
</div>
</div>
</div>
</section>
{/* Newsletter / CTA */}
<section className="relative py-24 px-4 overflow-hidden">
{/* Background Image with Overlay */}
<div className="absolute inset-0 bg-cover bg-center opacity-40 parallax-bg" data-alt="Luxury hotel lobby interior with warm lighting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADnPA-nh9FeqNhQ64DbothtoFwNtfuDLNQlY0Nw4zUN6XEpd3M2bpHvAcHoyCfOqeFuz7jOP7Uo0KaO307K1UcluRAaxktxmBHoEAXd7vgjxsgEviOC8eoHGOI02ZjtARk2IQ6nFLU6cHDgT3dXt_Cx2g-LhsJS9y4dNnUYAyIctcSoZoqukIH_g_-1gzHhKxnFgHsSHqKwYzYFKy-56a1FTwJoOJBFscLY4IPEPKTauTd2ElcJeKhLWkgsGQW2zibIdDy-aQZEw')" }}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-background-dark/60"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
<span className="material-symbols-outlined text-5xl text-primary animate-bounce">mail</span>
<h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Join the Elite Traveler's Club</h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto">Get exclusive access to secret deals, private island offers, and luxury travel inspiration delivered to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-4">
<input className="flex-1 h-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none backdrop-blur-sm transition-all" placeholder="Enter your email address" type="email"/>
<button className="h-12 px-8 rounded-lg bg-primary hover:bg-red-700 text-white font-bold whitespace-nowrap transition-colors shadow-lg" type="button">Subscribe</button>
</form>
<p className="text-xs text-slate-500 pt-4">We respect your privacy. Unsubscribe at any time.</p>
</div>
</section>
{/* Footer */}
<footer className="bg-surface-dark border-t border-border-dark pt-16 pb-8 px-6 lg:px-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-3 text-white">
<div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
<span className="material-symbols-outlined text-2xl">diamond</span>
</div>
<h2 className="text-white text-xl font-bold tracking-tight">Wanderlux</h2>
</div>
<p className="text-text-muted text-sm leading-relaxed">
                            Crafting unforgettable journeys for the world's most discerning travelers since 2010.
                        </p>
<div className="flex gap-4">
<a className="text-text-muted hover:text-white transition-colors" href="#"><span className="sr-only">Facebook</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a>
<a className="text-text-muted hover:text-white transition-colors" href="#"><span className="sr-only">Instagram</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zm-2.316 2.316c-2.643 0-2.987.012-4.043.06-1.064.049-1.791.218-2.427.465a2.607 2.607 0 00-1.488 1.488c-.247.636-.416 1.363-.465 2.427-.043.951-.055 1.284-.055 3.513 0 2.23.012 2.561.055 3.513.049 1.064.218 1.791.465 2.427.26.65.65 1.04 1.288 1.288.636.247 1.363.416 2.427.465 1.05.044 1.383.056 3.808.056 2.425 0 2.757-.012 3.808-.056 1.064-.049 1.791-.218 2.427-.465a2.607 2.607 0 001.488-1.488c.247-.636.416-1.363.465-2.427.044-1.05.056-1.383.056-3.808 0-2.426-.012-2.757-.056-3.808-.049-1.064-.218-1.791-.465-2.427a2.607 2.607 0 00-1.488-1.488c-.636-.247-1.363-.416-2.427-.465-1.05-.044-1.383-.056-3.808-.056-.47 0-.938.006-1.396.02z" fillRule="evenodd"></path></svg></a>
<a className="text-text-muted hover:text-white transition-colors" href="#"><span className="sr-only">Twitter</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
</div>
</div>
<div>
<h3 className="text-white font-bold mb-6">Company</h3>
<ul className="space-y-4">
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">About Us</a></li>
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Careers</a></li>
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Press</a></li>
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Affiliates</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-bold mb-6">Support</h3>
<ul className="space-y-4">
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Help Center</a></li>
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Terms of Service</a></li>
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Privacy Policy</a></li>
<li><a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-bold mb-6">Contact</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5 text-lg">location_on</span>
<span className="text-text-muted text-sm">123 Luxury Lane, Beverly Hills, CA 90210</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-lg">call</span>
<span className="text-text-muted text-sm">+1 (800) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-lg">mail</span>
<span className="text-text-muted text-sm">concierge@wanderlux.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-text-muted text-xs">© 2024 Wanderlux Travel. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-text-muted hover:text-white text-xs transition-colors" href="#">Privacy</a>
<a className="text-text-muted hover:text-white text-xs transition-colors" href="#">Terms</a>
<a className="text-text-muted hover:text-white text-xs transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>
</div>
    </div>
  );
}
