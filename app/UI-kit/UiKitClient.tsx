"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Download, Printer, FileText, Image as ImageIcon } from "lucide-react";

const BRAND_COLORS = [
  { name: "Dark Blue / Trust", hex: "#042940", token: "primary", note: "Primary background, headings on light surfaces" },
  { name: "Lime Green", hex: "#c5d520", token: "secondary", note: "Primary call-to-action, accents" },
  { name: "Pale Green", hex: "#d6d98b", token: "accent", note: "Soft accent, secondary highlights" },
  { name: "Dark Blue / Black", hex: "#111e26", token: "foreground", note: "Body text on light backgrounds" },
  { name: "Light Gray", hex: "#f2f2f2", token: "muted", note: "Subtle backgrounds, dividers" },
];

const TYPOGRAPHY = [
  { label: "H1 — Display", className: "text-5xl md:text-6xl font-bold", sample: "Nationwide Waste Solutions" },
  { label: "H2", className: "text-4xl md:text-5xl font-bold", sample: "On-demand. Coast to coast." },
  { label: "H3", className: "text-2xl md:text-3xl font-bold", sample: "Built for complex waste programs" },
  { label: "H4", className: "text-xl font-bold", sample: "Section heading" },
  { label: "Body Large", className: "text-lg", sample: "Tenth Rock delivers reliable commercial waste management across 48 states." },
  { label: "Body", className: "text-base", sample: "Default body copy used throughout the site for paragraphs and descriptions." },
  { label: "Small / Caption", className: "text-sm text-muted-foreground", sample: "Caption and metadata text." },
];

const LOGOS = [
  {
    name: "Primary Logo (light backgrounds)",
    file: "/images/logos/TenthRock-Logo.png",
    download: "TenthRock-Logo.png",
    bg: "bg-white",
  },
  {
    name: "Reverse Logo (dark backgrounds)",
    file: "/images/logos/Green-White-Logo.png",
    download: "TenthRock-Logo-Reverse.png",
    bg: "bg-[#042940]",
  },
];

