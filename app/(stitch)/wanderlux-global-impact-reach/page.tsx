"use client";
/* eslint-disable react/no-unescaped-entities */
 
import React from 'react';

export default function WanderluxGlobalImpactReachPage() {
  return (
    <div className="stitch-screen">
      {/* Navbar */}
<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
<div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 text-primary">
<span className="material-symbols-outlined text-[32px]">travel_explore</span>
</div>
<h1 className="text-white text-xl font-bold tracking-tight">Wanderlux</h1>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#">Destinations</a>
<a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#">Experiences</a>
<a className="text-sm font-medium text-white hover:text-primary transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#">Concierge</a>
</nav>
<button className="hidden md:flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-red-700 transition-colors">
                Sign In
            </button>
<button className="md:hidden text-white">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main className="w-full relative">
{/* Global Presence Section */}
<section className="py-20 px-6 relative overflow-hidden">
{/* Background decorative gradient */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[960px] mx-auto text-center mb-12 relative z-10">
<span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Reach</span>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Presence</h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    From our headquarters in New York to our hubs in Paris, Dubai, and Nairobi, we curate the exceptional for the discerning traveler.
                </p>
</div>
{/* Map Container */}
<div className="max-w-[1100px] mx-auto relative group">
<div className="w-full aspect-[16/9] md:aspect-[2/1] bg-surface-dark rounded-xl border border-white/5 relative overflow-hidden shadow-2xl">
{/* Stylized Dark Map Image */}
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" data-alt="Dark stylized world map visualization" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyjhXTGtRp_vBV_6olsPTpqH_cOhagePqdX4M6nl9ae4LasruguWLPUt2U1dNU9VScZ9FE_IkMDi_12MD-k39bSOJSrTEC4nodkn5h-JoY0JZZxwVAMNfx3usPzvfC_sz0wP9oA3XdkGGFOeRIaKxfIqojdAgLBUJTHrqWEQV1TKYMg3hWbtsOaRoMC5iGpcQf0--ATGCzvROgRoLCa_2herlE77toMlXzk5peLTOwtXnuRyIpmfMU1WQ3MRk9BlE87JOKfP6yug')" }}>
</div>
{/* Map Overlay Gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 to-background-dark/80"></div>
{/* Pins */}
{/* New York */}
<div className="absolute top-[32%] left-[28%] flex flex-col items-center group/pin cursor-pointer">
<div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_3px_rgba(219,20,60,0.5)] animate-pulse"></div>
<div className="mt-2 px-3 py-1 bg-background-dark/90 backdrop-blur border border-white/10 rounded text-xs font-semibold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity transform translate-y-2 group-hover/pin:translate-y-0">
                            New York (HQ)
                        </div>
</div>
{/* Paris */}
<div className="absolute top-[28%] left-[48%] flex flex-col items-center group/pin cursor-pointer">
<div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_3px_rgba(219,20,60,0.5)]"></div>
<div className="mt-2 px-3 py-1 bg-background-dark/90 backdrop-blur border border-white/10 rounded text-xs font-semibold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity transform translate-y-2 group-hover/pin:translate-y-0">
                            Paris
                        </div>
</div>
{/* Dubai */}
<div className="absolute top-[40%] left-[58%] flex flex-col items-center group/pin cursor-pointer">
<div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_3px_rgba(219,20,60,0.5)]"></div>
<div className="mt-2 px-3 py-1 bg-background-dark/90 backdrop-blur border border-white/10 rounded text-xs font-semibold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity transform translate-y-2 group-hover/pin:translate-y-0">
                            Dubai
                        </div>
</div>
{/* Nairobi */}
<div className="absolute top-[55%] left-[55%] flex flex-col items-center group/pin cursor-pointer">
<div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_3px_rgba(219,20,60,0.5)]"></div>
<div className="mt-2 px-3 py-1 bg-background-dark/90 backdrop-blur border border-white/10 rounded text-xs font-semibold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity transform translate-y-2 group-hover/pin:translate-y-0">
                            Nairobi
                        </div>
