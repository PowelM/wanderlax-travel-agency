"use server";

import { prisma } from "@/lib/prisma";

export type DateRange = '7d' | '30d' | 'month' | 'quarter' | '6m' | 'ytd' | 'year' | 'custom';

export interface DestinationRow {
  id: string;
  name: string;
  region: string;
  bookings: number;
  revenue: number;
  rating: number;
  status: 'Trending' | 'Stable' | 'Hot' | 'Review';
  imageUrl: string;
  barHeight: number;
}

export interface RangeDataset {
  metrics: {
    revenue: string;
    revenueChange: string;
    revenueUp: boolean;
    bookings: number;
    bookingsChange: string;
    bookingsUp: boolean;
    avgOrder: string;
    avgOrderChange: string;
    avgOrderUp: boolean;
    satisfaction: string;
    satisfactionChange: string;
  };
  rows: DestinationRow[];
  revenueMix: { label: string; pct: number; color: string }[];
}

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}K`;
  if (n === 0)        return '—';
  return `$${n}`;
}


function calculateBarHeight(revenue: number, maxRevenue: number) {
  if (maxRevenue === 0) return 0;
  // Keep bar height between 10 and 100 for visibility
  const height = Math.round((revenue / maxRevenue) * 100);
  return Math.max(10, Math.min(100, height));
}

const SERVICE_MIX_CONFIG: Record<string, { label: string; color: string }> = {
  HOTEL: { label: 'Hotel Bookings', color: '#c61010' },
  TOUR_PACKAGE: { label: 'Tour Packages', color: '#e14d4d' },
  CAR_HIRE: { label: 'Car Rentals', color: '#ff8a8a' },
  FLIGHT: { label: 'Flights', color: '#392828' },
  CUSTOM: { label: 'Custom Services', color: '#555555' },
};

// Function to gather statistics for a specific date range
async function getStatsForPeriod(startDate: Date, endDate: Date, prevStartDate: Date, prevEndDate: Date) {
  // Fetch bookings for the current period
  const currentBookings = await prisma.booking.findMany({
    where: {
      createdAt: { gte: startDate, lte: endDate },
      status: { not: 'CANCELLED' }
    },
    include: {
      hotelBooking: { include: { hotel: { include: { destination: true } } } },
      tourBooking: { include: { tourPackage: { include: { destination: true } } } }
    }
  });

  // Fetch bookings for the previous period to calculate changes
  const prevBookings = await prisma.booking.findMany({
    where: {
      createdAt: { gte: prevStartDate, lte: prevEndDate },
      status: { not: 'CANCELLED' }
    }
  });

  // Calculate current metrics
  const rev = currentBookings.reduce((sum, b) => sum + Number(b.finalAmount), 0);
  const bookingsCount = currentBookings.length;
  const avg = bookingsCount > 0 ? rev / bookingsCount : 0;

  // Calculate previous metrics
  const prevRev = prevBookings.reduce((sum, b) => sum + Number(b.finalAmount), 0);
  const prevBookingsCount = prevBookings.length;
  const prevAvg = prevBookingsCount > 0 ? prevRev / prevBookingsCount : 0;

  // Calculate changes
  const revChangePct = prevRev > 0 ? ((rev - prevRev) / prevRev) * 100 : 0;
  const bookingsChangePct = prevBookingsCount > 0 ? ((bookingsCount - prevBookingsCount) / prevBookingsCount) * 100 : 0;
  const avgChangePct = prevAvg > 0 ? ((avg - prevAvg) / prevAvg) * 100 : 0;

  // Group by destination
  const destMap = new Map<string, { dest: import('@prisma/client').Destination, count: number, revenue: number, prevCount: number, prevRevenue: number }>();
  
  // Also get all destinations to ensure they are represented
  const allDests = await prisma.destination.findMany();
  for (const dest of allDests) {
    destMap.set(dest.id, { dest, count: 0, revenue: 0, prevCount: 0, prevRevenue: 0 });
  }

  // Populate current counts
  for (const b of currentBookings) {
    const dest = b.hotelBooking?.hotel?.destination || b.tourBooking?.tourPackage?.destination;
    if (dest) {
      const entry = destMap.get(dest.id) || { dest, count: 0, revenue: 0, prevCount: 0, prevRevenue: 0 };
      entry.count += 1;
      entry.revenue += Number(b.finalAmount);
      destMap.set(dest.id, entry);
    }
  }

  // To simplify, we'll estimate previous destination metrics, as fetching detailed previous bookings with relations might be heavy.
  // Actually, we can fetch prevBookings with relations, let's do that for accuracy.
  const prevBookingsWithRelations = await prisma.booking.findMany({
    where: {
      createdAt: { gte: prevStartDate, lte: prevEndDate },
      status: { not: 'CANCELLED' }
    },
    include: {
      hotelBooking: { include: { hotel: { include: { destination: true } } } },
      tourBooking: { include: { tourPackage: { include: { destination: true } } } }
    }
  });

  for (const b of prevBookingsWithRelations) {
    const dest = b.hotelBooking?.hotel?.destination || b.tourBooking?.tourPackage?.destination;
    if (dest && destMap.has(dest.id)) {
      const entry = destMap.get(dest.id)!;
      entry.prevCount += 1;
      entry.prevRevenue += Number(b.finalAmount);
    }
  }

  const sortedDests = Array.from(destMap.values()).sort((a, b) => b.revenue - a.revenue);
  const maxRev = sortedDests.length > 0 ? sortedDests[0].revenue : 0;

  // Since we only show top 4 destinations in the dashboard usually, we can take top 4
  const topRows: DestinationRow[] = sortedDests.slice(0, 4).map((entry) => {
    // Determine status based on revenue change
    let status: DestinationRow['status'] = 'Review';
    const ratio = entry.prevRevenue > 0 ? entry.revenue / entry.prevRevenue : 1.2;
    if (ratio > 1.5) status = 'Trending';
    else if (ratio > 1.1) status = 'Hot';
    else if (ratio > 0.8) status = 'Stable';

    return {
      id: entry.dest.id,
      name: `${entry.dest.name}, ${entry.dest.country}`,
      region: entry.dest.continent,
      bookings: entry.count,
      revenue: entry.revenue,
      rating: 4.8, // Static for now as we don't have separate destination ratings easily
      status: status,
      imageUrl: entry.dest.images?.[0] || 'https://via.placeholder.com/400',
      barHeight: calculateBarHeight(entry.revenue, maxRev)
    };
  });

  // Reviews for satisfaction
  const currentReviews = await prisma.review.aggregate({
    where: { createdAt: { gte: startDate, lte: endDate } },
    _avg: { rating: true }
  });
  const prevReviews = await prisma.review.aggregate({
    where: { createdAt: { gte: prevStartDate, lte: prevEndDate } },
    _avg: { rating: true }
  });

  const avgRating = currentReviews._avg.rating || 0;
  const prevAvgRating = prevReviews._avg.rating || 0;
  
  const ratingChange = prevAvgRating > 0 ? avgRating - prevAvgRating : 0;
  const ratingChangeFormatted = ratingChange > 0 ? `+${ratingChange.toFixed(1)}` : ratingChange.toFixed(1);

  // Revenue Mix
  const revByService: Record<string, number> = {};
  for (const b of currentBookings) {
    const st = b.serviceType as string;
    revByService[st] = (revByService[st] || 0) + Number(b.finalAmount);
  }

  const revenueMix = Object.entries(revByService)
    .filter(([, amount]) => amount > 0)
    .map(([type, amount]) => {
      const config = SERVICE_MIX_CONFIG[type] || { label: type, color: '#999' };
      return {
        label: config.label,
        pct: rev > 0 ? Math.round((amount / rev) * 100) : 0,
        color: config.color
      };
    })
    .sort((a, b) => b.pct - a.pct);

  return {
    metrics: {
      revenue: fmt(rev),
      revenueChange: `${revChangePct >= 0 ? '+' : ''}${revChangePct.toFixed(1)}%`,
      revenueUp: revChangePct >= 0,
      bookings: bookingsCount,
      bookingsChange: `${bookingsChangePct >= 0 ? '+' : ''}${bookingsChangePct.toFixed(1)}%`,
      bookingsUp: bookingsChangePct >= 0,
      avgOrder: fmt(avg),
      avgOrderChange: `${avgChangePct >= 0 ? '+' : ''}${avgChangePct.toFixed(1)}%`,
      avgOrderUp: avgChangePct >= 0,
      satisfaction: avgRating > 0 ? `${avgRating.toFixed(1)}/5` : '—',
      satisfactionChange: prevAvgRating > 0 ? ratingChangeFormatted : '—'
    },
    rows: topRows,
    revenueMix
  };
}

export async function getReportsAnalyticsData() {
  const now = new Date();
  
  // 7d
  const date7d = new Date(now); date7d.setDate(now.getDate() - 7);
  const prevDate7d = new Date(date7d); prevDate7d.setDate(date7d.getDate() - 7);
  
  // 30d
  const date30d = new Date(now); date30d.setDate(now.getDate() - 30);
  const prevDate30d = new Date(date30d); prevDate30d.setDate(date30d.getDate() - 30);
  
  // month (current month)
  const dateMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const prevDateMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  
  // quarter
  const quarterMonth = Math.floor(now.getMonth() / 3) * 3;
  const dateQuarter = new Date(now.getFullYear(), quarterMonth, 1);
  const prevDateQuarter = new Date(now.getFullYear(), quarterMonth - 3, 1);
  
  // 6m
  const date6m = new Date(now); date6m.setMonth(now.getMonth() - 6);
  const prevDate6m = new Date(date6m); prevDate6m.setMonth(date6m.getMonth() - 6);
  
  // ytd
  const dateYtd = new Date(now.getFullYear(), 0, 1);
  const prevDateYtd = new Date(now.getFullYear() - 1, 0, 1);
  const prevEndOfYtd = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()); // Match year progress
  
  // year
  const dateYear = new Date(now); dateYear.setFullYear(now.getFullYear() - 1);
  const prevDateYear = new Date(dateYear); prevDateYear.setFullYear(dateYear.getFullYear() - 1);

  const [d7, d30, dMonth, dQuarter, d6m, dYtd, dYear] = await Promise.all([
    getStatsForPeriod(date7d, now, prevDate7d, date7d),
    getStatsForPeriod(date30d, now, prevDate30d, date30d),
    getStatsForPeriod(dateMonth, now, prevDateMonth, dateMonth),
    getStatsForPeriod(dateQuarter, now, prevDateQuarter, dateQuarter),
    getStatsForPeriod(date6m, now, prevDate6m, date6m),
    getStatsForPeriod(dateYtd, now, prevDateYtd, prevEndOfYtd),
    getStatsForPeriod(dateYear, now, prevDateYear, dateYear)
  ]);

  const customDataset = {
    metrics: { revenue: '—', revenueChange: '—', revenueUp: true, bookings: 0, bookingsChange: '—', bookingsUp: true, avgOrder: '—', avgOrderChange: '—', avgOrderUp: true, satisfaction: '—', satisfactionChange: '—' },
    rows: d30.rows.map(r => ({ ...r, bookings: 0, revenue: 0, barHeight: 0 })),
    revenueMix: []
  };

  return {
    '7d': d7,
    '30d': d30,
    month: dMonth,
    quarter: dQuarter,
    '6m': d6m,
    ytd: dYtd,
    year: dYear,
    custom: customDataset
  };
}

export async function getCustomDataset(startDateStr: string, endDateStr: string) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  endDate.setHours(23, 59, 59, 999);
  
  const daysDiff = Math.max(1, Math.round((endDate.getTime() - startDate.getTime()) / 86400000));
  const prevEndDate = new Date(startDate);
  const prevStartDate = new Date(prevEndDate);
  prevStartDate.setDate(prevStartDate.getDate() - daysDiff);
  
  return await getStatsForPeriod(startDate, endDate, prevStartDate, prevEndDate);
}
