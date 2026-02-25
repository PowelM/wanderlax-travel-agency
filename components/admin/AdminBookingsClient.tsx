"use client";

import React, { useState, useMemo } from 'react';
import { BookingStatus, ServiceType } from '@prisma/client';
import { updateBookingStatus } from '@/app/actions/bookingActions';

import { AdminHeader } from '@/components/admin/AdminHeader';
import { createManualBooking } from '@/app/actions/bookingActions';

// Define type based on our Prisma query
type BookingWithDetails = any; // Using any for fast prototyping, ideally infer from Prisma

export function AdminBookingsClient({ initialBookings }: { initialBookings: BookingWithDetails[] }) {
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>("All Services");
  const [statusFilter, setStatusFilter] = useState<string>("Status: All");
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const [isNewBookingModalOpen, setIsNewBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Local state for optimistic updates
  const [bookings, setBookings] = useState<BookingWithDetails[]>(initialBookings);

  // Derived stats
  const stats = useMemo(() => {
    return {
      total: bookings.length,
      confirmed: bookings.filter(b => b.status === "CONFIRMED").length,
      pending: bookings.filter(b => b.status === "PENDING").length,
      cancelled: bookings.filter(b => b.status === "CANCELLED").length,
    };
  }, [bookings]);

  // Filtering
  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      // Free text search
      const bookingId = booking.bookingRef?.toLowerCase() || '';
      const customerName = `${booking.user?.firstName || ''} ${booking.user?.lastName || ''}`.toLowerCase();
      // Service filter mapping
      let matchesService = true;
      if (serviceFilter !== "All Services") {
        if (serviceFilter === "Flight" && booking.serviceType !== "FLIGHT") matchesService = false;
        if (serviceFilter === "Hotel" && booking.serviceType !== "HOTEL") matchesService = false;
        if (serviceFilter === "Car Rental" && booking.serviceType !== "CAR_HIRE") matchesService = false;
        if (serviceFilter === "Tour Package" && booking.serviceType !== "TOUR_PACKAGE") matchesService = false;
        if (serviceFilter === "Custom" && booking.serviceType !== "CUSTOM") matchesService = false;
      }
      
      // Status filter
      let matchesStatus = true;
      if (statusFilter !== "Status: All") {
        if (statusFilter === "Confirmed" && booking.status !== "CONFIRMED") matchesStatus = false;
        if (statusFilter === "Pending" && booking.status !== "PENDING") matchesStatus = false;
        if (statusFilter === "Cancelled" && booking.status !== "CANCELLED") matchesStatus = false;
      }
      
      const searchTerm = search.toLowerCase();
      const matchesSearch = bookingId.includes(searchTerm) || customerName.includes(searchTerm);
      
      return matchesService && matchesStatus && matchesSearch;
    });
  }, [bookings, search, serviceFilter, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const selectedBooking = useMemo(() => bookings.find(b => b.id === selectedBookingId), [selectedBookingId, bookings]);

  const handleStatusUpdate = async (id: string, newStatus: BookingStatus) => {
    // Optimistic update
    setBookings(prev => 
      prev.map(b => b.id === id ? { ...b, status: newStatus } : b)
    );
    
    // Server action
    const res = await updateBookingStatus(id, newStatus);
    if (!res.success) {
      // Revert if failed (in a real app we might show a toast)
      setBookings(prev => 
        prev.map(b => b.id === id ? { ...b, status: prev.find(p => p.id === id)?.status } : b)
      );
    }
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Booking ID,Customer Name,Email,Service Type,Status,Total Amount,Created At\n"
      + filteredBookings.map(b => `${b.bookingRef},${b.user?.firstName || ''} ${b.user?.lastName || ''},${b.user?.email || ''},${b.serviceType},${b.status},${b.finalAmount},${new Date(b.createdAt).toLocaleDateString()}`).join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "admin_bookings_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    const data = {
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      serviceType: formData.get("serviceType") as ServiceType,
      totalAmount: Number(formData.get("totalAmount")),
    };

    const res = await createManualBooking(data);
    if (res.success) {
      setBookings(prev => [res.booking, ...prev]);
      setIsNewBookingModalOpen(false);
    } else {
      alert("Failed to create booking");
    }
    setIsSubmitting(false);
  };

  const formatPrice = (amount: any) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(amount));
  };

  const getServiceDetails = (booking: any) => {
    switch (booking.serviceType) {
      case "CAR_HIRE":
        return {
          icon: "directions_car",
          name: "Car Rental",
          dest: booking.carHireBooking?.pickupLocation || "Unknown",
          subDest: booking.carHireBooking?.car?.make + " " + booking.carHireBooking?.car?.model
        };
      case "HOTEL":
        return {
          icon: "hotel",
          name: "Hotel Stay",
          dest: booking.hotelBooking?.hotel?.name || "Unknown",
          subDest: booking.hotelBooking?.room?.name || "Standard Room"
        };
      case "TOUR_PACKAGE":
        return {
          icon: "luggage",
          name: "Tour Package",
          dest: booking.tourBooking?.tourPackage?.title || "Custom Tour",
          subDest: booking.tourBooking?.tourPackage?.destination?.name || ""
        };
      default:
        return {
          icon: "flight",
          name: booking.serviceType,
          dest: "Various",
          subDest: ""
        };
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full w-full overflow-hidden">
      <AdminHeader 
        title="Bookings Management" 
        description="Track, manage and schedule all premium travel reservations."
      >
        <div className="flex gap-3">
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-dark bg-background-dark text-text-secondary hover:bg-surface-dark hover:text-white text-sm font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Export
          </button>
          <button 
            onClick={() => setIsNewBookingModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/30 hover:bg-red-700 text-sm font-bold transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Booking
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
                <span className="material-symbols-outlined">list_alt</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium uppercase">Total</p>
                <p className="text-xl font-bold text-white">{stats.total}</p>
              </div>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium uppercase">Confirmed</p>
                <p className="text-xl font-bold text-white">{stats.confirmed}</p>
              </div>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium uppercase">Pending</p>
                <p className="text-xl font-bold text-white">{stats.pending}</p>
              </div>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center gap-4">
              <div className="p-3 rounded-lg bg-red-500/10 text-red-500">
                <span className="material-symbols-outlined">cancel</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium uppercase">Cancelled</p>
                <p className="text-xl font-bold text-white">{stats.cancelled}</p>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm" 
                placeholder="Search by Booking ID or Customer..." 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <select 
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]"
              >
                <option>All Services</option>
                <option>Flight</option>
                <option>Tour Package</option>
                <option>Hotel</option>
                <option>Car Rental</option>
                <option>Custom</option>
              </select>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 rounded-lg border-border-dark bg-background-dark text-white text-sm focus:ring-primary focus:border-primary min-w-[140px]"
              >
                <option>Status: All</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto px-6 pb-6">
          <div className="min-w-full inline-block align-middle">
            <div className="border rounded-xl border-border-dark border-gray-200 overflow-hidden bg-surface-dark">
              <table className="min-w-full divide-y divide-border-dark">
                <thead className="bg-background-dark">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Booking ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Service</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Destination/Details</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider" scope="col">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark bg-surface-dark">
                  {paginatedBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-text-secondary">No bookings found</td>
                    </tr>
                  ) : paginatedBookings.map((booking) => {
                    const svc = getServiceDetails(booking);
                    const isSelected = selectedBookingId === booking.id;
                    
                    return (
                      <tr 
                        key={booking.id}
                        onClick={() => setSelectedBookingId(isSelected ? null : booking.id)}
                        className={`hover:bg-background-dark transition-colors group cursor-pointer relative ${isSelected ? 'bg-primary/5' : ''}`}
                      >
                        {isSelected && <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-mono text-text-secondary">{booking.bookingRef}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {booking.user?.avatarUrl ? (
                              <div className="h-8 w-8 rounded-full bg-cover bg-center mr-3" style={{ backgroundImage: `url('${booking.user.avatarUrl}')` }}></div>
                            ) : (
                              <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 text-xs font-bold uppercase">
                                {booking.user?.firstName?.charAt(0) || 'U'}
                              </div>
                            )}
                            <div>
                              <div className="text-sm font-medium text-white">{booking.user?.firstName} {booking.user?.lastName}</div>
                              <div className="text-xs text-text-secondary">{booking.user?.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2 text-text-secondary">
                            <span className="material-symbols-outlined text-[18px]">{svc.icon}</span>
                            <span className="text-sm">{svc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">{svc.dest}</div>
                          <div className="text-xs text-text-secondary">{svc.subDest}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-text-secondary">{new Date(booking.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-white">{formatPrice(booking.finalAmount)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {booking.status === "CONFIRMED" && (
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">Confirmed</span>
                          )}
                          {booking.status === "PENDING" && (
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">Pending</span>
                          )}
                          {booking.status === "CANCELLED" && (
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/30 text-red-400 border border-red-800">Cancelled</span>
                          )}
                          {booking.status === "COMPLETED" && (
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Completed</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-border-dark sm:px-6">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">
                        Showing <span className="font-medium text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium text-white">{Math.min(currentPage * itemsPerPage, filteredBookings.length)}</span> of <span className="font-medium text-white">{filteredBookings.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary hover:bg-surface-dark disabled:opacity-50"
                        >
                          <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <span className="relative inline-flex items-center px-4 py-2 border border-border-dark bg-background-dark text-sm font-medium text-white">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button 
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-border-dark bg-background-dark text-sm font-medium text-text-secondary hover:bg-surface-dark disabled:opacity-50"
                        >
                          <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Slide-over Panel (Right Side) */}
      {selectedBooking && (() => {
        const svc = getServiceDetails(selectedBooking);
        return (
          <div className="w-[400px] border-l border-border-dark bg-surface-dark flex flex-col h-full shadow-2xl z-10 hidden xl:flex">
            <div className="p-6 border-b border-border-dark flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Booking Details</h2>
              <button onClick={() => setSelectedBookingId(null)} className="text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {/* Header Status */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary uppercase font-semibold mb-1">Status</span>
                  <span className={`px-2.5 py-1 w-fit inline-flex text-xs leading-5 font-semibold rounded-full border 
                    ${selectedBooking.status === 'CONFIRMED' ? 'bg-green-900/30 text-green-400 border-green-800' : ''}
                    ${selectedBooking.status === 'PENDING' ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800' : ''}
                    ${selectedBooking.status === 'CANCELLED' ? 'bg-red-900/30 text-red-400 border-red-800' : ''}
                    ${selectedBooking.status === 'COMPLETED' ? 'bg-blue-900/30 text-blue-400 border-blue-800' : ''}
                  `}>
                    {selectedBooking.status}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-text-secondary uppercase font-semibold mb-1 block">Booking ID</span>
                  <span className="text-lg font-mono font-bold text-white">{selectedBooking.bookingRef}</span>
                </div>
              </div>
              
              {/* Customer Info */}
              <div className="bg-background-dark rounded-xl p-4 border border-border-dark">
                <div className="flex items-center gap-4 mb-4">
                  {selectedBooking.user?.avatarUrl ? (
                    <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${selectedBooking.user.avatarUrl}')` }}></div>
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                      {selectedBooking.user?.firstName?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-white">{selectedBooking.user?.firstName} {selectedBooking.user?.lastName}</h3>
                    <p className="text-sm text-text-secondary">{selectedBooking.user?.email}</p>
                    <p className="text-sm text-text-secondary">{selectedBooking.user?.phone || 'No phone'}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded border border-border-dark bg-surface-dark text-xs font-semibold text-text-secondary hover:text-primary transition-colors">View Profile</button>
                  <button className="flex-1 py-2 rounded border border-border-dark bg-surface-dark text-xs font-semibold text-text-secondary hover:text-primary transition-colors">Message</button>
                </div>
              </div>
              
              {/* Trip Details */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase mb-3">{svc.name} Details</h3>
                <div className="relative pl-4 border-l-2 border-dashed border-border-dark space-y-6">
                  {selectedBooking.serviceType === 'CAR_HIRE' && (
                    <>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary">Pickup · {new Date(selectedBooking.carHireBooking?.pickupDateTime).toLocaleString()}</p>
                        <p className="font-bold text-white">{selectedBooking.carHireBooking?.pickupLocation}</p>
                        <p className="text-sm text-text-secondary">{selectedBooking.carHireBooking?.car?.make} {selectedBooking.carHireBooking?.car?.model}</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary">Return · {new Date(selectedBooking.carHireBooking?.returnDateTime).toLocaleString()}</p>
                        <p className="font-bold text-white">{selectedBooking.carHireBooking?.dropoffLocation}</p>
                        <p className="text-sm text-text-secondary">{selectedBooking.carHireBooking?.totalDays} Days</p>
                      </div>
                    </>
                  )}
                  {selectedBooking.serviceType === 'HOTEL' && (
                    <>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary">Check-in · {new Date(selectedBooking.hotelBooking?.checkIn).toLocaleDateString()}</p>
                        <p className="font-bold text-white">{selectedBooking.hotelBooking?.hotel?.name}</p>
                        <p className="text-sm text-text-secondary">{selectedBooking.hotelBooking?.room?.name}</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary">Check-out · {new Date(selectedBooking.hotelBooking?.checkOut).toLocaleDateString()}</p>
                        <p className="font-bold text-white">{selectedBooking.hotelBooking?.hotel?.name}</p>
                        <p className="text-sm text-text-secondary">{selectedBooking.hotelBooking?.totalNights} Nights · {selectedBooking.hotelBooking?.guestsAdults} Adults</p>
                      </div>
                    </>
                  )}
                  {selectedBooking.serviceType === 'TOUR_PACKAGE' && (
                    <>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary">Start · {new Date(selectedBooking.tourBooking?.startDate).toLocaleDateString()}</p>
                        <p className="font-bold text-white">{selectedBooking.tourBooking?.tourPackage?.title}</p>
                        <p className="text-sm text-text-secondary">{selectedBooking.tourBooking?.tourPackage?.destination?.name}</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border-dark ring-4 ring-surface-dark"></div>
                        <p className="text-xs text-text-secondary">End · {new Date(selectedBooking.tourBooking?.endDate).toLocaleDateString()}</p>
                        <p className="font-bold text-white">End of Tour</p>
                        <p className="text-sm text-text-secondary">{selectedBooking.tourBooking?.guestCount} Guests</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Payment Info */}
              <div className="border-t border-border-dark pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Base Price</span>
                  <span className="text-sm font-medium text-text-secondary">{formatPrice(selectedBooking.totalAmount)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Taxes & Fees</span>
                  <span className="text-sm font-medium text-text-secondary">{formatPrice(selectedBooking.taxAmount)}</span>
                </div>
                {Number(selectedBooking.discountAmount) > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-text-secondary">Discount</span>
                    <span className="text-sm font-medium text-green-500">-{formatPrice(selectedBooking.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2 border-t border-dashed border-border-dark">
                  <span className="font-bold text-white">Total</span>
                  <span className="text-xl font-bold text-primary">{formatPrice(selectedBooking.finalAmount)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-text-secondary">Payment Status</span>
                  <span className={`text-xs font-bold ${selectedBooking.paymentStatus === 'PAID' ? 'text-green-500' : 'text-yellow-500'}`}>{selectedBooking.paymentStatus}</span>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="p-6 bg-background-dark border-t border-border-dark flex gap-3">
              {selectedBooking.status !== 'CANCELLED' && selectedBooking.status !== 'COMPLETED' && (
                <button 
                  onClick={() => handleStatusUpdate(selectedBooking.id, "CANCELLED")}
                  className="flex-1 py-2.5 rounded-lg border border-red-900 bg-red-900/10 text-red-400 font-bold text-sm hover:bg-red-900/20 transition-colors"
                >
                  Reject/Cancel
                </button>
              )}
              {selectedBooking.status === 'PENDING' && (
                <button 
                  onClick={() => handleStatusUpdate(selectedBooking.id, "CONFIRMED")}
                  className="flex-1 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-primary/20"
                >
                  Confirm
                </button>
              )}
              {selectedBooking.status === 'CONFIRMED' && (
                <button 
                  onClick={() => handleStatusUpdate(selectedBooking.id, "COMPLETED")}
                  className="flex-1 py-2.5 rounded-lg bg-blue-600/20 text-blue-400 font-bold text-sm hover:bg-blue-600/30 transition-colors"
                >
                  Mark Completed
                </button>
              )}
            </div>
          </div>
        );
      })()}

      {/* New Booking Modal */}
      {isNewBookingModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-dark border border-border-dark rounded-xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-border-dark flex justify-between items-center">
              <h2 className="text-white font-bold">Create Manual Booking</h2>
              <button onClick={() => setIsNewBookingModalOpen(false)} className="text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleCreateBooking} className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-medium uppercase">First Name</label>
                  <input required name="firstName" type="text" placeholder="John" className="w-full bg-background-dark border border-border-dark rounded-lg p-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-medium uppercase">Last Name</label>
                  <input required name="lastName" type="text" placeholder="Doe" className="w-full bg-background-dark border border-border-dark rounded-lg p-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1 font-medium uppercase">Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-background-dark border border-border-dark rounded-lg p-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1 font-medium uppercase">Service Type</label>
                <select required name="serviceType" className="w-full bg-background-dark border border-border-dark rounded-lg p-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="FLIGHT">Flight</option>
                  <option value="HOTEL">Hotel</option>
                  <option value="CAR_HIRE">Car Rental</option>
                  <option value="TOUR_PACKAGE">Tour Package</option>
                  <option value="CUSTOM">Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1 font-medium uppercase">Total Amount (USD)</label>
                <input required name="totalAmount" type="number" step="0.01" placeholder="0.00" className="w-full bg-background-dark border border-border-dark rounded-lg p-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsNewBookingModalOpen(false)} className="flex-1 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-surface-light bg-background-dark border border-border-dark rounded-lg transition-colors">Cancel</button>
                <button disabled={isSubmitting} type="submit" className="flex-1 py-2.5 text-sm font-bold text-white bg-primary hover:bg-red-700 rounded-lg disabled:opacity-50 shadow-lg shadow-primary/20 transition-all">
                  {isSubmitting ? "Creating..." : "Create Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
    </div>
  );
}
