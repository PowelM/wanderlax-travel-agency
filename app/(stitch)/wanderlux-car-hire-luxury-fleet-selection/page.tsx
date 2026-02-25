"use client";
 
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function WanderluxCarHireLuxuryFleetSelectionPage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
{/* Top Navigation */}
<header className="sticky top-0 z-40 w-full border-b border-surface-border bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/60">
<div className="flex h-16 items-center justify-between px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
<div className="flex items-center gap-4">
<div className="size-8 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h2 className="text-white text-xl font-bold leading-tight tracking-tight">Wanderlux</h2>
</div>
<nav className="hidden md:flex flex-1 justify-center gap-8">
<a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Destinations</a>
<a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Hotels</a>
<a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Flights</a>
<a className="text-white font-semibold text-sm" href="#">Car Hire</a>
<a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Experiences</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-slate-300 hover:text-white text-sm font-medium px-3 py-2">
                    Sign In
                </button>
<button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold hover:bg-red-700 transition-colors">
                    Register
                </button>
</div>
</div>
</header>
<main className="flex-1 flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 gap-10">
{/* Hero Section */}
<div className="relative w-full rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center group" data-alt="Dark luxury sports car on a winding mountain road at dusk">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJCUDllXamFeGSw3rHiME_74UUPsSHsrXgg1ptNXk0cFGU8mOgSOun9eBJvG_lX3jFJ60wWIRYHfNB0pCFT-BB8M12HQZS70b4q0rj7DbjgD1ftUSCtj9I7LgAzGlBB0mrs2Cg3atwPUWDK1WteTz1gl4pN755JR4tWMMC0tauKZ2AjwUbE6G3nOom79BBR091JT8sScAi7FwBSsMDWj6dDWT1U3c7VHz5INU_ga4Cq98659pfw79Sni9kydDL5G6byagSxxCjDg')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
<div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center gap-6 mt-20">
<span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                    Premium Fleet Available
                </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-xl">
                    Drive in Style, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Anywhere.</span>
</h1>
<p className="text-lg text-slate-200 max-w-xl font-light leading-relaxed drop-shadow-md">
                    Experience the ultimate freedom of the road with our curated collection of high-performance and luxury vehicles.
                </p>
<button className="mt-4 flex items-center gap-2 rounded-full bg-white text-background-dark px-8 py-4 text-base font-bold hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    View All Vehicles
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
{/* Search Bar Section */}
<div className="relative z-20 -mt-24 mx-4 md:mx-10 bg-surface-dark border border-surface-border p-6 rounded-xl shadow-2xl backdrop-blur-sm">
<h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">search</span>
                Find Your Perfect Ride
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pickup Location</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">location_on</span>
<input className="w-full bg-background-dark border border-surface-border rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-primary focus:border-primary transition-colors" placeholder="City, Airport, or Address" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Drop-off Location</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">flag</span>
<input className="w-full bg-background-dark border border-surface-border rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-primary focus:border-primary transition-colors" placeholder="Return to same location" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pickup Date</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">calendar_today</span>
<input className="w-full bg-background-dark border border-surface-border rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-primary focus:border-primary transition-colors [color-scheme:dark]" type="date"/>
</div>
</div>
<div className="space-y-2 flex items-end">
<button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        Search Fleet
                    </button>
</div>
</div>
</div>
{/* Features Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-surface-border">
<div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-surface-border/50">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<h3 className="font-bold text-white">Full Insurance</h3>
<p className="text-sm text-slate-400">Comprehensive coverage included</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-surface-border/50">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">explore</span>
</div>
<div>
<h3 className="font-bold text-white">GPS Navigation</h3>
<p className="text-sm text-slate-400">Never get lost on your journey</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-surface-dark/50 border border-surface-border/50">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<h3 className="font-bold text-white">24/7 Support</h3>
<p className="text-sm text-slate-400">Concierge assistance anytime</p>
</div>
</div>
</div>
{/* Fleet Grid */}
<section className="py-4">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-bold text-white mb-2">Exclusive Selection</h2>
<p className="text-slate-400">Choose from our top-tier luxury vehicles.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="px-4 py-2 rounded-lg bg-surface-dark border border-surface-border text-white hover:border-primary transition-colors text-sm font-medium">Sports</button>
<button className="px-4 py-2 rounded-lg bg-surface-dark border border-surface-border text-slate-400 hover:text-white hover:border-primary transition-colors text-sm font-medium">SUV</button>
<button className="px-4 py-2 rounded-lg bg-surface-dark border border-surface-border text-slate-400 hover:text-white hover:border-primary transition-colors text-sm font-medium">Sedan</button>
<button className="px-4 py-2 rounded-lg bg-surface-dark border border-surface-border text-slate-400 hover:text-white hover:border-primary transition-colors text-sm font-medium">Convertible</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Car Card 1 */}
<div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
<div className="relative h-56 overflow-hidden">
<img alt="Dark grey Porsche 911 side profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Dark grey Porsche 911 side profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ3pJ8ddFP2PlAwV7_05qyRJLHIs-8RXOE5HgF_69Swt-RmcjRLduAJiNXMqCNK0pZ2ymkaRRofxEovK4lCfCxfwuzy3v-BuUrk00fNy1SQATjPN6HZnXXEG0y2ttK2V_5JNUTGqgofAxLcN_kPMM-mXWPHxeRqPNYu3-PFuSH_Nt28qvMiJEbPxW0sjknk1bHP52s8aaEtIy9zuIsBVwhQnwkfLfhlfkG2y1UCa0oBC11GvUvT5qvT5U_abWocn1MEnezLkgIOg"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">Sports</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-white mb-1">Porsche 911 Carrera</h3>
<p className="text-slate-400 text-sm mb-4">The definitive sports car icon.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">airline_seat_recline_extra</span>
                                2 Seats
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Automatic
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">speed</span>
                                3.2s 0-100
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">local_gas_station</span>
                                Petrol
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$450</span>
<span className="text-slate-500 text-sm">/ day</span>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Book Now
                            </button>
