'use client';

import Link from 'next/link';
import { useState } from 'react';
import { shop } from '@/lib/shop';

const nav = [
  { href: '/',                    label: 'Home',         icon: '🏠' },
  { href: '/gallery',             label: 'Gallery',      icon: '📸' },
  { href: '/collections',         label: 'Collections',  icon: '💎' },
  { href: '/collections/pendant', label: 'Lockets',      icon: '📿' },
  { href: '/collections/payal',   label: 'Payals',       icon: '👣' },
  { href: '/about',               label: 'About',        icon: 'ℹ️' },
  { href: '/contact',             label: 'Contact',      icon: '📞' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-gold-200 sticky top-0 z-40 backdrop-blur-sm bg-cream/95">
      {/* Top bar */}
      <div className="container mx-auto px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.svg"
            alt="Anurag Jewellers"
            className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow"
          />
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
              className="text-stone-700 hover:text-maroon-700 transition-colors text-[13px] uppercase tracking-wider font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${shop.phones[0].replace(/\s/g, '')}`}
            className="hidden sm:inline-flex btn-primary text-xs sm:text-sm !px-3 !py-2"
          >
            📞 {shop.phones[0]}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="sm:hidden w-11 h-11 inline-flex items-center justify-center rounded-full bg-gold-gradient text-white shadow-gold"
          >
            <span className="text-xl">{open ? '✕' : '☰'}</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="hidden sm:inline-flex lg:hidden w-11 h-11 items-center justify-center rounded-full border border-gold-300 bg-white"
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
              <div className="flex-1 text-base font-medium text-maroon-700">{item.label}</div>
              <span className="text-gold-700">›</span>
            </Link>
          ))}
        </nav>
      )}

      {/* Mobile horizontal scroll nav */}
      {!open && (
        <nav className="lg:hidden flex overflow-x-auto gap-1 px-2 py-2 border-t border-gold-100 bg-cream scrollbar-hide">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg active:bg-gold-100 min-w-[68px]"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[11px] text-stone-700 whitespace-nowrap leading-tight">{item.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
