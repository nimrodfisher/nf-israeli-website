import { useEffect } from 'react';
import {
  absoluteUrl,
  alternatePaths,
  DEFAULT_OG_IMAGE,
  Language,
  SITE_NAME,
  SITE_URL,
} from '../lib/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  language: Language;
  keywords: string[];
  schema: Record<string, unknown>;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noIndex?: boolean;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) element.setAttribute('hreflang', hreflang);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function SEOHead({
  title,
  description,
  path,
  language,
  keywords,
  schema,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOHeadProps) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const alternates = alternatePaths(path);
    const image = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage);

    document.title = title;
    document.documentElement.lang = language === 'he' ? 'he' : 'en';
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords.join(', '));
    upsertMeta('name', 'author', 'Nimrod Fisher');
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
    upsertLink('canonical', canonical);
    upsertLink('alternate', absoluteUrl(alternates.he), 'he-IL');
    upsertLink('alternate', absoluteUrl(alternates.en), 'en-IL');
    upsertLink('alternate', absoluteUrl(alternates.he), 'x-default');

    let schemaElement = document.head.querySelector('script#seo-schema');
    if (!schemaElement) {
      schemaElement = document.createElement('script');
      schemaElement.id = 'seo-schema';
      schemaElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaElement);
    }
    schemaElement.textContent = JSON.stringify(schema);
  }, [description, keywords, language, noIndex, ogImage, ogType, path, schema, title]);

  return null;
}
