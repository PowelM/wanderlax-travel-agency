"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';

const navLinks = [
  { label: 'Destinations', href: '/tours' },
  { label: 'Experiences', href: '/tours' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const isActive = (href: string) => pathname === href;

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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border-dark/50 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity">
          <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-2xl">diamond</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">Wanderlux</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-white border-b-2 border-primary pb-0.5'
                  : 'text-slate-300 hover:text-white'
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          <SignedOut>
            <Link
              href="/portal/login"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/portal/profile"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
              Profile
            </Link>
            <Link
              href="/portal/dashboard"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              My Portal
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }}
            />
          </SignedIn>

          <button
            onClick={handleBookNow}
            className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-red-700 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(198,16,16,0.3)] hover:shadow-[0_0_20px_rgba(198,16,16,0.5)]"
          >
            Book Now
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 pt-20 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-white text-2xl font-semibold hover:text-primary transition-colors"
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <SignedOut>
            <Link
              href="/portal/login"
              className="text-white text-2xl font-semibold hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/portal/profile"
              className="text-white text-2xl font-semibold hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/portal/dashboard"
              className="text-white text-2xl font-semibold hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Portal
            </Link>
          </SignedIn>
          <button
            onClick={() => { setMobileMenuOpen(false); handleBookNow(); }}
            className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-red-700 text-white font-bold transition-all mt-4"
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
}
