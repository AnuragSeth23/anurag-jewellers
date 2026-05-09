import Link from 'next/link';
import { shop } from '@/lib/shop';

/**
 * Sticky bottom action bar — only visible on mobile.
 * Always one tap away from Call, WhatsApp, Gallery, Map.
 */
export default function MobileBottomBar() {
  const enquiry = encodeURIComponent(
    `नमस्ते ${shop.nameHi} 🙏\nमुझे ज्वैलरी की जानकारी चाहिए।`
  );

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t-2 border-gold-300 grid grid-cols-4 shadow-[0_-4px_16px_rgba(115,89,31,0.1)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      <a
        href={`tel:${shop.phones[0].replace(/\s/g, '')}`}
        className="flex flex-col items-center gap-0.5 py-3 active:bg-gold-50"
      >
        <span className="text-2xl">📞</span>
        <span className="text-[10px] uppercase tracking-wider text-gold-700 font-medium">Call</span>
      </a>

      <a
        href={`https://wa.me/${shop.whatsapp}?text=${enquiry}`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-0.5 py-3 active:bg-green-50"
      >
        <span className="text-2xl">💬</span>
        <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-medium">WhatsApp</span>
      </a>

      <Link
        href="/gallery"
        className="flex flex-col items-center gap-0.5 py-3 active:bg-gold-50"
      >
        <span className="text-2xl">📸</span>
        <span className="text-[10px] uppercase tracking-wider text-gold-700 font-medium">Gallery</span>
      </Link>

      <a
        href={shop.mapsLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-0.5 py-3 active:bg-gold-50"
      >
        <span className="text-2xl">📍</span>
        <span className="text-[10px] uppercase tracking-wider text-gold-700 font-medium">Map</span>
      </a>
    </nav>
  );
}
