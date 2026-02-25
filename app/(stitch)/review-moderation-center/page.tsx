"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function ReviewModerationCenterPage() {
  return (
    <div className="stitch-screen">
      {/* Sidebar */}
<aside className="w-64 flex-shrink-0 border-r border-border-dark bg-card-dark flex flex-col justify-between h-screen fixed left-0 top-0 z-50">
<div className="flex flex-col gap-4 p-4">
{/* Brand */}
<div className="flex items-center gap-3 px-2 py-2 mb-4">
<div className="bg-gradient-to-br from-primary to-rose-900 h-10 w-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-white text-2xl">flight_takeoff</span>
</div>
<div className="flex flex-col">
<h1 className="text-white text-lg font-bold leading-none tracking-tight">Wanderlux</h1>
<p className="text-text-secondary text-xs font-medium">Admin Console</p>
</div>
</div>
{/* Navigation */}
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">calendar_month</span>
<span className="text-sm font-medium">Bookings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20" href="#">
<span className="material-symbols-outlined text-xl fill-1">stars</span>
<span className="text-sm font-bold">Reviews</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">public</span>
<span className="text-sm font-medium">Services</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">people</span>
<span className="text-sm font-medium">Customers</span>
</a>
</nav>
{/* Filters Section in Sidebar */}
<div className="mt-6 pt-6 border-t border-border-dark">
<p className="px-3 text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Quick Filters</p>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 px-3 py-1.5 cursor-pointer group">
<input className="rounded border-border-dark bg-background-dark text-primary focus:ring-primary/50 focus:ring-offset-0 focus:ring-offset-transparent w-4 h-4" type="checkbox"/>
<span className="text-sm text-text-secondary group-hover:text-white transition-colors">5 Star Only</span>
</label>
<label className="flex items-center gap-3 px-3 py-1.5 cursor-pointer group">
<input className="rounded border-border-dark bg-background-dark text-primary focus:ring-primary/50 focus:ring-offset-0 focus:ring-offset-transparent w-4 h-4" type="checkbox"/>
<span className="text-sm text-text-secondary group-hover:text-white transition-colors">Pending Review</span>
</label>
<label className="flex items-center gap-3 px-3 py-1.5 cursor-pointer group">
<input className="rounded border-border-dark bg-background-dark text-primary focus:ring-primary/50 focus:ring-offset-0 focus:ring-offset-transparent w-4 h-4" type="checkbox"/>
<span className="text-sm text-text-secondary group-hover:text-white transition-colors">Flagged Content</span>
</label>
</div>
</div>
</div>
{/* User Profile */}
<div className="p-4 border-t border-border-dark">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
<div className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-border-dark" data-alt="Admin user profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1UODo_T_UHZodknAAw1uI3P_CelWZE8BqHpaFzFDd1aGu0qGBjhCZFgtVw2Ub_ZNhmMNDZ7B7IyhSPmIyfw15gCwn-KgeocsW28WMjGuZs76QI-0pSTJlHwde2AcoIRhb43WlHtPm6vq4skOdYqsT3i4RIxky05sOYRmrAbJItwRIVN7xlaAUeEEKYlIaCg4m22SrUBTKMp6weopZjrYyU4lZAHGgbng5rFv-POiJ3KxavB8ynPr7uezrP2Meqiym-JB4edBmsg')" }}></div>
<div className="flex flex-col overflow-hidden">
<p className="text-sm font-medium text-white truncate">Marcus Chen</p>
<p className="text-xs text-text-secondary truncate">Super Admin</p>
</div>
<span className="material-symbols-outlined text-text-secondary ml-auto text-lg">settings</span>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-background-dark">
{/* Header */}
<header className="h-16 flex items-center justify-between px-8 border-b border-border-dark bg-background-dark/80 backdrop-blur-md sticky top-0 z-40">
<h2 className="text-xl font-bold text-white tracking-tight">Review Moderation</h2>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg">search</span>
<input className="bg-card-dark border border-border-dark rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 placeholder-text-secondary transition-all" placeholder="Search reviews..." type="text"/>
</div>
<button className="relative p-2 text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background-dark"></span>
</button>
</div>
</header>
{/* Scrollable Content */}
<div className="flex-1 overflow-y-auto custom-scrollbar p-8">
<div className="max-w-7xl mx-auto flex flex-col gap-8">
{/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{/* Stat 1 */}
<div className="bg-card-dark border border-border-dark rounded-xl p-5 hover:border-primary/30 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-500/10 rounded-lg">
<span className="material-symbols-outlined text-emerald-500">star</span>
</div>
<span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                +0.2% <span className="material-symbols-outlined text-sm ml-0.5">trending_up</span>
</span>
</div>
<p className="text-text-secondary text-sm font-medium">Average Rating</p>
<h3 className="text-3xl font-bold text-white mt-1">4.8</h3>
</div>
{/* Stat 2 */}
<div className="bg-card-dark border border-border-dark rounded-xl p-5 hover:border-primary/30 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg">
<span className="material-symbols-outlined text-blue-500">reviews</span>
</div>
<span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                +12% <span className="material-symbols-outlined text-sm ml-0.5">trending_up</span>
</span>
</div>
<p className="text-text-secondary text-sm font-medium">Total Reviews</p>
<h3 className="text-3xl font-bold text-white mt-1">1,245</h3>
</div>
{/* Stat 3 */}
<div className="bg-card-dark border border-border-dark rounded-xl p-5 hover:border-primary/30 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-500/10 rounded-lg">
<span className="material-symbols-outlined text-amber-500">pending_actions</span>
</div>
<span className="flex items-center text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                +5 New
                            </span>
</div>
<p className="text-text-secondary text-sm font-medium">Pending Approval</p>
<h3 className="text-3xl font-bold text-white mt-1">34</h3>
</div>
{/* Stat 4 */}
<div className="bg-card-dark border border-border-dark rounded-xl p-5 hover:border-primary/30 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">flag</span>
</div>
<span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                -2.5% <span className="material-symbols-outlined text-sm ml-0.5">trending_down</span>
</span>
</div>
<p className="text-text-secondary text-sm font-medium">Flagged Reviews</p>
<h3 className="text-3xl font-bold text-white mt-1">12</h3>
</div>
</div>
{/* Filters Bar */}
<div className="flex flex-wrap items-center justify-between gap-4 bg-card-dark border border-border-dark p-2 rounded-xl">
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">All Reviews</button>
<button className="px-4 py-2 text-text-secondary hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors">5 Stars</button>
<button className="px-4 py-2 text-text-secondary hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors">Latest</button>
<div className="h-6 w-px bg-border-dark mx-2"></div>
<button className="flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-lg">filter_list</span>
                            Filter
                        </button>
</div>
<div className="flex items-center gap-3 pr-2">
<span className="text-xs text-text-secondary uppercase font-bold tracking-wider">Sort By:</span>
<select className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer border-none p-0 pr-6">
<option className="bg-card-dark">Date: Newest First</option>
<option className="bg-card-dark">Rating: High to Low</option>
<option className="bg-card-dark">Rating: Low to High</option>
</select>
</div>
</div>
{/* Reviews Table */}
<div className="bg-card-dark border border-border-dark rounded-xl overflow-hidden shadow-xl shadow-black/20">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border-dark bg-white/5">
<th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-wider w-[20%]">Customer / Service</th>
<th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-wider w-[15%]">Rating</th>
<th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-wider w-[35%]">Review Content</th>
<th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-wider w-[10%]">Date</th>
<th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-wider w-[20%] text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border-dark">
{/* Row 1 */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 px-6 align-top">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-cover bg-center shrink-0" data-alt="Alice M profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbJyt0v24-kCnFstMGIVwoopfhCyEOSGjS1HA3G1WerSqE3v-e0Haz4V8O8TAuZb9Nzz_aEq4bbZfJ4HOdr7KMbW-lcGwpEMK0OQM0iDQ4WrMdd-kOGl3Q78fGY_lW4pJOUNTdHqHiFXQssj2ywXWODEiZ6CGOfF_TCK8klpr9-0sxOV4ChOuCkDU3z_udbfx6mUI1ex-x5k_2nQtW9BbPzX2uA4TP7ZIFxsmQm7BHdX-bWjVZikRnwsmNTEB07s7mkpRy_XNkWA')" }}></div>
<div>
<p className="text-white font-medium text-sm">Alice Montgomery</p>
<p className="text-text-secondary text-xs mt-0.5">Safari in Kenya</p>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-bold text-emerald-500 uppercase">Verified</span>
</div>
</div>
</td>
<td className="py-4 px-6 align-top">
<div className="flex text-primary">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
</div>
<p className="text-xs text-text-secondary mt-1 font-mono">5.0 / 5.0</p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-white text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                            Absolutely incredible experience! The guide was knowledgeable and we saw the Big Five on our first day. The luxury tent accommodation exceeded all expectations. Highly recommend Wanderlux for anyone looking for a seamless safari adventure.
                                        </p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-text-secondary text-sm">Oct 24, 2023</p>
<p className="text-xs text-text-secondary opacity-60 mt-0.5">10:42 AM</p>
</td>
<td className="py-4 px-6 align-top">
<div className="flex flex-col gap-2 items-end">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg text-emerald-500 hover:bg-emerald-500/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-xl">check_circle</span>
</button>
<button className="p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors" title="Hide">
<span className="material-symbols-outlined text-xl">visibility_off</span>
</button>
<button className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors" title="Flag">
<span className="material-symbols-outlined text-xl">flag</span>
</button>
</div>
<label className="flex items-center gap-2 cursor-pointer select-none mt-1">
<span className="text-xs font-medium text-text-secondary group-hover/toggle:text-white">Featured</span>
<div className="relative inline-flex items-center cursor-pointer group/toggle">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="group hover:bg-white/5 transition-colors bg-white/[0.02]">
<td className="py-4 px-6 align-top">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-cover bg-center shrink-0" data-alt="Bob D profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJMUYeXv0K-QL4SaTFQeJnAjUOeIm5EVYR13eygl7Nm8zRY2abUJzUmIlvH4Q8EOL7_qsF-Y6gPmDSlO7Qmcg_6KRgKY4Z37nYnUqqbCGc-lknOMehxss5wbADEJq0ktPzC_pNjDOoNN2e-muUHO8HQHAiBv_yFIAPBapGGLABdK17gnXz-DSOf77XjKal7yHvWOZ0TIHKxa2IWx9EB2fCrtOKj1aQJWNoDV_o_-XJm_jnn9gMxZZD1kctumamjhqjAqWVGEyOGQ')" }}></div>
<div>
<p className="text-white font-medium text-sm">Bob Dylan</p>
<p className="text-text-secondary text-xs mt-0.5">Bali Wellness Retreat</p>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded border border-amber-500/20 bg-amber-500/10 text-[10px] font-bold text-amber-500 uppercase">Pending</span>
</div>
</div>
</td>
<td className="py-4 px-6 align-top">
<div className="flex text-primary">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] text-zinc-700">star</span>
</div>
<p className="text-xs text-text-secondary mt-1 font-mono">4.0 / 5.0</p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-white text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                            Very relaxing environment and the yoga sessions were top notch. However, the food options were a bit limited for vegans. Would still recommend for the atmosphere alone.
                                        </p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-text-secondary text-sm">Oct 23, 2023</p>
