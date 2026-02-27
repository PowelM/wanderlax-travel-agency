"use client";
 
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function AboutWanderluxBrandStoryPage() {
  return (
    <div className="stitch-screen">
      <div className="grain-overlay"></div>
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/* Hero Section */}
<div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden pt-[72px]">
{/* Background Image with Parallax effect simulation via fixed attachment */}
<div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" data-alt="Luxury resort infinity pool overlooking mountains at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC5UFg0aCydtBv62hLgK0uy0zqD8-A3jI1zIv4NcvUYmzWrmDiESbxbwU9tu2J6y7bWvBSmgHUYWX98oibtvHkaYoRcuI0VYANnvWyISdNF-0VhHR0OlXukpJ1DtgRlu-gYg5BxFASrvEQvGHo82spr4H7xSXTtj-ewUatreEJnye8kEj6GKnyNMvyUqS4av2bT4FltA-Vf1IeRWI03dQSUhTrmKD62si8KzebHVYxHi9Ml9MqRHtImiRV2WMupQ6OEAfPGqFWwQ')" }}>
</div>
{/* Overlay Gradient */}
<div className="absolute inset-0 z-10 bg-gradient-to-b from-background-dark/30 via-background-dark/10 to-background-dark"></div>
{/* Hero Content */}
<div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mt-20">
<span className="text-primary tracking-[0.2em] text-sm font-bold uppercase mb-6 animate-fade-in-up">Est. 2012</span>
<h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-6 drop-shadow-xl">
                    The Art of <br/> <span className="italic text-slate-200">Extraordinary</span> Travel
                </h1>
<p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed opacity-90">
                    Redefining luxury for the modern voyager, one bespoke journey at a time.
                </p>
<div className="mt-12">
<span className="material-symbols-outlined text-white/50 animate-bounce text-4xl">keyboard_arrow_down</span>
</div>
</div>
</div>
{/* Our Story Section */}
<section className="py-24 px-6 lg:px-10 bg-background-dark">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
{/* Pull Quote */}
<div className="lg:col-span-5 relative">
<span className="absolute -top-10 -left-6 text-9xl text-primary/10 font-serif">&quot;</span>
<blockquote className="relative z-10">
<p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-white mb-8">
                                True luxury is not just about where you go, but how the journey makes you <span className="text-primary italic">feel</span>.
                            </p>
<footer className="text-slate-400 font-medium tracking-wide uppercase text-sm flex items-center gap-4">
<div className="h-px w-12 bg-primary"></div>
                                Eleanor Vance, Founder
                            </footer>
</blockquote>
</div>
{/* Narrative Text */}
<div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-lg leading-relaxed font-light">
<p>
                            Wanderlux began with a simple yet ambitious premise: to curate travel experiences that linger in the memory long after the suitcases are unpacked. We realized that the modern traveler seeks more than just five-star accommodations; they seek connection, authenticity, and the thrill of the undiscovered.
                        </p>
<p>
                            Over the last decade, we have built a network of local experts, historians, and tastemakers across the globe. From private viewings of the Vatican to dinner under the stars in the Namib Desert, our itineraries are crafted with the precision of a master jeweler.
                        </p>
<p>
                            We don&apos;t just book trips. We design chapters of your life story, ensuring every moment is seamless, exclusive, and undeniably yours.
                        </p>
</div>
</div>
</div>
</section>
{/* The Pillars of Wanderlux */}
<section className="py-24 px-6 lg:px-10 bg-surface-dark/30 border-y border-border-dark relative overflow-hidden">
{/* Decorative background glow */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Pillars of Wanderlux</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Our commitment to crafting the unforgettable rests on three foundational principles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Pillar 1 */}
<div className="group relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
<div className="size-12 rounded-lg bg-gradient-to-br from-primary to-rose-900 flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">diamond</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Curated Excellence</h3>
<p className="text-slate-400 leading-relaxed">
                            Every destination is hand-picked for its singular beauty and exclusivity. We vet every hotel, guide, and experience personally.
                        </p>
</div>
{/* Pillar 2 */}
<div className="group relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
<div className="size-12 rounded-lg bg-gradient-to-br from-primary to-rose-900 flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">public</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
<p className="text-slate-400 leading-relaxed">
                            Access to the world&apos;s most remote and breathtaking corners. From the Arctic Circle to the depths of the Amazon, nowhere is out of reach.
                        </p>
</div>
{/* Pillar 3 */}
<div className="group relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
<div className="size-12 rounded-lg bg-gradient-to-br from-primary to-rose-900 flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">handshake</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Bespoke Service</h3>
<p className="text-slate-400 leading-relaxed">
                            Tailored itineraries that anticipate your every desire. Our concierges are available 24/7 to ensure your journey is flawless.
                        </p>
</div>
</div>
</div>
</section>
{/* Leadership Team */}
<section className="py-24 px-6 lg:px-10 bg-background-dark">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our People</span>
<h2 className="text-3xl md:text-5xl font-serif text-white">Meet the Visionaries</h2>
</div>
<p className="text-slate-400 max-w-md text-right md:text-left">
                        The passionate experts behind your next great adventure.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Team Member 1 */}
