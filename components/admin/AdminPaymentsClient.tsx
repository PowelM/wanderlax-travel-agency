"use client";

import React, { useState, useEffect } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { getPaymentsData } from '@/app/actions/paymentActions';

interface Transaction {
  id: string;
  customer: string;
  email: string;
  amount: number;
  currency: string;
  status: string;
  date: string;
  method: string;
  avatar: string;
}

export default function AdminPaymentsClient() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const fetchPayments = async () => {
      const res = await getPaymentsData();
      if (res.success) {
        const mapped = (res.payments || []).map((p: unknown) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const item = p as any;
          return {
            id: item.id.slice(0, 8).toUpperCase(),
            customer: item.booking?.user ? `${item.booking.user.firstName} ${item.booking.user.lastName}` : 'Guest Customer',
            email: item.booking?.user?.email || 'N/A',
            amount: Number(item.amount),
            currency: item.currency,
            status: item.status === 'COMPLETED' ? 'Completed' : item.status === 'PENDING' ? 'Pending' : 'Failed',
            date: new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            method: item.method || 'Credit Card',
            avatar: item.booking?.user?.avatarUrl || `https://ui-avatars.com/api/?name=${item.booking?.user?.firstName || 'G'}+${item.booking?.user?.lastName || 'C'}&background=random`
          };
        });
        setTransactions(mapped);
        setRevenue(res.totalRevenue || 0);
      }
      setLoading(false);
    };
    fetchPayments();
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-[#0a0a0b] text-slate-900 dark:text-slate-100 font-display">
      <AdminSidebar />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 border-b border-border-light dark:border-white/5 px-8 py-4 bg-surface-light/80 dark:bg-black/40 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold">Payments & Invoicing</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Invoicing Portal</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Secure Gateway</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Financial Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400">Track revenue, manage invoices, and monitor payment health.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white border border-border-light dark:border-white/10 rounded-xl transition-all font-bold text-sm">
                <span className="material-symbols-outlined text-[20px]">file_download</span>
                Export Report
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all font-bold text-sm shadow-lg shadow-primary/25">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Create Invoice
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-sm">
              <div className="absolute -right-4 -top-4 size-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Total Revenue</p>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">{formatCurrency(revenue)}</h3>
                <span className="text-emerald-500 text-xs font-bold mb-1.5 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +12%
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-border-light dark:border-white/5 font-display">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Target Achievement</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-white/5 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full w-[85%] rounded-full shadow-[0_0_12px_rgba(255,51,51,0.4)] transition-all duration-1000"></div>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Active Accounts</p>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">{transactions.length} Transactions</h3>
                <span className="text-amber-500 text-xs font-bold mb-1.5 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">history</span>
                  Recent
                </span>
              </div>
              <div className="mt-4 flex -space-x-2">
                {transactions.slice(0, 5).map((t, i) => (
                  <div key={i} className="relative h-8 w-8 rounded-full border-2 border-surface-light dark:border-[#0a0a0b] bg-slate-200 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} className="object-cover w-full h-full" alt="User" />
                  </div>
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold ring-2 ring-surface-light dark:ring-[#0a0a0b] text-primary">+{Math.max(0, transactions.length - 5)}</div>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 font-bold uppercase tracking-widest">High-Value Client Activity</p>
            </div>

            <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary">security</span>
              </div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Avg Transaction</p>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">{formatCurrency(transactions.length ? revenue / transactions.length : 0)}</h3>
              </div>
              <div className="mt-6 flex items-center gap-3 p-3 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-xl border border-emerald-500/10">
                <div className="size-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Payments Verified</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Merchant Hub Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border-light dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-white/5">
                  <h3 className="text-lg font-bold">Recent Transactions</h3>
                  <div className="flex gap-2">
                    <button className="p-1 px-3 text-xs bg-primary text-white rounded-md font-bold shadow-md shadow-primary/20">All</button>
                    <button className="p-1 px-3 text-xs text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-bold">Pending</button>
                    <button className="p-1 px-3 text-xs text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-bold">Failed</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-100 dark:bg-black/20">
                        <th className="p-4">Transaction ID</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Amount</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-white/5">
                      {loading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                          <tr key={i} className="animate-pulse">
                            <td className="p-4"><div className="h-4 w-24 bg-slate-200 dark:bg-white/10 rounded"></div></td>
                            <td className="p-4"><div className="flex items-center gap-3"><div className="size-8 rounded-full bg-slate-200 dark:bg-white/10"></div><div className="h-4 w-32 bg-slate-200 dark:bg-white/10 rounded"></div></div></td>
                            <td className="p-4"><div className="h-4 w-16 bg-slate-200 dark:bg-white/10 rounded"></div></td>
                            <td className="p-4"><div className="h-6 w-20 bg-slate-200 dark:bg-white/10 rounded-full"></div></td>
                            <td className="p-4 text-right"><div className="h-4 w-8 bg-slate-200 dark:bg-white/10 rounded ml-auto"></div></td>
                          </tr>
                        ))
                      ) : transactions.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-slate-500">No transactions found.</td>
                        </tr>
                      ) : transactions.map(t => (
                        <tr key={t.id} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                          <td className="p-4">
                            <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">{t.id}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{t.date}</div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="relative h-8 w-8 rounded-full overflow-hidden border border-border-light dark:border-white/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="object-cover w-full h-full" src={t.avatar} alt={t.customer} />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.customer}</div>
                                <div className="text-[10px] text-slate-500">{t.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{formatCurrency(t.amount)}</div>
                            <div className="text-[10px] text-slate-400 font-medium">{t.method}</div>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                              t.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' :
                              t.status === 'Pending' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' :
                              'bg-primary/10 text-primary border-primary/20'
                            }`}>
                              {t.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                              <span className="material-symbols-outlined text-[18px]">more_vert</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-border-light dark:border-white/5 text-center bg-slate-50 dark:bg-white/5">
                  <button className="text-xs font-bold text-primary hover:text-red-400 uppercase tracking-widest transition-colors">View All Archive</button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-surface-light dark:bg-white/5 border border-border-light dark:border-white/10 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Revenue Streams</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,51,51,0.5)]"></span>
                        Premium Tours
                      </span>
                      <span className="text-slate-900 dark:text-white">62%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full">
                      <div className="bg-primary h-full w-[62%] rounded-full shadow-[0_0_8px_rgba(255,51,51,0.3)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                        Luxury Rentals
                      </span>
                      <span className="text-slate-900 dark:text-white">28%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full">
                      <div className="bg-blue-500 h-full w-[28%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                        Concierge Services
                      </span>
                      <span className="text-slate-900 dark:text-white">10%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full">
                      <div className="bg-amber-500 h-full w-[10%] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.3)]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border-light dark:border-white/5">
                  <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 border border-border-light dark:border-white/5">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-2">Financial Integrity</p>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-500">lock</span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">All sessions are bank-grade SSL encrypted.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-6 shadow-sm group">
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 italic">Luxury Insights</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Direct wire transfers have increased by <span className="text-primary font-bold">18%</span> among VVIP clients this quarter, reducing merchant fees by $12k.</p>
                <button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">analytics</span>
                  Advanced Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
