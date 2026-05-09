import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/shop';
import { categories } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = ['', '/gallery', '/collections', '/about', '/contact'];

  return [
    ...staticUrls.map(p => ({
      url: `${siteUrl}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1.0 : 0.8,
    })),
    ...categories.map(c => ({
      url: `${siteUrl}/collections/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
