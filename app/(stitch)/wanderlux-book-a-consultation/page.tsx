"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function WanderluxBookAConsultationPage() {
  return (
    <div className="stitch-screen">
      {/* Top Navigation */}
<header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#392828] bg-background-light/95 dark:bg-[#181111]/95 backdrop-blur-md px-6 lg:px-10 py-4 shadow-sm">
<div className="flex items-center gap-4 text-slate-900 dark:text-white">
<div className="size-8 text-primary">
<span className="material-symbols-outlined text-3xl">flight_takeoff</span>
</div>
<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Wanderlux</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-8">
<nav className="flex items-center gap-9">
<a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Destinations</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Experiences</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Journal</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">About Us</a>
</nav>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-red-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
<span className="truncate">Log In</span>
</button>
</div>
<button className="md:hidden text-slate-900 dark:text-white">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
<main className="flex-grow flex flex-col">
{/* Hero / Split Section */}
<section className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
{/* Left Side: Booking Form */}
<div className="lg:col-span-5 flex flex-col justify-center">
<div className="mb-8">
<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">Book Your Journey</span>
<h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
                        Plan Your <br className="hidden md:block"/> Private Consultation
                    </h1>
<p className="text-slate-500 dark:text-[#b99d9d] text-lg font-normal leading-relaxed">
                        Let's curate your next unforgettable escape. Tell us a little about yourself, and choose a time to speak with a dedicated travel designer.
                    </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</span>
<input className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 transition-all" placeholder="Jane" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</span>
<input className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 transition-all" placeholder="Doe" type="text"/>
</label>
</div>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</span>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 dark:text-[#b99d9d]">mail</span>
<input className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-10 pr-4 transition-all" placeholder="jane@example.com" type="email"/>
</div>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Consultation Type</span>
<div className="relative">
<select className="form-select w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-4 pr-10 transition-all appearance-none cursor-pointer">
<option disabled selected value="">Select a service</option>
<option value="honeymoon">Honeymoon Planning</option>
<option value="family">Family Expedition</option>
<option value="private">Private Jet Charter</option>
<option value="corporate">Corporate Retreat</option>
</select>
</div>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Tell us about your dream trip (Optional)</span>
<textarea className="form-textarea w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary min-h-[100px] p-4 resize-y transition-all" placeholder="We are looking for a 2-week trip to Japan in Autumn..."></textarea>
</label>
<button className="w-full mt-4 h-14 bg-primary hover:bg-red-700 text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" type="submit">
                        Confirm Booking
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<p className="text-xs text-center text-slate-400 dark:text-[#b99d9d] mt-2">
                        By booking, you agree to our <a className="underline hover:text-primary" href="#">Terms of Service</a>.
                    </p>
</form>
</div>
{/* Right Side: Calendar & Slots */}
<div className="lg:col-span-7 flex flex-col">
<div className="bg-white dark:bg-[#2d1a1a] border border-slate-200 dark:border-[#392828] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
<div className="p-6 border-b border-slate-100 dark:border-[#392828] flex items-center justify-between">
<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_month</span>
                            October 2023
                        </h3>
<div className="flex items-center gap-2">
<button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-[#392828] text-slate-600 dark:text-slate-300 transition-colors">
<span className="material-symbols-outlined text-lg">chevron_left</span>
</button>
<button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-[#392828] text-slate-600 dark:text-slate-300 transition-colors">
<span className="material-symbols-outlined text-lg">chevron_right</span>
</button>
</div>
</div>
{/* Calendar Grid */}
<div className="p-6">
<div className="grid grid-cols-7 gap-1 text-center mb-4">
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Sun</div>
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Mon</div>
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Tue</div>
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Wed</div>
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Thu</div>
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Fri</div>
<div className="text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">Sat</div>
</div>
<div className="grid grid-cols-7 gap-2 text-sm">
{/* Empty days */}
<div className="aspect-square"></div>
<div className="aspect-square"></div>
{/* Days */}
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-[#392828] disabled opacity-50">1</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-[#392828] disabled opacity-50">2</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-[#392828] disabled opacity-50">3</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">4</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">5</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">6</button>
<button className="aspect-square flex items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/30 font-bold">7</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">8</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">9</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">10</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">11</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">12</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">13</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">14</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">15</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">16</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">17</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">18</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">19</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">20</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">21</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">22</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">23</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">24</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">25</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">26</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">27</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">28</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">29</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">30</button>
<button className="aspect-square flex items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]">31</button>
</div>
</div>
{/* Available Slots */}
<div className="p-6 bg-slate-50 dark:bg-[#221010] flex-1 border-t border-slate-100 dark:border-[#392828]">
<p className="text-sm font-semibold text-slate-500 dark:text-[#b99d9d] uppercase mb-4 tracking-wider">Available Times for Oct 7th</p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#2d1a1a] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all">
<span className="text-slate-900 dark:text-white font-bold group-hover:text-primary">09:00 AM</span>
<span className="text-[10px] text-slate-500 dark:text-[#b99d9d]">EST</span>
</button>
<button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#2d1a1a] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all">
<span className="text-slate-900 dark:text-white font-bold group-hover:text-primary">10:30 AM</span>
<span className="text-[10px] text-slate-500 dark:text-[#b99d9d]">EST</span>
</button>
<button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-primary bg-primary text-white shadow-lg shadow-primary/20 transition-all scale-[1.02]">
<span className="font-bold">01:00 PM</span>
<span className="text-[10px] text-white/80">EST</span>
</button>
<button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#2d1a1a] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all">
<span className="text-slate-900 dark:text-white font-bold group-hover:text-primary">02:30 PM</span>
<span className="text-[10px] text-slate-500 dark:text-[#b99d9d]">EST</span>
</button>
<button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#2d1a1a] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all">
<span className="text-slate-900 dark:text-white font-bold group-hover:text-primary">04:00 PM</span>
<span className="text-[10px] text-slate-500 dark:text-[#b99d9d]">EST</span>
</button>
<button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-dashed border-slate-300 dark:border-[#543b3b] bg-transparent opacity-50 cursor-not-allowed">
<span className="text-slate-500 dark:text-[#b99d9d] font-bold decoration-slice line-through">05:30 PM</span>
<span className="text-[10px] text-slate-500 dark:text-[#b99d9d]">Booked</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* Travel Experts Section */}
<section className="w-full bg-slate-100 dark:bg-[#181111] py-16 lg:py-24 border-t border-slate-200 dark:border-[#392828]">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-black mb-3">Our Travel Experts</h2>
<p className="text-slate-500 dark:text-[#b99d9d] max-w-xl text-lg">
                            Hand-picked specialists with decades of experience in crafting bespoke luxury itineraries tailored to your unique tastes.
                        </p>
</div>
<a className="text-primary hover:text-red-400 font-bold flex items-center gap-2 group" href="#">
                        View All Consultants 
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Card 1 */}
<div className="group bg-white dark:bg-[#221010] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-slate-200 dark:border-[#392828]">
<div className="h-64 overflow-hidden relative">
<img alt="Professional woman in business attire smiling in an office setting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of Sarah Jenkins, travel expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFCOIwcj78CZ836yJVvLkl_GL39fV4seR3m_2kowb-nmiCTbMhekRl69l_j4fo6Ejml06UIagk2qhKOJ8y6SSey6eO03wiJIoGgmQCthBw7axm-4AoUU0-SgvZkhlCPkh-vzSoV6XIp2nVoww1DCRe71KFVWd39D0uxMqOcBihLiHxSiForZc4VahJJNccuv9LhmxwViUkj-QrCJaWXbpEMs3HUf4TxIIRwHG1iFX1cS6E7UqQwQgvVaThKSL-pDYHfSAmqOb55g"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#221010] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-bold uppercase tracking-wider text-primary bg-white/10 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Asia &amp; Pacific</p>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Sarah Jenkins</h3>
<p className="text-sm text-slate-500 dark:text-[#b99d9d] mb-4">Senior Expedition Specialist</p>
<div className="flex items-center gap-2 text-xs text-slate-400 dark:text-[#886666]">
<span className="material-symbols-outlined text-base">star</span>
                                4.9 (124 Reviews)
                            </div>
</div>
</div>
{/* Card 2 */}
<div className="group bg-white dark:bg-[#221010] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-slate-200 dark:border-[#392828]">
<div className="h-64 overflow-hidden relative">
<img alt="Professional man in a suit standing confidently" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of Michael Chen, travel expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu2SrCcNFPoLcyUOFO_FrsBlfvp4crcRGrAqB5wPLDRFhwhp5QhvXdTy9aIwmWjzAS6lVldQCycjuHeVE8iLnGtfRI7xLZb8dJklYDux06pRNz6jxV4qBr87YaFyLMizvQCafZkBx3tID4souhhNpDqy4Kt3bYak_qwtsqvBaKCaT_oqQQfaM0dFXkdy3rIZwKZx42p-Csv5TL1Jljxwzfhi0MR5vgaeLvZSYu1Zs_ytmADROYyipNwiG7SQbQzNB5FZCWMGud6Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#221010] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-bold uppercase tracking-wider text-primary bg-white/10 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Europe &amp; UK</p>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Michael Chen</h3>
<p className="text-sm text-slate-500 dark:text-[#b99d9d] mb-4">Luxury Cruise Director</p>
<div className="flex items-center gap-2 text-xs text-slate-400 dark:text-[#886666]">
<span className="material-symbols-outlined text-base">star</span>
                                5.0 (89 Reviews)
                            </div>
</div>
</div>
{/* Card 3 */}
<div className="group bg-white dark:bg-[#221010] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-slate-200 dark:border-[#392828]">
<div className="h-64 overflow-hidden relative">
<img alt="Professional woman with curly hair smiling" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of Elena Rossi, travel expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiAzcEQBRKTp7tgDjQ6qjFAuMr3sy3kl194SCUHC4YpvkqOl1fsA1pU8zMILi-x4teq5YpwqORVJAOIXagBcWeyxsPsAtT83Sc49BYlBh5ROPPTcxhNY-gofcvUCkozNeKn4QyhiIPEw_ZBEK7VxS2TWdQz99FHe8e8XOjjr5kg7F3K3p9o2XyV_G7XT3O0nIEg1_vcKROUrHmY8dEqzTJDxQKf-vP0yx75n9TxQqGbv3jnlHfy0_54QMz4vRifeKwCOcmJFHIJg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#221010] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-bold uppercase tracking-wider text-primary bg-white/10 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Safari &amp; Wildlife</p>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Elena Rossi</h3>
<p className="text-sm text-slate-500 dark:text-[#b99d9d] mb-4">Conservation Travel Lead</p>
<div className="flex items-center gap-2 text-xs text-slate-400 dark:text-[#886666]">
<span className="material-symbols-outlined text-base">star</span>
                                4.9 (201 Reviews)
                            </div>
</div>
</div>
{/* Card 4 */}
<div className="group bg-white dark:bg-[#221010] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-slate-200 dark:border-[#392828]">
<div className="h-64 overflow-hidden relative">
<img alt="Man in casual professional attire outdoors" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of David Okonjo, travel expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-j3g3JBuM2lFSYWRyzWUDi7wrTaCReUkg-9KDv5ggEmdhfnkXPLZSQqbXVq2wKqlRTPtCvBH9a-56HYCD6_3ZSkO5-o59LON9WJV50H3CrGM-PavZPDwlyljVJ3Ybj5Os2mKfdx-3uRFNgxck63puKAdGoS0lO7-5oV7LQzYcnS12MZdGu7-5N6B763NSCjNyqAMlPvm1Cv3B62dCXeoeCkci8If708q8ugGbRkC1gHCM7vqrTFH-6xQuLLR2RFfbd-s58O6xpQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#221010] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-bold uppercase tracking-wider text-primary bg-white/10 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Antarctica</p>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">David Okonjo</h3>
<p className="text-sm text-slate-500 dark:text-[#b99d9d] mb-4">Extreme Expeditions</p>
<div className="flex items-center gap-2 text-xs text-slate-400 dark:text-[#886666]">
<span className="material-symbols-outlined text-base">star</span>
                                5.0 (56 Reviews)
                            </div>
</div>
</div>
</div>
</div>
</section>
</main>
{/* Simple Footer */}
<footer className="bg-background-light dark:bg-background-dark py-8 px-10 border-t border-slate-200 dark:border-[#392828]">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 dark:text-[#b99d9d] text-sm">© 2023 Wanderlux Travel. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-500 dark:text-[#b99d9d] hover:text-primary dark:hover:text-primary text-sm" href="#">Privacy Policy</a>
<a className="text-slate-500 dark:text-[#b99d9d] hover:text-primary dark:hover:text-primary text-sm" href="#">Terms of Use</a>
</div>
</div>
</footer>
    </div>
  );
}
