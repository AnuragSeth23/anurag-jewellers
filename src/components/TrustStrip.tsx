const items = [
  { hi: 'BIS हॉलमार्क',    en: 'BIS Hallmarked', icon: '🏅' },
  { hi: '916 शुद्ध सोना',  en: '916 Pure Gold',  icon: '✨' },
  { hi: 'प्रमाणित हीरे',   en: 'Certified Diamonds', icon: '💎' },
  { hi: 'लाइफटाइम बायबैक', en: 'Lifetime Buyback', icon: '🤝' },
  { hi: 'घर पर डिलीवरी',   en: 'Home Delivery',     icon: '🚚' },
  { hi: 'EMI सुविधा',      en: 'EMI Available',     icon: '💳' },
];

export default function TrustStrip() {
  return (
    <section className="bg-maroon-700 text-gold-100 py-6">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {items.map((it) => (
          <div key={it.en} className="px-2">
            <div className="text-3xl mb-1">{it.icon}</div>
            <div className="hindi text-sm">{it.hi}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-70">{it.en}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
