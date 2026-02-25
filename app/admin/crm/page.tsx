"use client";
/* eslint-disable react/no-unescaped-entities */
 
import React from 'react';

export default function WanderluxAdminCustomerCrmPage() {
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full overflow-hidden">
{/* Sidebar */}
<div className="hidden lg:flex flex-col w-64 bg-surface-dark border-r border-border-dark flex-shrink-0">
<div className="flex flex-col h-full p-4 justify-between">
<div className="flex flex-col gap-6">
{/* Brand */}
<div className="flex items-center gap-3 px-2">
<div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-primary/20" data-alt="Wanderlux Logo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzO-9NrkvxH1KFJe3_yTT8ES9CLPB1gDShLJ1s9uovijCQVWVlUXCzL2ILCq77TdJ4R6B6HZw-IVkPkrp1xsyZ4QN6khWenCEqeSAn49ztqRWVrpco4hx2FXncP3mSa0HbdeCuI7CoLyTt0Oh1R8z7uPUOPVrpjwrvcstE-xIvQNlmtkENjFUJPUAWAOYfLKK3OfIoIUXd15cZxINiyU1udJsEdm81T-xRsodDWKj75DjK1Yf3snxk0Mlqao23IRw6j3qHO8O3Ng')" }}></div>
<div className="flex flex-col">
<h1 className="text-white text-lg font-bold leading-tight">Wanderlux</h1>
<p className="text-text-muted text-xs font-medium">Admin Panel</p>
</div>
</div>
{/* Navigation */}
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">grid_view</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined text-primary font-variation-settings-FILL-1">group</span>
<span className="text-sm font-bold">Customers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">calendar_month</span>
<span className="text-sm font-medium">Bookings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">location_on</span>
<span className="text-sm font-medium">Destinations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">payments</span>
<span className="text-sm font-medium">Finances</span>
</a>
</div>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">settings</span>
<span className="text-sm font-medium">Settings</span>
</a>
<div className="mt-4 pt-4 border-t border-border-dark flex items-center gap-3 px-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-primary-dark flex items-center justify-center text-xs font-bold text-white">AD</div>
<div className="flex flex-col">
<p className="text-sm font-medium text-white">Admin User</p>
<p className="text-xs text-text-muted">admin@wanderlux.com</p>
</div>
</div>
</div>
</div>
</div>
{/* Main Content Area */}
<main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
{/* Header */}
<header className="flex items-center justify-between px-6 py-4 border-b border-border-dark bg-surface-dark/50 backdrop-blur-sm z-10">
<div className="flex flex-col">
<h2 className="text-2xl font-bold text-white tracking-tight">Customer Management</h2>
<p className="text-text-muted text-sm">Manage high-net-worth clients and interactions</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center h-10 w-10 rounded-lg text-text-muted hover:text-white hover:bg-border-dark transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Add Customer</span>
</button>
</div>
</header>
{/* Scrollable Content */}
<div className="flex-1 overflow-auto p-6">
<div className="grid grid-cols-12 gap-6 h-full min-h-[800px]">
{/* Left Column: Search & List */}
<div className="col-span-12 xl:col-span-4 flex flex-col gap-4 h-full">
{/* Search Bar */}
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-text-muted group-focus-within:text-primary transition-colors">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-surface-dark text-white placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-primary/50 sm:text-sm shadow-sm transition-all" placeholder="Search clients..." type="text"/>
</div>
{/* Filters */}
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold whitespace-nowrap border border-primary/20">All Clients</button>
<button className="px-3 py-1.5 rounded-full bg-surface-dark hover:bg-border-dark text-text-muted text-xs font-medium whitespace-nowrap border border-transparent transition-colors">VIP</button>
<button className="px-3 py-1.5 rounded-full bg-surface-dark hover:bg-border-dark text-text-muted text-xs font-medium whitespace-nowrap border border-transparent transition-colors">Active Booking</button>
<button className="px-3 py-1.5 rounded-full bg-surface-dark hover:bg-border-dark text-text-muted text-xs font-medium whitespace-nowrap border border-transparent transition-colors">Leads</button>
</div>
{/* Customer List Card */}
<div className="bg-surface-dark rounded-xl border border-border-dark overflow-hidden flex flex-col flex-1">
<div className="overflow-y-auto flex-1">
{/* List Item 1 (Active) */}
<div className="p-4 border-b border-border-dark hover:bg-white/5 cursor-pointer transition-colors bg-white/5 border-l-2 border-l-primary">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of Alice Vanderbilt" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByPqNBVhuLARyGPrBGQKd7oysBbDnCpKOAxzQ6PIAxqD2c-16_GMbaRo-eKaKS2cZr-WwkCnY2B-2XKKvcl0jeXU2DUCL1J0iOnTy4gT3h9-LKwCHQRPqFQx9aMIX4QoT2ISVu7Wag2KczIWglrIcUhFu1f0IL8FV5rH2He-9w81WIDVUVcUIFfVCVS3OApJWqRTLYlj4mupTPi9U3Ggwv1zyKSiJYIcNaOTJzEbnuWRTZpCq-Xr72kFb2kXO9dfGcekkuAcfJoQ')" }}></div>
<div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-surface-dark"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-bold text-white truncate">Alice Vanderbilt</h4>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-bold">VIP</span>
</div>
<p className="text-xs text-text-muted truncate">alice.vanderbilt@email.com</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-text-muted">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">payments</span> $45,200</span>
<span>Last active: 2h ago</span>
</div>
</div>
{/* List Item 2 */}
<div className="p-4 border-b border-border-dark hover:bg-white/5 cursor-pointer transition-colors border-l-2 border-l-transparent">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of James Rothschild" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6FB6fWAPamLblnZlYftAGZES91TeRIeM8FyZRG8sZKJx-2xgzM5xkwRkdCPhJHBuG3qLkq8m0C2iM81drqniFBUSFqkR4q663FqSD1-U0mhc3OAMky2yxhmWVhN21UYbZOFeNtdE3p2b2u67d7sHl8VLnsGNXOcfdyCY8aiGvvZnzyQW2lZ8UXkw5SA7UooF8HsZ0v6ohBfNH49A1A7x79RK1thRQf7yIp-Zx4CYcvnUhZfuDNgTxN16Z_F_b7cyFkh16OhPlUQ')" }}></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white truncate">James Rothschild</h4>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold">Active</span>
</div>
<p className="text-xs text-text-muted truncate">james.rothschild@email.com</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-text-muted">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">payments</span> $12,800</span>
<span>Last active: 1d ago</span>
</div>
</div>
{/* List Item 3 */}
<div className="p-4 border-b border-border-dark hover:bg-white/5 cursor-pointer transition-colors border-l-2 border-l-transparent">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of Elena Medici" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs2qNHZc1Mj7NEiw5WcJoOK_jhV5u07bBR4Zo5-nUZOMdMUEh6JoXJqzIfYTMINqYFSwZ4dBBJTOXehfTLdhV_jTM4dStwPm-B4p3sA53B6JxsZsXYSyGz0I2duEY8CZca2XrDTfVmcH_aF_NkWx2tWh9PN8pXnOU1hovbbquxRaS5GkGo1cucN-1bXsbWHZ8IVpF0fnm8hQ_deLfxiWNzFwq22as-QQ8tv-0hnZjxATE70GWrLPhhXaUiUdQqDBDghqrpwIkt6A')" }}></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white truncate">Elena Medici</h4>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-bold">Lead</span>
</div>
<p className="text-xs text-text-muted truncate">elena.medici@email.com</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-text-muted">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">payments</span> $0</span>
<span>Last active: 5d ago</span>
</div>
</div>
{/* List Item 4 */}
<div className="p-4 border-b border-border-dark hover:bg-white/5 cursor-pointer transition-colors border-l-2 border-l-transparent">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of Chen Wei" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA23M0pJEvjO7Z1bEjfJHqpVIYHauZ8J91KLUvlVhmtEIarEeIjTXYHegffwXa59JgFtXVk1nMZejQO9XM988YMCmzT5_JmS-w5yjbFYEwQDm5lJ3RgT-gDBQxrCsW7Qe_xgCyIZAvDSt8PDx6mdwgoPY-H38Viw7V1bOIL3KYGyvisrByyAOOZgaNtAeXBGr4V2QG8HIr5_2Rz0Z6XYoIfDcl3MvCozAqdZb1whTRIL4iWT1ZS-urdpKoWJntzzzAepE6u_47iRQ')" }}></div>
<div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-surface-dark"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white truncate">Chen Wei</h4>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-bold">VIP</span>
</div>
<p className="text-xs text-text-muted truncate">chen.wei@email.com</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-text-muted">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">payments</span> $88,500</span>
<span>Last active: 1w ago</span>
</div>
</div>
</div>
</div>
</div>
{/* Right Column: Detail View */}
<div className="col-span-12 xl:col-span-8 h-full flex flex-col gap-6 overflow-y-auto pr-2">
{/* Profile Header Card */}
<div className="bg-surface-dark rounded-xl border border-border-dark p-6 relative overflow-hidden group">
{/* Background Pattern/Gradient */}
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
<div className="relative">
<div className="h-24 w-24 md:h-28 md:w-28 rounded-xl bg-cover bg-center shadow-xl ring-4 ring-surface-dark" data-alt="Detailed portrait of Alice Vanderbilt" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuduJmQa2t58Lk6_EPjqDdUjlndcfGwxLM7v6rgjOXOy5GKX_abrnDa8LONoVFxu0D9QwZUFK4FbVU4ANavrEobPji1tywCSX_l4Wmjo9Mqb9MFuDlqU8bfFjpJ2dGlts7Hy10n6F0TxTn1LlIlxQjfPc5f1AejxsA8I_N2ffgwMrGiWjmFZeARPRlk6YfWa0HOIWNZYJwavwVWzRDxoryNb1L4EEqAXlCEFCtPSuJ_HtfW_psNM0Uf__sCsJAFmj71O1qjQHxLQ')" }}></div>
<div className="absolute -bottom-2 -right-2 bg-surface-dark p-1 rounded-full">
<div className="bg-emerald-500 h-4 w-4 rounded-full border-2 border-surface-dark"></div>
</div>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="text-2xl font-bold text-white">Alice Vanderbilt</h2>
<span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold uppercase tracking-wider shadow-sm">VIP Platinum</span>
</div>
<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">location_on</span> New York, USA</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">cake</span> Oct 24, 1985</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">schedule</span> Local Time: 09:42 AM</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-light/5 hover:bg-surface-light/10 text-white text-sm font-medium transition-colors border border-white/10">
<span className="material-symbols-outlined text-[18px]">edit</span>
                                                Edit
                                            </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[18px]">mail</span>
                                                Email
                                            </button>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-6">
