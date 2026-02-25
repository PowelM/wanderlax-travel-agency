"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function FinancialPerformanceAnalyticsPage() {
  return (
    <div className="stitch-screen">
      {/* Sidebar Navigation */}
<aside className="w-full md:w-64 flex-shrink-0 bg-[#181112] border-r border-[#39282c] flex flex-col justify-between h-screen overflow-y-auto">
<div className="flex flex-col gap-4 p-4">
<div className="flex gap-3 items-center mb-6">
<div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-primary" data-alt="Profile picture of a woman" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2SnKWJzreEeTyEJ29zn6kPripRlExmK6W3wCyuDTMhM-qarTlwjy2h3fV4vk8sPKhCiJSE0WH7abaZiIVTVIe5ZgETuSlECmnIuWzQ02XKpJrWTVGe3q-2N_TcqCVkeY-YhlRrA5JXGVOa2VTrFEpPMQUfaGySIA5pzz0lfsZYP9aWKT8WKbEyViFeKZFFmnvXeWUcY34-Ea4FRTNyQ4VlUBjSJohXCSHW3zl6IBXkGYp8LeZj0i1EzuZ87MDr3KKSsHOzs50wg')" }}></div>
<div className="flex flex-col">
<h1 className="text-white text-base font-medium leading-normal">Wanderlux Admin</h1>
<p className="text-[#b99da2] text-xs font-normal leading-normal">Financial Overview</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 text-[#b99da2] hover:text-white hover:bg-[#39282c] rounded-lg transition-colors group" href="#">
<span className="material-symbols-outlined text-[#b99da2] group-hover:text-primary transition-colors">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#b99da2] hover:text-white hover:bg-[#39282c] rounded-lg transition-colors group" href="#">
<span className="material-symbols-outlined text-[#b99da2] group-hover:text-primary transition-colors">calendar_month</span>
<span className="text-sm font-medium">Bookings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-primary/20 text-white rounded-lg border-l-4 border-primary" href="#">
<span className="material-symbols-outlined text-primary fill-current">attach_money</span>
<span className="text-sm font-medium">Financials</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#b99da2] hover:text-white hover:bg-[#39282c] rounded-lg transition-colors group" href="#">
<span className="material-symbols-outlined text-[#b99da2] group-hover:text-primary transition-colors">group</span>
<span className="text-sm font-medium">Customers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#b99da2] hover:text-white hover:bg-[#39282c] rounded-lg transition-colors group" href="#">
<span className="material-symbols-outlined text-[#b99da2] group-hover:text-primary transition-colors">settings</span>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>
</div>
<div className="p-4 mt-auto">
<div className="bg-gradient-to-br from-[#39282c] to-[#211114] p-4 rounded-xl border border-[#543b40]">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary">trending_up</span>
<span className="text-white text-sm font-bold">Pro Tip</span>
</div>
<p className="text-[#b99da2] text-xs leading-relaxed">Schedule automated weekly reports to stay on top of KPIs.</p>
</div>
</div>
</aside>
{/* Main Content */}
<main className="flex-1 flex flex-col h-screen overflow-y-auto bg-background-light dark:bg-background-dark relative">
{/* Header Section */}
<header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#39282c] px-6 py-4 flex flex-wrap justify-between items-center gap-4">
<div>
<h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Financial Performance</h2>
<p className="text-slate-500 dark:text-[#b99da2] text-sm">Revenue analytics and fiscal reports</p>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-white dark:bg-[#181112] border border-slate-200 dark:border-[#39282c] rounded-lg px-3 py-1.5 shadow-sm">
<span className="material-symbols-outlined text-slate-400 dark:text-[#b99da2] text-lg mr-2">calendar_today</span>
<span className="text-slate-700 dark:text-slate-200 text-sm font-medium">Jan 1, 2024 - Dec 31, 2024</span>
<span className="material-symbols-outlined text-slate-400 dark:text-[#b99da2] text-lg ml-2 cursor-pointer hover:text-primary">expand_more</span>
</div>
<button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">download</span>
<span>Export Report</span>
</button>
</div>
</header>
<div className="p-6 max-w-7xl mx-auto w-full flex flex-col gap-6">
{/* KPI Cards Row */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
{/* Card 1: Net Revenue */}
<div className="bg-white dark:bg-[#181112] rounded-xl p-5 border border-slate-200 dark:border-[#39282c] shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-slate-500 dark:text-[#b99da2] text-xs font-medium uppercase tracking-wider">Net Revenue</p>
<h3 className="text-slate-900 dark:text-white text-2xl font-bold mt-1">$4,280,500</h3>
</div>
<div className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-sm mr-0.5">arrow_upward</span> 12.5%
                        </div>
</div>
{/* Sparkline SVG */}
<div className="h-12 w-full mt-2">
<svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0 20 Q 10 18, 20 15 T 40 10 T 60 18 T 80 5 T 100 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<defs>
<linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: "0.2" }}></stop>
<stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: "0" }}></stop>
</linearGradient>
</defs>
<path className="text-primary" d="M0 20 Q 10 18, 20 15 T 40 10 T 60 18 T 80 5 T 100 12 V 25 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
{/* Card 2: Gross Profit Margin */}
<div className="bg-white dark:bg-[#181112] rounded-xl p-5 border border-slate-200 dark:border-[#39282c] shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-slate-500 dark:text-[#b99da2] text-xs font-medium uppercase tracking-wider">Gross Profit</p>
<h3 className="text-slate-900 dark:text-white text-2xl font-bold mt-1">28.4%</h3>
</div>
<div className="bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-sm mr-0.5">arrow_downward</span> 1.2%
                        </div>
