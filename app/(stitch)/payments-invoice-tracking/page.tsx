"use client";
 
 
import React from 'react';

export default function PaymentsInvoiceTrackingPage() {
  return (
    <div className="stitch-screen">
      <div className="relative flex min-h-screen w-full flex-col lg:flex-row">
{/* Sidebar Navigation */}
<aside className="w-full lg:w-[280px] bg-background-dark border-b lg:border-b-0 lg:border-r border-surface-dark flex flex-col p-4 shrink-0">
<div className="flex items-center gap-3 px-2 mb-8 mt-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Abstract geometric luxury logo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBn2cGY7720kApaRuoAD_BvNCTHezDl28m2ez2aCFdK06mALzUboT116_aU3_rKVw8NMXwZBuGQYEqIh5Yop9ymRce1idqgzbkX340qE2jjmimeVYpg5bazNMOzF504PBlukWMUVR50GUrAnmazIJumrqVRz3Rvp2GfhsHojIZXZeQn9S56XrrirZKhLd2vPk62zZ-zjErR0YpItuOZIgHzx7KIOpfMk0lgxMIu2sLfQkHgftZQ5UioUgP1tOEotjnWfb2ejwC2-g')" }}></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-bold leading-normal">Wanderlux</h1>
<p className="text-text-secondary text-sm font-normal leading-normal">Admin Panel</p>
</div>
</div>
<nav className="flex flex-col gap-2 flex-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-white">grid_view</span>
<p className="text-sm font-medium">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-white">calendar_month</span>
<p className="text-sm font-medium">Bookings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-white">group</span>
<p className="text-sm font-medium">Clients</p>
</a>
{/* Active State */}
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-dark text-white shadow-lg shadow-black/20" href="#">
<span className="material-symbols-outlined text-primary fill-1">credit_card</span>
<p className="text-sm font-medium">Payments</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-white">settings</span>
<p className="text-sm font-medium">Settings</p>
</a>
</nav>
<div className="mt-auto border-t border-surface-dark pt-4">
<button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-primary transition-colors group">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium">Logout</p>
</button>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col h-screen overflow-hidden bg-background-dark">
{/* Top Header */}
<header className="flex items-center justify-between border-b border-surface-dark px-6 py-4 bg-background-dark/95 backdrop-blur-sm z-10">
<div className="flex flex-col">
<h2 className="text-white text-2xl font-bold tracking-tight">Payments &amp; Invoicing</h2>
<p className="text-text-secondary text-sm">Manage transactions and track revenue flow</p>
</div>
<div className="flex items-center gap-4">
<label className="hidden md:flex flex-col min-w-64 h-10 relative group">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-surface-dark border border-transparent group-focus-within:border-primary/50 transition-all">
<div className="text-text-secondary flex items-center justify-center pl-3">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="w-full bg-transparent border-none text-white placeholder:text-text-secondary/70 text-sm focus:ring-0 px-3" placeholder="Search..."/>
</div>
</label>
<button className="relative p-2 text-text-secondary hover:text-white transition-colors rounded-full hover:bg-surface-dark">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-background-dark"></span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 cursor-pointer ring-2 ring-surface-dark hover:ring-primary transition-all" data-alt="Portrait of admin user" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBw-y5FXdb5hinqcfMFk0BgacCuTZL-_GKl8lnHCqPNRQSQxqx9KAT-W9qWo6kDlG8XbhsChEhzhbHY9xhaHp5wKU64CFSqr2DHzsUNOddo9F0sA-D1sccsZmTVlev9fJ_r_iMrw_pvSOzL_GoaRqxwjAKmUtxGOrouLgA0UHFIoi3yrakOotvePyF_WasOykFejEH0teFNyOuAowax15Xsf1HQZH5y8bxH7wmN3-UR6-yaX1HOYHunz_JKcTEybPQ40QDRGN5e1Q')" }}></div>
</div>
</header>
{/* Scrollable Content */}
<div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-6">
{/* Stats & Chart Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Total Revenue Card */}
<div className="bg-surface-dark rounded-xl p-6 border border-white/5 flex flex-col justify-between">
<div>
<p className="text-text-secondary text-sm font-medium mb-1">Total Revenue (YTD)</p>
<h3 className="text-white text-3xl font-bold tracking-tight">$1,248,320.50</h3>
</div>
<div className="flex items-center gap-2 mt-4">
<span className="flex items-center text-accent-success bg-accent-success/10 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                +12.5%
                            </span>
