import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { shop } from '@/lib/shop';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Full Gallery',
  description:
    'Browse the complete jewelry collection of Anurag Jewellers — gold, silver and diamond pieces. Necklaces, pendants, rings, earrings, bangles, payals and more.',
};

function loadGalleryPhotos(): string[] {
  try {
    const dir = join(process.cwd(), 'public', 'products');
    return readdirSync(dir)
      .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map(f => `/products/${f}`);
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const galleryPhotos = loadGalleryPhotos();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">All Designs</div>
        <h1 className="text-4xl md:text-5xl gold-text font-bold">Full Gallery</h1>
        <p className="text-stone-600 mt-3 text-sm max-w-2xl mx-auto">
          Our complete showroom collection — <strong>{galleryPhotos.length} jewelry designs</strong> in
          gold, silver and diamond. Tap any design and WhatsApp us for details.
        </p>
      </div>

      <GalleryClient
        photos={galleryPhotos}
        whatsapp={shop.whatsapp}
        shopName={shop.nameEn}
      />
    </div>
  );
}
