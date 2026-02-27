'use client';

import React, { useState } from 'react';
import { claimDailyReward, redeemReward } from '@/app/actions/loyalty';

export function ClaimButton({ canClaim }: { canClaim: boolean }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleClaim() {
    setLoading(true);
    setMessage(null);
    try {
      const result = await claimDailyReward();
      if (result.success) {
        setMessage('Successfully claimed 100 points!');
      } else {
        setMessage(result.error || 'Failed to claim reward');
      }
    } catch {
      setMessage('An error occurred');
    } finally {
      setLoading(false);
    }
  }

  if (!canClaim) {
    return (
      <button disabled className="w-full py-3 bg-white/10 text-slate-400 font-bold rounded-lg cursor-not-allowed uppercase tracking-widest text-sm border border-white/5">
        Claimed Today
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <button 
        onClick={handleClaim}
        disabled={loading}
        className={`w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all uppercase tracking-widest text-sm shadow-lg shadow-primary/20 ${loading ? 'opacity-50 cursor-wait' : ''}`}
      >
        {loading ? 'Claiming...' : 'Claim Daily Reward (+100)'}
      </button>
      {message && <p className={`text-[10px] text-center ${message.includes('Success') ? 'text-green-500' : 'text-primary'}`}>{message}</p>}
    </div>
  );
}

type Reward = { name: string; points: number; img: string; desc: string };

export function RedeemButton({ reward, userPoints }: { reward: Reward, userPoints: number }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);

  async function handleRedeem() {
    if (userPoints < reward.points) return;
    setLoading(true);
    setMessage(null);
    try {
      const result = await redeemReward(reward.name, reward.points);
      if (result.success) {
        window.location.href = `/portal/loyalty/redemption-successful?reward=${encodeURIComponent(reward.name)}&points=${reward.points}`;
      } else {
        setMessage(result.error || 'Failed to redeem');
        setLoading(false);
      }
    } catch {
      setMessage('An error occurred');
      setLoading(false);
    }
  }

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const closeAndReset = () => {
    setShowModal(false);
    setCode(['', '', '', '', '', '']);
    setMessage(null);
  };

  const canRedeem = userPoints >= reward.points;
  const isCodeComplete = code.every(c => c !== '');

  return (
    <div className="flex flex-col gap-2 w-full mt-auto">
      <button 
        onClick={() => setShowModal(true)}
        className={`w-full py-3 rounded-lg font-bold uppercase tracking-widest text-sm transition-all shadow-lg ${
          canRedeem 
            ? 'bg-white text-black hover:bg-primary hover:text-white hover:shadow-primary/20 cursor-pointer' 
            : 'bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 border border-white/5 cursor-pointer shadow-none'
        }`}
      >
        Redeem Now
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md">
          <div className="noise-overlay absolute inset-0"></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white dark:bg-[#141414] rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden text-left animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-100 dark:border-white/5">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Confirm Redemption</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Review your selection and authorize the points transfer.</p>
                </div>
                <button onClick={closeAndReset} disabled={loading} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Experience Preview */}
              <div className="flex flex-col sm:flex-row gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div 
                  className="w-full sm:w-1/3 aspect-video sm:aspect-square md:aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg shrink-0 overflow-hidden" 
                  style={{ backgroundImage: `url("${reward.img}")` }}
                ></div>
                <div className="flex flex-col justify-center">
                  <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Ultra-Exclusive</span>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{reward.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">{reward.desc}</p>
                </div>
              </div>

              {/* Points Breakdown */}
              <div className="space-y-3 bg-slate-50/50 dark:bg-black/20 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Current Balance</span>
                  <span className="text-slate-900 dark:text-white font-medium">{userPoints.toLocaleString()} <span className="text-[10px] opacity-60">PTS</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Points Required</span>
                  <span className="text-primary font-bold">- {reward.points.toLocaleString()} <span className="text-[10px] opacity-60">PTS</span></span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white font-bold text-sm">{canRedeem ? 'Remaining Balance' : 'Points Shortfall'}</span>
                  <span className={`font-bold ${canRedeem ? 'text-slate-900 dark:text-white' : 'text-red-500'}`}>
                    {canRedeem ? (userPoints - reward.points).toLocaleString() : (reward.points - userPoints).toLocaleString()} <span className="text-[10px] opacity-60">PTS</span>
                  </span>
                </div>
              </div>

              {/* Security Verification */}
              <div className={`space-y-3 ${!canRedeem ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-sm">shield_lock</span>
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider">Security Verification</h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs italic">
                  {canRedeem ? 'Enter your 6-digit security code to authorize this transaction.' : 'You need more points to unlock this reward.'}
                </p>
                <div className="flex gap-2 justify-between">
                  {code.map((c, i) => (
                    <React.Fragment key={i}>
                      <input 
                        id={`code-input-${i}`}
                        value={c}
                        onChange={(e) => handleCodeChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        className="w-10 sm:w-12 h-12 sm:h-14 text-center text-xl font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-900 dark:text-white" 
                        maxLength={1} 
                        type="text"
                        disabled={loading}
                      />
                      {i === 2 && <div className="flex items-center text-slate-300 dark:text-slate-600">—</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {message && (
                <div className={`p-3 rounded-lg text-sm font-medium text-center border ${message.includes('successfully') ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                  {message}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-6 bg-slate-50 dark:bg-white/5 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleRedeem}
                disabled={loading || !isCodeComplete || !canRedeem}
                className={`relative overflow-hidden flex-1 py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-lg transition-all active:scale-[0.98] ${
                  canRedeem
                    ? `bg-primary hover:bg-primary/90 text-white shadow-primary/20 after:content-[''] after:absolute after:-top-1/2 after:-left-[60%] after:w-1/5 after:h-[200%] after:bg-white/20 after:rotate-[30deg] hover:after:left-[120%] after:transition-all after:duration-700 ${loading || !isCodeComplete ? 'opacity-50 cursor-not-allowed hidden-after' : ''}`
                    : 'bg-slate-200 dark:bg-white/5 text-slate-400 cursor-not-allowed shadow-none'
                }`}
                style={loading || !isCodeComplete || !canRedeem ? { '--tw-content': 'none' } as React.CSSProperties : {}}
              >
                {loading ? 'Processing...' : (!canRedeem ? 'Insufficient Points' : 'Confirm & Redeem')}
              </button>
              <button 
                onClick={closeAndReset}
                disabled={loading}
                className="flex-1 bg-transparent border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
