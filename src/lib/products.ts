export type Material = 'gold' | 'silver' | 'diamond';
export type Audience = 'ladies' | 'gents' | 'kids' | 'unisex';
export type Occasion =
  | 'wedding'
  | 'engagement'
  | 'lagan'
  | 'birthday'
  | 'festival'
  | 'daily';

export interface Product {
  id: string;
  slug: string;
  nameHi: string;
  nameEn: string;
  category: string;
  material: Material;
  audience: Audience;
  occasions: Occasion[];
  weightGrams?: number;
  description: string;
  icon: 'ring' | 'necklace' | 'tikka' | 'jhumka' | 'bangle' | 'payal' | 'nath' | 'pendant' | 'chain' | 'kada' | 'set';
  tone: 'gold' | 'rose' | 'white' | 'antique';
  image?: string;
  featured?: boolean;
}

/** Categories — only ones we actually stock with real photos */
export const categories = [
  { slug: 'necklace', nameHi: 'हार',          nameEn: 'Necklaces',          icon: 'necklace' },
  { slug: 'pendant',  nameHi: 'पेंडेंट / लॉकेट', nameEn: 'Pendants & Lockets', icon: 'pendant' },
  { slug: 'ring',     nameHi: 'अंगूठियाँ',      nameEn: 'Rings',              icon: 'ring' },
  { slug: 'jhumka',   nameHi: 'झुमके / चांद बाली', nameEn: 'Earrings & Chand Bali', icon: 'jhumka' },
  { slug: 'bangle',   nameHi: 'चूड़ी / कंगन',    nameEn: 'Bangles & Bracelets', icon: 'bangle' },
  { slug: 'payal',    nameHi: 'पायल',           nameEn: 'Anklets (Payal)',    icon: 'payal' },
  { slug: 'utensil',  nameHi: 'चाँदी के बर्तन',  nameEn: 'Silver Utensils',    icon: 'set' },
] as const;

export type CategorySlug = typeof categories[number]['slug'];

const local = (n: number) => `/products/p${String(n).padStart(3, '0')}.jpg`;

/** slug → photo file. Each entry is an actual photographed item from our shop. */
const productImages: Record<string, string> = {
  // pendants / mangalsutra lockets — collages and singles
  'gold-locket-collection-1':   local(1),
  'gold-locket-collection-2':   local(2),
  'gold-locket-collection-3':   local(3),
  'gold-locket-collection-4':   local(4),
  'gold-pendant-4-53g':         local(60),
  'gold-pendant-5-12g':         local(61),
  'gold-pendant-5-04g':         local(62),

  // necklaces (full)
  'gold-necklace-13-700g':      local(5),
  'gold-necklace-meenakari':    local(6),
  'bridal-gold-haar-set':       local(122),

  // diamond / gold rings
  'diamond-ring-design-1':      local(10),
  'diamond-ring-2-312g':        local(11),
  'diamond-ring-2-912g':        local(12),
  'diamond-ring-1-480g':        local(13),
  'gold-rings-display':         local(55),

  // silver kids/fashion rings (in lots)
  'silver-stone-rings-mix-1':   local(90),
  'silver-stone-rings-mix-2':   local(91),
  'silver-stone-rings-mix-3':   local(100),

  // chand bali / large gold jhumkas
  'gold-chand-bali-1':          local(20),
  'gold-chand-bali-2':          local(21),
  'gold-chand-bali-3':          local(22),
  'gold-chand-bali-4':          local(23),
  'gold-jhumka-boxed':          local(54),

  // bangles
  'gold-bangles-3-700g':        local(50),
  'gold-bangles-4g':            local(52),
  'gold-bangles-8g':            local(53),
  'rudraksha-gold-bracelet':    local(56),

  // silver fancy payals (different supplier-grade designs we stock)
  'silver-payal-102-6g':        local(70),
  'silver-payal-98-3g-stones':  local(71),
  'silver-payal-118-83g-pswt':  local(72),
  'silver-payal-90-5g':         local(80),
  'silver-payal-140-2g':        local(81),
  'silver-payal-87-7g':         local(82),

  // silver utensils — chandi ke bartan (puja & gift items)
  'silver-glass-pair':          local(51),
  'silver-thali':               local(121),

  // silver pendant chain
  'silver-heart-arrow-chain':   local(120),
};