</div>
</div>
</div>
{/* Car Card 2 */}
<div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
<div className="relative h-56 overflow-hidden">
<img alt="Black Mercedes G-Wagon front view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Black Mercedes G-Wagon front view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPMPY2i-O7Zb0utGFgC2qyVpUE4dzMNS_5ny8I4HXmmtABZ5zxbHLpBGhCe14OgfNwqs68uXmRu9ZSmiTUUOo15nn7xJdrVJOfmH_7Tve9bSb-dOs_Pw32YTXqlkgpv17bSa4LBqz-B759O3LC158xya3mXbAPFjtkK_89Ao09KDBxxohYjRxX-VWL3nurAH6cBE10HwjXq8aLINfSz-TsS1y9FkvnN22SZ49z1D04tp4oY-zlI8l5kxMDe70T7NmBbezOAc9UxA"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">SUV</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-white mb-1">Mercedes-AMG G 63</h3>
<p className="text-slate-400 text-sm mb-4">Commanding presence and power.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">airline_seat_recline_extra</span>
                                5 Seats
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Automatic
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">luggage</span>
                                4 Bags
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">local_gas_station</span>
                                Petrol
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$550</span>
<span className="text-slate-500 text-sm">/ day</span>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Book Now
                            </button>
</div>
</div>
</div>
{/* Car Card 3 */}
<div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
<div className="relative h-56 overflow-hidden">
<img alt="White Rolls Royce Phantom front grille detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="White Rolls Royce Phantom front grille detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFjRNIKGF2O918KNR3GHX0Un7X5xV8Zlp2RZirAtOwpRRWEl5lNdxZewfkGDAhKGyydNL72b0-uVqokRdV7KdkvaWWDiwOqMx6azU9OMozrElEfnkafcIDU3kICXKK8EABfLmZS7_EvMZW-I-ywaeOgj77nrLahb5Dl66-wVA9QDXFEMvA4avIZKS1qle3zyB_CWuY6BSAT8hpE0O2pE4bPEUa4pWfr-oVcynL5ZyAVeLLvgmLkUbLQcRWp7Q0YEWmOi8gAMMI9w"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">Luxury</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-white mb-1">Rolls-Royce Phantom</h3>
<p className="text-slate-400 text-sm mb-4">The pinnacle of automotive luxury.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">airline_seat_recline_extra</span>
                                4 Seats
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Automatic
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">star</span>
                                Chauffeur
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">local_gas_station</span>
                                Petrol
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$1,200</span>
<span className="text-slate-500 text-sm">/ day</span>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Book Now
                            </button>
</div>
</div>
</div>
{/* Car Card 4 */}
<div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
<div className="relative h-56 overflow-hidden">
<img alt="Red Tesla Model S Plaid driving fast" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Red Tesla Model S Plaid driving fast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTNwnOxXuwUaOKk03ygvq7i0UvYCHemF6RE1Py39P50UqPNljow7sZwoBdXQqHitZ_mQx8yO0fNVsIvvGsiqlhnMU0-uWZKkbZCvBvKbgtomd1x-yyqFzMvCVLz0ggy5BLxLzL6pfohv7cjySkaBr_lJXFQUbIw8xpndvVuBkGopDLqANPhreGkDLvRCxLK54tmyiEO9mScfdlmcjN5MD1MAvIidDOEBZpXOYT3P2_tq3VAjcsvLEKakZV7hvQRRwkHmPL5K7QPQ"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">Electric</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-white mb-1">Tesla Model S Plaid</h3>
<p className="text-slate-400 text-sm mb-4">Future performance, available today.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">airline_seat_recline_extra</span>
                                5 Seats
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Automatic
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">bolt</span>
                                Electric
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">speed</span>
                                1.9s 0-100
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$380</span>
<span className="text-slate-500 text-sm">/ day</span>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Book Now
                            </button>
