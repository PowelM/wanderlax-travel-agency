"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// ─── Types ────────────────────────────────────────────────────────────────────

type CustomerStatus = 'VIP' | 'Active' | 'Lead' | 'Inactive';

export interface BookingHistoryItem {
  id: string;
  destination: string;
  hotel: string;
  dates: string;
  type: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  amount: number;
  image: string;
}

export interface ActivityItem {
  color: string;
  title: string;
  time: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  status: CustomerStatus;
  totalSpent: number;
  bookingsCount: number;
  avgStay: number;
  avatar: string;
  isOnline: boolean;
  lastActive: string;
  preferences: string[];
  notes: string;
  bookingHistory: BookingHistoryItem[];
  recentActivity: ActivityItem[];
}

// ─── Formatting Helpers ───────────────────────────────────────────────────────

function formatRelativeTime(date: Date | null): string {
  if (!date) return 'Never';
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)}w ago`;
  return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
}

function formatDateRange(start: Date, end: Date): string {
  const formatOptions: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
  const dStart = new Intl.DateTimeFormat('en-US', formatOptions).format(start);
  const dEnd = new Intl.DateTimeFormat('en-US', formatOptions).format(end);
  return `${dStart} – ${dEnd}`;
}

// ─── Server Actions ───────────────────────────────────────────────────────────

export async function getCRMCustomers(): Promise<Customer[]> {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: 'CUSTOMER'
      },
      include: {
        hotelBookings: {
          include: {
            hotel: {
              include: { destination: true }
            }
          }
        },
        tourBookings: {
          include: {
            tourPackage: {
              include: { destination: true }
            }
          }
        },
        carHireBookings: {
          include: { car: true }
        },
        payments: {
          where: { status: 'PAID' }
        },
        activityLogs: {
          orderBy: { createdAt: 'desc' },
          take: 5
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    const customers: Customer[] = users.map(user => {
      // 1. Calculate Total Spent
      const totalSpent = user.payments.reduce((acc, p) => acc + Number(p.amount), 0);

      // 2. Aggregate Bookings
      const allHotelBookings = user.hotelBookings.map(b => ({
        id: b.id,
        destination: b.hotel?.destination?.name || 'Unknown Destination',
        hotel: b.hotel?.name || 'Hotel',
        dates: formatDateRange(b.checkIn, b.checkOut),
        type: 'Leisure',
        status: (b.status === 'COMPLETED' ? 'Completed' : b.status === 'CANCELLED' ? 'Cancelled' : 'Upcoming') as 'Upcoming' | 'Completed' | 'Cancelled',
        amount: Number(b.totalAmount),
        image: b.hotel?.images?.[0] || 'https://via.placeholder.com/150',
        dateObj: b.checkIn,
        nights: b.totalNights
      }));

      const allTourBookings = user.tourBookings.map(b => ({
        id: b.id,
        destination: b.tourPackage?.destination?.name || 'Unknown Destination',
        hotel: b.tourPackage?.title || 'Tour',
        dates: formatDateRange(b.startDate, b.endDate),
        type: 'Adventure',
        status: (b.status === 'COMPLETED' ? 'Completed' : b.status === 'CANCELLED' ? 'Cancelled' : 'Upcoming') as 'Upcoming' | 'Completed' | 'Cancelled',
        amount: Number(b.totalAmount),
        image: b.tourPackage?.images?.[0] || 'https://via.placeholder.com/150',
        dateObj: b.startDate,
        nights: 0 
      }));

      const allCarBookings = user.carHireBookings.map(b => ({
        id: b.id,
        destination: `${b.pickupLocation} to ${b.dropoffLocation}`,
        hotel: `${b.car?.make} ${b.car?.model}`,
        dates: formatDateRange(b.pickupDateTime, b.returnDateTime),
        type: 'Business',
        status: (b.status === 'COMPLETED' ? 'Completed' : b.status === 'CANCELLED' ? 'Cancelled' : 'Upcoming') as 'Upcoming' | 'Completed' | 'Cancelled',
        amount: Number(b.totalAmount),
        image: b.car?.images?.[0] || 'https://via.placeholder.com/150',
        dateObj: b.pickupDateTime,
        nights: 0
      }));

      // Sort combined bookings by date descending
      const combinedBookings = [...allHotelBookings, ...allTourBookings, ...allCarBookings]
        .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

      // 3. Calculate avg stay based on hotels
      const hotelStays = allHotelBookings.filter(b => b.nights > 0);
      const avgStay = hotelStays.length > 0 
        ? parseFloat((hotelStays.reduce((acc, cur) => acc + cur.nights, 0) / hotelStays.length).toFixed(1)) 
        : 0;

      // 4. Determine Status (Simple Logic for now)
      let status: CustomerStatus = 'Lead';
      if (totalSpent > 10000) {
        status = 'VIP';
      } else if (combinedBookings.length > 0) {
        status = 'Active';
      } else if (user.updatedAt < new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) && combinedBookings.length > 0) {
        // If they had bookings but haven't been updated in 30 days
        status = 'Inactive';
      }

      // 5. Recent Activity Logs (Map DB logs to ActivityItem)
      const recentActivity: ActivityItem[] = user.activityLogs.map((log, i) => ({
        color: i === 0 ? 'bg-emerald-500' : 'bg-slate-500', 
        title: log.action || 'User Action',
        time: formatRelativeTime(log.createdAt)
      }));
      
      // Fallback activity if empty
      if (recentActivity.length === 0) {
        recentActivity.push({
          color: 'bg-green-500',
          title: 'Account Created',
          time: formatRelativeTime(user.createdAt)
        });
      }

      return {
        id: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email.split('@')[0],
        email: user.email,
        phone: user.phone || '+1 000-000-0000',
        // Mock data since missing from Prisma Schema:
        location: 'Global', 
        birthday: 'Unknown',
        status: status,
        totalSpent: totalSpent,
        bookingsCount: combinedBookings.length,
        avgStay: avgStay,
        avatar: user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.firstName || 'User')}&background=random`,
        isOnline: false, // Defaulting to false, maybe calculate based on last active logic or sessions if present
        lastActive: formatRelativeTime(user.updatedAt),
        preferences: ['Eco-Hotels', 'First Class'], // Mock
        notes: `User joined on ${new Date(user.createdAt).toLocaleDateString()}`, // Mock
        bookingHistory: combinedBookings.map(b => ({
          id: b.id,
          destination: b.destination,
          hotel: b.hotel,
          dates: b.dates,
          type: b.type,
          status: b.status,
          amount: b.amount,
          image: b.image
        })),
        recentActivity: recentActivity
      };
    });

    return customers;

  } catch (error) {
    console.error("Error fetching CRM customers:", error);
    return [];
  }
}

export async function updateCRMCustomer(id: string, data: Partial<Customer>) {
  try {
    // Only updating fields that exist in our schema:
    const updateData: Record<string, string | null> = {};
    if (data.name) {
      const parts = data.name.split(' ');
      updateData.firstName = parts[0];
      updateData.lastName = parts.slice(1).join(' ');
    }
    if (data.phone !== undefined) updateData.phone = data.phone;
    
    // Things like notes/location aren't in Prisma User model currently
    
    await prisma.user.update({
      where: { id },
      data: updateData
    });
    
    revalidatePath('/admin/crm');
    return { success: true };
  } catch (error) {
    console.error("Error updating CRM customer:", error);
    return { success: false, error: "Failed to update customer" };
  }
}

export async function deleteCRMCustomer(id: string) {
  try {
    await prisma.user.delete({
      where: { id }
    });
    revalidatePath('/admin/crm');
    return { success: true };
  } catch (error) {
    console.error("Error deleting CRM customer:", error);
    return { success: false, error: "Failed to delete customer" };
  }
}
