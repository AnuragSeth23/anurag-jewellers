'use client';

import { useState } from 'react';

interface Props {
  photos: string[];
  whatsapp: string;
  shopName: string;
}

export default function GalleryClient({ photos, whatsapp, shopName }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const enquiry = (idx: number) => encodeURIComponent(
    `नमस्ते ${shopName} 🙏\nमुझे डिज़ाइन #${idx + 1} (${photos[idx].split('/').pop()}) के बारे में जानकारी चाहिए — मूल्य, वज़न, उपलब्धता।`
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {photos.map((src, idx) => (
          <button
            key={src}
            onClick={() => setLightbox(idx)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-gold-200 bg-white hover:shadow-gold transition-shadow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Design #${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              डिज़ाइन #{idx + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Close"
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(((lightbox - 1) + photos.length) % photos.length); }}
            className="absolute left-4 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Previous"
          >
            ‹
          </button>

          <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[lightbox]}
              alt={`Design #${lightbox + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 flex gap-3 items-center">
              <span className="text-white text-sm">डिज़ाइन #{lightbox + 1} / {photos.length}</span>
              <a
                href={`https://wa.me/${whatsapp}?text=${enquiry(lightbox)}`}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                💬 WhatsApp पूछताछ
              </a>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            className="absolute right-4 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
