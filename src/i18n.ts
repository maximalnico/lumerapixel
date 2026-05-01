export type Lang = 'de' | 'en';

export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    // Nav
    'nav.home': 'Home',
    'nav.contact': 'Kontakt',
    'nav.legal': 'Impressum',
    'nav.privacy': 'Datenschutz',
    'nav.toggle_theme': 'Theme wechseln',
    'nav.toggle_lang': 'Sprache wechseln',
    'nav.theme_dark': 'Dark Mode aktiv',
    'nav.theme_light': 'Light Mode aktiv',
    'nav.lang_de': 'Deutsch aktiv',
    'nav.lang_en': 'Englisch aktiv',
    // Hero
    'hero.tagline': 'Defined by Light',
    'hero.scroll_featured': 'Zu Featured Sessions scrollen',
    // Stats
    'stats.sessions': 'Sessions',
    'stats.photos': 'Fotos',
    'stats.categories': 'Kategorien',
    // Sections
    'section.highlights': 'Highlights',
    'section.featured': 'Featured Sessions',
    'section.all': 'Alle Sessions',
    'section.all_aria': 'Alle Sessions Vorschau',
    'filter.all': 'Alle',
    // Session
    'session.photos': 'Fotos',
    'session.photo': 'Foto',
    'session.back': 'Zurück',
    'session.prev': 'Vorherige Session',
    'session.next': 'Nächste Session',
    'session.scroll_photos': 'Zu den Fotos scrollen',
    'session.section_aria': 'Fotos',
    // Lightbox
    'lightbox.swipe': 'wischen',
    'lightbox.close': 'Schließen',
    'lightbox.prev': 'Vorheriges Foto',
    'lightbox.next': 'Nächstes Foto',
    'lightbox.backdrop_close': 'Lightbox schließen',
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
    'nav.toggle_theme': 'Toggle theme',
    'nav.toggle_lang': 'Toggle language',
    'nav.theme_dark': 'Dark mode active',
    'nav.theme_light': 'Light mode active',
    'nav.lang_de': 'German active',
    'nav.lang_en': 'English active',
    // Hero
    'hero.tagline': 'Defined by Light',
    'hero.scroll_featured': 'Scroll to featured sessions',
    // Stats
    'stats.sessions': 'Sessions',
    'stats.photos': 'Photos',
    'stats.categories': 'Categories',
    // Sections
    'section.highlights': 'Highlights',
    'section.featured': 'Featured Sessions',
    'section.all': 'All Sessions',
    'section.all_aria': 'All sessions preview',
    'filter.all': 'All',
    // Session
    'session.photos': 'Photos',
    'session.photo': 'Photo',
    'session.back': 'Back',
    'session.prev': 'Previous session',
    'session.next': 'Next session',
    'session.scroll_photos': 'Scroll to photos',
    'session.section_aria': 'Photos',
    // Lightbox
    'lightbox.swipe': 'swipe',
    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous photo',
    'lightbox.next': 'Next photo',
    'lightbox.backdrop_close': 'Close lightbox',
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