const _rawProducts: Product[] = [
  // ---------- GOLD LOCKET / PENDANT COLLECTIONS ----------
  {
    id: 'pd-c1', slug: 'gold-locket-collection-1',
    nameHi: 'सोने के लॉकेट कलेक्शन — 6 डिज़ाइन्स (दिल आकार)',
    nameEn: 'Gold Locket Collection — 6 Designs (Heart-shape)',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'daily'],
    description: 'सोने के लॉकेट / मंगलसूत्र पेंडेंट के 6 अलग-अलग दिल-आकार डिज़ाइन्स — झालर और बारीक नक्काशी। मनपसंद डिज़ाइन फोन पर बताएं।',
    icon: 'pendant', tone: 'gold', featured: true,
  },
  {
    id: 'pd-c2', slug: 'gold-locket-collection-2',
    nameHi: 'सोने के लॉकेट कलेक्शन — 6 डिज़ाइन्स (पारंपरिक)',
    nameEn: 'Gold Locket Collection — 6 Designs (Traditional)',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'festival', 'daily'],
    description: 'पारंपरिक नक्काशी और बूंदी काम वाले 6 गोल्ड लॉकेट डिज़ाइन्स — हर महिला के लिए शुभ।',
    icon: 'pendant', tone: 'gold', featured: true,
  },
  {
    id: 'pd-c3', slug: 'gold-locket-collection-3',
    nameHi: 'सोने के लॉकेट कलेक्शन — 6 डिज़ाइन्स (मिक्स्ड)',
    nameEn: 'Gold Locket Collection — 6 Designs (Mixed)',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'daily'],
    description: 'गोल्ड लॉकेट के 6 मिक्स्ड डिज़ाइन्स — चौकोर, गोल और दिल आकार में।',
    icon: 'pendant', tone: 'gold',
  },
  {
    id: 'pd-c4', slug: 'gold-locket-collection-4',
    nameHi: 'सोने के लॉकेट कलेक्शन — 6 डिज़ाइन्स (पैस्ली)',
    nameEn: 'Gold Locket Collection — 6 Designs (Paisley)',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'festival'],
    description: 'पैस्ली शैली के 6 गोल्ड लॉकेट डिज़ाइन्स — झालर के साथ पारंपरिक लुक।',
    icon: 'pendant', tone: 'gold',
  },
  {
    id: 'pd-1', slug: 'gold-pendant-4-53g',
    nameHi: 'सोने का पेंडेंट (4.53 ग्राम)',
    nameEn: 'Gold Pendant — 4.53 grams',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['daily', 'wedding'],
    weightGrams: 4.53,
    description: 'विस्तृत नक्काशी वाला सोने का पेंडेंट — स्केल पर मापा गया वज़न 4.53 ग्राम।',
    icon: 'pendant', tone: 'gold', featured: true,
  },
  {
    id: 'pd-2', slug: 'gold-pendant-5-12g',
    nameHi: 'सोने का पेंडेंट (5.12 ग्राम)',
    nameEn: 'Gold Pendant — 5.12 grams',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['daily', 'wedding'],
    weightGrams: 5.12,
    description: 'फूलदार नक्काशी और झालर वाला सोने का पेंडेंट — वज़न 5.12 ग्राम।',
    icon: 'pendant', tone: 'gold',
  },
  {
    id: 'pd-3', slug: 'gold-pendant-5-04g',
    nameHi: 'सोने का पेंडेंट (5.04 ग्राम)',
    nameEn: 'Gold Pendant — 5.04 grams',
    category: 'pendant', material: 'gold',
    audience: 'ladies', occasions: ['daily', 'festival'],
    weightGrams: 5.04,
    description: 'चांद आकार के डिज़ाइन में सोने का पेंडेंट — वज़न 5.04 ग्राम।',
    icon: 'pendant', tone: 'gold',
  },

  // ---------- NECKLACES ----------
  {
    id: 'n1', slug: 'gold-necklace-13-700g',
    nameHi: 'सोने का हार (13.700 ग्राम)',
    nameEn: 'Gold Necklace — 13.700 grams',
    category: 'necklace', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'],
    weightGrams: 13.7,
    description: 'फूलदार केंद्रीय पेंडेंट और झालरदार किनारे — वज़न 13.700 ग्राम।',
    icon: 'necklace', tone: 'gold', featured: true,
  },
  {
    id: 'n2', slug: 'gold-necklace-meenakari',
    nameHi: 'मीनाकारी काम वाला सोने का हार',
    nameEn: 'Gold Necklace with Meenakari Work',
    category: 'necklace', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'festival'],
    description: 'लाल मीनाकारी के साथ पारंपरिक डिज़ाइन का सोने का हार — झालरदार पेंडेंट।',
    icon: 'necklace', tone: 'gold',
  },
  {
    id: 'n3', slug: 'bridal-gold-haar-set',
    nameHi: 'दुल्हन का सोने का हार सेट (लम्बा + छोटा)',
    nameEn: 'Bridal Gold Haar Set (Long + Short)',
    category: 'necklace', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'],
    description: 'दुल्हन के लिए सेट — लम्बा रानी हार, छोटा हार, मांग टीका साथ। राजशाही डिज़ाइन।',
    icon: 'set', tone: 'gold', featured: true,
  },

  // ---------- DIAMOND / GOLD RINGS (with hallmark tags) ----------
  {
    id: 'r1', slug: 'diamond-ring-design-1',
    nameHi: 'डायमंड अंगूठी 18K (LR21123)',
    nameEn: 'Diamond Ring 18K (LR21123)',
    category: 'ring', material: 'diamond',
    audience: 'ladies', occasions: ['engagement', 'wedding'],
    description: 'BIS हॉलमार्क प्रमाणित 18K सोने की डायमंड अंगूठी — डिज़ाइन कोड LR21123।',
    icon: 'ring', tone: 'white', featured: true,
  },
  {
    id: 'r2', slug: 'diamond-ring-2-312g',
    nameHi: 'डायमंड अंगूठी 18K (2.312 ग्राम, LR21101)',
    nameEn: 'Diamond Ring 18K — 2.312 g (LR21101)',
    category: 'ring', material: 'diamond',
    audience: 'ladies', occasions: ['engagement'],
    weightGrams: 2.312,
    description: 'हॉलमार्क प्रमाणित 18K डायमंड अंगूठी, नेट वज़न 2.312 ग्राम। डिज़ाइन कोड LR21101।',
    icon: 'ring', tone: 'white', featured: true,
  },
  {
    id: 'r3', slug: 'diamond-ring-2-912g',
    nameHi: 'डायमंड अंगूठी 18K (2.912 ग्राम, JIGFZA)',
    nameEn: 'Diamond Ring 18K — 2.912 g (JIGFZA)',
    category: 'ring', material: 'diamond',
    audience: 'ladies', occasions: ['engagement', 'birthday'],
    weightGrams: 2.912,
    description: 'जाली डिज़ाइन वाली 18K हॉलमार्क डायमंड अंगूठी, नेट वज़न 2.912 ग्राम।',
    icon: 'ring', tone: 'white',
  },
  {
    id: 'r4', slug: 'diamond-ring-1-480g',
    nameHi: 'डायमंड अंगूठी 18K (1.480 ग्राम, LR21082)',
    nameEn: 'Diamond Ring 18K — 1.480 g (LR21082)',
    category: 'ring', material: 'diamond',
    audience: 'ladies', occasions: ['daily', 'birthday'],
    weightGrams: 1.480,
    description: 'फूलदार डिज़ाइन वाली हल्की डायमंड अंगूठी 18K — नेट वज़न 1.480 ग्राम।',
    icon: 'ring', tone: 'white',
  },
  {
    id: 'r5', slug: 'gold-rings-display',
    nameHi: 'सोने की अंगूठियाँ (3 डिज़ाइन्स)',
    nameEn: 'Gold Rings — 3 Designs (Heart, Leaf)',
    category: 'ring', material: 'gold',
    audience: 'ladies', occasions: ['daily', 'birthday'],
    description: 'सोने की अंगूठियों के 3 अलग डिज़ाइन्स — दिल, पत्ती और पारंपरिक स्टाइल।',
    icon: 'ring', tone: 'gold',
  },

  // ---------- SILVER FASHION / KIDS RINGS (in lots) ----------
  {
    id: 'sr1', slug: 'silver-stone-rings-mix-1',
    nameHi: 'चाँदी की रंगीन पत्थर अंगूठियाँ (मिक्स लॉट)',
    nameEn: 'Silver Stone Rings — Mixed Lot',
    category: 'ring', material: 'silver',
    audience: 'ladies', occasions: ['daily', 'festival'],
    description: 'अलग-अलग रंगीन पत्थर वाली चाँदी की फैशन अंगूठियाँ — फूल और दिल आकार।',
    icon: 'ring', tone: 'antique',
  },
  {
    id: 'sr2', slug: 'silver-stone-rings-mix-2',
    nameHi: 'चाँदी की फूल डिज़ाइन अंगूठियाँ (मिक्स लॉट)',
    nameEn: 'Silver Flower Rings — Mixed Lot',
    category: 'ring', material: 'silver',
    audience: 'ladies', occasions: ['daily', 'festival'],
    description: 'फूल आकार के रंगीन पत्थरों वाली चाँदी अंगूठियाँ — मिक्स्ड साइज़ और रंग।',
    icon: 'ring', tone: 'antique',
  },
  {
    id: 'sr3', slug: 'silver-stone-rings-mix-3',
    nameHi: 'चाँदी की मिक्स अंगूठियाँ (हार्ट + फूल)',
    nameEn: 'Silver Rings — Heart & Flower Mix',
    category: 'ring', material: 'silver',
    audience: 'ladies', occasions: ['daily'],
    description: 'चाँदी की रोज़मर्रा पहनने वाली अंगूठियाँ — दिल और फूल पैटर्न।',
    icon: 'ring', tone: 'antique',
  },

  // ---------- GOLD CHAND BALI / EARRINGS ----------
  {
    id: 'j1', slug: 'gold-chand-bali-1',
    nameHi: 'सोने की चांद बाली (3-तीर डिज़ाइन)',
    nameEn: 'Gold Chand Bali — 3-Tier Design',
    category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'],
    description: 'तीन-तीर वाली बड़ी सोने की चांद बाली — झालर और लाल मीनाकारी के साथ।',
    icon: 'jhumka', tone: 'gold', featured: true,
  },
  {
    id: 'j2', slug: 'gold-chand-bali-2',
    nameHi: 'सोने की चांद बाली (मोर डिज़ाइन)',
    nameEn: 'Gold Chand Bali — Peacock Design',
    category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'festival'],
    description: 'मोर पैटर्न वाली तीन-तीर सोने की चांद बाली — झालर के साथ शाही लुक।',
    icon: 'jhumka', tone: 'gold',
  },
  {
    id: 'j3', slug: 'gold-chand-bali-3',
    nameHi: 'सोने की चांद बाली (लाल पत्थर)',
    nameEn: 'Gold Chand Bali — with Red Stones',
    category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'festival'],
    description: 'लाल पत्थरों और फूल नक्काशी वाली सोने की भारी चांद बाली।',
    icon: 'jhumka', tone: 'gold',
  },
  {
    id: 'j4', slug: 'gold-chand-bali-4',
    nameHi: 'सोने की चांद बाली + झुमकी',
    nameEn: 'Gold Chand Bali with Jhumki Drop',
    category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'],
    description: 'तीन-तीर चांद बाली, नीचे झुमकी लटकती हुई — दुल्हन के लुक के लिए।',
    icon: 'jhumka', tone: 'gold',
  },
  {
    id: 'j5', slug: 'gold-jhumka-boxed',
    nameHi: 'सोने की चांद बाली (डिब्बा-बंद, बिक्री हेतु तैयार)',
    nameEn: 'Gold Chand Bali (In Box)',
    category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'engagement'],
    description: 'हरे पत्थर और झुमकी वाली डिब्बा-बंद सोने की चांद बाली — गिफ्ट के लिए तैयार।',
    icon: 'jhumka', tone: 'gold',
  },

  // ---------- GOLD BANGLES & BRACELETS ----------
  {
    id: 'b1', slug: 'gold-bangles-3-700g',
    nameHi: 'सोने की चूड़ी जोड़ी (3.700 ग्राम)',
    nameEn: 'Gold Bangles Pair — 3.700 grams',
    category: 'bangle', material: 'gold',
    audience: 'ladies', occasions: ['daily', 'wedding'],
    weightGrams: 3.7,
    description: 'सिंपल पतली सोने की चूड़ी जोड़ी, बीच में नक्काशी वाला बीड — कुल वज़न 3.700 ग्राम।',
    icon: 'bangle', tone: 'gold', featured: true,
  },
  {
    id: 'b2', slug: 'gold-bangles-4g',
    nameHi: 'सोने की एडजस्टेबल चूड़ी जोड़ी (4 ग्राम)',
    nameEn: 'Adjustable Gold Bangles Pair — 4 grams',
    category: 'bangle', material: 'gold',
    audience: 'ladies', occasions: ['daily'],
    weightGrams: 4,
    description: 'एडजस्टेबल साइज़ वाली सोने की हल्की चूड़ी जोड़ी — कुल वज़न 4 ग्राम।',
    icon: 'bangle', tone: 'gold',
  },
  {
    id: 'b3', slug: 'gold-bangles-8g',
    nameHi: 'सोने की डिज़ाइनदार चूड़ी जोड़ी (8 ग्राम)',
    nameEn: 'Designer Gold Bangles Pair — 8 grams',
    category: 'bangle', material: 'gold',
    audience: 'ladies', occasions: ['festival', 'wedding'],
    weightGrams: 8,
    description: 'नक्काशीदार बीड्स वाली सोने की चूड़ी जोड़ी — कुल वज़न 8 ग्राम।',
    icon: 'bangle', tone: 'gold',
  },
  {
    id: 'b4', slug: 'rudraksha-gold-bracelet',
    nameHi: 'रुद्राक्ष + सोने का ब्रेसलेट',
    nameEn: 'Rudraksha + Gold Beads Bracelet',
    category: 'bangle', material: 'gold',
    audience: 'unisex', occasions: ['daily', 'festival'],
    description: 'रुद्राक्ष और सोने के बीड्स का अध्यात्मिक ब्रेसलेट — पुरुष-महिला दोनों के लिए।',
    icon: 'bangle', tone: 'gold',
  },

  // ---------- SILVER FANCY PAYAL ----------
  {
    id: 'p1', slug: 'silver-payal-102-6g',
    nameHi: 'चाँदी फैंसी पायल जोड़ी (102.6 ग्राम)',
    nameEn: 'Silver Fancy Payal Pair — 102.6 grams',
    category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['wedding', 'festival'],
    weightGrams: 102.6,
    description: 'घुंघरूदार चाँदी की फैंसी पायल जोड़ी — नेट वज़न 102.6 ग्राम (MO एक्सक्लूसिव डिज़ाइन)।',
    icon: 'payal', tone: 'antique', featured: true,
  },
  {
    id: 'p2', slug: 'silver-payal-98-3g-stones',
    nameHi: 'चाँदी पायल लाल पत्थर के साथ (98.3 ग्राम)',
    nameEn: 'Silver Payal with Red Stones — 98.3 grams',
    category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['wedding', 'festival'],
    weightGrams: 98.3,
    description: 'लाल पत्थर वाली चाँदी की फैंसी पायल जोड़ी — नेट वज़न 98.3 ग्राम (MO91)।',
    icon: 'payal', tone: 'antique',
  },
  {
    id: 'p3', slug: 'silver-payal-118-83g-pswt',
    nameHi: 'चाँदी माइक्रो प्रीमियम पायल (118.83 ग्राम)',
    nameEn: 'Silver Micro Premium Payal — 118.83 grams',
    category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['wedding', 'lagan'],
    weightGrams: 118.83,
    description: 'PSW माइक्रो प्रीमियम क्वालिटी की चाँदी पायल जोड़ी — नेट वज़न 118.83 ग्राम।',
    icon: 'payal', tone: 'antique', featured: true,
  },
  {
    id: 'p4', slug: 'silver-payal-90-5g',
    nameHi: 'चाँदी फैंसी पायल जोड़ी (90.5 ग्राम)',
    nameEn: 'Silver Fancy Payal Pair — 90.5 grams',
    category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['daily', 'festival'],
    weightGrams: 90.5,
    description: 'हल्की चाँदी की फैंसी पायल — नेट वज़न 90.5 ग्राम।',
    icon: 'payal', tone: 'antique',
  },
  {
    id: 'p5', slug: 'silver-payal-140-2g',
    nameHi: 'चाँदी भारी फैंसी पायल जोड़ी (140.2 ग्राम)',
    nameEn: 'Heavy Silver Fancy Payal — 140.2 grams',
    category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['wedding'],
    weightGrams: 140.2,
    description: 'दुल्हन के लिए भारी डिज़ाइन वाली चाँदी पायल — नेट वज़न 140.2 ग्राम।',
    icon: 'payal', tone: 'antique',
  },
  {
    id: 'p6', slug: 'silver-payal-87-7g',
    nameHi: 'चाँदी फैंसी पायल जोड़ी (87.7 ग्राम)',
    nameEn: 'Silver Fancy Payal Pair — 87.7 grams',
    category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['daily'],
    weightGrams: 87.7,
    description: 'रोज़ पहनने वाली चाँदी फैंसी पायल — नेट वज़न 87.7 ग्राम।',
    icon: 'payal', tone: 'antique',
  },

  // ---------- SILVER UTENSILS (Puja & Gift) ----------
  {
    id: 'u1', slug: 'silver-glass-pair',
    nameHi: 'चाँदी के गिलास जोड़ी (पूजा / उपहार)',
    nameEn: 'Silver Glass Pair (Puja / Gift)',
    category: 'utensil', material: 'silver',
    audience: 'unisex', occasions: ['festival'],
    description: 'पूजा-पाठ और शुभ अवसरों पर देने हेतु चाँदी के सुंदर गिलास जोड़ी।',
    icon: 'set', tone: 'antique',
  },
  {
    id: 'u2', slug: 'silver-thali',
    nameHi: 'चाँदी की थाली (पूजा हेतु)',
    nameEn: 'Silver Thali (Puja)',
    category: 'utensil', material: 'silver',
    audience: 'unisex', occasions: ['festival'],
    description: 'पूजा-पाठ हेतु चाँदी की पारंपरिक थाली — पैक्ड और तैयार।',
    icon: 'set', tone: 'antique',
  },

  // ---------- SILVER PENDANT NECKLACE ----------
  {
    id: 'sn1', slug: 'silver-heart-arrow-chain',
    nameHi: 'चाँदी की हार्ट-एरो चेन (S925)',
    nameEn: 'Silver Heart-Arrow Chain (S925)',
    category: 'necklace', material: 'silver',
    audience: 'ladies', occasions: ['birthday', 'daily'],
    description: 'पंखों वाले डिज़ाइन का चाँदी का पेंडेंट + पीला पत्थर — Heart Arrow Original handmade S925 silver।',
    icon: 'necklace', tone: 'white',
  },
];

/** products list with image URLs auto-applied from productImages map */
export const products: Product[] = _rawProducts.map(p => ({
  ...p,
  image: p.image ?? productImages[p.slug],
}));

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getByCategory(catSlug: string): Product[] {
  return products.filter(p => p.category === catSlug);
}

export function getFeatured(): Product[] {
  return products.filter(p => p.featured);
}

export function getCategoryMeta(slug: string) {
  return categories.find(c => c.slug === slug);
}
