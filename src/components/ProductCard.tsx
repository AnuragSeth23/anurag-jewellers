import type { Product } from '@/lib/products';
import JewelryIcon from './JewelryIcon';
import { shop } from '@/lib/shop';

const materialBadge: Record<Product['material'], { label: string; cls: string }> = {
  gold:    { label: 'Gold · सोना',    cls: 'bg-gold-100 text-gold-800 border-gold-300' },
  silver:  { label: 'Silver · चाँदी', cls: 'bg-stone-100 text-stone-700 border-stone-300' },
  diamond: { label: 'Diamond · हीरा', cls: 'bg-blue-50 text-blue-800 border-blue-200' },
};

const audienceLabel: Record<Product['audience'], string> = {
  ladies: 'Ladies', gents: 'Gents', kids: 'Kids', unisex: 'Unisex',
};

export default function ProductCard({ p }: { p: Product }) {
  const enquiry = encodeURIComponent(
    `नमस्ते ${shop.nameHi} 🙏\nमुझे "${p.nameHi} (${p.nameEn})" के बारे में जानकारी चाहिए।`
  );
  return (
    <div className="product-card flex flex-col">
      <div className="relative">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.nameEn} className="w-full aspect-square object-cover" />
        ) : (
          <JewelryIcon icon={p.icon} tone={p.tone} />
        )}
        <span className={`absolute top-3 left-3 text-[10px] tracking-wider px-2 py-0.5 rounded-full border ${materialBadge[p.material].cls}`}>
          {materialBadge[p.material].label}
        </span>
        <span className="absolute top-3 right-3 text-[10px] tracking-wider px-2 py-0.5 rounded-full bg-maroon-700 text-white">
          {audienceLabel[p.audience]}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="hindi text-lg font-semibold maroon-text leading-tight">{p.nameHi}</h3>
        <div className="text-xs uppercase tracking-wider text-gold-700 -mt-1">{p.nameEn}</div>
        <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">{p.description}</p>

        <div className="flex flex-wrap gap-1 mt-1">
          {p.occasions.slice(0, 3).map(o => (
            <span key={o} className="text-[10px] uppercase tracking-wider bg-cream border border-gold-200 text-gold-700 px-2 py-0.5 rounded-full">
              {o}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gold-100">
          {p.weightGrams && (
            <span className="text-xs text-stone-600">~{p.weightGrams}g</span>
          )}
          <a
            href={`https://wa.me/${shop.whatsapp}?text=${enquiry}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs btn-outline !py-1 !px-3"
          >
            पूछताछ →
          </a>
        </div>
      </div>
    </div>
  );
}
