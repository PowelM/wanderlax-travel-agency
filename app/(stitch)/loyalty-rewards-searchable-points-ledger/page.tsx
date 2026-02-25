"use client";
 
 
import React from 'react';

export default function LoyaltyRewardsSearchablePointsLedgerPage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* TopNavBar */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4 md:px-20 lg:px-40 sticky top-0 bg-black/80 backdrop-blur-md z-40">
<div className="flex items-center gap-3 text-white">
<div className="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-white text-xl font-bold leading-tight tracking-tight uppercase italic">Wanderlux</h2>
</div>
<div className="flex gap-4">
<button className="flex items-center justify-center rounded-full h-10 w-10 bg-white/5 hover:bg-white/10 text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex items-center justify-center rounded-full h-10 w-10 bg-white/5 hover:bg-white/10 text-white transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
<main className="flex-1 px-6 md:px-20 lg:px-40 py-12">
{/* Hero Section: User Status */}
<section className="mb-16">
<div className="flex flex-col md:flex-row items-center gap-8 glass-card p-10 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<span className="material-symbols-outlined text-[120px] text-primary">diamond</span>
</div>
<div className="relative z-10">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-2 border-primary" data-alt="Portrait of a professional man in a suit" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeM6xKTvg88oYOVLkgOhVJNDPxCcKqpOYCCLOVcQbKlfbNz0Wza3qDx6Cjyfy8Z710NdSv4Er5sFTDKa4TaoUvIf5w_VgC6uYXgSdbsLwyl9iObPmc4FUfR6xWbASG4VNQjZgArIBOpo3R2afH21XzN5-ID3jRpvKNmEUQNp1xK_EqIsY8q-puHHhgNYZqd4wqLi0tGtLllSREcdgKAdjZyezFC_lB8iIx2iQyhkfSYd4oQ0qWQQCimOtREI5mx1tE-x6BFVa4Mw')" }}></div>
</div>
<div className="flex-1 flex flex-col gap-4 text-center md:text-left relative z-10">
<div>
<h1 className="text- editorial text-5xl font-bold text-white mb-2 uppercase italic tracking-tighter">Emerald Tier</h1>
<p className="text-slate-400 text-lg">Elite Status • Member since 2021</p>
</div>
<div className="w-full max-w-md">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-slate-300">Points to Diamond Level</span>
<span className="text-sm font-bold text-white">8,500 / 10,000</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
</div>
<p className="text-xs text-slate-500 mt-2">Just 1,500 points remaining to unlock Diamond benefits</p>
</div>
</div>
<div className="flex flex-col gap-3 relative z-10 min-w-[200px]">
<button className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all uppercase tracking-widest text-sm">Redeem Points</button>
<button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 transition-all uppercase tracking-widest text-sm">View Activity</button>
</div>
</div>
</section>
{/* How to Earn Section */}
<section className="mb-20">
<div className="flex flex-col gap-8">
<div className="border-l-4 border-primary pl-6">
<h2 className="text-3xl font-bold text-white uppercase tracking-tight">How to Earn</h2>
<p className="text-slate-400">Maximize your rewards on every luxury booking</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-4xl">travel_explore</span>
<h3 className="text-xl font-bold text-white uppercase italic">Bespoke Tours</h3>
<p className="text-slate-400">Earn 10 points for every $1 spent on curated global experiences.</p>
</div>
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-4xl">hotel</span>
<h3 className="text-xl font-bold text-white uppercase italic">Luxury Hotels</h3>
<p className="text-slate-400">Earn 5 points for every $1 spent on partner 5-star accommodations.</p>
</div>
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-4xl">directions_car</span>
<h3 className="text-xl font-bold text-white uppercase italic">Elite Transport</h3>
<p className="text-slate-400">Earn 3 points for every $1 spent on chauffeur and car hires.</p>
</div>
</div>
</div>
</section>
{/* Tier Benefits Comparison */}
<section className="mb-20">
<div className="border-l-4 border-primary pl-6 mb-8">
<h2 className="text-3xl font-bold text-white uppercase tracking-tight">Tier Benefits</h2>
</div>
<div className="overflow-x-auto rounded-xl glass-card">
<table className="w-full text-left min-w-[800px]">
<thead>
<tr className="border-b border-white/10 bg-white/5">
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Benefit</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-300">Silver</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-300">Gold</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-300">Platinum</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-primary italic">Emerald</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="p-6 font-medium text-white">Concierge Access</td>
<td className="p-6 text-slate-500 text-sm">Online only</td>
<td className="p-6 text-slate-400 text-sm">24/7 Phone</td>
<td className="p-6 text-slate-400 text-sm">Priority Support</td>
<td className="p-6 text-white text-sm font-bold italic">Personal Assistant</td>
</tr>
<tr>
<td className="p-6 font-medium text-white">Private Jet Upgrades</td>
<td className="p-6 text-slate-500 text-sm">None</td>
<td className="p-6 text-slate-500 text-sm">Discounted</td>
<td className="p-6 text-slate-400 text-sm">Annual Credit</td>
<td className="p-6 text-white text-sm font-bold italic">Unlimited Priority</td>
</tr>
<tr>
<td className="p-6 font-medium text-white">Luxury Chauffeur</td>
<td className="p-6 text-slate-500 text-sm">None</td>
<td className="p-6 text-slate-400 text-sm">Airport Only</td>
<td className="p-6 text-slate-400 text-sm">Airport &amp; Hotel</td>
<td className="p-6 text-white text-sm font-bold italic">Global On-Demand</td>
</tr>
<tr>
<td className="p-6 font-medium text-white">Exclusive Events</td>
<td className="p-6 text-slate-500 text-sm">Newsletter</td>
<td className="p-6 text-slate-400 text-sm">Advance Booking</td>
<td className="p-6 text-slate-400 text-sm">VIP Seating</td>
<td className="p-6 text-white text-sm font-bold italic">Backstage Pass</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* Rewards Gallery */}
<section className="mb-20">
<div className="border-l-4 border-primary pl-6 mb-8 flex justify-between items-end">
<div>
<h2 className="text-3xl font-bold text-white uppercase tracking-tight">Rewards Gallery</h2>
<p className="text-slate-400">Exclusive experiences for your consideration</p>
</div>
<button className="text-primary font-bold uppercase tracking-widest text-sm hover:underline">View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group relative overflow-hidden rounded-xl h-[400px]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Romantic private dinner on a tropical beach at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBkBfgSC0DVPsZCKcVmSMad2SojG-3-6tcFkV20PaFn78r-JmOi3q_CGj_2jTf-QpzeL9RypY6awSQIHRW8KrIpau-c2RR4hVxxNAHWbAf9S_aI4FemWwROj6UIEinDJD0ywottZbb6rnmd0BT-eXjOs7DPF6VP4I-Q_tbcwmhDxTth7omSg39wVhtiJNdNlZ_wHI93E4vV5VkUfCfkvKyXL3TjNCTu3Nc9pCVSu1TCL77F6D5ScKYzN8lADlOV8wfcXxHv1F1Rw')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
<span className="bg-primary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest self-start">50,000 Points</span>
<h3 className="text-2xl font-bold text-white uppercase italic">Private Island Dinner</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">A secluded 5-course feast under the stars in the Maldives.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl h-[400px]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Luxury helicopter flying over a mountain range" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5tqPb7TrLWrf8jEiY1rM6KyIgTYtzc9xc7VGR9whCa7T1ELsmZK6y2ujh-bsbWpcz-0QWTCysEFxlqL4zxLeYWwVVJ6gD2UGAII2pzdLi7PhayJaSYhwxNuQ3zXAkOZVOvdkkbKTU3GkT_raJy-24axed9efMhgh6UO_xNlXxBeubV4z4KJT33L87_24NNl4NaMMAln59qIm5dE_P0rWdtwP0CETcGhJHffR92zROVOQwrVjY6oO6llzWLL5a5JjnFe4VaNNQUA')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
<span className="bg-primary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest self-start">25,000 Points</span>
<h3 className="text-2xl font-bold text-white uppercase italic">Helicopter Transfer</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Avoid the traffic with a panoramic flight to your destination.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl h-[400px]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Infinity pool overlooking the Mediterranean sea" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6BP5gjw_VqHIMjWFb9-XQqNo1vJ9e0dg2jNngjIWcm_4RA-gEsr4PmJjoo7837aCJsnL035GTQyxhPhxgyDf2xPn4FLBt5epeEFOI58NyPpbX7mkLpJ2_ecUQZ3Lfjl3wRvaF86jT_DXHVv1tBG2hhGPzwI3OpFhX7DC89AOpVKTnK7J6vUGJuqVsTNCqeeJbCVpQacz1uVfoQKeM2U8Uz1l7yRUVTKTNnxq8gF0ahW4lY-m_a4jUpQongqPENt8XG1ASgb2uNw')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
<span className="bg-primary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest self-start">75,000 Points</span>
<h3 className="text-2xl font-bold text-white uppercase italic">Royal Suite Stay</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Two nights in the flagship suite of our Amalfi Coast partner.</p>
</div>
</div>
</div>
</section><section className="mb-20">
<div className="border-l-4 border-primary pl-6 mb-8">
<h2 className="text-3xl font-bold text-white uppercase tracking-tight">Points History</h2>
<p className="text-slate-400">Your recent earning and redemption activity</p>
</div><div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div className="flex flex-wrap gap-3">
<button className="px-6 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest transition-all hover:opacity-90">All</button>
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">Hotel</button>
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">Transport</button>
<button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">Bonus</button>
</div>
<div className="relative w-full md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
<input className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs font-bold tracking-widest text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors uppercase" placeholder="SEARCH TRANSACTIONS..." type="text"/>
</div>
</div>
<div className="overflow-x-auto rounded-xl glass-card">
<table className="w-full text-left min-w-[800px]">
<thead>
<tr className="border-b border-white/10 bg-white/5">
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Date</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Description</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Category</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Points</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="p-6 text-slate-400 text-sm">Oct 24, 2023</td>
<td className="p-6 font-medium text-white">Aman Tokyo Booking</td>
<td className="p-6">
<span className="px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px] uppercase font-bold tracking-widest">Hotel</span>
</td>
<td className="p-6 text-primary font-bold italic">+12,450</td>
<td className="p-6">
<div className="flex items-center gap-2">
<span className="size-1.5 rounded-full bg-green-500"></span>
<span className="text-slate-400 text-sm">Settled</span>
</div>
</td>
</tr>
<tr>
<td className="p-6 text-slate-400 text-sm">Oct 12, 2023</td>
<td className="p-6 font-medium text-white">Helicopter Transfer Redemption</td>
<td className="p-6">
<span className="px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px] uppercase font-bold tracking-widest">Transport</span>
</td>
<td className="p-6 text-slate-300 font-bold italic">-25,000</td>
<td className="p-6">
<div className="flex items-center gap-2">
<span className="size-1.5 rounded-full bg-green-500"></span>
<span className="text-slate-400 text-sm">Settled</span>
</div>
</td>
</tr>
<tr>
<td className="p-6 text-slate-400 text-sm">Oct 01, 2023</td>
<td className="p-6 font-medium text-white">Seasonal Loyalty Bonus</td>
<td className="p-6">
<span className="px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px] uppercase font-bold tracking-widest">Bonus</span>
</td>
<td className="p-6 text-primary font-bold italic">+5,000</td>
<td className="p-6">
<div className="flex items-center gap-2">
<span className="size-1.5 rounded-full bg-amber-500"></span>
<span className="text-slate-400 text-sm">Pending</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* Support Footer */}
<footer className="mt-20 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-white/50 grayscale opacity-50">
<div className="size-4">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-sm font-bold leading-tight uppercase italic">Wanderlux</h2>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-500 uppercase tracking-widest">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Membership Terms</a>
<a className="hover:text-primary transition-colors" href="#">Concierge</a>
</div>
<p className="text-xs text-slate-600">© 2024 Wanderlux Travel Group. All rights reserved.</p>
</footer>
</main>
</div>
</div>
    </div>
  );
}
