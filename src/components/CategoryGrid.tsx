import Link from 'next/link';
import { categories } from '@/lib/products';

const categoryThumbnails: Record<string, string> = {
  necklace: '/products/p005.jpg',
  pendant:  '/products/p001.jpg',
  ring:     '/products/p010.jpg',
  jhumka:   '/products/p020.jpg',
  bangle:   '/products/p050.jpg',
  payal:    '/products/p145.jpg', // professional payal mannequin shot
  utensil:  '/products/p051.jpg',
};

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Browse by Category</div>
        <h2 className="text-3xl md:text-4xl maroon-text fancy-heading">
          Our Collections
        </h2>
        <p className="text-sm text-stone-600 mt-3 max-w-xl mx-auto">
          Gold · Silver · Diamond — explore every category
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map(c => {
          const thumb = categoryThumbnails[c.slug];
          return (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="group bg-white rounded-2xl border border-gold-200 overflow-hidden hover:shadow-gold hover:border-gold-400 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-gold-50">
                {thumb && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumb}
                    alt={c.nameEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent" />
              </div>
              <div className="px-3 py-3 text-center">
                <div className="font-semibold maroon-text text-sm">{c.nameEn}</div>
                <div className="hindi text-[10px] tracking-wider text-gold-700 mt-0.5">{c.nameHi}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
