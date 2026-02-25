"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

// ─── Types ───────────────────────────────────────────────────────────────────
type VehicleStatus = 'Available' | 'Rented' | 'Maintenance';
type VehicleCategory = 'Luxury' | 'SUV' | 'Sports' | 'Electric';

interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  type: string;
  plate: string;
  fuel: string;
  mileage: string;
  transmission: string;
  pricePerDay: number;
  status: VehicleStatus;
  image: string;
  lastNote: string;
  renterAvatar?: string;
  returnDate?: string;
}

// ─── Seed data ────────────────────────────────────────────────────────────────
const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: '1',
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury',
    type: 'Luxury Sedan',
    plate: 'ABC-1234',
    fuel: 'Diesel',
    mileage: '12k km',
    transmission: 'Auto',
    pricePerDay: 250,
    status: 'Available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnCWeKjKSDfdcPP67eNOKuCBz9Sk9tpkV4z0wIOFUQ_WzwoIDT35SVClOCL74HTpdW276ppeJGutNBnyab7TtqpURUqePGTE8hpHGUCIQbq867Iozi2AAZvXcHGVKwNhO1IxG2Gb4QnF1_UkMInwJUi3L7JbdWRqeHOCC-DIqMI9-mZKoAE0AMzY67u7oBGmKqWJTwnYMVJSHR5X1n1InHLbySqhPc_Hj_vxgNY87Mhr7ib3p9T-10jb-4n4oUruyvVIUYv2CQVg',
    lastNote: 'Last cleaned: 2h ago',
  },
  {
    id: '2',
    name: 'Range Rover Autobiography',
    category: 'SUV',
    type: 'Premium SUV',
    plate: 'RRA-9988',
    fuel: 'Petrol',
    mileage: '45k km',
    transmission: 'Auto',
    pricePerDay: 380,
    status: 'Rented',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCDhFbosfflFvcK-YbMTBGNYNOgmhr1RjoIHmDOj8fjAsBFC3kyw3YOorehkVOhg_TR1k2od1hKn_7mbPqDnxJ_p2JR3FiW57TVhI3rN0LAPNq4Haa-IieOl3C7Ldeo_AmLhHGacjVPowzqtfHM-5ogHnFq-MgiaeCjSRSebdT8Fr4hgDyuYoe0qV_3QiQiJAYv2m3BOem-OF2YnujiVedFskOG_SUx16UX4lVU4qv_pN2G1irnQX0eShW5vzzMV729D7EcC5qKw',
    lastNote: '',
    renterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1eKpVNhfLN4Xff5OqUxBgwSQukfvYQ6r4tLjg9hSo3jSQMqh68_bvEUYRBZCv2yyDY-Fk9j-Ml9AEM465sFJ_Vv5lNNslmcCSbdqPRwwqks3UaaWcRWo4vHgcXt9S1cZOA46kg2_Gyo9Tit9hdJPdp5Qv2mr6RwDSxLKye2Fxpb8Ha29rU3r0zxSuQEliZgnuDy-BRrsO8qsw3vZ-doLOl2mgh0K59vOjf-tEZbw_-lTSdeqBBA-T6L9Kc8VnNewqng68lA8T-A',
    returnDate: 'in 2 days',
  },
  {
    id: '3',
    name: 'Porsche 911 Carrera',
    category: 'Sports',
    type: 'Sports Coupe',
    plate: 'PRS-9111',
    fuel: 'Petrol',
    mileage: '8k km',
    transmission: 'Auto',
    pricePerDay: 450,
    status: 'Maintenance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArndRIjBo0X12YmQI6cVHiQH1wnquDlkRDyXUg6qk5kzfUHGNmN57GrObS2bAnzD4iOZ8J1kZRuhtdZTCXLke8eLWPiU7XEIiCWLTdtqicPQ1XFu0hKsDPoZ_VcYQZmxwvEodn3MAao9gCywGqj9fmcIusNIELrea3c9utOPlcdsJltutuAKr5bWZPQJNTxJKLknKUoDxTNyTakxe5F3MLZD1XfrmmaWLQlDPWoFEQXVMOy-jxL-LU_4QG7R0efRyMR5Acw5aZNg',
    lastNote: 'Est. finish: 14 Oct',
  },
  {
    id: '4',
    name: 'Tesla Model S Plaid',
    category: 'Electric',
    type: 'Electric Luxury',
    plate: 'TSL-5544',
    fuel: 'Electric',
    mileage: '15k km',
    transmission: 'Auto',
    pricePerDay: 220,
    status: 'Available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxbtDXqMH03Z5Ysc-NwO7w1sISMpMZn47IcgBLiC-U_0bu5p9NMXRPbCQUe6BdJPkOF7rVR35jI2YWOz6I9ug80bpoyzXGqFNjjBhY5s6nyleKaEJTsNHtkcreAa_5fbqSh8SIdSgC1CxOG_pI_l94EdIZyKzLeQk7ezeritfGWe33H-zJslRBMl3gbFbS-Hi-UjWZ0-8Np3ALbMhrw5k_5Q4bRmVSXxr_zZaRLkHzqKLAVUdIb760BQ7VYFLHr_35pZzyu69qwg',
    lastNote: 'Last cleaned: 1 day ago',
  },
  {
    id: '5',
    name: 'BMW X5 xDrive',
    category: 'SUV',
    type: 'Luxury SUV',
    plate: 'BMX-2023',
    fuel: 'Diesel',
    mileage: '32k km',
    transmission: 'Auto',
    pricePerDay: 290,
    status: 'Rented',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZWqlITk92Ss_uuQtqaasF_82RJZtd5RLPJn8yUUhHf0eCLziBB3VXZz758tb5CUXlEXpo3gCb-mh_u8C4tXuQ6tivA_4hHrDfAQ-9D6QpXyht1XiSmM9m-oNSUZyAfEtjBiyMcsvwtafd68hImbUK6yKpMUG0GtO1F4EQuoRBxMyaXqbVjQmQFP0KSX2mLqh4kcrgddGm19RbDdLCdQOHjk2ZAsooYFuDfKNhtwiBXtDyRun1WD2OA',
    lastNote: '',
    renterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKDYt1feWC08i2Ht3FTI2d6YB_PCEFkvpAvjBUYvZPx81mxsly-fxhalCpvoUUEe4LflkNIBdgJYjhSGihn1DLK9c1CPHmVRe4f7b41jPZQI4UKmJIpuxGec8wlFZ1XhGOEOrbNaL4UzJxs3j4owaPmn733BP0h3TE1FrenElfLneOHPUmzBgURk7ONqMM0qs0B_Imb-q1hY4yfwbdZndzo_eDcQOqQQNbWM_X3j1hRVmhNpHPeEPADxw44ZJn6dY19xUwGJIKKg',
    returnDate: 'Tomorrow',
  },
  {
    id: '6',
    name: 'Audi A8 L',
    category: 'Luxury',
    type: 'Executive Sedan',
    plate: 'ADL-8888',
    fuel: 'Hybrid',
    mileage: '10k km',
    transmission: 'Auto',
    pricePerDay: 270,
    status: 'Available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB8fcWpXGVy5U_ZMcAx7j7QzlegVq8pmb3Vc5YNMmAH9r6hLgP2nPjcgPm0PBO9b_blrsqMgFbhiWBIbTUXrZ2QWDJv3c42eQdpRPU35ibry3M3Iu1IpV_sA3IVKjniKcdq78THAKOsMRVeJbaocwSdNj4f-SfJ7gvvZf6-AodGTWe4XTDu3PIivcvm2hmdVGcRHlxIyOLyHGkSK0WvoSLeMeROtfAD80OI_rXGRHy_Cd81ehKumvraUZIdgASfcRlL6A2yAxSVA',
    lastNote: 'New addition',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getStatusBadge(status: VehicleStatus) {
  switch (status) {
    case 'Available':
      return (
        <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
          Available
        </span>
      );
    case 'Rented':
      return (
        <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
          Rented
        </span>
      );
    case 'Maintenance':
      return (
        <span className="inline-flex items-center rounded-full bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-400/20">
          Maintenance
        </span>
      );
  }
}

const STATUS_CYCLE: VehicleStatus[] = ['Available', 'Rented', 'Maintenance'];

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function AdminFleetManagementPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | VehicleCategory>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editVehicleId, setEditVehicleId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

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
  const stats = useMemo(() => ({
    total: vehicles.length,
    rented: vehicles.filter(v => v.status === 'Rented').length,
    maintenance: vehicles.filter(v => v.status === 'Maintenance').length,
    monthlyRevenue: vehicles
      .filter(v => v.status === 'Rented')
      .reduce((sum, v) => sum + v.pricePerDay * 30, 0),
  }), [vehicles]);

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      const matchesSearch =
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.plate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = categoryFilter === 'All' || v.category === categoryFilter;
      return matchesSearch && matchesCat;
    });
  }, [vehicles, searchQuery, categoryFilter]);

  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId) ?? null;

  // Actions
  const handleCycleStatus = (id: string) => {
    setVehicles(curr =>
      curr.map(v => {
        if (v.id !== id) return v;
        const next = STATUS_CYCLE[(STATUS_CYCLE.indexOf(v.status) + 1) % STATUS_CYCLE.length];
        return { ...v, status: next };
      })
    );
    setOpenMenuId(null);
  };

  const handleEdit = (updated: Vehicle) => {
    setVehicles(curr => curr.map(v => v.id === updated.id ? updated : v));
    setEditVehicleId(null);
  };

  const handleDelete = (id: string) => {
    setVehicles(curr => curr.filter(v => v.id !== id));
    if (selectedVehicleId === id) setSelectedVehicleId(null);
    setDeleteConfirmId(null);
    setOpenMenuId(null);
  };

  const handleExport = () => {
    const headers = ['Name', 'Category', 'Type', 'Plate', 'Fuel', 'Mileage', 'Price/Day (USD)', 'Status'];
    const rows = filteredVehicles.map(v => [
      `"${v.name}"`, v.category, `"${v.type}"`, v.plate, v.fuel, v.mileage, v.pricePerDay, v.status,
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', `fleet-export-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="stitch-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
          <AdminHeader
            title="Fleet Overview"
            description="Manage and track all vehicles in the Wanderlux fleet."
          >
            <div className="flex items-center gap-3">
              {/* Search (header) */}
              <div className="hidden md:flex relative w-56">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input
                  className="block w-full rounded-lg border-0 bg-surface-dark py-2 pl-10 pr-4 text-white placeholder-text-secondary focus:ring-1 focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Search vehicles..."
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Export */}
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-dark bg-background-dark text-text-secondary hover:bg-surface-dark hover:text-white text-sm font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">file_download</span>
                <span className="hidden sm:inline">Export</span>
              </button>
              {/* Add Vehicle */}
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-primary hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span className="hidden sm:inline">Add New Vehicle</span>
              </button>
            </div>
          </AdminHeader>

          <div className="flex-1 flex flex-row overflow-hidden">
            {/* Left: grid/list + content */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 custom-scrollbar">

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Total */}
                <div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl">directions_car</span>
                  </div>
                  <p className="text-text-secondary text-sm font-medium mb-1">Total Vehicles</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-white">{stats.total}</h3>
                    <span className="text-emerald-400 text-xs font-medium flex items-center">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>+5%
                    </span>
                  </div>
                </div>
                {/* Rented */}
                <div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl">key</span>
                  </div>
                  <p className="text-text-secondary text-sm font-medium mb-1">Currently Rented</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-white">{stats.rented}</h3>
                    <span className="text-emerald-400 text-xs font-medium flex items-center">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>+12%
                    </span>
                  </div>
                  <div className="w-full bg-background-dark rounded-full h-1 mt-3">
                    <div
                      className="bg-primary h-1 rounded-full"
                      style={{ width: `${Math.round((stats.rented / Math.max(stats.total, 1)) * 100)}%` }}
                    />
                  </div>
                </div>
                {/* Maintenance */}
                <div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl">build</span>
                  </div>
                  <p className="text-text-secondary text-sm font-medium mb-1">In Maintenance</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-white">{stats.maintenance}</h3>
                    {stats.maintenance > 0 && (
                      <span className="text-orange-400 text-xs font-medium flex items-center">
                        <span className="material-symbols-outlined text-[16px]">priority_high</span>Attention
                      </span>
                    )}
                  </div>
                </div>
                {/* Revenue */}
                <div className="bg-surface-dark rounded-xl p-5 border border-border-dark relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl">payments</span>
                  </div>
                  <p className="text-text-secondary text-sm font-medium mb-1">Monthly Revenue</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      ${stats.monthlyRevenue >= 1000
                        ? `${(stats.monthlyRevenue / 1000).toFixed(1)}k`
                        : stats.monthlyRevenue}
                    </h3>
                    <span className="text-emerald-400 text-xs font-medium flex items-center">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>+8%
                    </span>
                  </div>
                </div>
              </div>

              {/* Filters & View Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between">
                {/* Mobile search */}
                <div className="relative w-full sm:w-80 md:hidden">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input
                    className="block w-full rounded-lg border border-border-dark bg-surface-dark py-2.5 pl-10 pr-4 text-white placeholder:text-text-secondary focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Search by model, plate..."
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Category Tabs + view toggle row */}
                <div className="flex items-center gap-3 w-full overflow-x-auto pb-1">
                  {/* Category filter tabs */}
                  <div className="flex items-center gap-1 bg-surface-dark border border-border-dark rounded-lg p-1 shrink-0">
                    {(['All', 'Luxury', 'SUV', 'Sports', 'Electric'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                          categoryFilter === cat
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-text-secondary hover:text-white hover:bg-background-dark'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* View toggle */}
                <div className="flex items-center gap-2 bg-surface-dark p-1 rounded-lg border border-border-dark shrink-0">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-background-dark text-white shadow-sm' : 'text-text-secondary hover:text-white'}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-background-dark text-white shadow-sm' : 'text-text-secondary hover:text-white'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">list</span>
                  </button>
                </div>
              </div>

              {/* Empty state */}
              {filteredVehicles.length === 0 && (
                <div className="flex flex-col items-center gap-3 py-20 text-text-secondary">
                  <span className="material-symbols-outlined text-5xl opacity-30">directions_car</span>
                  <p>No vehicles match your search criteria.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setCategoryFilter('All'); }}
                    className="mt-1 text-sm text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* ── GRID VIEW ── */}
              {viewMode === 'grid' && filteredVehicles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 pb-8">
                  {filteredVehicles.map(vehicle => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      isSelected={selectedVehicleId === vehicle.id}
                      openMenuId={openMenuId}
                      deleteConfirmId={deleteConfirmId}
                      menuRef={menuRef}
                      onSelect={() => setSelectedVehicleId(selectedVehicleId === vehicle.id ? null : vehicle.id)}
                      onToggleMenu={() => setOpenMenuId(openMenuId === vehicle.id ? null : vehicle.id)}
                      onEdit={() => { setEditVehicleId(vehicle.id); }}
                      onCycleStatus={() => handleCycleStatus(vehicle.id)}
                      onDeleteConfirm={() => setDeleteConfirmId(vehicle.id)}
                      onDeleteCancel={() => { setDeleteConfirmId(null); setOpenMenuId(null); }}
                      onDelete={() => handleDelete(vehicle.id)}
                    />
                  ))}
                </div>
              )}

              {/* ── LIST VIEW ── */}
              {viewMode === 'list' && filteredVehicles.length > 0 && (
                <div className="border rounded-xl border-border-dark overflow-hidden bg-surface-dark mb-8">
                  <table className="min-w-full divide-y divide-border-dark">
                    <thead className="bg-background-dark">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Vehicle</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Plate</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider hidden md:table-cell">Category</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider hidden lg:table-cell">Fuel / KM</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Price/Day</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-dark">
                      {filteredVehicles.map(vehicle => (
                        <tr
                          key={vehicle.id}
                          onClick={() => setSelectedVehicleId(selectedVehicleId === vehicle.id ? null : vehicle.id)}
                          className={`hover:bg-background-dark transition-colors cursor-pointer ${selectedVehicleId === vehicle.id ? 'bg-primary/5' : ''}`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div
                                className="h-10 w-14 rounded-lg bg-cover bg-center"
                                style={{ backgroundImage: `url('${vehicle.image}')` }}
                              />
                              <div>
                                <div className="text-sm font-medium text-white">{vehicle.name}</div>
                                <div className="text-xs text-text-secondary">{vehicle.type}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{vehicle.plate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary hidden md:table-cell">{vehicle.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary hidden lg:table-cell">
                            {vehicle.fuel} · {vehicle.mileage}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">${vehicle.pricePerDay}/day</td>
                          <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(vehicle.status)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right" onClick={e => e.stopPropagation()}>
                            <div className="relative inline-block" ref={openMenuId === vehicle.id ? menuRef : null}>
                              <button
                                onClick={() => setOpenMenuId(openMenuId === vehicle.id ? null : vehicle.id)}
                                className="text-text-secondary hover:text-white transition-colors p-1 rounded-md hover:bg-background-dark"
                              >
                                <span className="material-symbols-outlined">more_vert</span>
                              </button>
                              {openMenuId === vehicle.id && deleteConfirmId !== vehicle.id && (
                                <div className="absolute right-0 mt-1 w-48 rounded-lg shadow-xl bg-surface-dark border border-border-dark z-50 overflow-hidden">
                                  <button
                                    onClick={() => { setSelectedVehicleId(vehicle.id); setOpenMenuId(null); }}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px] text-text-secondary">visibility</span>
                                    View Details
                                  </button>
                                  <button
                                    onClick={() => { setEditVehicleId(vehicle.id); setOpenMenuId(null); }}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px] text-text-secondary">edit</span>
                                    Edit Vehicle
                                  </button>
                                  <button
                                    onClick={() => handleCycleStatus(vehicle.id)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px] text-text-secondary">sync</span>
                                    Change Status
                                  </button>
                                  <div className="border-t border-border-dark" />
                                  <button
                                    onClick={() => setDeleteConfirmId(vehicle.id)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-900/20 transition-colors text-left"
                                  >
                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                    Delete
                                  </button>
                                </div>
                              )}
                              {deleteConfirmId === vehicle.id && (
                                <div className="absolute right-0 mt-1 w-56 rounded-lg shadow-xl bg-surface-dark border border-red-800 z-50 p-4">
                                  <p className="text-sm text-white font-semibold mb-1">Remove this vehicle?</p>
                                  <p className="text-xs text-text-secondary mb-3">This action cannot be undone.</p>
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => { setDeleteConfirmId(null); setOpenMenuId(null); }}
                                      className="flex-1 py-1.5 rounded-lg border border-border-dark text-text-secondary hover:text-white text-xs font-medium transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() => handleDelete(vehicle.id)}
                                      className="flex-1 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination footer */}
                  <div className="bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-border-dark">
                    <p className="text-sm text-text-secondary">
                      Showing <span className="font-medium text-white">{filteredVehicles.length}</span> of{' '}
                      <span className="font-medium text-white">{vehicles.length}</span> vehicles
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Right: Vehicle Detail Slide-over */}
            {selectedVehicle && (
              <div className="w-full md:w-[360px] border-l border-border-dark bg-surface-dark flex flex-col h-full shadow-2xl z-10 absolute md:relative right-0">
                <div className="p-5 border-b border-border-dark flex justify-between items-center">
                  <h2 className="text-base font-bold text-white">Vehicle Details</h2>
                  <button
                    onClick={() => setSelectedVehicleId(null)}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {/* Image */}
                  <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${selectedVehicle.image}')` }} />

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-white">{selectedVehicle.name}</h3>
                        <p className="text-sm text-text-secondary">{selectedVehicle.type}</p>
                      </div>
                      {getStatusBadge(selectedVehicle.status)}
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {[
                        { label: 'Plate', value: selectedVehicle.plate, icon: 'pin' },
                        { label: 'Category', value: selectedVehicle.category, icon: 'category' },
                        { label: 'Fuel', value: selectedVehicle.fuel, icon: selectedVehicle.fuel === 'Electric' ? 'bolt' : 'local_gas_station' },
                        { label: 'Mileage', value: selectedVehicle.mileage, icon: 'speed' },
                        { label: 'Transmission', value: selectedVehicle.transmission, icon: 'settings' },
                        { label: 'Price / Day', value: `$${selectedVehicle.pricePerDay}`, icon: 'payments' },
                      ].map(({ label, value, icon }) => (
                        <div key={label} className="bg-background-dark rounded-xl p-3 border border-border-dark">
                          <span className="text-xs text-text-secondary uppercase font-semibold block mb-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">{icon}</span>
                            {label}
                          </span>
                          <span className="text-sm font-bold text-white">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Status note */}
                    {selectedVehicle.status === 'Rented' && selectedVehicle.returnDate && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-400/10 border border-blue-400/20 mb-4">
                        <span className="material-symbols-outlined text-blue-400 text-[20px]">schedule</span>
                        <span className="text-sm text-blue-300">Return expected: {selectedVehicle.returnDate}</span>
                      </div>
                    )}
                    {selectedVehicle.status === 'Maintenance' && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-orange-400/10 border border-orange-400/20 mb-4">
                        <span className="material-symbols-outlined text-orange-400 text-[20px]">build_circle</span>
                        <span className="text-sm text-orange-300">{selectedVehicle.lastNote || 'Vehicle under maintenance'}</span>
                      </div>
                    )}
                    {selectedVehicle.status === 'Available' && selectedVehicle.lastNote && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 mb-4">
                        <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                        <span className="text-sm text-emerald-300">{selectedVehicle.lastNote}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 bg-background-dark border-t border-border-dark flex gap-3">
                  <button
                    onClick={() => { setEditVehicleId(selectedVehicle.id); }}
                    className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-lg shadow-primary/20"
                  >
                    Edit Vehicle
                  </button>
                  <button
                    onClick={() => handleCycleStatus(selectedVehicle.id)}
                    className="flex-1 py-2.5 rounded-lg border border-border-dark bg-transparent text-white font-bold text-sm hover:bg-surface-dark transition-colors"
                  >
                    Status
                  </button>
                  <button
                    onClick={() => handleDelete(selectedVehicle.id)}
                    className="py-2.5 px-4 rounded-lg border border-red-800 text-red-400 hover:bg-red-900/20 font-bold text-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add Vehicle Modal */}
      {showAddModal && (
        <AddVehicleModal
          onClose={() => setShowAddModal(false)}
          onAdd={(v) => {
            setVehicles(curr => [
              { ...v, id: Date.now().toString() },
              ...curr,
            ]);
            setShowAddModal(false);
          }}
        />
      )}

      {/* Edit Vehicle Modal */}
      {editVehicleId && (() => {
        const target = vehicles.find(v => v.id === editVehicleId);
        return target ? (
          <EditVehicleModal
            vehicle={target}
            onClose={() => setEditVehicleId(null)}
            onSave={handleEdit}
          />
        ) : null;
      })()}
    </div>
  );
}

// ─── Vehicle Card (grid view) ─────────────────────────────────────────────────
function VehicleCard({
  vehicle,
  isSelected,
  openMenuId,
  deleteConfirmId,
  menuRef,
  onSelect,
  onToggleMenu,
  onEdit,
  onCycleStatus,
  onDeleteConfirm,
  onDeleteCancel,
  onDelete,
}: {
  vehicle: Vehicle;
  isSelected: boolean;
  openMenuId: string | null;
  deleteConfirmId: string | null;
  menuRef: React.RefObject<HTMLDivElement | null>;
  onSelect: () => void;
  onToggleMenu: () => void;
  onEdit: () => void;
  onCycleStatus: () => void;
  onDeleteConfirm: () => void;
  onDeleteCancel: () => void;
  onDelete: () => void;
}) {
  const isMenuOpen = openMenuId === vehicle.id;
  const isDeleteConfirm = deleteConfirmId === vehicle.id;

  return (
    <div
      className={`group flex flex-col bg-surface-dark border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer ${
        isSelected ? 'border-primary/60 shadow-lg shadow-primary/10' : 'border-border-dark'
      }`}
      onClick={onSelect}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-background-dark">
        <div className="absolute top-3 left-3 z-10">{getStatusBadge(vehicle.status)}</div>
        <div className="absolute top-3 right-3 z-10" onClick={e => e.stopPropagation()}>
          <div className="relative" ref={isMenuOpen ? menuRef : null}>
            <button
              onClick={onToggleMenu}
              className="p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
            {isMenuOpen && !isDeleteConfirm && (
              <div className="absolute right-0 mt-1 w-48 rounded-lg shadow-xl bg-surface-dark border border-border-dark z-50 overflow-hidden">
                <button
                  onClick={e => { e.stopPropagation(); onSelect(); onToggleMenu(); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-text-secondary">visibility</span>
                  View Details
                </button>
                <button
                  onClick={e => { e.stopPropagation(); onEdit(); onToggleMenu(); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-text-secondary">edit</span>
                  Edit Vehicle
                </button>
                <button
                  onClick={e => { e.stopPropagation(); onCycleStatus(); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-background-dark transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-text-secondary">sync</span>
                  Change Status
                </button>
                <div className="border-t border-border-dark" />
                <button
                  onClick={e => { e.stopPropagation(); onDeleteConfirm(); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-900/20 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  Delete Vehicle
                </button>
              </div>
            )}
            {isDeleteConfirm && (
              <div className="absolute right-0 mt-1 w-56 rounded-lg shadow-xl bg-surface-dark border border-red-800 z-50 p-4" onClick={e => e.stopPropagation()}>
                <p className="text-sm text-white font-semibold mb-1">Remove this vehicle?</p>
                <p className="text-xs text-text-secondary mb-3">This action cannot be undone.</p>
                <div className="flex gap-2">
                  <button
                    onClick={onDeleteCancel}
                    className="flex-1 py-1.5 rounded-lg border border-border-dark text-text-secondary hover:text-white text-xs font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onDelete}
                    className="flex-1 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <img
          alt={vehicle.name}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${vehicle.status === 'Maintenance' ? 'opacity-60 grayscale-[50%]' : ''}`}
          src={vehicle.image}
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">{vehicle.name}</h3>
            <p className="text-text-secondary text-xs">{vehicle.type}</p>
          </div>
          <div className="text-right">
            <p className="text-white font-bold">${vehicle.pricePerDay}<span className="text-text-secondary text-xs font-normal">/day</span></p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-y-2.5 text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">pin</span>
            <span>{vehicle.plate}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">{vehicle.fuel === 'Electric' ? 'bolt' : 'local_gas_station'}</span>
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">speed</span>
            <span>{vehicle.mileage}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">settings</span>
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border-dark flex items-center justify-between">
          <div className="flex items-center gap-2">
            {vehicle.renterAvatar && vehicle.status === 'Rented' ? (
              <>
                <div
                  className="h-6 w-6 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${vehicle.renterAvatar}')` }}
                />
                <span className="text-xs text-text-secondary">Return: {vehicle.returnDate}</span>
              </>
            ) : vehicle.status === 'Maintenance' ? (
              <>
                <span className="material-symbols-outlined text-orange-400 text-sm">build_circle</span>
                <span className="text-xs text-text-secondary">{vehicle.lastNote}</span>
              </>
            ) : (
              <span className="text-xs text-text-secondary italic">{vehicle.lastNote}</span>
            )}
          </div>
          <button
            className="text-primary text-sm font-semibold hover:text-white transition-colors"
            onClick={e => { e.stopPropagation(); onSelect(); }}
          >
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Add Vehicle Modal ────────────────────────────────────────────────────────
function AddVehicleModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (v: Omit<Vehicle, 'id'>) => void;
}) {
  const [form, setForm] = useState({
    name: '',
    category: 'Luxury' as VehicleCategory,
    type: '',
    plate: '',
    fuel: 'Petrol',
    mileage: '0 km',
    transmission: 'Auto',
    pricePerDay: 200,
    status: 'Available' as VehicleStatus,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    lastNote: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.plate.trim()) return;
    onAdd(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-surface-dark border border-border-dark rounded-2xl w-full max-w-lg shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-dark">
          <h2 className="text-lg font-bold text-white">Add New Vehicle</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form */}
        <form id="add-vehicle-form" onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Vehicle Name *</label>
              <input
                required
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="e.g. Bentley Continental GT"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Category</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value as VehicleCategory }))}
              >
                {(['Luxury', 'SUV', 'Sports', 'Electric'] as const).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Type</label>
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary"
                placeholder="e.g. Grand Tourer"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              />
            </div>

            {/* Plate */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Plate Number *</label>
              <input
                required
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary uppercase"
                placeholder="e.g. KBC-1234"
                value={form.plate}
                onChange={e => setForm(f => ({ ...f, plate: e.target.value.toUpperCase() }))}
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Price / Day (USD)</label>
              <input
                type="number"
                min={1}
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.pricePerDay}
                onChange={e => setForm(f => ({ ...f, pricePerDay: Number(e.target.value) }))}
              />
            </div>

            {/* Fuel */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Fuel</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.fuel}
                onChange={e => setForm(f => ({ ...f, fuel: e.target.value }))}
              >
                {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Initial Status</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value as VehicleStatus }))}
              >
                {(['Available', 'Rented', 'Maintenance'] as const).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Note */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Note</label>
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary"
                placeholder="e.g. Last cleaned: today"
                value={form.lastNote}
                onChange={e => setForm(f => ({ ...f, lastNote: e.target.value }))}
              />
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-border-dark">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-white font-bold text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="add-vehicle-form"
            className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-lg shadow-primary/20"
          >
            Add Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Edit Vehicle Modal ───────────────────────────────────────────────────────
function EditVehicleModal({
  vehicle,
  onClose,
  onSave,
}: {
  vehicle: Vehicle;
  onClose: () => void;
  onSave: (updated: Vehicle) => void;
}) {
  const [form, setForm] = useState<Vehicle>({ ...vehicle });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.plate.trim()) return;
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-surface-dark border border-border-dark rounded-2xl w-full max-w-lg shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-dark">
          <div>
            <h2 className="text-lg font-bold text-white">Edit Vehicle</h2>
            <p className="text-xs text-text-secondary mt-0.5">{vehicle.name}</p>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form */}
        <form id="edit-vehicle-form" onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Vehicle Name *</label>
              <input
                required
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary focus:border-primary"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Category</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value as VehicleCategory }))}
              >
                {(['Luxury', 'SUV', 'Sports', 'Electric'] as const).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Type</label>
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary"
                placeholder="e.g. Grand Tourer"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              />
            </div>

            {/* Plate */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Plate Number *</label>
              <input
                required
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary uppercase"
                value={form.plate}
                onChange={e => setForm(f => ({ ...f, plate: e.target.value.toUpperCase() }))}
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Price / Day (USD)</label>
              <input
                type="number"
                min={1}
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.pricePerDay}
                onChange={e => setForm(f => ({ ...f, pricePerDay: Number(e.target.value) }))}
              />
            </div>

            {/* Fuel */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Fuel</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.fuel}
                onChange={e => setForm(f => ({ ...f, fuel: e.target.value }))}
              >
                {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
            </div>

            {/* Mileage */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Mileage</label>
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary"
                placeholder="e.g. 25k km"
                value={form.mileage}
                onChange={e => setForm(f => ({ ...f, mileage: e.target.value }))}
              />
            </div>

            {/* Transmission */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Transmission</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.transmission}
                onChange={e => setForm(f => ({ ...f, transmission: e.target.value }))}
              >
                {['Auto', 'Manual'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Status</label>
              <select
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm focus:ring-1 focus:ring-primary"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value as VehicleStatus }))}
              >
                {(['Available', 'Rented', 'Maintenance'] as const).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Return date (shown only when Rented) */}
            {form.status === 'Rented' && (
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Return Date</label>
                <input
                  className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary"
                  placeholder="e.g. Tomorrow, in 3 days"
                  value={form.returnDate ?? ''}
                  onChange={e => setForm(f => ({ ...f, returnDate: e.target.value }))}
                />
              </div>
            )}

            {/* Note */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-text-secondary uppercase mb-1">Note</label>
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-2.5 text-white text-sm placeholder-text-secondary focus:ring-1 focus:ring-primary"
                placeholder="e.g. Last cleaned: today"
                value={form.lastNote}
                onChange={e => setForm(f => ({ ...f, lastNote: e.target.value }))}
              />
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-border-dark">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-border-dark text-text-secondary hover:text-white font-bold text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="edit-vehicle-form"
            className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-lg shadow-primary/20"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
