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

/** Local photo from /public/products/ — owner's actual jewelry items. */
const local = (n: number) => `/products/p${String(n).padStart(3, '0')}.jpg`;

/** Owner's real photos (139 total) live in /public/products/.
 *  First 36 mapped to the existing categorised products below; the rest
 *  appear on the /gallery page. */
const productImages: Record<string, string> = {
  // necklaces / sets — gold pendants & necklaces
  'rajwadi-bridal-haar':       local(1),
  'temple-laxmi-haar':         local(2),
  'diamond-choker-set':        local(120),
  'silver-oxidised-haar':      local(121),
  'rani-haar-long':            local(3),
  // rings — single gold/diamond rings
  'solitaire-engagement-ring': local(10),
  'gold-band-couple':          local(11),
  'navratan-ring':             local(12),
  'silver-toe-ring':           local(100),
  'kids-gold-ring':            local(13),
  // maang tikka
  'kundan-maang-tikka':        local(4),
  'pearl-tikka':               local(5),
  'silver-tikka':              local(6),
  // jhumka / earrings
  'gold-jhumka-bridal':        local(20),
  'diamond-stud-earrings':     local(21),
  'meenakari-jhumka':          local(22),
  'silver-chand-bali':         local(23),
  // bangles
  'bridal-gold-kangan':        local(50),
  'diamond-bracelet':          local(51),
  'silver-paayal-bangle':      local(52),
  'kids-gold-kara':            local(53),
  // payal
  'silver-payal-traditional':  local(60),
  'kids-silver-payal':         local(61),
  'gold-payal-anklet':         local(62),
  // nath
  'bridal-nath':               local(70),
  'small-nose-pin':            local(71),
  'diamond-nose-pin':          local(72),
  // pendants
  'om-gold-pendant':           local(80),
  'heart-diamond-pendant':     local(81),
  'ganesh-pendant':            local(82),
  // chains
  'gents-gold-chain-thick':    local(90),
  'ladies-thin-chain':         local(91),
  'silver-chain-gents':        local(122),
  // kada
  'gents-gold-kada':           local(54),
  'silver-kada':               local(55),
  'diamond-kada-gents':        local(56),
};

// galleryPhotos is computed at build time inside src/app/gallery/page.tsx
// (it reads /public/products directly so newly uploaded photos auto-appear).

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
