"use client";

import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminBookingsPage() {
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminHeader 
            title="Bookings Management" 
            description="Track, manage and schedule all premium travel reservations."
          >
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-dark bg-background-dark text-text-secondary hover:bg-surface-dark hover:text-white text-sm font-medium transition-colors">
                <span className="material-symbols-outlined text-[20px]">file_download</span>
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/30 hover:bg-red-700 text-sm font-bold transition-all">
                <span className="material-symbols-outlined text-[20px]">add</span>
                New Booking
              </button>
            </div>
          </AdminHeader>
          
          <div className="flex-1 flex flex-row overflow-hidden">
            {/* Table Section */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col gap-6">
{/* Stats Cards Row */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
<div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
<span className="material-symbols-outlined">list_alt</span>
</div>
<div>
<p className="text-xs text-text-secondary font-medium uppercase">Total</p>
<p className="text-xl font-bold text-white">1,248</p>
</div>
</div>
<div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
<div className="p-3 rounded-lg bg-green-500/10 text-green-500">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<p className="text-xs text-text-secondary font-medium uppercase">Confirmed</p>
<p className="text-xl font-bold text-white">842</p>
</div>
</div>
<div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
<div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="text-xs text-text-secondary font-medium uppercase">Pending</p>
<p className="text-xl font-bold text-white">320</p>
</div>
</div>
<div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
<div className="p-3 rounded-lg bg-red-500/10 text-red-500">
<span className="material-symbols-outlined">cancel</span>
</div>
<div>
<p className="text-xs text-text-secondary font-medium uppercase">Cancelled</p>
<p className="text-xl font-bold text-white">86</p>
</div>
</div>
</div>
{/* Filter Bar */}
<div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm" placeholder="Search by Booking ID, Customer, Destination..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
<select className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]">
<option>All Services</option>
<option>Flight</option>
<option>Hotel</option>
<option>Car Rental</option>
<option>Concierge</option>
</select>
<select className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]">
<option>Status: All</option>
<option>Confirmed</option>
<option>Pending</option>
<option>Cancelled</option>
</select>
<button className="px-4 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:bg-surface-dark hover:bg-background-dark transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
</div>
{/* Data Table */}
<div className="flex-1 overflow-auto px-6 pb-6">
<div className="min-w-full inline-block align-middle">
<div className="border rounded-xl border-border-dark border-gray-200 overflow-hidden bg-surface-dark">
<table className="min-w-full divide-y divide-border-dark">
<thead className="bg-background-dark">
<tr>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider w-12" scope="col">
<input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Booking ID</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Customer</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Service</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Destination</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Date</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Amount</th>
<th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Status</th>
<th className="px-6 py-4 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border-dark bg-surface-dark">
{/* Row 1 */}
<tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer">
<td className="px-6 py-4 whitespace-nowrap">
<input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm font-mono text-text-secondary">#WL-8492</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-cover bg-center mr-3" data-alt="Profile of James" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-DGj0qMrjY5MTkCxJletOLZDyYwtoowPWULQvoWo73xRALN-Ppw3GptT0njshiLMjJFt8p73gPbbbgNqH83kw1QhqsL0UeP-Z_gla2ctjcLr9xU0djAi8fqKtY0g7Mw64FlxBSepGg81Xpw3NexqL6HYmUjM0MqNfLx91Q7E4SSM6LCQxK1d_kcuzxmID89nwUD50UeLWk09V6MXdapBGC1JrVQGlDO96mAVsYBuYF0DQc6zsEo-9iRMQW8Ob9jLw_3yQz85DgA')` }}></div>
<div>
<div className="text-sm font-medium text-white">James Sullivan</div>
<div className="text-xs text-text-secondary">VIP Member</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-text-secondary">
<span className="material-symbols-outlined text-[18px]">flight</span>
<span className="text-sm">First Class</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-white">Tokyo, Japan</div>
<div className="text-xs text-text-secondary">Haneda Int.</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-text-secondary">Oct 24, 2023</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-bold text-white">$4,250.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">
                                                    Confirmed
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer bg-primary/5 relative">
{/* Selected Indicator Bar */}
<td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
<td className="px-6 py-4 whitespace-nowrap pl-6">
<input defaultChecked className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm font-mono text-text-secondary">#WL-8493</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-cover bg-center mr-3" data-alt="Profile of Sarah" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN7Ui3pKQ3mXX47PRR8fESg-3YFj9Lgo0pmut1eGdpeqW4g2YAScuJWVPxngaADzTYOLc_A6g2ox-c0e1WAia7mmZdh1-b6BCU3nxDk20j4T6YXWHX7ljnjKARceYj3tmUBs5EpSCPLjIPPVdaJMMohHu8lVwaGVUZchSZZvUxg7Iy56q45ZeCMvIsPU2Xfn90sjbMcjcOblWTgisXO0zA7MjUu0t9MvRXw95jZnhIUz-jCoPK3W8TbIMo2PuHz1n7NtnDEjdIuQ')` }}></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-text-secondary">New Client</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-text-secondary">
<span className="material-symbols-outlined text-[18px]">hotel</span>
<span className="text-sm">Luxury Suite</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-white">Paris, France</div>
<div className="text-xs text-text-secondary">Ritz Paris</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-text-secondary">Nov 02, 2023</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-bold text-white">$8,900.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                                                    Pending
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer">
<td className="px-6 py-4 whitespace-nowrap">
<input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm font-mono text-text-secondary">#WL-8494</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 text-xs font-bold">
                                                        MR
                                                    </div>
<div>
<div className="text-sm font-medium text-white">Michael Ross</div>
<div className="text-xs text-text-secondary">Corporate</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-text-secondary">
<span className="material-symbols-outlined text-[18px]">directions_car</span>
<span className="text-sm">Limousine</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-white">London, UK</div>
<div className="text-xs text-text-secondary">Heathrow Pickup</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-text-secondary">Nov 05, 2023</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-bold text-white">$350.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/30 text-red-400 border border-red-800">
                                                    Cancelled
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer">
<td className="px-6 py-4 whitespace-nowrap">
<input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm font-mono text-text-secondary">#WL-8495</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-cover bg-center mr-3" data-alt="Profile of David" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_9J0so7ulj9pXmwvigG1oG3nb3zQoWkQGJC4yqRHZqLMfQOooPuJWcTYUIQ7XNR1La8SS_YBIrZqlAojBeORzWpkK5eKvy-y_IJKiloBy0ITt29bcmkvczdnoqO_XSDbG9-qeQ-Jeth1wNNVVAdrbVAA0uyPwSeKSeg48sINDJ7nxZZOPw5w2E1PCueXHeZq3sfSci3ZywD0Qdvo6XZNXY391kM1yA4VfapjsHnExh9R3VAUDlAvHh6Inr9hPNs1xdHFO32hhnQ')` }}></div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-text-secondary">Gold Member</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-text-secondary">
<span className="material-symbols-outlined text-[18px]">sailing</span>
<span className="text-sm">Yacht Charter</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-white">Maldives</div>
<div className="text-xs text-text-secondary">Private Island</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-text-secondary">Dec 12, 2023</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-bold text-white">$12,500.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">
                                                    Confirmed
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer">
<td className="px-6 py-4 whitespace-nowrap">
<input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-sm font-mono text-text-secondary">#WL-8496</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-cover bg-center mr-3" data-alt="Profile of Emily" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuClCFvdUCwm65h1sqEr46OosRM29En-hmaHfSlLVqnCrx_LF87yM3H0eJZhGkx-Iz9CttSJ6JVGv1Q0VVRU0GT5KZLyRtgSdwBsN9vpjtqvlLb5WV_ykPodseFVILG1L-XG9LzpDmbG7mZGxkfTAs_h9i5OPvjpeSYVePoUuetLeJzRoUaRRVYyflINWsGwP261dJzJigBxt8GUmprB3TAdQrpZhhOr_hgM7aTGOl1dAb7wsaxAnBX721PoCEmHRbHqMZmfgktJ2w')` }}></div>
<div>
<div className="text-sm font-medium text-white">Emily Blunt</div>
<div className="text-xs text-text-secondary">VIP Member</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-text-secondary">
<span className="material-symbols-outlined text-[18px]">flight</span>
<span className="text-sm">First Class</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-white">New York, USA</div>
<div className="text-xs text-text-secondary">JFK Int.</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-text-secondary">Jan 10, 2024</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-bold text-white">$3,800.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                                                    Pending
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
{/* Pagination */}
<div className="bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-border-dark sm:px-6">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-sm text-text-secondary">
                                                Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">5</span> of <span className="font-medium text-white">1248</span> results
                                            </p>
</div>
<div>
<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary hover:bg-surface-dark hover:text-white" href="#">
<span className="sr-only">Previous</span>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</a>
<a aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold" href="#">1</a>
<a className="bg-background-dark border-border-dark text-text-secondary hover:bg-surface-dark hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">2</a>
<a className="bg-background-dark border-border-dark text-text-secondary hover:bg-surface-dark hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">3</a>
<span className="relative inline-flex items-center px-4 py-2 border border-border-dark bg-background-dark text-sm font-medium text-text-secondary dark:text-text-secondary">...</span>
<a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary hover:bg-surface-dark hover:text-white" href="#">
<span className="sr-only">Next</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
</a>
</nav>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Detail Slide-over Panel (Right Side) */}
<div className="w-[400px] border-l border-border-dark bg-surface-dark flex flex-col h-full shadow-2xl z-10 hidden xl:flex">
<div className="p-6 border-b border-border-dark flex justify-between items-center">
<h2 className="text-lg font-bold text-white">Booking Details</h2>
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
{/* Header Status */}
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-xs text-text-secondary uppercase font-semibold mb-1">Status</span>
<span className="px-2.5 py-1 w-fit inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                                    Pending Approval
                                </span>
