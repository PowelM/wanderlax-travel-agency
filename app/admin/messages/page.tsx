"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { NOTIFICATIONS, Notification } from '@/lib/notifications';

/** Map each notification category to a route and button label */
const ACTION_MAP: Record<string, { label: string; route: string }> = {
  Booking: { label: 'View Booking', route: '/admin/bookings' },
  Payment: { label: 'View Payment', route: '/admin/reports' },
  Fleet:   { label: 'Manage Fleet', route: '/admin/fleet' },
};

export default function AdminMessagesPage() {
  const router = useRouter();
  const [readIds, setReadIds] = useState<Set<number>>(new Set());
  const [selected, setSelected] = useState<Notification | null>(null);

  const markAllRead = () => setReadIds(new Set(NOTIFICATIONS.map((n) => n.id)));

  const openMessage = (n: Notification) => {
    setSelected(n);
    setReadIds((prev) => new Set(prev).add(n.id));
  };

  const closePanel = () => setSelected(null);

  const handleTakeAction = () => {
    if (!selected) return;
    const action = ACTION_MAP[selected.category] ?? { route: '/admin' };
    router.push(action.route);
    closePanel();
  };

  const unreadCount = NOTIFICATIONS.filter((n) => !readIds.has(n.id)).length;

  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        <AdminSidebar />

        <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#180a0a]">
          <AdminHeader
            title="Messages & Notifications"
            description="View your messages and latest alerts here."
          />

          <div className="flex-1 overflow-y-auto p-8">
            {/* Header row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-white text-xl font-bold">Notifications</h2>
                {unreadCount > 0 && (
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {unreadCount} unread
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-sm text-primary hover:text-white transition-colors font-medium"
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* Notifications list */}
            <div className="bg-surface-dark rounded-xl border border-border-dark overflow-hidden shadow-lg shadow-black/20">
              {NOTIFICATIONS.map((n, index) => {
                const isRead = readIds.has(n.id);
                const isActive = selected?.id === n.id;
                return (
                  <div
                    key={n.id}
                    onClick={() => openMessage(n)}
                    className={`flex items-start gap-4 p-5 cursor-pointer transition-all
                      ${!isRead ? 'bg-white/[0.03]' : ''}
                      ${isActive ? 'bg-primary/10 border-l-2 border-primary' : 'border-l-2 border-transparent'}
                      ${index < NOTIFICATIONS.length - 1 ? 'border-b border-border-dark' : ''}
                      hover:bg-white/5`}
                  >
                    {/* Icon */}
                    <div
                      className={`h-10 w-10 rounded-full ${n.iconBg} ${n.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm leading-snug ${isRead ? 'text-slate-300' : 'text-white font-medium'}`}>
                        {n.message}
                        <strong className={`font-semibold ${n.highlightColor}`}>{n.highlight}</strong>
                        {n.id === 2 && ' received'}
                        {n.id === 3 && ' returned'}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 truncate">{n.subject}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${n.iconColor} ${n.iconBg}`}
                        >
                          {n.category}
                        </span>
                        <span className="text-xs text-slate-500">{n.time}</span>
                      </div>
                    </div>

                    {/* Unread dot */}
                    {!isRead && (
                      <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                    )}
                  </div>
                );
              })}
            </div>

            {unreadCount === 0 && !selected && (
              <p className="text-center text-slate-500 text-sm mt-6">You&apos;re all caught up!</p>
            )}
          </div>
        </main>
      </div>

      {/* Slide-over detail panel */}
      {selected && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={closePanel}
          />

          {/* Panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#1a0d0d] border-l border-border-dark z-50 flex flex-col shadow-2xl animate-slide-in">
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark bg-surface-dark shrink-0">
              <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-full ${selected.iconBg} ${selected.iconColor} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-[18px]">{selected.icon}</span>
                </div>
                <div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${selected.iconColor} ${selected.iconBg}`}>
                    {selected.category}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">{selected.time}</p>
                </div>
              </div>
              <button
                onClick={closePanel}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Panel body */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* From */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border-dark">
                <div className={`h-10 w-10 rounded-full ${selected.iconBg} ${selected.iconColor} flex items-center justify-center shrink-0 text-sm font-bold`}>
                  {selected.sender.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{selected.sender}</p>
                  <p className="text-xs text-slate-400">{selected.senderRole}</p>
                </div>
              </div>

              {/* Subject */}
              <h2 className="text-white text-lg font-bold mb-5 leading-snug">
                {selected.subject}
              </h2>

              {/* Full message */}
              <div className="text-sm text-slate-300 leading-7 whitespace-pre-line bg-white/3 rounded-xl p-5 border border-border-dark">
                {selected.fullMessage}
              </div>
            </div>

            {/* Panel footer */}
            <div className="px-6 py-4 border-t border-border-dark bg-surface-dark shrink-0 flex gap-3">
              <button
                onClick={handleTakeAction}
                className="flex-1 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/80 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {selected?.category === 'Booking' && 'book_online'}
                  {selected?.category === 'Payment' && 'receipt_long'}
                  {selected?.category === 'Fleet'   && 'directions_car'}
                  {!['Booking','Payment','Fleet'].includes(selected?.category ?? '') && 'open_in_new'}
                </span>
                {ACTION_MAP[selected?.category ?? '']?.label ?? 'Take Action'}
              </button>
              <button
                onClick={closePanel}
                className="flex-1 py-2.5 rounded-lg bg-white/5 border border-border-dark text-slate-300 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.25s ease-out; }
      `}</style>
    </div>
  );
}
