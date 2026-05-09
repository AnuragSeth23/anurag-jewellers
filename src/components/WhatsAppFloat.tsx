import { shop } from '@/lib/shop';

export default function WhatsAppFloat() {
  const msg = encodeURIComponent(
    `नमस्ते ${shop.nameHi} 🙏\nमुझे ज्वैलरी में रुचि है, कृपया जानकारी दें।`
  );
  return (
    <a
      href={`https://wa.me/${shop.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden>
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.41 1.977 1.06 2.965q.39.612.846 1.16c1.16 1.404 2.55 2.49 4.298 3.038q.396.135.802.244c.547.144 1.232.273 1.847.273 1.105 0 2.246-.547 2.74-1.594.13-.317.272-.804.272-1.137 0-.143-.001-.243-.143-.343-.144-.117-3.232-1.602-3.504-1.602z M16 0a16 16 0 0 0-13.692 24.245L0 32l7.926-2.275A16 16 0 1 0 16 0zm0 29.323a13.288 13.288 0 0 1-7.04-2.011l-.504-.3-4.703 1.351 1.378-4.589-.328-.523A13.32 13.32 0 1 1 16 29.323z"/>
      </svg>
    </a>
  );
}
