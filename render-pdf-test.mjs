import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const OUT = "/tmp/pdf-test";
const URL = "http://localhost:5000/UI-kit";

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  executablePath: "/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  defaultViewport: { width: 1280, height: 900, deviceScaleFactor: 1 },
});
const page = await browser.newPage();

const client = await page.createCDPSession();
await client.send("Page.setDownloadBehavior", { behavior: "allow", downloadPath: OUT });

page.on("console", (m) => console.log("[browser]", m.type(), m.text()));
page.on("pageerror", (e) => console.log("[pageerror]", e.message));

console.log("→ navigating");
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60_000 });

await page.evaluate(async () => {
  // @ts-ignore
  if (document.fonts?.ready) await document.fonts.ready;
});

await page.screenshot({ path: path.join(OUT, "page-full.png"), fullPage: true });
console.log("→ saved full-page screenshot");

console.log("→ clicking Download PDF");
await page.click('[data-testid="button-download-pdf"]');

const start = Date.now();
let pdf = null;
while (Date.now() - start < 90_000) {
  const files = fs.readdirSync(OUT).filter((f) => f.endsWith(".pdf"));
  if (files.length) {
    const candidate = path.join(OUT, files[0]);
    const size = fs.statSync(candidate).size;
    await new Promise((r) => setTimeout(r, 500));
    const size2 = fs.statSync(candidate).size;
    if (size === size2 && size > 1000) {
      pdf = candidate;
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 500));
}

await browser.close();

if (!pdf) {
  console.log("FAIL: no PDF was downloaded");
  process.exit(1);
}

const stat = fs.statSync(pdf);
console.log(`→ PDF: ${pdf}  size: ${(stat.size / 1024).toFixed(1)} KB`);
