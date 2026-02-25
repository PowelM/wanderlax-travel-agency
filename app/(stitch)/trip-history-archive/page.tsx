"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function TripHistoryArchivePage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
<div className="flex h-screen overflow-hidden">
{/* Sidebar Navigation */}
<aside className="w-72 flex-shrink-0 border-r border-slate-200 dark:border-border-dark flex flex-col justify-between bg-white dark:bg-black p-6 z-20">
<div className="flex flex-col gap-8">
<div className="flex items-center gap-3">
<div className="bg-primary rounded-full size-10 flex items-center justify-center text-white">
<span className="material-symbols-outlined">explore</span>
</div>
<div className="flex flex-col">
<h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">Wanderlux</h1>
<p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest mt-1">Premium Archive</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined">person</span>
<span className="text-sm font-semibold">Account</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined">shield_person</span>
<span className="text-sm font-semibold">Privacy</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm font-semibold">Billing</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary transition-colors" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span className="text-sm font-bold">Trip History</span>
</a>
</nav>
</div>
<div className="flex flex-col gap-4">
<div className="p-4 rounded-2xl bg-slate-100 dark:bg-border-dark/40 border border-slate-200 dark:border-border-dark">
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Member Tier</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Diamond Elite</span>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
</div>
<button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 dark:border-border-dark text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-base">logout</span>
                    Sign Out
                </button>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar relative">
<div className="max-w-5xl mx-auto px-8 py-12">
{/* Header Section */}
<header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Trip History</h2>
<p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">A curated archive of your exceptional journeys across the globe.</p>
</div>
<div className="flex items-center gap-2 border-b-2 border-primary/20 pb-2">
<button className="px-4 py-2 text-sm font-bold text-primary border-b-2 border-primary -mb-2.5">All Trips</button>
<button className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">Completed</button>
<button className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">Upcoming</button>
</div>
</header>
{/* Journey List */}
<div className="flex flex-col gap-10">
{/* Journey Card 1 */}
<article className="group relative flex flex-col lg:flex-row gap-8 bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-xl hover:border-primary/40 transition-all duration-500">
<div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Amalfi Coast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Cinematic view of the Amalfi Coast cliffs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8yFgf6CPJSPp1CnNXdtrf-RFZeRCGjHN91Kgmu6Gno1ZypluJ4FF_xDCKPCK0KrDWZebpPEOb8EKy7zN54W9ypVKDkgBHHynrEZxuEn41TtE4Uus5CisLa8NfcwfGwkowFoypurxSAg6aKl6EaX_riNB4jPOBdxDbvFvE2H5dsxHki430La3MDFW4PPcZH6y_FxFobUMHTmm4jxc_AwJupjl5NlilBqrMsDSfya0lReF3h7g_JVTik41VivFvuFmvRTme0mL46Q"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">Italy</span>
</div>
</div>
<div className="lg:w-3/5 p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight uppercase italic">Amalfi Coast Discovery</h3>
<span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-tighter rounded border border-green-500/20">Completed</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-sm font-medium">Sept 12 - Sept 20, 2023 • 8 Days</span>
</div>
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined text-sm">payments</span>
<span className="text-sm font-medium">Total: <span className="text-slate-900 dark:text-white font-bold">$12,450.00</span></span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-border-dark">
<button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
                                    View Itinerary
                                </button>
<button className="px-6 py-2.5 bg-slate-100 dark:bg-border-dark text-slate-700 dark:text-slate-300 text-xs font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                    Download PDF
                                </button>
<button className="px-6 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all ml-auto">
                                    Review Trip
                                </button>