</div>
</div>
</div>
{/* Stats Grid */}
<div className="max-w-[960px] mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
<div className="text-center p-4 border border-white/5 rounded-lg bg-surface-dark/50 backdrop-blur-sm">
<div className="text-3xl font-bold text-white mb-1">12+</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Years of Excellence</div>
</div>
<div className="text-center p-4 border border-white/5 rounded-lg bg-surface-dark/50 backdrop-blur-sm">
<div className="text-3xl font-bold text-white mb-1">45+</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Partner Countries</div>
</div>
<div className="text-center p-4 border border-white/5 rounded-lg bg-surface-dark/50 backdrop-blur-sm">
<div className="text-3xl font-bold text-white mb-1">2k+</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Curated Trips</div>
</div>
<div className="text-center p-4 border border-white/5 rounded-lg bg-surface-dark/50 backdrop-blur-sm">
<div className="text-3xl font-bold text-white mb-1">24/7</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Global Concierge</div>
</div>
</div>
</section>
{/* Awards & Recognition */}
<section className="py-16 border-t border-white/5 bg-surface-dark/30">
<div className="max-w-[1280px] mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
<div>
<h2 className="text-2xl font-bold text-white mb-2">Awards &amp; Recognition</h2>
<p className="text-slate-400 text-sm">Honored by the industry's most prestigious institutions.</p>
</div>
<a className="text-primary text-sm font-semibold hover:text-white transition-colors flex items-center gap-1" href="#">
                        View all awards <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
{/* Logo 1 */}
<div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
<div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center mask-image">
{/* Placeholder for Logo */}
<span className="material-symbols-outlined text-4xl text-white/50 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">flight_class</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">Best Luxury Agent</span>
</div>
{/* Logo 2 */}
<div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
<div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-white/50 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">verified</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">Conde Nast Top 10</span>
</div>
{/* Logo 3 */}
<div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
<div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-white/50 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">star</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">Michelin Travel</span>
</div>
{/* Logo 4 */}
<div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
<div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-white/50 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">diamond</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">Virtuoso Member</span>
</div>
{/* Logo 5 */}
<div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
<div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-white/50 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">public</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">Forbes Travel</span>
</div>
</div>
</div>
</section>
{/* Sustainable Luxury Section */}
<section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Misty green forest landscape representing sustainable nature" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOe3-gwoZU6Xz17Vo8EYN6xUrBs06fSXCnc85sO79e_I0u4-5HxD3RP4lb9UzqXIl0A-hSyCavsHw-iMz_7A4tep9awphXcuHmmKVqvwkRRf3WJ_g1z88Fbkbi93fdjWbgupiocricj3YOndcof-t24aZZaboFznaYkL0i1Kl3dMxoeAc6MOs4tapxt8YIy-ec5jhTc2C28WE41f0n4tf4Cxkff7ChDO5cEHXAwIIZx5-nKw9Bhzu4eoLvFakA-zYSYmK0e0ijYA')" }}>
</div>
{/* Dark Overlay */}
<div className="absolute inset-0 bg-background-dark/70 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
{/* Content */}
<div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
<span className="material-symbols-outlined text-green-400 mr-2">eco</span>
<span className="text-white text-sm font-semibold uppercase tracking-wider">Sustainable Luxury</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Preserving the World We Explore
                </h2>
<p className="text-lg md:text-xl text-slate-200 mb-8 font-light">
                    We believe true luxury is responsible. For every journey curated, we invest in local conservation efforts and offset 200% of carbon emissions, ensuring the wonders of the world remain for generations to come.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex items-center justify-center px-8 py-3 bg-white text-background-dark font-bold rounded-lg hover:bg-slate-200 transition-colors">
                        Read Our Impact Report
                    </button>
<button className="flex items-center justify-center px-8 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Our Partners
                    </button>
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-24 px-6 bg-background-dark relative">
<div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23db143c\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
<div className="max-w-4xl mx-auto bg-surface-dark border border-white/5 rounded-2xl p-10 md:p-16 text-center relative z-10 shadow-2xl">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to embark on the extraordinary?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Let our global team of experts craft your next unforgettable journey.</p>
<button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20">
                     Plan Your Trip
                 </button>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-[#180c0e] border-t border-white/5 pt-16 pb-8">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
{/* Brand */}
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">travel_explore</span>
<h3 className="text-white text-xl font-bold">Wanderlux</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Redefining luxury travel through curated experiences, global expertise, and unwavering commitment to excellence.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a> {/* abstract for social */}
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
</div>
</div>
{/* Links */}
<div>
<h4 className="text-white font-bold mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">Press</a></li>
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Support</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">Contact Concierge</a></li>
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">FAQ</a></li>
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 text-sm hover:text-primary transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
{/* Newsletter */}
<div>
<h4 className="text-white font-bold mb-6">Newsletter</h4>
<p className="text-slate-400 text-sm mb-4">Subscribe for exclusive offers and travel inspiration.</p>
<form className="flex flex-col gap-3">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors" placeholder="Email Address" type="email"/>
<button className="bg-white text-background-dark font-bold py-2 rounded-lg text-sm hover:bg-slate-200 transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-xs">© 2024 Wanderlux Global. All rights reserved.</p>
<div className="flex items-center gap-2 text-slate-500 text-xs">
<span>New York</span>
<span className="w-1 h-1 bg-slate-700 rounded-full"></span>
<span>Paris</span>
<span className="w-1 h-1 bg-slate-700 rounded-full"></span>
<span>Dubai</span>
<span className="w-1 h-1 bg-slate-700 rounded-full"></span>
<span>Nairobi</span>
</div>
</div>
</div>
</footer>
    </div>
  );
}
