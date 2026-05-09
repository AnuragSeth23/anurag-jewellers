# 🚀 Deployment Guide — Free Hosting + Google Search

Pura process **30-45 minutes** mein ho jayega. Sab **bilkul free** hai.

---

## Phase 1 — GitHub par code upload (5 min)

GitHub website ko apne files store karne ke liye use karenge. Vercel waha se code uthayega.

### 1.1 GitHub account banayein
- [github.com](https://github.com) par jaayein → "Sign up"
- Email + password (free account)

### 1.2 Naya repository banayein
- Top-right `+` → "New repository"
- Name: `anurag-jewellers`
- Public select karein
- "Create repository" click karein

### 1.3 Code upload karein
**Easiest way (GitHub Desktop):**
1. [desktop.github.com](https://desktop.github.com) install karein
2. File → Add Local Repository → `C:\Users\Anurag Seth\anurag-jewellers` select karein
3. Publish repository → "anurag-jewellers" → Publish

**Command line se:**
```bash
cd "C:\Users\Anurag Seth\anurag-jewellers"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/anurag-jewellers.git
git push -u origin main
```

---

## Phase 2 — Vercel par deploy (5 min) — **FREE**

Vercel best free hosting hai Next.js ke liye. Free tier mein:
- ✅ Unlimited deploys
- ✅ Free SSL (https)
- ✅ Free `.vercel.app` subdomain
- ✅ 100 GB bandwidth/month

### 2.1 Vercel account
- [vercel.com](https://vercel.com) → "Sign Up" → **GitHub se sign in karein**

### 2.2 Project import
- Dashboard → "Add New" → "Project"
- "Import Git Repository" → `anurag-jewellers` select karein
- "Deploy" click karein
- 2 minute mein live!

### 2.3 Live URL milega
Aapka URL kuch aisa hoga: `https://anurag-jewellers.vercel.app`

### 2.4 Environment variable set karein (optional but recommended)
Vercel project → Settings → Environment Variables → Add:
- `NEXT_PUBLIC_SITE_URL` = `https://anurag-jewellers.vercel.app` (apna actual URL)

Phir Deployments tab → top deployment ke `...` menu → "Redeploy"

---

## Phase 3 — Google par dikhne ke liye Search Console (10 min) ⭐ MOST IMPORTANT

**Yahi step hai jo aapki website Google search results par laata hai.**

### 3.1 Search Console open karein
- [search.google.com/search-console](https://search.google.com/search-console)
- Apne **Gmail account** se sign in

### 3.2 Property add karein
- "Add property" → **URL prefix** select karein (left side)
- URL paste karein: `https://anurag-jewellers.vercel.app`
- Continue

### 3.3 Verification
Google bolega "verify ownership". Easiest method:
- **HTML tag** select karein
- Code copy hoga jaisa: `<meta name="google-site-verification" content="abc123xyz" />`
- Sirf **content="abc123xyz"** wala value copy karein

Vercel par jaayein → Settings → Environment Variables:
- `GOOGLE_SITE_VERIFICATION` = `abc123xyz`
- Save → Redeploy

Wapas Search Console aaiye → "Verify" click karein → ✅

### 3.4 Sitemap submit karein
Verify hone ke baad:
- Left menu → "Sitemaps"
- "Add a new sitemap" → type karein: `sitemap.xml`
- Submit

Bas! 1-7 din mein Google aapki saari pages ko index kar lega.

### 3.5 Search par check karein (1 hafte baad)
Google par search karein:
- `site:anurag-jewellers.vercel.app` — saari indexed pages dikhengi
- `Anurag Jewellers Varanasi` — aapki website appear hone lagegi

---

## Phase 4 — Google My Business (15 min) ⭐⭐ SUPER IMPORTANT for Local Search

**Yahi step hai jo "jewellery shop near me" search karne par aapki dukan top par dikhayi degi, photos ke saath, Google Maps mein.**

### 4.1 Google Business Profile
- [google.com/business](https://google.com/business)
- "Manage now" → Gmail se sign in

### 4.2 Apni shop add karein
- Business name: **Anurag Jewellers**
- Category: **Jewelry Store**
- Address: **Korauti Chauraha, Mangalpur, Varanasi, UP — 221101**
- Phone: **+91 81275 04900**
- Website: aapka Vercel URL

### 4.3 Verification
Google postcard bhejega aapke shop ke address par (5-7 din mein aata hai). Card par 5-digit code aayega — Google Business mein wahi enter karna hai.

### 4.4 Profile complete karein
- ✅ Shop ki photos add karein (interior, exterior, products) — 10+
- ✅ Hours: Mon-Sat 10am-9pm, Sun 10am-8pm
- ✅ Description (Hindi + English): "अनुराग ज्वैलर्स - Trusted gold, silver and diamond jewellery shop in Mangalpur, Varanasi. Established 2022..."
- ✅ Services: Wedding Jewellery, Engagement Rings, Bridal Sets, Gold Chains, etc.

### 4.5 Reviews
Pehle 5-10 customers ko request karein review dene ke liye. Reviews + photos = Google ranking ka sabse bada factor hai.

---

## Phase 5 — Custom Domain (Optional, ₹700/year)

Free `.vercel.app` URL chalega, but apna `anuragjewellers.in` zyada professional dikhega.

### 5.1 Domain kharidein
- [godaddy.com](https://godaddy.com) ya [namecheap.com](https://namecheap.com)
- Search: `anuragjewellers.in` ya `.com`
- Buy (~₹700/year)

### 5.2 Vercel se connect
- Vercel project → Settings → Domains → Add `anuragjewellers.in`
- Vercel ke given DNS records ko aapke domain provider par add karein
- 30 minute mein live ho jayega + SSL bhi auto-set ho jayega

### 5.3 Search Console + GMB update karein
Naye domain ko Search Console mein add karein, GMB profile mein website URL update karein.

---

## Phase 7 — Admin Upload Page setup (one-time, 10 min) 🔒

Aapki website pe `/admin/upload` page hai jahan se aap khud naye photos upload kar sakte hain (sirf aap, password se protected). Ye live page tabhi kaam karega jab Vercel par 4 environment variables set ho jaayein.

### 7.1 GitHub Personal Access Token banayein
1. [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta) kholo
2. **"Generate new token"** click karein
3. Token name: `anurag-jewellers-admin`
4. Expiration: **No expiration** (ya 1 year)
5. **Repository access** → Only select repositories → `anurag-jewellers` select karein
6. **Permissions** → Repository permissions → **Contents** → **Read and write** select karein
7. Niche **"Generate token"** click karein
8. Token copy karein (`github_pat_...` se shuru hota hai). **Yeh dobara nahi dikhega — turant copy karein**

### 7.2 Vercel par env vars set karein
1. Vercel dashboard → `anurag-jewellers` project → **Settings** → **Environment Variables**
2. Yeh 4 variables add karein:

| Name | Value | Notes |
|------|-------|-------|
| `ADMIN_PASSWORD` | (apna password — kuch yaad rakhne layak) | Jaise: `anurag@varanasi2022` |
| `GITHUB_TOKEN` | `github_pat_...` (jo abhi copy kiya) | |
| `GITHUB_OWNER` | `AnuragSeth23` | |
| `GITHUB_REPO` | `anurag-jewellers` | |

3. Har variable add karne ke baad **Save**
4. **Deployments** tab → top deployment ke `...` menu → **Redeploy** (env vars lagane ke liye)

### 7.3 Use kaise karein
1. Browser me kholo: `https://anurag-jewellers.vercel.app/admin/upload`
2. Apna `ADMIN_PASSWORD` daalein
3. Photos chunkar **"फोटो अपलोड करें"** click karein
4. Photos seedha aapke GitHub repo me commit ho jaayengi
5. Vercel 1-2 minute me automatic redeploy karke live kar dega
6. Gallery page par dikhne lagengi ✨

### 7.4 Password reset karna hai?
Vercel → Settings → Environment Variables → `ADMIN_PASSWORD` → Edit → naya password → Save → Redeploy.

### ⚠️ Security
- `/admin/upload` page Google par index nahi hota (`robots: noindex`)
- Sirf jiske paas password hai woh upload kar sakta hai
- GitHub Token sirf is repo ke liye hai, doosri jagah kaam nahi karega
- Token compromise ho jaye toh GitHub par jaake **Revoke** kar sakte hain

---

## Phase 6 — Monthly Maintenance (5 min/month)

### Naye products add karne ka tarika:
1. `src/lib/products.ts` mein new entry add karein (admin page guide dekho)
2. GitHub par commit (GitHub Desktop se: Commit + Push)
3. Vercel automatic 2 minute mein deploy kar dega

### Photos add karne ke liye:
1. [cloudinary.com](https://cloudinary.com) → free account
2. Upload photo → URL copy
3. Product object mein `image: 'https://...'` add karein

---

## ✅ Final Checklist

After 1 week of deploy:
- [ ] Vercel par website live hai
- [ ] Google Search Console mein verify ho gaya
- [ ] Sitemap submit ho gaya
- [ ] Google par `site:yoursite.com` search karne par pages dikh rahi hain
- [ ] Google My Business profile verify ho gaya
- [ ] GMB par 5+ customer reviews aa gaye
- [ ] "jewellery shop mangalpur varanasi" search karne par aapki dukan top results mein

## 🆘 Help Required?

Agar kahin atak jaayein, toh saari error messages screenshot karke mujhe bhejein. Step-by-step solve kar denge.

**Pro tip**: GMB sabse important hai — local jewellery shop ke liye 80% search wahi se aati hain ("jewellery shop near me", Google Maps).
