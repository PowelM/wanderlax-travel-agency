"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { allTours } from '@/app/lib/data/mockData';
import { getWishlistItems, toggleWishlistItem } from '@/app/actions/wishlistActions';

type TabType = 'Overview' | 'Itinerary' | 'Inclusions' | 'Reviews' | 'Policies';

export default function SerengetiSafariPage() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  const [showFullItinerary, setShowFullItinerary] = useState(false);
  const tourTitle = "The Royal Serengeti Safari";

  // Load wishlist status on mount
  useEffect(() => {
    async function checkWishlist() {
      if (isLoaded && isSignedIn) {
        try {
          const items = await getWishlistItems();
          setIsFavorited(items.some((item: { itemId: string }) => item.itemId === tourTitle));
        } catch (err) {
          console.error("Failed to check wishlist:", err);
        }
      }
    }
    checkWishlist();
  }, [isSignedIn, isLoaded]);

  const toggleFavorite = async () => {
    alert("Wishlist toggle triggered!");
    console.log("Toggle favorite clicked, isSignedIn:", isSignedIn);
    if (!isSignedIn) {
      console.log("Not signed in, redirecting to login");
      router.push('/portal/login');
      return;
    }

    // Optimistic update
    console.log("Performing optimistic update, current isFavorited:", isFavorited);
    const nextState = !isFavorited;
    setIsFavorited(nextState);

    try {
      console.log("Calling toggleWishlistItem for:", tourTitle);
      await toggleWishlistItem('TOUR_PACKAGE', tourTitle, '/tours/serengeti');
      console.log("Wishlist toggle successful");
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      // Revert optimistic update
      setIsFavorited(!nextState);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy link:", err);
    });
  };

  const handleBookNow = () => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }
    router.push(`/portal/book?tour=${encodeURIComponent(tourTitle)}`);
  };

  const tabs: TabType[] = ['Overview', 'Itinerary', 'Inclusions', 'Reviews', 'Policies'];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display antialiased pt-20">
      <style dangerouslySetInnerHTML={{__html: `
        .serengeti-bg::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.02;
            pointer-events: none;
            z-index: 9999;
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5znmdqKE6Jq2bqDNPWyii2iMAl_WZ0iUQvezjEFIOMsh6_xDa0f3SABub5WKcUBV1KKK61aKCMjFwglw74t_fcl2WhtY0A4L6voinGmIBXGm3_8xRIsatOLK-wJ3JlM57y-0IHyoXmJb1jreTpMYONpUZ4nBzsFGP79LZtrqUOvOnP8Oirc7uMuqG849IRDtqHLThgdJfYWAg0fu9gkQKrcig3ZIbhLsO_7P96qXG4e6CNHc_cYlNs6gMK603SZNA6RlTYomiJA');
        }
        .serengeti-glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}} />
      <div className="serengeti-bg"></div>
      
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link className="hover:text-primary" href="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary" href="/tours">Tours</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-200">{tourTitle}</span>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[600px] rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-cover bg-center z-10" data-alt="Cinematic aerial view of the Serengeti savanna at sunset" style={{"backgroundImage":"linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.2) 50%, rgba(15,15,15,0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxLarKtK0cq2HAQj8cC730TZmxIFlSBa6-2h-qoaj1vn0sPKUkOloTBfknfkPvqWK3862UPmvPYtNrbNd7i14lG0zMQdtlwozod9Lc3Q1YYzLzKeRS0zfIRPh55L6VwrvwV4D54LwE2wvi-nmxlO5K7ykkElkgoLoge6Mx0yKMIs-o0-J5zuDVwRlYjX8KZqLCOw4eeklEkyLcX1HN4dYui5jStv6d5rnpYEVemJL2WdcwVfHYzHRvfaIPj5gfCRSmJn4CVIFE0Q')"}}></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 z-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-primary">
                  <span className="material-symbols-outlined fill-1 text-lg">star</span>
                  <span className="material-symbols-outlined fill-1 text-lg">star</span>
                  <span className="material-symbols-outlined fill-1 text-lg">star</span>
                  <span className="material-symbols-outlined fill-1 text-lg">star</span>
                  <span className="material-symbols-outlined fill-1 text-lg">star</span>
                </div>
                <span className="text-slate-300 text-sm">(128 Authentic Reviews)</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">{tourTitle}</h1>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5 serengeti-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span> 8 Days / 7 Nights
                </span>
                <span className="flex items-center gap-1.5 serengeti-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
                  <span className="material-symbols-outlined text-primary text-sm">group</span> Private Group (Max 6)
                </span>
                <span className="flex items-center gap-1.5 serengeti-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
                  <span className="material-symbols-outlined text-primary text-sm">language</span> English, Swahili
                </span>
              </div>
            </div>
            <div className="flex gap-3 relative z-30">
              <button 
                onClick={handleShare}
<div className="flex gap-3">
<button aria-label="Share this experience" className="size-12 rounded-full serengeti-glass-card flex items-center justify-center text-white hover:bg-primary transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
<button aria-label="Add to favorites" className="size-12 rounded-full serengeti-glass-card flex items-center justify-center text-white hover:bg-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0" }}>
                  {isFavorited ? 'favorite' : 'favorite_border'}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Tabs & Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tab Bar */}
            <div className="flex border-b border-white/10 overflow-x-auto whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold border-b-2 transition-all ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <div className="serengeti-glass-card p-8 rounded-3xl leading-relaxed">
                <h3 className="text-2xl font-bold mb-6">Experience the Untamed</h3>
                <p className="text-slate-400 mb-6">
                  Embark on a journey through the vast plains of the Serengeti, where the rhythm of life is dictated by the ancient cycles of migration. Our private safari offers an intimate encounter with the &apos;Big Five&apos; and the spectacular Great Migration, all while staying in some of the most luxurious eco-lodges in Tanzania.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 serengeti-glass-card rounded-2xl">
                    <span className="material-symbols-outlined text-primary mb-2">hotel</span>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Stay</p>
                    <p className="text-sm font-bold">Luxury Tents</p>
                  </div>
                  <div className="text-center p-4 serengeti-glass-card rounded-2xl">
                    <span className="material-symbols-outlined text-primary mb-2">restaurant</span>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Dining</p>
                    <p className="text-sm font-bold">All Meals Inc.</p>
                  </div>
                  <div className="text-center p-4 serengeti-glass-card rounded-2xl">
                    <span className="material-symbols-outlined text-primary mb-2">airport_shuttle</span>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Transport</p>
                    <p className="text-sm font-bold">4x4 Land Cruiser</p>
                  </div>
                  <div className="text-center p-4 serengeti-glass-card rounded-2xl">
                    <span className="material-symbols-outlined text-primary mb-2">camera_enhance</span>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Expert</p>
                    <p className="text-sm font-bold">Private Guide</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Itinerary' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Your Journey</h3>
                <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                  {/* Day 1 */}
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
                    <div className="serengeti-glass-card p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-primary text-xs font-black uppercase tracking-widest">Day 01</span>
                        <span className="material-symbols-outlined text-slate-500">flight_land</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">Arrival in Kilimanjaro & Private Transfer</h4>
                      <p className="text-slate-400 text-sm">Upon arrival, your private guide will meet you at Kilimanjaro International Airport and escort you to your boutique villa in Arusha for a welcome dinner.</p>
                    </div>
                  </div>
                  {/* Day 2 */}
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
                    <div className="serengeti-glass-card p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-primary text-xs font-black uppercase tracking-widest">Day 02</span>
                        <span className="material-symbols-outlined text-slate-500">nature_people</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">Into the Heart of the Serengeti</h4>
                      <p className="text-slate-400 text-sm">Catch a bush flight to the central Serengeti. Embark on your first afternoon game drive searching for the elusive leopard and majestic lions.</p>
                    </div>
                  </div>
                  {showFullItinerary && (
                    <>
                      {/* Day 3 */}
                      <div className="relative">
                        <div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
                        <div className="serengeti-glass-card p-6 rounded-2xl">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-primary text-xs font-black uppercase tracking-widest">Day 03</span>
                            <span className="material-symbols-outlined text-slate-500">visibility</span>
                          </div>
                          <h4 className="text-lg font-bold mb-2">The Great Migration Pursuit</h4>
                          <p className="text-slate-400 text-sm">Follow the massive herds of wildebeest and zebras. Your guide will interpret the complex behaviors of the African savanna.</p>
                        </div>
                      </div>
                      {/* Day 4-8 */}
                      <div className="relative">
                        <div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
                        <div className="serengeti-glass-card p-6 rounded-2xl">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-primary text-xs font-black uppercase tracking-widest">Day 04 - 07</span>
                            <span className="material-symbols-outlined text-slate-500">landscape</span>
                          </div>
                          <h4 className="text-lg font-bold mb-2">Savanna Sunsets & Luxury Camps</h4>
                          <p className="text-slate-400 text-sm">Explore different sectors of the park, from the Seronera Valley to the Western Corridor. Evenings are spent around the campfire under starry skies.</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-8 top-1.5 size-6 rounded-full bg-primary border-4 border-background-dark"></div>
                        <div className="serengeti-glass-card p-6 rounded-2xl">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-primary text-xs font-black uppercase tracking-widest">Day 08</span>
                            <span className="material-symbols-outlined text-slate-500">flight_takeoff</span>
                          </div>
                          <h4 className="text-lg font-bold mb-2">Farewell to the Wild</h4>
                          <p className="text-slate-400 text-sm">One final sunrise game drive before heading back to Arusha for your departing flight.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <button 
                  onClick={() => setShowFullItinerary(!showFullItinerary)}
                  className="w-full py-4 serengeti-glass-card rounded-2xl text-sm font-bold text-slate-400 hover:text-white transition-all"
                >
                  {showFullItinerary ? 'Show Less' : 'View Full Itinerary'}
                </button>
              </div>
            )}

            {activeTab === 'Inclusions' && (
              <div className="serengeti-glass-card p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold">What is Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-slate-300">Luxury tented camp accommodation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-slate-300">All meals and selected beverages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-slate-300">Private 4x4 Land Cruiser with pop-up roof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-slate-300">Professional English-speaking guide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-slate-300">National Park entrance fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-slate-300">Airport transfers</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="serengeti-glass-card p-8 rounded-3xl space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Guest Reviews</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">5.0</span>
                    <div className="flex text-primary">
                      <span className="material-symbols-outlined fill-1 text-lg">star</span>
                      <span className="material-symbols-outlined fill-1 text-lg">star</span>
                      <span className="material-symbols-outlined fill-1 text-lg">star</span>
                      <span className="material-symbols-outlined fill-1 text-lg">star</span>
                      <span className="material-symbols-outlined fill-1 text-lg">star</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">EA</div>
                      <div>
                        <p className="font-bold">Elizabeth A.</p>
                        <p className="text-xs text-slate-500">October 2023</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm italic">&quot;The most incredible experience of my life. Our guide David was so knowledgeable and we saw everything we hoped for and more.&quot;</p>
                  </div>
                  <div className="border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">JL</div>
                      <div>
                        <p className="font-bold">James L.</p>
                        <p className="text-xs text-slate-500">September 2023</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm italic">&quot;Luxury in the middle of the wilderness. The tents were better than many 5-star hotels I&apos;ve stayed in.&quot;</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Policies' && (
              <div className="serengeti-glass-card p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold">Booking Policies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Cancellation Policy</h4>
                    <p className="text-sm text-slate-400">Full refund if cancelled at least 30 days before the departure date. 50% refund if cancelled 15-29 days before.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Payment Terms</h4>
                    <p className="text-sm text-slate-400">20% deposit required at the time of booking. Balance due 45 days prior to arrival.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Travel Insurance</h4>
                    <p className="text-sm text-slate-400">We highly recommend comprehensive travel insurance including medical evacuation coverage.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Capturing the Moment</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                <div className="row-span-2 rounded-2xl overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw3b3mAjpSQA5csHIaLewtdSOhnVO4m99i38T558WfWaGqZv8ui1fhzmkT1zZ19XHvw1w86C6sYi7gxmDqDl3ZmCyOkb8Aquua1Ay_n_lA5pkgabSEk4miHVMcFEIwkHSE-GCc5EGN460vxMFrDukskSUm9XzRt3G9CYhrHBrDdw3qKcHRFADPgmRMytLsinHD_bEac-JdZWw2jdYh3J1Nj_8HhG4S0D0Tq9hrMi4cmR4fGuTajXY-j9FMUalEF_pTbz1j3KIRMg')"}}></div>
                <div className="rounded-2xl overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_3CwTN4MfADKAPiOCdoFZbBFs74-B1KKo2lFlMfKX4t5_Fib6pHfzy-bnd73qgnq1BJGC1nU2u2inNgG_hsiQ3wENuXa179tjp2xYUL_mI80vM6MUi_j6Mw8BVa-mMZgRO94dVhVLMXmSMKzxry8PKuYKo4i-kzUs6Wz017MxK9dx-W4gjH-gTsYWQMgfGMKXadOeLb23IssMteZHBRs1PNXe93D7WeeGIVoV5EopmK5iM3iLZ0Jd-GAL7fxWn_aCXcfDC2aM_w')"}}></div>
                <div className="rounded-2xl overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzS657-OqrSzb2nWGxbYzvU5MjeJ4_4tutg7Mh9Y3wd5vCtg4xaFmPnClYQUhsiQ4DjVDs54Lb541RXxdXOjuCcEbuJNX84VtbIyxi6F_sieyg4VJTR06A-SQoyfm93ae6Zu4wzRPvDqJUZZPAvvrC-mp6a7ywKQe7NPtMACh43_TPr_uyoGTUXxkW2d3nfz38rhABECOTI98aEYUkEj1AJ_U1ITGGehffnTcsY0FiRSFIWbEn2iAdL0eoWVLvrdiKv3nZOBA41g')"}}></div>
                <div className="md:col-span-2 rounded-2xl overflow-hidden bg-cover bg-center" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR4vHlfPyHS3HzZHJsrYZ7hlP1KASgbelowzRnKoKcInt5NQ1rRAvpNW67LEpnHwWVeOgLmxzsVr5jgEeuwzgmDdVJBNQpybomaNum4jKEl_kTeW9BvuSIjDF_zVFBSLiy8VXygIkng-o1foOWevC_AOUzWQSJfEvKZJ_sM54_1dXPnww8iiGVaaZefKz5fu8BRbrKwbaLk6A-ZiTEFtXJY9d6YzKrKTtrkI-i_wPaeO0zSDnjFaqzPAFcWnXSSn4lVZwOjWClGg')"}}></div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="serengeti-glass-card p-8 rounded-3xl border-primary/20 shadow-2xl shadow-primary/5">
                <div className="flex items-baseline justify-between mb-8">
                  <h4 className="text-sm font-bold text-slate-400">Total Starting Price</h4>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white">$4,500</span>
                    <span className="text-xs block text-slate-500">per person</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="relative">
                    <label className="text-[10px] uppercase font-black text-slate-500 absolute left-4 top-2">Travel Date</label>
                    <button className="w-full pt-6 pb-2 px-4 serengeti-glass-card rounded-xl text-left flex items-center justify-between">
                      <span className="text-sm font-bold">Oct 12 - Oct 19, 2024</span>
                      <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                    </button>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Instant confirmation
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Flexible cancellation
                  </li>
                </ul>
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all"
                >
                  Book This Experience
                </button>
              </div>

              {/* Host Info */}
              <div className="serengeti-glass-card p-6 rounded-3xl flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-cover bg-center border border-white/10" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYQlAGZbriuquXpM_iRw_cMDPEFTlzWAGcX_j_oee1EARXgv7undzxOWpv0fzFCpkaZUkX15b8ZZRFB8lGS1idDzkFXVLNM9CKfgebOkkplZPu29rb0_LvFvUmbywEZW6Ad79ohM9i3-b7WSZj8i23GK6aci_67BeNiwEVT1NwRd6yi5tkFM-KOLbyl4j_GLeZw3NX552ABZ1SY5E8HrAuWnvdzuNUkST1Y7AGco1H8ESRtm6pm8oAaC6MW2WF59gzGox4Kd295Q')"}}></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Your Private Guide</p>
                  <h5 className="font-bold text-slate-200">David M. Kamau</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Experiences */}
        <section className="mt-24 pb-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-2">Related Experiences</h2>
              <p className="text-slate-500">Handpicked adventures that pair well with this safari.</p>
            </div>
            <Link href="/tours" className="text-primary font-bold hover:underline mb-2">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allTours.filter(t => t.slug !== 'serengeti').slice(0, 3).map((other) => (
              <Link key={other.slug} href={`/tours/${other.slug}`} className="group block">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${other.image}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">{other.category[1] || other.category[0]}</span>
                    <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{other.title}</h4>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                    {other.rating} ★
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                  <span className="text-slate-500 text-sm">{other.duration}</span>
                  <span className="font-bold text-slate-200">{other.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
