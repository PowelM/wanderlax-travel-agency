"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function CheckoutExtrasAddOnsPage() {
  return (
    <div className="stitch-screen">
      <div className="layout-container flex h-full grow flex-col">
{/* Top Navigation */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 md:px-20 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span className="material-symbols-outlined">travel</span>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight font-display">Wanderlux</h2>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-6 text-sm font-medium">
<a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Destinations</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Experiences</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Support</a>
</nav>
<button className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">close</span>
</button>
</div>
</header>
<main className="flex-1 px-4 md:px-20 py-8 max-w-7xl mx-auto w-full">
<div className="flex flex-col lg:flex-row gap-12">
{/* Main Content Area */}
<div className="flex-1 space-y-8">
{/* Progress Stepper */}
<div className="space-y-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-bold uppercase tracking-widest text-primary">Step 2: Customization</span>
<span className="text-sm font-medium text-slate-500">66% Complete</span>
</div>
<div className="flex gap-2">
<div className="h-1.5 flex-1 rounded-full bg-primary"></div>
<div className="h-1.5 flex-1 rounded-full bg-primary"></div>
<div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-800"></div>
</div>
<h1 className="text-3xl md:text-4xl font-bold font-display">Enhance Your Journey</h1>
<p className="text-slate-600 dark:text-slate-400 max-w-2xl">Tailor your luxury experience with our curated selection of exclusive add-ons and premium services.</p>
</div>
{/* Add-ons Grid */}
<div className="grid gap-6">
{/* Card 1 */}
<div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 hover:border-primary/50 transition-colors group">
<div className="w-full md:w-56 h-40 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg shrink-0" data-alt="Luxury red helicopter flying over blue coastline" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbQq8ytSvsuDMKCxnnGEkOi-lGL6SQRHb24Nrg1dTUJ4H787qrtxCXxux_phiwQ5xpe_h9c2ITmiKE70Dvo9YTeMlefxgx3-VvexevZalrQo_76KGkFOJ5gmxPSPruZofNZ6UewpBbsKWNCBmAycviFSnAeZCBugEvNPXvaH6auGs6ZG1xKfLrBetxNkt7ipH-JD7EfeEsnDKj5ZFPYKxqkecjzFRrduT6iV7cg63J-qVpCEsHJAh19waRzKqkDglVNVJvrAntNQ')" }}></div>
<div className="flex flex-1 flex-col justify-between py-1">
<div className="space-y-2">
<div className="flex justify-between items-start">
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Private Helicopter Tour</h3>
<span className="text-lg font-bold text-primary">$1,250</span>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Experience breathtaking aerial views of the coastline with a private 45-minute flight. Includes champagne reception.</p>
</div>
<div className="flex items-center justify-between mt-6">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
<span className="material-symbols-outlined text-sm">schedule</span> 45 Minutes
                                    </div>
<button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Add to Trip</span>
</button>
</div>
</div>
</div>
{/* Card 2 */}
<div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl bg-white dark:bg-slate-900/50 border border-primary/40 p-4 relative group">
<div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">Selected</div>
<div className="w-full md:w-56 h-40 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg shrink-0" data-alt="Classic red vintage convertible sports car" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQaL3lxUN7yCCLOsbvJ585UvfMhTMNwNtLYAHfc8y70jLWZI0JBUOS6QyIieogSjvOATFIFwj7kA0LNCb5fgLQoSaMyycS58MXgMCRGaSW0Sji3z3czLkPIP2Nqma9OyElXnkTQfTCYuBW0wBY6czdZse7t6EhOFBGTDOn6lEwWfwD7X5vwNjYvQ0m8C0WYqCOdVPGFUoCbX8pJWrqZ8w6Ag3DezIfjeNkDPSrIhyjYXBWmL3xLRXOWUbxFoKW7In0qSzrfw6Ziw')" }}></div>
<div className="flex flex-1 flex-col justify-between py-1">
<div className="space-y-2">
<div className="flex justify-between items-start">
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vintage Car Rental</h3>
<span className="text-lg font-bold text-primary">$450</span>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Drive a beautifully restored 1960s classic convertible for the entire day. Perfect for coastal roads.</p>
</div>
<div className="flex items-center justify-between mt-6">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
<span className="material-symbols-outlined text-sm">directions_car</span> 24h Access
                                    </div>
<button className="flex items-center gap-2 px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-bold hover:bg-red-500 hover:text-white transition-all">
<span className="material-symbols-outlined text-[20px]">check</span>
<span>Added</span>
</button>
</div>
</div>
</div>
{/* Card 3 */}
<div className="flex flex-col md:flex-row items-stretch gap-6 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 hover:border-primary/50 transition-colors group">
<div className="w-full md:w-56 h-40 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg shrink-0" data-alt="Wine tasting glasses in a dark luxury cellar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiBSRlnh3jPwk3hzIwEONqqW_EVCaXarmwhO0pc7sSim8e0m4kyALrXOpOYLxxiC9qvyf7ka1UmaDQe4I4Hc9_6dpGs4AkcGe7ywIC1ufms8M3wuj-9usgqRwWtgN7-Yv1ZZyjDoXpQnbmNo-Kjatz5uyZAmVw2iWZF1ZJqowDkecgbC1VSTCkeHqnT3jT8kqBtC3pF8LgYUQc3uIcAsxux4o9d969iRDeoVyZZlSa1eKHvIzV9yTTBtejX3WxQjpVxS76C47M8A')" }}></div>
<div className="flex flex-1 flex-col justify-between py-1">
<div className="space-y-2">
<div className="flex justify-between items-start">
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Premium Wine Tasting</h3>
<span className="text-lg font-bold text-primary">$280</span>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Exclusive private cellar tour followed by a 5-course pairing meal curated by our master sommelier.</p>
</div>
<div className="flex items-center justify-between mt-6">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
<span className="material-symbols-outlined text-sm">restaurant</span> 5-Course Meal
                                    </div>
