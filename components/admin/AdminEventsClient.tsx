"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  publishEvent,
  cancelEvent,
  getAdminEvents,
} from '@/app/actions/eventActions';
import { AdminHeader } from '@/components/admin/AdminHeader';

type Event = {
  id: string;
  title: string;
  slug: string;
  description: string;
  destination: string;
  startDate: Date | string;
  endDate: Date | string;
  category: string;
  status: string;
  totalCapacity: number;
  organizer?: string;
  images: string[];
  createdAt: Date | string;
  ticketsSold: number;
  ticketTypes: Array<{ id: string; name: string; basePrice: number }>;
};

export function AdminEventsClient({ initialEvents }: { initialEvents: Event[] }) {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Stats
  const stats = useMemo(() => {
    return {
      total: events.length,
      published: events.filter(e => e.status === 'PUBLISHED').length,
      drafts: events.filter(e => e.status === 'DRAFT').length,
      cancelled: events.filter(e => e.status === 'CANCELLED').length,
    };
  }, [events]);

  // Filtered events
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === 'All' || event.category === categoryFilter;
      const matchesStatus =
        statusFilter === 'All' || event.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [events, searchQuery, categoryFilter, statusFilter]);

  const selectedEvent = events.find((e) => e.id === selectedEventId) || null;

  const handlePublish = async (eventId: string) => {
    setIsUpdating(true);
    try {
      const result = await publishEvent(eventId);
      if (result.success) {
        setEvents((prev) =>
          prev.map((e) => (e.id === eventId ? { ...e, status: 'PUBLISHED' } : e))
        );
      }
    } catch (error) {
      console.error('Error publishing event:', error);
    } finally {
      setIsUpdating(false);
      setOpenMenuId(null);
    }
  };

  const handleCancel = async (eventId: string) => {
    setIsUpdating(true);
    try {
      const result = await cancelEvent(eventId);
      if (result.success) {
        setEvents((prev) =>
          prev.map((e) => (e.id === eventId ? { ...e, status: 'CANCELLED' } : e))
        );
      }
    } catch (error) {
      console.error('Error cancelling event:', error);
    } finally {
      setIsUpdating(false);
      setOpenMenuId(null);
      setDeleteConfirmId(null);
    }
  };

  const handleExport = () => {
    const headers = [
      'Title',
      'Category',
      'Destination',
      'Date',
      'Capacity',
      'Sold',
      'Price',
      'Status',
      'Created',
    ];

    const rows = filteredEvents.map((event) => [
      `"${event.title.replace(/"/g, '""')}"`,
      event.category,
      event.destination,
      new Date(event.startDate).toLocaleDateString(),
      event.totalCapacity,
      event.ticketsSold,
      event.ticketTypes[0]?.basePrice || 'N/A',
      event.status,
      new Date(event.createdAt).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `events-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="flex h-full bg-gray-900">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader title="Events" subtitle="Manage your events and ticket sales" />

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-gray-800/50 border-b border-gray-700">
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Total Events</p>
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Published</p>
            <p className="text-2xl font-bold text-green-400">{stats.published}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Drafts</p>
            <p className="text-2xl font-bold text-yellow-400">{stats.drafts}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Cancelled</p>
            <p className="text-2xl font-bold text-red-400">{stats.cancelled}</p>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="p-6 border-b border-gray-700 space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            />
            <button
              onClick={() => router.push('/admin/events/create')}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
            >
              Create Event
            </button>
            <button
              onClick={handleExport}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 font-semibold"
            >
              Export CSV
            </button>
          </div>

          <div className="flex gap-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>All</option>
              <option>CONFERENCE</option>
              <option>CONCERT</option>
              <option>EXPERIENCE</option>
              <option>WORKSHOP</option>
              <option>OTHER</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>All</option>
              <option>DRAFT</option>
              <option>PUBLISHED</option>
              <option>CANCELLED</option>
            </select>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex gap-6 p-6 overflow-hidden">
          {/* Events Table */}
          <div className="flex-1 flex flex-col bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-y-auto flex-1">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-gray-700 sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Title</th>
                    <th className="text-left px-4 py-3 font-semibold">Category</th>
                    <th className="text-left px-4 py-3 font-semibold">Date</th>
                    <th className="text-right px-4 py-3 font-semibold">Tickets Sold</th>
                    <th className="text-left px-4 py-3 font-semibold">Status</th>
                    <th className="text-center px-4 py-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredEvents.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-gray-500">
                        No events found
                      </td>
                    </tr>
                  ) : (
                    filteredEvents.map((event) => (
                      <tr
                        key={event.id}
                        onClick={() => setSelectedEventId(event.id)}
                        className="hover:bg-gray-700 cursor-pointer transition"
                      >
                        <td className="px-4 py-3 font-medium">{event.title}</td>
                        <td className="px-4 py-3">{event.category}</td>
                        <td className="px-4 py-3">
                          {new Date(event.startDate).toLocaleDateString()}
                        </td>
                        <td className="text-right px-4 py-3">
                          {event.ticketsSold} / {event.totalCapacity}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              event.status === 'PUBLISHED'
                                ? 'bg-green-900 text-green-100'
                                : event.status === 'DRAFT'
                                ? 'bg-yellow-900 text-yellow-100'
                                : 'bg-red-900 text-red-100'
                            }`}
                          >
                            {event.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="relative" ref={menuRef}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuId(
                                  openMenuId === event.id ? null : event.id
                                );
                              }}
                              className="p-2 hover:bg-gray-600 rounded"
                            >
                              ⋮
                            </button>
                            {openMenuId === event.id && (
                              <div className="absolute right-0 mt-1 w-48 bg-gray-700 rounded-lg shadow-lg z-10">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/admin/events/edit/${event.id}`);
                                  }}
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                >
                                  Edit
                                </button>
                                {event.status === 'DRAFT' && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handlePublish(event.id);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                  >
                                    Publish
                                  </button>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(
                                      `/admin/events/waitlist/${event.id}`
                                    );
                                  }}
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                                >
                                  View Waitlist
                                </button>
                                {event.status !== 'CANCELLED' && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setDeleteConfirmId(event.id);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-red-600/20 text-red-400"
                                  >
                                    Cancel Event
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detail Panel */}
          {selectedEvent && (
            <div className="w-96 bg-gray-800 rounded-lg p-6 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Category</p>
                  <p className="font-semibold">{selectedEvent.category}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Destination</p>
                  <p className="font-semibold">{selectedEvent.destination}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Date</p>
                  <p className="font-semibold">
                    {new Date(selectedEvent.startDate).toLocaleDateString()} -{' '}
                    {new Date(selectedEvent.endDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Capacity</p>
                  <p className="font-semibold">
                    {selectedEvent.ticketsSold} / {selectedEvent.totalCapacity}{' '}
                    sold
                  </p>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Ticket Types</h4>
                <div className="space-y-2">
                  {selectedEvent.ticketTypes.map((type) => (
                    <div
                      key={type.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-300">{type.name}</span>
                      <span className="text-red-400">${type.basePrice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {deleteConfirmId === selectedEvent.id && (
                <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                  <p className="text-sm text-red-200 mb-4">
                    Are you sure you want to cancel this event? This action
                    cannot be undone.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCancel(selectedEvent.id)}
                      disabled={isUpdating}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                    >
                      {isUpdating ? 'Cancelling...' : 'Cancel Event'}
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(null)}
                      className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                      No, Keep It
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
