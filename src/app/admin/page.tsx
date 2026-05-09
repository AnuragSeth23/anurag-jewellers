import { products, categories } from '@/lib/products';

export const metadata = {
  title: 'Admin · अपडेट',
  robots: { index: false, follow: false },
};

export default function AdminGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl maroon-text hindi font-bold">अपडेट / नए आइटम कैसे जोड़ें</h1>
      <p className="text-sm text-stone-600 mt-2">
        How to add or update products on this website
      </p>

      <div className="mt-8 bg-white border border-gold-200 rounded-2xl p-6 shadow-gold space-y-6">
        <section>
          <h2 className="hindi text-xl maroon-text mb-2">📸 Photo अपडेट करने का तरीका</h2>
          <ol className="list-decimal list-inside text-sm text-stone-700 space-y-2">
            <li>Photo अपलोड करें <a className="text-maroon-700 underline" href="https://cloudinary.com" target="_blank" rel="noreferrer">cloudinary.com</a> पर (free account)</li>
            <li>Image का URL copy करें (ends with <code>.jpg</code> या <code>.webp</code>)</li>
            <li>File <code className="bg-gold-50 px-1.5 py-0.5 rounded">src/lib/products.ts</code> खोलें</li>
            <li>उस आइटम में <code>image: 'https://res.cloudinary.com/..../photo.jpg'</code> जोड़ें</li>
            <li>GitHub पर commit करें — Vercel automatically deploy कर देगा (1 मिनट में live)</li>
          </ol>
        </section>

        <section>
          <h2 className="hindi text-xl maroon-text mb-2">➕ नया आइटम जोड़ने का तरीका</h2>
          <p className="text-sm text-stone-700 mb-2">
            <code>src/lib/products.ts</code> में <code>products</code> array के अंदर ये object जोड़ें:
          </p>
          <pre className="bg-stone-900 text-gold-100 p-4 rounded-lg text-xs overflow-x-auto">
{`{
  id: 'unique-id',                    // कोई भी अनोखा ID
  slug: 'item-name-slug',             // URL के लिए (lowercase, dash)
  nameHi: 'आइटम का हिंदी नाम',
  nameEn: 'Item English Name',
  category: 'ring',                   // category slug (नीचे list)
  material: 'gold',                   // gold | silver | diamond
  audience: 'ladies',                 // ladies | gents | kids | unisex
  occasions: ['wedding', 'lagan'],    // wedding|engagement|lagan|birthday|festival|daily
  weightGrams: 25,                    // optional
  description: 'विवरण यहाँ लिखें',
  icon: 'ring',                       // ring|necklace|tikka|jhumka|bangle|payal|nath|pendant|chain|kada|set
  tone: 'gold',                       // gold | rose | white | antique
  image: 'https://...',               // optional - Cloudinary URL
  featured: true                      // optional - home page पर दिखेगा
}`}
          </pre>
        </section>

        <section>
          <h2 className="hindi text-xl maroon-text mb-2">📋 Categories List</h2>
          <ul className="text-sm text-stone-700 grid grid-cols-2 gap-1">
            {categories.map(c => (
              <li key={c.slug}>
                <code className="text-maroon-700">{c.slug}</code> — <span className="hindi">{c.nameHi}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="hindi text-xl maroon-text mb-2">📊 Current Items: {products.length}</h2>
          <p className="text-sm text-stone-700">
            फिलहाल website पर <strong>{products.length} आइटम्स</strong> {categories.length} categories में हैं।
          </p>
        </section>

        <section className="bg-cream border border-gold-200 rounded-lg p-4 text-sm">
          <p className="hindi text-stone-700">
            <strong>📞 मदद चाहिए?</strong> कोई भी टेक्निकल मदद के लिए हमें मैसेज करें — हम ज्वैलरी ऑनर के साथ काम कर रहे हैं।
          </p>
        </section>
      </div>
    </div>
  );
}
