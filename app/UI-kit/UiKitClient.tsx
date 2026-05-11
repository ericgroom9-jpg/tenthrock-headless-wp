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
      const mod: any = await import("html2pdf.js");
      const html2pdf = mod.default ?? mod;
      await html2pdf()
        .set({
          margin: [12, 12, 12, 12],
          filename: "TenthRock-UI-Kit.pdf",
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["css", "legacy"], before: ".page-break" },
        })
        .from(printRef.current)
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
              <Card key={logo.file} data-testid={`card-logo-${logo.download}`}>
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
                className="rounded-md overflow-hidden border"
                data-testid={`swatch-${c.token}`}
              >
                <div className="h-28" style={{ backgroundColor: c.hex }} />
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
                className="grid md:grid-cols-[180px_1fr] gap-4 items-baseline border-b pb-5 last:border-b-0"
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
            <Card>
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
            <Card>
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
        <section className="mb-16" id="badges">
          <SectionHeader
            eyebrow="05 — Badges"
            title="Badges &amp; tags"
            description="Compact labels for status, categories, and metadata."
          />
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
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
            <Card>
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
            <Card>
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
            <Card>
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
            <Card>
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
        <footer className="border-t pt-8 mt-16 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-muted-foreground">
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
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">{eyebrow}</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
