import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { SeoHead } from '@/components/seo/SeoHead';
import { ArrowRight, Check, X, AlertCircle, Info } from 'lucide-react';

export default function StyleGuide() {
  return (
    <Layout>
      <SeoHead
        title="Style Guide - Tenth Rock Design System"
        description="Brand colors, typography, and component styles for the Tenth Rock design system."
      />

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h1 className="text-h1 mb-4" data-testid="text-styleguide-title">
            Style Guide
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            The Tenth Rock design system. Use these tokens and components consistently throughout the application.
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-16" id="colors">
          <h2 className="text-h2 mb-8">Colors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch 
              name="Primary (Dark Blue)" 
              cssVar="--primary" 
              hex="#042940"
              className="bg-primary text-primary-foreground"
            />
            <ColorSwatch 
              name="Secondary (Lime)" 
              cssVar="--secondary" 
              hex="#c5d520"
              className="bg-secondary text-secondary-foreground"
            />
            <ColorSwatch 
              name="Accent (Pale Green)" 
              cssVar="--accent" 
              hex="#d6d98b"
              className="bg-accent text-accent-foreground"
            />
            <ColorSwatch 
              name="Background" 
              cssVar="--background" 
              hex="#ffffff"
              className="bg-background text-foreground border"
            />
            <ColorSwatch 
              name="Foreground" 
              cssVar="--foreground" 
              hex="#111e26"
              className="bg-foreground text-background"
            />
            <ColorSwatch 
              name="Muted" 
              cssVar="--muted" 
              hex="#f2f2f2"
              className="bg-muted text-muted-foreground"
            />
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16" id="typography">
          <h2 className="text-h2 mb-8">Typography</h2>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Font Families</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Headings (Manrope)</p>
                <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">H2 Headings (Inter)</p>
                <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-inter)' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Body (Manrope)</p>
                <p className="text-body" style={{ fontFamily: 'var(--font-body)' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Heading Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">H1 - text-h1</p>
                <h1 className="text-h1">Heading One</h1>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">H2 - text-h2</p>
                <h2 className="text-h2">Heading Two</h2>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">H3 - text-h3</p>
                <h3 className="text-h3">Heading Three</h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">H4 - text-h4</p>
                <h4 className="text-h4">Heading Four</h4>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">H5 - text-h5</p>
                <h5 className="text-h5">Heading Five</h5>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">H6 - text-h6</p>
                <h6 className="text-h6">Heading Six</h6>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="mb-16" id="buttons">
          <h2 className="text-h2 mb-8">Buttons</h2>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="default" data-testid="button-default">
                  Default
                </Button>
                <Button variant="secondary" data-testid="button-secondary">
                  Secondary
                </Button>
                <Button variant="outline" data-testid="button-outline">
                  Outline
                </Button>
                <Button variant="ghost" data-testid="button-ghost">
                  Ghost
                </Button>
                <Button variant="link" data-testid="button-link">
                  Link
                </Button>
                <Button variant="destructive" data-testid="button-destructive">
                  Destructive
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm" data-testid="button-size-sm">
                  Small
                </Button>
                <Button size="default" data-testid="button-size-default">
                  Default
                </Button>
                <Button size="lg" data-testid="button-size-lg">
                  Large
                </Button>
                <Button size="icon" data-testid="button-size-icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Buttons with Icons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center">
                <Button data-testid="button-with-icon-right">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary" data-testid="button-with-icon-check">
                  <Check className="h-4 w-4" /> Confirm
                </Button>
                <Button variant="outline" data-testid="button-with-icon-info">
                  <Info className="h-4 w-4" /> Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="mb-16" id="badges">
          <h2 className="text-h2 mb-8">Badges</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="default" data-testid="badge-default">Default</Badge>
                <Badge variant="secondary" data-testid="badge-secondary">Secondary</Badge>
                <Badge variant="outline" data-testid="badge-outline">Outline</Badge>
                <Badge variant="destructive" data-testid="badge-destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-16" id="cards">
          <h2 className="text-h2 mb-8">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card data-testid="card-example-1">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is a standard card component with header and content areas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground" data-testid="card-example-primary">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Primary Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Cards can be styled with brand colors for emphasis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground" data-testid="card-example-secondary">
              <CardHeader>
                <CardTitle className="text-secondary-foreground">Action Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Use the lime accent for call-to-action cards.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-16" id="spacing">
          <h2 className="text-h2 mb-8">Spacing Reference</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Common Spacing Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-secondary rounded" />
                  <span className="text-sm text-muted-foreground">4px (1 unit)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-secondary rounded" />
                  <span className="text-sm text-muted-foreground">8px (2 units)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-4 bg-secondary rounded" />
                  <span className="text-sm text-muted-foreground">16px (4 units)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-4 bg-secondary rounded" />
                  <span className="text-sm text-muted-foreground">24px (6 units)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-4 bg-secondary rounded" />
                  <span className="text-sm text-muted-foreground">32px (8 units)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}

function ColorSwatch({ 
  name, 
  cssVar, 
  hex, 
  className 
}: { 
  name: string; 
  cssVar: string; 
  hex: string;
  className: string;
}) {
  return (
    <div className="text-center">
      <div 
        className={`w-full aspect-square rounded-lg mb-2 flex items-center justify-center ${className}`}
        data-testid={`color-swatch-${cssVar.replace('--', '')}`}
      >
        <span className="text-xs font-mono opacity-80">{hex}</span>
      </div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-muted-foreground font-mono">{cssVar}</p>
    </div>
  );
}
