"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function FeaturedTestimonialsManagerPage() {
  return (
    <div className="stitch-screen">
      {/* Noise Overlay */}
<div className="fixed inset-0 pointer-events-none z-50 bg-noise mix-blend-overlay"></div>
<div className="relative flex h-full min-h-screen w-full flex-col">
{/* Header */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-white/10 px-8 py-4 bg-background-dark/95 backdrop-blur-md sticky top-0 z-40">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-white">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30">
<span className="material-symbols-outlined !text-[20px]">flight_takeoff</span>
</div>
<h2 className="text-white text-xl font-bold tracking-tight">Wanderlux Admin</h2>
</div>
{/* Search */}
<div className="hidden md:flex relative group w-64">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40 group-focus-within:text-primary transition-colors">
<span className="material-symbols-outlined">search</span>
</div>
<input className="block w-full rounded-lg border border-white/10 bg-surface-dark py-2 pl-10 pr-3 text-sm text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-inner" placeholder="Search testimonials..." type="text"/>
</div>
</div>
{/* Nav & Profile */}
<div className="flex items-center gap-6">
<nav className="hidden lg:flex items-center gap-1 bg-surface-dark/50 p-1 rounded-lg border border-white/5">
<a className="px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">Dashboard</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">Bookings</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">Destinations</a>
<a className="px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary rounded-md shadow-sm border border-primary/20" href="#">Testimonials</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">Settings</a>
</nav>
<div className="h-6 w-px bg-white/10 hidden lg:block"></div>
<div className="flex items-center gap-4">
<button className="relative text-white/60 hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 size-2 bg-primary rounded-full border-2 border-background-dark"></span>
</button>
<button className="flex items-center gap-3 pl-2 group">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-white/10 group-hover:ring-primary transition-all" data-alt="Admin user profile photo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5svbe5QHCUxH1txbjtC1hfiyJBns4h4DSvF4d3n2GiQ7eYKT678opcb_1LpQL28YgAGJF2_ZQJXRgB0kXXChnUTJHX0LSLultPyRr3FSlm-sg2S0sfLd0NTrCt3eOf6dgwk0ECNHfqgptyhBJ1JJXtFDaCpQZRl-AV3cCElYl-lICDhVD1ufJ2jUYVGJDskJiKQamM9hanS4gizwdqLh79FgqwNr7JuRB5FqwlpQyHADZExxgeZBQCBsnCFKHBvGR5l_h-wZH_Q')" }}></div>
</button>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-1 flex justify-center py-8 px-4 md:px-8">
<div className="flex flex-col w-full max-w-6xl">
{/* Page Title Area */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div className="space-y-2">
<div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined !text-[18px]">verified</span>
<span>Content Management</span>
</div>
<h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Testimonials</h1>
<p className="text-slate-400 max-w-2xl text-base font-normal leading-relaxed">Drag and drop cards to reorder the testimonials displayed on the homepage marquee. Ensure a mix of destinations is prioritized.</p>
</div>
<div className="flex gap-3">
<button className="glass-card flex items-center justify-center gap-2 h-10 px-5 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all">
<span className="material-symbols-outlined !text-[18px]">add</span>
<span>Add New</span>
</button>
<button className="flex items-center justify-center gap-2 h-10 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined !text-[18px]">visibility</span>
<span>Preview on Site</span>
</button>
</div>
</div>
{/* Testimonials Grid (Drag & Drop Context) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Card 1 */}
<div className="group relative glass-card p-5 rounded-xl cursor-move hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 flex flex-col gap-4">
<div className="absolute top-4 right-4 text-white/20 group-hover:text-white/60 cursor-grab active:cursor-grabbing">
<span className="material-symbols-outlined">drag_indicator</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/10" data-alt="Portrait of Sarah Jenkins" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZAjVCyN1sD_cYw3rQAi48J8dHM9xFBFY2D8296DRDf9BIJq6ZJEXcUBos0frScP8E0rui3Vd2PbZ56kFucFRojGpGjYQqOfkpL7Gurl2JW8QaA5WzCKEnsyJfh1k356eyJVXqFNXbyiQwdyDmMMEqFM4PsifmZ27_iLFEg-sovxsg_1mNGvrVhcbnf5erL3N6yuWUviEa87HnlfKuezunoCv81X2a_KEApgWnVosb6939OwRdBmYNwIo5yo8TWTfMFjHfWW8OOQ')" }}></div>
<div className="absolute -bottom-1 -right-1 bg-surface-dark border border-white/10 rounded-full p-1 flex items-center justify-center">
<span className="material-symbols-outlined text-yellow-500 !text-[14px]">star</span>
</div>
</div>
<div>
<h3 className="text-white font-bold text-lg leading-tight">Sarah Jenkins</h3>
<div className="flex items-center gap-1 text-primary text-xs font-medium uppercase tracking-wide mt-1">
<span className="material-symbols-outlined !text-[14px]">location_on</span>
<span>Paris, France</span>
</div>
</div>
</div>
<div className="relative">
<span className="absolute -top-2 -left-1 text-4xl text-white/10 font-serif leading-none">“</span>
<p className="text-slate-300 text-sm leading-relaxed relative z-10 pl-2">
                                Wanderlux made our honeymoon absolutely magical. The itinerary was perfectly balanced between sightseeing and relaxation.
                            </p>
</div>
<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-slate-500 font-mono">ID: #TST-842</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[16px]">edit</span>
</button>
<button className="p-1.5 rounded bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined !text-[16px]">delete</span>
</button>
</div>
</div>
</div>
{/* Card 2 */}
<div className="group relative glass-card p-5 rounded-xl cursor-move hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 flex flex-col gap-4">
<div className="absolute top-4 right-4 text-white/20 group-hover:text-white/60 cursor-grab active:cursor-grabbing">
<span className="material-symbols-outlined">drag_indicator</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/10" data-alt="Portrait of Michael Chen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjFBka1ntRYl2kdEGI_xmtmWplARh3S44xbCM8CNjyGYY_INGEzLVTmUqvVOnusaXJ0n06amyGEHy1eBW1m2PPOUrqsGnBAzogv7OHBuncPRfFLYKO1e4fBCq3ID9SLLTKE6mr8-4TSJ-cdQGDTLQnpTEgWOv_5IfxGljHw85Bqktgw-MHKLLJtW66yX9LuvibYVyCh3lLN2WH0_mWhWOxWB7S0RPkBXpOp6-gXbIP_yzsab0m82OylXkv6gkr0C86SPlG7RG9dw')" }}></div>
<div className="absolute -bottom-1 -right-1 bg-surface-dark border border-white/10 rounded-full p-1 flex items-center justify-center">
<span className="material-symbols-outlined text-yellow-500 !text-[14px]">star</span>
</div>
</div>
<div>
<h3 className="text-white font-bold text-lg leading-tight">Michael Chen</h3>
<div className="flex items-center gap-1 text-primary text-xs font-medium uppercase tracking-wide mt-1">
<span className="material-symbols-outlined !text-[14px]">location_on</span>
<span>Kyoto, Japan</span>
</div>
</div>
</div>
<div className="relative">
<span className="absolute -top-2 -left-1 text-4xl text-white/10 font-serif leading-none">“</span>
<p className="text-slate-300 text-sm leading-relaxed relative z-10 pl-2">
                                I've never experienced such attention to detail. The private tea ceremony in Kyoto was a highlight of my life. Unforgettable.
                            </p>
</div>
<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-slate-500 font-mono">ID: #TST-901</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[16px]">edit</span>
</button>
<button className="p-1.5 rounded bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined !text-[16px]">delete</span>
</button>
</div>
</div>
</div>
{/* Card 3 */}
<div className="group relative glass-card p-5 rounded-xl cursor-move hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 flex flex-col gap-4">
<div className="absolute top-4 right-4 text-white/20 group-hover:text-white/60 cursor-grab active:cursor-grabbing">
<span className="material-symbols-outlined">drag_indicator</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/10" data-alt="Portrait of Emma Thompson" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSqY9EM3C4dVXQS5oHKEXdSrGYZmpFnuKnyiTsieCaWSIf4oBKc4ygwODoOP2Rr1rU6cGk7YyRSnmmcu2nN2PXo8A1V9-_lgvgo0cuBdvbpQ4GXhnsQLwCLqYVvx53ghLYT-MZA7YXCfAmJgG1qNPpBCxoQrR3Xj_B1gM0Dw-5UwDECajrPEYFKKDaxwrPLL7RHOXXqp9aqa9V494Rkq4uv1mR9LTj-dFV5iOsc2Rcd7dVbfmu9uAFvCNmFSPFUoAzNX1vEgNGXA')" }}></div>
<div className="absolute -bottom-1 -right-1 bg-surface-dark border border-white/10 rounded-full p-1 flex items-center justify-center">
<span className="material-symbols-outlined text-yellow-500 !text-[14px]">star</span>
</div>
</div>
<div>
<h3 className="text-white font-bold text-lg leading-tight">Emma &amp; Tom</h3>
<div className="flex items-center gap-1 text-primary text-xs font-medium uppercase tracking-wide mt-1">
<span className="material-symbols-outlined !text-[14px]">location_on</span>
<span>Santorini, Greece</span>
</div>
</div>
</div>
<div className="relative">
<span className="absolute -top-2 -left-1 text-4xl text-white/10 font-serif leading-none">“</span>
<p className="text-slate-300 text-sm leading-relaxed relative z-10 pl-2">
                                Watching the sunset from our private villa was breathtaking. Everything was arranged flawlessly. Highly recommend!
                            </p>
