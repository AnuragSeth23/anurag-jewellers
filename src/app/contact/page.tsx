import VisitUs from '@/components/VisitUs';
import { shop } from '@/lib/shop';

export const metadata = {
  title: 'Contact',
  description: `Contact ${shop.nameEn} — call ${shop.phones[0]} or visit our showroom at ${shop.address.full}`,
};

export default function ContactPage() {
  const enquiry = encodeURIComponent(
    `Hello ${shop.nameEn} 🙏\nI'd like to know more about your jewelry collection.`
  );

  return (
    <>
      <div className="container mx-auto px-4 pt-12 pb-4 text-center">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Get in Touch</div>
        <h1 className="text-4xl md:text-5xl gold-text font-bold">Contact Us</h1>
        <p className="text-stone-600 mt-3 text-sm max-w-xl mx-auto">
          For product details, custom orders, or pricing — call or WhatsApp us anytime.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href={`tel:${shop.phones[0].replace(/\s/g, '')}`} className="btn-primary">
            📞 Call {shop.phones[0]}
          </a>
          <a href={`https://wa.me/${shop.whatsapp}?text=${enquiry}`}
             target="_blank" rel="noreferrer" className="btn-primary !bg-[#25D366]">
            💬 WhatsApp Now
          </a>
          <a href={shop.mapsLink} target="_blank" rel="noreferrer" className="btn-outline">
            📍 Map
          </a>
        </div>
      </div>

      <VisitUs />
    </>
  );
}
