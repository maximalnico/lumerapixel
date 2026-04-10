import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lumerapixel.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
