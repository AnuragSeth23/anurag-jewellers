import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlessingsBar from '@/components/BlessingsBar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileBottomBar from '@/components/MobileBottomBar';
import { shop, siteUrl } from '@/lib/shop';

const description =
  `${shop.nameEn} (${shop.nameHi}) — Trusted jewelry shop in Mangalpur, Varanasi. ` +
  'Gold, Silver and Diamond jewelry — Necklaces, Rings, Bangles, Maang Tikka, ' +
  'Payals, Earrings (Jhumka), Nath, Kada, Chains. For Weddings, Engagements, Lagan, Birthdays and every occasion. ' +
  `Proprietor: ${shop.proprietor.nameEn}. Call ${shop.phones[0]}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${shop.nameEn} | ${shop.nameHi} | Jewellery Shop in Varanasi`,
    template: `%s | ${shop.nameEn}`,
  },
  description,
  keywords: [
    'Anurag Jewellers', 'Anurag Jewellers Varanasi', 'अनुराग ज्वैलर्स',
    'Jewellery shop Mangalpur', 'Jewellery shop Korauti Chauraha',
    'Gold jewellery Varanasi', 'Silver jewellery Varanasi', 'Diamond jewellery Varanasi',
    'Bridal jewellery Varanasi', 'Wedding jewellery shop',
    'Necklace', 'Ring', 'Maang Tikka', 'Payal', 'Bangles', 'Jhumka', 'Nath', 'Kada',
    'सोने की दुकान वाराणसी', 'चाँदी की दुकान वाराणसी',
    'Vivek Kumar Seth', 'Rai Chandra Seth',
  ],
  authors: [{ name: shop.proprietor.nameEn }],
  creator: shop.nameEn,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: shop.nameEn,
    title: `${shop.nameHi} | ${shop.nameEn}`,
    description,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${shop.nameHi} | ${shop.nameEn}`,
    description,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD: tells Google this is a JewelryStore w/ local address — boosts local search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: shop.nameEn,
    alternateName: shop.nameHi,
    image: `${siteUrl}/og-image.svg`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: shop.phones[0].replace(/\s/g, ''),
    email: shop.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${shop.address.line1}, ${shop.address.line2}`,
      addressLocality: shop.address.city,
      addressRegion: shop.address.state,
      postalCode: shop.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude:  25.4358,    // Varanasi approx — update once GMB live
      longitude: 82.9534,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '10:00', closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00', closes: '20:00',
      },
    ],
    founder: { '@type': 'Person', name: shop.founder.nameEn },
    foundingDate: '2022-04-17',
    sameAs: [shop.social.instagram, shop.social.facebook].filter(Boolean),
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="pb-20 lg:pb-0">
        <BlessingsBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomBar />
      </body>
    </html>
  );
}
