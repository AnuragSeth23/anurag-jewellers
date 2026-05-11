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
      <PhotoMarquee />
      <CategoryGrid />

      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-cream via-white to-cream rounded-3xl">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Featured Collection</div>
          <h2 className="text-3xl md:text-4xl maroon-text fancy-heading">
            Featured Designs
          </h2>
          <p className="text-sm text-stone-600 mt-3 max-w-xl mx-auto">
            Our premium collection — every design comes with real weight and hallmark code.
            Perfect for weddings, engagements, birthdays and festive occasions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>

        <div className="text-center mt-10">
          <Link href="/collections" className="btn-primary">
            View Full Collection →
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gold-50 via-cream to-gold-100 py-14">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '139+', label: 'Designs in stock' },
            { num: '7',    label: 'Categories' },
            { num: '2022', label: 'Trusted since' },
            { num: '1',    label: 'Family Brand' },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gold-200 rounded-2xl p-6 shadow-gold">
              <div className="text-4xl md:text-5xl font-bold gold-text mb-1">{s.num}</div>
              <div className="text-xs uppercase tracking-wider text-gold-700">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-700 text-gold-100 py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ecd498 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-4 text-center relative">
          <div className="text-xs uppercase tracking-[.4em] text-gold-200 mb-2">For Every Moment</div>
          <h2 className="text-3xl md:text-4xl gold-text mb-2">Jewelry for Every Occasion</h2>
          <p className="text-sm opacity-80 mb-8">Find the perfect piece for your special day</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {[
              { label: 'Wedding',    icon: '💑' },
              { label: 'Engagement', icon: '💍' },
              { label: 'Lagan',      icon: '🪔' },
              { label: 'Birthday',   icon: '🎂' },
              { label: 'Festival',   icon: '🎊' },
            ].map(x => (
              <div key={x.label} className="bg-maroon-900/50 border border-gold-700 rounded-xl py-6 hover:bg-maroon-900/70 transition-colors hover:scale-105 transform">
                <div className="text-4xl mb-2">{x.icon}</div>
                <div className="text-lg">{x.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisitUs />
    </>
  );
}
