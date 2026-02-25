"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const bookingTabs = [
    { icon: 'flight', label: 'Flights' },
    { icon: 'hotel', label: 'Hotels' },
    { icon: 'directions_car', label: 'Cars' },
    { icon: 'map', label: 'Tours' },
  ];

  const destinations = [
    {
      name: 'Venice',
      country: 'Italy',
      price: '$1,200',
      tag: 'Popular',
      tagStyle: 'bg-primary/90',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfElhVBZd9Ptim2jWHPlAn09P2UGo2XUL7FW85EqAs_RYv88scy-kUMyMM8k53u_Kr_hKeTDi4hoi2nEOdonWBmNAMAOZCOCL01u-Gku0r5NdySiWBANAlwQ7gvW2_EXf63PnIrpPAJwXe1gptVE2_36ij5xdl4nYby2GnOMuvNE2dq7dENzF6Bq2Yv55JG5_efsO0H8sFShpPDOKyQegWTmTjZpZeqbCfQX7oPMBbhTWtrZupZ3Y-dzEOq0d0TTKV_c6UwYOXAg',
      slug: '/tours?destination=venice',
    },
    {
      name: 'Maldives',
      country: 'South Asia',
      price: '$2,450',
      tag: 'Beach',
      tagStyle: 'bg-white/20 backdrop-blur-md',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTpBxYrTRuys4EpukZ7pAKpCdISHESgode32osxKs03Jl4Waja66Mw5rpWTbClN8vzRZOoaV7hHoGFJOc3r6Wwz6z8nDoJ1ewT9J7K0KCBqMMD-11M1JGivAFkt65uPLm8Zyajq5hkIVbswsthaHHGP0mg_AMYcOpazisdB5PV3dcIjy7XHL2AiAtgZLp-QMJeSegpq0U-ozvXJdOjeDn7mdSnjwbo6nZlvq6SWD-HM9fZLepd6u5DxcmDm4vdMTw5msOlGE2htg',
      slug: '/tours?destination=maldives',
    },
    {
      name: 'Swiss Alps',
      country: 'Switzerland',
      price: '$3,100',
      tag: 'Ski',
      tagStyle: 'bg-white/20 backdrop-blur-md',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxIjYgqRX1q1PfxVue80is3SCJJmQ4BbUUNsT8bhuV13c-UZ2Z0k-0noPvafkSDyIjbLrABLhSk9MnRwEsCi1dGKjyhGRW6sSwetStKgXumTgBh0zBblZFKAvvaBS6mmAQKvY-mkY6xhNULNZ9521hWHP22WnHRDra2NQ_4EM7AY64lBpksEpZR5b0Yz0QQNIR-hWNbR9of74vQtyRVX8ioqnOJfr4yGew0E4438dRUoHWRBrBayZcMv9OGGDar04K784_333R4Q',
      slug: '/tours?destination=swiss-alps',
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      price: '$950',
      tag: 'Urban',
      tagStyle: 'bg-white/20 backdrop-blur-md',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDniwPg-EnPxcMasV7QF8BEPIPiDsDYrRweZ3nudIoyCD3EcmxGEo6xggYf5OoBgo9Cj8yJuimmETZcoO6rogTTpACSJJTNHBt_CSRliATG2NUKyv7YjngYfHOWOKBVMTV-ueahhDXyhqX0cfuoxqfkbT0gYGSdMBm227VxCY-_tNIjtP2slcZ3yAHc5h6LcJFOU3NpMiHiRo4RNGxAugHXufMzgYT7rtCQ95WFjd8RLAalR4htzd_bFEDeCS9dNRUtefRHq6f5Cg',
      slug: '/tours?destination=tokyo',
    },
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 360;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="relative w-full flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pt-[72px]">
        <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAG-nBSVSDd4-CVEQdzja6yF4EgsR0kyY6tli9EV_yc_1h3nJrKtg4ZfLt8ra6BLEXhboYRg6UmfcqF4mjOo0kAmvJKuaYW-QKYjPiU-DCGo7rOC2eKhjNFA5ACaf7lkFA5zw82VYhLg3h5mc8-2oNNDVptw_GvDEflviYie68wKIjn7wrH33tgp-9VMYi3k-y7ITa7S0jT55DlysArwCsNTsUi3lT2tJOLcOrVe4uKovEtstFyl8ffHZZ1eMHwZ9PxvRQSfwXLkw')" }}>
          </div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-transparent to-background-dark"></div>
          <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 sm:px-8 text-center z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
              <span className="text-primary font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm">
                Curated journeys for the discerning traveler
              </span>
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                Experience the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Extraordinary
                </span>
              </h1>
              <p className="text-slate-300 max-w-xl text-base sm:text-lg md:text-xl font-light leading-relaxed">
                Unlock a world of unparalleled luxury. From private jets to secluded islands, we craft moments that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/tours" className="flex items-center justify-center h-14 px-8 rounded-full bg-white text-background-dark hover:bg-slate-100 font-bold text-base transition-all transform hover:scale-105">
                  Start Your Journey
                </Link>
                <Link href="/about" className="flex items-center justify-center h-14 px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-medium text-base transition-all">
                  <span className="material-symbols-outlined mr-2">play_circle</span>
                  Watch Film
                </Link>
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
            {bookingTabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 pb-3 md:pb-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === idx
                    ? 'border-primary text-white'
                    : 'border-transparent text-text-muted hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined ${activeTab === idx ? 'filled' : ''}`}>{tab.icon}</span>
                <span className="font-bold text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
            <div className="bg-background-dark/50 rounded-lg p-3 border border-border-dark hover:border-primary/50 transition-colors group">
              <label className="block text-xs text-text-muted font-medium mb-1">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full bg-transparent border-none text-white font-semibold placeholder-white focus:outline-none focus:ring-0 text-sm"
              />
            </div>
            <div className="bg-background-dark/50 rounded-lg p-3 border border-border-dark hover:border-primary/50 transition-colors group">
              <label className="block text-xs text-text-muted font-medium mb-1">Check In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent border-none text-white font-semibold focus:outline-none focus:ring-0 text-sm [color-scheme:dark]"
              />
            </div>
            <div className="bg-background-dark/50 rounded-lg p-3 border border-border-dark hover:border-primary/50 transition-colors group">
              <label className="block text-xs text-text-muted font-medium mb-1">Travelers</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="size-7 rounded bg-border-dark text-white flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold"
                >
                  −
                </button>
                <span className="text-white font-semibold text-sm">{travelers} {travelers === 1 ? 'Guest' : 'Guests'}</span>
                <button
                  onClick={() => setTravelers(Math.min(20, travelers + 1))}
                  className="size-7 rounded bg-border-dark text-white flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <Link href={`/tours${destination ? `?destination=${encodeURIComponent(destination)}` : ''}`} className="bg-primary hover:bg-red-700 text-white font-bold rounded-lg min-h-[56px] flex items-center justify-center transition-all shadow-[0_0_15px_rgba(198,16,16,0.3)]">
              Search Availability
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Destinations</h2>
            <p className="text-text-muted">Hand-picked locations for your next adventure</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll left"
              className="size-10 rounded-full border border-border-dark bg-surface-dark hover:bg-border-dark text-white flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll right"
              className="size-10 rounded-full border border-border-dark bg-surface-dark hover:bg-border-dark text-white flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x scroll-smooth">
          {destinations.map((dest) => (
            <Link key={dest.name} href={dest.slug} className="min-w-[280px] md:min-w-[340px] snap-center group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0">
              <img alt={dest.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={dest.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className={`inline-block px-3 py-1 rounded-full ${dest.tagStyle} text-white text-xs font-bold mb-3`}>{dest.tag}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-slate-300 text-sm">{dest.country}</p>
                  <span className="text-white font-bold text-lg">{dest.price}<span className="text-xs font-normal text-slate-400">/night</span></span>
                </div>
              </div>
            </Link>
          ))}
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
              <Link href="/tours" className="group flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
                View All Services
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                <div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">flight_takeoff</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Private Jets</h4>
                <p className="text-text-muted text-sm leading-relaxed">Skip the lines and fly in absolute comfort. We arrange charters that fit your schedule perfectly.</p>
              </div>
              <div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                <div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">apartment</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">5-Star Suites</h4>
                <p className="text-text-muted text-sm leading-relaxed">Access to the world&apos;s most exclusive penthouses and suites, inspected for quality assurance.</p>
              </div>
              <div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                <div className="size-14 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">directions_car</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Chauffeur Service</h4>
                <p className="text-text-muted text-sm leading-relaxed">Premium vehicles at your disposal 24/7. Professional drivers who know the local routes.</p>
              </div>
              <div className="group bg-background-dark border border-border-dark p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
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
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADnPA-nh9FeqNhQ64DbothtoFwNtfuDLNQlY0Nw4zUN6XEpd3M2bpHvAcHoyCfOqeFuz7jOP7Uo0KaO307K1UcluRAaxktxmBHoEAXd7vgjxsgEviOC8eoHGOI02ZjtARk2IQ6nFLU6cHDgT3dXt_Cx2g-LhsJS9y4dNnUYAyIctcSoZoqukIH_g_-1gzHhKxnFgHsSHqKwYzYFKy-56a1FTwJoOJBFscLY4IPEPKTauTd2ElcJeKhLWkgsGQW2zibIdDy-aQZEw')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-background-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <span className="material-symbols-outlined text-5xl text-primary animate-bounce">mail</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Join the Elite Traveler&apos;s Club</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Get exclusive access to secret deals, private island offers, and luxury travel inspiration delivered to your inbox.</p>

          {newsletterSubmitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 max-w-lg mx-auto animate-fade-in-up">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                <h3 className="text-lg font-bold text-white">Welcome to the Club!</h3>
              </div>
              <p className="text-slate-400 text-sm">You&apos;ll receive our next exclusive offer in your inbox.</p>
              <button onClick={() => setNewsletterSubmitted(false)} className="text-primary text-sm font-bold mt-3 hover:underline">
                Subscribe another email
              </button>
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-4" onSubmit={handleNewsletterSubmit}>
              <input
                className="flex-1 h-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none backdrop-blur-sm transition-all"
                placeholder="Enter your email address"
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button className="h-12 px-8 rounded-lg bg-primary hover:bg-red-700 text-white font-bold whitespace-nowrap transition-colors shadow-lg" type="submit">Subscribe</button>
            </form>
          )}

          <p className="text-xs text-slate-500 pt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
