"use client";
 
 
import React from 'react';

export default function RefinedTravelDocumentsTrackerPage() {
  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* Top Navigation Bar */}
<header className="flex items-center justify-between border-b border-glass-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4 md:px-20">
<div className="flex items-center gap-4">
<div className="text-primary">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h2 className="text-xl font-bold tracking-tighter uppercase">Wanderlux</h2>
</div>
<div className="hidden md:flex flex-1 justify-center gap-10">
<a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Concierge</a>
<a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Portfolio</a>
<a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Destinations</a>
<a className="text-white text-sm font-medium border-b-2 border-primary pb-1" href="#">Settings</a>
</div>
<div className="flex items-center gap-4">
<button className="flex size-10 items-center justify-center rounded-full bg-glass border border-glass-border text-slate-100 hover:bg-glass-border transition-all">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-primary/50 shadow-[0_0_15px_rgba(197,17,16,0.3)]" data-alt="Close up portrait of a premium traveler" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_2jbYj2ESXsX8IwTc3ute50aj2J-G2pkOu3KLppMptanXBHsgh86ICBWhxmdJrmNEs4DcDjgNc-1M-JBE0DE_bDC3f7oQ9moD_rlwmNZ8oeFhSSrZUV4rfXOrxAbKE1qdS5cnt0Zwbgrgur0XqIHxnqZmllvnQtpHLfoeGEpiC3MKeoMfX0fE-GwRqFbfJlxuejCOBffptSqXtRi4siDS8ZHvnJGd4elevLpR1TMAfCFLecFLJQ9J8Pny9P1xeR8kgEKYBpcuUA')" }}></div>
</div>
</header>
<main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 md:py-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Sidebar Navigation */}
<aside className="lg:col-span-3 space-y-2">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
<span className="material-symbols-outlined">person</span>
<span className="font-semibold text-sm">Account Settings</span>
</div>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-glass border border-transparent hover:border-glass-border transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-white">shield</span>
<span className="text-sm group-hover:text-white">Privacy &amp; Security</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-glass border border-transparent hover:border-glass-border transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-white">payments</span>
<span className="text-sm group-hover:text-white">Billing Details</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-glass border border-transparent hover:border-glass-border transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-white">flight_takeoff</span>
<span className="text-sm group-hover:text-white">Trip History</span>
</a>
<hr className="border-glass-border my-4"/>
<div className="p-4 glass-card rounded-2xl">
<p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Member Status</p>
<p className="text-lg font-bold text-primary italic">CRIMSON ELITE</p>
<div className="w-full bg-glass-border h-1.5 rounded-full mt-3">
<div className="bg-primary h-full w-[85%] rounded-full shadow-[0_0_8px_#c51110]"></div>
</div>
<p className="text-[10px] text-slate-400 mt-2">1,200 points to Black Diamond</p>
</div>
</aside>
{/* Main Content Area */}
<div className="lg:col-span-9 space-y-10">
{/* Profile Overview */}
<section className="space-y-6" id="profile">
<h3 className="text-2xl font-bold tracking-tight">Profile Overview</h3>
<div className="glass-card p-8 rounded-3xl space-y-8">
<div className="flex flex-col md:flex-row items-center gap-8">
<div className="relative group">
<div className="size-32 rounded-full bg-center bg-cover border-2 border-primary shadow-[0_0_20px_rgba(197,17,16,0.2)]" data-alt="Alex Wanderer professional profile photo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwXuttaeRmnUq9Qq5UcWvfDUnCraKaDdEqRA6MBShpiyKBKXxOaqJSukkFomqxaR0VFyGd4mxyH4bT15kUao-poaYihHGSIQ8RvcE02_hmTKuPQbLkLGXYOI9JA3n16msugxez2wOIGa6wakcIZ6AVRHJhKV9nlD8Ygv2wgoeKCezxgIB5zvBh5MkOfdgZWnR-Knp4ZOL1gSpge_BNAOY7qHJSDr881CbPv0olLwc4FiNadlR4kTn6oBQJ_tcaUXy9DQwS0Eugkw')" }}></div>
<button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-sm">photo_camera</span>
</button>
</div>
<div className="flex-1 space-y-1 text-center md:text-left">
<h4 className="text-xl font-bold">Alexander S. Wanderer</h4>
<p className="text-slate-400 text-sm">Member since November 2021 • London, UK</p>
<div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
<span className="px-3 py-1 bg-glass-border rounded-full text-[11px] font-bold text-primary uppercase border border-primary/20 tracking-wider">Verified Identity</span>
<span className="px-3 py-1 bg-glass-border rounded-full text-[11px] font-bold text-slate-300 uppercase border border-glass-border tracking-wider">Business Traveler</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
<input className="w-full bg-glass border-glass-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors" type="text" value="Alexander S. Wanderer"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
<input className="w-full bg-glass border-glass-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors" type="email" value="alexander.w@wanderlux.io"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number</label>
<input className="w-full bg-glass border-glass-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors" type="tel" value="+44 20 7946 0958"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Base Location</label>
<input className="w-full bg-glass border-glass-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors" type="text" value="London, United Kingdom"/>
</div>
</div>
</div>
</section>
{/* Travel Documents */}
<section className="space-y-6" id="documents">
<h3 className="text-2xl font-bold tracking-tight"><div className="flex items-center justify-between"><span>Travel Documents</span><button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-xs font-bold hover:bg-primary/20 transition-all"><span className="material-symbols-outlined text-sm">add_circle</span>Add Document</button></div></h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">{/* Passport Card */}
<div className="glass-card p-6 rounded-3xl border-l-4 border-l-green-500 flex flex-col justify-between">
<div className="space-y-4">
<div className="flex justify-between items-start">
<div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">menu_book</span>
</div>
<div className="text-right">
<span className="text-[10px] font-bold px-3 py-1 bg-green-500/10 text-green-500 rounded-full border border-green-500/20 tracking-wider">VALID</span>
<p className="text-[9px] text-slate-500 mt-2 italic">Last Verified: 2 days ago</p>
</div>
</div>
<div>
<h5 className="font-bold text-lg">Passport (G-Series)</h5>
<div className="grid grid-cols-2 gap-y-3 mt-4">
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Issuing Country</p>
<p className="text-xs font-medium">United Kingdom</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Document Number</p>
<p className="text-xs font-medium tracking-widest">**** **** 4821</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Issue Date</p>
<p className="text-xs font-medium">12 Oct 2018</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Expiry Date</p>
<p className="text-xs font-medium">12 Oct 2028</p>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-glass-border flex items-center justify-between">
<div className="flex gap-3">
<button className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors">UPDATE</button>
<button className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors">VIEW SCAN</button>
</div>
<button className="text-slate-500 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</div>
</div>
{/* Visa Card */}
<div className="glass-card p-6 rounded-3xl border-l-4 border-l-amber-500 flex flex-col justify-between">
<div className="space-y-4">
<div className="flex justify-between items-start">
<div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
<span className="material-symbols-outlined text-2xl">assignment_ind</span>
</div>
<div className="text-right">
<span className="text-[10px] font-bold px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20 tracking-wider uppercase">Expiring Soon</span>
<p className="text-[9px] text-slate-500 mt-2 italic">Last Verified: 1 week ago</p>
</div>
</div>
<div>
<h5 className="font-bold text-lg">Schengen Visa (Multi)</h5>
<div className="grid grid-cols-2 gap-y-3 mt-4">
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Issuing Country</p>
<p className="text-xs font-medium">France (EU)</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Document Number</p>
<p className="text-xs font-medium tracking-widest">**** 9920</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Issue Date</p>
<p className="text-xs font-medium">15 Dec 2021</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-semibold">Expiry Date</p>
<p className="text-xs font-medium text-amber-500">15 Dec 2024</p>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-glass-border flex items-center justify-between">
<div className="flex gap-3">
<button className="text-[10px] font-bold text-primary hover:underline transition-all">RENEW NOW</button>
<button className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors">VIEW SCAN</button>
</div>
<button className="text-slate-500 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</div>
</div>
{/* Add New Document Placeholder */}
<button className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-glass-border bg-glass hover:bg-glass-border hover:border-primary/50 transition-all group min-h-[280px]">
<div className="size-14 rounded-full border border-glass-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
<span className="material-symbols-outlined text-3xl text-slate-500 group-hover:text-primary">upload_file</span>
</div>
<p className="font-bold text-slate-300 group-hover:text-white">Add New Document</p>
<p className="text-[11px] text-slate-500 mt-2">Upload Passport, Visa, or ID</p>
</button></div>
</section>
{/* Preferences & Security */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
{/* Preferences */}
<section className="space-y-6">
<h3 className="text-xl font-bold">Preferences</h3>
<div className="glass-card p-6 rounded-3xl space-y-5">
<div className="space-y-2">
<label className="text-[10px] font-bold text-slate-500 uppercase">Default Currency</label>
<select className="w-full bg-glass border-glass-border rounded-xl px-4 py-2 text-sm focus:border-primary focus:ring-0">
<option className="bg-background-dark">USD ($)</option>
<option className="bg-background-dark" selected>EUR (€)</option>
<option className="bg-background-dark">KES (KSh)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-slate-500 uppercase">System Language</label>
<select className="w-full bg-glass border-glass-border rounded-xl px-4 py-2 text-sm focus:border-primary focus:ring-0">
<option className="bg-background-dark" selected>English (EN)</option>
<option className="bg-background-dark">Français (FR)</option>
<option className="bg-background-dark">Kiswahili (SW)</option>
</select>
</div>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-glass-border rounded-full peer-checked:bg-primary transition-colors"></div>
<div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
</div>
<span className="text-sm font-medium group-hover:text-white transition-colors">Newsletter Subscription</span>
</label>
</div>
</section>
{/* Security */}
<section className="space-y-6">
<h3 className="text-xl font-bold">Security</h3>
<div className="glass-card p-6 rounded-3xl space-y-5">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-sm font-semibold">Two-Factor Auth</p>
<p className="text-[11px] text-slate-500">Secure via Authenticator</p>
</div>
<div className="relative cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-glass-border rounded-full peer-checked:bg-primary transition-colors"></div>
<div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
</div>
</div>
<button className="w-full py-2.5 rounded-xl border border-glass-border text-xs font-bold hover:bg-glass-border transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">lock_reset</span>
                                        Change Password
                                    </button>
<div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
<p className="text-[10px] text-primary font-bold uppercase mb-1">Last Login</p>
<p className="text-xs text-slate-400">2 hours ago • IP: 192.168.1.42 (Paris, FR)</p>
</div>
</div>
</section>
</div>
{/* Linked Accounts */}
<section className="space-y-6">
<h3 className="text-xl font-bold">Linked Accounts</h3>
<div className="glass-card p-6 rounded-3xl">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-glass-border">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-900 flex items-center justify-center">
<svg className="size-4 fill-white" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.08 4.44-1.12 1.12-2.8 2.32-5.76 2.32-4.64 0-8.44-3.76-8.44-8.4s3.8-8.4 8.44-8.4c2.48 0 4.4 1 5.8 2.32l2.32-2.32c-2.12-2.04-4.88-3.2-8.12-3.2-6.56 0-12 5.44-12 12s5.44 12 12 12c3.56 0 6.24-1.16 8.32-3.32 2.16-2.16 2.84-5.2 2.84-7.68 0-.48-.04-1-.12-1.44h-11.04z"></path></svg>
</div>
<span className="text-xs font-bold">Google</span>
</div>
<span className="text-[10px] text-green-500 font-bold">LINKED</span>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-glass-border">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-900 flex items-center justify-center">
<svg className="size-4 fill-white" viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-3.04.805-.98 2.15-1.62 3.23-1.62.03 0 .05.01.068.03zM3 17.25c0 2.21 1.95 4.88 3.5 4.88.58 0 1.13-.39 1.85-.39 1.47 0 2.22.73 3.53.73 1.55 0 3.12-2.43 3.12-4.83 0-3.28-3.34-4.45-3.34-4.45a3.89 3.89 0 0 0-2.61.8c-.58.42-1.14 1.05-1.59 1.05-.45 0-1.01-.62-1.59-1.04a3.91 3.91 0 0 0-2.87-.81C3 12.8 3 17.25 3 17.25z"></path></svg>
</div>
<span className="text-xs font-bold">Apple ID</span>
</div>
<span className="text-[10px] text-slate-500 font-bold hover:text-white cursor-pointer transition-colors">LINK</span>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-glass-border">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-900 flex items-center justify-center">
<svg className="size-4 fill-white" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"></path></svg>
</div>
<span className="text-xs font-bold">LinkedIn</span>
</div>
<span className="text-[10px] text-green-500 font-bold">LINKED</span>
</div>
</div>
</div>
</section>
{/* Actions Footer */}
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-glass-border gap-4">
<button className="text-xs text-slate-500 hover:text-red-500 font-bold transition-colors uppercase tracking-widest">Deactivate My Account</button>
<div className="flex gap-4 w-full sm:w-auto">
<button className="flex-1 sm:px-8 py-3 rounded-xl border border-glass-border font-bold text-sm hover:bg-glass transition-all">Cancel Changes</button>
<button className="flex-1 sm:px-10 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-[0_0_20px_rgba(197,17,16,0.3)] glare-sweep">Save All Changes</button>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Navigation for Mobile */}
<nav className="md:hidden fixed bottom-0 w-full bg-background-dark/95 backdrop-blur-lg border-t border-glass-border grid grid-cols-4 py-3 z-50">
<button className="flex flex-col items-center gap-1 text-slate-500">
<span className="material-symbols-outlined">explore</span>
<span className="text-[10px]">Explore</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<span className="material-symbols-outlined">favorite</span>
<span className="text-[10px]">Saved</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<span className="material-symbols-outlined">receipt_long</span>
<span className="text-[10px]">Trips</span>
</button>
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined">account_circle</span>
<span className="text-[10px]">Profile</span>
</button>
</nav>
</div>
</div>
    </div>
  );
}
