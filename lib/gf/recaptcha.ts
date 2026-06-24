/**
 * reCAPTCHA v3 (invisible) helper for the headless Gravity Forms flow.
 *
 * The 6 native forms submit through `submitGravityForm` (submit-client.ts).
 * Just before posting we lazily load Google's v3 script and mint a token, which
 * the /api/forms/submit-rest route verifies server-side with the secret key
 * before forwarding the submission to WordPress.
 *
 * The site key is public and injected at build time via
 * NEXT_PUBLIC_RECAPTCHA_SITE_KEY. Everything degrades gracefully: if the key is
 * absent or the script fails to load, getRecaptchaToken() resolves to undefined
 * and submission still proceeds (the API route decides whether to enforce).
 */

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let loadPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("reCAPTCHA can only load in the browser"));
  }
  if (!SITE_KEY) {
    return Promise.reject(new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set"));
  }
  if (window.grecaptcha?.execute) {
    return Promise.resolve();
  }
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<void>((resolve, reject) => {
    const id = "recaptcha-v3-script";
    if (document.getElementById(id)) {
      // Tag exists but grecaptcha may not be ready yet — poll briefly.
      const started = Date.now();
      const iv = setInterval(() => {
        if (window.grecaptcha?.execute) {
          clearInterval(iv);
          resolve();
        } else if (Date.now() - started > 10000) {
          clearInterval(iv);
          reject(new Error("reCAPTCHA load timeout"));
        }
      }, 100);
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.onload = () => {
      if (!window.grecaptcha) {
        reject(new Error("grecaptcha unavailable after load"));
        return;
      }
      window.grecaptcha.ready(() => resolve());
    };
    s.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
    document.head.appendChild(s);
  });

  return loadPromise;
}

export function isRecaptchaConfigured(): boolean {
  return Boolean(SITE_KEY);
}

export async function getRecaptchaToken(
  action: string,
): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  try {
    await loadScript();
    return await window.grecaptcha!.execute(SITE_KEY, { action });
  } catch {
    return undefined;
  }
}
