"use client";

import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminToursPage() {
  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-[#120d0d] relative">
          <AdminHeader 
            title="Tours Management" 
            description="Create, publish, and manage all your travel experiences."
          >
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-dark bg-background-dark text-text-secondary hover:bg-surface-dark hover:text-white text-sm font-medium transition-colors">
                <span className="material-symbols-outlined text-[20px]">file_download</span>
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/30 hover:bg-red-700 text-sm font-bold transition-all">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Create Tour
              </button>
            </div>
          </AdminHeader>
          
          <div className="flex-1 flex flex-row overflow-hidden">
            {/* Table Section */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col gap-6">
                {/* Stats Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                      <span className="material-symbols-outlined">map</span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase">Total</p>
                      <p className="text-xl font-bold text-white">45</p>
                    </div>
                  </div>
                  <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                      <span className="material-symbols-outlined">public</span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase">Published</p>
                      <p className="text-xl font-bold text-white">38</p>
                    </div>
                  </div>
                  <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                      <span className="material-symbols-outlined">draft</span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase">Drafts</p>
                      <p className="text-xl font-bold text-white">7</p>
                    </div>
                  </div>
                  <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase">Featured</p>
                      <p className="text-xl font-bold text-white">4</p>
                    </div>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
                    <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm" placeholder="Search by Tour Name, Destination..." type="text"/>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    <select className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]">
                      <option>All Types</option>
                      <option>Adventure</option>
                      <option>Cultural</option>
                      <option>Relaxation</option>
                      <option>Wildlife</option>
                    </select>
                    <select className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]">
                      <option>Status: All</option>
                      <option>Published</option>
                      <option>Draft</option>
                      <option>Archived</option>
                    </select>
                    <button className="px-4 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:bg-surface-dark hover:bg-background-dark transition-colors">
                      <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="flex-1 overflow-auto px-6 pb-6">
                <div className="min-w-full inline-block align-middle">
                  <div className="border rounded-xl border-border-dark overflow-hidden bg-surface-dark">
                    <table className="min-w-full divide-y divide-border-dark">
                      <thead className="bg-background-dark">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider w-12" scope="col">
                            <input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Tour Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Destination</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Duration</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Price</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Status</th>
                          <th className="px-6 py-4 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-dark bg-surface-dark">
                        {/* Row 1 */}
                        <tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-lg bg-cover bg-center mr-3" data-alt="Tour Thumbnail" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542051812871-75f56cc4cf7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')` }}></div>
                              <div>
                                <div className="text-sm font-medium text-white">Classic Kyoto Temple Tour</div>
                                <div className="text-xs text-text-secondary">Historical &amp; Cultural</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white">Kyoto, Japan</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-text-secondary">4 Days, 3 Nights</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-white">$1,250.00</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">
                              Published
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-text-secondary hover:text-white transition-colors">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer bg-primary/5 relative">
                           {/* Selected Indicator Bar */}
                           <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
                           <td className="px-6 py-4 whitespace-nowrap pl-6">
                             <input defaultChecked className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                             <div className="flex items-center">
                               <div className="h-10 w-10 rounded-lg bg-cover bg-center mr-3" data-alt="Tour Thumbnail" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')` }}></div>
                               <div>
                                 <div className="text-sm font-medium text-white">Parisian Romance Getaway</div>
                                 <div className="text-xs text-text-secondary">Luxury &amp; Leisure</div>
                               </div>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                             <div className="text-sm text-white">Paris, France</div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                             <div className="text-sm text-text-secondary">7 Days, 6 Nights</div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                             <div className="text-sm font-bold text-white">$3,800.00</div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                             <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                               Draft
                             </span>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                             <button className="text-text-secondary hover:text-white transition-colors">
                               <span className="material-symbols-outlined">more_vert</span>
                             </button>
                           </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="hover:bg-surface-dark hover:text-white transition-colors group cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" type="checkbox"/>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-lg bg-cover bg-center mr-3" data-alt="Tour Thumbnail" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518182170546-076616fdcbca?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')` }}></div>
                              <div>
                                <div className="text-sm font-medium text-white">Maldives Private Island Retreat</div>
                                <div className="text-xs text-text-secondary">Ultra Luxury</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white">Maldives</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-text-secondary">10 Days, 9 Nights</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-white">$12,500.00</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">
                              Published
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-text-secondary hover:text-white transition-colors">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                    
                    {/* Pagination */}
                    <div className="bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-border-dark sm:px-6">
                      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm text-text-secondary">
                            Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">3</span> of <span className="font-medium text-white">45</span> results
                          </p>
                        </div>
                        <div>
                          <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                            <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary hover:bg-surface-dark hover:text-white" href="#">
                              <span className="sr-only">Previous</span>
                              <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </a>
                            <a aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold" href="#">1</a>
                            <a className="bg-background-dark border-border-dark text-text-secondary hover:bg-surface-dark hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">2</a>
                            <a className="bg-background-dark border-border-dark text-text-secondary hover:bg-surface-dark hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">3</a>
                            <span className="relative inline-flex items-center px-4 py-2 border border-border-dark bg-background-dark text-sm font-medium text-text-secondary dark:text-text-secondary">...</span>
                            <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary hover:bg-surface-dark hover:text-white" href="#">
                              <span className="sr-only">Next</span>
                              <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Detail Slide-over Panel (Right Side) */}
            <div className="w-[400px] border-l border-border-dark bg-surface-dark flex flex-col h-full shadow-2xl z-10 hidden xl:flex">
              <div className="p-6 border-b border-border-dark flex justify-between items-center">
                <h2 className="text-lg font-bold text-white">Tour Details</h2>
                <button className="text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-0">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` }}></div>
                <div className="p-6">
                  {/* Header Status */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-1">Parisian Romance Getaway</h3>
                      <span className="text-sm text-text-secondary">Paris, France</span>
                    </div>
                    <span className="px-2.5 py-1 w-fit inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                      Draft
                    </span>
                  </div>

                  {/* Core Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                      <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Duration</span>
                      <span className="text-sm font-bold text-white">7 Days, 6 Nights</span>
                    </div>
                    <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                      <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Price</span>
                      <span className="text-sm font-bold text-white">$3,800.00</span>
                    </div>
                    <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                      <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Group Size</span>
                      <span className="text-sm font-bold text-white">Max 12 Pax</span>
                    </div>
                    <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                      <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Type</span>
                      <span className="text-sm font-bold text-white">Luxury</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                     <h3 className="text-sm font-bold text-white uppercase mb-2">Description</h3>
                     <p className="text-sm text-slate-300 leading-relaxed">
                       Experience the romance of Paris with this exclusive 7-day getaway. Enjoy private dinners, guided museum tours, and a luxurious stay at the Ritz. Perfect for couples looking for an unforgettable romantic escape.
                     </p>
                  </div>

                  {/* Itinerary Preview */}
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase mb-3">Itinerary Highlights</h3>
                    <div className="relative pl-4 border-l-2 border-dashed border-border-dark space-y-4">
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-primary font-bold">Day 1</p>
                        <p className="text-sm text-white">Arrival &amp; Welcome Dinner</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary font-bold">Day 2</p>
                        <p className="text-sm text-white">Louvre Private Tour</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary font-bold">Day 3</p>
                        <p className="text-sm text-white">Seine River Cruise</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-medium mt-3 hover:underline">View Full Itinerary</button>
                  </div>

                </div>
              </div>
              
              {/* Actions */}
              <div className="p-6 bg-background-dark border-t border-border-dark flex gap-3">
                <button className="flex-1 py-2.5 rounded-lg border border-border-dark bg-transparent text-white font-bold text-sm hover:bg-surface-dark transition-colors">
                  Edit Tour
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
