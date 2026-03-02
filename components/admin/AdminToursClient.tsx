"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { updateTourStatus, deleteTour, toggleTourFeatured } from '@/app/actions/tourActions';
import { useRouter } from 'next/navigation';
import { AdminHeader } from '@/components/admin/AdminHeader';

// TourPackage type based on Prisma model + included Destination
type TourPackage = {
  id: string;
  destinationId: string;
  title: string;
  slug: string;
  category: string;
  overview: string;
  durationDays: number;
  durationNights: number;
  basePrice: string | number; // Decimal string
  groupSizeMin: number;
  groupSizeMax: number;
  included: string[];
  excluded: string[];
  images: string[];
  featured: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  destination: {
    id: string;
    name: string;
    slug: string;
    country: string;
    continent: string;
    featured: boolean;
  };
};

export function AdminToursClient({ initialTours }: { initialTours: TourPackage[] }) {
  const router = useRouter();
  const [tours, setTours] = useState<TourPackage[]>(initialTours);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
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

  // Stats calculation
  const stats = useMemo(() => {
    return {
      total: tours.length,
      published: tours.filter(t => t.status.toUpperCase() === 'PUBLISHED' || t.status.toUpperCase() === 'ACTIVE').length,
      drafts: tours.filter(t => t.status.toUpperCase() === 'DRAFT').length,
      featured: tours.filter(t => t.featured).length,
    };
  }, [tours]);

  // Filtered tours
  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (tour.destination?.name || "").toLowerCase().includes(searchQuery.toLowerCase());
      
      // Fix: compare directly against the stored category string (already uppercase in DB)
      const matchesType = typeFilter === "All Types" || tour.category === typeFilter;
      
      const tourStatus = tour.status.toUpperCase();
      const matchesStatus = statusFilter === "All" || 
                            (statusFilter === "Published" && (tourStatus === "PUBLISHED" || tourStatus === "ACTIVE")) ||
                            (statusFilter === "Draft" && tourStatus === "DRAFT") ||
                            (statusFilter === "Archived" && tourStatus === "ARCHIVED");
      
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [tours, searchQuery, typeFilter, statusFilter]);

  const selectedTour = tours.find(t => t.id === selectedTourId) || null;

  const handleExport = () => {
    const headers = ['Title', 'Category', 'Destination', 'Country', 'Duration (Days)', 'Duration (Nights)', 'Base Price (USD)', 'Group Size Min', 'Group Size Max', 'Status', 'Created At'];

    const rows = filteredTours.map(tour => [
      `"${(tour.title || '').replace(/"/g, '""')}"`,
      tour.category,
      `"${(tour.destination?.name || 'Unknown').replace(/"/g, '""')}"`,
      `"${(tour.destination?.country || '').replace(/"/g, '""')}"`,
      tour.durationDays,
      tour.durationNights,
      Number(tour.basePrice).toFixed(2),
      tour.groupSizeMin,
      tour.groupSizeMax,
      tour.status,
      new Date(tour.createdAt).toLocaleDateString('en-US'),
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `tours-export-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleStatusToggle = async (tourId?: string) => {
    const targetId = tourId || selectedTourId;
    const target = tours.find(t => t.id === targetId);
    if (!target || isUpdating) return;
    
    setIsUpdating(true);
    const newStatus = (target.status.toUpperCase() === 'PUBLISHED' || target.status.toUpperCase() === 'ACTIVE') ? 'DRAFT' : 'ACTIVE';
    
    const result = await updateTourStatus(target.id, newStatus);
    
    if (result.success && result.tour) {
      setTours(current => current.map(t => t.id === target.id ? { ...t, status: result.tour.status } : t));
    }
    
    setIsUpdating(false);
    setOpenMenuId(null);
  };

  const handleFeaturedToggle = async (tourId: string) => {
    const target = tours.find(t => t.id === tourId);
    if (!target || isUpdating) return;
    setIsUpdating(true);
    const result = await toggleTourFeatured(tourId, !target.featured);
    if (result.success) {
      setTours(current => current.map(t => t.id === tourId ? { ...t, featured: !t.featured } : t));
    }
    setIsUpdating(false);
    setOpenMenuId(null);
  };

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    const result = await deleteTour(id);
    if (result.success) {
      setTours(current => current.filter(t => t.id !== id));
      if (selectedTourId === id) setSelectedTourId(null);
    }
    setIsDeleting(false);
    setDeleteConfirmId(null);
    setOpenMenuId(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case 'PUBLISHED':
      case 'ACTIVE':
        return <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">Published</span>;
      case 'DRAFT':
        return <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">Draft</span>;
      default:
        return <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-800 text-slate-400 border border-slate-700">{status}</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-[#120d0d] overflow-hidden relative">
      <AdminHeader 
        title="Tours Management" 
        description="Create, publish, and manage all your travel experiences."
      >
        <div className="flex gap-3">
          <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-dark bg-background-dark text-text-secondary hover:bg-surface-dark hover:text-white text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Export
          </button>
          <button 
            onClick={() => router.push('/admin/tours/create')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/30 hover:bg-red-700 text-sm font-bold transition-all"
          >
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
                  <p className="text-xl font-bold text-white">{stats.total}</p>
                </div>
              </div>
              <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium uppercase">Published</p>
                  <p className="text-xl font-bold text-white">{stats.published}</p>
                </div>
              </div>
              <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                  <span className="material-symbols-outlined">draft</span>
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium uppercase">Drafts</p>
                  <p className="text-xl font-bold text-white">{stats.drafts}</p>
                </div>
              </div>
              <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium uppercase">Featured</p>
                  <p className="text-xl font-bold text-white">{stats.featured}</p>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm" 
                  placeholder="Search by Tour Name, Destination..." 
                  type="text"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <select 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]"
                >
                  <option value="All Types">All Types</option>
                  <option value="SAFARI">Safari</option>
                  <option value="BEACH">Beach</option>
                  <option value="CULTURAL">Cultural</option>
                  <option value="ADVENTURE">Adventure</option>
                  <option value="HONEYMOON">Honeymoon</option>
                  <option value="FAMILY">Family</option>
                </select>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]"
                >
                  <option value="All">Status: All</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
                <button className="px-4 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:bg-surface-dark hover:bg-background-dark transition-colors">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto px-6 pb-6 pt-0">
            <div className="min-w-full inline-block align-middle pb-48">
              <div className="border rounded-xl border-border-dark overflow-visible bg-surface-dark">
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
                    {filteredTours.length > 0 ? (
                      filteredTours.map((tour) => (
                        <tr 
                          key={tour.id}
                          onClick={() => setSelectedTourId(tour.id)}
                          className={`hover:bg-background-dark hover:text-white transition-colors group cursor-pointer ${selectedTourId === tour.id ? 'bg-primary/5 relative' : ''}`}
                        >
                          {selectedTourId === tour.id && (
                            <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
                          )}
                          <td className={`px-6 py-4 whitespace-nowrap ${selectedTourId === tour.id ? 'pl-6' : ''}`}>
                            <input 
                              checked={selectedTourId === tour.id} 
                              onChange={() => {}} // dummy onChange to silence warning
                              className="rounded border-border-dark text-primary focus:ring-primary bg-transparent" 
                              type="checkbox"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div 
                                className="h-10 w-10 rounded-lg bg-cover bg-center mr-3" 
                                style={{ backgroundImage: `url('${tour.images?.[0] || 'https://images.unsplash.com/photo-1542051812871-75f56cc4cf7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'}')` }}
                              ></div>
                              <div>
                                <div className="text-sm font-medium text-white flex items-center gap-1.5">
                                  {tour.title}
                                  {tour.featured && (
                                    <span className="material-symbols-outlined text-yellow-500 text-[16px] filled" title="Featured">star</span>
                                  )}
                                </div>
                                <div className="text-xs text-text-secondary capitalize">{tour.category.charAt(0) + tour.category.slice(1).toLowerCase()}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white">{tour.destination?.name || "Unknown"}</div>
                            <div className="text-xs text-text-secondary">{tour.destination?.country || ""}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-text-secondary">{tour.durationDays} Days, {tour.durationNights} Nights</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-white">${Number(tour.basePrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getStatusBadge(tour.status)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onClick={(e) => e.stopPropagation()}>
                            <div className="relative inline-block" ref={openMenuId === tour.id ? menuRef : null}>
                              <button 
                                onClick={() => setOpenMenuId(openMenuId === tour.id ? null : tour.id)}
                                className="text-text-secondary hover:text-white transition-colors p-1 rounded-md hover:bg-background-dark"
                              >
                                <span className="material-symbols-outlined">more_vert</span>
                              </button>
                              {openMenuId === tour.id && deleteConfirmId !== tour.id && (
                                <div className="absolute right-0 mt-1 w-44 rounded-lg shadow-xl bg-surface-dark border border-border-dark z-50 overflow-hidden">
                                  <button
                                    onClick={() => { router.push(`/admin/tours/edit/${tour.id}`); setOpenMenuId(null); }}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px] text-text-secondary">edit</span>
                                    Edit Tour
                                  </button>
                                  <button
                                    onClick={() => handleStatusToggle(tour.id)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px] text-text-secondary">
                                      {tour.status.toUpperCase() === 'ACTIVE' || tour.status.toUpperCase() === 'PUBLISHED' ? 'unpublished' : 'publish'}
                                    </span>
                                    {tour.status.toUpperCase() === 'ACTIVE' || tour.status.toUpperCase() === 'PUBLISHED' ? 'Set to Draft' : 'Publish'}
                                  </button>
                                  <button
                                    onClick={() => handleFeaturedToggle(tour.id)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                                  >
                                    <span className={`material-symbols-outlined text-[18px] ${tour.featured ? 'text-yellow-500 filled' : 'text-text-secondary'}`}>
                                      star
                                    </span>
                                    {tour.featured ? 'Remove Featured' : 'Set as Featured'}
                                  </button>
                                  <div className="border-t border-border-dark"></div>
                                  <button
                                    onClick={() => setDeleteConfirmId(tour.id)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-900/20 transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                    Delete
                                  </button>
                                </div>
                              )}
                              {deleteConfirmId === tour.id && (
                                <div className="absolute right-0 mt-1 w-56 rounded-lg shadow-xl bg-surface-dark border border-red-800 z-50 p-4">
                                  <p className="text-sm text-white font-semibold mb-1">Delete this tour?</p>
                                  <p className="text-xs text-text-secondary mb-3">This action cannot be undone.</p>
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => { setDeleteConfirmId(null); setOpenMenuId(null); }}
                                      className="flex-1 py-1.5 rounded-lg border border-border-dark text-text-secondary hover:text-white text-xs font-medium transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() => handleDelete(tour.id)}
                                      disabled={isDeleting}
                                      className="flex-1 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors disabled:opacity-50"
                                    >
                                      {isDeleting ? '...' : 'Delete'}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-text-secondary">
                          <div className="flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-4xl opacity-30">travel_explore</span>
                            <p>No tours found matching your search criteria.</p>
                            <button 
                              onClick={() => router.push('/admin/tours/create')}
                              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all"
                            >
                              <span className="material-symbols-outlined text-[18px]">add</span>
                              Create your first tour
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                
                {/* Pagination */}
                <div className="bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-border-dark sm:px-6">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">
                        Showing <span className="font-medium text-white">{filteredTours.length > 0 ? 1 : 0}</span> to <span className="font-medium text-white">{filteredTours.length}</span> of <span className="font-medium text-white">{stats.total}</span> results
                      </p>
                    </div>
                    <div>
                      <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button disabled className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary opacity-50 cursor-not-allowed">
                          <span className="sr-only">Previous</span>
                          <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold">1</button>
                        <button disabled className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary opacity-50 cursor-not-allowed">
                          <span className="sr-only">Next</span>
                          <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Detail Slide-over Panel (Right Side) */}
        {selectedTour && (
          <div className="w-full md:w-[400px] border-l border-border-dark bg-surface-dark flex flex-col h-full shadow-2xl z-10 absolute md:relative right-0">
            <div className="p-6 border-b border-border-dark flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Tour Details</h2>
              <button 
                onClick={() => setSelectedTourId(null)}
                className="text-text-secondary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-0">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url('${selectedTour.images?.[0] || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}')` }}
              ></div>
              <div className="p-6">
                {/* Header Status */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1">{selectedTour.title}</h3>
                    <span className="text-sm text-text-secondary">{selectedTour.destination?.name || "Unknown Location"}, {selectedTour.destination?.country || ""}</span>
                  </div>
                  {getStatusBadge(selectedTour.status)}
                </div>

                {/* Core Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                    <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Duration</span>
                    <span className="text-sm font-bold text-white">{selectedTour.durationDays} Days, {selectedTour.durationNights} Nights</span>
                  </div>
                  <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                    <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Base Price</span>
                    <span className="text-sm font-bold text-white">${Number(selectedTour.basePrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                    <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Group Size</span>
                    <span className="text-sm font-bold text-white">{selectedTour.groupSizeMin} - {selectedTour.groupSizeMax} Pax</span>
                  </div>
                  <div className="bg-background-dark rounded-xl p-3 border border-border-dark">
                    <span className="text-xs text-text-secondary uppercase font-semibold block mb-1">Type</span>
                    <span className="text-sm font-bold text-white capitalize">{selectedTour.category.charAt(0) + selectedTour.category.slice(1).toLowerCase()}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                   <h3 className="text-sm font-bold text-white uppercase mb-2">Description</h3>
                   <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                     {selectedTour.overview || "No description provided."}
                   </p>
                </div>

                {/* Included */}
                {selectedTour.included && selectedTour.included.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-white uppercase mb-3">What&apos;s Included</h3>
                    <ul className="space-y-1.5">
                      {selectedTour.included.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="material-symbols-outlined text-green-400 text-[16px]">check_circle</span>
                          {item}
                        </li>
                      ))}
                      {selectedTour.included.length > 4 && (
                        <li className="text-xs text-text-secondary ml-6">+{selectedTour.included.length - 4} more items</li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Itinerary Preview */}
                <div>
                  <h3 className="text-sm font-bold text-white uppercase mb-3">Itinerary Highlights</h3>
                  <div className="relative pl-4 border-l-2 border-dashed border-border-dark space-y-4">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-dark"></div>
                      <p className="text-xs text-primary font-bold">Day 1</p>
                      <p className="text-sm text-white">Arrival & Welcome</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                      <p className="text-xs text-text-secondary font-bold">Day 2</p>
                      <p className="text-sm text-white">Main Activity / Exploring</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                      <p className="text-xs text-text-secondary font-bold">Day {selectedTour.durationDays}</p>
                      <p className="text-sm text-white">Farewell & Departure</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Actions */}
            <div className="p-6 bg-background-dark border-t border-border-dark flex gap-3">
              <button 
                onClick={() => router.push(`/admin/tours/edit/${selectedTour.id}`)}
                className="flex-1 py-2.5 rounded-lg border border-border-dark bg-transparent text-white font-bold text-sm hover:bg-surface-dark transition-colors"
              >
                Edit Tour
              </button>
              <button 
                onClick={() => handleStatusToggle()}
                disabled={isUpdating}
                className="flex-1 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdating ? 'Updating...' : (selectedTour.status.toUpperCase() === 'PUBLISHED' || selectedTour.status.toUpperCase() === 'ACTIVE' ? 'Set to Draft' : 'Publish')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
