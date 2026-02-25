"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function DocumentUploadModalPage() {
  return (
    <div className="stitch-screen">
      <div className="fixed inset-0 noise-overlay pointer-events-none z-0"></div>
{/* Background Content (Blurred Settings Page) */}
<div className="relative z-10 filter blur-sm transition-all duration-500">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<div className="flex flex-wrap justify-between gap-3 p-4">
<div className="flex min-w-72 flex-col gap-3">
<p className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-[-0.033em]">Traveler Account Settings</p>
<p className="text-slate-600 dark:text-primary/70 text-base font-normal leading-normal">Manage your premium travel profile and documents</p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 p-4">
<div className="h-32 rounded-xl bg-neutral-dark/50 border border-border-dark"></div>
<div className="h-32 rounded-xl bg-neutral-dark/50 border border-border-dark"></div>
<div className="h-32 rounded-xl bg-neutral-dark/50 border border-border-dark"></div>
</div>
</div>
</div>
</div>
</div>
{/* Modal Overlay */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
{/* Modal Container */}
<div className="bg-neutral-dark border border-border-dark w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
{/* Modal Header */}
<div className="p-6 border-b border-border-dark flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">description</span>
</div>
<div>
<h2 className="text-white text-2xl font-bold tracking-tight">Upload Travel Document</h2>
<p className="text-slate-400 text-sm">Encrypted, high-security storage for luxury travel</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-6 space-y-6">
{/* Document Type Select */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-slate-300 text-sm font-medium">Document Type</label>
<select className="w-full bg-background-dark border border-border-dark rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
<option>Passport</option>
<option>Visa</option>
<option>National ID</option>
<option>Travel Insurance</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-slate-300 text-sm font-medium">Document Number</label>
<input className="w-full bg-background-dark border border-border-dark rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="e.g. L8902134" type="text"/>
</div>
</div>
{/* Drag & Drop Zone */}
<div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-border-dark hover:border-primary/50 bg-background-dark/50 rounded-xl p-10 transition-all cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
</div>
<p className="text-white text-lg font-semibold mb-1">Drag &amp; drop files here or click to browse</p>
<p className="text-slate-400 text-sm">Support for PDF, JPG, PNG (Max 10MB)</p>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
{/* Metadata Inputs */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-slate-300 text-sm font-medium">Issuing Country</label>
<input className="w-full bg-background-dark border border-border-dark rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Select country" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-slate-300 text-sm font-medium">Expiry Date</label>
<div className="relative">
<input className="w-full bg-background-dark border border-border-dark rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="date"/>
</div>
</div>
</div>
{/* Privacy Toggle */}
<div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">verified_user</span>
<div>
<p className="text-white text-sm font-semibold">Encrypted storage enabled</p>
<p className="text-slate-400 text-xs">AES-256 bit encryption standard applied</p>
</div>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
{/* Modal Footer */}
<div className="p-6 border-t border-border-dark flex flex-col sm:flex-row-reverse gap-3">
<button className="glare-effect flex-1 bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(198,16,16,0.3)]">
<span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">shield</span>
                    Securely Upload Document
                </button>
<button className="flex-1 bg-transparent hover:bg-slate-800 text-slate-300 font-medium py-3 px-6 rounded-lg border border-border-dark transition-all">
                    Cancel
                </button>
</div>
</div>
</div>
{/* Decorative elements */}
<div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </div>
  );
}
