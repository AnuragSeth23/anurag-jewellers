const items = [
  { label: 'BIS Hallmark',       icon: '🏅' },
  { label: '916 Pure Gold',      icon: '✨' },
  { label: 'Certified Diamonds', icon: '💎' },
  { label: 'Lifetime Buyback',   icon: '🤝' },
  { label: 'Home Delivery',      icon: '🚚' },
  { label: 'EMI Available',      icon: '💳' },
];

export default function TrustStrip() {
  return (
    <section className="bg-maroon-700 text-gold-100 py-6">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {items.map((it) => (
          <div key={it.label} className="px-2">
            <div className="text-3xl mb-1">{it.icon}</div>
            <div className="text-sm font-medium">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
