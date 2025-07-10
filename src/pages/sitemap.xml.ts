import type { APIRoute } from 'astro';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://streamhib.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://streamhib.com/terms</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://streamhib.com/privacy</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://streamhib.com/cookies</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://streamhib.com/tutorial</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};