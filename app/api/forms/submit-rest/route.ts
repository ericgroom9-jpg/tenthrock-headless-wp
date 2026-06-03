import { NextRequest, NextResponse } from 'next/server';
import { after } from 'next/server';
import { forwardToInsightly } from '@/lib/insightly/forward';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 10;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Gravity Forms emits empty-authority absolute URLs like "http:///foo" for
// relative confirmation redirects (it can't resolve a base host). The WHATWG
// URL parser mis-reads these — `new URL("http:///foo").host` returns "foo",
// not "" — so the first path segment leaks into the host and the browser
// navigates to "http://foo". Detect the empty authority from the RAW string
// and return a relative path so the redirect stays on the current domain.
function normalizeConfirmationUrl(raw: string): string {
  if (!raw) return raw;
  // "http:///thank-you" or "https:///foo/bar" -> "/thank-you" / "/foo/bar"
  if (/^https?:\/\//i.test(raw)) {
    const afterScheme = raw.replace(/^https?:\/\//i, '');
    if (afterScheme.startsWith('/')) return afterScheme; // empty authority
  }
  // Genuine empty-host parse (defensive) — keep relative path.
  try {
    const u = new URL(raw);
    if (!u.host) return u.pathname + u.search + u.hash;
  } catch {
    /* already relative (e.g. "/foo") — keep as-is */
  }
  return raw;
}

function getWpRestBaseUrl(): string {
  // Prefer the canonical REST URL, then derive from the GraphQL URL or the
  // legacy WP_API_URL secret. All three resolve to the same `<host>/wp-json` base.
  const candidate =
    process.env.WORDPRESS_REST_URL ||
    process.env.WORDPRESS_GRAPHQL_URL ||
    process.env.WP_API_URL;
  if (!candidate) {
    throw new Error(
      'No WordPress URL configured (set WORDPRESS_REST_URL, WORDPRESS_GRAPHQL_URL, or WP_API_URL)'
    );
  }
  const url = new URL(candidate);
  return `${url.protocol}//${url.host}/wp-json`;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const formData = await request.formData();
    const formId = formData.get('formId');
    const honeypot = formData.get('gf_hp');

    // Honeypot check - silently succeed for bots
    if (honeypot) {
      return NextResponse.json({
        is_valid: true,
        confirmation_message: 'Thank you for your submission.',
        entry_id: null,
      });
    }

    if (!formId) {
      return NextResponse.json(
        { error: 'formId is required' },
        { status: 400 }
      );
    }

    // Build FormData for WordPress REST API
    const wpFormData = new FormData();
    
    // Copy all input_ prefixed fields to wpFormData (including files)
    // Gravity Forms REST API expects input_{fieldId} or input_{fieldId}.{subInputId} format
    const inputFieldPattern = /^input_\d+(?:[._]\d+)?$/;
    
    for (const [key, value] of formData.entries()) {
      if (inputFieldPattern.test(key)) {
        // Value could be a string or File - FormData handles both
        wpFormData.append(key, value);
      }
    }

    const wpRestUrl = getWpRestBaseUrl();
    const submitUrl = `${wpRestUrl}/gf/v2/forms/${formId}/submissions`;

    const headers: Record<string, string> = {};

    // Gravity Forms REST API v2 requires Basic Auth with consumer key/secret
    // (issued via WP → Forms → Settings → REST API). The site-wide WP_AUTH_USER
    // creds are GraphQL-only and will be rejected here with 401.
    if (process.env.GF_CONSUMER_KEY && process.env.GF_CONSUMER_SECRET) {
      const credentials = Buffer.from(
        `${process.env.GF_CONSUMER_KEY}:${process.env.GF_CONSUMER_SECRET}`
      ).toString('base64');
      headers['Authorization'] = `Basic ${credentials}`;
    } else {
      console.error('GF_CONSUMER_KEY / GF_CONSUMER_SECRET not configured — submission will likely fail.');
    }

    const response = await fetch(submitUrl, {
      method: 'POST',
      headers,
      body: wpFormData,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gravity Forms REST API error:', data);
      return NextResponse.json(
        { error: data.message || 'Submission failed', validation_messages: data.validation_messages },
        { status: response.status }
      );
    }

    // REST API returns: { is_valid, confirmation_message, entry_id, validation_messages }
    if (!data.is_valid) {
      return NextResponse.json(
        { 
          is_valid: false,
          validation_messages: data.validation_messages,
          error: 'Validation failed'
        },
        { status: 400 }
      );
    }

    // Surface the confirmation object from upstream so the client can follow
    // redirect-type confirmations (editor-managed in WP → Forms → Confirmations).
    // GF nests the resolved confirmation under `data.form.confirmation` and also
    // exposes `confirmation_redirect` / `confirmation_type` at the top level.
    let confirmation = data?.form?.confirmation ?? null;
    if (confirmation && confirmation.type === 'redirect' && typeof confirmation.url === 'string') {
      confirmation = { ...confirmation, url: normalizeConfirmationUrl(confirmation.url) };
    }
    if (!confirmation && data.confirmation_type === 'redirect' && data.confirmation_redirect) {
      confirmation = { type: 'redirect', url: normalizeConfirmationUrl(data.confirmation_redirect) };
    }
    // Forward to Insightly CRM as a Lead. Deferred with `after()` so the
    // user-facing response (and thank-you redirect) returns immediately;
    // Next.js keeps the serverless invocation alive until this resolves
    // instead of killing it the moment the response is sent.
    // Wrapped + caught inside `forwardToInsightly` so it can NEVER break
    // the user-facing form.
    const formIdNum = Number(formId);
    const referer = request.headers.get('referer');
    if (Number.isFinite(formIdNum)) {
      after(() => forwardToInsightly(formIdNum, formData, referer));
    }

    return NextResponse.json({
      is_valid: true,
      confirmation_message: data.confirmation_message,
      confirmation,
      entry_id: data.entry_id,
    });
  } catch (error: unknown) {
    console.error('Error submitting to Gravity Forms REST API:', error);
    
    let errorMessage = 'Failed to submit form';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
