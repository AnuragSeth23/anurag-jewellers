import { shop } from '@/lib/shop';

export default function VisitUs() {
  return (
    <section className="bg-gradient-to-b from-cream to-gold-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Visit Showroom</div>
          <h2 className="text-3xl md:text-4xl maroon-text fancy-heading">
            Visit Our Store
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl border border-gold-200 p-8 shadow-gold">
            <h3 className="hindi text-2xl maroon-text mb-1">{shop.nameHi}</h3>
            <div className="text-xs tracking-[.3em] uppercase text-gold-700 mb-5">{shop.nameEn}</div>

            <div className="space-y-4 text-sm text-stone-700">
              <div>
                <div className="font-semibold text-maroon-700 mb-0.5">📍 Address</div>
                {shop.address.line1}, {shop.address.line2}<br />
                {shop.address.city}, {shop.address.state} — {shop.address.pincode}
              </div>

              <div>
                <div className="font-semibold text-maroon-700 mb-0.5">📞 Contact</div>
                {shop.phones.map(p => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-gold-700">{p}</a>
                ))}
              </div>

              <div>
                <div className="font-semibold text-maroon-700 mb-0.5">🕘 Hours</div>
                Mon–Sat: {shop.hours.weekdays}<br />
                Sunday: {shop.hours.sunday}
              </div>

              <div>
                <div className="font-semibold text-maroon-700 mb-0.5">👤 Owners</div>
                <span className="hindi">{shop.proprietor.nameHi}</span> ({shop.proprietor.role})<br />
                <span className="hindi">{shop.founder.nameHi}</span> ({shop.founder.role})
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href={shop.mapsLink} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                📍 Get Directions
              </a>
              <a href={`https://wa.me/${shop.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline text-sm">
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-gold-300 shadow-gold min-h-[360px] bg-white">
            <iframe
              title="Anurag Jewellers Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(shop.address.full)}&output=embed`}
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
