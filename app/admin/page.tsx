"use client";
/* eslint-disable react/no-unescaped-entities */
 
import React from 'react';
import Link from 'next/link';

export default function WanderluxAdminDashboardOverviewPage() {
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
{/* Sidebar */}
<aside className="flex w-64 flex-col border-r border-border-dark bg-background-dark">
<div className="flex items-center gap-3 px-6 py-6 border-b border-border-dark/50">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/50" data-alt="Company Logo Abstract" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxItnaRqAa0g0uhxpuiOdb5rjaRHwYCL0n7dcgj6gpBxbVgzVSpOmVpNDtlkLqEm6Ze2lhMUbFi2PsMFtMdhjHvUW_zqdcsNNAYgdvNCAWPx37jaVg5l-X5JXTcHfj1vcStnvVtqx8d5SjGu0XUlkjaqPEyozRkQfyAY8G8g8Pe-ML_RLvR-ZGxXZPqtBhApMJd6cuGxcuLGsk7ywOLEOUtj_0wy8V0aGHeasXxMKgasV-t32xtgl9phTGColXAYURYBQrnR-sNg')" }}></div>
<div className="flex flex-col">
<h1 className="text-white text-lg font-bold tracking-tight">Wanderlux</h1>
<p className="text-primary text-xs font-semibold uppercase tracking-wider">Admin Panel</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
{/* Active Item */}
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-4 border-primary transition-all group" href="/admin">
<span className="material-symbols-outlined text-[24px]">dashboard</span>
<span className="text-sm font-semibold">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-surface-dark hover:text-white transition-all group border-l-4 border-transparent hover:border-border-dark" href="/admin/bookings">
<span className="material-symbols-outlined text-[24px]">calendar_month</span>
<span className="text-sm font-medium">Bookings</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-surface-dark hover:text-white transition-all group border-l-4 border-transparent hover:border-border-dark" href="/tours">
<span className="material-symbols-outlined text-[24px]">map</span>
<span className="text-sm font-medium">Tours</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-surface-dark hover:text-white transition-all group border-l-4 border-transparent hover:border-border-dark" href="/admin/fleet">
<span className="material-symbols-outlined text-[24px]">directions_car</span>
<span className="text-sm font-medium">Rentals</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-surface-dark hover:text-white transition-all group border-l-4 border-transparent hover:border-border-dark" href="/admin/crm">
<span className="material-symbols-outlined text-[24px]">group</span>
<span className="text-sm font-medium">Customers</span>
</Link>
<div className="pt-4 mt-4 border-t border-border-dark/50">
<p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">System</p>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-surface-dark hover:text-white transition-all group border-l-4 border-transparent hover:border-border-dark" href="/admin/staff">
<span className="material-symbols-outlined text-[24px]">settings</span>
<span className="text-sm font-medium">Settings</span>
</Link>
</div>
</nav>
<div className="p-4 border-t border-border-dark">
<div className="flex items-center gap-3 p-3 rounded-lg bg-surface-dark border border-border-dark">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-8" data-alt="User Avatar Profile" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-IBtcNloCVv54a1j2HpwGpjo2wGjfX2gOihiZLlnhLqVsOvBlMASFZ0laWjaPmD9n0CEb_cMJCeW9SVs4-g7mTjYrireW7qoW9U820REumIp6RiZlqnzLi8P6Xg-M6RkHhD3qcADu_9R6fi7jGAMdsu8EXoKTViRIfLASpzS3x3bvXGlrup4ioKFxxP540_LmF5K5o8hq-MkkxFXvj2fgeDQt1kTATsSF2LY2MkB21U9DBUE3N3MWUGneYtxycRhnPC4P8020Bw')" }}></div>
<div className="flex flex-col overflow-hidden">
<span className="text-sm font-medium text-white truncate">Jane Doe</span>
<span className="text-xs text-slate-400 truncate">Super Admin</span>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#180a0a]">
{/* Header */}
<header className="flex items-center justify-between px-8 py-5 border-b border-border-dark bg-background-dark/95 backdrop-blur z-10">
<div>
<h2 className="text-2xl font-bold text-white tracking-tight">Overview</h2>
<p className="text-slate-400 text-sm">Welcome back, here's what's happening today.</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="material-symbols-outlined text-[20px]">search</span>
</span>
<input className="w-64 py-2 pl-10 pr-4 bg-surface-dark border border-border-dark rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Search anything..." type="text"/>
</div>
<button className="relative p-2 rounded-lg bg-surface-dark text-slate-300 hover:text-white hover:bg-border-dark transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-surface-dark"></span>
</button>
</div>
</header>
{/* Scrollable Area */}
<div className="flex-1 overflow-y-auto p-8 space-y-8">
{/* KPI Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Card 1 */}
<div className="bg-surface-dark rounded-lg p-6 border-l-4 border-primary border-y border-r border-y-border-dark border-r-border-dark shadow-lg shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Total Bookings</p>
<h3 className="text-white text-2xl font-bold mt-1">1,245</h3>
</div>
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">confirmation_number</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-green-500 flex items-center font-medium">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                                12.5%
                            </span>
