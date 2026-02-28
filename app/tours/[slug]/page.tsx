"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { allTours } from '@/app/lib/data/mockData';
import { useAuth } from '@clerk/nextjs';

export default function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [isFavorited, setIsFavorited] = React.useState(false);
  
  const tour = allTours.find(t => t.slug === slug);

  // Load wishlist status on mount
  React.useEffect(() => {
    async function checkWishlist() {
      if (isSignedIn && tour) {
        try {
          const { getWishlistItems } = await import('@/app/actions/wishlistActions');
          const items = await getWishlistItems();
          setIsFavorited(items.some((item: { itemId: string }) => item.itemId === tour.title));
        } catch (err) {
          console.error("Failed to check wishlist:", err);
        }
      }
    }
    checkWishlist();
  }, [isSignedIn, tour]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Not Found</h1>
          <Link href="/tours" className="text-primary hover:underline">Return to all tours</Link>
        </div>
      </div>
    );
  }

  const otherTours = allTours.filter(t => t.slug !== slug).slice(0, 3);

  const handleBookNow = () => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }
    router.push(`/portal/book?tour=${encodeURIComponent(tour.title)}`);
  };

  const toggleFavorite = async () => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }

    // Optimistic update
    setIsFavorited(!isFavorited);

    try {
      const { toggleWishlistItem } = await import('@/app/actions/wishlistActions');
      await toggleWishlistItem('TOUR_PACKAGE', tour.title, `/tours/${slug}`);
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      // Revert optimistic update
      setIsFavorited(prev => !prev);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display antialiased pt-20">
      <style dangerouslySetInnerHTML={{__html: `
        .tour-bg::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.02;
            pointer-events: none;
            z-index: 9999;
            background-image: url('${tour.image}');
        }
        .tour-glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .hero-gradient {
          background: linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.2) 50%, rgba(15,15,15,0.4) 100%);
        }
      `}} />
      <div className="tour-bg"></div>
      
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link className="hover:text-primary" href="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary" href="/tours">Tours</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-200">{tour.title}</span>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[500px] rounded-3xl overflow-hidden mb-12 group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${tour.image}')` }}></div>
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-lg ${i < Math.floor(parseFloat(tour.rating)) ? 'fill-1' : ''}`}>star</span>
                  ))}
                </div>
                <span className="text-slate-300 text-sm">({tour.rating} Rating)</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">{tour.title}</h1>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5 tour-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span> {tour.duration}
                </span>
                <span className="flex items-center gap-1.5 tour-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
                  <span className="material-symbols-outlined text-primary text-sm">group</span> {tour.group}
                </span>
                <span className="flex items-center gap-1.5 tour-glass-card px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
                  <span className="material-symbols-outlined text-primary text-sm">language</span> English, Local Guides
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="size-12 rounded-full tour-glass-card flex items-center justify-center text-white hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button 
                onClick={toggleFavorite}
                className={`size-12 rounded-full tour-glass-card flex items-center justify-center transition-colors ${
                  isFavorited ? 'bg-primary text-white border-primary' : 'text-white hover:bg-primary'
                }`}
              >
                <span className="material-symbols-outlined">{isFavorited ? 'favorite' : 'favorite_border'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="tour-glass-card p-8 rounded-3xl leading-relaxed">
              <h3 className="text-2xl font-bold mb-6 text-white">Experience Details</h3>
              <p className="text-slate-400 mb-8 text-lg">
                {tour.description} This curated journey is designed for those who seek both luxury and authenticity. From the moment you arrive, every detail is handled by our expert concierge team, ensuring a seamless and unforgettable experience.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 tour-glass-card rounded-2xl hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">hotel</span>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">STAY</p>
                  <p className="text-sm font-bold text-white">Luxury Resorts</p>
                </div>
                <div className="text-center p-6 tour-glass-card rounded-2xl hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">restaurant</span>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">DINING</p>
                  <p className="text-sm font-bold text-white">Gourmet Meals</p>
                </div>
                <div className="text-center p-6 tour-glass-card rounded-2xl hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">explore</span>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">GUIDE</p>
                  <p className="text-sm font-bold text-white">Private Expert</p>
                </div>
                <div className="text-center p-6 tour-glass-card rounded-2xl hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">flight</span>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">TRANSFERS</p>
                  <p className="text-sm font-bold text-white">Private Transport</p>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="tour-glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-white">What&apos;s Included</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    All-inclusive accommodation
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Private guided excursions
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Airport fast-track service
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Daily gourmet breakfast & dinner
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    24/7 dedicated concierge
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Personalized luxury welcome kit
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="tour-glass-card p-8 rounded-3xl border-primary/20 shadow-2xl shadow-primary/10">
                <div className="flex items-baseline justify-between mb-8">
                  <h4 className="text-sm font-bold text-slate-400">Starting Price</h4>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white">{tour.price}</span>
                    <span className="text-xs block text-slate-500">per person</span>
                  </div>
                </div>
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                >
                  Book This Experience
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    Best price guarantee
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="material-symbols-outlined text-primary">security</span>
                    Secure booking process
                  </div>
                </div>
              </div>

              {/* Promo Card */}
              <div className="tour-glass-card p-6 rounded-3xl bg-primary/5 border-primary/10">
                <h5 className="font-bold text-white mb-2">Need Customization?</h5>
                <p className="text-sm text-slate-400 mb-4">Our travel experts can tailor this journey to your exact preferences.</p>
                <Link href="/contact" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                  Contact an Expert <span className="material-symbols-outlined text-xs">open_in_new</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Experiences */}
        <section className="mt-24 pb-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-2">Switch to other tours</h2>
              <p className="text-slate-500">Curated adventures that might piquate your interest.</p>
            </div>
            <Link href="/tours" className="text-primary font-bold hover:underline mb-2">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTours.map((other) => (
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
