import Link from 'next/link';
import { shop } from '@/lib/shop';

const nav = [
  { href: '/',                 hi: 'मुख्य पृष्ठ',  en: 'Home' },
  { href: '/gallery',          hi: 'पूरी गैलरी',  en: 'Gallery' },
  { href: '/collections',      hi: 'सभी ज्वैलरी', en: 'Collections' },
  { href: '/collections/pendant',  hi: 'लॉकेट / पेंडेंट', en: 'Lockets' },
  { href: '/collections/payal',    hi: 'पायल',    en: 'Payals' },
  { href: '/about',            hi: 'हमारे बारे में', en: 'About' },
  { href: '/contact',          hi: 'संपर्क',      en: 'Contact' },
];

export default function Header() {
  return (
    <header className="bg-cream border-b border-gold-200 sticky top-0 z-40 backdrop-blur-sm bg-cream/95">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gold-shine flex items-center justify-center shadow-gold">
            <span className="text-maroon-700 text-2xl hindi font-bold">अ</span>
          </div>
          <div className="leading-tight">
            <div className="hindi text-xl font-bold maroon-text">{shop.nameHi}</div>
            <div className="text-[11px] tracking-[.25em] uppercase text-gold-700">
              {shop.nameEn} · Since {shop.establishedYear}
            </div>
          </div>
        </Link>

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

        <a
          href={`tel:${shop.phones[0].replace(/\s/g, '')}`}
          className="hidden sm:inline-flex btn-primary text-xs sm:text-sm"
        >
          📞 {shop.phones[0]}
        </a>
      </div>

      {/* mobile bottom nav strip */}
      <nav className="lg:hidden flex overflow-x-auto gap-4 px-4 py-2 text-xs border-t border-gold-100 bg-cream">
        {nav.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap hindi text-stone-700 hover:text-maroon-700"
          >
            {item.hi}
          </Link>
        ))}
      </nav>
    </header>
  );
}
