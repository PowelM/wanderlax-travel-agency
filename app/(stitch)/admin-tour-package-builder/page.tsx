"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function AdminTourPackageBuilderPage() {
  return (
    <div className="stitch-screen">
      {/* Top Navigation */}
<header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#392828] bg-[#181111]/90 backdrop-blur-md px-10 py-3">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-white">
<div className="size-8 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Wanderlux Admin</h2>
</div>
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-400 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-white text-sm font-medium leading-normal border-b-2 border-primary pb-0.5" href="#">Packages</a>
<a className="text-slate-400 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Bookings</a>
<a className="text-slate-400 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Users</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<div className="hidden lg:flex relative w-full max-w-xs">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#ba9c9c]">
<span className="material-symbols-outlined text-[20px]">search</span>
</span>
<input className="w-full bg-[#392828] text-white placeholder-[#ba9c9c] rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary border-none" placeholder="Search packages..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 text-slate-400 hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"></span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#392828]" data-alt="Admin user profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBn8NNAL719y98RubpE4b0NK5RbOmVJaZW9hykHfXASuv0C7_g-XhEGhog_z25s9bdZB5DcRCOXzRiBbhvAoi8n_jCntJEYmcWQ97VZ3cPUS6b2XvctHY2J4clSOGNm0QDwI6p68W4jfThzgG1j8fdSYdDEnU4rmzKPF2_LyKemGu5VoofNq1qyf1JzHTBZlJ35k-agvD4zA4URuPIfvZgdjg_TsVhnvELjy-0YSjdEgmPHAHmPkF6QTx49D5EHEiPv-uOTIe2uGg')" }}></div>
</div>
</div>
</header>
{/* Main Content Area */}
<main className="flex-1 flex justify-center py-8 px-4 md:px-8 lg:px-40 pb-32">
<div className="w-full max-w-[1024px] flex flex-col gap-8">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#392828] pb-6">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-[#ba9c9c] text-sm">
<span>Packages</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-white">New Package</span>
</div>
<h1 className="text-white text-3xl md:text-4xl font-black tracking-[-0.033em]">Add New Tour Package</h1>
<p className="text-[#ba9c9c] text-base">Curate an unforgettable journey for our premium clientele.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg border border-[#543b3b] text-[#ba9c9c] hover:text-white hover:bg-[#392828] transition-colors font-medium text-sm">
                        Import from CSV
                    </button>
</div>
</div>
{/* Form Content */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Left Column (Main Inputs) */}
<div className="lg:col-span-2 flex flex-col gap-8">
{/* Section 1: Basic Information */}
<section className="bg-[#271b1b] rounded-xl p-6 border border-[#392828]">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary/20 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">info</span>
</div>
<h3 className="text-white text-xl font-bold">1. Basic Information</h3>
</div>
<div className="space-y-5">
<div>
<label className="block text-white text-sm font-medium mb-2">Tour Title</label>
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg px-4 py-3 text-white placeholder-[#543b3b] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g., Midnight Sun Expedition" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-white text-sm font-medium mb-2">Primary Destination</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#ba9c9c]">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</span>
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg pl-10 pr-4 py-3 text-white placeholder-[#543b3b] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="City or Country" type="text"/>
</div>
</div>
<div>
<label className="block text-white text-sm font-medium mb-2">Tour Category</label>
<select className="w-full bg-[#181111] border border-[#543b3b] rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
<option>Adventure &amp; Expedition</option>
<option>Luxury &amp; Leisure</option>
<option>Cultural Heritage</option>
<option>Culinary Experience</option>
</select>
</div>
</div>
<div>
<label className="block text-white text-sm font-medium mb-2">Short Description</label>
<textarea className="w-full bg-[#181111] border border-[#543b3b] rounded-lg px-4 py-3 text-white placeholder-[#543b3b] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="A brief teaser for the listing card..." rows={3}></textarea>
</div>
</div>
</section>
{/* Section 2: Itinerary Builder */}
<section className="bg-[#271b1b] rounded-xl p-6 border border-[#392828]">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="bg-primary/20 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">map</span>
</div>
<h3 className="text-white text-xl font-bold">3. Itinerary Builder</h3>
</div>
<button className="text-sm text-primary font-bold hover:text-white transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-lg">add</span> Add Day
                            </button>
</div>
<div className="flex flex-col gap-4">
{/* Day 1 (Expanded) */}
<div className="border border-[#543b3b] rounded-lg bg-[#181111] overflow-hidden">
<div className="flex items-center justify-between p-4 cursor-pointer bg-[#392828]/50">
<div className="flex items-center gap-3">
<span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Day 1</span>
<span className="text-white font-medium">Arrival in Reykjavik</span>
</div>
<div className="flex items-center gap-2 text-[#ba9c9c]">
<span className="material-symbols-outlined hover:text-white">drag_indicator</span>
<span className="material-symbols-outlined hover:text-white">keyboard_arrow_up</span>
</div>
</div>
<div className="p-4 border-t border-[#392828] space-y-4">
<input className="w-full bg-[#271b1b] border border-[#543b3b] rounded-lg px-4 py-2 text-white text-sm focus:border-primary outline-none" type="text" value="Arrival in Reykjavik"/>
<textarea className="w-full bg-[#271b1b] border border-[#543b3b] rounded-lg px-4 py-2 text-white text-sm focus:border-primary outline-none placeholder-[#543b3b]" placeholder="Describe the day's activities..." rows={3}></textarea>
</div>
</div>
{/* Day 2 (Collapsed) */}
<div className="border border-[#543b3b] rounded-lg bg-[#181111] overflow-hidden">
<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#392828]/30 transition-colors">
<div className="flex items-center gap-3">
<span className="bg-[#392828] text-[#ba9c9c] text-xs font-bold px-2 py-1 rounded">Day 2</span>
<span className="text-white/80 font-medium">Golden Circle Tour</span>
</div>
<div className="flex items-center gap-2 text-[#ba9c9c]">
<span className="material-symbols-outlined hover:text-white">drag_indicator</span>
<span className="material-symbols-outlined hover:text-white">keyboard_arrow_down</span>
</div>
</div>
</div>
{/* Day 3 (Collapsed) */}
<div className="border border-[#543b3b] rounded-lg bg-[#181111] overflow-hidden">
<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#392828]/30 transition-colors">
<div className="flex items-center gap-3">
<span className="bg-[#392828] text-[#ba9c9c] text-xs font-bold px-2 py-1 rounded">Day 3</span>
<span className="text-white/80 font-medium">South Coast Adventure</span>
</div>
<div className="flex items-center gap-2 text-[#ba9c9c]">
<span className="material-symbols-outlined hover:text-white">drag_indicator</span>
<span className="material-symbols-outlined hover:text-white">keyboard_arrow_down</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 3: Media Gallery */}
<section className="bg-[#271b1b] rounded-xl p-6 border border-[#392828]">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary/20 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">imagesmode</span>
</div>
<h3 className="text-white text-xl font-bold">4. Media Gallery</h3>
</div>
<div className="border-2 border-dashed border-[#543b3b] rounded-xl bg-[#181111] p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-[#392828]/20 transition-all group">
<div className="bg-[#392828] p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[#ba9c9c] text-3xl">cloud_upload</span>
</div>
<p className="text-white font-medium text-lg">Click to upload or drag and drop</p>
<p className="text-[#ba9c9c] text-sm mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
<div className="relative aspect-video rounded-lg overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Iceland landscape thumbnail" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlU4YYHcyZRh96qb_8uv548_4h76xWMhkQ-a1hTjE2FZMPlOKDhtrsnzxd7NUaPrE4n0StLIggSr0yoJgVdc5El-k3fIKH96pI2dHkydnQveE-AbTZVkcpDDUMr6fxfiF0uL7V9GqBHonXtXsZ3X4jAMiRAaXpgequgaPeXiVQIuiOed6cSaAl9GQoG3BIu4hZY-KQGJjZYgG0fm4-KGSLpj1v5JuzL6Cu9t7ZeR02QK0f3K42QYXeL2SyTnixcyqTo57kRfRAVQ')" }}></div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button className="p-1 bg-white/10 rounded hover:bg-white/20 text-white"><span className="material-symbols-outlined text-sm">visibility</span></button>
<button className="p-1 bg-red-500/80 rounded hover:bg-red-500 text-white"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<div className="relative aspect-video rounded-lg overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Northern lights thumbnail" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAH4hUYHyYZU_G6is48wp9FXH_wL1DzH3KnXzre_rzEmjfBQY8k8JuoIVzHxOjKvbljJvRciDw_WDnfFbyn656r7BKK5tCq9ipgOBGfyct1h6nsCtxF3U-HEYhsjAMVVQb4h9AaUKgkFvvejdn7_r0Sp4GVgs9d2EveX-Yeik-dts-iJsDLjEHyqZeVO0MEUztfn7-sGNxWPk8A9CBg7ymYjtGAkNwtcs7-Lk1VM_xWfUXohLrkrKVttBj7WdXqC-8soI2zX_ZZQ')" }}></div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button className="p-1 bg-white/10 rounded hover:bg-white/20 text-white"><span className="material-symbols-outlined text-sm">visibility</span></button>
<button className="p-1 bg-red-500/80 rounded hover:bg-red-500 text-white"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
</div>
</section>
</div>
{/* Right Column (Settings & Pricing) */}
<div className="lg:col-span-1 flex flex-col gap-8">
{/* Pricing & Dates */}
<section className="bg-[#271b1b] rounded-xl p-6 border border-[#392828] sticky top-24">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary/20 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<h3 className="text-white text-xl font-bold">2. Pricing &amp; Dates</h3>
</div>
<div className="space-y-5">
<div>
<label className="block text-white text-sm font-medium mb-2">Base Price (USD)</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#ba9c9c] font-bold">$</span>
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg pl-8 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div>
<label className="block text-white text-sm font-medium mb-2">Discount Price (Optional)</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#ba9c9c] font-bold">$</span>
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg pl-8 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-white text-sm font-medium mb-2">Duration</label>
<div className="relative">
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg px-4 py-3 text-white focus:border-primary outline-none" placeholder="7" type="number"/>
<span className="absolute inset-y-0 right-3 flex items-center text-[#543b3b] text-xs">Days</span>
</div>
</div>
<div>
<label className="block text-white text-sm font-medium mb-2">Max Group</label>
<div className="relative">
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg px-4 py-3 text-white focus:border-primary outline-none" placeholder="12" type="number"/>
<span className="absolute inset-y-0 right-3 flex items-center text-[#543b3b] text-xs">Pax</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-[#392828]">
<label className="block text-white text-sm font-medium mb-3">Difficulty Level</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="difficulty" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-[#543b3b] bg-[#181111] text-[#ba9c9c] text-sm peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">Easy</span>
</label>
<label className="cursor-pointer">
<input checked className="peer sr-only" name="difficulty" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-[#543b3b] bg-[#181111] text-[#ba9c9c] text-sm peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">Moderate</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="difficulty" type="radio"/>
<span className="px-3 py-1.5 rounded-full border border-[#543b3b] bg-[#181111] text-[#ba9c9c] text-sm peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">Challenging</span>
</label>
</div>
</div>
<div className="pt-4 border-t border-[#392828]">
<label className="block text-white text-sm font-medium mb-3">Next Availability</label>
<input className="w-full bg-[#181111] border border-[#543b3b] rounded-lg px-4 py-3 text-white focus:border-primary outline-none" style={{ colorScheme: "dark" }} type="date"/>
</div>
</div>
</section>
{/* Inclusions */}
<section className="bg-[#271b1b] rounded-xl p-6 border border-[#392828]">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary/20 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">check_circle</span>
</div>
<h3 className="text-white text-xl font-bold">5. Inclusions</h3>
</div>
<div className="space-y-3">
<div className="flex gap-2">
<input className="flex-1 bg-[#181111] border border-[#543b3b] rounded-lg px-3 py-2 text-white text-sm focus:border-primary outline-none" placeholder="Add included item" type="text"/>
<button className="bg-[#392828] hover:bg-primary text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined text-lg">add</span>
</button>
</div>
<ul className="space-y-2">
<li className="flex items-center justify-between bg-[#181111] px-3 py-2 rounded border border-[#392828] group">
<span className="text-slate-300 text-sm">Airport transfers</span>
<button className="text-[#543b3b] hover:text-primary transition-colors"><span className="material-symbols-outlined text-base">close</span></button>
</li>
<li className="flex items-center justify-between bg-[#181111] px-3 py-2 rounded border border-[#392828] group">
<span className="text-slate-300 text-sm">Daily breakfast</span>
<button className="text-[#543b3b] hover:text-primary transition-colors"><span className="material-symbols-outlined text-base">close</span></button>
</li>
<li className="flex items-center justify-between bg-[#181111] px-3 py-2 rounded border border-[#392828] group">
<span className="text-slate-300 text-sm">English speaking guide</span>
<button className="text-[#543b3b] hover:text-primary transition-colors"><span className="material-symbols-outlined text-base">close</span></button>
</li>
</ul>
</div>
</section>
</div>
</div>
</div>
</main>
{/* Sticky Footer */}
<footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#181111] border-t border-[#392828] px-10 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<div className="layout-container flex justify-between items-center max-w-[1024px] mx-auto">
<div className="hidden sm:flex items-center gap-2 text-[#ba9c9c] text-sm">
<span className="material-symbols-outlined text-lg">save</span>
<span>Last saved: 2 mins ago</span>
</div>
<div className="flex gap-4 w-full sm:w-auto justify-end">
<button className="flex-1 sm:flex-none cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#392828] hover:bg-[#4a3535] text-white text-sm font-bold transition-colors">
                    Save Draft
                </button>
<button className="flex-1 sm:flex-none cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-red-700 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all transform active:scale-95">
                    Publish Package
                </button>
</div>
</div>
</footer>
    </div>
  );
}
