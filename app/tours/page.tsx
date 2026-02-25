"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

type TourCategory = 'All Packages' | 'Beach Escapes' | 'Safari Adventures' | 'City Breaks' | 'Mountain Treks' | 'Cultural Tours';

interface Tour {
  title: string;
  description: string;
  price: string;
  duration: string;
  group: string;
  rating: string;
  category: TourCategory[];
  tags: { label: string; style?: string }[];
  image: string;
}

const allTours: Tour[] = [
  {
    title: 'Maldives Escape',
    description: '7 nights in an overwater villa with all-inclusive dining and private sunset cruises.',
    price: '$5,400',
    duration: '7 Days',
    group: '2 ppl',
    rating: '4.9',
    category: ['All Packages', 'Beach Escapes'],
    tags: [{ label: 'Relaxation' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUV2tyz6So6VwYE94GJFnhBGH8Dco3cLebnCAULJDZHqwUaLKIqIveE5DwU8t3QvmDynrG_oH8wB05jvBSSYmKWDU4ZVpmqanjb_8tZy8F9eF5tAr1F2TKEcj44BhRPocSSrw9Rc9e1rbRP4lLUSbOTf5FmQ0mrjFn3mzuperyO0o04qCNpg6x45XYXnCM-Hl2jeisCIPLdS1kudpqrnBlZAcLn8IQdcc2mjxxjTEfbGQoPF4q-JHwrfR63xUONYmT0Zvpkc1Xfw',
  },
  {
    title: 'Ancient Kyoto',
    description: 'Explore the historic temples, tea ceremonies, and bamboo forests of ancient Japan.',
    price: '$3,200',
    duration: '5 Days',
    group: 'Group',
    rating: '4.8',
    category: ['All Packages', 'Cultural Tours'],
    tags: [{ label: 'Culture' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_hhE52OZGgrrDPr3sPjMHs5sxUWPsEuBUaMhEHMiiZrHL3nq36rEfumHZzVvZzBqAciFltS802kVcL7QdQDNS8t7vNhnEnSTdzabGKtWFWUToeZg24ztzWiOQKUK6hfEWB6d2sbdQZ0PXHxt7zMSRZQlnsy2dQctFb66cKArvDoD2RLLDJRCjkrzL1UVmpk8XjR6uqkcyJKi1UV3Fd7hhTy_TUaBc9G-bs18Zm1v2UMDkJF4GfvugGQ_CC3Rlf62I6LhYaIIiBw',
  },
  {
    title: 'Swiss Alpine Trek',
    description: 'Guided hiking tour through the breathtaking landscapes of Zermatt and Interlaken.',
    price: '$4,150',
    duration: '8 Days',
    group: 'Small Group',
    rating: '5.0',
    category: ['All Packages', 'Mountain Treks'],
    tags: [{ label: 'Adventure' }, { label: 'Popular', style: 'bg-primary/90' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBptty087RFv8nBqSoHJWVVHJKHF0NQhttWLEr5LTl8VdnU-vEwKdo6zRlM1oo-fbV-pDHbI_U3KFls8oG29PTMJS3H3nK_aDTAnd7RP7G_lkQQSL__vy8fNPrfveL3dKGjAcW-WJsS7yetY07aE2VPi3vKv8zFaWdVa2POQJ-guOxwu_l6Uir5DPujTA8Jm2T2aMUJP1Vhs1hiDTugzYgn-ndBaqGVJ6xQSsIdaWJnM1dHHKvkvSWeHWc8C_GBQxPFxlfNk2eHNA',
  },
  {
    title: 'Santorini Sunset',
    description: 'Experience the magic of the Aegean Sea with wine tasting and private yacht tours.',
    price: '$3,800',
    duration: '6 Days',
    group: '2 ppl',
    rating: '4.7',
    category: ['All Packages', 'Beach Escapes'],
    tags: [{ label: 'Romantic' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvoQ7Zvip5jn5ZaFMHXoEM4xSKpCN2Ih2qoH0roUXhbzZs-7ZSqG8ZzL4Cz9kS-1-Y94c1ZUregXQuU632IIgKboaohmGPX5sLqEMrmlsRbPTWfhkyEXX03RQX4ubesRC1WGOHYMWXtk02bodDUkEgW3RZBf1fS2YIeKYmJNbDrmFbaFpCmOAXTzN0x70thPnuXAKVWvKaUbJOCQcLZ5P4BlzU-UJuyNV_kxRfFIVfdzBuseetH5kf6snTVp9pJjzvqwRukC7lmg',
  },
  {
    title: 'NYC Penthouse Week',
    description: 'Luxury stay in Manhattan with Broadway tickets and helicopter tour included.',
    price: '$6,200',
    duration: '5 Days',
    group: '2 ppl',
    rating: '4.6',
    category: ['All Packages', 'City Breaks'],
    tags: [{ label: 'Urban' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIRXc2032U2hY-HLjoK1Ag0J7DSNRzbKAc2V_dKqy80CC3MwKwHe49ZZvhLMwn1IjGvh8jdeJSfm5cW1ryHRpDr3WfqvchFpTRPz_gUnOiBRUgYwRqOygImLBgjdM7a-03U9khRpKmfCgQLotc7v52Gnj2vi5gBlgMBlMk9rN0xb58wM8D6gCa_vjpRjJx0pkBz-5zCw4J8-9U26zjU267MLvmaCAR0zjTsrruI-UVxI8zHCaJxxdBBDUaxqlgfGYq51IYN4TGaA',
  },
  {
    title: 'Mystic Machu Picchu',
    description: 'A guided journey through the Sacred Valley to the lost city of the Incas.',
    price: '$2,900',
    duration: '6 Days',
    group: 'Group',
    rating: '4.9',
    category: ['All Packages', 'Mountain Treks', 'Cultural Tours'],
    tags: [{ label: 'History' }],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCAVUB0h5vQRfF5hJZn-4xznNzIOGFq0GqG3kc9GG30esdrWAKSL9UrJEn4F-UxeK1BfGOuteIHrBjyue5n18qFSsZDlwlcUcpCLuV1qgsvNPB12Uyl4c4T3ZsaBUZ2nZj3qwH2e9mpVKxHUcZQ9F3_RYwvyg_fP-tyhmqZ2la28ecc6g92erllKxG36UrBISc5HRp1-8ZeE9qBQ49IxXSv82Vwttnuz4Sb-1LzPePg3mwOIT4HghZ3FNWQXpsPcUtMqeSQk2isg',
  },
];

const categories: TourCategory[] = ['All Packages', 'Beach Escapes', 'Safari Adventures', 'City Breaks', 'Mountain Treks', 'Cultural Tours'];

export default function WanderluxToursCuratedTravelPackagesPage() {
  const [activeCategory, setActiveCategory] = useState<TourCategory>('All Packages');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleBookNow = (tourTitle: string) => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }
    router.push(`/portal/book?tour=${encodeURIComponent(tourTitle)}`);
  };

  const toggleFavorite = (title: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const filteredTours = allTours.filter(tour => {
    const matchesCategory = activeCategory === 'All Packages' || tour.category.includes(activeCategory);
    const matchesSearch = searchQuery === '' ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px]">
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(34, 16, 16, 0.3) 0%, rgba(34, 16, 16, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4OtRSL0s-KrYdrWpZerF4nwGKhTN8BRXQHLjnqfTpOL4m5mcnT5gq-jevCzmrZAz0GpG07SDMXNa5bX1g25JmT7duiEsO-oW1iqYIfm4apcT_PMrJG92vV9X3PgPpVQwMGPxdoqacdlBqyRhrjzZfnD9eH_GuYCjU7htTEGNrqCOuSdICMjQSnGIB4b3RYB_iejirfcGJ59xRnSjSRJ8zdo3N9bXNrEASxkeQAEdSqeHwTwCXSqPk3_6Qvnb6WXMcCniddQLeaA')" }}></div>
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-xl">
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
          {/* Filters */}
          <div className="flex overflow-x-auto pb-4 gap-6 border-b border-white/10 mb-8 items-center no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-3 border-b-2 font-medium text-sm px-2 transition-all ${
                  activeCategory === cat
                    ? 'border-primary text-white font-bold'
                    : 'border-transparent text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Spotlight */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-surface-dark border border-white/5 shadow-xl group hover:border-primary/30 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAae9-jgMtfLY4pZTb4At9kVVP0UyuN4ztEK3DfJyYBEKE971nIMS6zfggnNE4222TwuLC9qq0YmB-tqps4gRz_4oHkWZu9FTcu9RMCYyonHusYO-t0KIyenuZ8ZhATYeUgTkbssukdVW9eAHzo_46bLV52y6MCPq0dWHG8YQ99Mu3q8btP2iMLF8PpevjJAP4ut8hFo5YouwpHeIpWZ_7NQ0NAOtm2TMlTWUGl25gZSucltOaB_RiK03g-jT6fU2EwpDsbOLiFhg')" }}>
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Exclusive
                </div>
              </div>
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-sm">star</span>
                  <span className="text-primary text-sm font-bold tracking-wide uppercase">Featured Experience</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">The Royal Serengeti Safari</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Immerse yourself in the wild heart of Africa with our exclusive 10-day safari. Experience private game drives, luxury tented camps, and intimate encounters with the Big Five.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary"><span className="material-symbols-outlined">calendar_month</span></div>
                    <div><p className="text-xs text-slate-400 uppercase">Duration</p><p className="text-white font-medium">10 Days</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary"><span className="material-symbols-outlined">payments</span></div>
                    <div><p className="text-xs text-slate-400 uppercase">Starting From</p><p className="text-white font-medium">$12,000 / person</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary"><span className="material-symbols-outlined">pin_drop</span></div>
                    <div><p className="text-xs text-slate-400 uppercase">Location</p><p className="text-white font-medium">Tanzania</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary"><span className="material-symbols-outlined">hiking</span></div>
                    <div><p className="text-xs text-slate-400 uppercase">Difficulty</p><p className="text-white font-medium">Moderate</p></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact" className="flex-1 bg-white/10 border border-white/20 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition-all text-center">
                    View Details
                  </Link>
                  <button
                    onClick={() => handleBookNow('The Royal Serengeti Safari')}
                    className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-center flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                    Book Now
                  </button>
                  <button
                    onClick={() => toggleFavorite('The Royal Serengeti Safari')}
                    className={`flex-none w-12 flex items-center justify-center rounded-lg border transition-colors ${
                      favorites.has('The Royal Serengeti Safari')
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'border-white/10 text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined">{favorites.has('The Royal Serengeti Safari') ? 'favorite' : 'favorite_border'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Curated Packages
              {filteredTours.length !== allTours.length && (
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
          {filteredTours.length === 0 && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-5xl text-slate-600 mb-4 block">travel_explore</span>
              <h3 className="text-xl font-bold text-white mb-2">No packages found</h3>
              <p className="text-slate-400">Try adjusting your search or browse a different category.</p>
              <button onClick={() => { setActiveCategory('All Packages'); setSearchQuery(''); }} className="mt-6 text-primary font-bold hover:underline">
                View All Packages
              </button>
            </div>
          )}

          {/* Grid of Cards */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
            {filteredTours.map((tour) => (
              <div key={tour.title} className={`group bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 ${viewMode === 'list' ? 'flex flex-row' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-72 min-h-[200px]' : 'h-60'}`}>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${tour.image}')` }}></div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {tour.tags.map((tag) => (
                      <span key={tag.label} className={`${tag.style || 'bg-black/60 backdrop-blur'} text-white text-xs font-bold px-2 py-1 rounded`}>{tag.label}</span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.preventDefault(); toggleFavorite(tour.title); }}
                    className={`absolute top-3 right-3 w-8 h-8 backdrop-blur rounded-full flex items-center justify-center transition-colors ${
                      favorites.has(tour.title) ? 'bg-primary text-white' : 'bg-black/40 text-white hover:bg-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">{favorites.has(tour.title) ? 'favorite' : 'favorite_border'}</span>
                  </button>
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-surface-dark to-transparent"></div>
                </div>
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{tour.title}</h3>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold bg-yellow-500/10 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[14px] fill-current">star</span> {tour.rating}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs">From</span>
                      <span className="text-white font-bold text-lg">{tour.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span> {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">group</span> {tour.group}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBookNow(tour.title)}
                    className="w-full mt-4 bg-primary hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(198,16,16,0.2)] hover:shadow-[0_0_20px_rgba(198,16,16,0.4)] flex items-center justify-center gap-2 text-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
