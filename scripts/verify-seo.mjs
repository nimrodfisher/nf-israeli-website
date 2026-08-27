import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const root = new URL('..', import.meta.url);
const site = 'https://nimrodfisher.co.il';
const requiredRoutes = [
  '/',
  '/en/',
  '/services/ai-agents',
  '/en/services/ai-agents',
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

const files = ['src/components/SEOHead.tsx', 'src/pages/HomePage.tsx', 'src/pages/ServicePage.tsx', 'src/pages/ContentPages.tsx', 'public/robots.txt', 'public/sitemap.xml', 'docs/seo/israel-keyword-strategy.md', 'vercel.json'];
for (const file of files) {
  if (!existsSync(new URL(file, root))) throw new Error(`Missing required SEO file: ${file}`);
}

const sitemap = await readFile(new URL('public/sitemap.xml', root), 'utf8');
for (const route of requiredRoutes) {
  const absolute = `${site}${route === '/' ? '/' : route.replace(/\/$/, '')}`;
  if (!sitemap.includes(absolute)) throw new Error(`Missing sitemap URL: ${absolute}`);
}

const seoHead = await readFile(new URL('src/components/SEOHead.tsx', root), 'utf8');
for (const token of ['he-IL', 'en-IL', 'x-default', 'canonical', 'application/ld+json']) {
  if (!seoHead.includes(token)) throw new Error(`SEOHead is missing ${token}`);
}

const sources = [
  await readFile(new URL('index.html', root), 'utf8'),
  await readFile(new URL('src/lib/seo.ts', root), 'utf8'),
  await readFile(new URL('public/robots.txt', root), 'utf8'),
  await readFile(new URL('public/sitemap.xml', root), 'utf8'),
  await readFile(new URL('src/pages/ServicePage.tsx', root), 'utf8'),
  await readFile(new URL('docs/seo/israel-keyword-strategy.md', root), 'utf8'),
].join('\n');
if (sources.includes('ai-analytics-hub.co.il')) {
  throw new Error('Placeholder domain ai-analytics-hub.co.il is still present. Use nimrodfisher.co.il.');
}

const vercel = JSON.parse(await readFile(new URL('vercel.json', root), 'utf8'));
if (vercel.cleanUrls === true) {
  throw new Error('vercel.json cleanUrls must stay off so SPA routes are not 308/404 before the rewrite.');
}
const spaRewrite = (vercel.rewrites || []).find((rule) => rule.destination === '/index.html' && (rule.source === '/(.*)' || rule.source === '/:path*'));
if (!spaRewrite) {
  throw new Error('vercel.json must rewrite unmatched client routes to /index.html with a simple catch-all.');
}

const homepage = await readFile(new URL('src/pages/HomePage.tsx', root), 'utf8');
if (!homepage.includes('ייעוץ לסוכני דאטה') || !homepage.includes('בניית סוכני דאטה')) {
  throw new Error('Homepage must lead with data-agent consult and build.');
}
if (!homepage.includes('הדאטה כבר שם') || !homepage.includes('השאלה היא מה עושים איתו')) {
  throw new Error('Homepage H1 must stay הדאטה כבר שם / השאלה היא מה עושים איתו.');
}
if (homepage.includes('/services/ai-workshops')) {
  throw new Error('Workshops must stay off the homepage.');
}
if (!homepage.includes('Itay Aizik') || !homepage.includes('artlist-logo')) {
  throw new Error('Artlist testimonial and logo must be present on the homepage.');
}

if (!homepage.includes('בעיות אמיתיות') || !homepage.includes('סוכני AI לדאטה')) {
  throw new Error('Homepage Hebrew lede must include בעיות אמיתיות and סוכני AI לדאטה.');
}
if (homepage.includes('DATA AGENTS / ISRAEL') || homepage.includes('CLIENT SIGNAL')) {
  throw new Error('Homepage must not render DATA AGENTS / ISRAEL or CLIENT SIGNAL kicker chips.');
}
if (homepage.includes('section-kicker') || homepage.includes('eyebrow')) {
  throw new Error('Homepage must not render orange kicker chips.');
}

const servicePage = await readFile(new URL('src/pages/ServicePage.tsx', root), 'utf8');
const contentPages = await readFile(new URL('src/pages/ContentPages.tsx', root), 'utf8');
const header = await readFile(new URL('src/components/SiteHeader.tsx', root), 'utf8');
const indexHtml = await readFile(new URL('index.html', root), 'utf8');
if (!servicePage.includes("noIndex={slug === 'ai-workshops'}")) {
  throw new Error('Workshops page must be noIndex.');
}
if (!servicePage.includes('סוכני AI לדאטה')) {
  throw new Error('Agents money page must include סוכני AI לדאטה in visible Hebrew copy.');
}
if (servicePage.includes('section-kicker') || contentPages.includes('section-kicker')) {
  throw new Error('Inner pages must not render orange kicker chips.');
}
if (!contentPages.includes('ogType="article" noIndex')) {
  throw new Error('SMB guide page must be noIndex.');
}

const hebrewFacing = [homepage, servicePage, contentPages, header, indexHtml].join('\n');
const banned = ['לחיות', 'קביעת ייעוץ ראשוני', 'ייעוץ ואז בניה', 'מוצאים את המנוף', 'יכולת שנשארת', 'יכולת פנימית', 'שכבת באזז', 'עסק קטן'];
for (const phrase of banned) {
  if (hebrewFacing.includes(phrase)) {
    throw new Error(`Banned translated Hebrew still present: ${phrase}`);
  }
}

console.log(`SEO verification passed for ${requiredRoutes.length} language routes.`);
