import { shop } from '@/lib/shop';

export const metadata = {
  title: 'हमारे बारे में | About Us',
  description:
    `${shop.nameEn} ${shop.address.city} में स्थापित ${shop.establishedYear} से, ` +
    'विश्वास, शुद्धता और परंपरा का प्रतीक।',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[.4em] text-gold-700 mb-2">Our Story</div>
        <h1 className="text-4xl md:text-5xl gold-text hindi font-bold">हमारी कहानी</h1>
      </div>

      <div className="bg-white border border-gold-200 rounded-2xl p-8 md:p-12 shadow-gold space-y-6">
        <p className="hindi text-lg leading-relaxed text-stone-700">
          <span className="text-2xl maroon-text font-semibold">{shop.nameHi}</span> की स्थापना
          17 अप्रैल {shop.establishedYear} को बाबा विश्वनाथ जी की असीम अनुकम्पा एवं आशीर्वाद से हुई।
          वाराणसी के मंगलपुर में, कौरौती चौराहे पर स्थित हमारी दुकान, परंपरा और
          आधुनिकता का अनूठा संगम है।
        </p>

        <p className="hindi text-lg leading-relaxed text-stone-700">
          हमारी सोने, चाँदी और हीरे की ज्वैलरी हर अवसर के लिए उपलब्ध है — चाहे वह
          शादी हो, सगाई, लगन, जन्मदिन, या त्योहार। हम महिलाओं, पुरुषों और बच्चों
          के लिए विशेष कलेक्शन रखते हैं।
        </p>

        <div className="divider-ornament my-8">✦</div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6 border border-gold-200">
            <div className="text-xs uppercase tracking-[.3em] text-gold-700 mb-1">Founder · निवेदक</div>
            <div className="hindi text-2xl maroon-text font-semibold">{shop.founder.nameHi}</div>
            <div className="text-sm text-stone-600 mt-1">{shop.founder.nameEn}</div>
            <p className="text-sm text-stone-700 mt-3 hindi">
              हमारे पूज्य पिताजी की दूरदर्शिता और कड़ी मेहनत से इस संस्थान की नींव रखी गई।
            </p>
          </div>

          <div className="bg-cream rounded-xl p-6 border border-gold-200">
            <div className="text-xs uppercase tracking-[.3em] text-gold-700 mb-1">Proprietor · स्वामी</div>
            <div className="hindi text-2xl maroon-text font-semibold">{shop.proprietor.nameHi}</div>
            <div className="text-sm text-stone-600 mt-1">{shop.proprietor.nameEn}</div>
            <p className="text-sm text-stone-700 mt-3 hindi">
              आधुनिक डिज़ाइन और पारंपरिक कारीगरी का संगम, ग्राहक की संतुष्टि हमारी पहली प्राथमिकता।
            </p>
          </div>
        </div>

        <div className="divider-ornament my-8">✦</div>

        <h2 className="hindi text-2xl maroon-text">हमारा वादा</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ['BIS हॉलमार्क प्रमाणित सोना', 'BIS Hallmarked Gold'],
            ['916 शुद्ध सोना', '916 Pure Gold Guaranteed'],
            ['प्रमाणित हीरे', 'Certified Diamonds'],
            ['पारदर्शी मूल्य निर्धारण', 'Transparent Pricing'],
            ['लाइफटाइम बायबैक', 'Lifetime Buyback Policy'],
            ['फ्री रीसाइज़िंग और पॉलिशिंग', 'Free Resizing & Polishing'],
          ].map(([hi, en]) => (
            <li key={en} className="flex items-start gap-3 bg-cream rounded-lg p-3 border border-gold-100">
              <span className="text-gold-600 text-lg">✓</span>
              <div>
                <div className="hindi text-stone-800 font-medium">{hi}</div>
                <div className="text-xs text-stone-500">{en}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