<button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Add to Trip</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/* Sidebar Summary */}
<aside className="w-full lg:w-96">
<div className="sticky top-24 space-y-6">
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<h2 className="text-xl font-bold font-display">Booking Summary</h2>
</div>
<div className="p-6 space-y-4">
{/* Experience Info */}
<div className="flex gap-4 items-start">
<div className="size-16 rounded-lg bg-cover bg-center shrink-0" data-alt="Mediterranean coastline at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO6NwjI8qm8XecqNYYEskuqoPZDChEFJtLVtMH2h3on2RQ3sLMVzES2sEkUecdfiaqLfKemjvr465pL_K9G32awdmJD9E6PecZch6MAkpc48FsCNgRlkUG48ymvQnjF68HueQwo_L88gtgKhH78lS3R9ZW_QePqbrVSC95qCc4DSC0WM53rGy5mGmSCIaowOSXnrv00ZYPVQKpZznp-m86Cr1FV7eYJPEWKMPVFX3wp_jdK5CMToSgj7Fj99cuquEG5fuehld3AQ')" }}></div>
<div>
<h4 className="font-bold text-slate-900 dark:text-slate-100">Amalfi Coast Luxury Escape</h4>
<p className="text-xs text-slate-500 mt-1">Oct 12 - Oct 18 • 2 Guests</p>
</div>
</div>
<div className="pt-4 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Base Experience</span>
<span className="font-semibold text-slate-900 dark:text-slate-100">$8,400.00</span>
</div>
<div className="flex justify-between text-sm">
<div className="flex items-center gap-1 group">
<span className="text-slate-500">Add-ons (1)</span>
<span className="material-symbols-outlined text-xs text-primary">info</span>
</div>
<span className="font-semibold text-slate-900 dark:text-slate-100">$450.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Service Fee</span>
<span className="font-semibold text-slate-900 dark:text-slate-100">$125.00</span>
</div>
<div className="pt-4 mt-4 border-t border-dashed border-slate-300 dark:border-slate-700 flex justify-between items-end">
<div>
<p className="text-xs font-bold uppercase text-slate-400">Total Amount</p>
<p className="text-3xl font-extrabold text-primary">$8,975.00</p>
</div>
<div className="text-right">
<p className="text-[10px] text-slate-500">Inc. taxes &amp; fees</p>
</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-50 dark:bg-slate-950/50">
<button className="glare-button w-full bg-primary text-white py-4 rounded-xl font-extrabold text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span>Continue to Payment</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<p className="text-center text-[11px] text-slate-500 mt-4 uppercase tracking-widest font-bold">Secure checkout powered by Wanderlux</p>
</div>
</div>
{/* Trust Badge */}
<div className="flex items-center gap-4 px-4 py-3 bg-primary/5 border border-primary/10 rounded-xl">
<span className="material-symbols-outlined text-primary">verified_user</span>
<p className="text-xs font-medium text-slate-600 dark:text-slate-400">Your booking is protected by the Wanderlux Assurance Guarantee.</p>
</div>
</div>
</aside>
</div>
</main>
{/* Footer */}
<footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 px-6 md:px-20 text-center">
<p className="text-sm text-slate-500">© 2024 Wanderlux Lifestyle &amp; Travel. All rights reserved.</p>
</footer>
</div>
    </div>
  );
}
