"use client";

import React from 'react';

export default function ConciergePage() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] font-sans min-h-screen flex flex-col pt-24 pb-12 selection:bg-primary selection:text-white">
      <style>{`
        .map-container {
            position: relative;
            overflow: hidden;
        }
        
        .map-pin {
            position: absolute;
            transform: translate(-50%, -100%);
            transition: all 0.3s ease;
            cursor: pointer;
            z-index: 10;
        }
        
        .map-pin:hover {
            transform: translate(-50%, -110%) scale(1.1);
            z-index: 20;
        }

        .map-tooltip {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            width: 200px;
            pointer-events: none;
        }

        .map-pin:hover .map-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }

        @keyframes pulse-subtle {
            0% { box-shadow: 0 0 0 0 rgba(198, 16, 16, 0.4); }
            70% { box-shadow: 0 0 0 6px rgba(198, 16, 16, 0); }
            100% { box-shadow: 0 0 0 0 rgba(198, 16, 16, 0); }
        }
        
        .btn-pulse:hover {
            animation: pulse-subtle 2s infinite;
        }
      `}</style>
      
      {/* Expert Section */}
      <section className="px-4 md:px-10 lg:px-20 py-12 bg-white/5 backdrop-blur-sm border-b border-white/10 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Team</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Connect with an Expert</h2>
              <p className="text-slate-400 mt-2 max-w-xl">Our global team of luxury specialists are ready to curate your next unforgettable journey. Available 24/7 across all time zones.</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group">
                View all consultants
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Expert Card 1 */}
            <div className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full w-14 h-14 shrink-0 ring-2 ring-primary/20" data-alt="Portrait of Elena Vance, Senior Concierge" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKEWbE6rMCweBltYmjQT3in5xPITPTr3C1mX-K8x1LHW5udvuI4JswUcK-gX8lcF-x3kF9VVzTRs2Gp-vUXYtYTHgh0dB5yLYEPJH7MD06lpfNQWrsNQPOXSUpJxPoWbu57WVjU6H85Dc4__Azo2K6NSVTq3nEN3LKvOhL4gVKrTGuwqWamj9m6-rrEW5vPEsiJL5lYrefjSt9G1AWLrJu6S8p0OBrR9UBMsfM-Py9ukE9yOPJVN8js1Aw-oKy283_lsnCYyWq8A')"}}></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#141414]"></div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white text-lg font-bold leading-tight">Elena Vance</h3>
                        <p className="text-primary text-xs font-semibold tracking-wide uppercase">Senior Concierge</p>
                    </div>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Available Now
                    </span>
                    <button className="btn-pulse flex items-center gap-1.5 text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                        Chat
                    </button>
                </div>
            </div>

            {/* Expert Card 2 */}
            <div className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full w-14 h-14 shrink-0 ring-2 ring-primary/20" data-alt="Portrait of Marcus Thorne, Luxury Specialist" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6oI7Y9J_S7N7wHqqgQ4Ql2T_OVWPeDHwUT--U6_PCofTgrbTgEGsQg57uqVvzny6QsAhXGYQ3VlpxqkRezflD2BlZwVN_ZDj4xlzlLVT7wiTbgZ3xloQaa5jAR9V-sRuh03-yQI5VV7XJsM74LI-s7tuA7Kl_NpnlQTzhlQhfF-p5gcitzaaB4Lk37506OBMiJu56DyMH0WKSDa5xPlDo0OM46BIfR-pjh4BwP7FkY5FZyz37irLeWPZcQ4KVoZ43mC6Y6L7ISg')"}}></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#141414]"></div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white text-lg font-bold leading-tight">Marcus Thorne</h3>
                        <p className="text-primary text-xs font-semibold tracking-wide uppercase">Luxury Specialist</p>
                    </div>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Available Now
                    </span>
                    <button className="btn-pulse flex items-center gap-1.5 text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                        Chat
                    </button>
                </div>
            </div>

            {/* Expert Card 3 */}
            <div className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full w-14 h-14 shrink-0 ring-2 ring-primary/20" data-alt="Portrait of Sophia Li, Asia Pacific Lead" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGkueg1Zkb6Fek-7_UEBFiHgD07qxuC9thXdkaCz3lgm2Y3RxO2pP7G6rVJeF35v1GjnRdR5kCF2i9GSBjYV8-WAaMIp8ZmyFvuHfbmY5fI6b0dYtUx3E_iRp9oWcmrm7os_OpGx20UC2bUzZ_boQfE9q_lCsa9Pp2tc2fl0qMcWnX0Voc2mHc5WTDCh5p_8LE-1HmxA9g11hPQdAFsDaRrtH5vMHo15qQ7Qd4Cjoic1nsbzFrunXeioOZFncRIUWH7gLBMAGibw')"}}></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-[#141414]"></div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white text-lg font-bold leading-tight">Sophia Li</h3>
                        <p className="text-primary text-xs font-semibold tracking-wide uppercase">Asia Pacific Lead</p>
                    </div>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Back in 1h
                    </span>
                    <button className="flex items-center gap-1.5 text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">mail</span>
                        Email
                    </button>
                </div>
            </div>

            {/* Expert Card 4 */}
            <div className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full w-14 h-14 shrink-0 ring-2 ring-primary/20" data-alt="Portrait of Julian Rex, European Expert" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1zcD1HMODV6TzNorYuYSeaWDwVBL5Nw02NHR3i1YThjWm9TrjTdt8yYHza_fHGqZ15aNwe9hy1syhczTJ76_gre8NRaO0F7RZYGG12mTZnK8NEki5aWvJFUYjuKHxSLnWRlKeKNog6Hwmb9SLPuj6RJ66JaTafnc5_Rx1oopcDNH9N36KShTLYUGKUO5K-_abjKPmM-6bLaUroUSt75ehulDhIrvUgxut-nFeJt0WK8wDlsWtJYuX-Nr39jaub5uzHQ0IbQIXmA')"}}></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#141414]"></div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-white text-lg font-bold leading-tight">Julian Rex</h3>
                        <p className="text-primary text-xs font-semibold tracking-wide uppercase">European Expert</p>
                    </div>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Available Now
                    </span>
                    <button className="btn-pulse flex items-center gap-1.5 text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                        Chat
                    </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="flex-1 relative min-h-[500px] bg-[#0a0a0a] flex flex-col border-b border-white/10">
        {/* Map Background Layer */}
        <div className="absolute inset-0 z-0 map-container">
            <div className="w-full h-full bg-cover bg-center opacity-60 grayscale contrast-125 brightness-75 mix-blend-luminosity" data-alt="Dark stylized world map background showing continents" data-location="World Map Dark Theme" style={{backgroundImage: "url('https://placeholder.pics/svg/300')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/80 pointer-events-none"></div>
            
            {/* Map Pins */}
            <div className="map-pin" style={{top: '35%', left: '28%'}}>
                <div className="relative flex flex-col items-center group">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(198,16,16,0.8)] animate-pulse"></div>
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
                    <div className="map-tooltip bg-[#141414]/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-2xl flex flex-col gap-2">
                        <h4 className="text-white font-bold text-sm">New York HQ</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">5th Avenue, Suite 402<br/>New York, NY 10018</p>
                        <div className="flex items-center gap-2 mt-1 text-primary text-xs font-medium">
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            +1 (212) 555-0199
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-pin" style={{top: '32%', left: '48%'}}>
                <div className="relative flex flex-col items-center group">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(198,16,16,0.8)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
                    <div className="map-tooltip bg-[#141414]/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-2xl flex flex-col gap-2">
                        <h4 className="text-white font-bold text-sm">London Office</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">Mayfair, 12 Berkeley Sq<br/>London, W1J 6BD</p>
                        <div className="flex items-center gap-2 mt-1 text-primary text-xs font-medium">
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            +44 20 7946 0958
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-pin" style={{top: '55%', left: '75%'}}>
                <div className="relative flex flex-col items-center group">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(198,16,16,0.8)] animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
                    <div className="map-tooltip bg-[#141414]/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-2xl flex flex-col gap-2">
                        <h4 className="text-white font-bold text-sm">Singapore Hub</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">Marina Bay Financial Ctr<br/>Singapore 018981</p>
                        <div className="flex items-center gap-2 mt-1 text-primary text-xs font-medium">
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            +65 6789 0123
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Map Controls & Search Overlay */}
        <div className="absolute top-6 left-6 md:left-10 z-10 max-w-sm w-full">
            <div className="bg-[#141414]/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 p-1">
                <label className="flex items-center h-12">
                    <div className="text-slate-400 flex items-center justify-center pl-4 pr-2">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-500 text-sm font-medium h-full pr-4" placeholder="Find a boutique office..." defaultValue="" />
                </label>
            </div>
        </div>
        
        <div className="absolute bottom-10 left-6 md:left-10 z-10 flex flex-col gap-3">
            <div className="flex flex-col rounded-lg overflow-hidden bg-[#141414]/90 backdrop-blur-md border border-white/10 shadow-xl">
                <button className="flex size-10 items-center justify-center hover:bg-white/10 transition-colors border-b border-white/10">
                    <span className="material-symbols-outlined text-white">add</span>
                </button>
                <button className="flex size-10 items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-white">remove</span>
                </button>
            </div>
            <button className="flex size-10 items-center justify-center rounded-lg bg-[#141414]/90 backdrop-blur-md border border-white/10 shadow-xl hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white">near_me</span>
            </button>
        </div>

        {/* Floating Action Button (WhatsApp) */}
        <div className="absolute bottom-8 right-8 z-50">
            <button className="group flex items-center justify-center size-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
                <span className="absolute right-full mr-4 bg-[#141414] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                    Chat on WhatsApp
                </span>
            </button>
        </div>
      </section>
    </div>
  );
}
