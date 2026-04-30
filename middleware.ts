/**
 * Vercel Edge Middleware — Markdown content negotiation.
 *
 * When an agent requests `/` or `/en/` with `Accept: text/markdown` (and
 * markdown has higher q-value than text/html), serve the pre-built
 * markdown mirror. Browsers always get HTML because they never advertise
 * text/markdown in their Accept header.
 *
 * Source markdown is generated at build time from src/i18n/content.ts via
 * scripts/generate-md.mjs and lives at /index.md and /en/index.md.
 *
 * Spec references:
 * - RFC 9110 §12 (proactive content negotiation)
 * - https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */

export const config = {
  matcher: ['/', '/en', '/en/'],
};

export default async function middleware(request: Request) {
  const accept = request.headers.get('accept') || '';
  if (!prefersMarkdown(accept)) return;

  const url = new URL(request.url);
  const isEn = url.pathname === '/en' || url.pathname === '/en/';
  const target = isEn ? '/en/index.md' : '/index.md';

  const mdResponse = await fetch(new URL(target, url.origin), {
    // The .md path does not match the middleware matcher, so this is
    // safe from infinite loops. Header marks the call for traceability.
    headers: { 'x-fbz-internal': 'md-negotiation' },
  });

  if (!mdResponse.ok) {
    // Fallback: let the original HTML response through.
    return;
  }

  const body = await mdResponse.text();
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'Content-Language': isEn ? 'en' : 'de',
      'X-Content-Negotiation': 'markdown',
      'Link': `<${url.origin}${url.pathname}>; rel="canonical"`,
    },
  });
}

/**
 * RFC 9110 quality-value parsing. Returns true when text/markdown is
 * acceptable AND has at least the same q as text/html (or html is absent).
 * Browsers never list text/markdown, so they always fall through to HTML.
 */
function prefersMarkdown(accept: string): boolean {
  if (!accept) return false;
  const types = accept.split(',').map((entry) => {
    const [rawType, ...params] = entry.trim().split(';');
    let q = 1;
    for (const p of params) {
      const [k, v] = p.trim().split('=');
      if (k === 'q') {
        const parsed = parseFloat(v);
        if (!Number.isNaN(parsed)) q = parsed;
      }
    }
    return { type: rawType.trim().toLowerCase(), q };
  });

  const md = types.find(
    (t) => t.type === 'text/markdown' || t.type === 'text/x-markdown'
  );
  if (!md || md.q <= 0) return false;

  const html = types.find((t) => t.type === 'text/html');
  if (!html) return true;
  return md.q > html.q;
}
