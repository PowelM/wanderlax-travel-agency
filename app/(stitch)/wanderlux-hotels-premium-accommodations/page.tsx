"use client";
/* eslint-disable react/no-unescaped-entities */
 
import React from 'react';

export default function WanderluxHotelsPremiumAccommodationsPage() {
  return (
    <div className="stitch-screen">
      {/* Header */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-color bg-background-dark px-10 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4 text-white">
<div className="size-8 text-primary">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
</svg>
</div>
<h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Wanderlux</h2>
</div>
<div className="flex flex-1 justify-end gap-8">
<nav className="hidden md:flex items-center gap-9">
<a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Hotels</a>
<a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Flights</a>
<a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Experiences</a>
<a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Concierge</a>
</nav>
<div className="flex gap-3">
<button className="hidden md:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-surface-dark border border-border-color hover:border-primary text-white text-sm font-bold transition-all">
                    Sign In
                </button>
<button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(198,16,16,0.3)]">
                    Join Now
                </button>
</div>
</div>
</header>
{/* Main Content Layout */}
<div className="flex flex-1 flex-col lg:flex-row h-[calc(100vh-73px)] overflow-hidden">
{/* Sidebar Filters */}
<aside className="hidden lg:flex flex-col w-80 border-r border-border-color bg-background-dark overflow-y-auto p-6 gap-6">
<div className="flex flex-col gap-1">
<h1 className="text-white text-lg font-bold">Filters</h1>
<p className="text-text-muted text-sm">Refine your hotel search</p>
</div>
{/* Price Range */}
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Price Range</h3>
<span className="material-symbols-outlined text-text-muted text-sm">expand_less</span>
</div>
<div className="h-1 w-full bg-surface-dark rounded-full relative mt-2 mb-4">
<div className="absolute left-1/4 right-1/4 top-0 bottom-0 bg-primary rounded-full"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary cursor-pointer"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-text-muted font-mono">
<span>$200</span>
<span>$850+</span>
</div>
</div>
<hr className="border-border-color"/>
{/* Star Rating */}
<div className="flex flex-col gap-3">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Star Rating</h3>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="text-sm text-text-muted group-hover:text-white ml-auto">5 Star</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-text-muted text-sm">star</span>
</div>
<span className="text-sm text-text-muted group-hover:text-white ml-auto">4 Star</span>
</label>
</div>
</div>
<hr className="border-border-color"/>
{/* Amenities */}
<div className="flex flex-col gap-3">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Amenities</h3>
<div className="grid grid-cols-1 gap-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary">wifi</span>
<span className="text-sm text-text-muted group-hover:text-white transition-colors">Free Wifi</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary">pool</span>
<span className="text-sm text-text-muted group-hover:text-white transition-colors">Pool</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary">spa</span>
<span className="text-sm text-text-muted group-hover:text-white transition-colors">Spa &amp; Wellness</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary">fitness_center</span>
<span className="text-sm text-text-muted group-hover:text-white transition-colors">Gym</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-checkbox rounded border-border-color bg-surface-dark text-primary focus:ring-primary/20" type="checkbox"/>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary">restaurant</span>
<span className="text-sm text-text-muted group-hover:text-white transition-colors">Restaurant</span>
</label>
</div>
</div>
</aside>
{/* Main Listing Area */}
<main className="flex-1 flex flex-col overflow-hidden bg-background-dark relative">
{/* Sticky Search Bar */}
<div className="sticky top-0 z-40 bg-background-dark/95 backdrop-blur-sm border-b border-border-color px-6 py-4">
<div className="flex flex-col lg:flex-row gap-4 items-end">
{/* Destination */}
<div className="flex flex-col flex-1 w-full">
<label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5 ml-1">Destination</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">location_on</span>
<input className="w-full bg-surface-dark border border-border-color rounded-lg py-3 pl-10 pr-4 text-white placeholder-text-muted/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Where are you going?" type="text" value="Kyoto, Japan"/>
</div>
</div>
{/* Dates */}
<div className="flex flex-col flex-1 w-full">
<label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5 ml-1">Dates</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">calendar_month</span>
<input className="w-full bg-surface-dark border border-border-color rounded-lg py-3 pl-10 pr-4 text-white placeholder-text-muted/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Check-in - Check-out" type="text" value="Oct 12 - Oct 18"/>
</div>
</div>
{/* Guests */}
<div className="flex flex-col flex-1 w-full">
<label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5 ml-1">Guests</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">group</span>
<input className="w-full bg-surface-dark border border-border-color rounded-lg py-3 pl-10 pr-4 text-white placeholder-text-muted/50 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Guests" type="text" value="2 Adults, 1 Room"/>
</div>
</div>
{/* Search Button */}
<button className="h-[46px] aspect-square flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">search</span>
</button>
</div>
</div>
{/* Scrollable Content */}
<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
{/* Promoted Section */}
<section className="mb-10">
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-2xl font-bold text-white mb-1">Featured Luxury Stays</h2>
<p className="text-text-muted text-sm">Hand-picked premium hotels for your perfect vacation</p>
</div>
<a className="text-primary text-sm font-medium hover:text-white transition-colors flex items-center gap-1" href="#">
                            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Hero Card 1 */}
<div className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Luxury hotel infinity pool overlooking the ocean at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3LboRjFRBURcDK81YS2v0nIq8kE4O6WyivnqM816-FjZ-s97NPdp8dah9YsazAcO07rSurdssBW7jYT2QlIQi6bwiQ-o7zsUxwW3X7nkYicZ7UBZ2xx2Tkklb62hCp1xzapDUFP9iB22Jkp4UpWUTwi38_zNpWBX0-zS1FX_EAWcnEqewSvnAmuGieRkgLu3IFAU4qHWcvlaniG3KsaGV0cZFiyqxHm7f785h3hu99hyIwUfNo02YzpR0wMxF9sF7lwNuEvHj9g')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg">Wanderlux Choice</div>
<div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-white">favorite</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-1 text-yellow-500 mb-2">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-white text-xs ml-1 font-medium">5.0 (124 reviews)</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">The Royal Kyoto Resort</h3>
<p className="text-white/80 text-sm mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    Higashiyama Ward, Kyoto
                                </p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex flex-col">
<span className="text-xs text-white/60">Price per night</span>
<span className="text-xl font-bold text-white">$850</span>
</div>
<button className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                        View Details
                                    </button>
</div>
</div>
</div>
{/* Hero Card 2 */}
<div className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern hotel interior with warm lighting and plush seating" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmck2ExUd_W2H_reGKJxUMj6GIC02F26YTDdlfB44YpRs98YXz7d5XVCaqfiqMWhmCG421VQmKVW3kojk94vM6wieUrOue_GcuaBCrqG8gh1P6iZmkEkEqWlbf8hcx-fGngeVknKxvJJnwopWkaMbgsXpc2r-vJI0UIx59GDjS-5vIN4xY1dhD_lCYQjYHxVtUbXedntxNslFQMQPG1sqz8FzLsi8AvxDBiT853c2kf-jSfaskrWQZEH_r-ducMy9bEjv6xo8qww')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-white">favorite</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-1 text-yellow-500 mb-2">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
<span className="text-white text-xs ml-1 font-medium">4.8 (86 reviews)</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">Sakura Modern Inn</h3>
<p className="text-white/80 text-sm mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    Shimogyo Ward, Kyoto
                                </p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex flex-col">
<span className="text-xs text-white/60">Price per night</span>
<span className="text-xl font-bold text-white">$420</span>
</div>
<button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                        View Details
                                    </button>
</div>
</div>
</div>
</div>
</section>
{/* List View & Map Layout */}
<div className="flex flex-col xl:flex-row gap-6">
{/* Hotel List */}
<div className="flex-1 flex flex-col gap-4">
<div className="flex justify-between items-center mb-2">
<h3 className="text-lg font-bold text-white">142 Properties found</h3>
<div className="flex items-center gap-2">
<span className="text-sm text-text-muted">Sort by:</span>
<select className="bg-transparent text-white text-sm font-medium border-none focus:ring-0 cursor-pointer pr-8">
<option>Recommended</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Top Rated</option>
</select>
</div>
</div>
{/* Card Item 1 */}
<div className="bg-surface-dark border border-border-color rounded-xl overflow-hidden flex flex-col sm:flex-row h-auto sm:h-56 group hover:border-primary/50 transition-colors">
<div className="w-full sm:w-64 bg-cover bg-center shrink-0 relative h-48 sm:h-full" data-alt="Beachfront resort hotel room with large windows" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbZ2r920Z0kijZ_Bu5HmbPvE0FFM9Raf3QTaVk01FYvhGiQB-RqDIKNPpK371ODJyfNo8dAuZAYuFalY0KJLKZLA4zy38gkhiK0OsuPWRqoFdGI5etmCO9XbEsUZrhh4yMS5PbLJU2J-rme3-e7NfgQNlSbxHOu4vSW4cCEkM1PqtD186d7B6CJxilKjvU_nsMh4rp73SnTR3kzccRFKR0X8erqv3p6jyb2-QAPigPLRFpNAhJgPbTMeB3RsxqUQxo7lXE-Y8YqQ')" }}>
<button className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Grand Arashiyama</h4>
<p className="text-sm text-text-muted flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> Arashiyama, Kyoto • 2.5km from center
                                            </p>
</div>
<div className="flex flex-col items-end">
<div className="flex text-yellow-500 text-sm">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="text-xs text-text-muted mt-1">4.9 (320 reviews)</span>
</div>
</div>
<div className="flex gap-2 mt-4 flex-wrap">
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Spa</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">River View</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Free Breakfast</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Pool</span>
</div>
</div>
<div className="flex items-end justify-between mt-4 sm:mt-0 pt-4 border-t border-border-color sm:border-t-0 sm:pt-0">
<div className="text-xs text-green-400 font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span> Free Cancellation
                                    </div>
<div className="flex flex-col items-end">
<span className="text-2xl font-bold text-white">$620</span>
<span className="text-xs text-text-muted">Includes taxes &amp; fees</span>
</div>
</div>
</div>
</div>
{/* Card Item 2 */}
<div className="bg-surface-dark border border-border-color rounded-xl overflow-hidden flex flex-col sm:flex-row h-auto sm:h-56 group hover:border-primary/50 transition-colors">
<div className="w-full sm:w-64 bg-cover bg-center shrink-0 relative h-48 sm:h-full" data-alt="Modern hotel exterior with pool" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmZVgMzw2CAfwZp3Oz5AKEsV5POQQH6XBZGBP-1EQodlRD8VV4yWL-xMAw5qBtrBwYFKSIRXaDKzF0Lm6vbAjJknXrj-V0L4eLzfjBd53-uhATLiA0T_KS13PvP2dJFC5Ro8BAymBZY7j58XPbAaO-u2DNfv4gcjPjjDKsP3NO8NsjsVdFEBzNhoPOxEXqMIDPEtgT8Ym13b3gMNlRgJsJ4t--nraYEzxcq90zuxNmNOcu6zpD3lh83DD7AIXmoq7xVhvv9OPh-w')" }}>
<button className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">The Gion Elite</h4>
<p className="text-sm text-text-muted flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> Gion, Kyoto • 0.5km from center
                                            </p>
</div>
<div className="flex flex-col items-end">
<div className="flex text-yellow-500 text-sm">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-text-muted text-sm">star</span>
</div>
<span className="text-xs text-text-muted mt-1">4.2 (105 reviews)</span>
</div>
</div>
<div className="flex gap-2 mt-4 flex-wrap">
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">City Center</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Bar</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Gym</span>
</div>
</div>
<div className="flex items-end justify-between mt-4 sm:mt-0 pt-4 border-t border-border-color sm:border-t-0 sm:pt-0">
<div className="text-xs text-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">local_fire_department</span> High Demand
                                    </div>
<div className="flex flex-col items-end">
<span className="text-2xl font-bold text-white">$345</span>
<span className="text-xs text-text-muted">Includes taxes &amp; fees</span>
</div>
</div>
</div>
</div>
{/* Card Item 3 */}
<div className="bg-surface-dark border border-border-color rounded-xl overflow-hidden flex flex-col sm:flex-row h-auto sm:h-56 group hover:border-primary/50 transition-colors">
<div className="w-full sm:w-64 bg-cover bg-center shrink-0 relative h-48 sm:h-full" data-alt="Traditional Japanese ryokan room with tatami mats" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeXL66kn9Slw8_oPtkvdedKCJjKfZsAcE5vrU7wSszLakqsC5VZqFnDfeT5VCSBs2MHs-_RfuJOT7pvhCjLMSSnVk69hsQAzscTCYp79NwU89Xo47dx_3yVVfZ-8e18gC39-EBNfLv7Wmg8ubUCJTsf4F_YyM-g5ShlrCpxG_mpJVVVHdnd5O8WayOZBG65fqC7U3ezK6bHuRthk7Tla0cGBoMw9wbg_SzAAD_cy5w6gWFSjgyOO-qJYl4xJyWB9DbjcqJCAHT7g')" }}>
<div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Deal -20%</div>
<button className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1 justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Ryokan Kumo</h4>
<p className="text-sm text-text-muted flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> Northern Kyoto • 5km from center
                                            </p>
</div>
<div className="flex flex-col items-end">
<div className="flex text-yellow-500 text-sm">
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="text-xs text-text-muted mt-1">4.8 (56 reviews)</span>
</div>
</div>
<div className="flex gap-2 mt-4 flex-wrap">
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Authentic</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Onsen</span>
<span className="px-2 py-1 bg-background-dark rounded text-xs text-text-muted border border-border-color">Dinner Included</span>
</div>
</div>
<div className="flex items-end justify-between mt-4 sm:mt-0 pt-4 border-t border-border-color sm:border-t-0 sm:pt-0">
<div className="text-xs text-text-muted font-medium flex items-center gap-1">
<span className="line-through decoration-red-500">$500</span> <span className="text-red-500">Save $100</span>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-bold text-white">$400</span>
<span className="text-xs text-text-muted">Includes taxes &amp; fees</span>
</div>
</div>
</div>
</div>
</div>
{/* Map Placeholder */}
<div className="w-full xl:w-[400px] shrink-0 hidden xl:block relative h-[calc(100vh-250px)] sticky top-24">
<div className="w-full h-full rounded-xl overflow-hidden relative shadow-lg border border-border-color">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Map view of Kyoto city showing streets and landmarks" data-location="Kyoto Map View" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLjxD74aD-UYR1c_3fppC_-FyDCg_dRjNF8wwOcU1SJSuCgvkWfeKhBvp8uNl0z6YoJdTwESAz08FtNilT5pSC9Rs-sf-6vMRN2mXkVUb9mltqShF71VT8-N85BE6pO7_Gc6DfhUMuwKovxkoSZPHxa6V-5iP4aT8FOVtDF3kDWLhjgrI_Sp9DtLBlWU4sDAUXkjnsdJwUSC85Yv0dFAo_zmltiLauWcFE_h1r5i9gWzpl6pgTcy6N2kP_IQalgxzhZSrrf7NFRA')", opacity: "0.6" }}></div>
<div className="absolute inset-0 bg-[#242f3e]/80"></div> {/* Map overlay style */}
{/* Fake Map Pins */}
<div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-lg group-hover:scale-110 transition-transform">$850</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary mx-auto"></div>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
<div className="bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg group-hover:scale-110 transition-transform">$620</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white mx-auto"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="bg-surface-dark text-white border border-border-color text-xs font-bold px-2 py-1 rounded shadow-lg group-hover:scale-110 transition-transform">$345</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-surface-dark mx-auto"></div>
</div>
<div className="absolute bottom-4 left-4 bg-surface-dark p-2 rounded-lg shadow-lg">
<button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded flex items-center gap-2 hover:bg-primary-dark transition-colors">
<span className="material-symbols-outlined text-lg">map</span> Show Map
                                </button>
</div>
</div>
</div>
</div>
{/* Footer CTA */}
<div className="mt-12 py-10 border-t border-border-color text-center">
<h3 className="text-xl font-bold text-white mb-2">Can't decide where to stay?</h3>
<p className="text-text-muted mb-6">Let our premium concierge service help you find the perfect room.</p>
<button className="bg-surface-dark border border-border-color hover:border-primary text-white font-bold py-3 px-8 rounded-lg transition-colors">
                        Contact Concierge
                     </button>
</div>
</div>
</main>
</div>
    </div>
  );
}
