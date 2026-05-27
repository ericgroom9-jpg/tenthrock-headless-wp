/**
 * Insightly CRM forwarder.
 *
 * Called fire-and-forget from `app/api/forms/submit-rest/route.ts` AFTER a
 * Gravity Forms submission succeeds. Failures here MUST never break the
 * user-facing form flow — every error is caught and logged.
 *
 * Auth: Basic auth, base64 of `${INSIGHTLY_API_KEY}:` (note trailing colon).
 * Endpoint: https://api.{pod}.insightly.com/v3.1/Leads
 *   - Pod defaults to `na1`; override with `INSIGHTLY_API_POD` if your
 *     instance lives in eu1 / au1 / etc.
 */

import { GF_FORM_IDS } from "@/lib/gf/form-ids";

type FormKey = keyof typeof GF_FORM_IDS;

const FORM_ID_TO_KEY: Record<number, FormKey> = Object.fromEntries(
  Object.entries(GF_FORM_IDS).map(([k, v]) => [v, k as FormKey]),
) as Record<number, FormKey>;

// Human-readable source label + tag per form.
const FORM_META: Record<FormKey, { source: string; tag: string }> = {
  contact:         { source: "Website - Contact Form",        tag: "Contact"             },
  requestAService: { source: "Website - Request A Service",   tag: "Request A Service"   },
  joinOurNetwork:  { source: "Website - Vendor Application",  tag: "Vendor Application"  },
  serviceInquiry:  { source: "Website - Service Inquiry",     tag: "Service Inquiry"     },
  locationInquiry: { source: "Website - Location Inquiry",    tag: "Location Inquiry"    },
  newsletter:      { source: "Website - Newsletter Signup",   tag: "Newsletter"          },
};

// Interest dropdown slug → Insightly boolean custom-field API name.
// The dropdown is single-select; the selected slug fires `true`, all others
// fire `false`, so the Insightly record always has the full picture.
const INTEREST_TO_CUSTOM_FIELD: Record<string, string> = {
  "emergency-waste-removal":     "Waste_Removal__c",
  "dumpsters-containers":        "Dumpster_Rental__c",
  "specialized-project-logistics": "Hauling__c",
  "waste-operations-advisory":   "Pressure_Washing__c",
  "other":                       "Other__c",
};
const ALL_INTEREST_FIELDS = Object.values(INTEREST_TO_CUSTOM_FIELD);

// Per-form mapping of GF input names → semantic role.
// `null` for fields the form doesn't have.
interface FieldMap {
  firstName: string | null;
  lastName: string | null;
  fullName: string | null; // single-field name (only form 2)
  email: string | null;
  phone: string | null;
  company: string | null;
  interest: string | null;
  message: string | null;
}

const FIELD_MAPS: Record<FormKey, FieldMap> = {
  contact: {
    firstName: "input_1", lastName: "input_2", fullName: null,
    email: "input_3", phone: "input_4", company: "input_5",
    interest: "input_6", message: "input_7",
  },
  requestAService: {
    firstName: null, lastName: null, fullName: "input_1",
    email: "input_2", phone: "input_3", company: null,
    interest: "input_4", message: "input_5",
  },
  joinOurNetwork: {
    firstName: null, lastName: null, fullName: null,
    email: "input_1", phone: null, company: null,
    interest: null, message: null,
  },
  serviceInquiry: {
    firstName: "input_1", lastName: "input_2", fullName: null,
    email: "input_3", phone: "input_4", company: "input_5",
    interest: "input_6", message: "input_7",
  },
  locationInquiry: {
    firstName: "input_1", lastName: "input_2", fullName: null,
    email: "input_3", phone: "input_4", company: "input_5",
    interest: "input_6", message: "input_7",
  },
  newsletter: {
    firstName: null, lastName: null, fullName: null,
    email: "input_1", phone: null, company: null,
    interest: null, message: null,
  },
};

function str(formData: FormData, name: string | null): string | undefined {
  if (!name) return undefined;
  const v = formData.get(name);
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t || undefined;
}

function splitFullName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

