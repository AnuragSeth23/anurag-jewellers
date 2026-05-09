import { shop } from '@/lib/shop';

export default function BlessingsBar() {
  return (
    <div className="bg-maroon-700 text-gold-100 text-xs sm:text-sm py-1.5">
      <div className="container mx-auto px-4 flex justify-center gap-6 sm:gap-12 hindi font-medium tracking-wider">
        {shop.blessings.map((b) => (
          <span key={b}>॥ {b} ॥</span>
        ))}
      </div>
    </div>
  );
}
