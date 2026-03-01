"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { updateHotel, deleteHotel } from '@/app/actions/hotelActions';
import { useRouter } from 'next/navigation';
import { AdminHeader } from '@/components/admin/AdminHeader';
import Image from 'next/image';

type Room = {
  id: string;
  type: string;
  pricePerNight: number | string;
  capacity: number;
  isActive: boolean;
};

type Hotel = {
  id: string;
  name: string;
  slug: string;
  description: string;
  starRating: string;
  address: string;
  amenities: string[];
  images: string[];
  isActive: boolean;
  createdAt: string;
  destination: {
    name: string;
    country: string;
  };
  rooms: Room[];
};

export function AdminHotelsClient({ initialHotels }: { initialHotels: Hotel[] }) {
  const router = useRouter();
  const [hotels, setHotels] = useState<Hotel[]>(initialHotels);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            hotel.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || 
                            (statusFilter === "Active" && hotel.isActive) ||
                            (statusFilter === "Inactive" && !hotel.isActive);
      return matchesSearch && matchesStatus;
    });
  }, [hotels, searchQuery, statusFilter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this hotel? This will also remove all associated bookings and reviews.")) return;
    setIsUpdating(true);
    try {
      const result = await deleteHotel(id);
      if (result.success) {
        setHotels(current => current.filter(h => h.id !== id));
        if (selectedHotelId === id) setSelectedHotelId(null);
      } else {
        alert("Failed to delete hotel. Please try again.");
      }
    } catch {
      alert("An error occurred while deleting the hotel. Please try again.");
    } finally {
      setIsUpdating(false);
      setOpenMenuId(null);
    }
  };

  const handleStatusToggle = async (id: string, currentStatus: boolean) => {
    setIsUpdating(true);
    const result = await updateHotel(id, { isActive: !currentStatus });
    if (result) {
      setHotels(current => current.map(h => h.id === id ? { ...h, isActive: !currentStatus } : h));
    }
    setIsUpdating(false);
    setOpenMenuId(null);
  };

  const getStatusBadge = (active: boolean) => {
    return active 
      ? <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">Active</span>
      : <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/30 text-red-400 border border-red-800">Inactive</span>;
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#120d0d] overflow-hidden relative">
      <AdminHeader 
        title="Hotels Management" 
        description="Manage properties, room types, and availability."
      >
        <div className="flex gap-3">
          <button 
            onClick={() => router.push('/admin/hotels/create')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/30 hover:bg-red-700 text-sm font-bold transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add Hotel
          </button>
        </div>
      </AdminHeader>
      
      <div className="p-8 flex flex-col gap-6 overflow-hidden">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none" 
              placeholder="Search by Hotel Name, Address..." 
              type="text"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px] outline-none"
          >
            <option value="All">Status: All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Multi-column Grid for Hotels */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map(hotel => (
              <div 
                key={hotel.id}
                className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image 
                      src={hotel.images[0] || 'https://via.placeholder.com/400x300?text=No+Hotel+Image'} 
                      alt={hotel.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    {getStatusBadge(hotel.isActive)}
                  </div>
                  <div className="absolute top-4 right-4" ref={openMenuId === hotel.id ? menuRef : null}>
                    <button 
                      onClick={() => setOpenMenuId(openMenuId === hotel.id ? null : hotel.id)}
                      className="size-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-primary transition-colors"
                    >
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                    {openMenuId === hotel.id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-2xl bg-surface-dark border border-border-dark z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
                        <button
                          onClick={() => router.push(`/admin/hotels/edit/${hotel.id}`)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-primary transition-colors text-left font-medium"
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                          Edit Property
                        </button>
                        <button
                          onClick={() => handleStatusToggle(hotel.id, hotel.isActive)}
                          disabled={isUpdating}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors text-left"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {hotel.isActive ? 'visibility_off' : 'visibility'}
                          </span>
                          {hotel.isActive ? 'Deactivate' : 'Activate'}
                        </button>
                        <button
                          onClick={() => router.push(`/hotels/${hotel.slug}`)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors text-left"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                          View Public Page
                        </button>
                        <div className="border-t border-border-dark"></div>
                        <button
                          onClick={() => handleDelete(hotel.id)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left font-medium"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                          Delete Property
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{hotel.name}</h3>
                    <div className="flex items-center text-yellow-500">
                      <span className="material-symbols-outlined text-sm filled">star</span>
                      <span className="text-xs font-bold text-white ml-1">{hotel.starRating.split('_')[0]}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm flex items-center gap-1 mb-4">
                    <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                    <span className="line-clamp-1">{hotel.address}</span>
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Rooms</span>
                      <span className="text-sm font-bold text-white">{hotel.rooms.length} Units</span>
                    </div>
                    <button 
                      onClick={() => router.push(`/admin/hotels/edit/${hotel.id}`)}
                      className="px-4 py-2 rounded-lg bg-background-dark border border-border-dark text-white text-xs font-bold hover:border-primary hover:text-primary transition-all"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
