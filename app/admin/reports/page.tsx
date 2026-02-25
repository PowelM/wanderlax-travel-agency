"use client";
 
 
import React from 'react';
import { useUser } from '@clerk/nextjs';

export default function WanderluxAdminReportsAnalyticsPage() {
  const { user } = useUser();
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full flex-col">
{/* Layout Container */}
<div className="flex h-full grow flex-col">
{/* Header */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-darker bg-background-dark px-6 py-3 lg:px-10">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-white">
<div className="size-8 flex items-center justify-center rounded bg-primary/20 text-primary">
<span className="material-symbols-outlined text-2xl">travel_explore</span>
</div>
<h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Wanderlux Admin</h2>
</div>
{/* Search Bar */}
<label className="hidden md:flex flex-col min-w-40 h-10 w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
<div className="text-text-secondary flex border-none bg-surface-darker items-center justify-center pl-4 pr-2">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-none bg-surface-darker focus:border-none h-full placeholder:text-text-secondary px-2 text-sm font-normal leading-normal" placeholder="Search..." value=""/>
</div>
</label>
</div>
<div className="flex items-center justify-end gap-6">
<button className="relative text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 size-2 bg-primary rounded-full"></span>
</button>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-medium text-white">{user?.fullName || 'Admin User'}</p>
<p className="text-xs text-text-secondary">Admin</p>
</div>
<div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-surface-darker" data-alt="Profile picture of administrator" style={{ backgroundImage: `url('${user?.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlaj4eLp_oNwAb5Vw5QN9CKwUsKiSVrlWPX6ngyfjy_NtIRSJc-DDJl_365AeZt2QFN2vXU_KCe7k2nHsGMyVNTmuvRXeBECyBmgVwfRcZlQA_BuZeC-V-3iHbDJpf6czlRLJjxZ0ocdqVFFGzlSEVwFHzDcrUMvc4-kEguDtDlApLTcrAYpkLUnZZokwVztXBG0yvc8AlbzX8tCFJJpnIBtdO6Iu2_8sAKChra6KrfwH7DRgoPM3h0ehpn_APiktHsXxQT-rTXQ'}')` }}></div>
<button className="flex items-center justify-center size-8 rounded-lg bg-surface-darker text-text-secondary hover:text-primary transition-colors ml-2">
<span className="material-symbols-outlined text-xl">logout</span>
</button>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">
{/* Sidebar */}
<aside className="hidden lg:flex w-64 flex-col border-r border-surface-darker bg-background-dark p-4 gap-4 overflow-y-auto">
{/* Sidebar Navigation */}
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-surface-darker hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">dashboard</span>
<p className="text-sm font-medium leading-normal">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-surface-darker hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">calendar_month</span>
<p className="text-sm font-medium leading-normal">Bookings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-surface-darker hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">group</span>
<p className="text-sm font-medium leading-normal">Clients</p>
</a>
{/* Active State */}
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface-darker text-white" href="#">
<span className="material-symbols-outlined text-2xl text-primary">bar_chart</span>
<p className="text-sm font-medium leading-normal">Reports</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-surface-darker hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">flight_takeoff</span>
<p className="text-sm font-medium leading-normal">Packages</p>
</a>
</nav>
<div className="mt-auto flex flex-col gap-2 border-t border-surface-darker pt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-surface-darker hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">settings</span>
<p className="text-sm font-medium leading-normal">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-darker hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">help</span>
<p className="text-sm font-medium leading-normal">Support</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary/80 hover:bg-surface-darker hover:text-primary transition-colors group mt-2" href="/portal/dashboard">
<span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">switch_account</span>
<p className="text-sm font-medium leading-normal">User Dashboard</p>
</a>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col overflow-y-auto bg-background-dark p-4 lg:p-8 gap-8">
{/* Page Header & Date Picker */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-2">
<h1 className="text-white text-3xl font-bold tracking-tight">Reports &amp; Analytics</h1>
<p className="text-text-secondary text-base">Overview of platform performance and booking metrics</p>
</div>
{/* Date Ranges */}
<div className="flex bg-surface-darker p-1 rounded-lg overflow-x-auto max-w-full no-scrollbar">
<button className="px-4 py-1.5 rounded text-sm font-medium text-text-secondary hover:text-white whitespace-nowrap">7 Days</button>
<button className="px-4 py-1.5 rounded text-sm font-medium text-white bg-background-dark shadow-sm whitespace-nowrap">30 Days</button>
<button className="px-4 py-1.5 rounded text-sm font-medium text-text-secondary hover:text-white whitespace-nowrap">This Month</button>
<button className="px-4 py-1.5 rounded text-sm font-medium text-text-secondary hover:text-white whitespace-nowrap">Last Quarter</button>
<div className="w-px h-5 bg-text-secondary/20 mx-1 my-auto"></div>
<button className="px-4 py-1.5 rounded text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 whitespace-nowrap">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                                Custom
                            </button>
</div>
</div>
{/* Metrics Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/* Card 1 */}
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-darker border border-surface-darker hover:border-surface-dark transition-colors">
<div className="flex items-center justify-between">
<p className="text-text-secondary text-sm font-medium">Total Revenue</p>
<span className="material-symbols-outlined text-text-secondary">payments</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-white text-3xl font-bold tracking-tight">$4.25M</p>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
<p className="text-green-500 text-sm font-medium">+12.5%</p>
<p className="text-text-secondary text-xs ml-1">vs last month</p>
</div>
</div>
{/* Card 2 */}
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-darker border border-surface-darker hover:border-surface-dark transition-colors">
<div className="flex items-center justify-between">
<p className="text-text-secondary text-sm font-medium">Active Bookings</p>
<span className="material-symbols-outlined text-text-secondary">confirmation_number</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-white text-3xl font-bold tracking-tight">842</p>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
<p className="text-green-500 text-sm font-medium">+5.2%</p>
<p className="text-text-secondary text-xs ml-1">vs last month</p>
</div>
</div>
{/* Card 3 */}
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-darker border border-surface-darker hover:border-surface-dark transition-colors">
<div className="flex items-center justify-between">
<p className="text-text-secondary text-sm font-medium">Avg. Order Value</p>
<span className="material-symbols-outlined text-text-secondary">shopping_bag</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-white text-3xl font-bold tracking-tight">$5,050</p>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-primary text-sm">trending_down</span>
<p className="text-primary text-sm font-medium">-2.1%</p>
<p className="text-text-secondary text-xs ml-1">vs last month</p>
</div>
</div>
{/* Card 4 */}
<div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-darker border border-surface-darker hover:border-surface-dark transition-colors">
<div className="flex items-center justify-between">
<p className="text-text-secondary text-sm font-medium">Client Satisfaction</p>
<span className="material-symbols-outlined text-text-secondary">star</span>
</div>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-white text-3xl font-bold tracking-tight">4.9/5</p>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-text-secondary text-sm">remove</span>
<p className="text-text-secondary text-sm font-medium">0.0%</p>
<p className="text-text-secondary text-xs ml-1">vs last month</p>
</div>
</div>
</div>
{/* Charts Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Main Bar Chart */}
<div className="lg:col-span-2 rounded-xl bg-surface-darker p-6 border border-surface-darker">
<div className="flex items-center justify-between mb-6">
<h3 className="text-white text-lg font-bold">Top Destinations by Revenue</h3>
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
{/* Simulated Chart Container */}
<div className="relative h-64 w-full flex items-end justify-between gap-2 px-2">
{/* Y-axis lines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
{/* Bars */}
<div className="relative z-10 w-full flex items-end justify-around h-full pt-4">
<div className="group flex flex-col items-center gap-2 w-12 h-full justify-end cursor-pointer">
<div className="w-full bg-primary/20 rounded-t-sm h-[60%] group-hover:bg-primary/40 transition-all relative">
<div className="absolute bottom-0 w-full bg-primary h-[80%] rounded-t-sm"></div>
</div>
<span className="text-xs text-text-secondary">Paris</span>
</div>
<div className="group flex flex-col items-center gap-2 w-12 h-full justify-end cursor-pointer">
<div className="w-full bg-primary/20 rounded-t-sm h-[85%] group-hover:bg-primary/40 transition-all relative">
<div className="absolute bottom-0 w-full bg-primary h-[90%] rounded-t-sm"></div>
</div>
<span className="text-xs text-text-secondary font-medium text-white">Tokyo</span>
</div>
<div className="group flex flex-col items-center gap-2 w-12 h-full justify-end cursor-pointer">
<div className="w-full bg-primary/20 rounded-t-sm h-[45%] group-hover:bg-primary/40 transition-all relative">
<div className="absolute bottom-0 w-full bg-primary h-[70%] rounded-t-sm"></div>
</div>
<span className="text-xs text-text-secondary">Dubai</span>
</div>
<div className="group flex flex-col items-center gap-2 w-12 h-full justify-end cursor-pointer">
<div className="w-full bg-primary/20 rounded-t-sm h-[70%] group-hover:bg-primary/40 transition-all relative">
<div className="absolute bottom-0 w-full bg-primary h-[60%] rounded-t-sm"></div>
</div>
<span className="text-xs text-text-secondary">New York</span>
</div>
<div className="group flex flex-col items-center gap-2 w-12 h-full justify-end cursor-pointer">
<div className="w-full bg-primary/20 rounded-t-sm h-[50%] group-hover:bg-primary/40 transition-all relative">
<div className="absolute bottom-0 w-full bg-primary h-[50%] rounded-t-sm"></div>
</div>
<span className="text-xs text-text-secondary">London</span>
</div>
<div className="group flex flex-col items-center gap-2 w-12 h-full justify-end cursor-pointer">
<div className="w-full bg-primary/20 rounded-t-sm h-[40%] group-hover:bg-primary/40 transition-all relative">
<div className="absolute bottom-0 w-full bg-primary h-[40%] rounded-t-sm"></div>
</div>
<span className="text-xs text-text-secondary">Rome</span>
</div>
</div>
</div>
</div>
{/* Donut Chart */}
<div className="col-span-1 rounded-xl bg-surface-darker p-6 border border-surface-darker">
<h3 className="text-white text-lg font-bold mb-6">Revenue by Service</h3>
<div className="flex flex-col items-center justify-center h-64 gap-6">
{/* Simulated Donut Chart using Conic Gradient */}
<div className="size-40 rounded-full relative bg-surface-darker" style={{ background: "conic-gradient(#c61010 0% 45%, #e14d4d 45% 70%, #ff8a8a 70% 90%, #392828 90% 100%)" }}>
<div className="absolute inset-4 rounded-full bg-surface-darker flex items-center justify-center flex-col z-10">
<p className="text-2xl font-bold text-white">45%</p>
<p className="text-xs text-text-secondary">Hotels</p>
</div>
</div>
{/* Legend */}
<div className="w-full grid grid-cols-2 gap-y-3 gap-x-2">
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-primary"></div>
<p className="text-sm text-text-secondary">Luxury Hotels</p>
</div>
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-[#e14d4d]"></div>
<p className="text-sm text-text-secondary">Private Jets</p>
</div>
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-[#ff8a8a]"></div>
<p className="text-sm text-text-secondary">Yacht Charters</p>
</div>
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-surface-dark"></div>
<p className="text-sm text-text-secondary">Concierge</p>
</div>
</div>
</div>
</div>
</div>
{/* Data Table */}
<div className="rounded-xl bg-surface-darker border border-surface-darker overflow-hidden">
<div className="p-6 border-b border-surface-darker/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="text-white text-lg font-bold">Monthly Performance Stats</h3>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg border border-surface-dark bg-transparent text-text-secondary text-sm hover:text-white hover:border-text-secondary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">filter_list</span>
                                    Filter
                                </button>
<button className="px-3 py-1.5 rounded-lg border border-surface-dark bg-transparent text-text-secondary text-sm hover:text-white hover:border-text-secondary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">download</span>
                                    Export
                                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-darker/50 bg-white/5">
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Destination</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Bookings</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Revenue</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Avg. Rating</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Status</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-darker/50 text-sm">
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="Tokyo cityscape at night" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjbgm2F_YrvzC8rOKAHy-dF8pwmb4Q3-y4h3Wc6jzvvOvQ78PowqemDsEiiPZ5dpIyRxNE6J5uejGXMfrgUVHxHGr50z8BY_Dchw8YLYg0CjZ0spIBd_sb8C8zAtW5TJKsVdZTdzKcn00RmNRjy45oBxvpPOhfdW2V2d9cnohu5RE9uafPSTQUfhfqLi3_Fp1vvekfxF9jEPXC8lq8VBG5wZ0dnrTs0koHNnPeJB4tx_BzzfLBal0N_c3ENqOrAr5Dee0Tmv6jRw')" }}></div>
<div>
<p className="font-medium text-white">Tokyo, Japan</p>
<p className="text-xs text-text-secondary">Asia Pacific</p>
</div>
</div>
</td>
<td className="p-4 text-white font-medium">124</td>
<td className="p-4 text-white font-medium">$842,000</td>
<td className="p-4">
<div className="flex items-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-white text-sm">4.9</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 border border-green-500/20">
<span className="size-1.5 rounded-full bg-green-500"></span>
                                                Trending
                                            </span>
</td>
<td className="p-4 text-right">
<button className="text-text-secondary hover:text-white">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="Paris Eiffel Tower view" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvsWDsLjO1lLfTXhLCnroC6T4w2888_Nt9Kpxqn9MpY5P6g7dj4CRZ2O0d8B1-baF90uqPyM8g0zDm19Xl41cCFM9KfgG5mReHpdU1VhoS_Gou8fIsOhXOPzGhUIYoAdTfvSZz9ndR33rtyjWJzuJHbtvVX95q5KQ0em7UjMdI0ax_IrDqMM-8rO31QaD906KG7lhthEOe3BeJRhI0ssYP7eMeb0M5HQMoggmH6c2Y8PpDZg7jJBZ-lNC8suCoqH3Xarari_zrtA')" }}></div>
<div>
<p className="font-medium text-white">Paris, France</p>
<p className="text-xs text-text-secondary">Europe</p>
</div>
</div>
</td>
<td className="p-4 text-white font-medium">98</td>
<td className="p-4 text-white font-medium">$620,500</td>
<td className="p-4">
<div className="flex items-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-white text-sm">4.7</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500 border border-blue-500/20">
<span className="size-1.5 rounded-full bg-blue-500"></span>
                                                Stable
                                            </span>
</td>
<td className="p-4 text-right">
<button className="text-text-secondary hover:text-white">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="Dubai Burj Khalifa view" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWwZGnAQ92WpjZ0kr30gJgv9R3lFruHyUFLri56-QxOjo3lJxAvC0DjhPP16bpexwTmlLo2axyCbrWAs0k2ycozGjh0reJCJn9g6oF25ZlN6wakcP_o5bw0MA1hi_HiOO0cX3T8p-wnKq-859rqdRCQI3jhEYdeYJ-CipK1GPC8HR-lF5ntkFIIbKuT41mw3TXto0-IG_JPTI1U8heMleDy47Ttt7CvwANlYNVZDBgUEbeP7eJAOG7ssoAwGhc8Vrsxhvo_hkt7w')" }}></div>
<div>
<p className="font-medium text-white">Dubai, UAE</p>
<p className="text-xs text-text-secondary">Middle East</p>
</div>
</div>
</td>
<td className="p-4 text-white font-medium">85</td>
<td className="p-4 text-white font-medium">$580,000</td>
<td className="p-4">
<div className="flex items-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-white text-sm">4.8</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary border border-primary/20">
<span className="size-1.5 rounded-full bg-primary"></span>
                                                Hot
                                            </span>
</td>
<td className="p-4 text-right">
<button className="text-text-secondary hover:text-white">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-cover bg-center" data-alt="New York skyline" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUKDcto6LAw8jzGqNPqe4q_gQL1mtxbktXz9_bWoXbWaEC6igK2PlyCVdSzk4OgHuTvTFQmExx6rc5sBOWdY-SZOPndkO3J2XCR7dC-5AmVWr9bxD10jBNj-eVzutveakxYqxTPoNFGulB_H7dHx61_riOyCWG41evUlya5gM8EPNzER1PHwFp5VnqKsTG-ud6N3FjZHtRVlg_Z97zYObIUEbmn-U1f4qeWfXhND68bXfZh0hbv87yGYa1rCoWjQCruWx0nWSC6A')" }}></div>
<div>
<p className="font-medium text-white">New York, USA</p>
<p className="text-xs text-text-secondary">North America</p>
</div>
</div>
</td>
<td className="p-4 text-white font-medium">156</td>
<td className="p-4 text-white font-medium">$920,400</td>
<td className="p-4">
<div className="flex items-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-white text-sm">4.6</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2 py-1 text-xs font-medium text-orange-500 border border-orange-500/20">
<span className="size-1.5 rounded-full bg-orange-500"></span>
                                                Review
                                            </span>
</td>
<td className="p-4 text-right">
<button className="text-text-secondary hover:text-white">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
</div>
</div>
    </div>
  );
}
