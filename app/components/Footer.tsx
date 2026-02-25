import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-border-dark pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            {/* Footer logo */}
            <Link href="/" className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity">
              <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-2xl">diamond</span>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">Wanderlux</h2>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Crafting unforgettable journeys for the world&apos;s most discerning travelers since 2010.
            </p>
            <div className="flex gap-4">
              <a className="text-text-muted hover:text-white transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a className="text-text-muted hover:text-white transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.944 2.013 9.278 2 12 2h.315zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-8.67a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fillRule="evenodd"></path></svg>
              </a>
              <a className="text-text-muted hover:text-white transition-colors" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/about">About Us</Link></li>
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/contact">Careers</Link></li>
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/about">Press</Link></li>
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/contact">Affiliates</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/contact">Help Center</Link></li>
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/about">Terms of Service</Link></li>
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/about">Privacy Policy</Link></li>
              <li><Link className="text-text-muted hover:text-white transition-colors text-sm" href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5 text-lg">location_on</span>
                <span className="text-text-muted text-sm">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <a href="tel:+18001234567" className="text-text-muted text-sm hover:text-white transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a href="mailto:concierge@wanderlux.com" className="text-text-muted text-sm hover:text-white transition-colors">concierge@wanderlux.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">&copy; 2025 Wanderlux Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-text-muted hover:text-white text-xs transition-colors" href="/about">Privacy</Link>
            <Link className="text-text-muted hover:text-white text-xs transition-colors" href="/about">Terms</Link>
            <Link className="text-text-muted hover:text-white text-xs transition-colors" href="/tours">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
