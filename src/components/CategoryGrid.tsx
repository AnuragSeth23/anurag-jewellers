import Link from 'next/link';
import { categories } from '@/lib/products';
import JewelryIcon from './JewelryIcon';

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Browse Categories</div>
        <h2 className="text-3xl md:text-4xl maroon-text fancy-heading hindi">
          ज्वैलरी की श्रेणियाँ
        </h2>
        <p className="text-sm text-stone-600 mt-3 hindi">
          अंगूठी · मांग टीका · पायल · हाथ का · गले का — A to Z सब कुछ
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map(c => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="group bg-white rounded-2xl border border-gold-200 overflow-hidden hover:shadow-gold transition-shadow"
          >
            <JewelryIcon icon={c.icon as any} tone="gold" size={120} />
            <div className="px-3 py-3 text-center">
              <div className="hindi font-semibold maroon-text text-sm">{c.nameHi}</div>
              <div className="text-[10px] uppercase tracking-wider text-gold-700 mt-0.5">{c.nameEn}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