<span className="text-slate-500">vs last month</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-dark rounded-lg p-6 border-l-4 border-primary border-y border-r border-y-border-dark border-r-border-dark shadow-lg shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Total Revenue</p>
<h3 className="text-white text-2xl font-bold mt-1">$482k</h3>
</div>
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-green-500 flex items-center font-medium">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                                8.2%
                            </span>
<span className="text-slate-500">vs last month</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-dark rounded-lg p-6 border-l-4 border-primary border-y border-r border-y-border-dark border-r-border-dark shadow-lg shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Active Rentals</p>
<h3 className="text-white text-2xl font-bold mt-1">42</h3>
</div>
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">directions_car</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-red-500 flex items-center font-medium">
<span className="material-symbols-outlined text-[16px]">trending_down</span>
                                2.1%
                            </span>
<span className="text-slate-500">vs last month</span>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-dark rounded-lg p-6 border-l-4 border-primary border-y border-r border-y-border-dark border-r-border-dark shadow-lg shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Pending Apps.</p>
<h3 className="text-white text-2xl font-bold mt-1">18</h3>
</div>
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">pending_actions</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="text-green-500 flex items-center font-medium">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                                5.0%
                            </span>
<span className="text-slate-500">vs last month</span>
</div>
</div>
</div>
{/* Main Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Chart Section */}
<div className="lg:col-span-2 bg-surface-dark rounded-xl border border-border-dark p-6 shadow-lg shadow-black/20">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<div>
<h3 className="text-white text-lg font-bold">Revenue Trends</h3>
<p className="text-slate-400 text-sm">Monthly revenue analytics</p>
</div>
<div className="flex items-center gap-2 bg-background-dark p-1 rounded-lg border border-border-dark">
<button className="px-3 py-1 text-xs font-medium bg-primary text-white rounded shadow-sm">Monthly</button>
<button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white rounded transition-colors">Weekly</button>
</div>
</div>
<div className="relative h-64 w-full">
{/* Simulated Chart Area */}
<div className="absolute inset-0 flex items-end justify-between px-2 gap-2">
<div className="w-full bg-primary/10 hover:bg-primary/20 transition-all rounded-t-sm h-[40%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$12k</div></div>
<div className="w-full bg-primary/10 hover:bg-primary/20 transition-all rounded-t-sm h-[65%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$34k</div></div>
<div className="w-full bg-primary/10 hover:bg-primary/20 transition-all rounded-t-sm h-[50%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$22k</div></div>
<div className="w-full bg-primary/10 hover:bg-primary/20 transition-all rounded-t-sm h-[75%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$45k</div></div>
<div className="w-full bg-primary/20 hover:bg-primary/30 transition-all rounded-t-sm h-[60%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$28k</div></div>
<div className="w-full bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm h-[85%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$56k</div></div>
<div className="w-full bg-gradient-to-t from-primary/40 to-primary/80 hover:to-primary transition-all rounded-t-sm h-[95%] relative group shadow-[0_0_15px_rgba(198,16,16,0.3)]"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$68k</div></div>
<div className="w-full bg-primary/20 hover:bg-primary/30 transition-all rounded-t-sm h-[70%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$38k</div></div>
</div>
{/* Grid Lines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-border-dark/30 border-t border-dashed border-slate-700"></div>
<div className="w-full h-px bg-border-dark/30 border-t border-dashed border-slate-700"></div>
<div className="w-full h-px bg-border-dark/30 border-t border-dashed border-slate-700"></div>
<div className="w-full h-px bg-border-dark/30 border-t border-dashed border-slate-700"></div>
<div className="w-full h-px bg-border-dark"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-slate-500 font-medium px-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
</div>
</div>
{/* Quick Actions & Mini List */}
<div className="flex flex-col gap-6">
{/* Quick Actions */}
<div className="bg-surface-dark rounded-xl border border-border-dark p-6 shadow-lg shadow-black/20">
<h3 className="text-white text-lg font-bold mb-4">Quick Actions</h3>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-3 rounded-lg bg-background-dark border border-border-dark text-slate-300 hover:border-primary/50 hover:bg-primary/5 hover:text-white transition-all group">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">add_location_alt</span>
</div>
<span className="text-sm font-medium">Add New Tour</span>
</div>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg bg-background-dark border border-border-dark text-slate-300 hover:border-primary/50 hover:bg-primary/5 hover:text-white transition-all group">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">no_crash</span>
</div>
<span className="text-sm font-medium">Add Rental Car</span>
</div>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg bg-background-dark border border-border-dark text-slate-300 hover:border-primary/50 hover:bg-primary/5 hover:text-white transition-all group">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">person_add</span>
</div>
<span className="text-sm font-medium">New Customer</span>
</div>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
{/* Mini Stats: Top Destinations */}
<div className="bg-surface-dark rounded-xl border border-border-dark p-6 shadow-lg shadow-black/20 flex-1">
<h3 className="text-white text-lg font-bold mb-4">Top Destinations</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="Bali Landscape Thumbnail" data-location="Bali" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSaj6h2jY3EiTlVULNwaaPdJGmQYZbdHk4QGghFTeMCVI431IvWQdwJXpuePa_mGx9moE1Yqp0e6TpHp3NrYidkaxeoI3OjHK-uJs_gw__pkKZmC4gHMuVLiZOUuwgd1mWYj5HIh7eHU9lyUFwBZ9T-wnUPimK_I_HxwKOUbefZYapdzduqxHbox51BMPISKpRS7CjO97gOm8n6q3NX-hPxlO7k-q598NLk9h69TyI9K02Hc5h7RucIGtgot792jTjvMNeL4HISg')" }}></div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Bali, Indonesia</h4>
<div className="w-full bg-background-dark rounded-full h-1.5 mt-2">
<div className="bg-primary h-1.5 rounded-full" style={{ width: "85%" }}></div>
</div>
</div>
<span className="text-xs font-bold text-white">85%</span>
</div>
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="Paris Landscape Thumbnail" data-location="Paris" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx48um9kPtux1-ffmE_fvtWjTx959Spt-P27lKHgcpLysuArbGo6qiePQxKfqDHNQyfp3t1lSXzZDk20-sbouUtRDncVxZO9OuhgUfumiBm-IlFHl4UMW2igpOZrYKGwyBaA7AWC1KAju8_KiZ16pJ0_Lr6m-bHGEjf6jLD9NUR-qrqc81Q38FvMLdv13PyANKnGM0ZHtfJJSPTx8E9Xpf9WOTUzjmVvBjETHL4ES6qWR0AzW6Kn1K62VBKCz9Jci_B_Wd70bL6Q')" }}></div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Paris, France</h4>
<div className="w-full bg-background-dark rounded-full h-1.5 mt-2">
<div className="bg-primary h-1.5 rounded-full" style={{ width: "65%" }}></div>
</div>
</div>
<span className="text-xs font-bold text-white">65%</span>
</div>
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="Kyoto Landscape Thumbnail" data-location="Kyoto" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3boOYVrR1n0H6uoqOD2LfJwHLRQEgSY3MhagWxxKofUfsAEY8jJsuwea18cx3q5UE2utYGNY1W6oxgh7DBDwyWkR_2vBOHqpWTedgQYAhUDiECdNEtDUgwKHcF9CqyBCcCj7CANLtAcDBEnKDEAuJKgj_1bs4lrHEMR9LTrcA16nL3jN64GEnNKUagaEoZjDM1yzxCk1-_78gHplYBNoiSM8tI7rhifX1ee_PDlKhfOYad3yismWuZ8QrZpNr7YVejzRiShx8Mw')" }}></div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Kyoto, Japan</h4>
<div className="w-full bg-background-dark rounded-full h-1.5 mt-2">
<div className="bg-primary h-1.5 rounded-full" style={{ width: "40%" }}></div>
</div>
</div>
<span className="text-xs font-bold text-white">40%</span>
</div>
</div>
</div>
</div>
</div>
{/* Recent Bookings Table */}
<div className="bg-surface-dark rounded-xl border border-border-dark overflow-hidden shadow-lg shadow-black/20">
<div className="p-6 border-b border-border-dark flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<h3 className="text-white text-lg font-bold">Recent Bookings</h3>
<Link className="text-primary text-sm font-medium hover:text-white transition-colors" href="/admin/bookings">View All</Link>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border-dark bg-background-dark/50 text-xs uppercase tracking-wider text-slate-400">
<th className="p-4 font-semibold">Customer</th>
<th className="p-4 font-semibold">Destination</th>
<th className="p-4 font-semibold">Date</th>
<th className="p-4 font-semibold">Amount</th>
<th className="p-4 font-semibold">Status</th>
<th className="p-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border-dark">
<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center" data-alt="User Avatar Small" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOMTYLE5p9Du_HQl-CJGnxvMZGJmlYezZaialwDa4tgW8fS8x2RsdTG1FsbC7IVIEaRzOgrObiMPvq3C6VnOJpqLQ9cV5qedtHXcq3a1tBD76k_c_0VFHNpb5N0XaJH1S0TvaQ06cef-nY1HMehUrVlidvZlJnF4s05OwILWwYehQxSlm_tjcvouqIbzJ4tSszFw9NgTkWkaW9Z_o4nkHc89KiXjpzibUmzAJ7RvjJfWksmIhJLFtglmKcKPaub57QjWOoQX6-Eg')" }}></div>
<span className="font-medium text-white">Alice Johnson</span>
</div>
</td>
<td className="p-4 text-slate-300">Santorini Luxury Villa</td>
<td className="p-4 text-slate-400">Oct 24, 2023</td>
<td className="p-4 text-white font-medium">$2,450</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                                            Confirmed
                                        </span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-white p-1 rounded hover:bg-background-dark">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center" data-alt="User Avatar Small" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0Z_SP2n5ceIxmVgsEa9GuCFalU6Lmr-Y4c_Q1-CTJbdgLXnjHME2j4sflXYoFy8MT-OePFHSNo3DG7RAUQAl_SVNbYA3dAHhL1xdaNy5J41-MNPq2ipJ6OY0Mczds194eID5LebpVX5YOnlkuo6AwvksgbTJapObxYGbYS39-CSGAgVjvyNeU6HPlXSX8RKfX9vIsXhO_pwurkfFTmLxExO_j1XGfcV8CzILchJUi2ZRS99NK5_4GLimv01URWgs9Ea_-LuykvQ')" }}></div>