</div>
<div className="text-right">
<span className="text-xs text-text-secondary uppercase font-semibold mb-1 block">Booking ID</span>
<span className="text-lg font-mono font-bold text-white">#WL-8493</span>
</div>
</div>
{/* Customer Info */}
<div className="bg-background-dark rounded-xl p-4 border border-border-dark">
<div className="flex items-center gap-4 mb-4">
<div className="h-12 w-12 rounded-full bg-cover bg-center" data-alt="Profile Detail" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhAU1ZsntFf8gNTi9ljjPmLvigz-iuYEMjS3HQJcwBiJTitpRhtowMHO5qtS2RB0eMhmU03g7osx7YabcfcFJQUDAs8a2ApjGGmfSwClAEG0lbVmETdar83lkWdUaQljgXYbq4kX33Q4xBGpvLmUWfWT-pZ_Qlsktwe5C3hVQmpljzSzngmSffQ8RTEXcCZLMljoAwJbacNEu-SUjLp28faSfH7IVfDjz3cZEI6w33KbwBtjuXKCUgmLG9-iIP_bNIrO5o8OY0zg')` }}></div>
<div>
<h3 className="font-bold text-white">Sarah Jenkins</h3>
<p className="text-sm text-text-secondary">sarah.j@example.com</p>
<p className="text-sm text-text-secondary">+1 (555) 012-3456</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded border border-border-dark bg-surface-dark text-xs font-semibold text-text-secondary hover:text-primary transition-colors">View Profile</button>
<button className="flex-1 py-2 rounded border border-border-dark bg-surface-dark text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Message</button>
</div>
</div>
{/* Trip Details */}
<div>
<h3 className="text-sm font-bold text-white uppercase mb-3">Trip Itinerary</h3>
<div className="relative pl-4 border-l-2 border-dashed border-border-dark dark:border-slate-700 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-dark"></div>
<p className="text-xs text-text-secondary">Check-in · Nov 02, 14:00</p>
<p className="font-bold text-white">Ritz Paris</p>
<p className="text-sm text-text-secondary">Luxury Suite</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
<p className="text-xs text-text-secondary">Check-out · Nov 06, 11:00</p>
<p className="font-bold text-white">Ritz Paris</p>
<p className="text-sm text-text-secondary">4 Nights</p>
</div>
</div>
</div>
{/* Payment Info */}
<div className="border-t border-border-dark pt-4">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-text-secondary">Base Price</span>
<span className="text-sm font-medium dark:text-text-secondary">$8,000.00</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-text-secondary">Taxes &amp; Fees</span>
<span className="text-sm font-medium dark:text-text-secondary">$900.00</span>
</div>
<div className="flex justify-between items-center pt-2 border-t border-dashed border-border-dark">
<span className="font-bold text-white">Total</span>
<span className="text-xl font-bold text-primary">$8,900.00</span>
</div>
</div>
</div>
{/* Actions */}
<div className="p-6 bg-background-dark border-t border-border-dark flex gap-3">
<button className="flex-1 py-2.5 rounded-lg border border-red-900 bg-red-900/10 text-red-400 font-bold text-sm hover:bg-red-900/20 transition-colors">
                            Reject
                        </button>
<button className="flex-1 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
                            Confirm
                        </button>
</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