</div>
</div>
</article>
{/* Journey Card 2 */}
<article className="group relative flex flex-col lg:flex-row gap-8 bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-xl hover:border-primary/40 transition-all duration-500">
<div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Venice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Venice canals with a luxury gondola" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNkTUOrEvi3TqD-98O6FwrVmngmvg8N0MRNXYNd5GbWLIHh7UR8XI9CUFFLxxqZwFPGK3YTpNZr1wxYkLPnkuhcJbdi_etzR9i1iQ4cSfCa3tpJiW69ElZLDSKJYtTtUc7pz91y0fHRaZ8wrsfOBeq5dg_wBUiq_5r0B0iDVsAqOa75PhoTTrnWASf9amYIKdoiQ5ViGWaiX3STa2p0CKQCaqCMqd35-fjmFDf2jwk13BSgKqKB1Bg90A2otkk9_EoHufxW-MQYQ"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">Italy</span>
</div>
</div>
<div className="lg:w-3/5 p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight uppercase italic">The Venice Serenade</h3>
<span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-tighter rounded border border-primary/20">Upcoming</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-sm font-medium">Dec 01 - Dec 07, 2023 • 6 Days</span>
</div>
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined text-sm">payments</span>
<span className="text-sm font-medium">Total: <span className="text-slate-900 dark:text-white font-bold">$8,200.00</span></span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-border-dark">
<button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
                                    View Itinerary
                                </button>
<button className="px-6 py-2.5 bg-slate-100 dark:bg-border-dark text-slate-700 dark:text-slate-300 text-xs font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                    Download PDF
                                </button>
</div>
</div>
</article>
{/* Journey Card 3 */}
<article className="group relative flex flex-col lg:flex-row gap-8 bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-xl hover:border-primary/40 transition-all duration-500">
<div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="India" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Taj Mahal during a soft sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpx9gPVij8yjf7celrnmKdQEhiAsrw-QS-Hfj6smq1rvab6NLJqP5ebhyJVQSgGr8XhsWPGKtU4-niVepLRc8D-ZragGa4EbNDpQ_xqqYb33865xXkv3eKWAumd6SdGAW84Y-1y-vD-6qaGYwHdKi4ESuBqJsIrR_G14ZXC1v2CNV9-lyroGROuJH7XdeDYzIVwuhWiES4DgO3zhBVE93mvAIsPMvh5QmBQO-reo0HsEruydNMfvfG46COctetONyYUH33noeAlA"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">India</span>
</div>
</div>
<div className="lg:w-3/5 p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight uppercase italic">Royal Rajasthan Heritage</h3>
<span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-tighter rounded border border-green-500/20">Completed</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-sm font-medium">May 10 - May 24, 2023 • 14 Days</span>
</div>
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined text-sm">payments</span>
<span className="text-sm font-medium">Total: <span className="text-slate-900 dark:text-white font-bold">$18,900.00</span></span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-border-dark">
<button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
                                    View Itinerary
                                </button>
<button className="px-6 py-2.5 bg-slate-100 dark:bg-border-dark text-slate-700 dark:text-slate-300 text-xs font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                    Download PDF
                                </button>
<button className="px-6 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all ml-auto">
                                    Review Trip
                                </button>
</div>
</div>
</article>
</div>
{/* Footer Stats (Subtle) */}
<footer className="mt-20 py-8 border-t border-slate-200 dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold">Wanderlux Archive © 2024</p>
<div className="flex gap-10">
<div className="text-center">
<p className="text-slate-900 dark:text-white text-xl font-black italic">24</p>
<p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">Total Trips</p>
</div>
<div className="text-center">
<p className="text-slate-900 dark:text-white text-xl font-black italic">12</p>
<p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">Countries</p>
</div>
<div className="text-center">
<p className="text-slate-900 dark:text-white text-xl font-black italic">$142k</p>
<p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">Total Spent</p>
</div>
</div>
</footer>
</div>
{/* Map Overlay Accent (Aesthetic) */}
<div className="fixed bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none z-0 overflow-hidden">
<img className="w-full h-full object-contain filter invert dark:invert-0" data-alt="Abstract geographical map lines" data-location="World Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZzAsew6At7aKbbADCxAXK5URcIbaNWppe0sDDQvr5F8NG2v3qUUAW38e3fDKRHgT1f__F-dWLRI6Sm0wuCmeeYryB7T2XDeP3a78uJQzN1g-5WMdLHl4KUpS7SkBDu2qKiZe_bjwSy_lJK31zw-rpWEOhEmqBO43A2XfxtbtgYR_2b1eteub70ZeOt-j4b3OgNwIyl-Hvjdm6lxQeG3GXzV_hTHBrTRKxGi4wqzj5xofu2vbm4eCS6cAEzZM2HUvi2H4-2AfSVQ"/>
</div>
</main>
</div>
    </div>
  );
}
