import type { APIRoute } from 'astro';
import sessionsData from '/public/data/sessions.json';

const allSessions: any[] = Array.isArray(sessionsData)
  ? sessionsData
  : (sessionsData as any).sessions ?? Object.values(sessionsData);

const BASE = 'https://lumerapixel.com';

export const GET: APIRoute = () => {
  const staticUrls = [
    { loc: `${BASE}/`,            changefreq: 'weekly',  priority: '1.0' },
    { loc: `${BASE}/impressum`,   changefreq: 'yearly',  priority: '0.2' },
    { loc: `${BASE}/datenschutz`, changefreq: 'yearly',  priority: '0.2' },
  ];

  const sessionUrls = allSessions.map((s: any) => ({
    loc: `${BASE}/sessions/${s.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: (() => {
      const [d, m, y] = s.date.split('.');
      return `${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`;
    })(),
  }));

  const all = [...staticUrls, ...sessionUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};