<div className="p-3 rounded-lg bg-background-dark border border-border-dark">
<p className="text-xs text-text-muted mb-1">Total Spent</p>
<p className="text-lg font-bold text-white">$45,200</p>
</div>
<div className="p-3 rounded-lg bg-background-dark border border-border-dark">
<p className="text-xs text-text-muted mb-1">Bookings</p>
<p className="text-lg font-bold text-white">12</p>
</div>
<div className="p-3 rounded-lg bg-background-dark border border-border-dark">
<p className="text-xs text-text-muted mb-1">Avg. Stay</p>
<p className="text-lg font-bold text-white">5.4 Nights</p>
</div>
</div>
</div>
</div>
</div>
{/* Stats & Info Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Preferences */}
<div className="bg-surface-dark rounded-xl border border-border-dark p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-bold text-white">Travel Preferences</h3>
<span className="material-symbols-outlined text-text-muted">tune</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">First Class Only</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">Vegan Meals</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">Private Transfer</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">Pet Friendly</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">Late Checkout</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-text-muted border border-border-dark">High Floor</span>
</div>
<div className="mt-6">
<p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">Notes</p>
<p className="text-sm text-white leading-relaxed">Client prefers modern architecture hotels. Allergic to peanuts. Usually travels with spouse and 1 small dog. Prefers communication via email over phone calls.</p>
</div>
</div>
{/* Communication Log */}
<div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-bold text-white">Recent Activity</h3>
<button className="text-xs text-primary font-medium hover:underline">View All</button>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-1 max-h-[220px]">
<div className="flex gap-3">
<div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-emerald-500"></div>
<div>
<p className="text-sm text-white font-medium">Email Opened: "Your upcoming trip to Kyoto"</p>
<p className="text-xs text-text-muted mt-0.5">Today, 10:30 AM</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500"></div>
<div>
<p className="text-sm text-white font-medium">Booking Confirmed #WL-8892</p>
<p className="text-xs text-text-muted mt-0.5">Yesterday, 4:15 PM</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-text-muted"></div>
<div>
<p className="text-sm text-white font-medium">Invoice Sent #INV-2023-001</p>
<p className="text-xs text-text-muted mt-0.5">Oct 12, 2:00 PM</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-text-muted"></div>
<div>
<p className="text-sm text-white font-medium">Updated Preferences</p>
<p className="text-xs text-text-muted mt-0.5">Oct 05, 11:20 AM</p>
</div>
</div>
</div>
</div>
</div>
{/* Booking History */}
<div className="bg-surface-dark rounded-xl border border-border-dark p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold text-white">Booking History</h3>
<button className="flex items-center gap-1 text-sm text-text-muted hover:text-white transition-colors">
                                    Filter <span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-text-muted text-xs uppercase tracking-wider border-b border-border-dark">
