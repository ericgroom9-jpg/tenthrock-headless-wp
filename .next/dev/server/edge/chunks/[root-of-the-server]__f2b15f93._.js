(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f2b15f93._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
let redirectsCache = [];
let lastFetch = 0;
// Cache redirects for 30 minutes — same window as page ISR — so the
// middleware never re-queries WordPress more than twice per hour per instance.
const CACHE_DURATION_MS = 30 * 60 * 1000; // 30 minutes
// ─────────────────────────────────────────────────────────────
// Page-template → current WP slug map (for slug-rename handling)
// ─────────────────────────────────────────────────────────────
let templateSlugCache = {};
let templateSlugLastFetch = 0;
function buildAuthHeaders() {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (process.env.WP_AUTH_USER && process.env.WP_AUTH_PASSWORD) {
        headers['Authorization'] = `Basic ${btoa(`${process.env.WP_AUTH_USER}:${process.env.WP_AUTH_PASSWORD}`)}`;
    }
    return headers;
}
async function getTemplateSlugMap() {
    const now = Date.now();
    if (templateSlugLastFetch > 0 && now - templateSlugLastFetch < CACHE_DURATION_MS) {
        return templateSlugCache;
    }
    const wpApiUrl = process.env.WP_API_URL;
    if (!wpApiUrl) {
        templateSlugLastFetch = now;
        return templateSlugCache;
    }
    try {
        const res = await fetch(wpApiUrl, {
            method: 'POST',
            headers: buildAuthHeaders(),
            body: JSON.stringify({
                query: `{ pages(first: 100, where: { status: PUBLISH }) { nodes { slug headlessTemplate } } }`
            }),
            // @ts-ignore - Next.js extends RequestInit with `next`
            next: {
                revalidate: 1800,
                tags: [
                    'wordpress'
                ]
            }
        });
        if (!res.ok) {
            templateSlugLastFetch = now;
            return templateSlugCache;
        }
        const json = await res.json();
        const map = {};
        for (const node of json?.data?.pages?.nodes || []){
            if (node?.headlessTemplate && node?.slug) {
                map[node.headlessTemplate] = node.slug;
            }
        }
        templateSlugCache = map;
        templateSlugLastFetch = now;
        console.log(`[TemplateSlugs] Fetched ${Object.keys(map).length} template slug mappings`);
    } catch (error) {
        console.error('[TemplateSlugs] Failed to fetch template slugs:', error);
        templateSlugLastFetch = now;
    }
    return templateSlugCache;
}
async function getRedirects() {
    const now = Date.now();
    // Honor cache window even when empty/fail, so we don't hammer WP on every request
    if (lastFetch > 0 && now - lastFetch < CACHE_DURATION_MS) {
        return redirectsCache;
    }
    const wpApiUrl = process.env.WP_API_URL;
    if (!wpApiUrl) {
        lastFetch = now;
        return redirectsCache;
    }
    // Get WordPress base URL (without /graphql)
    const wpBaseUrl = wpApiUrl.replace(/\/graphql\/?$/, '');
    const redirectsEndpoint = `${wpBaseUrl}/wp-json/headless/v1/redirects`;
    try {
        // Build request headers with Basic Auth for staging environment
        const headers = {
            'Content-Type': 'application/json'
        };
        if (process.env.WP_AUTH_USER && process.env.WP_AUTH_PASSWORD) {
            const credentials = btoa(`${process.env.WP_AUTH_USER}:${process.env.WP_AUTH_PASSWORD}`);
            headers['Authorization'] = `Basic ${credentials}`;
        }
        // Next.js fetch cache: also dedupes redirects across instances behind the
        // same data cache, with the same 30-minute TTL.
        const response = await fetch(redirectsEndpoint, {
            headers,
            // @ts-ignore - Next.js extends RequestInit with `next`
            next: {
                revalidate: 1800,
                tags: [
                    'wordpress-redirects'
                ]
            }
        });
        if (!response.ok) {
            console.warn(`[Redirects] API returned ${response.status}`);
            lastFetch = now;
            return redirectsCache;
        }
        const data = await response.json();
        // Support both formats:
        // 1. Headless Tools plugin format: { from_path, to_url, status }
        // 2. Redirection plugin format: { items: [{ url, action_data: { url }, action_code, enabled }] }
        let items = [];
        if (Array.isArray(data)) {
            // Headless Tools plugin format - direct array
            items = data.map((r)=>({
                    origin: r.from_path.startsWith('/') ? r.from_path : `/${r.from_path}`,
                    target: r.to_url,
                    type: r.status || 301
                }));
        } else if (data.items && Array.isArray(data.items)) {
            // Redirection plugin format - { items: [...] }
            items = data.items.filter((r)=>r.enabled).map((r)=>({
                    origin: r.url.startsWith('/') ? r.url : `/${r.url}`,
                    target: r.action_data?.url || '/',
                    type: r.action_code || 301
                }));
        }
        redirectsCache = items;
        lastFetch = now;
        console.log(`[Redirects] Fetched ${redirectsCache.length} redirects from WordPress`);
    } catch (error) {
        console.error('[Redirects] Failed to fetch redirects:', error);
        lastFetch = now;
    }
    return redirectsCache;
}
async function middleware(request) {
    const path = request.nextUrl.pathname;
    const redirects = await getRedirects();
    // Check for exact match or match without trailing slash
    const match = redirects.find((r)=>r.origin === path || r.origin === path.replace(/\/$/, '') || r.origin + '/' === path);
    if (match) {
        const destination = match.target.startsWith('http') ? match.target : new URL(match.target, request.url).toString();
        console.log(`[Redirects] ${path} -> ${destination} (${match.type})`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(destination, match.type);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        // Match all paths except static files and API routes
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f2b15f93._.js.map