<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Eleanor Vance Portrait" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="Professional woman in suit smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY1IXROn_Na_qGNxwSsoRZh_YqOX7Nh66UwQ5Wo43FYka1WVPyY_-J_1Cb1ami9V3iFz2J-v9fjjxm5CVLKGfr6UOEuuJXA8lybaxqoFFvoFjYUs9MBvMlXmOsd4iHR6_kKD3uAgoFUALnsmQou9TcDeb83BhcwfDe6y4a5jtKSbAo-mfYy27ESOv1PSn-F9oZGpm1aIU5Ck6zJfhSPXgisPCodiVIpwnkUPNjeYTafkUWNXZzzDLSK8SOs6taL11FsmsLMRAdfQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white text-xl font-bold">Eleanor Vance</h3>
<p className="text-primary text-sm font-medium uppercase tracking-wider mt-1">Founder &amp; CEO</p>
</div>
</div>
{/* Team Member 2 */}
<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Marcus Thorne Portrait" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="Professional man in dark suit standing confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLTE4_DDxRGCtsiyNIuNAd3vDe2aQq45h9C2jT6K6i4HmLnniJ-npGz7eRJwG12fKZqUJVAMwwlcjm2i9dmLRGbGPCWErYk06LF7UFg6TRQaKwZgr0D5wAxhwSxLzcSPBJhHBPcizJVR6AG-fOml-w-ys1QN-T_rZqTdXH24wTR2Gv3PAVtMAg-O8bgIhrm6nMcai9Ytg1ZW_nwY3B7T34_Xw_YukkzHuBew90YXaK1SEsuaz6W9HL5x85_cV_xizpZu2h2Bryg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white text-xl font-bold">Marcus Thorne</h3>
<p className="text-primary text-sm font-medium uppercase tracking-wider mt-1">Head of Expeditions</p>
</div>
</div>
{/* Team Member 3 */}
<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Sophia Al-Fayed Portrait" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="Young professional woman smiling against plain background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiYWG2AEkmxC9_g6i73BfxwClqA-gnP50S8NLekDj0oVS_Cv0abVKCREL6jrtl5Amf2D2PvQNGjorsiF6H0mTxevqqoWMUrfhj5DzABKUuwhn7X7tqRlsZBFMemjaAYPRASzNqp95krEI8kOoSs9wTZpWtJxHZzcr7Q0bR--QajcZnr35NTPhE1LMeQrA0o1R6FGUUiarioH_Bc_mV7jqUDGHq5lnGe3SOf9sRSdokWxypyUQVtRsWor3PT0uB9iiVD5QDXlsKKQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white text-xl font-bold">Sophia Al-Fayed</h3>
<p className="text-primary text-sm font-medium uppercase tracking-wider mt-1">Experience Director</p>
</div>
</div>
{/* Team Member 4 */}
<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="David Chen Portrait" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="Professional man in blazer looking at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo1lP0tIjc1-wyPaUFI_nW-6V3M-al-NFbB6GXrgOiqnlk-1Np_xVVbYWLuybIrNagmGEHK7fkVsjmTkMcE1VjEasIoVZFwRMMHmPizIZAsO0tdCBa4nm77ZIE36E5ts9v5m3LypytT-uvnguqT3wa2SmgZtDYAPDxyvbvqCkia7p8V4t1RKiqaPffbZRK9h5wFnPHxh-QGeK1e8XcJKSfMFVa5yM-ZYUCmvHzRVJPdTKH1MnKRELYroSQbN-qydbuoy0uPYVHVA"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white text-xl font-bold">David Chen</h3>
<p className="text-primary text-sm font-medium uppercase tracking-wider mt-1">Lead Concierge</p>
</div>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="relative py-32 px-6 lg:px-10 flex items-center justify-center bg-background-dark overflow-hidden border-t border-border-dark">
{/* Background Texture with CSS Gradient */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-dark via-background-dark to-black opacity-80"></div>
<div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
<div className="mb-8 p-3 rounded-full border border-white/10 bg-white/5">
<span className="material-symbols-outlined text-white text-3xl">explore</span>
</div>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to Rewrite Your Story?</h2>
<p className="text-slate-300 text-lg mb-10 max-w-xl">
                    Let us design the journey you&apos;ve always dreamed of. The world is waiting, and we hold the key.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-red-700 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-dark">
<span className="mr-2">Join Our Journey</span>
<span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</Link>
<a href="/Wanderlux_Company_Profile.txt" download className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
<span className="mr-2">Download Profile</span>
<span className="material-symbols-outlined transition-transform group-hover:translate-y-1">download</span>
</a>
</div>
</div>
</section>
</div>
    </div>
  );
}
