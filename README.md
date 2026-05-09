# अनुराग ज्वैलर्स · Anurag Jewellers Website

Production-ready website for **Anurag Jewellers**, Mangalpur, Varanasi.
Built with Next.js 14 + Tailwind CSS — SEO-optimised so it appears in Google search.

## ✨ Features

- 🎨 Beautiful gold + maroon traditional theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🛕 Hindi + English bilingual
- 💍 10 jewellery categories — Rings, Necklaces, Maang Tikka, Jhumka, Bangles,
  Payal, Nath, Pendants, Chains, Kada
- 👨‍👩‍👧 Ladies / Gents / Kids / Unisex sections
- 🎉 Occasion filters — Wedding, Engagement, Lagan, Birthday, Festival, Daily wear
- 💎 Gold / Silver / Diamond material badges
- 📍 Google Maps embed + Get Directions
- 💬 WhatsApp floating button + product enquiry buttons
- 🔍 Google SEO ready — sitemap.xml, robots.txt, JSON-LD JewelryStore schema,
  meta keywords in Hindi + English
- 📈 Local SEO — pre-configured Schema.org `JewelryStore` with address & hours
  for Google Business panel

## 🚀 Local Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Production build
npm start            # Run production server
```

## 📁 Project Structure

```
src/
├── app/              # Pages (Next.js App Router)
│   ├── page.tsx              Home
│   ├── collections/          All collections + category pages
│   ├── about/                About story
│   ├── contact/              Contact + map
│   ├── admin/                How-to-update guide for owner
│   ├── sitemap.ts            Auto-generated sitemap
│   └── robots.ts             SEO robots.txt
├── components/       Reusable UI parts
└── lib/
    ├── shop.ts       Shop config (address, phones, owner)
    └── products.ts   Product catalogue (40+ items)
```

## ✏️ How to Update

### Add a new product
Edit `src/lib/products.ts` and add to the `products` array. See `/admin` page when site is live for full guide.

### Update shop info / phone / address
Edit `src/lib/shop.ts`.

### Add real product photos
1. Sign up at [cloudinary.com](https://cloudinary.com) (free 25 GB)
2. Upload photo → copy the URL
3. Add `image: 'https://res.cloudinary.com/.../photo.jpg'` to the product

## 🌐 Deployment

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step Vercel + Google Search Console + Google My Business setup.

## 📞 Shop Contact

- 📍 Korauti Chauraha, Mangalpur, Varanasi, UP — 221101
- 📞 +91 81275 04900 / 81275 35687
- 👤 Proprietor: Vivek Kumar Seth
- 👤 Founder: Rai Chandra Seth
- 🗓️ Established: 17 April 2022
