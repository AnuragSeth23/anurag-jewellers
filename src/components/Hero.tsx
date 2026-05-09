import Link from 'next/link';
import { shop } from '@/lib/shop';

const showcasePhotos = [
  '/products/p001.jpg', // gold locket collection
  '/products/p020.jpg', // gold chand bali
  '/products/p005.jpg', // gold necklace 13.700g
  '/products/p050.jpg', // gold bangles 3.700g
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-gold-50 to-gold-100">
      {/* Decorative ornaments */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold-shine blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold-shine blur-3xl" />
      </div>

      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #73591f 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 items-center relative">
        {/* LEFT — Brand & CTAs */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-300 px-4 py-1.5 rounded-full mb-4 md:mb-5">
            <span className="w-2 h-2 rounded-full bg-maroon-700 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[.25em] text-gold-700 font-medium">
              Estd. {shop.establishedYear} · Varanasi
            </span>
          </div>

          {/* Bigger heading with proper line-height so matras are not cut */}
          <h1 className="text-[2.75rem] sm:text-6xl md:text-[5.5rem] font-bold gold-text mb-2 md:mb-3 hindi"
              style={{ lineHeight: 1.3, paddingBottom: '0.18em' }}>
            {shop.nameHi}
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl text-maroon-700 tracking-[.2em] sm:tracking-[.25em] font-serif mb-4 md:mb-6"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}>
            ANURAG JEWELLERS
          </h2>

          <div className="divider-ornament my-3 md:my-5 max-w-md md:max-w-sm md:mx-0">✦</div>

          <p className="hindi text-stone-700 text-base sm:text-xl leading-relaxed mb-1">{shop.tagline}</p>
          <p className="text-stone-500 italic text-xs sm:text-sm mb-5 md:mb-8">{shop.taglineEn}</p>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start mb-5 md:mb-7">
            <Link href="/gallery" className="btn-primary text-sm md:text-base">
              📸 पूरी गैलरी देखें
            </Link>
            <Link href="/collections" className="btn-outline text-sm md:text-base">
              💎 कैटेगरी
            </Link>
          </div>

          {/* Trust strip with check icons (proper alignment) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-4 text-xs text-stone-700">
            {[
              ['🏅', 'BIS Hallmark'],
              ['✨', '916 Pure Gold'],
              ['💎', 'Certified Diamonds'],
              ['🤝', 'Lifetime Buyback'],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-1.5">
                <span>{icon}</span>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Banner-style card with REAL photos */}
        <div className="relative md:pl-6">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gold-300 p-6 md:p-8 text-center overflow-hidden">
            {/* Top religious banner */}
            <div className="bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-700 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-5 py-3">
              <div className="hindi text-sm tracking-[.3em] text-gold-200 font-medium">
                ॥ शुभ उद्घाटन ॥
              </div>
            </div>

            <div className="hindi text-3xl sm:text-4xl md:text-5xl font-bold gold-text mb-1"
                 style={{ lineHeight: 1.35, paddingBottom: '.18em' }}>
              अनुराग ज्वैलर्स
            </div>
            <div className="text-xs uppercase tracking-[.3em] text-maroon-700 mb-3">
              est. {shop.establishedYear}
            </div>

            <div className="divider-ornament my-4">✦</div>

            {/* REAL product photos showcase */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {showcasePhotos.map((src, i) => (
                <Link
                  key={src}
                  href="/gallery"
                  className="group relative aspect-square overflow-hidden rounded-xl border-2 border-gold-200 bg-gold-50 hover:border-gold-400 transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Anurag Jewellers showcase ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-medium">View →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="hindi text-stone-700 text-sm leading-relaxed mb-3">
              बाबा विश्वनाथ जी की असीम<br />अनुकम्पा एवं आशीर्वाद से
            </div>

            <div className="divider-ornament my-3" />

            <div className="text-xs hindi text-stone-600 leading-relaxed">
              <div><span className="text-gold-700">प्रो.</span> {shop.proprietor.nameHi}</div>
              <div><span className="text-gold-700">निवेदक:</span> {shop.founder.nameHi}</div>
            </div>
          </div>

          {/* Floating accent badges */}
          <div className="hidden md:flex absolute -top-3 -right-3 bg-maroon-700 text-gold-100 rounded-full w-20 h-20 items-center justify-center shadow-lg rotate-12 text-center">
            <div>
              <div className="text-[10px] hindi">शुद्ध</div>
              <div className="text-lg font-bold">916</div>
              <div className="text-[10px]">GOLD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
