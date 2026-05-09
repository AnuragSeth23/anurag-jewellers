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
  category: string;       // matches category slug
  material: Material;
  audience: Audience;
  occasions: Occasion[];
  weightGrams?: number;
  description: string;
  /** SVG icon key — see ProductCard for rendering */
  icon: 'ring' | 'necklace' | 'tikka' | 'jhumka' | 'bangle' | 'payal' | 'nath' | 'pendant' | 'chain' | 'kada' | 'set';
  /** color preset for placeholder gradient */
  tone: 'gold' | 'rose' | 'white' | 'antique';
  /** Optional: real image URL (Cloudinary / public/images/...) — replaces placeholder */
  image?: string;
  featured?: boolean;
}

export const categories = [
  { slug: 'necklace', nameHi: 'गले के हार',     nameEn: 'Necklaces & Sets', icon: 'necklace' },
  { slug: 'ring',     nameHi: 'अंगूठियाँ',      nameEn: 'Rings',            icon: 'ring' },
  { slug: 'tikka',    nameHi: 'मांग टीका',      nameEn: 'Maang Tikka',      icon: 'tikka' },
  { slug: 'jhumka',   nameHi: 'झुमके',          nameEn: 'Earrings',         icon: 'jhumka' },
  { slug: 'bangle',   nameHi: 'चूड़ी / कंगन',   nameEn: 'Bangles & Bracelets', icon: 'bangle' },
  { slug: 'payal',    nameHi: 'पायल',           nameEn: 'Anklets (Payal)',  icon: 'payal' },
  { slug: 'nath',     nameHi: 'नथ',             nameEn: 'Nose Pins',        icon: 'nath' },
  { slug: 'pendant',  nameHi: 'पेंडेंट',        nameEn: 'Pendants',         icon: 'pendant' },
  { slug: 'chain',    nameHi: 'चेन',            nameEn: 'Chains',           icon: 'chain' },
  { slug: 'kada',     nameHi: 'कड़ा (Gents)',   nameEn: 'Kada (Gents)',     icon: 'kada' },
] as const;

export type CategorySlug = typeof categories[number]['slug'];

