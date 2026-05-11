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
    title: cat.nameEn,
    description: `${cat.nameEn} (${cat.nameHi}) — complete collection in gold, silver and diamond.`,
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
        <h1 className="text-4xl md:text-5xl gold-text font-bold mt-2">{cat.nameEn}</h1>
        <div className="hindi text-sm tracking-[.2em] text-maroon-700 mt-2">{cat.nameHi}</div>
        <p className="text-stone-600 mt-3 text-sm">{items.length} designs available</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 text-stone-500">
          No items in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
