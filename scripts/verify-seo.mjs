import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const root = new URL('..', import.meta.url);
const requiredRoutes = [
  '/',
  '/en/',
  '/services/ai-adoption',
  '/en/services/ai-adoption',
  '/services/business-automation',
  '/en/services/business-automation',
  '/services/data-bi-dashboards',
  '/en/services/data-bi-dashboards',
  '/services/analytics-consulting',
  '/en/services/analytics-consulting',
  '/services/ai-workshops',
  '/en/services/ai-workshops',
  '/about',
  '/en/about',
  '/case-studies',
  '/en/case-studies',
  '/guides/ai-for-small-business',
  '/en/guides/ai-for-small-business',
];

const files = ['src/components/SEOHead.tsx', 'src/pages/HomePage.tsx', 'src/pages/ServicePage.tsx', 'src/pages/ContentPages.tsx', 'public/robots.txt', 'public/sitemap.xml', 'docs/seo/israel-keyword-strategy.md'];
for (const file of files) {
  if (!existsSync(new URL(file, root))) throw new Error(`Missing required SEO file: ${file}`);
}

const sitemap = await readFile(new URL('public/sitemap.xml', root), 'utf8');
for (const route of requiredRoutes) {
  const absolute = `https://ai-analytics-hub.co.il${route === '/' ? '/' : route.replace(/\/$/, '')}`;
  if (!sitemap.includes(absolute)) throw new Error(`Missing sitemap URL: ${absolute}`);
}

const seoHead = await readFile(new URL('src/components/SEOHead.tsx', root), 'utf8');
for (const token of ['he-IL', 'en-IL', 'x-default', 'canonical', 'application/ld+json']) {
  if (!seoHead.includes(token)) throw new Error(`SEOHead is missing ${token}`);
}

console.log(`SEO verification passed for ${requiredRoutes.length} language routes.`);
