#!/bin/bash
set -e

# Puppeteer is only used by the dev-only render-pdf-test.mjs script, not the
# Next.js app runtime. Its postinstall browser download is unreliable in this
# environment (leaves empty cache folders that break subsequent installs), so
# skip it to keep dependency installs deterministic.
export PUPPETEER_SKIP_DOWNLOAD=true

npm ci --no-audit --no-fund || npm i --no-audit --no-fund
