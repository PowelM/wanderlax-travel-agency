"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function AdminFleetManagementOverviewPage() {
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full flex-col overflow-hidden">
{/* Top Navigation */}
<header className="flex items-center justify-between border-b border-border-dark bg-surface-dark px-6 py-3 shrink-0">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-white">
<div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span className="material-symbols-outlined text-xl">diamond</span>
</div>
<h2 className="text-white text-lg font-bold leading-tight tracking-tight">Wanderlux Admin</h2>
</div>
{/* Search Bar */}
<div className="hidden md:flex relative w-64">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="block w-full rounded-lg border-0 bg-background-dark py-2 pl-10 pr-4 text-white placeholder:text-text-secondary focus:ring-1 focus:ring-primary sm:text-sm sm:leading-6" placeholder="Search..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-primary hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="hidden sm:inline">Add New Vehicle</span>
</button>
<div className="h-8 w-[1px] bg-border-dark mx-2"></div>
<button className="text-text-secondary hover:text-white transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-primary ring-2 ring-surface-dark"></span>
</button>
<button className="text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="flex items-center gap-3 pl-2">
<div className="h-9 w-9 rounded-full bg-cover bg-center border border-border-dark" data-alt="User profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2aQtwcYkEoRI7I9Emfjrf_zR9-yU3hcR-PfXtffJWcqiSt7xtah4J5oWEu8gPDFmBNebYQEm8lUK68JOD3h8-_005I6T_BBm7fW2dv9IWWeYIkleHqmBGFDnUrPzq_wUsfY45QdZzZ8TMJWAirPVgxZ-oukizaXDHC8s_PtfKV9-DIq590UHWbWubxpfaw_IlNijrtczuabhKqI7YZqigizE_NVZ3BBwKpzFu6b0BZa2VFkSQAu8jdCZrYLyrNminZnlLYLpMYw')" }}></div>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">
{/* Sidebar Navigation */}
<nav className="hidden lg:flex w-64 flex-col justify-between border-r border-border-dark bg-background-dark p-4 shrink-0 overflow-y-auto">
<div className="flex flex-col gap-6">
<div>
<p className="px-3 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">Main Menu</p>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-dark text-white border-l-2 border-primary group" href="#">
<span className="material-symbols-outlined text-primary">directions_car</span>
<span className="font-medium">Fleet</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
<span className="font-medium">Reservations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
<span className="font-medium">Customers</span>
</a>
</div>
</div>
<div>
<p className="px-3 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">Fleet Management</p>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">build</span>
<span className="font-medium">Maintenance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">analytics</span>
<span className="font-medium">Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">local_gas_station</span>
<span className="font-medium">Fuel Log</span>
</a>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-border-dark">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium">Sign Out</span>
</a>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-dark">
{/* Header & Stats */}
<div className="p-6 pb-2 overflow-y-auto custom-scrollbar">
<div className="mb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<h1 className="text-3xl font-bold text-white mb-1">Fleet Overview</h1>
<p className="text-text-secondary">Manage and track all vehicles in the Wanderlux fleet.</p>
</div>
<div className="flex items-center gap-2 bg-surface-dark p-1 rounded-lg border border-border-dark self-start md:self-auto">
<button className="p-2 rounded bg-background-dark text-white shadow-sm">
<span className="material-symbols-outlined text-[20px]">grid_view</span>
</button>
<button className="p-2 rounded text-text-secondary hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">list</span>
</button>
</div>
</div>
{/* Stats Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/* Card 1 */}
<div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">directions_car</span>
</div>
<p className="text-text-secondary text-sm font-medium mb-1">Total Vehicles</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-bold text-white">45</h3>
<span className="text-emerald-400 text-xs font-medium flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                                        +5%
                                    </span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">key</span>
</div>
<p className="text-text-secondary text-sm font-medium mb-1">Currently Rented</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-bold text-white">28</h3>
<span className="text-emerald-400 text-xs font-medium flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                                        +12%
                                    </span>
