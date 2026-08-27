import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Language, localizedPath } from '../lib/seo';

interface SiteHeaderProps {
  language: Language;
  currentPath: string;
}

const labels = {
  he: { nav: 'ניווט ראשי', approach: 'איך אני עובד', services: 'מה אפשר לעשות', about: 'קצת עליי', cta: 'קביעת ייעוץ ראשוני', switch: 'English' },
  en: { nav: 'Main navigation', approach: 'Approach', services: 'Services', about: 'About', cta: 'Book an assessment', switch: 'עברית' },
};

export function SiteHeader({ language, currentPath }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = labels[language];
  const home = localizedPath('/', language);

  return (
    <header className="site-header shell">
      <a className="wordmark" href={home} aria-label={language === 'he' ? 'נמרוד פישר דף הבית' : 'Nimrod Fisher home'}>
        <span className="wordmark-mark">Nf</span>
        <span>NIMROD<br />FISHER</span>
      </a>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={copy.nav}>
        <a href={`${home}#approach`} onClick={() => setMenuOpen(false)}>{copy.approach}</a>
        <a href={localizedPath('/services/ai-agents', language)} onClick={() => setMenuOpen(false)}>{copy.services}</a>
        <a href={localizedPath('/about', language)} onClick={() => setMenuOpen(false)}>{copy.about}</a>
        <a className="language-switch" href={localizedPath(currentPath, language === 'he' ? 'en' : 'he')} onClick={() => setMenuOpen(false)}>{copy.switch}</a>
        <a className="header-cta" href={`${home}#assessment`} onClick={() => setMenuOpen(false)}>{copy.cta}</a>
      </nav>
      <button className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? (language === 'he' ? 'סגור תפריט' : 'Close menu') : (language === 'he' ? 'פתח תפריט' : 'Open menu')}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