</div>
</div>
</div>
{/* Car Card 5 */}
<div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
<div className="relative h-56 overflow-hidden">
<img alt="Blue BMW M8 Competition convertible" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Blue BMW M8 Competition convertible" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0o46hxcr2VNH0zNvH3Fp9vkroeHH8CBpsQIwS11hnpKXsU-Kvj3YHA7HLP45QD8hiosktaOI7byBo0cUfJ1ENCVrqOIHWvEkZWpPAylJiZTPzoYpyyk-Y_QMxA2hGYgwa0SsBCQ8qvUP77QLbMjI0IAx6VTPu69_08WD0C3C6Z0IaKaCUlDLretymwDXpJfhaNVmndsig52MzvZUG03R9NV-Mq39MrLW8r6Vei1N-lmd3ZBBZGVDIYTbULtA3KvIA50V4HBG_DQ"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">Convertible</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-white mb-1">BMW M8 Competition</h3>
<p className="text-slate-400 text-sm mb-4">Open-top luxury grand tourer.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">airline_seat_recline_extra</span>
                                4 Seats
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Automatic
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">sunny</span>
                                Top Down
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">local_gas_station</span>
                                Petrol
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$420</span>
<span className="text-slate-500 text-sm">/ day</span>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Book Now
                            </button>
</div>
</div>
</div>
{/* Car Card 6 */}
<div className="group bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
<div className="relative h-56 overflow-hidden">
<img alt="Black Range Rover Vogue dynamic shot" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Black Range Rover Vogue dynamic shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXn6f3UfObTvx7ARuwgTZRgrZ2zM5i7y5V4gBTRFStY6Zj-MtnjbjZ2Ki6kUkDH-kORSKp8AmBOZhSLNzYvtQ9Nl1CKxrL_FcLhz5uTd07r2BmdNpdM9mtHtEi2plRax6slq20-1RenrV6aKiSnQ2rqbFn9y8Z2wKbaQ8aDMo37f-VLRU8gqq_H3NBli9nW92V2hMip1BuYyj2WLc49b4tO01IyZdDMEftLsnjn5YeAQSn3YhJAM7H1QmDLCHR972VFDFjP4GVsw"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">SUV</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-white mb-1">Range Rover Autobiography</h3>
<p className="text-slate-400 text-sm mb-4">Unmatched refinement and capability.</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">airline_seat_recline_extra</span>
                                5 Seats
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">settings</span>
                                Automatic
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">terrain</span>
                                4x4
                            </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">local_gas_station</span>
                                Diesel
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">$480</span>
<span className="text-slate-500 text-sm">/ day</span>
</div>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                                Book Now
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="text-slate-300 hover:text-primary font-medium text-sm flex items-center gap-2 border-b border-transparent hover:border-primary pb-1 transition-all">
                    Show more vehicles
                    <span className="material-symbols-outlined text-base">expand_more</span>
</button>
</div>
</section>
{/* How It Works Section */}
<section className="py-12 border-t border-surface-border">
<h2 className="text-3xl font-bold text-white mb-12 text-center">How it Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
{/* Connecting Line (hidden on mobile) */}
<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
<div className="relative flex flex-col items-center text-center z-10">
<div className="size-16 rounded-2xl bg-surface-dark border border-surface-border text-primary flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<span className="material-symbols-outlined text-3xl">calendar_month</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">1. Choose Your Dates</h3>
<p className="text-slate-400 text-sm max-w-xs">Select your pickup and return dates. We offer flexible booking options.</p>
</div>
<div className="relative flex flex-col items-center text-center z-10">
<div className="size-16 rounded-2xl bg-surface-dark border border-surface-border text-primary flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<span className="material-symbols-outlined text-3xl">directions_car</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">2. Select Your Vehicle</h3>
<p className="text-slate-400 text-sm max-w-xs">Browse our premium fleet and choose the car that matches your style.</p>
</div>
<div className="relative flex flex-col items-center text-center z-10">
<div className="size-16 rounded-2xl bg-surface-dark border border-surface-border text-primary flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<span className="material-symbols-outlined text-3xl">key</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">3. Enjoy the Ride</h3>
<p className="text-slate-400 text-sm max-w-xs">Pick up your keys or get it delivered. The road is yours to conquer.</p>
</div>
</div>
</section>
</main>
{/* Footer Simple */}
<footer className="bg-surface-dark border-t border-surface-border py-10 mt-10">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">diamond</span>
<span className="text-white font-bold text-lg">Wanderlux</span>
</div>
<p className="text-slate-500 text-sm">© 2024 Wanderlux Travel. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Instagram</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm1.476 13.913a4.004 4.004 0 01-1.272.222 4 4 0 01-4-4 4 4 0 014-4 4.004 4.004 0 011.272.222 4.004 4.004 0 011.476 1.049 3.996 3.996 0 011.049 1.476 4.004 4.004 0 01.222 1.253 4 4 0 01-4 4zm-1.272-6.19a2.204 2.204 0 00-1.558.647 2.204 2.204 0 00-.647 1.558 2.2 2.2 0 002.205 2.205 2.204 2.204 0 001.558-.647 2.204 2.204 0 00.647-1.558 2.204 2.204 0 00-2.205-2.205zm5.328-3.08a1.2 1.2 0 011.2 1.2 1.2 1.2 0 01-1.2 1.2 1.2 1.2 0 01-1.2-1.2 1.2 1.2 0 011.2-1.2z" fillRule="evenodd"></path></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
</div>
</div>
</footer>
    </div>
  );
}
