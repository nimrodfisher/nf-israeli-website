import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ServicePage, services } from './pages/ServicePage';
import { AboutPage, CaseStudiesPage, GuidePage, NotFoundPage } from './pages/ContentPages';
import { languageFromPath, stripLanguage } from './lib/seo';

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return pathname;
}

export default function App() {
  const pathname = usePathname();
  const language = languageFromPath(pathname);
  const route = stripLanguage(pathname);

  if (route === '/') return <HomePage language={language} />;
  if (route === '/about') return <AboutPage language={language} />;
  if (route === '/case-studies') return <CaseStudiesPage language={language} />;
  if (route === '/guides/ai-for-small-business') return <GuidePage language={language} />;
  if (route.startsWith('/services/')) {
    const slug = route.slice('/services/'.length);
    if (services[slug]) return <ServicePage slug={slug} language={language} />;
  }
  return <NotFoundPage language={language} />;
}
