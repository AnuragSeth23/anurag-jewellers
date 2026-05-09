import Link from 'next/link';
import { categories } from '@/lib/products';

const categoryThumbnails: Record<string, string> = {
  necklace: '/products/p005.jpg',  // gold necklace 13.7g
  pendant:  '/products/p001.jpg',  // gold locket collection
  ring:     '/products/p010.jpg',  // diamond ring
  jhumka:   '/products/p020.jpg',  // gold chand bali
  bangle:   '/products/p050.jpg',  // gold bangles
  payal:    '/products/p070.jpg',  // silver payal
  utensil:  '/products/p051.jpg',  // silver glasses
};

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Browse by Category</div>
        <h2 className="text-3xl md:text-4xl maroon-text fancy-heading hindi">
          ज्वैलरी की श्रेणियाँ
        </h2>
        <p className="text-sm text-stone-600 mt-3 hindi max-w-xl mx-auto">
          सोना · चाँदी · हीरा — हर श्रेणी की पूरी कलेक्शन देखें
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
                <div className="hindi font-semibold maroon-text text-sm">{c.nameHi}</div>
                <div className="text-[10px] uppercase tracking-wider text-gold-700 mt-0.5">{c.nameEn}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
