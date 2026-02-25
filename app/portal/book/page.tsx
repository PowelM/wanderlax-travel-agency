"use client";
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';

const tourData: Record<string, { price: string; duration: string; description: string; image: string }> = {
  'Maldives Escape': {
    price: '$5,400',
    duration: '7 Days',
    description: '7 nights in an overwater villa with all-inclusive dining and private sunset cruises.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUV2tyz6So6VwYE94GJFnhBGH8Dco3cLebnCAULJDZHqwUaLKIqIveE5DwU8t3QvmDynrG_oH8wB05jvBSSYmKWDU4ZVpmqanjb_8tZy8F9eF5tAr1F2TKEcj44BhRPocSSrw9Rc9e1rbRP4lLUSbOTf5FmQ0mrjFn3mzuperyO0o04qCNpg6x45XYXnCM-Hl2jeisCIPLdS1kudpqrnBlZAcLn8IQdcc2mjxxjTEfbGQoPF4q-JHwrfR63xUONYmT0Zvpkc1Xfw',
  },
  'Ancient Kyoto': {
    price: '$3,200',
    duration: '5 Days',
    description: 'Explore the historic temples, tea ceremonies, and bamboo forests of ancient Japan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_hhE52OZGgrrDPr3sPjMHs5sxUWPsEuBUaMhEHMiiZrHL3nq36rEfumHZzVvZzBqAciFltS802kVcL7QdQDNS8t7vNhnEnSTdzabGKtWFWUToeZg24ztzWiOQKUK6hfEWB6d2sbdQZ0PXHxt7zMSRZQlnsy2dQctFb66cKArvDoD2RLLDJRCjkrzL1UVmpk8XjR6uqkcyJKi1UV3Fd7hhTy_TUaBc9G-bs18Zm1v2UMDkJF4GfvugGQ_CC3Rlf62I6LhYaIIiBw',
  },
  'Swiss Alpine Trek': {
    price: '$4,150',
    duration: '8 Days',
    description: 'Guided hiking tour through the breathtaking landscapes of Zermatt and Interlaken.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBptty087RFv8nBqSoHJWVVHJKHF0NQhttWLEr5LTl8VdnU-vEwKdo6zRlM1oo-fbV-pDHbI_U3KFls8oG29PTMJS3H3nK_aDTAnd7RP7G_lkQQSL__vy8fNPrfveL3dKGjAcW-WJsS7yetY07aE2VPi3vKv8zFaWdVa2POQJ-guOxwu_l6Uir5DPujTA8Jm2T2aMUJP1Vhs1hiDTugzYgn-ndBaqGVJ6xQSsIdaWJnM1dHHKvkvSWeHWc8C_GBQxPFxlfNk2eHNA',
  },
  'Santorini Sunset': {
    price: '$3,800',
    duration: '6 Days',
    description: 'Experience the magic of the Aegean Sea with wine tasting and private yacht tours.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvoQ7Zvip5jn5ZaFMHXoEM4xSKpCN2Ih2qoH0roUXhbzZs-7ZSqG8ZzL4Cz9kS-1-Y94c1ZUregXQuU632IIgKboaohmGPX5sLqEMrmlsRbPTWfhkyEXX03RQX4ubesRC1WGOHYMWXtk02bodDUkEgW3RZBf1fS2YIeKYmJNbDrmFbaFpCmOAXTzN0x70thPnuXAKVWvKaUbJOCQcLZ5P4BlzU-UJuyNV_kxRfFIVfdzBuseetH5kf6snTVp9pJjzvqwRukC7lmg',
  },
  'NYC Penthouse Week': {
    price: '$6,200',
    duration: '5 Days',
    description: 'Luxury stay in Manhattan with Broadway tickets and helicopter tour included.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIRXc2032U2hY-HLjoK1Ag0J7DSNRzbKAc2V_dKqy80CC3MwKwHe49ZZvhLMwn1IjGvh8jdeJSfm5cW1ryHRpDr3WfqvchFpTRPz_gUnOiBRUgYwRqOygImLBgjdM7a-03U9khRpKmfCgQLotc7v52Gnj2vi5gBlgMBlMk9rN0xb58wM8D6gCa_vjpRjJx0pkBz-5zCw4J8-9U26zjU267MLvmaCAR0zjTsrruI-UVxI8zHCaJxxdBBDUaxqlgfGYq51IYN4TGaA',
  },
  'Mystic Machu Picchu': {
    price: '$2,900',
    duration: '6 Days',
    description: 'A guided journey through the Sacred Valley to the lost city of the Incas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCAVUB0h5vQRfF5hJZn-4xznNzIOGFq0GqG3kc9GG30esdrWAKSL9UrJEn4F-UxeK1BfGOuteIHrBjyue5n18qFSsZDlwlcUcpCLuV1qgsvNPB12Uyl4c4T3ZsaBUZ2nZj3qwH2e9mpVKxHUcZQ9F3_RYwvyg_fP-tyhmqZ2la28ecc6g92erllKxG36UrBISc5HRp1-8ZeE9qBQ49IxXSv82Vwttnuz4Sb-1LzPePg3mwOIT4HghZ3FNWQXpsPcUtMqeSQk2isg',
  },
  'The Royal Serengeti Safari': {
    price: '$12,000',
    duration: '10 Days',
    description: 'Immerse yourself in the wild heart of Africa with private game drives and luxury tented camps.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAae9-jgMtfLY4pZTb4At9kVVP0UyuN4ztEK3DfJyYBEKE971nIMS6zfggnNE4222TwuLC9qq0YmB-tqps4gRz_4oHkWZu9FTcu9RMCYyonHusYO-t0KIyenuZ8ZhATYeUgTkbssukdVW9eAHzo_46bLV52y6MCPq0dWHG8YQ99Mu3q8btP2iMLF8PpevjJAP4ut8hFo5YouwpHeIpWZ_7NQ0NAOtm2TMlTWUGl25gZSucltOaB_RiK03g-jT6fU2EwpDsbOLiFhg',
  },
};