/** Unsplash CDN URL — royalty-free, commercial use allowed. */
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&h=800&fit=crop&q=80&auto=format`;

/** slug → real HD photo. Replace any of these with shop's own Cloudinary URL when ready. */
const productImages: Record<string, string> = {
  // necklaces / sets
  'rajwadi-bridal-haar':       u('1654764746221-7bc58ef4dbad'),
  'temple-laxmi-haar':         u('1685970731194-e27b477e87ba'),
  'diamond-choker-set':        u('1611583027838-515a1087afdb'),
  'silver-oxidised-haar':      u('1605884878538-6468614df578'),
  'rani-haar-long':            u('1601121141461-9d6647bca1ed'),
  // rings
  'solitaire-engagement-ring': u('1543294001-f7cd5d7fb516'),
  'gold-band-couple':          u('1611955167811-4711904bb9f8'),
  'navratan-ring':             u('1626122780071-c09d403b8e32'),
  'silver-toe-ring':           u('1561812350-932aed735105'),
  'kids-gold-ring':            u('1589207212797-cfd546dea0fe'),
  // maang tikka
  'kundan-maang-tikka':        u('1760461804065-febded675ae2'),
  'pearl-tikka':               u('1751606615009-30f61ff1a510'),
  'silver-tikka':              u('1742891600299-31fbb82ec9f1'),
  // jhumka / earrings
  'gold-jhumka-bridal':        u('1578503803703-e818b8a0e00b'),
  'diamond-stud-earrings':     u('1621939745912-aad97fd3a34d'),
  'meenakari-jhumka':          u('1693212793204-bcea856c75fe'),
  'silver-chand-bali':         u('1611653842967-39eb011b2ca3'),
  // bangles
  'bridal-gold-kangan':        u('1626784214765-754de4c5a77b'),
  'diamond-bracelet':          u('1638617501607-5dfb8b079ebf'),
  'silver-paayal-bangle':      u('1690175867343-2af70ea57537'),
  'kids-gold-kara':            u('1611598935678-c88dca238fce'),
  // payal
  'silver-payal-traditional':  u('1744722091259-ed1cf11ac97f'),
  'kids-silver-payal':         u('1588658163621-f853df4bbe86'),
  'gold-payal-anklet':         u('1651395835317-d2868e8ebcac'),
  // nath
  'bridal-nath':               u('1762709414326-67c887a8dc98'),
  'small-nose-pin':            u('1765055821625-165a1b616ad6'),
  'diamond-nose-pin':          u('1762709414563-27aebf8f46f8'),
  // pendants
  'om-gold-pendant':           u('1773612968627-d1dd72e9d8be'),
  'heart-diamond-pendant':     u('1709324275524-bc6a283e53a3'),
  'ganesh-pendant':            u('1758995115560-59c10d6cc28f'),
  // chains
  'gents-gold-chain-thick':    u('1773832190768-b4c4667ceeb4'),
  'ladies-thin-chain':         u('1773929269191-813b7eca6954'),
  'silver-chain-gents':        u('1611107683227-e9060eccd846'),
  // kada
  'gents-gold-kada':           u('1728381031272-ba3f537feadd'),
  'silver-kada':               u('1679156271456-d6068c543ee7'),
  'diamond-kada-gents':        u('1620656798579-1984d9e87df7'),
};

const _rawProducts: Product[] = [
  // ---------- BRIDAL NECKLACE SETS ----------
  {
    id: 'n1', slug: 'rajwadi-bridal-haar', nameHi: 'राजवाड़ी ब्राइडल हार',
    nameEn: 'Rajwadi Bridal Haar (Gold)', category: 'necklace', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'], weightGrams: 42,
    description: 'भारी राजवाड़ी डिज़ाइन का ब्राइडल हार — मीनाकारी और कुंदन वर्क के साथ। शादी और लगन के लिए परफेक्ट।',
    icon: 'set', tone: 'gold', featured: true,
  },
  {
    id: 'n2', slug: 'temple-laxmi-haar', nameHi: 'टेंपल लक्ष्मी हार',
    nameEn: 'Temple Laxmi Haar', category: 'necklace', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'festival'], weightGrams: 38,
    description: 'दक्षिण भारतीय टेंपल डिज़ाइन — लक्ष्मी जी की पवित्र छवि और पारंपरिक कारीगरी।',
    icon: 'necklace', tone: 'gold', featured: true,
  },
  {
    id: 'n3', slug: 'diamond-choker-set', nameHi: 'डायमंड चोकर सेट',
    nameEn: 'Diamond Choker Set', category: 'necklace', material: 'diamond',
    audience: 'ladies', occasions: ['engagement', 'wedding'], weightGrams: 22,
    description: 'सगाई और रिसेप्शन के लिए एलिगेंट डायमंड चोकर — पैन्डेंट इयररिंग्स के साथ।',
    icon: 'set', tone: 'white', featured: true,
  },
  {
    id: 'n4', slug: 'silver-oxidised-haar', nameHi: 'ऑक्सिडाइज़्ड चाँदी हार',
    nameEn: 'Oxidised Silver Haar', category: 'necklace', material: 'silver',
    audience: 'ladies', occasions: ['festival', 'daily'], weightGrams: 30,
    description: 'पारंपरिक ऑक्सिडाइज़्ड फ़िनिश — रोज़मर्रा और त्योहारों के लिए।',
    icon: 'necklace', tone: 'antique',
  },
  {
    id: 'n5', slug: 'rani-haar-long', nameHi: 'रानी हार (लम्बा)',
    nameEn: 'Rani Haar (Long Necklace)', category: 'necklace', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'], weightGrams: 55,
    description: 'पारंपरिक लंबा रानी हार — दुल्हन के लिए शाही लुक।',
    icon: 'necklace', tone: 'gold',
  },

  // ---------- RINGS ----------
  {
    id: 'r1', slug: 'solitaire-engagement-ring', nameHi: 'सॉलिटेयर सगाई अंगूठी',
    nameEn: 'Solitaire Engagement Ring', category: 'ring', material: 'diamond',
    audience: 'ladies', occasions: ['engagement'], weightGrams: 4,
    description: 'क्लासिक सॉलिटेयर — सगाई के लिए सदाबहार पसंद।',
    icon: 'ring', tone: 'white', featured: true,
  },
  {
    id: 'r2', slug: 'gold-band-couple', nameHi: 'कपल गोल्ड बैंड (जोड़ी)',
    nameEn: 'Couple Gold Bands (Pair)', category: 'ring', material: 'gold',
    audience: 'unisex', occasions: ['engagement', 'wedding'], weightGrams: 8,
    description: 'पति-पत्नी की जोड़ी के लिए मैचिंग गोल्ड बैंड — हल्के और एलिगेंट।',
    icon: 'ring', tone: 'gold',
  },
  {
    id: 'r3', slug: 'navratan-ring', nameHi: 'नवरत्न अंगूठी',
    nameEn: 'Navratna Ring', category: 'ring', material: 'gold',
    audience: 'gents', occasions: ['festival', 'daily'], weightGrams: 7,
    description: 'नवरत्न जड़ी अंगूठी — ज्योतिषीय शुभता के लिए विशेष।',
    icon: 'ring', tone: 'gold',
  },
  {
    id: 'r4', slug: 'silver-toe-ring', nameHi: 'चाँदी की बिछिया',
    nameEn: 'Silver Toe Rings (Bichiya)', category: 'ring', material: 'silver',
    audience: 'ladies', occasions: ['wedding', 'daily'], weightGrams: 6,
    description: 'सुहागन की पारंपरिक बिछिया — चाँदी में पारंपरिक डिज़ाइन।',
    icon: 'ring', tone: 'antique',
  },
  {
    id: 'r5', slug: 'kids-gold-ring', nameHi: 'बच्चों की सोने की अंगूठी',
    nameEn: 'Kids Gold Ring', category: 'ring', material: 'gold',
    audience: 'kids', occasions: ['birthday'], weightGrams: 2,
    description: 'जन्मदिन के लिए छोटी प्यारी अंगूठी — हल्की और सुरक्षित।',
    icon: 'ring', tone: 'gold',
  },

  // ---------- MAANG TIKKA ----------
  {
    id: 't1', slug: 'kundan-maang-tikka', nameHi: 'कुंदन मांग टीका',
    nameEn: 'Kundan Maang Tikka', category: 'tikka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'], weightGrams: 12,
    description: 'दुल्हन के लिए कुंदन मांग टीका — पारंपरिक राजपूती शैली।',
    icon: 'tikka', tone: 'gold', featured: true,
  },
  {
    id: 't2', slug: 'pearl-tikka', nameHi: 'मोती मांग टीका',
    nameEn: 'Pearl Maang Tikka', category: 'tikka', material: 'gold',
    audience: 'ladies', occasions: ['engagement', 'festival'], weightGrams: 8,
    description: 'मोती और सोने का संगम — हल्का और एलिगेंट।',
    icon: 'tikka', tone: 'rose',
  },
  {
    id: 't3', slug: 'silver-tikka', nameHi: 'चाँदी मांग टीका',
    nameEn: 'Silver Maang Tikka', category: 'tikka', material: 'silver',
    audience: 'ladies', occasions: ['festival'], weightGrams: 10,
    description: 'चाँदी का पारंपरिक मांग टीका — हर त्योहार के लिए।',
    icon: 'tikka', tone: 'antique',
  },

  // ---------- JHUMKA / EARRINGS ----------
  {
    id: 'j1', slug: 'gold-jhumka-bridal', nameHi: 'ब्राइडल गोल्ड झुमका',
    nameEn: 'Bridal Gold Jhumka', category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'], weightGrams: 18,
    description: 'भारी ब्राइडल झुमका — दुल्हन के पूरे लुक के लिए।',
    icon: 'jhumka', tone: 'gold', featured: true,
  },
  {
    id: 'j2', slug: 'diamond-stud-earrings', nameHi: 'डायमंड स्टड इयररिंग्स',
    nameEn: 'Diamond Stud Earrings', category: 'jhumka', material: 'diamond',
    audience: 'ladies', occasions: ['daily', 'birthday'], weightGrams: 4,
    description: 'रोज़मर्रा के लिए सिंपल डायमंड स्टड — एलिगेंट और हल्के।',
    icon: 'jhumka', tone: 'white',
  },
  {
    id: 'j3', slug: 'meenakari-jhumka', nameHi: 'मीनाकारी झुमका',
    nameEn: 'Meenakari Jhumka', category: 'jhumka', material: 'gold',
    audience: 'ladies', occasions: ['festival', 'wedding'], weightGrams: 15,
    description: 'रंगीन मीनाकारी कारीगरी का झुमका — पारंपरिक उत्सव लुक।',
    icon: 'jhumka', tone: 'gold',
  },
  {
    id: 'j4', slug: 'silver-chand-bali', nameHi: 'चाँदी की चांद बाली',
    nameEn: 'Silver Chand Bali', category: 'jhumka', material: 'silver',
    audience: 'ladies', occasions: ['festival', 'daily'], weightGrams: 12,
    description: 'पारंपरिक चांद बाली — चाँदी की एलिगेंट डिज़ाइन।',
    icon: 'jhumka', tone: 'antique',
  },

  // ---------- BANGLES & BRACELETS ----------
  {
    id: 'b1', slug: 'bridal-gold-kangan', nameHi: 'ब्राइडल गोल्ड कंगन',
    nameEn: 'Bridal Gold Kangan (Pair)', category: 'bangle', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'], weightGrams: 60,
    description: 'भारी कंगन की जोड़ी — दुल्हन के हाथों की शोभा।',
    icon: 'bangle', tone: 'gold', featured: true,
  },
  {
    id: 'b2', slug: 'diamond-bracelet', nameHi: 'डायमंड ब्रेसलेट',
    nameEn: 'Diamond Bracelet', category: 'bangle', material: 'diamond',
    audience: 'ladies', occasions: ['engagement', 'birthday'], weightGrams: 14,
    description: 'मॉडर्न डायमंड ब्रेसलेट — हर पार्टी के लिए एलिगेंट।',
    icon: 'bangle', tone: 'white',
  },
  {
    id: 'b3', slug: 'silver-paayal-bangle', nameHi: 'चाँदी का कंगन',
    nameEn: 'Silver Bangles', category: 'bangle', material: 'silver',
    audience: 'ladies', occasions: ['festival', 'daily'], weightGrams: 35,
    description: 'चाँदी के पारंपरिक कंगन — रोज़मर्रा के लिए परफेक्ट।',
    icon: 'bangle', tone: 'antique',
  },
  {
    id: 'b4', slug: 'kids-gold-kara', nameHi: 'बच्चों का सोने का कड़ा',
    nameEn: 'Kids Gold Kara', category: 'bangle', material: 'gold',
    audience: 'kids', occasions: ['birthday'], weightGrams: 10,
    description: 'बच्चों के जन्मदिन के लिए छोटा कड़ा — हल्का और टिकाऊ।',
    icon: 'bangle', tone: 'gold',
  },

  // ---------- PAYAL ----------
  {
    id: 'p1', slug: 'silver-payal-traditional', nameHi: 'पारंपरिक चाँदी पायल',
    nameEn: 'Traditional Silver Payal', category: 'payal', material: 'silver',
    audience: 'ladies', occasions: ['wedding', 'festival'], weightGrams: 80,
    description: 'घुंघरूदार पारंपरिक चाँदी पायल — हर सुहागन का गहना।',
    icon: 'payal', tone: 'antique', featured: true,
  },
  {
    id: 'p2', slug: 'kids-silver-payal', nameHi: 'बच्चों की चाँदी पायल',
    nameEn: 'Kids Silver Payal', category: 'payal', material: 'silver',
    audience: 'kids', occasions: ['birthday'], weightGrams: 30,
    description: 'बच्चों के लिए घुंघरू वाली पायल — मीठी आवाज़।',
    icon: 'payal', tone: 'antique',
  },
  {
    id: 'p3', slug: 'gold-payal-anklet', nameHi: 'सोने की पायल',
    nameEn: 'Gold Anklet (Payal)', category: 'payal', material: 'gold',
    audience: 'ladies', occasions: ['wedding'], weightGrams: 20,
    description: 'दुर्लभ सोने की पायल — खास अवसरों के लिए।',
    icon: 'payal', tone: 'gold',
  },

  // ---------- NATH ----------
  {
    id: 'nt1', slug: 'bridal-nath', nameHi: 'दुल्हन की नथ',
    nameEn: 'Bridal Nath', category: 'nath', material: 'gold',
    audience: 'ladies', occasions: ['wedding', 'lagan'], weightGrams: 8,
    description: 'पारंपरिक दुल्हन की नथ — मोती और कुंदन वर्क के साथ।',
    icon: 'nath', tone: 'gold', featured: true,
  },
  {
    id: 'nt2', slug: 'small-nose-pin', nameHi: 'छोटी नोज़ पिन',
    nameEn: 'Small Nose Pin', category: 'nath', material: 'gold',
    audience: 'ladies', occasions: ['daily'], weightGrams: 1,
    description: 'रोज़मर्रा के लिए छोटी सोने की नोज़ पिन।',
    icon: 'nath', tone: 'gold',
  },
  {
    id: 'nt3', slug: 'diamond-nose-pin', nameHi: 'डायमंड नोज़ पिन',
    nameEn: 'Diamond Nose Pin', category: 'nath', material: 'diamond',
    audience: 'ladies', occasions: ['daily', 'engagement'], weightGrams: 1,
    description: 'चमकदार डायमंड नोज़ पिन — एलिगेंट लुक।',
    icon: 'nath', tone: 'white',
  },

  // ---------- PENDANT ----------
  {
    id: 'pd1', slug: 'om-gold-pendant', nameHi: 'ॐ सोने का पेंडेंट',
    nameEn: 'Om Gold Pendant', category: 'pendant', material: 'gold',
    audience: 'unisex', occasions: ['daily', 'birthday'], weightGrams: 4,
    description: 'पवित्र ॐ चिन्ह वाला पेंडेंट — रोज़मर्रा पहनने के लिए।',
    icon: 'pendant', tone: 'gold',
  },
  {
    id: 'pd2', slug: 'heart-diamond-pendant', nameHi: 'दिल डायमंड पेंडेंट',
    nameEn: 'Heart Diamond Pendant', category: 'pendant', material: 'diamond',
    audience: 'ladies', occasions: ['birthday', 'engagement'], weightGrams: 3,
    description: 'दिल आकार का डायमंड पेंडेंट — सरप्राइज़ गिफ्ट के लिए परफेक्ट।',
    icon: 'pendant', tone: 'white', featured: true,
  },
  {
    id: 'pd3', slug: 'ganesh-pendant', nameHi: 'गणेश जी पेंडेंट',
    nameEn: 'Ganesh Ji Pendant', category: 'pendant', material: 'gold',
    audience: 'unisex', occasions: ['festival', 'daily'], weightGrams: 5,
    description: 'श्री गणेश जी की पवित्र छवि वाला पेंडेंट।',
    icon: 'pendant', tone: 'gold',
  },

  // ---------- CHAIN ----------
  {
    id: 'c1', slug: 'gents-gold-chain-thick', nameHi: 'मर्दाना मोटी सोने की चेन',
    nameEn: 'Gents Thick Gold Chain', category: 'chain', material: 'gold',
    audience: 'gents', occasions: ['wedding', 'daily'], weightGrams: 25,
    description: 'मर्दों के लिए मोटी सोने की चेन — रॉयल लुक।',
    icon: 'chain', tone: 'gold', featured: true,
  },
  {
    id: 'c2', slug: 'ladies-thin-chain', nameHi: 'महिलाओं की पतली चेन',
    nameEn: 'Ladies Thin Gold Chain', category: 'chain', material: 'gold',
    audience: 'ladies', occasions: ['daily', 'birthday'], weightGrams: 6,
    description: 'महिलाओं के लिए हल्की पतली चेन — पेंडेंट के साथ पहनें।',
    icon: 'chain', tone: 'gold',
  },
  {
    id: 'c3', slug: 'silver-chain-gents', nameHi: 'मर्दों की चाँदी चेन',
    nameEn: 'Gents Silver Chain', category: 'chain', material: 'silver',
    audience: 'gents', occasions: ['daily'], weightGrams: 30,
    description: 'मर्दों के लिए चाँदी की मज़बूत चेन — डेली वियर।',
    icon: 'chain', tone: 'antique',
  },

  // ---------- KADA (GENTS) ----------
  {
    id: 'k1', slug: 'gents-gold-kada', nameHi: 'मर्दों का सोने का कड़ा',
    nameEn: 'Gents Gold Kada', category: 'kada', material: 'gold',
    audience: 'gents', occasions: ['wedding', 'lagan'], weightGrams: 45,
    description: 'मर्दों के लिए भारी सोने का कड़ा — शादी और खास मौकों पर।',
    icon: 'kada', tone: 'gold', featured: true,
  },
  {
    id: 'k2', slug: 'silver-kada', nameHi: 'चाँदी का कड़ा',
    nameEn: 'Silver Kada', category: 'kada', material: 'silver',
    audience: 'gents', occasions: ['daily', 'festival'], weightGrams: 60,
    description: 'पारंपरिक चाँदी का कड़ा — सिख और राजपूत स्टाइल।',
    icon: 'kada', tone: 'antique',
  },
  {
    id: 'k3', slug: 'diamond-kada-gents', nameHi: 'डायमंड कड़ा',
    nameEn: 'Diamond Kada (Gents)', category: 'kada', material: 'diamond',
    audience: 'gents', occasions: ['wedding', 'engagement'], weightGrams: 30,
    description: 'मॉडर्न डायमंड कड़ा — एलिगेंट और रॉयल।',
    icon: 'kada', tone: 'white',
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
