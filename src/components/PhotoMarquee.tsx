import Link from 'next/link';
import { asset } from '@/lib/asset';

// Highlights — new premium showroom photos (p140+) mixed with bestsellers
const photos = [
  'p145', 'p140', 'p150', 'p001', 'p160', 'p005', 'p155', 'p020',
  'p165', 'p050', 'p141', 'p010', 'p147', 'p011', 'p152', 'p122',
  'p148', 'p060', 'p157', 'p162',
];

/** Auto-scrolling photo strip — gives a high-end "bestseller marquee" feel. */
export default function PhotoMarquee() {
  // Duplicate the array so the loop is seamless
  const loop = [...photos, ...photos];

  return (
    <section className="relative bg-cream py-12 overflow-hidden">
      <div className="text-center mb-8">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Live from our showroom</div>
        <h2 className="text-3xl md:text-4xl maroon-text fancy-heading">
          A Glimpse of Our Jewelry
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 marquee">
          {loop.map((id, i) => (
            <Link
              key={`${id}-${i}`}
              href="/gallery"
              className="shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-gold-200 bg-white hover:scale-105 hover:shadow-gold transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(`/products/${id}.jpg`)}
                alt="Anurag Jewellers showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/gallery" className="btn-outline">
          View All 139 Designs →
        </Link>
      </div>
    </section>
  );
}
