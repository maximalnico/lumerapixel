import { defineMiddleware } from 'astro:middleware';

const PHOSPHOR_BASE = '/logos/phosphoricons/';
const WHITE_FOLDER = '/logos/phosphoricons/white/';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  if (
    pathname.startsWith(PHOSPHOR_BASE) &&
    !pathname.startsWith('/logos/phosphoricons/white/') &&
    !pathname.startsWith('/logos/phosphoricons/black/') &&
    pathname.endsWith('.svg')
  ) {
    const file = pathname.replace(PHOSPHOR_BASE, '');
    return context.rewrite(`${WHITE_FOLDER}${file}`);
  }

  return next();
});
