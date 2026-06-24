/**
 * Client-side helper to submit a native <form> to a Gravity Form via the
 * /api/forms/submit-rest proxy and follow the editor-configured confirmation.
 *
 * Each form input must carry a `name` attribute matching Gravity Forms'
 * input naming convention: `input_<fieldId>` (or `input_<fieldId>.<subId>`
 * for compound fields like the consent checkbox).
 */

import { getRecaptchaToken } from "./recaptcha";

export interface GfSubmitResult {
  ok: boolean;
  redirectUrl?: string;
  message?: string;
  error?: string;
  validationMessages?: Record<string, string>;
}

export async function submitGravityForm(
  form: HTMLFormElement,
  formId: number,
): Promise<GfSubmitResult> {
  const data = new FormData(form);
  data.set("formId", String(formId));

  // Attach a reCAPTCHA v3 token (verified server-side in /api/forms/submit-rest).
  // Resolves to undefined when reCAPTCHA isn't configured or fails to load, in
  // which case the API route decides whether to enforce — forms never break.
  const recaptchaToken = await getRecaptchaToken("gf_submit");
  if (recaptchaToken) data.set("recaptcha_token", recaptchaToken);

  let res: Response;
  try {
    res = await fetch("/api/forms/submit-rest", { method: "POST", body: data });
  } catch (err) {
    return { ok: false, error: "Network error. Please try again." };
  }

  let body: any = null;
  try { body = await res.json(); } catch { /* ignore */ }

  if (!res.ok || !body?.is_valid) {
    const validationMessages = body?.validation_messages as
      | Record<string, string>
      | undefined;
    // Surface field-level validation messages so users see what to fix,
    // not just a generic "Submission failed".
    const fieldErrors = validationMessages
      ? Object.values(validationMessages).filter(Boolean).join(" ")
      : "";
    const error =
      fieldErrors ||
      body?.error ||
      "Submission failed. Please check your entries and try again.";
    return { ok: false, error, validationMessages };
  }

  // Editor-configured confirmation: follow redirect URL if present.
  const conf = body.confirmation;
  let redirectUrl: string | undefined;
  if (conf && conf.type === "redirect" && typeof conf.url === "string" && conf.url) {
    let url: string = conf.url;
    if (conf.queryString) {
      url += (url.includes("?") ? "&" : "?") + conf.queryString;
    }
    redirectUrl = url;
  }

  return { ok: true, redirectUrl, message: body.confirmation_message };
}