export default function UiKitClient() {
  const printRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    if (!printRef.current || generating) return;
    setGenerating(true);
    try {
      // Make sure web fonts and images are fully loaded so the canvas
      // capture doesn't snapshot a half-rendered page.
      if (typeof document !== "undefined" && (document as any).fonts?.ready) {
        await (document as any).fonts.ready;
      }
      const imgs = Array.from(printRef.current.querySelectorAll("img"));
      await Promise.all(
        imgs.map((img) =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                img.addEventListener("load", () => resolve(), { once: true });
                img.addEventListener("error", () => resolve(), { once: true });
              }),
        ),
      );

      const mod: any = await import("html2pdf.js");
      const html2pdf = mod.default ?? mod;

      const el = printRef.current;
      const rect = el.getBoundingClientRect();
      const captureWidth = Math.max(rect.width, 1100);

      await html2pdf()
        .set({
          margin: [10, 10, 14, 10],
          filename: "TenthRock-UI-Kit.pdf",
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: "#ffffff",
            windowWidth: captureWidth,
            scrollX: 0,
            scrollY: 0,
            letterRendering: true,
            logging: false,
            onclone: (clonedDoc: Document) => {
              // 1. html2canvas mis-renders text inside <input>/<textarea>
              //    (placeholder + value baselines are off, clipping text).
              //    Replace each with a styled <div> that mimics the field
              //    but renders text reliably.
              const swapField = (el: HTMLInputElement | HTMLTextAreaElement, isMultiline: boolean) => {
                const text = el.value || el.getAttribute("placeholder") || "";
                const div = clonedDoc.createElement("div");
                div.textContent = text;
                // Copy classes so border/bg/padding/radius are preserved.
                div.className = el.className;
                div.style.display = "flex";
                div.style.alignItems = isMultiline ? "flex-start" : "center";
                div.style.whiteSpace = isMultiline ? "pre-wrap" : "nowrap";
                div.style.overflow = "hidden";
                div.style.color = "hsl(var(--muted-foreground))";
                if (isMultiline) {
                  const h = el.getBoundingClientRect().height;
                  if (h) div.style.minHeight = `${h}px`;
                }
                el.parentElement?.replaceChild(div, el);
              };
              clonedDoc
                .querySelectorAll<HTMLInputElement>("input[type='text'], input[type='email'], input:not([type])")
                .forEach((i) => swapField(i, false));
              clonedDoc
                .querySelectorAll<HTMLTextAreaElement>("textarea")
                .forEach((t) => swapField(t, true));

              // 2. Replace shadcn badges (.pdf-pill) with hand-built spans
              //    that html2canvas renders reliably. The shadcn defaults
              //    (text-xs + py-0.5) leave too little vertical room for
              //    html2canvas's baseline drift, clipping the text.
              const pillStyles: Record<string, string> = {
                default: "background:#042940;color:#ffffff;border:1px solid #042940;",
                secondary: "background:#c5d520;color:#042940;border:1px solid #c5d520;",
                outline: "background:transparent;color:#042940;border:1px solid #042940;",
                destructive: "background:#dc2626;color:#ffffff;border:1px solid #dc2626;",
              };
              clonedDoc.querySelectorAll<HTMLElement>('.pdf-pill').forEach((b) => {
                const text = (b.textContent || "").trim();
                const variant = (b.getAttribute("data-pill-variant") || "default").toLowerCase();
                const replacement = clonedDoc.createElement("span");
                replacement.textContent = text;
                // Use the line-height==height trick for vertical centering —
                // html2canvas mis-renders flex/baseline text but renders this
                // pattern reliably.
                replacement.style.cssText =
                  `display:inline-block;` +
                  `height:24px;` +
                  `line-height:24px;` +
                  `padding:0 12px;` +
                  `border-radius:6px;` +
                  `font-size:12px;` +
                  `font-weight:600;` +
                  `font-family:inherit;` +
                  `text-align:center;` +
                  `box-sizing:border-box;` +
                  (pillStyles[variant] || pillStyles.default);
                b.parentElement?.replaceChild(replacement, b);
              });

              // 2c. Strip bottom padding from the print container — the
              //     `py-16` baseline padding adds ~64px of trailing whitespace
              //     that pushes the captured canvas onto an empty 6th page.
              const root = clonedDoc.querySelector<HTMLElement>('.ui-kit-page');
              if (root) {
                root.style.paddingBottom = "0";
                root.style.marginBottom = "0";
                // Also strip trailing whitespace from every section so the
                // captured canvas isn't padded past the last page boundary.
                root.querySelectorAll<HTMLElement>("section").forEach((s) => {
                  s.style.setProperty("margin-bottom", "24px", "important");
                });
                const lastChild = root.lastElementChild as HTMLElement | null;
                if (lastChild) {
                  lastChild.style.marginBottom = "0";
                  lastChild.style.paddingBottom = "0";
                }
              }

              // 2d. Re-apply swatch background colors with !important so
              //     html2canvas always captures the colored block, even if
              //     a downstream stylesheet or color-adjust quirk drops it.
              clonedDoc
                .querySelectorAll<HTMLElement>(".pdf-swatch-color")
                .forEach((el) => {
                  const hex = el.getAttribute("data-pdf-bg");
                  if (hex) {
                    el.style.setProperty("background-color", hex, "important");
                    el.style.setProperty("background", hex, "important");
                    el.style.setProperty("-webkit-print-color-adjust", "exact");
                    el.style.setProperty("print-color-adjust", "exact");
                  }
                });

              // 3. Inject keep-together rules so cards & rows aren't sliced
              //    across pages.
              const css = clonedDoc.createElement("style");
              css.textContent = `
                .pdf-no-split {
                  page-break-inside: avoid !important;
                  break-inside: avoid !important;
                }
                .pdf-swatch-color {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              `;
              clonedDoc.head.appendChild(css);
            },
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait", compress: true },
          pagebreak: {
            mode: ["css", "legacy"],
            before: ".page-break",
            avoid: [".pdf-no-split", "img"],
          },
        })
        .from(el)
        .toPdf()
        .get("pdf")
        .then((pdf: any) => {
          // html2pdf occasionally emits a trailing blank page when the
          // captured canvas height ends just past a page boundary. Detect
          // and remove it so editors don't see an empty last page.
          try {
            // html2pdf occasionally emits a trailing page consisting of a
            // single image-draw representing the few pixels of whitespace
            // below the last content. Conservatively trim ONLY the final
            // page, and only when it matches a strict signature:
            //   - exactly one image draw (one " Do" op),
            //   - that image's drawn height (sy in "sx 0 0 sy tx ty cm")
            //     is < 50pt,
            //   - no text-rendering ops (Tj / TJ),
            //   - no path-painting ops (S / s / f / F / B).
            // This avoids accidentally deleting any real content page that
            // happens to contain a small image.
            const total: number = pdf.internal.getNumberOfPages();
            if (total > 1) {
              const page = pdf.internal.pages[total];
              if (Array.isArray(page)) {
                let doCount = 0;
                let lastSy: number | null = null;
                let hasText = false;
                let hasPath = false;
                for (const line of page) {
                  if (typeof line !== "string") continue;
                  if (line.includes(" Tj") || line.includes(" TJ")) hasText = true;
                  if (/(^| )[SsfFB]( |$)/.test(line)) hasPath = true;
                  if (line.endsWith(" Do")) doCount += 1;
                  if (line.endsWith(" cm")) {
                    const parts = line.split(/\s+/);
                    if (parts.length >= 7 && parts[6] === "cm") {
                      const sy = parseFloat(parts[3]);
                      if (!isNaN(sy)) lastSy = Math.abs(sy);
                    }
                  }
                }
                const isTrailingSliver =
                  doCount === 1 &&
                  !hasText &&
                  !hasPath &&
                  lastSy !== null &&
                  lastSy < 50;
                if (isTrailingSliver) {
                  pdf.deletePage(total);
                }
              }
            }
          } catch (e) {
            console.warn("[pdf] blank-page trim failed (non-fatal):", e);
          }
        })
        .save();
    } catch (err) {
      console.error("PDF generation failed", err);
      alert("Sorry — the PDF couldn't be generated. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div ref={printRef} className="ui-kit-page max-w-6xl mx-auto px-6 py-12 md:px-10 md:py-16">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Brand &amp; UI Kit</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-uikit-title">
              Tenth Rock UI Kit
            </h1>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              The shared brand language used across our headless WordPress site — colors, typography,
              components, and logo assets ready to download.
            </p>
          </div>
          <div className="no-print flex flex-wrap gap-3" data-html2canvas-ignore="true">
            <Button
              onClick={handleDownloadPdf}
              disabled={generating}
              data-testid="button-download-pdf"
              className="gap-2"
            >
              <Printer className="w-4 h-4" />
              {generating ? "Generating PDF..." : "Download PDF"}
            </Button>
          </div>
        </header>

        <Separator className="mb-12" />

        {/* Logos */}
        <section className="mb-16" id="logos">
          <SectionHeader
            eyebrow="01 — Logos"
            title="Logo assets"
            description="Download the official Tenth Rock logos. Use the reverse mark on dark backgrounds and the primary mark on light backgrounds."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {LOGOS.map((logo) => (
              <Card key={logo.file} data-testid={`card-logo-${logo.download}`} className="pdf-no-split">
                <CardContent className="p-0">
                  <div className={`${logo.bg} flex items-center justify-center p-12 rounded-t-md border-b`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.file}
                      alt={logo.name}
                      className="max-h-24 w-auto object-contain"
                      data-testid={`img-logo-${logo.download}`}
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{logo.name}</p>
                      <p className="text-sm text-muted-foreground">PNG · transparent background</p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="no-print gap-2" data-html2canvas-ignore="true">
                      <a
                        href={logo.file}
                        download={logo.download}
                        data-testid={`link-download-${logo.download}`}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Color palette */}
        <section className="mb-16" id="colors">
          <SectionHeader
            eyebrow="02 — Color"
            title="Brand palette"
            description="Five core colors expressed as Tailwind/CSS tokens. Use the lime green sparingly for primary calls-to-action."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {BRAND_COLORS.map((c) => (
              <div
                key={c.hex}
                className="rounded-md overflow-hidden border pdf-no-split"
                data-testid={`swatch-${c.token}`}
              >
                <div
                  className="h-28 pdf-swatch-color"
                  data-pdf-bg={c.hex}
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-4 bg-card">
                  <p className="font-semibold leading-tight">{c.name}</p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">{c.hex}</p>
                  <p className="text-xs text-muted-foreground mt-1">--{c.token}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-snug">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16 page-break" id="typography">
          <SectionHeader
            eyebrow="03 — Typography"
            title="Type scale"
            description="Manrope is the primary typeface for headings and body. Inter is reserved for utility/data."
          />
          <div className="space-y-6 mt-8">
            {TYPOGRAPHY.map((t) => (
              <div
                key={t.label}
                className="grid md:grid-cols-[180px_1fr] gap-4 items-baseline border-b pb-5 last:border-b-0 pdf-no-split"
                data-testid={`type-${t.label}`}
              >
                <div className="text-sm text-muted-foreground font-mono">{t.label}</div>
                <div className={t.className}>{t.sample}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16" id="buttons">
          <SectionHeader
            eyebrow="04 — Buttons"
            title="Buttons"
            description="Use the default variant for primary actions, secondary (lime) for headline CTAs, outline for tertiary actions."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="pdf-no-split">
              <CardHeader>
                <CardTitle className="text-base">Variants</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button data-testid="button-variant-default">Default</Button>
                <Button variant="secondary" data-testid="button-variant-secondary">Secondary</Button>
                <Button variant="outline" data-testid="button-variant-outline">Outline</Button>
                <Button variant="ghost" data-testid="button-variant-ghost">Ghost</Button>
                <Button variant="destructive" data-testid="button-variant-destructive">Destructive</Button>
                <Button variant="link" data-testid="button-variant-link">Link</Button>
              </CardContent>
            </Card>
            <Card className="pdf-no-split">
              <CardHeader>
                <CardTitle className="text-base">Sizes</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap items-end gap-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Download icon button">
                  <Download className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16 pdf-no-split" id="badges">
          <SectionHeader
            eyebrow="05 — Badges"
            title="Badges &amp; tags"
            description="Compact labels for status, categories, and metadata."
          />
          <div className="flex flex-wrap gap-2 mt-6 pdf-no-split">
            <Badge className="pdf-pill" data-pill-variant="default">Default</Badge>
            <Badge variant="secondary" className="pdf-pill" data-pill-variant="secondary">Secondary</Badge>
            <Badge variant="outline" className="pdf-pill" data-pill-variant="outline">Outline</Badge>
            <Badge variant="destructive" className="pdf-pill" data-pill-variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Form controls */}
        <section className="mb-16 page-break" id="forms">
          <SectionHeader
            eyebrow="06 — Forms"
            title="Form controls"
            description="Inputs, selections, and controls used across lead-capture forms."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="pdf-no-split">
              <CardHeader>
                <CardTitle className="text-base">Text fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="uikit-name">Name</Label>
                  <Input id="uikit-name" placeholder="Jane Doe" data-testid="input-uikit-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uikit-email">Email</Label>
                  <Input id="uikit-email" type="email" placeholder="jane@company.com" data-testid="input-uikit-email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uikit-msg">Message</Label>
                  <Textarea id="uikit-msg" placeholder="Tell us about your needs..." data-testid="input-uikit-msg" />
                </div>
              </CardContent>
            </Card>
            <Card className="pdf-no-split">
              <CardHeader>
                <CardTitle className="text-base">Selections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-3">
                  <Checkbox id="uikit-check" />
                  <Label htmlFor="uikit-check" className="font-normal">I agree to the terms</Label>
                </div>
                <RadioGroup defaultValue="opt1" className="space-y-2">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="opt1" id="uikit-r1" />
                    <Label htmlFor="uikit-r1" className="font-normal">Option one</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="opt2" id="uikit-r2" />
                    <Label htmlFor="uikit-r2" className="font-normal">Option two</Label>
                  </div>
                </RadioGroup>
                <div className="flex items-center gap-3">
                  <Switch id="uikit-switch" />
                  <Label htmlFor="uikit-switch" className="font-normal">Email me updates</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16" id="cards">
          <SectionHeader
            eyebrow="07 — Cards"
            title="Cards"
            description="Container component used for grouping content across the site."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="pdf-no-split">
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>A short supporting description.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards group related content. Keep padding consistent and avoid nesting cards inside
                  other cards.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Primary action</Button>
              </CardFooter>
            </Card>
            <Card className="pdf-no-split">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-secondary/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">With icon</CardTitle>
                    <CardDescription>Variant for feature lists</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use this layout for service tiles, feature grids, and capability summaries.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-3 mt-4 mb-0 pdf-no-split flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-sm text-muted-foreground">
          <p>Tenth Rock UI Kit · Internal reference</p>
          <p className="font-mono text-xs">v1.0</p>
        </footer>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl pdf-no-split">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">{eyebrow}</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
