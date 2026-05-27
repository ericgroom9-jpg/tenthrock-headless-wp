#!/usr/bin/env node
/**
 * Direct test of the Insightly forwarder against the live Insightly API.
 * Builds synthetic FormData for each of the 6 GF forms and calls
 * forwardToInsightly() — bypasses WordPress/GF so we don't create real
 * GF entries while still hitting the real Insightly API.
 *
 * Usage: node scripts/test-insightly-forward.mjs
 */

import { forwardToInsightly, buildInsightlyPayload } from "../lib/insightly/forward";

const REFERER_LOCATION = "https://proelectricalservices.replit.app/locations/florida";
const REFERER_GENERIC  = "https://proelectricalservices.replit.app/contact";

function fd(entries) {
  const f = new FormData();
  for (const [k, v] of Object.entries(entries)) f.append(k, v);
  return f;
}

const cases = [
  {
    name: "Contact (formId=1)",
    formId: 1,
    referer: REFERER_GENERIC,
    data: {
      input_1: "TEST-Contact",
      input_2: "Lead",
      input_3: "test+contact@insightly-test.local",
      input_4: "+15555550101",
      input_5: "Acme Test Co",
      input_6: "emergency-waste-removal",
      input_7: "TEST submission from Replit Agent — Contact form. Please delete.",
      "input_8.1": "1",
    },
  },
  {
    name: "Request A Service (formId=2)",
    formId: 2,
    referer: "https://proelectricalservices.replit.app/request-a-service",
    data: {
      input_1: "TEST-RequestAService Lead",
      input_2: "test+ras@insightly-test.local",
      input_3: "+15555550102",
      input_4: "dumpsters-containers",
      input_5: "TEST submission — Request A Service. Please delete.",
      "input_6.1": "1",
    },
  },
  {
    name: "Join Our Network / Vendor (formId=3)",
    formId: 3,
    referer: "https://proelectricalservices.replit.app/join-our-network",
    data: {
      input_1: "test+vendor@insightly-test.local",
    },
  },
  {
    name: "Service Inquiry (formId=4)",
    formId: 4,
    referer: "https://proelectricalservices.replit.app/emergency-waste-removal",
    data: {
      input_1: "TEST-Service",
      input_2: "Inquiry",
      input_3: "test+service@insightly-test.local",
      input_4: "+15555550104",
      input_5: "Acme Test Co",
      input_6: "specialized-project-logistics",
      input_7: "TEST submission — Service Inquiry. Please delete.",
      "input_8.1": "1",
    },
  },
  {
    name: "Location Inquiry (formId=5)",
    formId: 5,
    referer: REFERER_LOCATION,
    data: {
      input_1: "TEST-Location",
      input_2: "Inquiry",
      input_3: "test+location@insightly-test.local",
      input_4: "+15555550105",
      input_5: "Acme Test Co",
      input_6: "waste-operations-advisory",
      input_7: "TEST submission — Location Inquiry from /locations/florida. Please delete.",
      "input_8.1": "1",
    },
  },
  {
    name: "Newsletter (formId=6)",
    formId: 6,
    referer: "https://proelectricalservices.replit.app/",
    data: {
      input_1: "test+newsletter@insightly-test.local",
    },
  },
];

let pass = 0, fail = 0;
for (const c of cases) {
  const f = fd(c.data);
  const payload = buildInsightlyPayload(c.formId, f, c.referer);
  console.log(`\n=== ${c.name} ===`);
  console.log("Payload preview:", JSON.stringify(payload, null, 2));
  const ok = await forwardToInsightly(c.formId, f, c.referer);
  if (ok) { console.log(`✓ ${c.name} — Insightly accepted`); pass++; }
  else    { console.log(`✗ ${c.name} — Insightly rejected (see [insightly] log above)`); fail++; }
}

console.log(`\n=========================`);
console.log(`Results: ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
