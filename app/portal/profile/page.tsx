import React from 'react';
import Link from 'next/link';
import { currentUser, auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function TravelerProfileDashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/portal/login');
  }

  let user = null;
  try {
    user = await currentUser();
  } catch (err: unknown) {
    console.error("Clerk currentUser() Error:", err);
  }

  let dbUser = null;
  
  if (user) {
    try {
      dbUser = await prisma.user.findUnique({
        where: { clerkId: user.id },
        include: {
          bookings: {
            include: {
              tourBooking: { include: { tourPackage: true } },
              hotelBooking: { include: { hotel: true } },
              carHireBooking: { include: { car: true } },
            },
            orderBy: { createdAt: 'desc' },
          },
          activityLogs: {
            orderBy: { createdAt: 'desc' },
            take: 5
          },
          wishlistItems: true
        }
      });
    } catch (prismaError) {
      console.error("Prisma error in profile:", prismaError);
    }
  }

  const avatarUrl = user?.imageUrl || dbUser?.avatarUrl || '';
  const firstName = dbUser?.firstName || user?.firstName || '';
  const lastName = dbUser?.lastName || user?.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim() || 'Traveler';
  
  const totalJourneys = dbUser?.bookings?.length || 0;
  // Calculate total miles logic
  const totalMiles = totalJourneys > 0 ? (totalJourneys * 0).toLocaleString() : '0';
  
  const memberSince = dbUser?.createdAt 
    ? new Date(dbUser.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : '';
    
  const loyaltyPoints = dbUser?.loyaltyPoints || 0;
  let loyaltyTier = 'Silver Tier';
  let loyaltyColor = 'text-slate-400';
  let loyaltyIcon = 'star';
  
  if (loyaltyPoints >= 10000) {
    loyaltyTier = 'Diamond Tier';
    loyaltyColor = 'text-blue-400';
    loyaltyIcon = 'diamond';
  } else if (loyaltyPoints >= 5000) {
    loyaltyTier = 'Emerald Tier';
    loyaltyColor = 'text-primary';
    loyaltyIcon = 'diamond';
  } else if (loyaltyPoints >= 2000) {
    loyaltyTier = 'Gold Tier';
    loyaltyColor = 'text-yellow-500';
    loyaltyIcon = 'vpn_key';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeBookings = dbUser?.bookings?.filter((b: any) => b.status === 'CONFIRMED' || b.status === 'PENDING') || [];
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upcomingJourneys = activeBookings.map((b: any) => {
    let serviceName = 'Travel Service';
    let destination = 'Global Destination';
    let date = 'TBD';
    let image = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800';
    let link = '#';

    if (b.tourBooking?.tourPackage) {
      serviceName = b.tourBooking.tourPackage.title;
      destination = `${b.tourBooking.tourPackage.destination.name}, ${b.tourBooking.tourPackage.destination.country}`;
      date = new Date(b.tourBooking.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      image = b.tourBooking.tourPackage.images?.[0] || image;
      link = `/tours/${b.tourBooking.tourPackage.slug}`;
    } else if (b.hotelBooking?.hotel) {
      serviceName = b.hotelBooking.hotel.name;
      destination = `${b.hotelBooking.hotel.destination.name}, ${b.hotelBooking.hotel.destination.country}`;
      date = new Date(b.hotelBooking.checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      image = b.hotelBooking.hotel.images?.[0] || image;
      link = `/hotels/${b.hotelBooking.hotel.slug}`;
    } else if (b.carHireBooking?.car) {
      serviceName = `${b.carHireBooking.car.make} ${b.carHireBooking.car.model}`;
      destination = b.carHireBooking.pickupLocation;
      date = new Date(b.carHireBooking.pickupDateTime).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      image = b.carHireBooking.car.images?.[0] || image;
      link = `/car-hire`;
    }

    return { id: b.id, serviceName, destination, date, image, link };
  }).slice(0, 3);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-[72px]" style={{
      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARCIXkZm5F6XkZAOOmBICJhd34HHPVy94jLTbir49wOoCF2Aw76vqdqXrloFxKbPXRedT5SqriIfax-raO-1SbNlyipBV7aEMFS5xvohTyZF5zsYdh94tXEZR2bl-_SaeiJ-0Pmrcr9rnE2glRT2gqVv0tVqvVOmLb3xdN2Cf3Wo_oRAjQOhXuXGDg4uNXxDeOyJhlsAgGVoNEvIDK5hE10kUaQc9PSJDi51zKrD6yvlxnSvUfItSLaBgRyT1ukAywi1VbamC-OA')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 md:py-16 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex flex-col @container">
              <div className="flex flex-col @[520px]:flex-row gap-8 items-center @[520px]:items-end">
                <div className="relative">
                  <div className="size-32 rounded-2xl border-4 border-primary/30 p-1 bg-background-dark/80 backdrop-blur-sm">
                    <div 
                      className="w-full h-full rounded-xl bg-cover bg-center" 
                      style={{ backgroundImage: `url('${avatarUrl}')` }}
                    ></div>
                  </div>
                  {loyaltyPoints >= 5000 && (
                  <div className="absolute -bottom-3 -right-3 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                      VIP
                  </div>
                  )}
                </div>
                <div className="flex-1 text-center @[520px]:text-left">
                  <h1 className="text-4xl md:text-5xl font-black text-slate-100 tracking-tighter mb-2 uppercase">{fullName}</h1>
                  <div className="flex flex-wrap justify-center @[520px]:justify-start gap-4 items-center">
                    <span className={`flex items-center gap-2 ${loyaltyColor} font-bold tracking-widest text-sm uppercase`}>
                      <span className="material-symbols-outlined text-sm">{loyaltyIcon}</span>
                      {loyaltyTier}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-600 hidden sm:block"></span>
                    <span className="text-slate-400 text-sm italic">Member since {memberSince}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">travel_explore</span>
              <div>
                <p className="text-3xl font-black text-slate-100">{totalJourneys}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total Journeys</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">flight_takeoff</span>
              <div>
                <p className="text-3xl font-black text-slate-100">{totalMiles}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total Miles</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2">Portfolio</h2>
              <h3 className="text-3xl font-extrabold text-slate-100 tracking-tight">Upcoming Journeys</h3>
            </div>
            <div className="flex gap-2">
              <button title="Previous" className="size-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button title="Next" className="size-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors text-primary">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x">
            {upcomingJourneys.length > 0 ? (
                  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                  upcomingJourneys.map((journey: any) => (
                    <div key={journey.id} className="group relative rounded-2xl overflow-hidden border border-border-dark flex items-end h-48 sm:h-64 min-w-[320px] md:min-w-[400px] snap-start">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={journey.image} alt={journey.serviceName} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                      <div className="relative p-6 w-full">
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1 shadow-black drop-shadow-md">{journey.date}</p>
                        <h4 className="text-xl font-bold text-white mb-1 shadow-black drop-shadow-md">{journey.serviceName}</h4>
                        <p className="text-slate-300 text-sm flex items-center gap-1 shadow-black drop-shadow-md">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {journey.destination}
                        </p>
                      </div>
                      <Link href={journey.link} className="absolute inset-0 z-10">
                        <span className="sr-only">View {journey.serviceName}</span>
                      </Link>
                    </div>
                  ))
            ) : (
              <div className="w-full glass-panel border border-dashed border-border-dark rounded-xl p-12 text-center">
                <span className="material-symbols-outlined text-4xl text-slate-600 mb-4">explore</span>
                <p className="text-white font-medium mb-1">No upcoming journeys</p>
                <p className="text-slate-400 text-sm mb-6">Ready to explore the world? Start planning your next adventure today.</p>
                <Link href="/tours" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
                  Browse Destinations
                </Link>
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <section className="lg:col-span-2">
            <div className="mb-8 border-b border-primary/10 pb-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wider">Recent Activity</h3>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All Log</button>
            </div>
            
            <div className="space-y-4">
              {dbUser?.activityLogs && dbUser.activityLogs.length > 0 ? (
                  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                  dbUser?.activityLogs?.slice(0, 5).map((log: any) => (
                    <div key={log.id} className="flex gap-4 p-4 rounded-xl hover:bg-surface-dark transition-colors border border-transparent hover:border-border-dark group">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">{log.module === 'BOOKINGS' ? 'flight_takeoff' : log.module === 'AUTH' ? 'login' : 'history'}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-300"><span className="font-semibold text-white">{log.action}</span> - {log.module}</p>
                        <p className="text-xs text-slate-500 mt-1">{new Date(log.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="glass-panel flex items-center gap-6 p-5 rounded-2xl hover:border-primary/40 hover:bg-white/5 transition-colors group cursor-pointer">
                  <div className="size-12 min-w-[48px] rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">person_add</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-100 font-bold">Account Created</p>
                    <p className="text-xs text-slate-500">{memberSince}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Completed</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="mb-8 border-b border-primary/10 pb-4">
              <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wider">Settings</h3>
            </div>
            
            <div className="glass-panel p-2 rounded-2xl">
              <div className="flex flex-col">
                <Link href="/portal/profile/edit" className="flex items-center gap-4 px-6 py-4 rounded-xl bg-primary text-white font-bold transition-all shadow-lg shadow-primary/20 hover:bg-red-700">
                  <span className="material-symbols-outlined text-xl">person</span>
                  <span className="text-sm">Personal Info</span>
                  <span className="material-symbols-outlined ml-auto text-sm">chevron_right</span>
                </Link>
                <Link href="/portal/wishlist" className="flex items-center gap-4 px-6 py-4 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                  <span className="text-sm">Wishlist & Preferences</span>
                  <span className="material-symbols-outlined ml-auto text-sm">chevron_right</span>
                </Link>
                <Link href="/portal/loyalty" className="flex items-center gap-4 px-6 py-4 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all border-b border-white/5 pb-4">
                  <span className="material-symbols-outlined text-xl">star</span>
                  <span className="text-sm">Loyalty Status</span>
                  <span className="material-symbols-outlined ml-auto text-sm">chevron_right</span>
                </Link>
                <Link href="/portal/dashboard" className="flex items-center gap-4 px-6 py-4 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all">
                  <span className="material-symbols-outlined text-xl">dashboard</span>
                  <span className="text-sm">Dashboard</span>
                  <span className="material-symbols-outlined ml-auto text-sm">chevron_right</span>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/30 to-background-dark border border-primary/20 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-white font-bold mb-2">Concierge Access</h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">Dedicated diamond-level assistance available 24/7 for bespoke requests.</p>
                <Link href="/contact" className="block w-full text-center bg-white text-background-dark py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-colors">
                  Contact Advisor
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 text-primary/10 scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-700">
                <span className="material-symbols-outlined text-[120px]">support_agent</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
