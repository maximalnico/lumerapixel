export type Lang = 'de' | 'en';

export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    // Nav
    'nav.home': 'Home',
    'nav.contact': 'Kontakt',
    'nav.legal': 'Impressum',
    'nav.privacy': 'Datenschutz',
    // Hero
    'hero.tagline': 'Defined by Light',
    // Stats
    'stats.sessions': 'Sessions',
    'stats.photos': 'Fotos',
    'stats.categories': 'Kategorien',
    // Sections
    'section.highlights': 'Highlights',
    'section.all': 'Alle Sessions',
    'filter.all': 'Alle',
    // Session
    'session.photos': 'Fotos',
    'session.back': 'Zurück',
    // Footer
    'footer.tagline': 'LumeraPixel – by MaximalNico',
    'footer.copy': '© 2018–2026 · MultaEnhavo · Nico Thomas Henkel',
    // 404
    '404.title': 'Seite nicht gefunden',
    '404.text': 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    '404.back': 'Zurück zur Startseite',
    // Meta
    'meta.site_desc': 'Fotografieportfolio von Nico Henkel aus Bayern. Lost Places, Automotive & Aerial Photography.',
    // Language toggle
    'lang.de': 'DE',
    'lang.auto': 'Auto',
    'lang.en': 'EN',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'nav.legal': 'Site Notice',
    'nav.privacy': 'Privacy Policy',
    // Hero
    'hero.tagline': 'Defined by Light',
    // Stats
    'stats.sessions': 'Sessions',
    'stats.photos': 'Photos',
    'stats.categories': 'Categories',
    // Sections
    'section.highlights': 'Highlights',
    'section.all': 'All Sessions',
    'filter.all': 'All',
    // Session
    'session.photos': 'Photos',
    'session.back': 'Back',
    // Footer
    'footer.tagline': 'LumeraPixel – by MaximalNico',
    'footer.copy': '© 2018–2026 · MultaEnhavo · Nico Thomas Henkel',
    // 404
    '404.title': 'Page not found',
    '404.text': 'The page you are looking for does not exist or has been moved.',
    '404.back': 'Back to home',
    // Meta
    'meta.site_desc': 'Photography portfolio by Nico Henkel from Bavaria. Lost Places, Automotive & Aerial Photography.',
    // Language toggle
    'lang.de': 'DE',
    'lang.auto': 'Auto',
    'lang.en': 'EN',
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['de']): string {
  return ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'de';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/(en\/)?/, '/');
  return lang === 'en' ? `/en${clean}` : clean;
}