</div>
<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-slate-500 font-mono">ID: #TST-334</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[16px]">edit</span>
</button>
<button className="p-1.5 rounded bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined !text-[16px]">delete</span>
</button>
</div>
</div>
</div>
{/* Card 4 */}
<div className="group relative glass-card p-5 rounded-xl cursor-move hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 flex flex-col gap-4">
<div className="absolute top-4 right-4 text-white/20 group-hover:text-white/60 cursor-grab active:cursor-grabbing">
<span className="material-symbols-outlined">drag_indicator</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/10" data-alt="Portrait of Isabella Rodriguez" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB74RcHdSfSvSYmLYAzhbKJDC6pS5b8sN0RcwZnLmhDzLbJarFJW6D7Cv-UZO1E2G4a5cq7C3QAEdhT2cfgO1FFZLfNT1oBrdmVsOMleJCMs5HuEleEUjciUTg2YYDkbWFnZHwCAZMuyJClp4XNdbnMnXUVPOft6aSEj6loAKtXeI4c8trtmYqe74V8jfOZ7kDQiYnuPcppJM380tYFzirBqFheURZb85eflTxJj-VPDx9FkkiphNOBH7LS2k28qxlK5t-8Fa3aKA')" }}></div>
<div className="absolute -bottom-1 -right-1 bg-surface-dark border border-white/10 rounded-full p-1 flex items-center justify-center">
<span className="material-symbols-outlined text-yellow-500 !text-[14px]">star</span>
</div>
</div>
<div>
<h3 className="text-white font-bold text-lg leading-tight">Isabella R.</h3>
<div className="flex items-center gap-1 text-primary text-xs font-medium uppercase tracking-wide mt-1">
<span className="material-symbols-outlined !text-[14px]">location_on</span>
<span>Machu Picchu, Peru</span>
</div>
</div>
</div>
<div className="relative">
<span className="absolute -top-2 -left-1 text-4xl text-white/10 font-serif leading-none">“</span>
<p className="text-slate-300 text-sm leading-relaxed relative z-10 pl-2">
                                The hike was challenging but the guides were supportive and knowledgeable. Reaching the sun gate was a spiritual moment.
                            </p>
