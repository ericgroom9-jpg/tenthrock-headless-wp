#!/usr/bin/env node
/**
 * Seed the 5 site forms in Gravity Forms via REST API v2.
 * Idempotent on title: existing forms with the same title are updated, not duplicated.
 *
 * Usage:  node scripts/seed-gravity-forms.mjs
 * Writes: lib/gf/form-ids.ts
 *
 * Required env: WP_API_URL, GF_CONSUMER_KEY, GF_CONSUMER_SECRET
 */

import { writeFileSync } from "node:fs";

const { WP_API_URL, GF_CONSUMER_KEY, GF_CONSUMER_SECRET } = process.env;
if (!WP_API_URL || !GF_CONSUMER_KEY || !GF_CONSUMER_SECRET) {
  console.error("Missing WP_API_URL / GF_CONSUMER_KEY / GF_CONSUMER_SECRET");
  process.exit(1);
}

const REST_BASE = new URL(WP_API_URL).origin + "/wp-json/gf/v2";
const AUTH = "Basic " + Buffer.from(`${GF_CONSUMER_KEY}:${GF_CONSUMER_SECRET}`).toString("base64");

async function gf(path, init = {}) {
  const res = await fetch(REST_BASE + path, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) {
    throw new Error(`GF ${init.method || "GET"} ${path} failed: ${res.status} ${text.slice(0, 400)}`);
  }
  return data;
}

const REDIRECT_URL = "/"; // testing — editor can change later in WP

const defaultRedirectConfirmation = () => ({
  // Gravity Forms uses string IDs for confirmations
  "5d4d9b38f6b5a": {
    id: "5d4d9b38f6b5a",
    name: "Default Confirmation",
    isDefault: true,
    type: "redirect",
    message: "",
    url: REDIRECT_URL,
    pageId: "",
    queryString: "",
    disableAutoformat: false,
    conditionalLogic: [],
  },
});

const interestChoices = [
  { text: "Emergency Waste Removal", value: "emergency-waste-removal", isSelected: false },
  { text: "Specialized Project Logistics", value: "specialized-project-logistics", isSelected: false },
  { text: "Dumpster Rentals", value: "dumpsters-containers", isSelected: false },
  { text: "Waste Advisory", value: "waste-operations-advisory", isSelected: false },
  { text: "Other", value: "other", isSelected: false },
];

// Build the standard 8-field "lead" form (Contact / Service Inquiry / Location Inquiry share this schema)
function leadFormFields() {
  return [
    { id: 1, type: "text", label: "First name", isRequired: true },
    { id: 2, type: "text", label: "Last name", isRequired: true },
    { id: 3, type: "email", label: "Email", isRequired: true },
    { id: 4, type: "phone", label: "Phone number", isRequired: true, phoneFormat: "standard" },
    { id: 5, type: "text", label: "Company", isRequired: true },
    {
      id: 6, type: "select", label: "I'm interested in help with", isRequired: true,
      placeholder: "Select an option", choices: interestChoices,
    },
    { id: 7, type: "textarea", label: "Message", isRequired: true },
    {
      id: 8, type: "checkbox", label: "Privacy Policy", isRequired: true, labelPlacement: "hidden_label",
      choices: [{ text: "I accept the Privacy Policy", value: "1", isSelected: false }],
      inputs: [{ id: "8.1", label: "I accept the Privacy Policy" }],
    },
  ];
}

// Form 2 — Request A Service (single Name field)
function requestServiceFields() {
  return [
    { id: 1, type: "text", label: "Name", isRequired: true },
    { id: 2, type: "email", label: "Email", isRequired: true },
    { id: 3, type: "phone", label: "Phone Number", isRequired: true, phoneFormat: "standard" },
    {
      id: 4, type: "select", label: "I'm interested in help with", isRequired: true,
      placeholder: "Select an option", choices: interestChoices,
    },
    { id: 5, type: "textarea", label: "What can we help you with?", isRequired: true },
    {
      id: 6, type: "checkbox", label: "Privacy Policy", isRequired: true, labelPlacement: "hidden_label",
      choices: [{ text: "I accept the Privacy Policy", value: "1", isSelected: false }],
      inputs: [{ id: "6.1", label: "I accept the Privacy Policy" }],
    },
  ];
}

// Form 3 — Join Our Network (single email)
function joinNetworkFields() {
  return [
    { id: 1, type: "email", label: "Your business email", isRequired: true },
  ];
}

const FORMS = [
  { key: "contact",          title: "Contact Us",        button: { type: "text", text: "Submit Request" }, fields: leadFormFields() },
  { key: "requestAService",  title: "Request A Service", button: { type: "text", text: "Submit Request" }, fields: requestServiceFields() },
  { key: "joinOurNetwork",   title: "Join Our Network",  button: { type: "text", text: "Submit" },         fields: joinNetworkFields() },
  { key: "serviceInquiry",   title: "Service Inquiry",   button: { type: "text", text: "Submit Request" }, fields: leadFormFields() },
  { key: "locationInquiry",  title: "Location Inquiry",  button: { type: "text", text: "Submit Request" }, fields: leadFormFields() },
];

function buildBody({ title, fields, button }) {
  return {
    title,
    description: "",
    labelPlacement: "top_label",
    descriptionPlacement: "below",
    button,
    fields,
    confirmations: defaultRedirectConfirmation(),
    is_active: "1",
    notifications: {}, // editor can add their own in WP UI
    useCurrentUserAsAuthor: false,
  };
}

async function findExistingByTitle(title) {
  const list = await gf("/forms");
  // GF returns either an array or an object keyed by id
  const arr = Array.isArray(list) ? list : Object.entries(list).map(([id, f]) => ({ id, ...f }));
  return arr.find((f) => (f.title || "").trim().toLowerCase() === title.trim().toLowerCase()) || null;
}

const ids = {};

for (const form of FORMS) {
  const body = buildBody(form);
  const existing = await findExistingByTitle(form.title);
  let id;
  if (existing) {
    id = existing.id;
    // Update existing form (preserve id) — set fields + redirect confirmation
    await gf(`/forms/${id}`, { method: "PUT", body: JSON.stringify({ ...body, id }) });
    console.log(`  ↻ updated  "${form.title}"  id=${id}`);
  } else {
    const created = await gf("/forms", { method: "POST", body: JSON.stringify(body) });
    // POST returns either a numeric id or the full form object
    id = typeof created === "number" || typeof created === "string"
      ? created
      : (created.id || created.form_id);
    console.log(`  ✚ created  "${form.title}"  id=${id}`);
  }
  ids[form.key] = Number(id);
}

const out = `// AUTO-GENERATED by scripts/seed-gravity-forms.mjs — do not edit by hand.
// Re-run \`node scripts/seed-gravity-forms.mjs\` if forms are recreated in WP.

export const GF_FORM_IDS = {
  contact:          ${ids.contact},
  requestAService:  ${ids.requestAService},
  joinOurNetwork:   ${ids.joinOurNetwork},
  serviceInquiry:   ${ids.serviceInquiry},
  locationInquiry:  ${ids.locationInquiry},
} as const;

export type GfFormKey = keyof typeof GF_FORM_IDS;
`;
writeFileSync("lib/gf/form-ids.ts", out);
console.log("\nWrote lib/gf/form-ids.ts");
console.log(JSON.stringify(ids, null, 2));