<th className="pb-3 pl-2 font-medium">Destination</th>
<th className="pb-3 font-medium">Dates</th>
<th className="pb-3 font-medium">Type</th>
<th className="pb-3 font-medium">Status</th>
<th className="pb-3 font-medium text-right pr-2">Amount</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-border-dark hover:bg-white/5 transition-colors group">
<td className="py-4 pl-2">
<div className="flex items-center gap-3">
<div className="h-10 w-14 rounded bg-cover bg-center" data-alt="Kyoto traditional street" data-location="Kyoto, Japan" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3boOYVrR1n0H6uoqOD2LfJwHLRQEgSY3MhagWxxKofUfsAEY8jJsuwea18cx3q5UE2utYGNY1W6oxgh7DBDwyWkR_2vBOHqpWTedgQYAhUDiECdNEtDUgwKHcF9CqyBCcCj7CANLtAcDBEnKDEAuJKgj_1bs4lrHEMR9LTrcA16nL3jN64GEnNKUagaEoZjDM1yzxCk1-_78gHplYBNoiSM8tI7rhifX1ee_PDlKhfOYad3yismWuZ8QrZpNr7YVejzRiShx8Mw')" }}></div>
<div>
<p className="font-bold text-white">Kyoto, Japan</p>
<p className="text-xs text-text-muted">Aman Kyoto</p>
</div>
</div>
</td>
<td className="py-4 text-text-muted">Oct 20 - Oct 25, 2023</td>
<td className="py-4 text-text-muted">Leisure</td>
<td className="py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Upcoming</span>
</td>
<td className="py-4 text-right pr-2 font-medium text-white">$12,450</td>
</tr>
<tr className="border-b border-border-dark hover:bg-white/5 transition-colors group">
<td className="py-4 pl-2">
<div className="flex items-center gap-3">
<div className="h-10 w-14 rounded bg-cover bg-center" data-alt="Maldives resort overwater bungalow" data-location="Maldives" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdVK9qXAXFMbLsRvUu0coXmt3aq45ZhRtTjUJ3RmDlcvvO5vNZLaJ3KY-sOT5aki81_W4Vq2P2oTTQtfKbv5-ug-bbXxbRZxOAQum2WSSGOM6XiDIMkGasBkscC3fc-eUhQHEP3vnZtoCF0rEo6adXZ2n09-Ehq6bF40AeUUJpvKIC5r0FtjHEgNult_jUlPe2kV3pXxlnUgvMGLeuSlOfbo_bypjjiGfYQ5F8ZTuR1O05GK_2ApGiefuG45bB5SaVuvPZc5K5fg')" }}></div>
<div>
<p className="font-bold text-white">Maldives</p>
<p className="text-xs text-text-muted">Soneva Jani</p>
</div>
</div>
</td>
<td className="py-4 text-text-muted">Aug 15 - Aug 22, 2023</td>
<td className="py-4 text-text-muted">Honeymoon</td>
<td className="py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Completed</span>
</td>
<td className="py-4 text-right pr-2 font-medium text-white">$28,900</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 pl-2">
<div className="flex items-center gap-3">
<div className="h-10 w-14 rounded bg-cover bg-center" data-alt="Paris city street with Eiffel Tower view" data-location="Paris, France" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx48um9kPtux1-ffmE_fvtWjTx959Spt-P27lKHgcpLysuArbGo6qiePQxKfqDHNQyfp3t1lSXzZDk20-sbouUtRDncVxZO9OuhgUfumiBm-IlFHl4UMW2igpOZrYKGwyBaA7AWC1KAju8_KiZ16pJ0_Lr6m-bHGEjf6jLD9NUR-qrqc81Q38FvMLdv13PyANKnGM0ZHtfJJSPTx8E9Xpf9WOTUzjmVvBjETHL4ES6qWR0AzW6Kn1K62VBKCz9Jci_B_Wd70bL6Q')" }}></div>
<div>
<p className="font-bold text-white">Paris, France</p>
<p className="text-xs text-text-muted">Ritz Paris</p>
</div>
</div>
</td>
<td className="py-4 text-text-muted">Jun 10 - Jun 14, 2023</td>
<td className="py-4 text-text-muted">Business</td>
<td className="py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Completed</span>
</td>
<td className="py-4 text-right pr-2 font-medium text-white">$3,850</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
