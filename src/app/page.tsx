import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import TrustStrip from '@/components/TrustStrip';
import VisitUs from '@/components/VisitUs';
import ProductCard from '@/components/ProductCard';
import { getFeatured } from '@/lib/products';
import Link from 'next/link';

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Featured</div>
          <h2 className="text-3xl md:text-4xl maroon-text fancy-heading hindi">
            खास डिज़ाइन
          </h2>
          <p className="text-sm text-stone-600 mt-3 hindi">
            शादी, सगाई, लगन और जन्मदिन के लिए हमारी प्रीमियम कलेक्शन
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

      {/* Occasions strip */}
      <section className="bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-700 text-gold-100 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="hindi text-3xl md:text-4xl gold-text mb-2">हर अवसर के लिए ज्वैलरी</h2>
          <p className="text-sm opacity-80 mb-6">Jewellery for every occasion</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {[
              { hi: 'शादी', en: 'Wedding', icon: '💑' },
              { hi: 'सगाई', en: 'Engagement', icon: '💍' },
              { hi: 'लगन',  en: 'Lagan',     icon: '🪔' },
              { hi: 'जन्मदिन', en: 'Birthday', icon: '🎂' },
              { hi: 'त्योहार', en: 'Festival', icon: '🎊' },
            ].map(x => (
              <div key={x.en} className="bg-maroon-900/50 border border-gold-700 rounded-xl py-5">
                <div className="text-3xl mb-1">{x.icon}</div>
                <div className="hindi text-lg">{x.hi}</div>
                <div className="text-xs uppercase tracking-wider opacity-70">{x.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisitUs />
    </>
  );
}
