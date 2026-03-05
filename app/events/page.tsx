"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { getPublicEvents } from '@/app/actions/eventActions';

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  category: string;
  totalCapacity: number;
  capacityRemaining: number;
  images: string[];
  status: string;
  basePrice: number;
  ticketsSold: number;
  isSoldOut: boolean;
}

const EVENT_CATEGORIES = ['All', 'CONFERENCE', 'CONCERT', 'EXPERIENCE', 'WORKSHOP', 'OTHER'];

const CATEGORY_LABELS: Record<string, string> = {
  All: 'All Events',
  CONFERENCE: 'Conferences',
  CONCERT: 'Concerts',
  EXPERIENCE: 'Experiences',
  WORKSHOP: 'Workshops',
  OTHER: 'Other Events',
};

function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start.getTime() === end.getTime()) {
    return formatDate(start);
  }
  
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()}-${end.getDate()} ${start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
  }
  
  return `${formatDate(start)} - ${formatDate(end)}`;
}

function getDaysUntilEvent(startDate: Date | string): number {
  const start = new Date(startDate);
  const today = new Date();
  return Math.floor((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // Load events from DB
  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getPublicEvents();
        setEvents(data as Event[]);
      } catch (err) {
        console.error('Failed to load events:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  // Filter events
  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = event.basePrice >= priceRange[0] && event.basePrice <= priceRange[1];

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleBookNow = (eventSlug: string) => {
    if (!isSignedIn) {
      router.push('/portal/login');
      return;
    }
    router.push(`/events/${eventSlug}?bookNow=true`);
  };

  const maxPrice = Math.max(...events.map((e) => e.basePrice), 1000);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-red-100 text-lg">
            Discover and book tickets for amazing experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Search */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search events, destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            />
          </div>

          {/* Price Range */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Max Price</label>
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <div className="text-sm text-gray-400 mt-1">${priceRange[1]}</div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 items-end">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition ${
                viewMode === 'grid'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition ${
                viewMode === 'list'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-700 pb-4">
          {EVENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeCategory === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredEvents.length} of {events.length} events
          </p>
        </div>

        {/* Events Grid/List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-400">Loading events...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const daysUntil = getDaysUntilEvent(event.startDate);
              const capacityPercent = ((event.totalCapacity - event.capacityRemaining) / event.totalCapacity) * 100;

              return (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="group bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-700 overflow-hidden">
                    {event.images[0] ? (
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </div>
                    {event.isSoldOut && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">SOLD OUT</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-400 transition">
                      {event.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="text-red-400">📍</span>
                        <span>{event.destination}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-400">📅</span>
                        <span>{formatDateRange(event.startDate, event.endDate)}</span>
                      </div>
                      {daysUntil > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-red-400">⏰</span>
                          <span>{daysUntil} days away</span>
                        </div>
                      )}
                    </div>

                    {/* Capacity/Price */}
                    <div className="mb-4">
                      <div className="flex justify-between mb-1 text-xs">
                        <span className="text-gray-400">Capacity</span>
                        <span className="text-gray-400">{capacityPercent.toFixed(0)}% sold</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all"
                          style={{ width: `${Math.min(capacityPercent, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <div>
                        <span className="text-gray-400 text-sm">From</span>
                        <p className="text-2xl font-bold text-red-400">${event.basePrice}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(event.slug);
                        }}
                        disabled={event.isSoldOut}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                          event.isSoldOut
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                      >
                        {event.isSoldOut ? 'Waitlist' : 'Book'}
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map((event) => {
              const daysUntil = getDaysUntilEvent(event.startDate);

              return (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="flex gap-4 bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-600/20 transition-all group"
                >
                  {/* Image */}
                  <div className="w-48 h-40 bg-gray-700 flex-shrink-0 relative overflow-hidden">
                    {event.images[0] ? (
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-red-400 transition">
                          {event.title}
                        </h3>
                        <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                          {event.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <span className="text-red-400">📍</span>
                          <span>{event.destination}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-400">📅</span>
                          <span>{formatDateRange(event.startDate, event.endDate)}</span>
                        </div>
                        {daysUntil > 0 && (
                          <div className="flex items-center gap-2">
                            <span className="text-red-400">⏰</span>
                            <span>{daysUntil} days away</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex flex-col justify-between items-end p-5 bg-gray-900/50">
                    <div>
                      <span className="text-gray-400 text-sm">From</span>
                      <p className="text-2xl font-bold text-red-400">${event.basePrice}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleBookNow(event.slug);
                      }}
                      disabled={event.isSoldOut}
                      className={`px-6 py-2 rounded-lg font-semibold transition ${
                        event.isSoldOut
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      {event.isSoldOut ? 'Waitlist' : 'Book'}
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
