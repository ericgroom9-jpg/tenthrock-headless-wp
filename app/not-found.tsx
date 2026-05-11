import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Page Not Found | Tenth Rock Waste Solutions",
  description:
    "The page you're looking for doesn't exist or has been moved. Head back to the Tenth Rock homepage or get in touch with our team.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main data-testid="page-404">
      <Navbar variant="sticky" />

      <section className="relative bg-background overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-32 w-[420px] h-[420px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <div
                  className="text-[120px] sm:text-[180px] md:text-[220px] font-extrabold leading-none tracking-tighter text-primary/10 select-none"
                  data-testid="text-404"
                >
                  404
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="-mt-6 sm:-mt-10 md:-mt-14">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5d520]/15 text-primary text-xs sm:text-sm font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#c5d520]" />
                    Page Not Found
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h1
                  className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium text-primary leading-tight tracking-tighter"
                  data-testid="text-404-title"
                >
                  We can&apos;t find that page.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  className="mt-5 text-base sm:text-lg text-primary/70 leading-relaxed max-w-lg mx-auto"
                  data-testid="text-404-description"
                >
                  The page you&apos;re looking for may have moved, been renamed, or
                  doesn&apos;t exist. Let&apos;s get you back on track.
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#c5d520] text-[#042940] shadow-[0_0_30px_rgba(197,213,32,0.3)] hover:shadow-[0_0_50px_rgba(197,213,32,0.5)] transition-all duration-300 min-h-[52px] whitespace-nowrap rounded-full"
                    asChild
                    data-testid="button-go-home"
                  >
                    <Link href="/">
                      <Home className="h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary/20 text-primary min-h-[52px] whitespace-nowrap rounded-full"
                    asChild
                    data-testid="button-contact"
                  >
                    <Link href="/contact">
                      <ArrowLeft className="h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-14 pt-10 border-t border-primary/10">
                  <p className="text-sm font-bold uppercase tracking-wide text-primary/50 mb-5">
                    Popular Pages
                  </p>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base">
                    {[
                      { label: "Services", href: "/services" },
                      { label: "Who We Serve", href: "/who-we-serve" },
                      { label: "About", href: "/about" },
                      { label: "Locations", href: "/locations" },
                      { label: "FAQ", href: "/faq" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="font-bold text-primary hover:text-[#c5d520] transition-colors"
                        data-testid={`link-popular-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
