import type { APIRoute } from 'astro';

const site = (import.meta.env.SITE || 'https://lumerapixel.com').replace(/\/$/, '');

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    `Host: ${site}`,
    `Sitemap: ${site}/sitemap-index.xml`,
    `Sitemap: ${site}/sitemap.xml`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
