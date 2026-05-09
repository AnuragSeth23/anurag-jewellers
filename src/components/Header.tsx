'use client';

import Link from 'next/link';
import { useState } from 'react';
import { shop } from '@/lib/shop';

const nav = [
  { href: '/',                 hi: 'मुख्य पृष्ठ',  en: 'Home',     icon: '🏠' },
  { href: '/gallery',          hi: 'पूरी गैलरी',  en: 'Gallery',   icon: '📸' },
  { href: '/collections',      hi: 'सभी ज्वैलरी', en: 'Collections', icon: '💎' },
  { href: '/collections/pendant',  hi: 'लॉकेट / पेंडेंट', en: 'Lockets',  icon: '📿' },
  { href: '/collections/payal',    hi: 'पायल',    en: 'Payals',    icon: '👣' },
  { href: '/about',            hi: 'हमारे बारे में', en: 'About',  icon: 'ℹ️' },
  { href: '/contact',          hi: 'संपर्क',      en: 'Contact',   icon: '📞' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-gold-200 sticky top-0 z-40 backdrop-blur-sm bg-cream/95">
      {/* Top bar */}
      <div className="container mx-auto px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-shine flex items-center justify-center shadow-gold shrink-0">
            <span className="text-maroon-700 text-xl sm:text-2xl hindi font-bold">अ</span>
          </div>
          <div className="leading-tight min-w-0">
            <div className="hindi text-base sm:text-xl font-bold maroon-text truncate">{shop.nameHi}</div>
            <div className="text-[9px] sm:text-[11px] tracking-[.2em] uppercase text-gold-700 truncate">
              {shop.nameEn} · Since {shop.establishedYear}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-stone-700 hover:text-maroon-700 transition-colors flex flex-col items-center"
            >
              <span className="hindi text-[13px]">{item.hi}</span>
              <span className="text-[10px] uppercase tracking-wider text-gold-700">{item.en}</span>
            </Link>
          ))}
        </nav>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${shop.phones[0].replace(/\s/g, '')}`}
            className="hidden sm:inline-flex btn-primary text-xs sm:text-sm !px-3 !py-2"
          >
            📞 {shop.phones[0]}
          </a>
          {/* Mobile call button */}
          <a
            href={`tel:${shop.phones[0].replace(/\s/g, '')}`}
            aria-label="Call"
            className="sm:hidden inline-flex items-center justify-center bg-gold-gradient text-white w-11 h-11 rounded-full shadow-gold"
          >
            📞
          </a>
          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-gold-300 bg-white"
          >
            <span className="text-xl maroon-text">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile expanded menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-gold-200 shadow-lg">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-4 border-b border-gold-100 active:bg-gold-50"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1">
                <div className="hindi text-base font-medium text-maroon-700">{item.hi}</div>
                <div className="text-[10px] uppercase tracking-wider text-gold-700">{item.en}</div>
              </div>
              <span className="text-gold-700">›</span>
            </Link>
          ))}
        </nav>
      )}

      {/* Mobile horizontal scroll nav (always visible, big tap targets) */}
      {!open && (
        <nav className="lg:hidden flex overflow-x-auto gap-1 px-2 py-2 border-t border-gold-100 bg-cream scrollbar-hide">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg active:bg-gold-100 min-w-[68px]"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hindi text-[11px] text-stone-700 whitespace-nowrap leading-tight">{item.hi}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
