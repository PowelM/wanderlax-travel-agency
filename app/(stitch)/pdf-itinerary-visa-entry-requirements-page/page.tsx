"use client";
 
 
import React from 'react';

export default function PdfItineraryVisaEntryRequirementsPagePage() {
  return (
    <div className="stitch-screen">
      <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* Header / Navigation */}
<div className="px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-4 py-6 mb-8">
<div className="flex items-center gap-4 text-slate-100">
<div className="size-6 text-primary">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
</svg>
</div>
<h2 className="text-slate-100 text-xl font-bold leading-tight tracking-widest uppercase">Wanderlux</h2>
</div>
<div className="flex flex-1 justify-end gap-8">
<div className="hidden md:flex items-center gap-9">
<a className="text-slate-300 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-widest" href="#">Itinerary</a>
<a className="text-slate-300 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-widest" href="#">Destinations</a>
<a className="text-slate-300 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-widest" href="#">Concierge</a>
</div>
</div>
</header>
{/* Hero Section */}
<div className="@container mb-12">
<div className="relative group">
<div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] border border-white/10" data-alt="Close up of an Italian passport and luxury travel documents on a dark desk" style={{ backgroundImage: "linear-gradient(to top, rgba(18, 8, 10, 1) 0%, rgba(18, 8, 10, 0.4) 50%, rgba(18, 8, 10, 0.1) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiUJheGeACWeEL44Iw6yAC8ffjDGyXcYKTc6A8UqJjuY_Xz75bfvYboHyzctIHe4VWefBE7aSqMLeUxCDo08mHYrXqXkfmHL4hhB_S5YKZ97L6_vEh9hrdayrP14Ot5SeTvoed21x5kTRbtqyMElCJr0erukYPmJK2X1paRTvVVx4XM1k0VAwqi-1bCci_tZUFsytePK29t9q2fuWroaSXEvFZYlg2knR55bvTJlW-wO5TxPgwD1cuDmV6yknCU9ze57D36Mrstw')" }}>
<div className="flex flex-col p-8 md:p-12">
<h1 className="text-white text-5xl md:text-7xl font-light tracking-tight serif-title mb-4">Visa &amp; Entry <br/>Requirements</h1>
<div className="h-1 w-24 bg-primary mb-6"></div>
<p className="text-slate-200 text-lg md:text-xl font-light max-w-xl italic">Essential travel documentation for your curated Italian journey.</p>
</div>
</div>
</div>
</div>
{/* Content Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-4 mb-16">
{/* Left Column: Overview */}
<div className="md:col-span-7 space-y-10">
<section>
<h2 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
<span className="w-8 h-[1px] bg-primary"></span> Global Visa Overview
                            </h2>
<p className="text-slate-300 text-lg leading-relaxed font-light mb-6">
                                As Italy is a member of the <span className="text-white font-medium">Schengen Area</span>, travelers from the US, UK, Canada, and Australia typically do not require a visa for stays under 90 days for tourism purposes.
                            </p>
<p className="text-slate-400 text-base leading-relaxed">
                                Please ensure your documentation is current prior to departure. Regulations can change with minimal notice; your Wanderlux concierge monitors these updates daily to ensure your passage remains seamless.
                            </p>
</section>
<section>
<h2 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
<span className="w-8 h-[1px] bg-primary"></span> Health &amp; Safety Protocols
                            </h2>
<div className="bg-primary/5 border-l-2 border-primary p-6 rounded-r-lg">
<p className="text-slate-200 text-sm leading-relaxed">
                                    Current entry protocols for Italy require no mandatory vaccinations for travelers from Tier 1 nations. However, we recommend carrying a digital copy of your medical records. For the most up-to-the-minute health advisories, please refer to your digital itinerary dashboard.
                                </p>
</div>
</section>
</div>
{/* Right Column: Checklist */}
<div className="md:col-span-5">
<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
<h3 className="text-white text-xl font-semibold mb-8 serif-title">Document Checklist</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-0.5">passkey</span>
<div>
<p className="text-slate-100 font-medium">Valid Passport</p>
<p className="text-slate-400 text-xs">Minimum 6 months validity from return date.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-0.5">flight_takeoff</span>
<div>
<p className="text-slate-100 font-medium">Return Tickets</p>
<p className="text-slate-400 text-xs">Proof of onward or return travel required.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-0.5">apartment</span>
<div>
<p className="text-slate-100 font-medium">Accommodation Proof</p>
<p className="text-slate-400 text-xs">Printed or digital hotel vouchers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-0.5">health_and_safety</span>
<div>
<p className="text-slate-100 font-medium">Travel Insurance</p>
<p className="text-slate-400 text-xs">Coverage for medical and repatriation.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-0.5">verified_user</span>
<div>
<p className="text-slate-100 font-medium">ETIAS Authorization</p>
<p className="text-slate-400 text-xs">Applicable for non-EU citizens (Post-2024).</p>
</div>
</li>
</ul>
</div>
</div>
</div>
{/* Footer Support Box */}
<div className="mt-auto border-t border-primary/20 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4 bg-primary/10 px-6 py-4 rounded-lg border border-primary/20 max-w-md">
<span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
<p className="text-slate-300 text-sm">
                            Need assistance? Our visa specialists are here to help. <br/>
<a className="text-primary font-bold hover:underline" href="mailto:concierge@wanderlux.com">concierge@wanderlux.com</a>
</p>
</div>
<div className="flex flex-col items-end">
<span className="text-primary text-2xl font-light serif-title">015</span>
<span className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Travel Documentation</span>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
}
