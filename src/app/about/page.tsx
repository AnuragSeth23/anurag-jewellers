import { shop } from '@/lib/shop';

export const metadata = {
  title: 'About Us',
  description:
    `${shop.nameEn} has been serving ${shop.address.city} since ${shop.establishedYear} — ` +
    'a symbol of trust, purity and tradition in gold, silver and diamond jewelry.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Our Story</div>
        <h1 className="text-4xl md:text-5xl gold-text font-bold">About Us</h1>
      </div>

      <div className="bg-white border border-gold-200 rounded-2xl p-8 md:p-12 shadow-gold space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          <span className="hindi text-2xl maroon-text font-semibold">{shop.nameHi}</span>{' '}
          (Anurag Jewellers) was established in {shop.establishedYear} with the divine blessings of
          Baba Vishwanath Ji. Located at Korauti Chauraha in Mangalpur, Varanasi — our showroom
          is a unique blend of tradition and modern design.
        </p>

        <p className="text-lg leading-relaxed text-stone-700">
          We offer a wide range of gold, silver and diamond jewelry for every occasion — be it
          a wedding, engagement, Lagan, birthday or festival. Our collection caters to ladies,
          gents and children alike, with each piece backed by BIS hallmark certification and
          transparent pricing.
        </p>

        <div className="divider-ornament my-8">✦</div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6 border border-gold-200">
            <div className="text-xs uppercase tracking-[.3em] text-gold-700 mb-1">Founder</div>
            <div className="hindi text-2xl maroon-text font-semibold">{shop.founder.nameHi}</div>
            <div className="text-sm text-stone-600 mt-1">{shop.founder.nameEn}</div>
            <p className="text-sm text-stone-700 mt-3">
              Our beloved father laid the foundation of this institution with his vision
              and dedication to honest trade.
            </p>
          </div>

          <div className="bg-cream rounded-xl p-6 border border-gold-200">
            <div className="text-xs uppercase tracking-[.3em] text-gold-700 mb-1">Proprietor</div>
            <div className="hindi text-2xl maroon-text font-semibold">{shop.proprietor.nameHi}</div>
            <div className="text-sm text-stone-600 mt-1">{shop.proprietor.nameEn}</div>
            <p className="text-sm text-stone-700 mt-3">
              Blending modern design with traditional craftsmanship — customer satisfaction
              has always been our first priority.
            </p>
          </div>
        </div>

        <div className="divider-ornament my-8">✦</div>

        <h2 className="text-2xl maroon-text">Our Promise</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            'BIS Hallmark Certified Gold',
            '916 Pure Gold Guaranteed',
            'Certified Diamonds',
            'Transparent Pricing',
            'Lifetime Buyback Policy',
            'Free Resizing &amp; Polishing',
          ].map((label) => (
            <li key={label} className="flex items-start gap-3 bg-cream rounded-lg p-3 border border-gold-100">
              <span className="text-gold-600 text-lg">✓</span>
              <div className="text-stone-800 font-medium" dangerouslySetInnerHTML={{ __html: label }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
