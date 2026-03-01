"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function ConsultationPage() {
  const { user, isLoaded } = useUser();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.emailAddresses[0]?.emailAddress || '',
    consultationType: '',
    dreamTrip: '',
  });
  const [selectedDay, setSelectedDay] = useState(7);
  const [selectedTime, setSelectedTime] = useState('01:00 PM');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync user data when loaded
  React.useEffect(() => {
    if (isLoaded && user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.emailAddresses[0]?.emailAddress || '',
      }));
    }
  }, [isLoaded, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (!isLoaded) return null;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white pt-[72px]">
      <main className="flex-grow flex flex-col">
        {/* Hero / Split Section */}
        <section className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Booking Form */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in-up bg-surface-dark border border-border-dark p-10 rounded-3xl shadow-2xl">
                <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl">mark_email_read</span>
                </div>
                <h2 className="text-3xl font-bold text-white">Inquiry Received</h2>
                <p className="text-slate-400 max-w-sm mx-auto">
                  Thank you, {formData.firstName}. Your consultation for {selectedTime} on October {selectedDay}th has been requested. A dedicated designer will confirm shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold hover:underline pt-4"
                >
                  Book another session
                </button>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="mb-8">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">Book Your Journey</span>
                  <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 text-white">
                    Plan Your <br className="hidden md:block"/> Private Consultation
                  </h1>
                  <p className="text-slate-500 dark:text-[#b99d9d] text-lg font-normal leading-relaxed">
                    Let&apos;s curate your next unforgettable escape. Tell us a little about yourself, and choose a time to speak with a dedicated travel designer.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</span>
                      <input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 transition-all" 
                        placeholder="Jane" 
                        type="text"
                        required
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</span>
                      <input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 transition-all" 
                        placeholder="Doe" 
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 dark:text-[#b99d9d]">mail</span>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-10 pr-4 transition-all" 
                        placeholder="jane@example.com" 
                        type="email"
                        required
                      />
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Consultation Type</span>
                    <div className="relative">
                      <select 
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleChange}
                        required
                        className="form-select w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-4 pr-10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="honeymoon">Honeymoon Planning</option>
                        <option value="family">Family Expedition</option>
                        <option value="private">Private Jet Charter</option>
                        <option value="corporate">Corporate Retreat</option>
                      </select>
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Tell us about your dream trip (Optional)</span>
                    <textarea 
                      name="dreamTrip"
                      value={formData.dreamTrip}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#271c1c] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#b99d9d] focus:border-primary focus:ring-1 focus:ring-primary min-h-[100px] p-4 resize-y transition-all" 
                      placeholder="We are looking for a 2-week trip to Japan in Autumn..."
                    ></textarea>
                  </label>
                  <button 
                    disabled={isSubmitting}
                    className="w-full mt-4 h-14 bg-primary hover:bg-red-700 text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50" 
                    type="submit"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                    {!isSubmitting && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                  </button>
                  <p className="text-xs text-center text-slate-400 dark:text-[#b99d9d] mt-2">
                    By booking, you agree to our <Link className="underline hover:text-primary" href="/about">Terms of Service</Link>.
                  </p>
                </form>
              </div>
            )}
          </div>
          {/* Right Side: Calendar & Slots */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white dark:bg-[#2d1a1a] border border-slate-200 dark:border-[#392828] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-slate-100 dark:border-[#392828] flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                  October 2026
                </h3>
                <div className="flex items-center gap-2">
                  <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-[#392828] text-slate-600 dark:text-slate-300 transition-colors">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-[#392828] text-slate-600 dark:text-slate-300 transition-colors">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
              {/* Calendar Grid */}
              <div className="p-6">
                <div className="grid grid-cols-7 gap-1 text-center mb-4 text-xs font-semibold text-slate-400 dark:text-[#b99d9d] uppercase">
                  <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-sm">
                  {/* Simplification for demo: Hardcoded days */}
                  <div className="aspect-square"></div><div className="aspect-square"></div>
                  {[1,2,3,4,5,6].map(d => (
                    <button key={d} disabled className="aspect-square flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-[#392828] opacity-50">{d}</button>
                  ))}
                  {[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                    <button 
                      key={d} 
                      onClick={() => setSelectedDay(d)}
                      className={`aspect-square flex items-center justify-center rounded-lg transition-all ${
                        selectedDay === d 
                          ? 'bg-primary text-white shadow-lg shadow-primary/30 font-bold' 
                          : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#392828]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              {/* Available Slots */}
              <div className="p-6 bg-slate-50 dark:bg-[#221010] flex-1 border-t border-slate-100 dark:border-[#392828]">
                <p className="text-sm font-semibold text-slate-500 dark:text-[#b99d9d] uppercase mb-4 tracking-wider">Available Times for Oct {selectedDay}th</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`group flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                        selectedTime === time 
                          ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                          : 'border-slate-200 dark:border-[#543b3b] bg-white dark:bg-[#2d1a1a] hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10'
                      }`}
                    >
                      <span className={`font-bold ${selectedTime === time ? 'text-white' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>{time}</span>
                      <span className={`text-[10px] ${selectedTime === time ? 'text-white/80' : 'text-slate-500 dark:text-[#b99d9d]'}`}>EST</span>
                    </button>
                  ))}
                  <button className="group flex flex-col items-center justify-center p-3 rounded-lg border border-dashed border-slate-300 dark:border-[#543b3b] bg-transparent opacity-50 cursor-not-allowed">
                    <span className="text-slate-500 dark:text-[#b99d9d] font-bold decoration-slice line-through">05:30 PM</span>
                    <span className="text-[10px] text-slate-500 dark:text-[#b99d9d]">Booked</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Experts Section */}
        <section className="w-full bg-slate-100 dark:bg-[#181111] py-16 lg:py-24 border-t border-slate-200 dark:border-[#392828] rounded-3xl mt-12">
          <div className="px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-black mb-3">Our Travel Experts</h2>
                <p className="text-slate-500 dark:text-[#b99d9d] max-w-xl text-lg">
                  Hand-picked specialists with decades of experience in crafting bespoke luxury itineraries tailored to your unique tastes.
                </p>
              </div>
              <Link className="text-primary hover:text-red-400 font-bold flex items-center gap-2 group" href="/about">
                View All Consultants 
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Sarah Jenkins', role: 'Senior Expedition Specialist', region: 'Asia & Pacific', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFCOIwcj78CZ836yJVvLkl_GL39fV4seR3m_2kowb-nmiCTbMhekRl69l_j4fo6Ejml06UIagk2qhKOJ8y6SSey6eO03wiJIoGgmQCthBw7axm-4AoUU0-SgvZkhlCPkh-vzSoV6XIp2nVoww1DCRe71KFVWd39D0uxMqOcBihLiHxSiForZc4VahJJNccuv9LhmxwViUkj-QrCJaWXbpEMs3HUf4TxIIRwHG1iFX1cS6E7UqQwQgvVaThKSL-pDYHfSAmqOb55g', score: '4.9', reviews: '124' },
                { name: 'Michael Chen', role: 'Luxury Cruise Director', region: 'Europe & UK', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu2SrCcNFPoLcyUOFO_FrsBlfvp4crcRGrAqB5wPLDRFhwhp5QhvXdTy9aIwmWjzAS6lVldQCycjuHeVE8iLnGtfRI7xLZb8dJklYDux06pRNz6jxV4qBr87YaFyLMizvQCafZkBx3tID4souhhNpDqy4Kt3bYak_qwtsqvBaKCaT_oqQQfaM0dFXkdy3rIZwKZx42p-Csv5TL1Jljxwzfhi0MR5vgaeLvZSYu1Zs_ytmADROYyipNwiG7SQbQzNB5FZCWMGud6Q', score: '5.0', reviews: '89' },
                { name: 'Elena Rossi', role: 'Conservation Travel Lead', region: 'Safari & Wildlife', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiAzcEQBRKTp7tgDjQ6qjFAuMr3sy3kl194SCUHC4YpvkqOl1fsA1pU8zMILi-x4teq5YpwqORVJAOIXagBcWeyxsPsAtT83Sc49BYlBh5ROPPTcxhNY-gofcvUCkozNeKn4QyhiIPEw_ZBEK7VxS2TWdQz99FHe8e8XOjjr5kg7F3K3p9o2XyV_G7XT3O0nIEg1_vcKROUrHmY8dEqzTJDxQKf-vP0yx75n9TxQqGbv3jnlHfy0_54QMz4vRifeKwCOcmJFHIJg', score: '4.9', reviews: '201' },
                { name: 'David Okonjo', role: 'Extreme Expeditions', region: 'Antarctica', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-j3g3JBuM2lFSYWRyzWUDi7wrTaCReUkg-9KDv5ggEmdhfnkXPLZSQqbXVq2wKqlRTPtCvBH9a-56HYCD6_3ZSkO5-o59LON9WJV50H3CrGM-PavZPDwlyljVJ3Ybj5Os2mKfdx-3uRFNgxck63puKAdGoS0lO7-5oV7LQzYcnS12MZdGu7-5N6B763NSCjNyqAMlPvm1Cv3B62dCXeoeCkci8If708q8ugGbRkC1gHCM7vqrTFH-6xQuLLR2RFfbd-s58O6xpQ', score: '5.0', reviews: '56' }
              ].map(expert => (
                <div key={expert.name} className="group bg-white dark:bg-[#221010] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-slate-200 dark:border-[#392828]">
                  <div className="h-64 overflow-hidden relative">
                    <img src={expert.img} alt={expert.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#221010] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary bg-white/10 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">{expert.region}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{expert.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-[#b99d9d] mb-4">{expert.role}</p>
                    <Link href="/tours" className="w-full py-2 bg-primary/10 hover:bg-primary transition-all text-primary hover:text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 mt-4 group/btn">
                      Explore Region
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
