import Link from 'next/link';
import { shop } from '@/lib/shop';

export default function Footer() {
  return (
    <footer className="bg-maroon-800 text-gold-100 mt-20">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="hindi text-2xl text-gold-200 font-bold">{shop.nameHi}</div>
          <div className="text-xs tracking-[.25em] uppercase text-gold-300 mb-3">{shop.nameEn}</div>
          <p className="text-sm text-gold-100/80 leading-relaxed">{shop.tagline}</p>
        </div>

        <div>
          <h4 className="text-gold-200 mb-3 text-lg">पता / Address</h4>
          <p className="text-sm text-gold-100/85 leading-relaxed">
            {shop.address.line1}<br/>
            {shop.address.line2}<br/>
            {shop.address.city}, {shop.address.state}<br/>
            PIN — {shop.address.pincode}
          </p>
          <a href={shop.mapsLink} target="_blank" rel="noreferrer"
             className="text-gold-300 underline text-xs mt-2 inline-block">
            📍 Get Directions
          </a>
        </div>

        <div>
          <h4 className="text-gold-200 mb-3 text-lg">संपर्क / Contact</h4>
          <ul className="text-sm text-gold-100/85 space-y-1">
            {shop.phones.map(p => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-gold-200">📞 {p}</a>
              </li>
            ))}
            <li>
              <a href={`https://wa.me/${shop.whatsapp}`} target="_blank" rel="noreferrer"
                 className="hover:text-gold-200">💬 WhatsApp</a>
            </li>
          </ul>
          <div className="mt-3 text-xs text-gold-200/70">
            <div>Mon–Sat: {shop.hours.weekdays}</div>
            <div>Sun:&nbsp;&nbsp;&nbsp;&nbsp; {shop.hours.sunday}</div>
          </div>
        </div>

        <div>
          <h4 className="text-gold-200 mb-3 text-lg">Quick Links</h4>
          <ul className="text-sm text-gold-100/85 space-y-1">
            <li><Link href="/collections">All Collections</Link></li>
            <li><Link href="/collections/necklace">Necklace Sets</Link></li>
            <li><Link href="/collections/ring">Rings</Link></li>
            <li><Link href="/collections/bangle">Bangles</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-700/40">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-gold-200/70">
          <p className="hindi">© {new Date().getFullYear()} {shop.nameHi} · सभी अधिकार सुरक्षित</p>
          <p className="mt-1">Proprietor: {shop.proprietor.nameEn} &nbsp;·&nbsp; Founder: {shop.founder.nameEn}</p>
        </div>
      </div>
    </footer>
  );
}
