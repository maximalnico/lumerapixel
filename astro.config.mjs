import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sessionsData from './public/data/sessions.json' with { type: 'json' };

const allSessions = Array.isArray(sessionsData)
  ? sessionsData
  : sessionsData.sessions ?? Object.values(sessionsData);

function toIsoDate(dateString) {
  const [day, month, year] = String(dateString || '').split('.');
  if (!day || !month || !year) return undefined;
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

const sessionLastModBySlug = new Map(
  allSessions
    .filter((session) => session?.slug)
    .map((session) => [session.slug, toIsoDate(session.date)])
);

export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      i18n: { defaultLocale: 'de' },
      serialize(item) {
        const url = new URL(item.url);
        const slugMatch = url.pathname.match(/^\/(?:en\/)?sessions\/([^/]+)\/?$/);
        const slug = slugMatch?.[1];
        const sessionLastMod = slug ? sessionLastModBySlug.get(slug) : undefined;

        return {
          ...item,
          lastmod: sessionLastMod ?? item.lastmod,
          changefreq: slug ? 'monthly' : 'weekly',
          priority: slug ? 0.8 : 1.0,
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://lumerapixel.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
