"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { getPublicTours } from '@/app/actions/tourActions';

// --- Types ---
interface TourDestination {
  id: string;
  name: string;
  country: string;
  continent: string;
}

interface DBTour {
  id: string;
  title: string;
  slug: string;
  category: string;
  overview: string;
  durationDays: number;
  durationNights: number;
  basePrice: number | string;
  groupSizeMin: number;
  groupSizeMax: number;
  images: string[];
  status: string;
  featured: boolean;
  destination: TourDestination;
  reviews: { rating: number }[];
}

const TOUR_CATEGORIES = ['All', 'SAFARI', 'BEACH', 'CULTURAL', 'ADVENTURE', 'HONEYMOON', 'FAMILY'];

const CATEGORY_LABELS: Record<string, string> = {
  All: 'All Packages',
  SAFARI: 'Safari Adventures',
  BEACH: 'Beach Escapes',
  CULTURAL: 'Cultural Tours',
  ADVENTURE: 'Adventure',
  HONEYMOON: 'Honeymoon',
  FAMILY: 'Family',
};

function getAverageRating(reviews: { rating: number }[]): number {
  if (!reviews || reviews.length === 0) return 4.8;
  return Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10;
}

export default function ToursPage() {
  const [tours, setTours] = useState<DBTour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // Load tours from DB
  useEffect(() => {
    async function fetchTours() {
      try {
        const data = await getPublicTours();
        setTours(data);
      } catch (err) {
        console.error('Failed to load tours:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchTours();
  }, []);

  // Load wishlist
  useEffect(() => {
    async function loadWishlist() {
      if (isSignedIn) {
        try {
          const { getWishlistItems } = await import('@/app/actions/wishlistActions');
          const items = await getWishlistItems();
          setFavorites(new Set(items.map((item: { itemId: string }) => item.itemId)));
        } catch (err) {
          console.error('Failed to load wishlist:', err);
        }
      }
    }
    loadWishlist();
  }, [isSignedIn]);

  const handleBookNow = (tourId: string) => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }
    router.push(`/portal/book?tourId=${tourId}`);
  };

  const toggleFavorite = async (tourId: string) => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(tourId)) next.delete(tourId);
      else next.add(tourId);
      return next;
    });
    try {
      const { toggleWishlistItem } = await import('@/app/actions/wishlistActions');
      await toggleWishlistItem('TOUR_PACKAGE', tourId);
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
      setFavorites(prev => {
        const next = new Set(prev);
        if (next.has(tourId)) next.delete(tourId);
        else next.add(tourId);
        return next;
      });
    }
  };

  const filteredTours = tours.filter(tour => {
    const matchesCategory = activeCategory === 'All' || tour.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destination?.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTour = tours.find(t => t.featured) ?? tours[0] ?? null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-dark pt-[72px]">
        <div className="animate-spin size-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px]">
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(34, 16, 16, 0.3) 0%, rgba(34, 16, 16, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4OtRSL0s-KrYdrWpZerF4nwGKhTN8BRXQHLjnqfTpOL4m5mcnT5gq-jevCzmrZAz0GpG07SDMXNa5bX1g25JmT7duiEsO-oW1iqYIfm4apcT_PMrJG92vV9X3PgPpVQwMGPxdoqacdlBqyRhrjzZfnD9eH_GuYCjU7htTEGNrqCOuSdICMjQSnGIB4b3RYB_iejirfcGJ59xRnSjSRJ8zdo3N9bXNrEASxkeQAEdSqeHwTwCXSqPk3_6Qvnb6WXMcCniddQLeaA')",
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-xl">
              Discover. Explore. Experience.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-medium mb-8 max-w-2xl mx-auto drop-shadow-md">
              Curated journeys for the discerning traveler. Find your perfect escape among our hand-picked luxury packages.
            </p>
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2 max-w-xl mx-auto bg-surface-darker/80 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-2xl">
              <div className="flex-1 flex items-center px-3 bg-surface-dark rounded-lg border border-transparent focus-within:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <input
                  className="w-full bg-transparent border-none text-white placeholder-slate-400 focus:ring-0 py-3"
                  placeholder="Where do you want to go?"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">search</span>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-8 relative z-20 pb-12">
          {/* Category Filters */}
          <div className="flex overflow-x-auto pb-4 gap-6 border-b border-white/10 mb-8 items-center no-scrollbar">
            {TOUR_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-3 border-b-2 font-medium text-sm px-2 transition-all ${
                  activeCategory === cat
                    ? 'border-primary text-white font-bold'
                    : 'border-transparent text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {CATEGORY_LABELS[cat] ?? cat}
              </button>
            ))}
          </div>

          {/* Featured Spotlight */}
          {featuredTour && (
            <div className="mb-12 rounded-2xl overflow-hidden bg-surface-dark border border-white/5 shadow-xl group hover:border-primary/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <Image
                    src={featuredTour.images?.[0] || 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80'}
                    alt={featuredTour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-sm">star</span>
                    <span className="text-primary text-sm font-bold tracking-wide uppercase">
                      {featuredTour.category} · {featuredTour.destination?.country}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredTour.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">{featuredTour.overview}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">calendar_month</span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase">Duration</p>
                        <p className="text-white font-medium">{featuredTour.durationDays} Days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">payments</span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase">Starting From</p>
                        <p className="text-white font-medium">${Number(featuredTour.basePrice).toLocaleString()} / person</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">pin_drop</span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase">Destination</p>
                        <p className="text-white font-medium">{featuredTour.destination?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">group</span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase">Group Size</p>
                        <p className="text-white font-medium">{featuredTour.groupSizeMin}–{featuredTour.groupSizeMax} people</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/tours/${featuredTour.slug}`}
                      className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition-all text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleBookNow(featuredTour.id)}
                      className="w-full sm:flex-1 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-center flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                      Book Now
                    </button>
                    <button
                      onClick={() => toggleFavorite(featuredTour.id)}
                      className={`flex-none w-12 flex items-center justify-center rounded-lg border transition-colors ${
                        favorites.has(featuredTour.id)
                          ? 'bg-primary/20 border-primary text-primary'
                          : 'border-white/10 text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="material-symbols-outlined">
                        {favorites.has(featuredTour.id) ? 'favorite' : 'favorite_border'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Count + View Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Curated Packages
              {filteredTours.length < tours.length && (
                <span className="text-sm text-slate-400 font-normal ml-3">({filteredTours.length} results)</span>
              )}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`w-8 h-8 flex items-center justify-center rounded border transition-colors ${
                  viewMode === 'grid' ? 'bg-surface-dark border-white/10 text-white' : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`w-8 h-8 flex items-center justify-center rounded border transition-colors ${
                  viewMode === 'list' ? 'bg-surface-dark border-white/10 text-white' : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">view_list</span>
              </button>
            </div>
          </div>

          {/* No Results */}
          {filteredTours.length === 0 && !loading && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-5xl text-slate-600 mb-4 block">travel_explore</span>
              <h3 className="text-xl font-bold text-white mb-2">No packages found</h3>
              <p className="text-slate-400">Try adjusting your search or browse a different category.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-6 text-primary font-bold hover:underline"
              >
                View All Packages
              </button>
            </div>
          )}

          {/* Tour Cards Grid */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
            {filteredTours.map((tour) => {
              const avgRating = getAverageRating(tour.reviews);
              const image = tour.images?.[0] || 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80';
              return (
                <div
                  key={tour.id}
                  className={`group bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 ${viewMode === 'list' ? 'flex flex-row' : ''}`}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-72 min-h-[200px]' : 'h-60'}`}>
                    <Image
                      src={image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 flex gap-2 z-10">
                      <span className="bg-black/60 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                        {CATEGORY_LABELS[tour.category] ?? tour.category}
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.preventDefault(); toggleFavorite(tour.id); }}
                      className={`absolute top-3 right-3 w-8 h-8 backdrop-blur rounded-full flex items-center justify-center transition-colors z-10 ${
                        favorites.has(tour.id) ? 'bg-primary text-white' : 'bg-black/40 text-white hover:bg-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {favorites.has(tour.id) ? 'favorite' : 'favorite_border'}
                      </span>
                    </button>
                    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-surface-dark to-transparent"></div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{tour.title}</h3>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold bg-yellow-500/10 px-1.5 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[14px]">star</span>
                        {avgRating}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                      {tour.destination?.name}, {tour.destination?.country}
                    </p>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{tour.overview}</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-xs">From</span>
                        <span className="text-white font-bold text-lg">${Number(tour.basePrice).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          {tour.durationDays}d
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">group</span>
                          {tour.groupSizeMax}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="bg-white/5 hover:bg-white/10 text-white font-bold py-2.5 px-4 rounded-lg transition-all border border-white/10 flex items-center justify-center gap-2 text-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]">info</span>
                        Details
                      </Link>
                      <button
                        onClick={() => handleBookNow(tour.id)}
                        className="bg-primary hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(198,16,16,0.2)] hover:shadow-[0_0_20px_rgba(198,16,16,0.4)] flex items-center justify-center gap-2 text-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
