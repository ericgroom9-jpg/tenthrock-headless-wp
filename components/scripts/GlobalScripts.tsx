import Script from 'next/script';
import { storage } from '@/lib/storage';

/**
 * Editor-pasted snippets from WP (e.g. the official GTM container) arrive as
 * full HTML — `<!-- comment --><script>...</script>` for the head, and
 * `<!-- comment --><noscript><iframe.../></noscript>` for the body.
 *
 * `next/script` with `dangerouslySetInnerHTML` puts the value INSIDE a real
 * `<script>` tag, so passing HTML there causes:
 *   "Failed to execute 'appendChild' on 'Node': Unexpected token '<'"
 *
 * We therefore parse the WP value into discrete pieces and render them
 * appropriately:
 *   - `<script>…</script>` blocks → JS extracted and rendered via <Script>
 *   - everything else (comments, `<noscript>` fallbacks) → rendered as raw
 *     HTML so they appear in the DOM verbatim
 */
function extractScriptBodies(html: string): { scripts: string[]; rawHtml: string } {
  const scripts: string[] = [];
  const re = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  const rawHtml = html.replace(re, (_match, body) => {
    if (body && body.trim()) scripts.push(body);
    return '';
  });
  return { scripts, rawHtml };
}

function hasMeaningfulContent(value: string | null): value is string {
  return !!value && value.trim().length > 0;
}

export async function GlobalScripts() {
  let headRaw: string | null = null;
  let bodyRaw: string | null = null;

  try {
    // 1s timeout: this call runs on every page render and a slow/failing
    // DB connection should never block the document response. Editor-
    // supplied global scripts are nice-to-have, not critical-path.
    const settings = await Promise.race([
      storage.getAllGlobalSettings(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('global-scripts timeout (1s)')), 1000),
      ),
    ]);
    for (const setting of settings) {
      if (setting.key === 'global_head_scripts') headRaw = setting.value;
      else if (setting.key === 'global_body_scripts') bodyRaw = setting.value;
    }
  } catch (error) {
    // Downgraded from console.error → warn: in normal operation this is a
    // benign DB hiccup and the page still renders correctly via fallbacks.
    console.warn('[global-scripts] skipped:', (error as Error).message);
  }

  const head = hasMeaningfulContent(headRaw) ? extractScriptBodies(headRaw) : null;
  const body = hasMeaningfulContent(bodyRaw) ? extractScriptBodies(bodyRaw) : null;

  return (
    <>
      {head?.scripts.map((js, i) => (
        <Script
          key={`global-head-${i}`}
          id={`global-head-scripts-${i}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: js }}
        />
      ))}
      {body?.scripts.map((js, i) => (
        <Script
          key={`global-body-${i}`}
          id={`global-body-scripts-${i}`}
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: js }}
        />
      ))}
      {body && body.rawHtml.trim() && (
        <div
          id="global-body-raw"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: body.rawHtml }}
        />
      )}
    </>
  );
}
