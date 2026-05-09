import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import TrustStrip from '@/components/TrustStrip';
import VisitUs from '@/components/VisitUs';
import ProductCard from '@/components/ProductCard';
import PhotoMarquee from '@/components/PhotoMarquee';
import { getFeatured } from '@/lib/products';
import Link from 'next/link';

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Auto-scrolling photo ribbon — highlights real jewelry */}
      <PhotoMarquee />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured products with real photos */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-cream via-white to-cream rounded-3xl">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Featured Collection</div>
          <h2 className="text-3xl md:text-4xl maroon-text fancy-heading hindi">
            खास डिज़ाइन्स
          </h2>
          <p className="text-sm text-stone-600 mt-3 hindi max-w-xl mx-auto">
            हमारी प्रीमियम कलेक्शन — हर डिज़ाइन के असली वज़न और हॉलमार्क कोड के साथ।
            शादी, सगाई, लगन और जन्मदिन के लिए परफेक्ट।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>

        <div className="text-center mt-10">
          <Link href="/collections" className="btn-primary">
            पूरी कलेक्शन देखें →
          </Link>
        </div>
      </section>

      {/* Stats / counters */}
      <section className="bg-gradient-to-br from-gold-50 via-cream to-gold-100 py-14">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '139+', hi: 'डिज़ाइन्स',  en: 'Designs in stock' },
            { num: '7',    hi: 'श्रेणियाँ',  en: 'Categories' },
            { num: '2022', hi: 'से सेवा',     en: 'Trusted since' },
            { num: '1',    hi: 'विश्वासी ब्रांड', en: 'Family Brand' },
          ].map((s) => (
            <div key={s.en} className="bg-white border border-gold-200 rounded-2xl p-6 shadow-gold">
              <div className="text-4xl md:text-5xl font-bold gold-text mb-1">{s.num}</div>
              <div className="hindi text-stone-700 text-sm">{s.hi}</div>
              <div className="text-[10px] uppercase tracking-wider text-gold-700">{s.en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions strip */}
      <section className="bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-700 text-gold-100 py-14 relative overflow-hidden">
        {/* decorative pattern */}
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ecd498 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-4 text-center relative">
          <div className="text-xs uppercase tracking-[.4em] text-gold-200 mb-2">For Every Moment</div>
          <h2 className="hindi text-3xl md:text-4xl gold-text mb-2">हर अवसर के लिए ज्वैलरी</h2>
          <p className="text-sm opacity-80 mb-8">Jewellery for every occasion</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {[
              { hi: 'शादी',     en: 'Wedding',    icon: '💑' },
              { hi: 'सगाई',     en: 'Engagement', icon: '💍' },
              { hi: 'लगन',      en: 'Lagan',      icon: '🪔' },
              { hi: 'जन्मदिन',  en: 'Birthday',   icon: '🎂' },
              { hi: 'त्योहार',  en: 'Festival',   icon: '🎊' },
            ].map(x => (
              <div key={x.en} className="bg-maroon-900/50 border border-gold-700 rounded-xl py-6 hover:bg-maroon-900/70 transition-colors hover:scale-105 transform">
                <div className="text-4xl mb-2">{x.icon}</div>
                <div className="hindi text-lg">{x.hi}</div>
                <div className="text-[10px] uppercase tracking-wider opacity-70">{x.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit us with map */}
      <VisitUs />
    </>
  );
}
