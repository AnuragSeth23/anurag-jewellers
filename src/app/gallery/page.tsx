import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { shop } from '@/lib/shop';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'पूरी गैलरी | Full Gallery',
  description:
    'अनुराग ज्वैलर्स की पूरी ज्वैलरी कलेक्शन — सोना, चाँदी, हीरा, मांग टीका, झुमका, हार, पायल, अंगूठी, चेन, कड़ा।',
};

/** Read all photos from /public/products at build time. */
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
        <h1 className="text-4xl md:text-5xl gold-text hindi font-bold">पूरी गैलरी</h1>
        <p className="text-stone-600 mt-3 hindi text-sm max-w-2xl mx-auto">
          हमारी दुकान की <strong>{galleryPhotos.length} ज्वैलरी डिज़ाइन्स</strong> — सोना, चाँदी, हीरा।
          किसी भी डिज़ाइन के बारे में जानकारी के लिए WhatsApp करें।
        </p>
      </div>

      <GalleryClient
        photos={galleryPhotos}
        whatsapp={shop.whatsapp}
        shopName={shop.nameHi}
      />
    </div>
  );
}