// Derive the state/location name (e.g. "Florida") from a location-page URL
// like `https://.../locations/florida` or `/locations/florida`.
function deriveLocationFromReferer(referer: string | null): string | undefined {
  if (!referer) return undefined;
  let pathname: string;
  try {
    pathname = new URL(referer, "https://placeholder.local").pathname;
  } catch {
    return undefined;
  }
  const m = pathname.match(/\/locations\/([^/?#]+)/i);
  if (!m) return undefined;
  return m[1]
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

interface InsightlyCustomField {
  FIELD_NAME: string;
  CUSTOM_FIELD_ID: string;
  FIELD_VALUE: string | number | boolean;
}

interface InsightlyTag {
  TAG_NAME: string;
}

interface InsightlyLeadPayload {
  FIRST_NAME?: string;
  LAST_NAME?: string;
  EMAIL_ADDRESS?: string;
  PHONE?: string;
  ORGANIZATION_NAME?: string;
  DESCRIPTION?: string;
  LEAD_SOURCE?: string;
  ADDRESS_STREET?: string;
  TAGS?: InsightlyTag[];
  CUSTOMFIELDS?: InsightlyCustomField[];
}

export function buildInsightlyPayload(
  formId: number,
  formData: FormData,
  referer: string | null,
): InsightlyLeadPayload | null {
  const formKey = FORM_ID_TO_KEY[formId];
  if (!formKey) return null;

  const map = FIELD_MAPS[formKey];
  const meta = FORM_META[formKey];

  const payload: InsightlyLeadPayload = {};

  // --- Name ---
  if (map.fullName) {
    const full = str(formData, map.fullName);
    if (full) {
      const { first, last } = splitFullName(full);
      payload.FIRST_NAME = first;
      if (last) payload.LAST_NAME = last;
    }
  } else {
    const first = str(formData, map.firstName);
    const last = str(formData, map.lastName);
    if (first) payload.FIRST_NAME = first;
    if (last)  payload.LAST_NAME  = last;
  }

  // --- Email / phone / company ---
  const email = str(formData, map.email);
  if (email) payload.EMAIL_ADDRESS = email;

  const phone = str(formData, map.phone);
  if (phone) payload.PHONE = phone;

  const company = str(formData, map.company);
  if (company) payload.ORGANIZATION_NAME = company;

  // --- Message → DESCRIPTION ---
  const message = str(formData, map.message);
  if (message) payload.DESCRIPTION = message;

  // --- Source → LEAD_SOURCE ---
  payload.LEAD_SOURCE = meta.source;

  // --- Location (only for Location Inquiry) → ADDRESS_STREET ---
  if (formKey === "locationInquiry") {
    const loc = deriveLocationFromReferer(referer);
    if (loc) payload.ADDRESS_STREET = loc;
  }

  // --- Tags → form type ---
  payload.TAGS = [{ TAG_NAME: meta.tag }];

  // --- Interest dropdown → boolean custom fields ---
  const interest = str(formData, map.interest);
  if (interest) {
    const selectedField = INTEREST_TO_CUSTOM_FIELD[interest];
    payload.CUSTOMFIELDS = ALL_INTEREST_FIELDS.map(fieldName => ({
      FIELD_NAME: fieldName,
      CUSTOM_FIELD_ID: fieldName,
      FIELD_VALUE: fieldName === selectedField,
    }));
  }

  return payload;
}

function getInsightlyUrl(): string {
  const pod = process.env.INSIGHTLY_API_POD || "na1";
  return `https://api.${pod}.insightly.com/v3.1/Leads`;
}

/**
 * Fire-and-forget: forwards a successful form submission to Insightly as a
 * Lead. Resolves to `true` on HTTP 2xx, `false` otherwise. NEVER throws.
 */
export async function forwardToInsightly(
  formId: number,
  formData: FormData,
  referer: string | null,
): Promise<boolean> {
  try {
    const apiKey = process.env.INSIGHTLY_API_KEY;
    if (!apiKey) {
      console.warn("[insightly] INSIGHTLY_API_KEY not set — skipping forward");
      return false;
    }

    const payload = buildInsightlyPayload(formId, formData, referer);
    if (!payload) {
      console.warn(`[insightly] no field map for formId=${formId} — skipping`);
      return false;
    }

    // Insightly Leads require either a name or email to create a record.
    if (!payload.EMAIL_ADDRESS && !payload.FIRST_NAME && !payload.LAST_NAME) {
      console.warn(`[insightly] formId=${formId} missing both name and email — skipping`);
      return false;
    }

    const credentials = Buffer.from(`${apiKey}:`).toString("base64");
    const res = await fetch(getInsightlyUrl(), {
      method: "POST",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `[insightly] POST failed formId=${formId} status=${res.status}`,
        text.slice(0, 500),
      );
      return false;
    }

    return true;
  } catch (err) {
    console.error("[insightly] forward threw:", err);
    return false;
  }
}
