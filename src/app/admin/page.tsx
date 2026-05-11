import { products, categories } from '@/lib/products';

export const metadata = {
  title: 'Admin Guide',
  robots: { index: false, follow: false },
};

export default function AdminGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl maroon-text font-bold">How to Add or Update Products</h1>
      <p className="text-sm text-stone-600 mt-2">
        For the owner — how to keep this website updated
      </p>

      <div className="mt-8 bg-white border border-gold-200 rounded-2xl p-6 shadow-gold space-y-6">
        <section>
          <h2 className="text-xl maroon-text mb-2">📸 Easiest way — Admin Upload Page</h2>
          <ol className="list-decimal list-inside text-sm text-stone-700 space-y-2">
            <li>Visit <a className="text-maroon-700 underline" href="/admin/upload">/admin/upload</a></li>
            <li>Enter your admin password</li>
            <li>Drag &amp; drop or choose photos</li>
            <li>Photos are committed to GitHub automatically</li>
            <li>Vercel re-deploys in 1–2 minutes — new photos appear on Gallery</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl maroon-text mb-2">➕ Adding a named product (manual)</h2>
          <p className="text-sm text-stone-700 mb-2">
            Edit <code>src/lib/products.ts</code> and add an entry to the <code>products</code> array:
          </p>
          <pre className="bg-stone-900 text-gold-100 p-4 rounded-lg text-xs overflow-x-auto">
{`{
  id: 'unique-id',
  slug: 'item-name-slug',
  nameHi: 'हिंदी नाम',                  // Hindi product name
  nameEn: 'English Product Name',
  category: 'ring',                    // see categories below
  material: 'gold',                    // gold | silver | diamond
  audience: 'ladies',                  // ladies | gents | kids | unisex
  occasions: ['wedding', 'lagan'],     // wedding|engagement|lagan|birthday|festival|daily
  weightGrams: 25,                     // optional
  description: 'Short description.',
  icon: 'ring',
  tone: 'gold',                        // gold | rose | white | antique
  image: '/products/pXXX.jpg',         // optional - local photo
  featured: true                       // optional - shown on home page
}`}
          </pre>
        </section>

        <section>
          <h2 className="text-xl maroon-text mb-2">📋 Available Categories</h2>
          <ul className="text-sm text-stone-700 grid grid-cols-2 gap-1">
            {categories.map(c => (
              <li key={c.slug}>
                <code className="text-maroon-700">{c.slug}</code> — {c.nameEn} <span className="hindi text-gold-700">({c.nameHi})</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl maroon-text mb-2">📊 Current Inventory: {products.length} named items</h2>
          <p className="text-sm text-stone-700">
            Plus all photos in <code>/public/products/</code> automatically appear in the Gallery page.
          </p>
        </section>
      </div>
    </div>
  );
}
