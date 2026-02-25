"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function BookingConfirmationSuccessPage() {
  return (
    <div className="stitch-screen">
      <div className="fixed inset-0 pointer-events-none noise-bg"></div>
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* Top Navigation Bar */}
<header className="flex items-center justify-between border-b border-primary/10 px-6 md:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="text-primary">
<span className="material-symbols-outlined text-3xl">travel_explore</span>
</div>
<h2 className="text-xl font-extrabold tracking-tight uppercase">Wanderlux</h2>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
<div className="h-10 w-10 rounded-full border-2 border-primary/30 overflow-hidden">
<img className="h-full w-full object-cover" data-alt="User profile avatar with elegant lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7vZC5u3miJlnjFQu5RkcTsELWYvnxFp0mnyzHh4Ol6NaemQ6D2hqiRIdcb2JBEtVmHPWZrVRctIHESV-RrtdrpulMbhYycR22d0KXPmXqCZmJYb6jo8JsVt2yycO--5TYXGmpE5mhSn9xaMyPoGzHc43-kLku5UPC-pne4wXRHSkjBlq71vfX5jynF--sjjkPn-Vpxp0yDAid4SOuVAicp6VRuPWhOJOjsPIS3fCxOrHWTm4smagYxUZIOMV3pcyXwxuxc-QJnw"/>
</div>
</div>
</header>
<main className="flex-1 flex flex-col items-center justify-start px-4 py-12 md:py-20 max-w-5xl mx-auto w-full">
{/* Success Header */}
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
<span className="material-symbols-outlined text-4xl">check_circle</span>
</div>
<h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                        Your Journey Begins
                    </h1>
<p className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-widest uppercase">
                        Confirmation #WLX-98234751
                    </p>
</div>
{/* Primary Trip Card */}
<div className="w-full @container mb-12">
<div className="flex flex-col @3xl:flex-row overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-primary/10 shadow-2xl shadow-primary/5">
<div className="w-full @3xl:w-1/2 h-64 @3xl:h-auto bg-center bg-cover relative" data-alt="Dramatic sunset over Amalfi Coast cliffs" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaKt0WemCOhrKSZIQQfKmH2vuMjcQh6FFMg8XN00KO_NUBLNWDrQT6_2lkvNIR6zs-zZ5JcVRuH3ufI_4-plTRcERufsoe0f2GUkL8geI9Xcs8Q7tYwDr30X4xrOr8CmHl2jNXL2eJoH6IVAoxj6HkPSXXqUswRxDP4zldgp-wyGkwEgNFNVfqFdVcRt6eihW0-y9XuF8AtKx7-8I_goM5oX0Q1JuoAS3y_XZM3rxhG52njrBqyIefew_gsrHONgxSbJUJqR5XwQ')" }}>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent @3xl:hidden"></div>
</div>
<div className="flex flex-col p-8 md:p-10 justify-center gap-6 w-full @3xl:w-1/2">
<div>
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">Booking Confirmed</span>
<h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">Amalfi Coast Luxury Escape</h2>
<p className="text-slate-500 dark:text-slate-400 mt-2 text-base">7 Nights • Private Villa • Crimson Suite</p>
</div>
<div className="grid grid-cols-2 gap-4 border-y border-primary/10 py-6">
<div>
<p className="text-xs text-slate-400 uppercase tracking-tighter">Dates</p>
<p className="font-semibold">Oct 12 - Oct 19, 2024</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-tighter">Travelers</p>
<p className="font-semibold">2 Adults</p>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs text-slate-400 uppercase tracking-tighter">Total Paid</p>
<p className="text-2xl font-black text-primary">$12,450.00</p>
</div>
<button className="glare-effect flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                                    View Itinerary
                                </button>
</div>
</div>
</div>
</div>
{/* Next Steps Section */}
<div className="w-full grid md:grid-cols-3 gap-6 mb-16">
<div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-primary/5 hover:border-primary/20 transition-all">
<span className="material-symbols-outlined text-primary mb-4 text-3xl">mail</span>
<h3 className="font-bold text-lg mb-2">Check Your Inbox</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">We've sent a detailed confirmation email with your digital vouchers and travel insurance docs.</p>
</div>
<div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-primary/5 hover:border-primary/20 transition-all">
<span className="material-symbols-outlined text-primary mb-4 text-3xl">fact_check</span>
<h3 className="font-bold text-lg mb-2">Prepare Documents</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Ensure your passport is valid for at least 6 months from travel date. Visa requirements may apply.</p>
</div>
<div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-primary/5 hover:border-primary/20 transition-all">
<span className="material-symbols-outlined text-primary mb-4 text-3xl">support_agent</span>
<h3 className="font-bold text-lg mb-2">Contact Concierge</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Our 24/7 luxury concierge is ready to handle your dining reservations and private transfers.</p>
</div>
</div>
{/* Footer Actions */}
<div className="flex flex-col md:flex-row items-center gap-6">
<button className="w-full md:w-auto px-8 py-4 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                        Explore More Destinations
                    </button>
<button className="w-full md:w-auto px-8 py-4 rounded-xl bg-slate-200 dark:bg-slate-800 font-bold hover:brightness-110 transition-colors">
                        Return to Home
                    </button>
</div>
{/* Decorative Map Element */}
<div className="mt-20 w-full h-48 rounded-3xl overflow-hidden grayscale opacity-30 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="Stylized map showing coastal regions" data-location="Amalfi Coast, Italy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtpp_lUD6Wx3wnuzINHW9WMLz3_mEokfZhskOjjSQygRdb9rF18X9H1ZAeKK4jpJlbzPZFvl0KFgDAZj6nAGTgchR97zP8okQ0v_Bvqqszk76USpWN6zvDAyQ6Apo0jjA_X0UaGeQsP66LaZ94X_c3URF1MwZcgxAup3uJpZ44w6Q51oXjX-EjvZScOGBLIgvIRPe6l3qMrCrgYaSfSnVTO38K3VS4-vDoQPt85DnrEu1WQm8v8PhboL7IM39JScWMDJKBLD-ZyQ"/>
</div>
</main>
<footer className="py-10 px-6 border-t border-primary/10 text-center text-slate-500 dark:text-slate-400 text-sm">
<p>© 2024 Wanderlux Travel. All rights reserved. Member of Virtuoso Luxury Network.</p>
</footer>
</div>
</div>
    </div>
  );
}