<p className="text-xs text-text-secondary opacity-60 mt-0.5">09:15 AM</p>
</td>
<td className="py-4 px-6 align-top">
<div className="flex flex-col gap-2 items-end">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg text-emerald-500 hover:bg-emerald-500/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-xl">check_circle</span>
</button>
<button className="p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors" title="Hide">
<span className="material-symbols-outlined text-xl">visibility_off</span>
</button>
<button className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors" title="Flag">
<span className="material-symbols-outlined text-xl">flag</span>
</button>
</div>
<label className="flex items-center gap-2 cursor-pointer select-none mt-1 opacity-50 hover:opacity-100 transition-opacity">
<span className="text-xs font-medium text-text-secondary">Featured</span>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="group hover:bg-white/5 transition-colors border-l-2 border-l-primary bg-primary/5">
<td className="py-4 px-6 align-top pl-[22px]"> {/* Adjusted padding for border */}
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                                                CP
                                            </div>
<div>
<p className="text-white font-medium text-sm">Charlie Parker</p>
<p className="text-text-secondary text-xs mt-0.5">Paris City Tour</p>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded border border-primary/20 bg-primary/10 text-[10px] font-bold text-primary uppercase">Flagged</span>
</div>
</div>
</td>
<td className="py-4 px-6 align-top">
<div className="flex text-primary">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] text-zinc-700">star</span>
<span className="material-symbols-outlined text-[18px] text-zinc-700">star</span>
<span className="material-symbols-outlined text-[18px] text-zinc-700">star</span>
<span className="material-symbols-outlined text-[18px] text-zinc-700">star</span>
</div>
<p className="text-xs text-text-secondary mt-1 font-mono">1.0 / 5.0</p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-white text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                            Terrible service. The guide was 45 minutes late and didn't apologize. It felt like a scam. I demand a refund immediately! This is unacceptable behavior for a "luxury" company.
                                        </p>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-900/30 text-red-400 border border-red-900/50">Profanity Detected</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-900/30 text-red-400 border border-red-900/50">Low Rating</span>
