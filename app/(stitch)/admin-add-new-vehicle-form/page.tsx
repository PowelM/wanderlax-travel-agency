"use client";
 
 
import React from 'react';

export default function AdminAddNewVehicleFormPage() {
  return (
    <div className="stitch-screen">
      {/* Header */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#39282c] bg-white dark:bg-surface-darker px-10 py-4 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-slate-900 dark:text-white">
<div className="size-8 text-primary">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.968-1.484L12 11l-2.968-1.484L12 11zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<h2 className="text-xl font-bold leading-tight tracking-tight">Wanderlux Admin</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-slate-200 dark:border-[#39282c] overflow-hidden">
<div className="text-slate-400 dark:text-[#b99da2] flex border-none bg-slate-50 dark:bg-[#39282c] items-center justify-center pl-3">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-50 dark:bg-[#39282c] focus:border-none h-full placeholder:text-slate-400 dark:placeholder:text-[#b99da2] px-3 text-sm font-normal leading-normal" placeholder="Search fleet..."/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden lg:flex items-center gap-6">
<a className="text-slate-500 dark:text-[#b99da2] hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-primary text-sm font-bold leading-normal" href="#">Fleet</a>
<a className="text-slate-500 dark:text-[#b99da2] hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Bookings</a>
<a className="text-slate-500 dark:text-[#b99da2] hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Customers</a>
<a className="text-slate-500 dark:text-[#b99da2] hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Settings</a>
</nav>
<div className="flex items-center gap-3">
<button className="relative text-slate-500 dark:text-[#b99da2] hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 size-2 bg-primary rounded-full"></span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-[#39282c]" data-alt="User profile picture showing a professional man in a suit" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmz-xMnFZR38YAHDG6FP9OVRxYcCLMfRIopRlCAsSUa81-NnvDnCL7niibDnCiu1_mqVtQCZ26o8LTi_HNKUMVMPsnU50MalyIFXy6se_JKs9Hr4lQya7Um9Bu-LYLgIgztA5YNPVA3FQ-QTH6gkuu8JwG9mu6Nz_RAgR6ySI6PTQlUCSpfvUj9hLDi5WOflBcGDUh4BvHZlbRwyw0-H-bULQon-bldMgam63DimMlUTuj3wwHZaCOADSa0MG-FMxsjfC9I1D2wg')" }}></div>
</div>
</div>
</header>
<main className="flex-1 flex flex-col lg:flex-row h-full max-w-[1600px] w-full mx-auto p-4 md:p-8 gap-8">
{/* Left Column: Specs & Pricing */}
<section className="flex-1 flex flex-col gap-8 min-w-0">
{/* Header Section for Form */}
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
<a className="flex items-center gap-1 hover:underline" href="#"><span className="material-symbols-outlined text-sm">arrow_back</span> Back to Fleet</a>
</div>
<h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Add New Vehicle</h1>
<p className="text-slate-500 dark:text-[#b99da2] text-base">Enter detailed specifications and pricing for the new inventory addition.</p>
</div>
{/* Vehicle Specs Card */}
<div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#39282c] shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">directions_car</span>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Vehicle Specifications</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Make</label>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="e.g. Mercedes-Benz" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Model</label>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="e.g. S-Class 580" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Year</label>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="e.g. 2024" type="number"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">VIN</label>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none uppercase" placeholder="17-character VIN" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Fuel Type</label>
<div className="relative">
<select className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none">
<option>Premium Gasoline</option>
<option>Diesel</option>
<option>Electric</option>
<option>Hybrid</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Transmission</label>
<div className="relative">
<select className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none">
<option>Automatic</option>
<option>Manual</option>
<option>Semi-Automatic</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Seating Capacity</label>
<div className="relative">
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="e.g. 5" type="number"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">group</span>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">License Plate</label>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none uppercase" placeholder="e.g. WNDR-01" type="text"/>
</div>
</div>
</div>
{/* Pricing Card */}
<div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#39282c] shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Rental Pricing</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Daily Rate (Base)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg pl-8 pr-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Weekend Rate</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg pl-8 pr-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Security Deposit</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg pl-8 pr-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="1000.00" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-[#b99da2]">Mileage Limit (Daily)</label>
<div className="relative">
<input className="w-full bg-slate-50 dark:bg-surface-darker border border-slate-300 dark:border-[#39282c] rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="e.g. 150" type="number"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">Miles</span>
</div>
</div>
</div>
</div>
{/* Action Buttons Mobile (Hidden on desktop, shown here for better flow) */}
<div className="flex lg:hidden gap-4 pt-4">
<button className="flex-1 py-4 px-6 rounded-lg border border-slate-300 dark:border-[#39282c] text-slate-700 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors">Cancel</button>
<button className="flex-1 btn-glare py-4 px-6 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">Save Vehicle</button>
</div>
</section>
{/* Right Column: Media & Maintenance */}
<aside className="flex-1 lg:max-w-[480px] flex flex-col gap-8">
{/* Media Upload */}
<div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#39282c] shadow-sm flex flex-col h-auto">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">perm_media</span>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Media Gallery</h3>
</div>
<button className="text-primary text-sm font-medium hover:underline">Edit</button>
</div>
{/* Main Preview Area */}
<div className="w-full aspect-video rounded-lg bg-slate-100 dark:bg-surface-darker border-2 border-dashed border-slate-300 dark:border-[#39282c] mb-4 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-30" data-alt="Blurry abstract image of a luxury car interior" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf31qdsDzg0r9qNL4taizcI7s3VKeg9irpvEI9M-YUL-Tyl4BwTgv139122C-wbwYtxzIzIwsu26qA3dH4nJRjHdYJUVFJ0I-AAVp--7EEBAnbFRtoYIviXnHg_Ci9nIRUEY5N8kHzVvV90V9GbVGzdGX1LCWYGf2D9V9dicTvmbJYQMCulyB8BUuNXhJWXh-TLelI25li81VmD6TL-rtnyUk78320ja4CR5h09_rylXNGpgStMlWz3nVZGqRHKgdi3lN9cMdgyQ')" }}></div>
<div className="z-10 flex flex-col items-center">
<span className="material-symbols-outlined text-4xl text-slate-400 dark:text-[#b99da2] mb-2">cloud_upload</span>
<p className="text-slate-500 dark:text-[#b99da2] font-medium">Drop cover image here</p>
</div>
</div>
{/* Thumbnails Grid */}
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square rounded-lg bg-slate-100 dark:bg-surface-darker border border-slate-200 dark:border-[#39282c] flex items-center justify-center cursor-pointer hover:border-primary transition-colors bg-cover bg-center" data-alt="Car wheel detail shot" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDGRVa59BRcb6-eOz5fDDJsLWZN5md57xQMrUPgv_L5cytHTnDsxpdGVY1esQmUD39fUCgQP6tiFe8Ryu_xeNFNEmKGcBjIW7UlMxyxGfuqblfg2z8Fmwyon5PKF0yolqjsO-1n8S5_usNvkMKxRYY2n09p2QBwL1r5x_OL6sheLn-t8ecb1E8qzxmVW-n9ysq8KVFbALMSd0HmtwN7ID9xmUARsLITV7XJdzxaHBBqDcXyiKmTRl5ftbwwAct3TsuWh2d3fsCWg')" }}></div>
<div className="aspect-square rounded-lg bg-slate-100 dark:bg-surface-darker border border-slate-200 dark:border-[#39282c] flex items-center justify-center cursor-pointer hover:border-primary transition-colors bg-cover bg-center" data-alt="Car front view headlight detail" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC--JZgFmHnFraYwKtLSaTlkV3Xa1bPtCnuTbQ2BY8egYtlgs9L_pLPapSccgqh9RpJOQgYqkE3F8MANCpRF5_8vbEJeUQo1JKYsa-AefEbTc9S9Veksw1ZWntrRyT20DbK0q8J4iVs8SkLoZjGYS4KvuMfmcKR7njRPjLS2PDGyyBgZO1UTGrpFXc0ldj5H0VVzvnlcf9VG9TjSUDS3-Y7twuuqUPycumjYCVgNft0ZLwLY2I4GxEhGqf9nMiZzeP9EdJr37Gb0A')" }}></div>
<div className="aspect-square rounded-lg bg-slate-100 dark:bg-surface-darker border border-slate-200 dark:border-[#39282c] flex items-center justify-center cursor-pointer hover:border-primary transition-colors relative">
<span className="material-symbols-outlined text-slate-400">add</span>
</div>
<div className="aspect-square rounded-lg bg-slate-100 dark:bg-surface-darker border border-slate-200 dark:border-[#39282c] flex items-center justify-center cursor-pointer hover:border-primary transition-colors relative">
<span className="material-symbols-outlined text-slate-400">add</span>
</div>
</div>
<p className="text-xs text-slate-400 dark:text-gray-500 mt-4 text-center">Supported formats: JPG, PNG, WEBP (Max 5MB)</p>
</div>
{/* Maintenance Log */}
<div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#39282c] shadow-sm flex-1">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">build</span>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Maintenance Log</h3>
</div>
<button className="text-primary text-sm font-medium hover:underline flex items-center gap-1"><span className="material-symbols-outlined text-sm">add</span>Add Entry</button>
</div>
<div className="space-y-4">
{/* Log Item */}
<div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-surface-darker transition-colors border border-transparent hover:border-slate-200 dark:hover:border-[#39282c] cursor-pointer group">
<div className="flex-col items-center hidden sm:flex">
<div className="text-xs font-bold text-slate-400 uppercase">Oct</div>
<div className="text-xl font-bold text-slate-900 dark:text-white">24</div>
</div>
<div className="flex-1 border-l-2 border-slate-200 dark:border-[#39282c] pl-4 group-hover:border-primary transition-colors">
<h4 className="text-slate-900 dark:text-white font-bold text-sm">Regular Service A</h4>
<p className="text-xs text-slate-500 dark:text-[#b99da2] mt-1">Oil change, filter replacement, brake check.</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full font-bold">Completed</span>
<span className="text-[10px] text-slate-400">Technician: M. Ross</span>
</div>
</div>
</div>
{/* Log Item */}
<div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-surface-darker transition-colors border border-transparent hover:border-slate-200 dark:hover:border-[#39282c] cursor-pointer group">
<div className="flex-col items-center hidden sm:flex">
<div className="text-xs font-bold text-slate-400 uppercase">Aug</div>
<div className="text-xl font-bold text-slate-900 dark:text-white">12</div>
</div>
<div className="flex-1 border-l-2 border-slate-200 dark:border-[#39282c] pl-4 group-hover:border-primary transition-colors">
<h4 className="text-slate-900 dark:text-white font-bold text-sm">Tire Rotation</h4>
<p className="text-xs text-slate-500 dark:text-[#b99da2] mt-1">Scheduled tire rotation and alignment.</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full font-bold">Completed</span>
<span className="text-[10px] text-slate-400">Technician: A. Smith</span>
</div>
</div>
</div>
{/* Empty State Placeholder */}
<div className="flex gap-4 p-3 rounded-lg border border-dashed border-slate-300 dark:border-[#39282c] items-center justify-center text-slate-400 dark:text-[#b99da2] text-sm">
                        No upcoming maintenance scheduled.
                     </div>
</div>
</div>
{/* Desktop Action Buttons */}
<div className="hidden lg:flex flex-col gap-3 mt-auto">
<button className="btn-glare w-full py-4 px-6 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Save Vehicle</button>
<button className="w-full py-3 px-6 rounded-lg text-slate-500 dark:text-[#b99da2] font-medium hover:text-slate-900 dark:hover:text-white transition-colors">Cancel</button>
</div>
</aside>
</main>
    </div>
  );
}
