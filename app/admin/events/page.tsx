import React from 'react';
import Link from 'next/link';
import { getEvents } from '@/app/actions/eventActions';

export default async function AdminEventsPage() {
  const { success, events } = await getEvents();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Events Management</h1>
          <p className="text-slate-400">Create and manage exclusive events and ticketing.</p>
        </div>
        <Link 
          href="/admin/events/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined">add</span>
          Create Event
        </Link>
      </div>

      <div className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 uppercase text-xs tracking-wider text-slate-400">
                <th className="p-4 font-medium">Event</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Tickets Sold</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {events?.map((event: any) => (
                <tr key={event.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded bg-slate-800 shrink-0 overflow-hidden relative">
                         {event.images && event.images.length > 0 && (
                             // eslint-disable-next-line @next/next/no-img-element
                             <img src={event.images[0]} alt="" className="object-cover w-full h-full" />
                         )}
                      </div>
                      <div>
                        <p className="font-bold text-white">{event.title}</p>
                        <p className="text-xs text-slate-400">{event.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-300">
                    {new Date(event.startDate).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-bold ${
                      event.status === 'UPCOMING' ? 'bg-blue-500/20 text-blue-400' :
                      event.status === 'ONGOING' ? 'bg-green-500/20 text-green-400' :
                      event.status === 'COMPLETED' ? 'bg-slate-500/20 text-slate-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <span className="text-white font-medium">{event.soldTickets}</span>
                    <span className="text-slate-500"> / {event.capacity}</span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        href={`/admin/events/${event.id}`}
                        className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded transition-colors"
                        title="Edit Event"
                      >
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {(!events || events.length === 0) && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No events found. Create one to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
