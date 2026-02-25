"use client";
/* eslint-disable react/no-unescaped-entities */
 
import React from 'react';

export default function MessageTemplatesManagerPage() {
  return (
    <div className="stitch-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
{/* Header */}
<header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-hover bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-10 py-3">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 dark:text-white text-slate-900">
<div className="size-8 flex items-center justify-center text-primary">
<span className="material-symbols-outlined !text-3xl">diamond</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Wanderlux Admin</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 !h-10 w-96">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-surface-hover focus-within:ring-primary/50 transition-shadow">
<div className="text-text-secondary-dark flex border-none bg-surface-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-none bg-surface-dark focus:border-none focus:ring-0 h-full placeholder:text-text-secondary-dark px-4 pl-2 text-base font-normal leading-normal text-white" placeholder="Search templates, inquiries..." value=""/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-8">
<nav className="hidden lg:flex items-center gap-9">
<a className="text-text-secondary-dark hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Dashboard</a>
<a className="text-text-secondary-dark hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Inquiries</a>
<a className="text-white text-sm font-medium leading-normal" href="#">Templates</a>
<a className="text-text-secondary-dark hover:text-white transition-colors text-sm font-medium leading-normal" href="#">Settings</a>
</nav>
<div className="flex items-center gap-4">
<button className="relative p-2 text-text-secondary-dark hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"></span>
</button>
<div className="h-8 w-[1px] bg-surface-hover"></div>
<button className="flex items-center gap-2 group">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-transparent group-hover:ring-primary/50 transition-all" data-alt="Admin User Profile Picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBHq82n8e8FgyG_PzYE0dSSpeNv0co5sod2G9XCDFyvndgyaMn878HbxX-TPsv_fhAVBgAmZSsQ21VjxPExiwTdpoJ_liEUO0Hob7p-tx3DkcpbPZIW8XlrKz8fzcL-S0WnRiACrKFPk6dyLrKLNL3LbU87_GWZ3e75dCD1P6Rn1PpzXlW-I9X3PQMj196Au8pkEi8kplcC-g_SS74S0P5ENMo73BhwIxBWo6l3Brxqll12VbYCHedK27tUVLs8JmSyLCJ8lA5kw')" }}></div>
<span className="hidden xl:block text-sm font-medium text-white group-hover:text-primary transition-colors">Alex Morgan</span>
<span className="material-symbols-outlined text-text-secondary-dark group-hover:text-primary transition-colors">expand_more</span>
</button>
</div>
</div>
</header>
<main className="flex-1 flex justify-center py-8 px-4 sm:px-8">
<div className="w-full max-w-[1200px] flex flex-col gap-6">
{/* Breadcrumbs */}
<div className="flex items-center gap-2 text-sm">
<a className="text-text-secondary-dark hover:text-primary transition-colors font-medium" href="#">Dashboard</a>
<span className="material-symbols-outlined text-text-secondary-dark text-[16px]">chevron_right</span>
<span className="text-white font-medium">Message Templates</span>
</div>
{/* Page Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-2 border-b border-surface-hover/50">
<div className="flex flex-col gap-2 max-w-2xl">
<h1 className="text-slate-900 dark:text-white text-4xl font-extrabold leading-tight tracking-[-0.033em]">Message Templates</h1>
<p className="text-text-secondary-dark text-base font-normal leading-relaxed">Create and organize quick replies to streamline communication with high-value clients. Maintain Wanderlux's editorial voice across all automated responses.</p>
</div>
<button className="flex shrink-0 items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold tracking-[0.015em] shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
<span>Create New Template</span>
</button>
</div>
{/* Filter & Search Bar */}
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2">
<div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-hover text-slate-900 dark:text-white text-sm font-medium px-4 ring-1 ring-surface-hover/50">
                            All Templates
                        </button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent text-text-secondary-dark hover:bg-surface-hover hover:text-white transition-colors text-sm font-medium px-4 ring-1 ring-surface-hover/50">
                            Booking
                        </button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent text-text-secondary-dark hover:bg-surface-hover hover:text-white transition-colors text-sm font-medium px-4 ring-1 ring-surface-hover/50">
                            Visa &amp; Legal
                        </button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent text-text-secondary-dark hover:bg-surface-hover hover:text-white transition-colors text-sm font-medium px-4 ring-1 ring-surface-hover/50">
                            Transport
                        </button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent text-text-secondary-dark hover:bg-surface-hover hover:text-white transition-colors text-sm font-medium px-4 ring-1 ring-surface-hover/50">
                            Concierge
                        </button>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<span className="text-sm text-text-secondary-dark font-medium">Sort by:</span>
<button className="flex items-center gap-1 text-sm font-medium text-white hover:text-primary transition-colors">
                            Most Used <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
</button>
</div>
</div>
{/* Template Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Card 1: Image Header Style */}
<div className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-hover hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="h-40 bg-cover bg-center relative" data-alt="Luxury hotel lobby with ambient lighting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa8ZNsP4KBR_GdwLvfdYhyJxfcrRjcyQNWzerZJUk9RRfuFI5PAoy0Q12WCp2hmiNX7oOXgUkLH7EizCMlh5Si1L_NBJn33nSMH_lshpQGG0ZobacyM5QF27bIzzDbHa4qd1ZWE1Zm2i8b7fVYUvovf5YUA-Qaxwbt4hXd6Nurofqk3Hyxt4azog6StoUMigawjcxgb25cMNWtIDBilLEdSdMS-4y5lKUOYBDoJYkgvSLwyma5UYQZ4TzzVdzGqA5WwQM4d3fWsA')" }}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white border border-white/10">Booking</div>
</div>
<div className="p-5 flex flex-col gap-4 flex-1 -mt-12 relative z-10">
<div>
<h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Booking Confirmation Follow-up</h3>
<p className="text-sm text-text-secondary-dark">Standard confirmation for 5-star suite reservations.</p>
</div>
<div className="p-3 bg-background-dark/50 rounded-lg border border-surface-hover/50">
<p className="text-sm text-gray-300 italic line-clamp-3">"Dear [Client Name], we are delighted to confirm your upcoming stay at [Hotel Name]. Your suite has been prepared with..."</p>
</div>
<div className="mt-auto pt-4 border-t border-surface-hover flex items-center justify-between text-xs font-medium text-text-secondary-dark">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">bar_chart</span>
<span>Used 1,240 times</span>
</div>
<div className="flex gap-2">
<button className="hover:text-primary transition-colors p-1" title="Edit"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="hover:text-primary transition-colors p-1" title="Duplicate"><span className="material-symbols-outlined text-[18px]">content_copy</span></button>
</div>
</div>
</div>
</div>
{/* Card 2: Text Heavy Style */}
<div className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-hover hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
<div className="p-6 flex flex-col gap-4 flex-1 h-full">
<div className="flex justify-between items-start">
<div>
<span className="inline-block px-2 py-1 rounded bg-background-dark text-xs font-semibold text-text-secondary-dark border border-surface-hover mb-3">Visa &amp; Legal</span>
<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Schengen Visa Requirements</h3>
</div>
<button className="text-text-secondary-dark hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-4 bg-background-dark rounded-lg border border-surface-hover/50 flex-1">
<p className="text-sm text-gray-300 font-mono leading-relaxed line-clamp-4">"Regarding your inquiry about the Schengen visa process: We require a valid passport with at least 6 months validity, 2 recent photos, and proof of accommodation. Our concierge team can assist with..."</p>
</div>
<div className="flex items-center justify-between text-xs font-medium text-text-secondary-dark mt-2">
<div className="flex items-center gap-1 text-green-400">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+12% usage this week</span>
</div>
<span>Updated 2 days ago</span>
</div>
</div>
</div>
{/* Card 3: Image Header Style */}
<div className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-hover hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="h-40 bg-cover bg-center relative" data-alt="Luxury black sedan car interior view" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmuTVXu_TiO8z6kdXw38SkdgoPZF9JfnbevL1Yh34WHcibmVU9FYNXmw664id6vtVvrPkMnQxGzI_JtFO41t9Q-K5avD0MJ5Dq_3yk1t7BjF8HTGZWUo1_1Az7ig8Qd5CCoVC24j5GxrZyplqXX5M2Ycyq5nLhQ_EDhdIGINQ_Q-1NbvBwaWKFd0xpyDQZkFulBakZdSH1myiwYblbjyMQ3E3Yo_Yq4zPcbcjVMjNpvpxntfD6QXbzIqaYPWC7VjAUNDfvgjgv3A')" }}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white border border-white/10">Transport</div>
</div>
<div className="p-5 flex flex-col gap-4 flex-1 -mt-12 relative z-10">
<div>
<h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Luxury Car Availability</h3>
<p className="text-sm text-text-secondary-dark">Response for VIP airport transfer inquiries.</p>
</div>
<div className="p-3 bg-background-dark/50 rounded-lg border border-surface-hover/50">
<p className="text-sm text-gray-300 italic line-clamp-3">"We have confirmed availability for a Rolls Royce Ghost for your transfer from JFK. Your chauffeur, James, will be waiting at..."</p>
</div>
<div className="mt-auto pt-4 border-t border-surface-hover flex items-center justify-between text-xs font-medium text-text-secondary-dark">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">bar_chart</span>
<span>Used 856 times</span>
</div>
<div className="flex gap-2">
<button className="hover:text-primary transition-colors p-1" title="Edit"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="hover:text-primary transition-colors p-1" title="Duplicate"><span className="material-symbols-outlined text-[18px]">content_copy</span></button>
</div>
</div>
</div>
</div>
{/* Card 4: Text Heavy Style */}
<div className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-hover hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-hover group-hover:bg-primary transition-colors"></div>
<div className="p-6 flex flex-col gap-4 flex-1 h-full">
<div className="flex justify-between items-start">
<div>
<span className="inline-block px-2 py-1 rounded bg-background-dark text-xs font-semibold text-text-secondary-dark border border-surface-hover mb-3">Concierge</span>
<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Dietary Restriction Check</h3>
</div>
<button className="text-text-secondary-dark hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-4 bg-background-dark rounded-lg border border-surface-hover/50 flex-1">
<p className="text-sm text-gray-300 font-mono leading-relaxed line-clamp-4">"To ensure the finest dining experience, could you please confirm any allergies or dietary preferences for your party? We will communicate this to the chef at..."</p>
</div>
<div className="flex items-center justify-between text-xs font-medium text-text-secondary-dark mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">history</span>
<span>Last used 10m ago</span>
</div>
<span>Updated 1 month ago</span>
</div>
</div>
</div>
{/* Card 5: Text Heavy Style */}
<div className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-surface-hover hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-hover group-hover:bg-primary transition-colors"></div>
<div className="p-6 flex flex-col gap-4 flex-1 h-full">
<div className="flex justify-between items-start">
<div>
<span className="inline-block px-2 py-1 rounded bg-background-dark text-xs font-semibold text-text-secondary-dark border border-surface-hover mb-3">General</span>
<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Office Hours Auto-Reply</h3>
</div>
<button className="text-text-secondary-dark hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-4 bg-background-dark rounded-lg border border-surface-hover/50 flex-1">
<p className="text-sm text-gray-300 font-mono leading-relaxed line-clamp-4">"Thank you for contacting Wanderlux. Our offices are currently closed. For urgent travel assistance, please call our 24/7 VIP line at..."</p>
</div>
<div className="flex items-center justify-between text-xs font-medium text-text-secondary-dark mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">bar_chart</span>
<span>Used 3,400 times</span>
</div>
<span>Updated 6 months ago</span>
</div>
</div>
</div>
{/* Card 6: Add New Placeholder */}
<button className="group flex flex-col items-center justify-center min-h-[320px] bg-surface-dark/30 rounded-xl border-2 border-dashed border-surface-hover hover:border-primary/50 hover:bg-surface-dark transition-all duration-300">
<div className="h-16 w-16 rounded-full bg-surface-hover group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
<span className="material-symbols-outlined text-3xl text-text-secondary-dark group-hover:text-primary">add</span>
</div>
<h3 className="text-lg font-bold text-white group-hover:text-primary mb-1">Create New Template</h3>
<p className="text-sm text-text-secondary-dark text-center px-8">Start from scratch or use an existing message as a base.</p>
</button>
</div>
{/* Pagination */}
<div className="flex items-center justify-between pt-8 border-t border-surface-hover">
<p className="text-sm text-text-secondary-dark">Showing <span className="text-white font-medium">1-5</span> of <span className="text-white font-medium">24</span> templates</p>
<div className="flex items-center gap-2">
<button className="h-9 px-4 rounded-lg border border-surface-hover text-text-secondary-dark hover:text-white hover:bg-surface-hover transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>Previous</button>
<div className="hidden sm:flex items-center gap-1">
<button className="h-9 w-9 rounded-lg bg-primary text-white text-sm font-medium">1</button>
<button className="h-9 w-9 rounded-lg text-text-secondary-dark hover:text-white hover:bg-surface-hover transition-colors text-sm font-medium">2</button>
<button className="h-9 w-9 rounded-lg text-text-secondary-dark hover:text-white hover:bg-surface-hover transition-colors text-sm font-medium">3</button>
<span className="text-text-secondary-dark px-1">...</span>
<button className="h-9 w-9 rounded-lg text-text-secondary-dark hover:text-white hover:bg-surface-hover transition-colors text-sm font-medium">8</button>
</div>
<button className="h-9 px-4 rounded-lg border border-surface-hover text-white hover:bg-surface-hover transition-colors text-sm font-medium">Next</button>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
