import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GlobalScripts } from "@/components/scripts/GlobalScripts";
import { CookieConsent } from "@/components/scripts/CookieConsent";
import { MenuProvider } from "@/components/shared/MenuProvider";
import ForceFullPageNavigation from "@/components/shared/NavigationProgress";
import { CANONICAL_ORIGIN } from "@/lib/seo-metadata";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: "Tenth Rock Waste Solutions | Nationwide Commercial Waste Management",
  description:
    "Leading commercial waste management solutions across 48 states. Dumpster rental, emergency overflow, event services, and centralized waste programs for businesses.",
};

function deriveWpOrigin(): string | null {
  const url =
    process.env.WORDPRESS_GRAPHQL_URL || process.env.WORDPRESS_REST_URL;
  if (!url) return null;
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wpOrigin = deriveWpOrigin();
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/*
          WordPress origin and the Equally accessibility widget are NOT on the
          critical render path: WP content is fetched server-side (client menu
          calls hit the same-origin /api/menus proxy), and the Equally widget is
          deliberately deferred to idle/first-interaction. Holding early
          preconnects open for them would compete with the cookie-consent CMP
          origins, which DO gate LCP (the consent banner is the LCP element).
          So these get cheap dns-prefetch only, leaving the ~4 preconnect slots
          for the CMP origins declared in <CookieConsent />.
        */}
        {wpOrigin && <link rel="dns-prefetch" href={wpOrigin} />}
        <link rel="dns-prefetch" href="https://widget.prod.equally.ai" />
        <CookieConsent />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <GlobalScripts />
        <Script
          id="equally-accessibility-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var loaded=false;function load(){if(loaded)return;loaded=true;cleanup();var d=document,s='script',id='equallyWidget',fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.src="https://widget.prod.equally.ai/equally-widget.min.js";fjs.parentNode.insertBefore(js,fjs);}if(!window.EQUALLY_AI_API_KEY){window.EQUALLY_AI_API_KEY="slGVp8SplRks0wxkiCSnZpByGx1qLXiM";var iv=setInterval(function(){window.EquallyAi&&(clearInterval(iv),window.EquallyAi=new EquallyAi)},500);}}var ev=['scroll','pointerdown','keydown','touchstart','mousemove'];function onInteract(){load();}function cleanup(){ev.forEach(function(e){window.removeEventListener(e,onInteract)});}ev.forEach(function(e){window.addEventListener(e,onInteract,{passive:true})});if('requestIdleCallback' in window){requestIdleCallback(function(){load();},{timeout:5000});}else{setTimeout(load,4000);}})();`,
          }}
        />
        <ForceFullPageNavigation />
        <MenuProvider>{children}</MenuProvider>
        <Toaster />
      </body>
    </html>
  );
}