</div>
{/* Sparkline SVG */}
<div className="h-12 w-full mt-2">
<svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0 10 Q 15 15, 30 12 T 50 18 T 70 14 T 85 20 T 100 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path className="text-primary" d="M0 10 Q 15 15, 30 12 T 50 18 T 70 14 T 85 20 T 100 15 V 25 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
{/* Card 3: Avg Booking Value */}
<div className="bg-white dark:bg-[#181112] rounded-xl p-5 border border-slate-200 dark:border-[#39282c] shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-slate-500 dark:text-[#b99da2] text-xs font-medium uppercase tracking-wider">Avg Booking</p>
<h3 className="text-slate-900 dark:text-white text-2xl font-bold mt-1">$3,150</h3>
</div>
<div className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-sm mr-0.5">arrow_upward</span> 5.8%
                        </div>
</div>
{/* Sparkline SVG */}
<div className="h-12 w-full mt-2">
<svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0 22 Q 20 18, 40 10 T 70 8 T 100 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path className="text-primary" d="M0 22 Q 20 18, 40 10 T 70 8 T 100 2 V 25 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
{/* Card 4: Refunds */}
<div className="bg-white dark:bg-[#181112] rounded-xl p-5 border border-slate-200 dark:border-[#39282c] shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-slate-500 dark:text-[#b99da2] text-xs font-medium uppercase tracking-wider">Refunds</p>
<h3 className="text-slate-900 dark:text-white text-2xl font-bold mt-1">$125,400</h3>
</div>
<div className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-sm mr-0.5">arrow_downward</span> 0.5%
                        </div>
