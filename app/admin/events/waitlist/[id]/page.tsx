"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getEventWaitlist, getEventBySlug, promoteFromWaitlist } from '@/app/actions/eventActions';

export default function EventWaitlistPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id as string;

  const [waitlistEntries, setWaitlistEntries] = useState<any[]>([]);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [promoting, setPromoting] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [waitlist, eventData] = await Promise.all([
          getEventWaitlist(eventId),
          // Need to fetch event by ID - you may need to add this action
        ]);
        setWaitlistEntries(waitlist);
      } catch (err) {
        console.error('Failed to load waitlist:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [eventId]);

  const handlePromote = async (count: number) => {
    setPromoting(true);
    try {
      // This requires the ticket type ID - simplified for now
      // const result = await promoteFromWaitlist(eventId, ticketTypeId, count);
      // Refresh waitlist
      const updated = await getEventWaitlist(eventId);
      setWaitlistEntries(updated);
    } catch (err) {
      console.error('Error promoting from waitlist:', err);
    } finally {
      setPromoting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold">Event Waitlist</h1>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="mb-6">
            <p className="text-gray-400 mb-2">Total Waitlist Entries:</p>
            <p className="text-3xl font-bold">{waitlistEntries.length}</p>
          </div>

          {waitlistEntries.length === 0 ? (
            <p className="text-gray-400 text-center py-12">No one on the waitlist</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="text-left px-4 py-3">Position</th>
                    <th className="text-left px-4 py-3">Name</th>
                    <th className="text-left px-4 py-3">Email</th>
                    <th className="text-right px-4 py-3">Tickets</th>
                    <th className="text-left px-4 py-3">Date Added</th>
                    <th className="text-left px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {waitlistEntries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-700">
                      <td className="px-4 py-3 font-semibold">{entry.position}</td>
                      <td className="px-4 py-3">{entry.user?.firstName} {entry.user?.lastName}</td>
                      <td className="px-4 py-3 text-gray-400">{entry.user?.email}</td>
                      <td className="text-right px-4 py-3">{entry.quantity}</td>
                      <td className="px-4 py-3">
                        {new Date(entry.dateAdded).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            entry.status === 'WAITING'
                              ? 'bg-yellow-900 text-yellow-100'
                              : 'bg-green-900 text-green-100'
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {waitlistEntries.some((e) => e.status === 'WAITING') && (
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-600 rounded-lg">
              <p className="text-blue-200 mb-4">
                Promote users from waitlist when tickets become available
              </p>
              <button
                onClick={() => handlePromote(Math.min(5, waitlistEntries.filter(e => e.status === 'WAITING').length))}
                disabled={promoting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {promoting ? 'Promoting...' : 'Promote Next 5'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