<span className="text-text-secondary text-xs">vs last year</span>
</div>
</div>
{/* Payment Methods Chart */}
<div className="bg-surface-dark rounded-xl p-6 border border-white/5 col-span-1 lg:col-span-2">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-white font-semibold">Payment Methods Distribution</h3>
<p className="text-text-secondary text-xs mt-1">Transaction volume by provider</p>
</div>
<select className="bg-background-dark border-none text-text-secondary text-xs rounded px-2 py-1 focus:ring-1 focus:ring-primary">
<option>Last 30 Days</option>
<option>Last Quarter</option>
<option>Year to Date</option>
</select>
</div>
<div className="flex items-end justify-around h-32 gap-4">
{/* Stripe Bar */}
<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">$125k</div>
<div className="w-full max-w-[60px] bg-primary/20 rounded-t-lg relative h-24 overflow-hidden group-hover:bg-primary/30 transition-colors">
<div className="absolute bottom-0 w-full bg-primary h-[65%] rounded-t-lg"></div>
</div>
<span className="text-text-secondary text-xs font-medium">Stripe</span>
</div>
{/* M-Pesa Bar */}
<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">$45k</div>
<div className="w-full max-w-[60px] bg-primary/20 rounded-t-lg relative h-24 overflow-hidden group-hover:bg-primary/30 transition-colors">
<div className="absolute bottom-0 w-full bg-[#0bda92] h-[35%] rounded-t-lg"></div>
</div>
<span className="text-text-secondary text-xs font-medium">M-Pesa</span>
</div>
{/* Bank Transfer Bar */}
<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">$89k</div>
<div className="w-full max-w-[60px] bg-primary/20 rounded-t-lg relative h-24 overflow-hidden group-hover:bg-primary/30 transition-colors">
<div className="absolute bottom-0 w-full bg-blue-500 h-[80%] rounded-t-lg"></div>
</div>
<span className="text-text-secondary text-xs font-medium">Bank Transfer</span>
</div>
</div>
</div>
</div>
{/* Transactions Table Section */}
<div className="flex flex-col gap-4">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<h3 className="text-white text-lg font-semibold">Recent Transactions</h3>
<div className="flex flex-wrap gap-3 w-full sm:w-auto">
{/* Filter Button */}
<button className="flex items-center gap-2 bg-surface-dark text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
<span className="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </button>
{/* Create Invoice Button */}
<button className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-lg">add</span>
                                Create Manual Invoice
                            </button>
