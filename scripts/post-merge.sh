#!/bin/bash
set -e
npm ci --no-audit --no-fund || npm i --no-audit --no-fund
