import Link from 'next/link';
import { shop } from '@/lib/shop';

const showcasePhotos = [
  '/products/p001.jpg',
  '/products/p020.jpg',
  '/products/p005.jpg',
  '/products/p050.jpg',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-gold-50 to-gold-100">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold-shine blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold-shine blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #73591f 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 py-6 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 items-center relative">

        {/* MOBILE — single unified card */}
        <div className="md:hidden bg-white rounded-3xl shadow-xl border-2 border-gold-300 overflow-hidden">
          <div className="bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-700 py-2.5 text-center">
            <div className="hindi text-xs tracking-[.3em] text-gold-200 font-medium">
              ॥ शुभ उद्घाटन ॥
            </div>
          </div>

          <div className="px-5 py-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-300 px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-maroon-700 animate-pulse" />
              <span className="text-[9px] uppercase tracking-[.25em] text-gold-700 font-medium">
                Estd. {shop.establishedYear} · Varanasi
              </span>
            </div>

            <h1 className="hindi font-bold gold-text mb-1"
                style={{ fontSize: 'clamp(2rem, 9vw, 3rem)', lineHeight: 1.4, paddingBottom: '0.18em' }}>
              {shop.nameHi}
            </h1>

            <h2 className="text-base text-maroon-700 tracking-[.2em] mb-3"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}>
              ANURAG JEWELLERS
            </h2>

            <div className="divider-ornament my-3">✦</div>

            <p className="text-stone-700 text-sm leading-relaxed">Trusted in Gold &amp; Silver</p>
            <p className="text-stone-500 italic text-xs mb-4">A Family Tradition Since 2022</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {showcasePhotos.map((src, i) => (
                <Link
                  key={src}
                  href="/gallery"
                  className="aspect-square overflow-hidden rounded-xl border-2 border-gold-200 bg-gold-50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Showcase ${i + 1}`} className="w-full h-full object-cover" />
                </Link>
              ))}
            </div>

            <div className="flex gap-2 mb-4">
              <Link href="/gallery" className="btn-primary text-sm flex-1 justify-center">
                📸 View Gallery
              </Link>
              <Link href="/collections" className="btn-outline text-sm flex-1 justify-center">
                💎 Categories
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[11px] text-stone-700 mb-3 text-left max-w-xs mx-auto">
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

            <div className="divider-ornament my-3" />

            <div className="hindi text-stone-700 text-xs leading-relaxed">
              बाबा विश्वनाथ जी की असीम अनुकम्पा एवं आशीर्वाद से
            </div>
            <div className="divider-ornament my-2" />
            <div className="text-[11px] text-stone-600 leading-relaxed">
              <span className="text-gold-700">Prop.</span> <span className="hindi">{shop.proprietor.nameHi}</span>
              <span className="mx-2 text-gold-400">·</span>
              <span className="text-gold-700">Founder:</span> <span className="hindi">{shop.founder.nameHi}</span>
            </div>
          </div>
        </div>

        {/* DESKTOP / TABLET */}
        <div className="hidden md:block text-left">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-300 px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-maroon-700 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[.3em] text-gold-700 font-medium">
              Estd. {shop.establishedYear} · Varanasi
            </span>
          </div>

          <h1 className="text-7xl xl:text-[5.5rem] font-bold gold-text mb-3 hindi"
              style={{ lineHeight: 1.35, paddingBottom: '0.18em' }}>
            {shop.nameHi}
          </h1>

          <h2 className="text-3xl text-maroon-700 tracking-[.25em] mb-6"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}>
            ANURAG JEWELLERS
          </h2>

          <div className="divider-ornament my-5 max-w-sm mx-0">✦</div>

          <p className="text-stone-700 text-xl leading-relaxed mb-1">Trusted in Gold &amp; Silver</p>
          <p className="text-stone-500 italic text-sm mb-8">A Family Tradition Since 2022</p>

          <div className="flex flex-wrap gap-3 mb-7">
            <Link href="/gallery" className="btn-primary">
              📸 View Full Gallery
            </Link>
            <Link href="/collections" className="btn-outline">
              💎 Categories
            </Link>
            <a
              href={`https://wa.me/${shop.whatsapp}`}
              target="_blank" rel="noreferrer"
              className="btn-outline !border-[#25D366] !text-[#25D366]"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-4 gap-x-4 text-xs text-stone-700">
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

        <div className="hidden md:block relative md:pl-6">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gold-300 p-8 text-center overflow-hidden">
            <div className="bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-700 -mx-8 -mt-8 mb-5 py-3">
              <div className="hindi text-sm tracking-[.3em] text-gold-200 font-medium">
                ॥ शुभ उद्घाटन ॥
              </div>
            </div>

            <div className="hindi text-5xl font-bold gold-text mb-1"
                 style={{ lineHeight: 1.35, paddingBottom: '.18em' }}>
              अनुराग ज्वैलर्स
            </div>
            <div className="text-xs uppercase tracking-[.3em] text-maroon-700 mb-3">
              est. {shop.establishedYear}
            </div>

            <div className="divider-ornament my-4">✦</div>

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

            <div className="text-xs text-stone-600 leading-relaxed">
              <div><span className="text-gold-700">Prop.</span> <span className="hindi">{shop.proprietor.nameHi}</span></div>
              <div><span className="text-gold-700">Founder:</span> <span className="hindi">{shop.founder.nameHi}</span></div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 bg-maroon-700 text-gold-100 rounded-full w-20 h-20 flex items-center justify-center shadow-lg rotate-12 text-center">
            <div>
              <div className="text-[10px]">Pure</div>
              <div className="text-lg font-bold">916</div>
              <div className="text-[10px]">GOLD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