</div>
{/* Sparkline SVG */}
<div className="h-12 w-full mt-2">
<svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0 5 Q 20 10, 40 8 T 60 15 T 80 12 T 100 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path className="text-primary" d="M0 5 Q 20 10, 40 8 T 60 15 T 80 12 T 100 20 V 25 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
</div>
{/* Main Chart Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Large Chart: Projected vs Actual */}
<div className="lg:col-span-2 bg-white dark:bg-[#181112] rounded-xl border border-slate-200 dark:border-[#39282c] shadow-sm p-6 flex flex-col">
<div className="flex flex-wrap justify-between items-center mb-6">
<div>
<h3 className="text-slate-900 dark:text-white text-lg font-bold">Revenue Projections</h3>
<p className="text-slate-500 dark:text-[#b99da2] text-sm">Fiscal Year 2024 Performance</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-xs text-slate-500 dark:text-[#b99da2]">Actual</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-[#39282c]"></span>
<span className="text-xs text-slate-500 dark:text-[#b99da2]">Projected</span>
</div>
</div>
</div>
<div className="flex-1 min-h-[300px] w-full relative">
{/* Chart SVG Implementation */}
<svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 800 300">
{/* Grid Lines */}
<line opacity="0.5" stroke="#39282c" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
<line opacity="0.5" stroke="#39282c" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="125" y2="125"></line>
<line opacity="0.5" stroke="#39282c" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
<line opacity="1" stroke="#39282c" strokeWidth="1" x1="0" x2="800" y1="275" y2="275"></line>
{/* Projected Line (Gray) */}
<path d="M0 250 C 100 240, 200 200, 300 180 S 500 140, 600 100 S 800 60, 800 60" fill="none" stroke="#39282c" strokeDasharray="6" strokeWidth="3"></path>
{/* Actual Line (Primary/Crimson) */}
<defs>
<linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#db143c" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="#db143c" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0 260 C 100 250, 200 190, 300 150 S 500 100, 600 80 S 800 40, 800 40" fill="none" stroke="#db143c" strokeWidth="3"></path>
<path d="M0 260 C 100 250, 200 190, 300 150 S 500 100, 600 80 S 800 40, 800 40 V 300 H 0 Z" fill="url(#chartGradient)" stroke="none"></path>
{/* Tooltip Point Example */}
<circle cx="600" cy="80" fill="#181112" r="6" stroke="#db143c" strokeWidth="3"></circle>
</svg>
{/* Floating Tooltip (Simulated) */}
<div className="absolute top-[60px] left-[70%] transform -translate-x-1/2 bg-slate-900 text-white text-xs p-2 rounded shadow-lg border border-[#39282c]">
<p className="font-bold">Aug 2024</p>
<p>Rev: $1.2M <span className="text-emerald-400 text-[10px]">(+14%)</span></p>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-slate-500 dark:text-[#b99da2]">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span className="font-bold text-primary">Aug</span>
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
</div>
</div>
{/* Donut Chart: Revenue by Service */}
<div className="lg:col-span-1 bg-white dark:bg-[#181112] rounded-xl border border-slate-200 dark:border-[#39282c] shadow-sm p-6 flex flex-col">
<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6">Revenue Breakdown</h3>
<div className="relative flex-1 flex items-center justify-center min-h-[220px]">
{/* Donut Chart SVG */}
<svg className="transform -rotate-90" height="220" viewBox="0 0 100 100" width="220">
{/* Background Circle */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#211114" strokeWidth="12"></circle>
{/* Segment 1: Tours (40%) */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#db143c" strokeDasharray="100 151" strokeDashoffset="0" strokeWidth="12"></circle>
{/* Segment 2: Hotels (30%) */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#a30f2d" strokeDasharray="75 176" strokeDashoffset="-105" strokeWidth="12"></circle>
{/* Segment 3: Flights (20%) */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#6b0a1d" strokeDasharray="50 201" strokeDashoffset="-185" strokeWidth="12"></circle>
{/* Segment 4: Car Hire (10%) */}
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#3d0510" strokeDasharray="25 226" strokeDashoffset="-240" strokeWidth="12"></circle>
</svg>
{/* Inner Text */}
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-slate-500 dark:text-[#b99da2] text-xs font-medium">Total</span>
<span className="text-slate-900 dark:text-white text-2xl font-bold">$12.5M</span>
</div>
</div>
<div className="mt-6 flex flex-col gap-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#db143c]"></span>
<span className="text-slate-700 dark:text-slate-300">Tours &amp; Packages</span>
</div>
<span className="text-slate-900 dark:text-white font-semibold">40%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#a30f2d]"></span>
<span className="text-slate-700 dark:text-slate-300">Hotel Bookings</span>
</div>
<span className="text-slate-900 dark:text-white font-semibold">30%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#6b0a1d]"></span>
<span className="text-slate-700 dark:text-slate-300">Flights</span>
</div>
<span className="text-slate-900 dark:text-white font-semibold">20%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#3d0510]"></span>
<span className="text-slate-700 dark:text-slate-300">Car Hire</span>
</div>
<span className="text-slate-900 dark:text-white font-semibold">10%</span>
</div>
</div>
</div>
</div>
{/* Recent Transactions Table */}
<div className="bg-white dark:bg-[#181112] rounded-xl border border-slate-200 dark:border-[#39282c] shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-[#39282c] flex justify-between items-center">
<h3 className="text-slate-900 dark:text-white text-lg font-bold">Recent High-Value Transactions</h3>
<a className="text-primary text-sm font-medium hover:underline" href="#">View All</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-[#211114]">
<th className="p-4 text-xs font-semibold text-slate-500 dark:text-[#b99da2] uppercase tracking-wider">Transaction ID</th>
<th className="p-4 text-xs font-semibold text-slate-500 dark:text-[#b99da2] uppercase tracking-wider">Date</th>
<th className="p-4 text-xs font-semibold text-slate-500 dark:text-[#b99da2] uppercase tracking-wider">Customer</th>
<th className="p-4 text-xs font-semibold text-slate-500 dark:text-[#b99da2] uppercase tracking-wider">Service</th>
<th className="p-4 text-xs font-semibold text-slate-500 dark:text-[#b99da2] uppercase tracking-wider text-right">Amount</th>
<th className="p-4 text-xs font-semibold text-slate-500 dark:text-[#b99da2] uppercase tracking-wider text-center">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-[#39282c]">
<tr className="group hover:bg-slate-50 dark:hover:bg-[#211114]/50 transition-colors">
<td className="p-4 text-sm font-medium text-slate-900 dark:text-white">#TRX-8921</td>
<td className="p-4 text-sm text-slate-500 dark:text-[#b99da2]">Oct 24, 2024</td>
<td className="p-4 text-sm text-slate-900 dark:text-white flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-[#39282c] bg-cover bg-center" data-alt="Customer avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfBvj_hla6Ad8kLx1ZB8SjCCOzFogQmJp-X87jNmAlrAcrd-Aiv2h41HYgJFJvncVIlaIUvRDFKOTui1cYrgbRDAEhsUxHFzJqchW4Em2yBF__eBm2sCqMoiighXJh7GqF7uZvN8rokA0wVmmO9apO_-X327LLs4vxKxXJnTCUWEG-_STUXjFLlGldTaJqn-5dTiqwGSgf5NxnL0ENU3dGYv1fsl_Eqb9cJmuMpN-xmynHRAFAPEipp47OzxYFPqe7xjuF_9UFlQ')" }}></div>
<span>James Wilson</span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-[#b99da2]">Luxury Safari Package</td>
<td className="p-4 text-sm font-bold text-slate-900 dark:text-white text-right">$12,450.00</td>
<td className="p-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        Completed
                                    </span>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#211114]/50 transition-colors">
<td className="p-4 text-sm font-medium text-slate-900 dark:text-white">#TRX-8920</td>
<td className="p-4 text-sm text-slate-500 dark:text-[#b99da2]">Oct 23, 2024</td>
<td className="p-4 text-sm text-slate-900 dark:text-white flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-[#39282c] bg-cover bg-center" data-alt="Customer avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCW-KO2ToC4kgyJH6c4przVK9nEZOoZLsniw92HyphjvRQaOMohgF0bp1CCFFuCm6Irq7P5V2UjklDOKCB4mfREC0MhEwZA-Aa1UmpQkNHhZO1ZpNfLCWRQrWuuO9TLmGEcZuFKWrJL8-H9TiY2YklbNGbeCM4kRj8lUUAYV-5vx0vRGUc4wtasHXOqNQ5stTzDimCkYTVr9BJ67-fo3W1TgirypdIMIDsh7Z7uuas13kITkDn0Fu7grrTPH-farFluXF8D88AZXw')" }}></div>
<span>Sarah Connor</span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-[#b99da2]">Maldives Resort Booking</td>
<td className="p-4 text-sm font-bold text-slate-900 dark:text-white text-right">$8,200.00</td>
<td className="p-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                        Pending
                                    </span>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-[#211114]/50 transition-colors">
<td className="p-4 text-sm font-medium text-slate-900 dark:text-white">#TRX-8919</td>
<td className="p-4 text-sm text-slate-500 dark:text-[#b99da2]">Oct 22, 2024</td>
<td className="p-4 text-sm text-slate-900 dark:text-white flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-[#39282c] bg-cover bg-center" data-alt="Customer avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALd1_dP163FO6uWph68xbONQOd98C8G-BrhL5llCLEe_iXXCo3wjItcbe4trH3AtMJUaEF94HFkwH-2_GPe_GKnhgJF7SQzvN1Who_4-a57etgMjysH95roIs8oioAwz0Sao3VQcM-wmBOpZayPAvXpPfQp3JxnyRiPHlvZgZTRf70e9O50p6CVIyb_SqtcuvFsPlDhn_vZkjRv5NIgVNwbhf8sZiNnMVu6ih7o7ER9VtSHNK8Lj1U2XNHplN2xZCCUcKNh31Vgw')" }}></div>
<span>Michael Chen</span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-[#b99da2]">Business Class Flights (x4)</td>
<td className="p-4 text-sm font-bold text-slate-900 dark:text-white text-right">$15,890.00</td>
<td className="p-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        Completed
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<footer className="mt-8 text-center text-slate-500 dark:text-[#b99da2] text-xs pb-4">
                © 2024 Wanderlux Travel Co. All rights reserved. Confidential Financial Data.
            </footer>
</div>
</main>
    </div>
  );
}
