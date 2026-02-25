"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function StaffRolePermissionsMatrixPage() {
  return (
    <div className="stitch-screen">
      <div className="flex flex-1 w-full h-full">
{/* Sidebar Navigation */}
<aside className="hidden lg:flex flex-col w-64 border-r border-[#39282c] bg-[#181112] min-h-screen shrink-0">
<div className="p-6 flex items-center gap-3">
<div className="size-8 text-primary">
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
</svg>
</div>
<h1 className="text-white text-xl font-bold tracking-tight">Wanderlux</h1>
</div>
<nav className="flex-1 px-4 space-y-2 mt-4">
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">calendar_month</span>
<span className="text-sm font-medium">Bookings</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">directions_bus</span>
<span className="text-sm font-medium">Fleet</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">map</span>
<span className="text-sm font-medium">Tours</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg border border-primary/20" href="#">
<span className="material-symbols-outlined fill-1">group</span>
<span className="text-sm font-medium">Staff &amp; Roles</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>
<div className="p-4 border-t border-[#39282c]">
<div className="flex items-center gap-3 px-4 py-2">
<div className="size-8 rounded-full bg-cover bg-center" data-alt="Admin user profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNsjZczeAd-sSEgeIH90lsmdqEtit3tlbxMq6oQIqqaiTTaYuaP9qvfZosjfMcQVfR7J8lG80uoGraIkevNf-VlUuYADlnMAH-pLwuzwnUdov4HWDfRgk4NZE5t4HrHE2UgQdr7p3Q673SgwUqHKkVYN1cCCd_xZDhHP69j4kORIsx_IqlbbbDnuIwDrNjO2fBbrrncv_Zy9lNvftd-4sdegujiBGHR6grHUTFIdZE3-RyJKXi2ny-HBMq6MOXk9NzBmf2nBYr4Q')" }}></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Alex Morgan</span>
<span className="text-xs text-slate-500">Super Admin</span>
</div>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
{/* Header */}
<header className="flex items-center justify-between border-b border-[#39282c] px-8 py-4 bg-[#181112]">
<div className="flex items-center gap-4">
{/* Mobile menu button */}
<button className="lg:hidden p-2 text-slate-400">
<span className="material-symbols-outlined">menu</span>
</button>
<h2 className="text-white text-lg font-bold">Staff Permissions</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
<span className="material-symbols-outlined text-[20px]">search</span>
</span>
<input className="w-64 bg-[#2d1f22] border-none rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:ring-1 focus:ring-primary" placeholder="Search staff..." type="text"/>
</div>
<button className="relative p-2 text-slate-400 hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full border border-[#181112]"></span>
</button>
</div>
</header>
{/* Page Content */}
<div className="flex-1 p-6 lg:p-10 overflow-y-auto">
<div className="max-w-7xl mx-auto space-y-8">
{/* Breadcrumbs & Actions */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
<a className="hover:text-primary" href="#">Staff &amp; Roles</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-white">Sarah Jenkins</span>
</div>
<h1 className="text-3xl font-bold text-white tracking-tight">Role &amp; Permissions Matrix</h1>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-[#2d1f22] text-slate-300 rounded-lg hover:bg-[#3d2a2e] transition-colors text-sm font-medium border border-[#39282c]">Discard Changes</button>
<button className="relative overflow-hidden group px-6 py-2 bg-primary text-white rounded-lg transition-all hover:bg-red-700 text-sm font-bold shadow-lg shadow-primary/20">
<span className="relative z-10 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">save</span>
                                    Update Permissions
                                </span>
<div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-red-600/50"></div>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Panel: User Profile & Role */}
<div className="lg:col-span-4 space-y-6">
<div className="bg-[#1e1416] border border-[#39282c] rounded-xl p-6 shadow-xl">
<div className="flex flex-col items-center text-center pb-6 border-b border-[#39282c]">
<div className="relative mb-4">
<div className="size-24 rounded-full bg-cover bg-center border-2 border-[#39282c]" data-alt="Portrait of Sarah Jenkins" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgrSIPoAFUEmeOJnnVfBWMzaIIBo9ojFFYIUNc5DsSIB0yPHZs190kfvM0nXgVNmMDEQpz4VZ_sRPk-csffo_3ke0hWT9sYYwUXlofkqgVR40rmV_HvLTnqU0AFGVzYQn7uyabNicxSxBBUZXbEDcswGIAM_aDUYQSiU96uIKZQxGR1lj5cooHFr4_d2k_bghIVkmTCEKCpCy-gH_ptGWb2FFZfuRZCrYzt_VtqmgMSoCEbQUmmUbUqkI5uRFS4udhW0Ks2zeeMg')" }}></div>
<div className="absolute bottom-1 right-1 size-5 bg-green-500 border-2 border-[#1e1416] rounded-full" title="Active"></div>
</div>
<h2 className="text-xl font-bold text-white">Sarah Jenkins</h2>
<p className="text-slate-400 text-sm">Senior Booking Agent</p>
<div className="mt-4 flex gap-2">
<span className="px-2.5 py-1 bg-[#2d1f22] text-slate-300 text-xs rounded-full border border-[#39282c]">ID: #STF-8832</span>
<span className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">Active</span>
</div>
</div>
<div className="pt-6 space-y-5">
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Primary Role</label>
<div className="relative">
<select className="w-full bg-[#2d1f22] border border-[#39282c] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 appearance-none">
<option>Booking Agent</option>
<option selected>Senior Agent</option>
<option>Fleet Manager</option>
<option>Administrator</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Department</label>
<div className="flex items-center gap-3 p-3 bg-[#2d1f22] rounded-lg border border-[#39282c]">
<span className="material-symbols-outlined text-slate-400">support_agent</span>
<span className="text-sm text-white">Customer Support</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Contact</label>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500 text-[18px]">mail</span>
<span className="text-sm text-slate-300">sarah.j@wanderlux.com</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500 text-[18px]">call</span>
<span className="text-sm text-slate-300">+1 (555) 002-3948</span>
</div>
</div>
</div>
</div>
</div>
{/* Security Log Summary */}
<div className="bg-[#1e1416] border border-[#39282c] rounded-xl p-6 shadow-xl">
<h3 className="text-white font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span>
                                    Security Log
                                </h3>
<div className="space-y-4">
<div className="flex gap-3 text-sm border-l-2 border-primary/30 pl-3">
<div className="flex flex-col">
<span className="text-slate-200">Exported 'Q3 Bookings'</span>
<span className="text-xs text-slate-500">Today, 2:30 PM</span>
</div>
</div>
<div className="flex gap-3 text-sm border-l-2 border-[#39282c] pl-3">
<div className="flex flex-col">
<span className="text-slate-200">Modified fleet #BUS-204</span>
<span className="text-xs text-slate-500">Yesterday, 9:15 AM</span>
</div>
</div>
<div className="flex gap-3 text-sm border-l-2 border-[#39282c] pl-3">
<div className="flex flex-col">
<span className="text-slate-200">Login from New Device</span>
<span className="text-xs text-slate-500">Oct 24, 8:00 AM</span>
</div>
</div>
</div>
<button className="w-full mt-4 text-xs text-primary hover:text-red-400 font-medium text-center">View Full Audit Log</button>
</div>
</div>
{/* Right Panel: Permissions Matrix */}
<div className="lg:col-span-8">
<div className="bg-[#1e1416] border border-[#39282c] rounded-xl shadow-xl overflow-hidden">
<div className="p-6 border-b border-[#39282c] bg-[#221619]">
<h3 className="text-lg font-bold text-white">Access Permissions</h3>
<p className="text-slate-400 text-sm">Fine-tune module access levels for this staff member.</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#2d1f22] text-xs uppercase tracking-wider text-slate-400">
<th className="p-4 font-medium border-b border-[#39282c] min-w-[150px]">Module</th>
<th className="p-4 font-medium text-center border-b border-[#39282c] w-24">View</th>
<th className="p-4 font-medium text-center border-b border-[#39282c] w-24">Create</th>
<th className="p-4 font-medium text-center border-b border-[#39282c] w-24">Edit</th>
<th className="p-4 font-medium text-center border-b border-[#39282c] w-24">Delete</th>
<th className="p-4 font-medium text-center border-b border-[#39282c] w-24">Export</th>
</tr>
</thead>
<tbody className="divide-y divide-[#39282c]">
{/* Bookings Module */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
<span className="material-symbols-outlined">calendar_month</span>
</div>
<div>
<div className="font-medium text-white">Bookings</div>
<div className="text-xs text-slate-500">Reservations &amp; Scheduling</div>
</div>
</div>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/* Fleet Module */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
<span className="material-symbols-outlined">directions_bus</span>
</div>
<div>
<div className="font-medium text-white">Fleet</div>
<div className="text-xs text-slate-500">Vehicles &amp; Maintenance</div>
</div>
</div>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/* Tours Module */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
<span className="material-symbols-outlined">map</span>
</div>
<div>
<div className="font-medium text-white">Tours</div>
<div className="text-xs text-slate-500">Packages &amp; Itineraries</div>
</div>
</div>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/* Customers Module */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-green-500/10 rounded-lg text-green-500">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<div className="font-medium text-white">Customers</div>
<div className="text-xs text-slate-500">Profiles &amp; History</div>
</div>
</div>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
</tr>
{/* Finances Module */}
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<div className="font-medium text-white">Finances</div>
<div className="text-xs text-slate-500">Invoices &amp; Reports</div>
</div>
</div>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
<td className="p-4 text-center">
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" disabled type="checkbox"/>
<div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600 after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 opacity-50 cursor-not-allowed"></div>
</label>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-[#221619] border-t border-[#39282c] flex justify-between items-center">
<span className="text-xs text-slate-500">Permission changes are logged and audited.</span>
<button className="text-primary text-xs font-medium hover:underline">Reset to Default Role</button>
</div>
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
