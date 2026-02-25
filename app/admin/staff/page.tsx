"use client";
 
 
import React from 'react';
import { useUser } from '@clerk/nextjs';

export default function StaffDirectoryManagementPage() {
  const { user } = useUser();
  return (
    <div className="stitch-screen">
      {/* Side Navigation */}
<aside className="w-64 flex flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-[#111111] h-screen fixed left-0 top-0 z-50">
<div className="p-6 border-b border-border-light dark:border-border-dark flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">W</div>
<div className="flex flex-col">
<h1 className="text-base font-bold leading-tight">Wanderlux</h1>
<p className="text-xs text-slate-500 dark:text-slate-400">Admin Console</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary" href="#">
<span className="material-symbols-outlined text-[20px] fill-1">group</span>
<span className="text-sm font-medium">Staff</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">calendar_month</span>
<span className="text-sm font-medium">Bookings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">location_on</span>
<span className="text-sm font-medium">Destinations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">payments</span>
<span className="text-sm font-medium">Finance</span>
</a>
<div className="my-2 border-t border-border-light dark:border-border-dark mx-3"></div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
<span className="text-sm font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">help</span>
<span className="text-sm font-medium">Help Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary/80 dark:text-primary/80 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary transition-colors group mt-2" href="/portal/dashboard">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">switch_account</span>
<span className="text-sm font-medium">User Dashboard</span>
</a>
</nav>
<div className="p-4 border-t border-border-light dark:border-border-dark">
<button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 border border-border-light dark:border-border-dark hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">
<span className="material-symbols-outlined text-[18px]">logout</span>
                Logout
            </button>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 ml-64 min-h-screen flex flex-col relative">
{/* Header */}
<header className="h-16 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-[#0d0d0d]/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
<div className="flex items-center gap-4">
<h2 className="text-xl font-bold tracking-tight">Staff Management</h2>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background-light dark:ring-background-dark"></span>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center ring-2 ring-border-light dark:ring-border-dark" data-alt="User profile picture" style={{ backgroundImage: `url('${user?.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfuKqcOkunrnvb9BkHNojuFUo4dWnDHGES5vcNX30EC2LWpQcTQG9mnVTKsJUQpVbi9RXkP8cs65vbiv4aYNE-OAI644VpovzXS0t5BONnmx8CTtZ9-fy87PpL8LDqbEVjVN7wIJN9KtENt6FWwvGMFKheOAfsikxOQOcdhZsER3G3pCTlzXFqaJmI8NlDF0eysXM3OvpU1TIZ-A0J4-9HpGgm9tl2luDVj1MB5xN9xNeotKGxD-HKE7gMEpI6PvcDOl-7CXYl6A'}')` }}></div>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
{/* Page Header + Actions */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-1">
<h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Team Overview</h1>
<p className="text-slate-500 dark:text-slate-400">Manage team members, roles, and access permissions.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="material-symbols-outlined text-[20px]">search</span>
</span>
<input className="pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-[#141414] text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none w-64 transition-all" placeholder="Search staff..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/25 transition-all">
<span className="material-symbols-outlined text-[20px]">add</span>
                        Add New Staff
                    </button>
</div>
</div>
{/* Stats Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-light dark:bg-[#141414] border border-border-light dark:border-border-dark p-5 rounded-xl flex flex-col gap-4 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-primary">groups</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Staff</p>
<span className="bg-green-500/10 text-green-500 text-xs font-semibold px-2 py-1 rounded-full">+2 this month</span>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white mt-auto">42</p>
</div>
<div className="bg-surface-light dark:bg-[#141414] border border-border-light dark:border-border-dark p-5 rounded-xl flex flex-col gap-4 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-purple-500">admin_panel_settings</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Admins</p>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white mt-auto">3</p>
</div>
<div className="bg-surface-light dark:bg-[#141414] border border-border-light dark:border-border-dark p-5 rounded-xl flex flex-col gap-4 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-blue-500">supervisor_account</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Managers</p>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white mt-auto">8</p>
</div>
<div className="bg-surface-light dark:bg-[#141414] border border-border-light dark:border-border-dark p-5 rounded-xl flex flex-col gap-4 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-orange-500">support_agent</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Consultants</p>
<span className="bg-green-500/10 text-green-500 text-xs font-semibold px-2 py-1 rounded-full">+1 this month</span>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white mt-auto">31</p>
</div>
</div>
{/* Table Section */}
<div className="bg-surface-light dark:bg-[#141414] border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border-light dark:border-border-dark bg-slate-50 dark:bg-[#1a1a1a]">
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/3">Staff Member</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Last Active</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border-light dark:divide-border-dark">
{/* Row 1 */}
<tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-border-light dark:ring-border-dark" data-alt="Portrait of Sarah Jenkins" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRXhFSUcFenUtS643bU23lfgMpUD7W7suPlplgPxMZOaFWsyhLZYnkjg13_34m4dJXYD6hDiBKNMl3K7Q79mWjH4lnbskvT3b1JsButdRnIMhd2-GCEjPTYx1AIcrBVIRsManYwBtZrto5QRAyVRG18GzPK0k8iubxiNawEejlCrClhdNvmFaS2jkLH1DuNQYjSv9SEGM9M7ZOwYZhsnrRIx3Ai0Dvt4xG75UGvmBeYJ078Qxt3MZAAcYx0nju18NGkDOEDOVPDA')" }}></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Jenkins</p>
<p className="text-xs text-slate-500 dark:text-slate-400">sarah.j@wanderlux.com</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                        Admin
                                    </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    2 mins ago
                                </td>
<td className="py-4 px-6 text-right">
<button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Edit Permissions</button>
</td>
</tr>
{/* Row 2 */}
<tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-border-light dark:ring-border-dark" data-alt="Portrait of Michael Chen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzmnRkcyqU-3NrzlILqwtOsXjFrCaQwYD3HyKi0kgkeN1ONZvLwRzvPhbEwi250n7LoG5UjtCPinOyq5nV2X5sdEG78NJfOuNgOnRUy0osZK2-2MVgrkf-BJ5XoJB6xHPcKD3i9YC4Vf6jnhD0RvLbKW6Rjtnj6wHCuMHG5XEx1Oh-3mFNlHjXDW_4rcfnUki4DUKMYC5hlnuSuD9Bi320fetFUWIYXqjwQ7EBXXVIecCheG_v-yMz7bkGhlO6QZsSNZohftnUFw')" }}></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Michael Chen</p>
<p className="text-xs text-slate-500 dark:text-slate-400">m.chen@wanderlux.com</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        Manager
                                    </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    1 hour ago
                                </td>
<td className="py-4 px-6 text-right">
<button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Edit Permissions</button>
</td>
</tr>
{/* Row 3 */}
<tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-border-light dark:ring-border-dark" data-alt="Portrait of Jessica Low" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFW5OeVsk6G_6xsVhjfRy1pgJ2ZV8-PUvZL9BpOQr_yVlQv8al3-M_EJlj6SbgJ-Te4uudAzk4dQKP0D7D1ZoxmjUoe0KqQq4F7Kzw1G-b8QgzG6U494d4uQk_Nbk1p428QQiPyDVEz3c9bbfNI83c0lkCDrS6uYwtjj4aTsSPyihcSiIPRMHCXfyeYegkdOqPmrLd1IwJyHjcaXcsmV0hYLWbPt6dhef2lN2adRmyC_JOiXdJHpj8l6Lt76PXlWbtOWjqn1lacg')" }}></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Jessica Low</p>
<p className="text-xs text-slate-500 dark:text-slate-400">jess.low@wanderlux.com</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                        Consultant
                                    </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-yellow-500"></div>
