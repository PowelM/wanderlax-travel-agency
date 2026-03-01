import React from 'react';
import { currentUser, auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { ActivityLog } from '@prisma/client';
import { ClaimButton, RedeemButton } from './LoyaltyButtons';

export default async function LoyaltyRewardsPointsLedgerIntegratedPage() {
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

  if (!user) {
    redirect('/portal/login');
  }

  const primaryEmail = user.emailAddresses?.[0]?.emailAddress || '';
  const dbUser = await prisma.user.upsert({
    where: { clerkId: user.id },
    update: {},
    create: {
      clerkId: user.id,
      email: primaryEmail,
      firstName: user.firstName,
      lastName: user.lastName,
      avatarUrl: user.imageUrl,
      role: 'CUSTOMER',
    },
    include: {
      activityLogs: {
        where: { module: 'LOYALTY' },
        orderBy: { createdAt: 'desc' },
        take: 10
      }
    }
  });

  const loyaltyPoints = dbUser.loyaltyPoints || 0;
  
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  
  const lastRewardClaim = await prisma.activityLog.findFirst({
    where: {
      userId: dbUser.id,
      action: 'CLAIM_DAILY_REWARD',
      createdAt: { gte: twentyFourHoursAgo }
    }
  });
  
  const canClaimReward = !lastRewardClaim;

  let tier = "Bronze";
  let pointsToNext = 0;
  let nextTier = "Silver";
  let progress = 0;

  if (loyaltyPoints < 1000) {
    tier = "Bronze";
    nextTier = "Silver";
    pointsToNext = 1000 - loyaltyPoints;
    progress = (loyaltyPoints / 1000) * 100;
  } else if (loyaltyPoints < 5000) {
    tier = "Silver";
    nextTier = "Gold";
    pointsToNext = 5000 - loyaltyPoints;
    progress = ((loyaltyPoints - 1000) / 4000) * 100;
  } else if (loyaltyPoints < 10000) {
    tier = "Gold";
    nextTier = "Platinum";
    pointsToNext = 10000 - loyaltyPoints;
    progress = ((loyaltyPoints - 5000) / 5000) * 100;
  } else if (loyaltyPoints < 25000) {
    tier = "Platinum";
    nextTier = "Emerald";
    pointsToNext = 25000 - loyaltyPoints;
    progress = ((loyaltyPoints - 10000) / 15000) * 100;
  } else if (loyaltyPoints < 50000) {
    tier = "Emerald";
    nextTier = "Diamond";
    pointsToNext = 50000 - loyaltyPoints;
    progress = ((loyaltyPoints - 25000) / 25000) * 100;
  } else {
    tier = "Diamond";
    nextTier = "";
    pointsToNext = 0;
    progress = 100;
  }

  const memberSince = dbUser.createdAt ? new Date(dbUser.createdAt).getFullYear() : now.getFullYear();

  return (
    <div className="stitch-screen">
      <div className="noise-overlay"></div>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pt-[72px]">
        <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 w-full">

          {/* Hero / Tier Banner */}
          <section className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[120px] text-primary">diamond</span>
              </div>
              <div className="relative z-10">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-2 border-primary" 
                  style={{ backgroundImage: `url('${dbUser.avatarUrl || 'https://via.placeholder.com/150'}')` }}
                ></div>
              </div>
              <div className="flex-1 flex flex-col gap-4 text-center md:text-left relative z-10">
                <div>
                  <h1 className="text-editorial text-5xl font-bold text-white mb-2 uppercase italic tracking-tighter">{tier} Tier</h1>
                  <p className="text-slate-400 text-lg">{dbUser.firstName} {dbUser.lastName} • Member since {memberSince}</p>
                </div>
                <div className="w-full max-w-md">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-slate-300">Points to {nextTier || 'Max'} Level</span>
                    <span className="text-sm font-bold text-white">{loyaltyPoints.toLocaleString()} / {(loyaltyPoints + pointsToNext).toLocaleString()}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {pointsToNext > 0 
                      ? `Just ${pointsToNext.toLocaleString()} points remaining to unlock ${nextTier} benefits`
                      : `You have reached the highest tier! Enjoy your legendary status.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 relative z-10 min-w-[200px]">
                <ClaimButton canClaim={canClaimReward} />
                <a href="#history" className="w-full py-3 bg-white/5 hover:bg-white/10 text-center text-white font-bold rounded-lg border border-white/10 transition-all uppercase tracking-widest text-sm">
                  View Activity
                </a>
              </div>
            </div>
          </section>
          
          {/* How to Earn Section */}
          <section className="mb-20">
            <div className="flex flex-col gap-8">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-3xl font-bold text-white uppercase tracking-tight">How to Earn</h2>
                <p className="text-slate-400">Maximize your rewards on every luxury booking</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">travel_explore</span>
                  <h3 className="text-xl font-bold text-white uppercase italic">Bespoke Tours</h3>
                  <p className="text-slate-400">Earn 10 points for every $1 spent on curated global experiences.</p>
                </div>
                <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">hotel</span>
                  <h3 className="text-xl font-bold text-white uppercase italic">Luxury Hotels</h3>
                  <p className="text-slate-400">Earn 5 points for every $1 spent on partner 5-star accommodations.</p>
                </div>
                <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">directions_car</span>
                  <h3 className="text-xl font-bold text-white uppercase italic">Elite Transport</h3>
                  <p className="text-slate-400">Earn 3 points for every $1 spent on chauffeur and car hires.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tier Benefits Comparison */}
          <section className="mb-20">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Tier Benefits</h2>
            </div>
            <div className="overflow-x-auto rounded-xl glass-card">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Benefit</th>
                    <th className={`p-6 text-sm font-bold uppercase tracking-widest ${tier === 'Bronze' ? 'text-primary italic' : 'text-slate-300'}`}>Bronze</th>
                    <th className={`p-6 text-sm font-bold uppercase tracking-widest ${tier === 'Silver' ? 'text-primary italic' : 'text-slate-300'}`}>Silver</th>
                    <th className={`p-6 text-sm font-bold uppercase tracking-widest ${tier === 'Gold' ? 'text-primary italic' : 'text-slate-300'}`}>Gold</th>
                    <th className={`p-6 text-sm font-bold uppercase tracking-widest ${tier === 'Platinum' ? 'text-primary italic' : 'text-slate-300'}`}>Platinum</th>
                    <th className={`p-6 text-sm font-bold uppercase tracking-widest ${tier === 'Emerald' ? 'text-primary italic' : 'text-slate-300'}`}>Emerald</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-6 font-medium text-white">Concierge Access</td>
                    <td className="p-6 text-slate-500 text-sm">Online only</td>
                    <td className="p-6 text-slate-400 text-sm">24/7 Phone</td>
                    <td className="p-6 text-slate-400 text-sm">Priority Support</td>
                    <td className="p-6 text-slate-300 text-sm">Dedicated Agent</td>
                    <td className="p-6 text-white text-sm font-bold italic">Personal Assistant</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-white">Private Jet Upgrades</td>
                    <td className="p-6 text-slate-500 text-sm">None</td>
                    <td className="p-6 text-slate-500 text-sm">Discounted</td>
                    <td className="p-6 text-slate-400 text-sm">Annual Credit</td>
                    <td className="p-6 text-slate-300 text-sm">Bi-Annual Flight</td>
                    <td className="p-6 text-white text-sm font-bold italic">Unlimited Priority</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-white">Luxury Chauffeur</td>
                    <td className="p-6 text-slate-500 text-sm">None</td>
                    <td className="p-6 text-slate-400 text-sm">Airport Only</td>
                    <td className="p-6 text-slate-400 text-sm">Airport & Hotel</td>
                    <td className="p-6 text-slate-300 text-sm">City-wide</td>
                    <td className="p-6 text-white text-sm font-bold italic">Global On-Demand</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rewards Gallery */}
          <section className="mb-20">
            <div className="border-l-4 border-primary pl-6 mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Rewards Gallery</h2>
                <p className="text-slate-400">Exclusive experiences for your consideration</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Private Island Dinner', points: 50000, img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80', desc: 'A secluded 5-course feast under the stars in the Maldives.' },
                { name: 'Helicopter Transfer', points: 25000, img: 'https://images.unsplash.com/photo-1540944158204-287d4ad0dc0c?auto=format&fit=crop&q=80', desc: 'Avoid the traffic with a panoramic flight to your destination.' },
                { name: 'Royal Suite Stay', points: 75000, img: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80', desc: 'Two nights in the flagship suite of our Amalfi Coast partner.' }
              ].map((reward) => (
                <div key={reward.name} className="group relative overflow-hidden rounded-xl h-[450px] border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${reward.img}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <span className="bg-primary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest self-start shadow-lg">
                        {reward.points.toLocaleString()} Points
                      </span>
                      <h3 className="text-2xl font-bold text-white uppercase italic">{reward.name}</h3>
                      <p className="text-slate-300 text-sm">{reward.desc}</p>
                    </div>
                    <RedeemButton reward={reward} userPoints={loyaltyPoints} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Points History */}
          <section id="history" className="mb-20 scroll-mt-24">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Points History</h2>
              <p className="text-slate-400">Your recent earning and redemption activity</p>
            </div>
            
            {dbUser.activityLogs.length > 0 ? (
              <div className="overflow-x-auto rounded-xl glass-card">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Date</th>
                      <th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Action</th>
                      <th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Details</th>
                      <th className="p-6 text-sm font-bold uppercase tracking-widest text-slate-400">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {dbUser.activityLogs.map((log: ActivityLog) => {
                      const details = (log.details as { reward?: string, points?: number }) || {};
                      const isPositive = log.action === 'CLAIM_DAILY_REWARD' || log.action?.includes('EARN');
                      return (
                        <tr key={log.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-6 text-slate-400 text-sm">
                            {new Date(log.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-6">
                            <span className="text-white font-medium uppercase text-xs tracking-wider">
                              {log.action.replace(/_/g, ' ')}
                            </span>
                          </td>
                          <td className="p-6 text-slate-400 text-sm">
                            {details.reward || rewardDetails(log.action)}
                          </td>
                          <td className="p-6">
                            <span className={`font-bold text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                              {isPositive ? '+' : '-'}{details.points ?? 0}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl glass-card text-center p-20">
                <span className="material-symbols-outlined text-4xl text-slate-600 mb-4">history</span>
                <p className="text-white font-medium">No points history yet</p>
                <p className="text-slate-400 text-sm">Start earning points with your first booking.</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

function rewardDetails(action: string) {
  switch (action) {
    case 'CLAIM_DAILY_REWARD': return 'Daily loyalty check-in';
    case 'BOOKING_EARN': return 'Points from travel booking';
    default: return 'Loyalty adjustment';
  }
}
