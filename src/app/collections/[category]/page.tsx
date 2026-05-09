import ProductCard from '@/components/ProductCard';
import { categories, getByCategory, getCategoryMeta } from '@/lib/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props { params: { category: string } }

export function generateStaticParams() {
  return categories.map(c => ({ category: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const cat = getCategoryMeta(params.category);
  if (!cat) return {};
  return {
    title: `${cat.nameHi} | ${cat.nameEn}`,
    description: `${cat.nameEn} — ${cat.nameHi} ज्वैलरी की पूरी कलेक्शन — सोने, चाँदी, हीरे में।`,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryMeta(params.category);
  if (!cat) notFound();
  const items = getByCategory(params.category);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/collections" className="text-xs text-gold-700 hover:underline">
          ← All Collections
        </Link>
        <h1 className="text-4xl md:text-5xl gold-text hindi font-bold mt-2">{cat.nameHi}</h1>
        <div className="text-sm tracking-[.3em] uppercase text-maroon-700 mt-2">{cat.nameEn}</div>
        <p className="text-stone-600 mt-3 text-sm">{items.length} designs available</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 text-stone-500">
          इस श्रेणी में अभी कोई आइटम नहीं है।
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
