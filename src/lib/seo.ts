export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://ai-analytics-hub.co.il';
export const SITE_NAME = 'Nimrod Fisher | AI & Data Transformation';
export const DEFAULT_OG_IMAGE = '/profile.jpg';

export type Language = 'he' | 'en';

export function absoluteUrl(path = '/') {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(path: string, language: Language) {
  const cleanPath = path === '/' ? '' : path.replace(/^\/+/, '');
  if (language === 'he') return `/${cleanPath}` || '/';
  return cleanPath ? `/en/${cleanPath}` : '/en/';
}

export function stripLanguage(pathname: string) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/en') return '/';
  if (clean.startsWith('/en/')) return clean.slice(3) || '/';
  return clean;
}

export function languageFromPath(pathname: string): Language {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'he';
}

export function alternatePaths(pathname: string) {
  const basePath = stripLanguage(pathname);
  return {
    he: localizedPath(basePath, 'he'),
    en: localizedPath(basePath, 'en'),
  };
}
