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

  const avatarUrl = user?.imageUrl || dbUser?.avatarUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoramFqJhMsa0mC4aFilbg8kHsESJfaaKZnK0GybCNxPOzlkuz1CkMQLzSO94GnuQ-woVxXkNsd22xBSx6Zlu-NilL79gw38yQtjm0DEUkf1fmepl6vq6qBpWXxC-KyzTuQGNhYo98zUiY9c1FB6yLMbjio3dA-22989vG7Db9ToYL7EzeniaqAK1keBQuehPyfLb4eXyCbHWmJka_Rz5kaJU0xWRYYURCWr3MIEq4BE-xsJ-72EG_Jb0nM6BdCwIGLVnFHBEsCg';
  const firstName = dbUser?.firstName || user?.firstName || 'Julian';
  const lastName = dbUser?.lastName || user?.lastName || 'Ashford';
  const fullName = `${firstName} ${lastName}`.trim() || 'Julian Ashford';
  
  const totalJourneys = dbUser?.bookings?.length || 0;
  // Calculate total miles mock logic
  const totalMiles = totalJourneys > 0 ? (totalJourneys * 3500).toLocaleString() : '0';
  
  const memberSince = dbUser?.createdAt 
    ? new Date(dbUser.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : 'Nov 2021';
    
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

  const activeBookings = dbUser?.bookings?.filter((b: any) => b.status === 'CONFIRMED' || b.status === 'PENDING') || [];
  
  // Format upcoming journeys
  const upcomingJourneys = activeBookings.map((b: any) => {
    let destination = 'Journey';
    let type = 'Travel';
    let image = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828';
    let duration = '';
    
    if (b.tourBooking) {
      destination = b.tourBooking.tourPackage?.title || 'Tour';
      type = 'Tour';
      duration = `${b.tourBooking.tourPackage?.durationDays || 7} Days`;
      const images = b.tourBooking.tourPackage?.images;
      if (images && images.length > 0) image = images[0];
    } else if (b.hotelBooking) {
      destination = b.hotelBooking.hotel?.name || 'Hotel';
      type = 'Hotel';
      duration = 'Stay';
      const images = b.hotelBooking.hotel?.images;
      if (images && images.length > 0) image = images[0];
    } else if (b.carHireBooking) {
      destination = b.carHireBooking.car ? `${b.carHireBooking.car.make} ${b.carHireBooking.car.model}` : 'Car Hire';
      type = 'Car Hire';
      duration = 'Rental';
      const images = b.carHireBooking.car?.images;
      if (images && images.length > 0) image = images[0];
    }
    
    return {
      id: b.id,
      destination,
      duration,
      status: b.status,
      image,
      type
    };
  });

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
              upcomingJourneys.map((journey: any) => (
                <div key={journey.id} className="min-w-[320px] md:min-w-[400px] snap-start glass-panel rounded-3xl overflow-hidden group border border-border-dark hover:border-primary/30 transition-all">
                  <div className="h-56 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${journey.image}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-10">
                      <p className={`text-[10px] font-bold ${journey.status === 'CONFIRMED' ? 'text-green-400' : 'text-primary'} uppercase tracking-widest flex items-center gap-1`}>
                        {journey.status === 'CONFIRMED' ? (
                          <>
                            <span className="material-symbols-outlined text-xs">check_circle</span> {journey.status}
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-xs">timer</span> {journey.status}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-100 tracking-tight">{journey.destination}</h4>
                        <p className="text-primary font-medium text-sm">{journey.type} • {journey.duration}</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-500">more_vert</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed italic">"A bespoke curated experience designed for Wanderlux elite travelers."</p>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex -space-x-3">
                        <div className="size-8 rounded-full border-2 border-background-dark bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMX0WKh8H9dwnm3yLSc7tkFlOSeFaWmXs51Y84C6IvaxJBzmczx5HY-oBdHS8ZEP0Xge4rMiyu4EfjXmZ_jEVxRbWPdrbqMyDEz8fnxyG2IkGJ99fSoFrJfx6CU1SjZpGomt5iT-yk4k0xdpdILQWLKTln4UDPjRFEObnMzIyoJzkH3ZD2hgeNGImWA7UkF-VoRe7LWgDwYkfJ_GKOxe_NqGlhi5GqpTApMDzd4sDpAd_sjP5_mlbbxJ8IBIcsYihTIQfycPdwug')" }}></div>
                        <div className="size-8 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-[10px] font-black text-white">+1</div>
                      </div>
                      <Link href="/portal/itinerary" className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center">
                        View Itinerary
                      </Link>
                    </div>
                  </div>
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
                dbUser.activityLogs.map((log: any) => (
                  <div key={log.id} className="glass-panel flex items-center gap-6 p-5 rounded-2xl hover:border-primary/40 hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="size-12 min-w-[48px] rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">{log.module === 'BOOKING' ? 'receipt_long' : log.module === 'LOYALTY' ? 'loyalty' : 'event'}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-100 font-bold">{log.action}</p>
                      <p className="text-xs text-slate-500">{new Date(log.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Logged</p>
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
