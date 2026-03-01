"use client";

import React from 'react';
import Link from 'next/link';

export default function BookingConfirmedPage() {
  return (
    <div className="bg-[#f8f6f6] dark:bg-[#221610] font-display text-slate-900 dark:text-slate-100 min-h-screen relative overflow-x-hidden pt-20">
      {/* Noise Background Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDyztDYngvoE8llCS-_R2ieuVTpp3ioY4BuK-7xRFBTqBGWQfTFw1pMKCqrGoKjfO5f5y7JiBzxMsl5I299vgTESijT7MQeUhVmualVcG68rod4VIG9Fq6s9z3jSEqDVd3UZAP-gf9DFtlOEwSxStIwWNbY-3uQ9Eo0dQaKb3h-UQwgjg2ak7HC6HoICPcXpePQJkOTEG_sqH__NRFzN-nSom__-iSGgSJ25oKJ4JMqzcGwHSgzRnivVddOehXZqtgyXHAjD1GQOg)',
        }}
      ></div>

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <main className="flex-1 flex flex-col items-center justify-start px-4 py-12 md:py-20 max-w-5xl mx-auto w-full">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#ec5b13]/10 text-[#ec5b13] mb-6">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-[#ec5b13] to-orange-400 bg-clip-text text-transparent">
              Your Journey Begins
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-widest uppercase">
              Confirmation #WLX-98234751
            </p>
          </div>

          {/* Primary Trip Card */}
          <div className="w-full mb-12">
            <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-[#ec5b13]/10 shadow-2xl shadow-[#ec5b13]/5">
              <div 
                className="w-full md:w-1/2 h-64 md:h-auto bg-center bg-cover relative" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaKt0WemCOhrKSZIQQfKmH2vuMjcQh6FFMg8XN00KO_NUBLNWDrQT6_2lkvNIR6zs-zZ5JcVRuH3ufI_4-plTRcERufsoe0f2GUkL8geI9Xcs8Q7tYwDr30X4xrOr8CmHl2jNXL2eJoH6IVAoxj6HkPSXXqUswRxDP4zldgp-wyGkwEgNFNVfqFdVcRt6eihW0-y9XuF8AtKx7-8I_goM5oX0Q1JuoAS3y_XZM3rxhG52njrBqyIefew_gsrHONgxSbJUJqR5XwQ")',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#221610]/80 to-transparent md:hidden"></div>
              </div>
              <div className="flex flex-col p-8 md:p-10 justify-center gap-6 w-full md:w-1/2">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#ec5b13]/10 text-[#ec5b13] text-xs font-bold tracking-widest uppercase">Booking Confirmed</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">Amalfi Coast Luxury Escape</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">7 Nights • Private Villa • Crimson Suite</p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-y border-[#ec5b13]/10 py-6">
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
                    <p className="text-2xl font-black text-[#ec5b13]">$12,450.00</p>
                  </div>
                  <Link 
                    href="/portal/itinerary" 
                    className="relative overflow-hidden flex items-center justify-center rounded-xl bg-[#ec5b13] px-6 py-3 text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-[#ec5b13]/20 group"
                  >
                    View Itinerary
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-all duration-500 group-hover:left-[150%]"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="w-full grid md:grid-cols-3 gap-6 mb-16">
            <div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-[#ec5b13]/5 hover:border-[#ec5b13]/20 transition-all">
              <span className="material-symbols-outlined text-[#ec5b13] mb-4 text-3xl">mail</span>
              <h3 className="font-bold text-lg mb-2">Check Your Inbox</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">We&apos;ve sent a detailed confirmation email with your digital vouchers and travel insurance docs.</p>
            </div>
            <div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-[#ec5b13]/5 hover:border-[#ec5b13]/20 transition-all">
              <span className="material-symbols-outlined text-[#ec5b13] mb-4 text-3xl">fact_check</span>
              <h3 className="font-bold text-lg mb-2">Prepare Documents</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Ensure your passport is valid for at least 6 months from travel date. Visa requirements may apply.</p>
            </div>
            <div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-[#ec5b13]/5 hover:border-[#ec5b13]/20 transition-all">
              <span className="material-symbols-outlined text-[#ec5b13] mb-4 text-3xl">support_agent</span>
              <h3 className="font-bold text-lg mb-2">Contact Concierge</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Our 24/7 luxury concierge is ready to handle your dining reservations and private transfers.</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link 
              href="/tours" 
              className="w-full md:w-auto px-8 py-4 rounded-xl border border-[#ec5b13] text-[#ec5b13] font-bold hover:bg-[#ec5b13]/5 transition-colors text-center"
            >
              Explore More Destinations
            </Link>
            <Link 
              href="/" 
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-slate-200 dark:bg-slate-800 font-bold hover:brightness-110 transition-colors text-center"
            >
              Return to Home
            </Link>
          </div>

          {/* Decorative Map Element */}
          <div className="mt-20 w-full h-48 rounded-3xl overflow-hidden grayscale opacity-30 pointer-events-none">
            <img 
              className="w-full h-full object-cover" 
              alt="Stylized map showing coastal regions" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtpp_lUD6Wx3wnuzINHW9WMLz3_mEokfZhskOjjSQygRdb9rF18X9H1ZAeKK4jpJlbzPZFvl0KFgDAZj6nAGTgchR97zP8okQ0v_Bvqqszk76USpWN6zvDAyQ6Apo0jjA_X0UaGeQsP66LaZ94X_c3URF1MwZcgxAup3uJpZ44w6Q51oXjX-EjvZScOGBLIgvIRPe6l3qMrCrgYaSfSnVTO38K3VS4-vDoQPt85DnrEu1WQm8v8PhboL7IM39JScWMDJKBLD-ZyQ"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
