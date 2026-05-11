import { shop } from '@/lib/shop';

export default function BlessingsBar() {
  return (
    <div className="bg-maroon-700 text-gold-100 text-[11px] sm:text-sm py-1.5">
      <div className="container mx-auto px-4 flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-4 sm:gap-8 justify-start sm:justify-center hindi font-medium tracking-wider">
        {shop.blessings.map((b) => (
          <span key={b} className="shrink-0">॥ {b} ॥</span>
        ))}
      </div>
    </div>
  );
}