<span className="text-sm text-slate-600 dark:text-slate-300">Away</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    3 hours ago
                                </td>
<td className="py-4 px-6 text-right">
<button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Edit Permissions</button>
</td>
</tr>
{/* Row 4 */}
<tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-border-light dark:ring-border-dark" data-alt="Portrait of David Miller" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvlFfjZQXNG6My5xuzu78TLTw8BfcIilGvWKkc9ucELAp5zEIONJl295RHFE_9VbdtG9I9SvAMzbCqG2B7onrzt5nG_tR4e2iPZX_rO3tFUdgY7FnIUTaw93b6T4Ma2frsRjYg8AyVqoRQ-5vAboAgu4pusFz5glEFUKk-4PJ2Uo94HGFKnbr2lG2H5pA8qZv-IOIS5ePLE8LKd1itTr1dKdNq9rOawo901KP1dto0nPBE1AB4Bo5Hn5fjLl19dJG6AzUsKmloew')" }}></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">David Miller</p>
<p className="text-xs text-slate-500 dark:text-slate-400">david.m@wanderlux.com</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                        Consultant
                                    </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    5 mins ago
                                </td>
<td className="py-4 px-6 text-right">
<button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Edit Permissions</button>
</td>
</tr>
{/* Row 5 */}
<tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-border-light dark:ring-border-dark" data-alt="Portrait of Emily Davis" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChp8jLe4Oxqe4hItwuEjcEw_49cAClZGJen9Bmlh9S-9ppPEFsJa_ktspFnObL9Tgf2ATYgHNVlKCVDmKvRDxqw9AtbsOjb1PqEv-I0teRx21HE5lFkJ9VAz81qylhpdEZRC18PhFP-XmIXnjbbPJBUfbUuzbZs2X8A0MlT6JXdbbu0fdfDMZvt0r0-rpwiXnNXNNlGDyd3ae6WbQ19m0tHfrOUfUlKZzoHO8e-x3gij3AGsOEU3eVX7VjN-nCD0srnAlsPnC4Fg')" }}></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Emily Davis</p>
<p className="text-xs text-slate-500 dark:text-slate-400">emily.d@wanderlux.com</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                                        Support
                                    </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-slate-500"></div>
<span className="text-sm text-slate-600 dark:text-slate-300">Offline</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    1 day ago
                                </td>
<td className="py-4 px-6 text-right">
<button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Edit Permissions</button>
</td>
</tr>
{/* Row 6 */}
<tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-border-light dark:ring-border-dark" data-alt="Portrait of Robert Wilson" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2qT2l9D4O83mxHFUdD4Z2vPRswzL-dQVwG0J93wdNIfOtyno6OvdgcB6G5ZymjAcg1FQGB_SbjQS_CmcazuurLN1jEmfZjeNLlhn3rAug0dY2_aptrFG-2oAo6i1cmSw4xcJM6EJEtpAVMvFX5pKYVFR7Ix0G3h_7aC3Cxoj5oWts1q6XoH3cljCioBmNwmLrrdwGIKpY2PZDz2MNouNo5-ID4l95T8Oo7ryy1i7g3h89vX43T_w2IexqvR58y_aohHSbrGITQg')" }}></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Robert Wilson</p>
<p className="text-xs text-slate-500 dark:text-slate-400">r.wilson@wanderlux.com</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                                        Support
                                    </span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-600 dark:text-slate-300">Active</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    10 mins ago
                                </td>
<td className="py-4 px-6 text-right">
<button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Edit Permissions</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="flex items-center justify-between px-6 py-4 border-t border-border-light dark:border-border-dark bg-slate-50 dark:bg-[#1a1a1a]">
<div className="text-sm text-slate-500 dark:text-slate-400">
                        Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">6</span> of <span className="font-medium text-slate-900 dark:text-white">42</span> staff members
                    </div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-slate-200 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="p-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