<span className="font-medium text-white">Robert Fox</span>
</div>
</td>
<td className="p-4 text-slate-300">Kyoto Temple Tour</td>
<td className="p-4 text-slate-400">Oct 22, 2023</td>
<td className="p-4 text-white font-medium">$850</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                            Pending
                                        </span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-white p-1 rounded hover:bg-background-dark">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center" data-alt="User Avatar Small" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlM67bC6KJODO2DQpcxLg84dm0bb8m8WB26fUzh2S0Dhd7TrvQ_XxsFBmt6x5yb81xTvgFu4-mZ3ubdmaKEo-BdycBmD1i_TulG4eUwLnm7SDsr9knez9ooYMoCXyTGR3WpBTfMwyV8V3aVyGam298JkB689qeuMxXOJa3CBAfkC85bxoSXu6MbJGcnivpVE4xXR1NDMUowKjG-T5oM-yOxKnfoTi8cCt9fcsHJ6YaDP-hE8joTG0jS162rGiQ32hD-mrRSnRw5w')" }}></div>
<span className="font-medium text-white">Eleanor Pena</span>
</div>
</td>
<td className="p-4 text-slate-300">Swiss Alps Ski Trip</td>
<td className="p-4 text-slate-400">Oct 20, 2023</td>
<td className="p-4 text-white font-medium">$4,120</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                                            Cancelled
                                        </span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-white p-1 rounded hover:bg-background-dark">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center" data-alt="User Avatar Small" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2nF1ZOsypD6sSIcO2S63NBEuz-8R4CcgRTikij-1udACP9WrDwjVXAOlsMrxkTb9uZ7z4zS5LBpSlG669e99TrtnobXnjOVOKuE4jHJj5TK_CjwLwGdJb5412MJfLUVeqXFvHXcxOl8ILxWNc8zHTUGsvCNI1iDmZoge3B5gn3KlzhMNyDW4pk-5LBxgUwPrrCr8BxEOBgEqZq88QhYUr6bsZiLRK-OXW1smXch7LS7GggJoRvz525ghlX8gsTNXN7UmKv1iWFA')" }}></div>
<span className="font-medium text-white">Cody Fisher</span>
</div>
</td>
<td className="p-4 text-slate-300">Dubai Desert Safari</td>
<td className="p-4 text-slate-400">Oct 19, 2023</td>
<td className="p-4 text-white font-medium">$1,200</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                                            Confirmed
                                        </span>
</td>
<td className="p-4 text-right">
<button className="text-slate-400 hover:text-white p-1 rounded hover:bg-background-dark">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
