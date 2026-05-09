import Link from 'next/link';
import { shop } from '@/lib/shop';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-gold-50 to-gold-100">
      {/* Decorative ornaments */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold-shine blur-3xl"/>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold-shine blur-3xl"/>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="text-center md:text-left">
          <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-3">
            Estd. {shop.establishedYear} · Varanasi
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gold-text leading-none mb-2 hindi">
            {shop.nameHi}
          </h1>
          <h2 className="text-xl md:text-2xl text-maroon-700 tracking-widest font-serif mb-5">
            {shop.nameEn}
          </h2>
          <p className="hindi text-stone-700 text-lg leading-relaxed mb-2">{shop.tagline}</p>
          <p className="text-stone-500 italic text-sm mb-7">{shop.taglineEn}</p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="/collections" className="btn-primary">
              ज्वैलरी देखें · View Collection
            </Link>
            <a href={`https://wa.me/${shop.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline">
              💬 WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-xs text-stone-600">
            <span>✓ Hallmark Gold</span>
            <span>✓ Certified Diamonds</span>
            <span>✓ BIS 916</span>
            <span>✓ Lifetime Buyback</span>
          </div>
        </div>

        {/* Decorative banner replica */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-gold border-2 border-gold-300 p-8 text-center">
            <div className="hindi text-sm tracking-widest text-gold-700 mb-2">॥ शुभ उद्घाटन ॥</div>
            <div className="hindi text-3xl font-bold gold-text mb-1">अनुराग ज्वैलर्स</div>
            <div className="text-xs uppercase tracking-[.3em] text-maroon-700 mb-4">est. {shop.establishedYear}</div>
            <div className="divider-ornament my-4">✦</div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {['💍', '👑', '📿'].map((e, i) => (
                <div key={i} className="aspect-square bg-gold-50 border border-gold-200 rounded-lg flex items-center justify-center text-3xl">
                  {e}
                </div>
              ))}
            </div>

            <div className="hindi text-stone-700 text-sm leading-relaxed">
              बाबा विश्वनाथ जी की असीम<br/>अनुकम्पा एवं आशीर्वाद से
            </div>
            <div className="divider-ornament my-3"/>
            <div className="text-xs hindi text-stone-600">
              प्रो. {shop.proprietor.nameHi} <br/>
              निवेदक: {shop.founder.nameHi}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
