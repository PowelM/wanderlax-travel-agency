"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';

const experiencesLinks = [
  { label: 'Destinations', href: '/tours', icon: 'explore', desc: 'World-class bespoke journeys' },
  { label: 'Luxury Hotels', href: '/hotels', icon: 'hotel', desc: 'Handpicked five-star stays' },
  { label: 'Elite Fleet', href: '/car-hire', icon: 'directions_car', desc: 'Premium private transport' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const memberLinks = [
  { label: 'Dashboard', href: '/portal/dashboard', icon: 'dashboard' },
  { label: 'Loyalty', href: '/portal/loyalty', icon: 'card_giftcard' },
  { label: 'Itinerary', href: '/portal/itinerary', icon: 'event_available' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const isActive = (href: string) => pathname === href;
  const isExperiencesActive = experiencesLinks.some(link => pathname === link.href);
  const isAdmin = userRole === 'ADMIN' || userRole === 'SUPER_ADMIN';

  // Fetch user role when signed in
  useEffect(() => {
    const checkRole = async () => {
      if (isSignedIn) {
        try {
          const res = await fetch('/api/auth/role');
          const data = await res.json();
          if (data.role) setUserRole(data.role);
        } catch {
          setUserRole(null);
        }
      } else {
        setUserRole(null);
      }
    };
    checkRole();
  }, [isSignedIn]);

  // Hide global header on admin pages (admin has its own sidebar)
  if (pathname.startsWith('/admin')) return null;

  const handleBookNow = () => {
    if (!isSignedIn) {
      router.push('/portal/login');
    } else {
      router.push('/tours');
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-black/60 backdrop-blur-xl px-6 py-4 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
          <div className="flex items-center justify-center size-9 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 transition-all">
            <span className="material-symbols-outlined text-2xl font-light">diamond</span>
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-white text-xl font-bold tracking-tight leading-none">Wanderlux</h2>
            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] leading-none mt-1">Bespoke Travel</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {/* Experiences Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen('experiences')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-all duration-300 py-2 ${
                isExperiencesActive || dropdownOpen === 'experiences'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Experiences
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${dropdownOpen === 'experiences' ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform duration-300 origin-left ${isExperiencesActive ? 'scale-x-100' : 'scale-x-0'}`}></span>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ${
              dropdownOpen === 'experiences' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <div className="p-4 bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="space-y-1">
                  {experiencesLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/item"
                    >
                      <div className="size-10 rounded-lg bg-surface-dark border border-white/5 flex items-center justify-center text-slate-400 group-hover/item:text-primary group-hover/item:border-primary/20 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[22px]">{link.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">{link.label}</span>
                        <span className="text-[11px] text-slate-500 font-medium">{link.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {companyLinks.map((link) => (
            <Link
              key={link.label}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative group overflow-hidden ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
              href={link.href}
            >
              {link.label}
              <span className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary transition-transform duration-300 origin-left ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          
          <SignedIn>
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            {memberLinks.map((link) => (
              <Link
                key={link.label}
                className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-slate-400 hover:text-white'
                }`}
                href={link.href}
              >
                <span className="material-symbols-outlined text-[18px] opacity-70 group-hover:opacity-100">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </SignedIn>
        </nav>

        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          <SignedOut>
            <Link
              href="/portal/login"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10"
            >
              <span className="material-symbols-outlined text-[20px]">login</span>
              Member Access
            </Link>
          </SignedOut>
          <SignedIn>
            {/* Admin Dashboard Button — only visible to admins */}
            {isAdmin ? (
              <Link
                href="/admin"
                className="hidden lg:flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-all bg-primary/10 hover:bg-primary px-4 py-2 rounded-lg border border-primary/20 hover:border-primary shadow-lg shadow-primary/5"
              >
                <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                Admin Panel
              </Link>
            ) : (
              <Link
                href="/portal/dashboard"
                className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-all border border-white/10 bg-white/5 rounded-lg px-4 py-2 hover:bg-white/10 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                Account
              </Link>
            )}
            <div className="h-8 w-px bg-white/10 mx-1 hidden lg:block"></div>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-9 h-9 border border-white/10 ring-2 ring-white/5 transition-transform hover:scale-105',
                },
              }}
            />
          </SignedIn>

            <button
              onClick={() => router.push('/portal/consultation')}
              className="hidden 2xl:flex items-center justify-center rounded-lg h-10 px-6 bg-transparent hover:bg-white/5 text-white text-sm font-bold border border-white/20 transition-all hover:border-white/40"
            >
              Concierge
            </button>
            <button
              onClick={handleBookNow}
              className="hidden sm:flex items-center justify-center rounded-xl h-10 px-6 bg-primary hover:bg-red-700 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Reserve Experience
            </button>
          
          {/* Mobile menu toggle */}
          <button
            className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined leading-none">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col pt-32 px-8 overflow-y-auto animate-fade-in-up scrollbar-hide">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 size-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="space-y-8 pb-12">
            <div>
              <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-6 opacity-80">Experiences</p>
              <div className="grid gap-4">
                {experiencesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined">{link.icon}</span>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-6 opacity-80">Company</p>
              <div className="flex flex-col gap-6">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    className="text-2xl font-black text-white hover:text-primary transition-colors"
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <SignedIn>
                <div className="grid gap-6">
                  {memberLinks.map((link) => (
                    <Link
                      key={link.label}
                      className="flex items-center gap-4 text-2xl font-black text-slate-400 hover:text-white transition-colors"
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[32px]">{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                  {isAdmin && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-4 text-2xl font-black text-primary hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[32px]">admin_panel_settings</span>
                      Admin Panel
                    </Link>
                  )}
                </div>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/portal/login"
                  className="flex items-center gap-4 text-2xl font-black text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-[32px]">login</span>
                  Login
                </Link>
              </SignedOut>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); handleBookNow(); }}
              className="w-full flex items-center justify-center rounded-2xl h-16 bg-primary hover:bg-red-700 text-white text-lg font-black transition-all shadow-xl shadow-primary/30 mt-4"
            >
              Reserve Experience
            </button>
          </div>
        </div>
      )}
    </>
  );
}