</div>
<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-slate-500 font-mono">ID: #TST-112</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[16px]">edit</span>
</button>
<button className="p-1.5 rounded bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined !text-[16px]">delete</span>
</button>
</div>
</div>
</div>
{/* Card 5 */}
<div className="group relative glass-card p-5 rounded-xl cursor-move hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 flex flex-col gap-4">
<div className="absolute top-4 right-4 text-white/20 group-hover:text-white/60 cursor-grab active:cursor-grabbing">
<span className="material-symbols-outlined">drag_indicator</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/10" data-alt="Portrait of David Kim" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPNXFsnGgvpBOdjhHsM5f7Iwnpdo3F4rRXSEca8z1WZSLjPDg0Oyd1nZUvCbiD6YfiYF2fiVr9aIC2A8A_asWECNiI0G9DzdLxfmB5VTN1NCUrahDiMhWfZXJpfDDI9gSTNEzE-066TqGl1j7V5w83cKr1dJK9CyhWWUVzzjqBMncJjh68IJllIOeEA1dGAiHF6kGjhkeYEAzxPkoqog2u68aAVyzPct2jOhty0Qk23im7n62bwt29iHwzDf64MXw-1WOp8jqOaw')" }}></div>
<div className="absolute -bottom-1 -right-1 bg-surface-dark border border-white/10 rounded-full p-1 flex items-center justify-center">
<span className="material-symbols-outlined text-yellow-500 !text-[14px]">star</span>
</div>
</div>
<div>
<h3 className="text-white font-bold text-lg leading-tight">David Kim</h3>
<div className="flex items-center gap-1 text-primary text-xs font-medium uppercase tracking-wide mt-1">
<span className="material-symbols-outlined !text-[14px]">location_on</span>
<span>Reykjavik, Iceland</span>
</div>
</div>
</div>
<div className="relative">
<span className="absolute -top-2 -left-1 text-4xl text-white/10 font-serif leading-none">“</span>
<p className="text-slate-300 text-sm leading-relaxed relative z-10 pl-2">
                                Seeing the northern lights was a bucket list item checked off in style. The glass igloo hotel was simply out of this world.
                            </p>
</div>
<div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-slate-500 font-mono">ID: #TST-559</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[16px]">edit</span>
</button>
<button className="p-1.5 rounded bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined !text-[16px]">delete</span>
</button>
</div>
</div>
</div>
{/* Add New Placeholder */}
<div className="group relative rounded-xl border-2 border-dashed border-white/10 hover:border-primary/50 cursor-pointer flex flex-col items-center justify-center gap-3 p-8 transition-colors bg-white/[0.02] hover:bg-white/[0.05] min-h-[220px]">
<div className="size-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-white/40 transition-all duration-300">
<span className="material-symbols-outlined">add_circle</span>
</div>
<div className="text-center">
<p className="text-white font-semibold group-hover:text-primary transition-colors">Add Testimonial</p>
<p className="text-sm text-slate-500 mt-1">Select from approved list</p>
</div>
</div>
</div>
{/* Footer / Status Bar */}
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 border-t border-white/5 pt-6 gap-4">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>All changes saved automatically</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-300 transition-colors" href="#">Support</a>
<a className="hover:text-slate-300 transition-colors" href="#">Documentation</a>
<span className="text-slate-700">|</span>
<span>Version 2.4.0</span>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