</div>
</div>
{/* Search Bar Mobile/Tablet Table Context */}
<div className="relative w-full sm:w-96 mb-2">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-text-secondary text-lg">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-surface-dark text-white placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm" placeholder="Search invoice ID, customer, or amount" type="text"/>
</div>
{/* Table */}
<div className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Invoice ID</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Customer</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Service Type</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Date</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Amount</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Method</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">Status</th>
<th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-secondary text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">
{/* Row 1 */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-4 px-6 font-mono text-text-secondary">#INV-2024-001</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-cover bg-center" data-alt="Portrait of Sarah Jenkins" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5yIapT6uuyR2bHLjOaO2nDTFbwqaMQeyQqJyfjo_Bjnwr30hbs5pXm5rClTHen6r-ITGAx7-bEnstu8EwVlCrOWestBnzCepEE5zHQDHOCiJVe1NPpHpswOPSjpzdbJPD6vUGeLaQbRWcAlTspAHVE56f5xTKNXTJ72_Uhxv9O8Y9fh8Sq8Agvl2MDSk3BDgNI26jKIsTVAt1Zsizeyf3qsP2RNUZdY4lB055DlAC6OsJO2zasg8yIMsZpiMZ4Aoeeb775EkP4w')" }}></div>
<div className="font-medium text-white">Sarah Jenkins</div>
</div>
</td>
<td className="py-4 px-6 text-text-secondary">Luxury Safari Package</td>
<td className="py-4 px-6 text-text-secondary">Oct 24, 2023</td>
<td className="py-4 px-6 font-bold text-white">$4,250.00</td>
<td className="py-4 px-6 text-text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-lg">credit_card</span>
                                            Stripe
                                        </td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
<span className="size-1.5 rounded-full bg-green-400"></span>
                                                Paid
                                            </span>
</td>
<td className="py-4 px-6 text-right">
<button className="text-text-secondary hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-4 px-6 font-mono text-text-secondary">#INV-2024-002</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">MK</div>
<div className="font-medium text-white">Michael K.</div>
</div>
</td>
<td className="py-4 px-6 text-text-secondary">Private Jet Charter</td>
<td className="py-4 px-6 text-text-secondary">Oct 23, 2023</td>
<td className="py-4 px-6 font-bold text-white">$12,400.00</td>
<td className="py-4 px-6 text-text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-lg">account_balance</span>
                                            Bank Transfer
                                        </td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
<span className="size-1.5 rounded-full bg-yellow-400"></span>
                                                Pending
                                            </span>
</td>
<td className="py-4 px-6 text-right">
<button className="text-text-secondary hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-4 px-6 font-mono text-text-secondary">#INV-2024-003</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-cover bg-center" data-alt="Portrait of David Chen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUiaz-TLMJn3lDQ-oG-v05_wEgAq-sl-3Di3KZXT4Q5dB9pssdBD7SABe1vCLzoMCF8GzX3SU1MgnkyrUGUm-XzoT-65b7QleKFqfzCWFjAOHT-LtCVLvwfOAJqihCFAs17gEDXJ0-55iadOQfjLo9WOZ-zWbPKFhC3qRBQpFt8zyXQJ2Mujo-3JdEhiLSd3h69p05U78yvSmMLUklpbdCnmCRVpEDD49kAObHnfoCel9z_RKJpBmV46Au54GkimcgwBk-1T-guA')" }}></div>
<div className="font-medium text-white">David Chen</div>
</div>
</td>
<td className="py-4 px-6 text-text-secondary">Maldives Resort Booking</td>
<td className="py-4 px-6 text-text-secondary">Oct 22, 2023</td>
<td className="py-4 px-6 font-bold text-white">$8,150.00</td>
<td className="py-4 px-6 text-text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-lg">credit_card</span>
                                            Stripe
                                        </td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="size-1.5 rounded-full bg-red-400"></span>
                                                Overdue
                                            </span>
</td>
<td className="py-4 px-6 text-right">
<button className="text-text-secondary hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-4 px-6 font-mono text-text-secondary">#INV-2024-004</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">EL</div>
<div className="font-medium text-white">Elena L.</div>
</div>
</td>
<td className="py-4 px-6 text-text-secondary">City Tour &amp; Concierge</td>
<td className="py-4 px-6 text-text-secondary">Oct 21, 2023</td>
<td className="py-4 px-6 font-bold text-white">$950.00</td>
<td className="py-4 px-6 text-text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-lg">smartphone</span>
                                            M-Pesa
                                        </td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
<span className="size-1.5 rounded-full bg-green-400"></span>
                                                Paid
                                            </span>
</td>
<td className="py-4 px-6 text-right">
<button className="text-text-secondary hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-4 px-6 font-mono text-text-secondary">#INV-2024-005</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-cover bg-center" data-alt="Portrait of Alara B" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrdDUM43Hg2geX78s_5MdYHIH_4MRHmFqG-cdhKK4naSeGiSI1iPOS_wo48oGbjz2QDy78rV4Jn0GWoSIyakiHJ0hmz5CPpDFNPzsE0Tsti-t74mnHCQakJkCLr57N3c1fukyYQA0klDcHu1zlMuEtgGNb5WFYWem3LJFd_MSQMOc7T0La2pfqCIIzoyaPryQPVkfM-oz4gAny6wiYQ2v5eSTN8YRs3CnwGGImyrPKz1NfQF0fgf9NN-6cGQvKsMzeXeqqNLi_SA')" }}></div>
<div className="font-medium text-white">Alara B.</div>
</div>
</td>
<td className="py-4 px-6 text-text-secondary">Custom Itinerary</td>
<td className="py-4 px-6 text-text-secondary">Oct 20, 2023</td>
<td className="py-4 px-6 font-bold text-white">$2,100.00</td>
<td className="py-4 px-6 text-text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-lg">credit_card</span>
                                            Stripe
                                        </td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
<span className="size-1.5 rounded-full bg-gray-400"></span>
                                                Refunded
                                            </span>
</td>
<td className="py-4 px-6 text-right">
<button className="text-text-secondary hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="border-t border-white/5 bg-background-dark/30 px-6 py-4 flex items-center justify-between">
<p className="text-xs text-text-secondary">Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">5</span> of <span className="font-medium text-white">24</span> results</p>
<div className="flex gap-2">
<button className="px-3 py-1 rounded border border-white/10 text-text-secondary text-xs hover:bg-white/5 hover:text-white disabled:opacity-50 transition-colors">Previous</button>
<button className="px-3 py-1 rounded border border-white/10 text-text-secondary text-xs hover:bg-white/5 hover:text-white transition-colors">Next</button>
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