</div>
</td>
<td className="py-4 px-6 align-top">
<p className="text-text-secondary text-sm">Oct 22, 2023</p>
<p className="text-xs text-text-secondary opacity-60 mt-0.5">02:20 PM</p>
</td>
<td className="py-4 px-6 align-top">
<div className="flex flex-col gap-2 items-end">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg text-emerald-500 hover:bg-emerald-500/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-xl">check_circle</span>
</button>
<button className="p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors" title="Hide">
<span className="material-symbols-outlined text-xl">visibility_off</span>
</button>
<button className="p-1.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover transition-colors" title="Resolve Issue">
<span className="material-symbols-outlined text-xl">gavel</span>
</button>
</div>
</div>
</td>
</tr>
{/* Row 4 */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 px-6 align-top">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-cover bg-center shrink-0" data-alt="Diana P profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAukPFtFzLIfHQ2cljNzdmhr_wmVUeN0rdFngN-aSeAzYeKAezYWwcuUPubWlkSwmL-QTt0YsRlplRWz7dnBftBQ_hV39H9TP8QjFgs0Wl1craEHQTCAl5lUMK81TZV8At4LhEjKgTcrpGqOCU-VlgZ6tKlOmlSRkrZt4OKHA0akzOalyee-AxvBVKlKK9df_xLcVDVfUkOlZhW-qEZ0Zups9_XPd-6on5bxwH3gLNPIya2kY3b6tV-BWg-hJfIKZAt2C_ujdVxGw')" }}></div>
<div>
<p className="text-white font-medium text-sm">Diana Prince</p>
<p className="text-text-secondary text-xs mt-0.5">Tokyo Food Walk</p>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-bold text-emerald-500 uppercase">Verified</span>
</div>
</div>
</td>
<td className="py-4 px-6 align-top">
<div className="flex text-primary">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
</div>
<p className="text-xs text-text-secondary mt-1 font-mono">5.0 / 5.0</p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-white text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                            Best food tour ever! Our guide Kenji took us to hidden gems we would have never found on our own. The sushi was divine.
                                        </p>
