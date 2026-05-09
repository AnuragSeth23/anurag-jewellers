import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/lib/products';
import Link from 'next/link';

export const metadata = {
  title: 'सभी ज्वैलरी | All Collections',
  description:
    'सोने, चाँदी और हीरे की पूरी कलेक्शन — हार, अंगूठी, झुमका, मांग टीका, पायल, कड़ा, चेन, नथ, पेंडेंट।',
};

export default function CollectionsPage() {
  // Group by category for navigation
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl gold-text hindi font-bold">सभी कलेक्शन</h1>
        <div className="text-sm tracking-[.3em] uppercase text-maroon-700 mt-2">All Jewellery</div>
        <p className="text-stone-600 mt-3 hindi text-sm max-w-2xl mx-auto">
          A to Z सब कुछ — सोना, चाँदी, हीरे — महिलाओं, पुरुषों और बच्चों के लिए
        </p>
      </div>

      {/* Category quick-jump */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map(c => (
          <Link key={c.slug} href={`#${c.slug}`} className="btn-outline text-xs">
            <span className="hindi">{c.nameHi}</span>
          </Link>
        ))}
      </div>

      {categories.map(cat => {
        const items = products.filter(p => p.category === cat.slug);
        if (!items.length) return null;
        return (
          <section key={cat.slug} id={cat.slug} className="mb-14 scroll-mt-24">
            <div className="flex items-end justify-between mb-5">
              <div>
                <h2 className="text-2xl md:text-3xl maroon-text hindi">{cat.nameHi}</h2>
                <div className="text-xs uppercase tracking-wider text-gold-700">{cat.nameEn}</div>
              </div>
              <Link href={`/collections/${cat.slug}`} className="text-xs text-maroon-700 underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map(p => <ProductCard key={p.id} p={p} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