function BookingFormContent() {
  const { user, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const tourName = searchParams.get('tour') || '';
  const tour = tourData[tourName];

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-[72px]">
        <div className="animate-spin size-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px]">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-lg text-center space-y-6 animate-fade-in-up">
            <div className="size-20 mx-auto bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Booking Request Submitted!</h2>
            <p className="text-slate-400 text-lg">
              Thank you, {user?.firstName || 'Traveler'}! Your booking request for <span className="text-white font-semibold">{tourName}</span> has been received. Our team will reach out within 24 hours to confirm your reservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/portal/dashboard"
                className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-primary/20"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/tours"
                className="bg-white/10 border border-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/20 transition-all"
              >
                Browse More Tours
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px]">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <main className="flex-1 px-4 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white font-medium">{tourName || 'Book'}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Booking Form */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Progress */}
              <div className="flex flex-col gap-4 bg-primary/5 p-6 rounded-xl border border-primary/10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-primary font-bold text-sm uppercase tracking-tighter">Step 1 of 3</p>
                    <h1 className="text-2xl font-extrabold text-white">Book Your Experience</h1>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">33% complete</p>
                </div>
                <div className="relative h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-1000" style={{ width: "33%" }}></div>
                </div>
              </div>

              {/* Traveler Info */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <h2 className="text-xl font-bold text-white">Traveler Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">First Name</label>
                    <input
                      className="w-full bg-background-dark border border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-3 px-4 text-white placeholder:text-slate-600 transition-all"
                      value={user?.firstName || ''}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Last Name</label>
                    <input
                      className="w-full bg-background-dark border border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-3 px-4 text-white placeholder:text-slate-600 transition-all"
                      value={user?.lastName || ''}
                      readOnly
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Email</label>
                    <input
                      className="w-full bg-background-dark border border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-3 px-4 text-white placeholder:text-slate-600 transition-all"
                      value={user?.emailAddresses[0]?.emailAddress || ''}
                      readOnly
                    />
                  </div>
                </div>
              </section>

              {/* Trip Details */}
              <form onSubmit={handleSubmit}>
                <section className="flex flex-col gap-6">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                    <h2 className="text-xl font-bold text-white">Trip Details</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Start Date</label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full bg-background-dark border border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-3 px-4 text-white transition-all [color-scheme:dark]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">End Date</label>
                      <input
                        type="date"
                        required
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full bg-background-dark border border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-3 px-4 text-white transition-all [color-scheme:dark]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Number of Guests</label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="size-10 rounded-lg bg-surface-dark border border-slate-700 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors font-bold"
                        >
                          −
                        </button>
                        <span className="text-white font-semibold text-lg w-16 text-center">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                        <button
                          type="button"
                          onClick={() => setGuests(Math.min(20, guests + 1))}
                          className="size-10 rounded-lg bg-surface-dark border border-slate-700 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Special Requirements</label>
                    <textarea
                      value={specialRequirements}
                      onChange={(e) => setSpecialRequirements(e.target.value)}
                      placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                      rows={4}
                      className="w-full bg-background-dark border border-slate-700 focus:border-primary focus:ring-primary rounded-lg py-3 px-4 text-white placeholder:text-slate-600 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-red-700 text-white font-extrabold py-4 rounded-xl shadow-[0_0_20px_rgba(195,9,9,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg mt-4"
                  >
                    <span className="material-symbols-outlined">bookmark_check</span>
                    Confirm Booking Request
                  </button>
                </section>
              </form>
            </div>

            {/* Right Column: Tour Summary */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-6">
                <div className="bg-background-dark border border-primary/20 rounded-2xl overflow-hidden shadow-xl">
                  {/* Tour Image */}
                  {tour && (
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${tour.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6 relative">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    <h3 className="text-lg font-bold text-white mb-1">{tourName || 'Custom Tour'}</h3>
                    {tour && (
                      <>
                        <p className="text-slate-400 text-sm mb-6">{tour.description}</p>
                        <div className="space-y-3 py-4 border-t border-b border-slate-800">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400 flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px]">payments</span> Price per person
                            </span>
                            <span className="text-white font-semibold">{tour.price}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400 flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px]">schedule</span> Duration
                            </span>
                            <span className="text-white font-semibold">{tour.duration}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400 flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px]">group</span> Guests
                            </span>
                            <span className="text-white font-semibold">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                          </div>
                        </div>
                      </>
                    )}
                    {!tour && (
                      <p className="text-slate-400 text-sm mt-2">
                        No matching tour found. Please <Link href="/tours" className="text-primary hover:underline">browse tours</Link> and select one to book.
                      </p>
                    )}
                  </div>
                </div>

                {/* Help Card */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
                  <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Need help booking?</p>
                    <p className="text-[11px] text-slate-400">Our concierge team is available 24/7</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen pt-[72px]">
        <div className="animate-spin size-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    }>
      <BookingFormContent />
    </Suspense>
  );
}