</td>
<td className="py-4 px-6 align-top">
<p className="text-text-secondary text-sm">Oct 21, 2023</p>
<p className="text-xs text-text-secondary opacity-60 mt-0.5">06:55 PM</p>
</td>
<td className="py-4 px-6 align-top">
<div className="flex flex-col gap-2 items-end">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg text-emerald-500 hover:bg-emerald-500/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-xl">check_circle</span>
</button>
<button className="p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors" title="Hide">
<span className="material-symbols-outlined text-xl">visibility_off</span>
</button>
<button className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors" title="Flag">
<span className="material-symbols-outlined text-xl">flag</span>
</button>
</div>
<label className="flex items-center gap-2 cursor-pointer select-none mt-1">
<span className="text-xs font-medium text-text-secondary group-hover/toggle:text-white">Featured</span>
<div className="relative inline-flex items-center cursor-pointer group/toggle">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="bg-card-dark border-t border-border-dark px-6 py-4 flex items-center justify-between">
<p className="text-sm text-text-secondary">
                            Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">4</span> of <span className="font-medium text-white">124</span> results
                        </p>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-border-dark text-text-secondary hover:bg-white/5 hover:text-white disabled:opacity-50 text-sm font-medium transition-colors" disabled>Previous</button>
<button className="px-3 py-1.5 rounded-lg border border-border-dark text-text-secondary hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">Next</button>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
