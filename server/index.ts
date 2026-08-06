import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const port = process.env.PORT || '5000';
const isDev = process.env.NODE_ENV !== 'production';

console.log(`Starting Next.js in ${isDev ? 'development' : 'production'} mode on port ${port}...`);

const nextBin = path.resolve(process.cwd(), 'node_modules', '.bin', 'next');

// ─────────────────────────────────────────────────────────────
// Production: run Next on an internal port and front it with a tiny
// header-rewriting proxy on the public port.
//
// Why: RSC flight responses (Content-Type: text/x-component) are served by
// Next with the same public `s-maxage` Cache-Control as HTML, distinguished
// only by `Vary: rsc, ...` — which Cloudflare ignores on HTML. The CDN can
// therefore cache a flight payload under the plain page URL and serve raw
// payload text as the document (observed live on /services). Next overwrites
// Cache-Control set from middleware or next.config for ISR routes, so the
// only reliable place to fix the header is after Next, here in the wrapper.
// ─────────────────────────────────────────────────────────────
const INTERNAL_PORT = process.env.NEXT_INTERNAL_PORT || '4983';

const listenPort = isDev ? port : INTERNAL_PORT;
const command = isDev ? 'dev' : 'start';

// In production, bind Next to loopback only — the internal port must never
// be reachable directly, or requests to it would bypass the proxy's
// cache-header rewrite and reintroduce the poisoning vector.
const nextArgs = isDev
  ? [command, '-p', listenPort]
  : [command, '-p', listenPort, '-H', '127.0.0.1'];

const nextProcess = spawn(nextBin, nextArgs, {
  stdio: 'inherit',
  env: { ...process.env },
  shell: true,
});

nextProcess.on('error', (error) => {
  console.error('Failed to start Next.js:', error);
  process.exit(1);
});

nextProcess.on('close', (code) => {
  process.exit(code ?? 0);
});

if (!isDev) {
  const proxy = http.createServer((req, res) => {
    const upstream = http.request(
      {
        host: '127.0.0.1',
        port: Number(INTERNAL_PORT),
        path: req.url,
        method: req.method,
        headers: req.headers,
      },
      (upRes) => {
        const headers = { ...upRes.headers };
        const contentType = String(headers['content-type'] || '');
        // RSC flight payloads must never be shared-cacheable at the CDN,
        // or Cloudflare (which ignores Vary) may cache them as the page.
        if (contentType.startsWith('text/x-component')) {
          headers['cache-control'] = 'private, no-store, must-revalidate';
        }
        res.writeHead(upRes.statusCode || 502, headers);
        upRes.pipe(res);
      },
    );
    upstream.on('error', (err) => {
      console.error('[Proxy] upstream error:', err.message);
      if (!res.headersSent) res.writeHead(502, { 'content-type': 'text/plain' });
      res.end('Bad Gateway');
    });
    req.pipe(upstream);
  });
  // Keep long-running requests (streaming SSR) alive.
  proxy.keepAliveTimeout = 65_000;
  proxy.headersTimeout = 70_000;
  proxy.listen(Number(port), '0.0.0.0', () => {
    console.log(`[Proxy] listening on ${port}, forwarding to Next on ${INTERNAL_PORT}`);
  });
}