</div>
<div className="w-full bg-background-dark rounded-full h-1 mt-3">
<div className="bg-primary h-1 rounded-full" style={{ width: "62%" }}></div>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">build</span>
</div>
<p className="text-text-secondary text-sm font-medium mb-1">In Maintenance</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-bold text-white">3</h3>
<span className="text-orange-400 text-xs font-medium flex items-center">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
                                        Attention
                                    </span>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">payments</span>
</div>
<p className="text-text-secondary text-sm font-medium mb-1">Monthly Revenue</p>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-bold text-white">$128.5k</h3>
<span className="text-emerald-400 text-xs font-medium flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                                        +8%
                                    </span>
</div>
</div>
</div>
</div>
{/* Filters & Search */}
<div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between">
<div className="relative w-full sm:w-96">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="block w-full rounded-lg border border-border-dark bg-surface-dark py-2.5 pl-10 pr-4 text-white placeholder:text-text-secondary focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Search by model, plate, or VIN..." type="text"/>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
<div className="flex items-center gap-2 bg-surface-dark border border-border-dark rounded-lg p-1">
<button className="px-3 py-1.5 rounded text-sm font-medium bg-primary text-white shadow-sm">All</button>
<button className="px-3 py-1.5 rounded text-sm font-medium text-text-secondary hover:text-white hover:bg-background-dark transition-colors">Luxury</button>
<button className="px-3 py-1.5 rounded text-sm font-medium text-text-secondary hover:text-white hover:bg-background-dark transition-colors">SUV</button>
<button className="px-3 py-1.5 rounded text-sm font-medium text-text-secondary hover:text-white hover:bg-background-dark transition-colors">Sports</button>
</div>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-dark bg-surface-dark text-text-secondary hover:text-white hover:border-primary transition-colors text-sm font-medium">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
<span>Filter</span>
</button>
</div>
</div>
{/* Vehicle Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 pb-8">
{/* Car Card 1 */}
<div className="group flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
<div className="relative h-48 w-full overflow-hidden bg-background-dark">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">Available</span>
</div>
<div className="absolute top-3 right-3 z-10">
<button className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Black luxury sedan front view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnCWeKjKSDfdcPP67eNOKuCBz9Sk9tpkV4z0wIOFUQ_WzwoIDT35SVClOCL74HTpdW276ppeJGutNBnyab7TtqpURUqePGTE8hpHGUCIQbq867Iozi2AAZvXcHGVKwNhO1IxG2Gb4QnF1_UkMInwJUi3L7JbdWRqeHOCC-DIqMI9-mZKoAE0AMzY67u7oBGmKqWJTwnYMVJSHR5X1n1InHLbySqhPc_Hj_vxgNY87Mhr7ib3p9T-10jb-4n4oUruyvVIUYv2CQVg"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Mercedes-Benz S-Class</h3>
<p className="text-text-secondary text-xs">Luxury Sedan</p>
</div>
<div className="text-right">
<p className="text-white font-bold">$250<span className="text-text-secondary text-xs font-normal">/day</span></p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>ABC-1234</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_gas_station</span>
<span>Diesel</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">speed</span>
<span>12k km</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Auto</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
<div className="flex -space-x-2">
{/* No active rental, maybe show last user or empty state */}
<span className="text-xs text-text-secondary italic">Last cleaned: 2h ago</span>
</div>
<button className="text-primary text-sm font-semibold hover:text-white transition-colors">Details →</button>
</div>
</div>
</div>
{/* Car Card 2 */}
<div className="group flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
<div className="relative h-48 w-full overflow-hidden bg-background-dark">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">Rented</span>
</div>
<div className="absolute top-3 right-3 z-10">
<button className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Dark grey luxury SUV side view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCDhFbosfflFvcK-YbMTBGNYNOgmhr1RjoIHmDOj8fjAsBFC3kyw3YOorehkVOhg_TR1k2od1hKn_7mbPqDnxJ_p2JR3FiW57TVhI3rN0LAPNq4Haa-IieOl3C7Ldeo_AmLhHGacjVPowzqtfHM-5ogHnFq-MgiaeCjSRSebdT8Fr4hgDyuYoe0qV_3QiQiJAYv2m3BOem-OF2YnujiVedFskOG_SUx16UX4lVU4qv_pN2G1irnQX0eShW5vzzMV729D7EcC5qKw"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Range Rover Autobiography</h3>
<p className="text-text-secondary text-xs">Premium SUV</p>
</div>
<div className="text-right">
<p className="text-white font-bold">$380<span className="text-text-secondary text-xs font-normal">/day</span></p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>RRA-9988</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_gas_station</span>
<span>Petrol</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">speed</span>
<span>45k km</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Auto</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-cover bg-center" data-alt="Current renter profile" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1eKpVNhfLN4Xff5OqUxBgwSQukfvYQ6r4tLjg9hSo3jSQMqh68_bvEUYRBZCv2yyDY-Fk9j-Ml9AEM465sFJ_Vv5lNNslmcCSbdqPRwwqks3UaaWcRWo4vHgcXt9S1cZOA46kg2_Gyo9Tit9hdJPdp5Qv2mr6RwDSxLKye2Fxpb8Ha29rU3r0zxSuQEliZgnuDy-BRrsO8qsw3vZ-doLOl2mgh0K59vOjf-tEZbw_-lTSdeqBBA-T6L9Kc8VnNewqng68lA8T-A')" }}></div>
<span className="text-xs text-text-secondary">Return: in 2 days</span>
</div>
<button className="text-primary text-sm font-semibold hover:text-white transition-colors">Details →</button>
</div>
</div>
</div>
{/* Car Card 3 */}
<div className="group flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
<div className="relative h-48 w-full overflow-hidden bg-background-dark">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center rounded-full bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-400/20">Maintenance</span>
</div>
<div className="absolute top-3 right-3 z-10">
<button className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 grayscale-[50%]" data-alt="Sports car front view dark lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArndRIjBo0X12YmQI6cVHiQH1wnquDlkRDyXUg6qk5kzfUHGNmN57GrObS2bAnzD4iOZ8J1kZRuhtdZTCXLke8eLWPiU7XEIiCWLTdtqicPQ1XFu0hKsDPoZ_VcYQZmxwvEodn3MAao9gCywGqj9fmcIusNIELrea3c9utOPlcdsJltutuAKr5bWZPQJNTxJKLknKUoDxTNyTakxe5F3MLZD1XfrmmaWLQlDPWoFEQXVMOy-jxL-LU_4QG7R0efRyMR5Acw5aZNg"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Porsche 911 Carrera</h3>
<p className="text-text-secondary text-xs">Sports Coupe</p>
</div>
<div className="text-right">
<p className="text-white font-bold">$450<span className="text-text-secondary text-xs font-normal">/day</span></p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>PRS-9111</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_gas_station</span>
<span>Petrol</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">speed</span>
<span>8k km</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Auto</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-orange-400 text-sm">build_circle</span>
<span className="text-xs text-text-secondary">Est. finish: 14 Oct</span>
</div>
<button className="text-primary text-sm font-semibold hover:text-white transition-colors">Details →</button>
</div>
</div>
</div>
{/* Car Card 4 */}
<div className="group flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
<div className="relative h-48 w-full overflow-hidden bg-background-dark">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">Available</span>
</div>
<div className="absolute top-3 right-3 z-10">
<button className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="White tesla model s parked" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxbtDXqMH03Z5Ysc-NwO7w1sISMpMZn47IcgBLiC-U_0bu5p9NMXRPbCQUe6BdJPkOF7rVR35jI2YWOz6I9ug80bpoyzXGqFNjjBhY5s6nyleKaEJTsNHtkcreAa_5fbqSh8SIdSgC1CxOG_pI_l94EdIZyKzLeQk7ezeritfGWe33H-zJslRBMl3gbFbS-Hi-UjWZ0-8Np3ALbMhrw5k_5Q4bRmVSXxr_zZaRLkHzqKLAVUdIb760BQ7VYFLHr_35pZzyu69qwg"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Tesla Model S Plaid</h3>
<p className="text-text-secondary text-xs">Electric Luxury</p>
</div>
<div className="text-right">
<p className="text-white font-bold">$220<span className="text-text-secondary text-xs font-normal">/day</span></p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>TSL-5544</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Electric</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">speed</span>
<span>15k km</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Auto</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
<div className="flex -space-x-2">
<span className="text-xs text-text-secondary italic">Last cleaned: 1 day ago</span>
</div>
<button className="text-primary text-sm font-semibold hover:text-white transition-colors">Details →</button>
</div>
</div>
</div>
{/* Car Card 5 */}
<div className="group flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
<div className="relative h-48 w-full overflow-hidden bg-background-dark">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">Rented</span>
</div>
<div className="absolute top-3 right-3 z-10">
<button className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="BMW X5 side view on road" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZWqlITk92Ss_uuQtqaasF_82RJZtd5RLPJn8yUUhHf0eCLziBB3VXZz758tb5CUXlEXpo3gCh_JvKpveeRz92Bmqkbl2KP-mh_u8C4tXuQ6tivA_4hHrDfAQ-9D6QpXyht1XiSmM9m-oNSUZyAfEtjBiyMcsvwtafd68hImbUK6yKpMUG0GtO1F4EQuoRBxMyaXqbVjQmQFP0KSX2mLqh4kcrgddGm19RbDdLCdQOHjk2ZAsooYFuDfKNhtwiBXtDyRun1WD2OA"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">BMW X5 xDrive</h3>
<p className="text-text-secondary text-xs">Luxury SUV</p>
</div>
<div className="text-right">
<p className="text-white font-bold">$290<span className="text-text-secondary text-xs font-normal">/day</span></p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>BMX-2023</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_gas_station</span>
<span>Diesel</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">speed</span>
<span>32k km</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Auto</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-cover bg-center" data-alt="Renter profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKDYt1feWC08i2Ht3FTI2d6YB_PCEFkvpAvjBUYvZPx81mxsly-fxhalCpvoUUEe4LflkNIBdgJYjhSGihn1DLK9c1CPHmVRe4f7b41jPZQI4UKmJIpuxGec8wlFZ1XhGOEOrbNaL4UzJxs3j4owaPmn733BP0h3TE1FrenElfLneOHPUmzBgURk7ONqMM0qs0B_Imb-q1hY4yfwbdZndzo_eDcQOqQQNbWM_X3j1hRVmhNpHPeEPADxw44ZJn6dY19xUwGJIKKg')" }}></div>
<span className="text-xs text-text-secondary">Return: Tomorrow</span>
</div>
<button className="text-primary text-sm font-semibold hover:text-white transition-colors">Details →</button>
</div>
</div>
</div>
{/* Car Card 6 */}
<div className="group flex flex-col bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
<div className="relative h-48 w-full overflow-hidden bg-background-dark">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">Available</span>
</div>
<div className="absolute top-3 right-3 z-10">
<button className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Audi A8 front aggressive angle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB8fcWpXGVy5U_ZMcAx7j7QzlegVq8pmb3Vc5YNMmAH9r6hLgP2nPjcgPm0PBO9b_blrsqMgFbhiWBIbTUXrZ2QWDJv3c42eQdpRPU35ibry3M3Iu1IpV_sA3IVKjniKcdq78THAKOsMRVeJbaocwSdNj4f-SfJ7gvvZf6-AodGTWe4XTDu3PIivcvm2hmdVGcRHlxIyOLyHGkSK0WvoSLeMeROtfAD80OI_rXGRHy_Cd81ehKumvraUZIdgASfcRlL6A2yAxSVA"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Audi A8 L</h3>
<p className="text-text-secondary text-xs">Executive Sedan</p>
</div>
<div className="text-right">
<p className="text-white font-bold">$270<span className="text-text-secondary text-xs font-normal">/day</span></p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>ADL-8888</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">local_gas_station</span>
<span>Hybrid</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">speed</span>
<span>10k km</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Auto</span>
</div>
</div>
<div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
<div className="flex -space-x-2">
<span className="text-xs text-text-secondary italic">New addition</span>
</div>
<button className="text-primary text-sm font-semibold hover:text-white transition-colors">Details →</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
    </div>
  );
}
