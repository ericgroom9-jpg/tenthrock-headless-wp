import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GlobalScripts } from "@/components/scripts/GlobalScripts";
import { CookieConsent } from "@/components/scripts/CookieConsent";
import { MenuProvider } from "@/components/shared/MenuProvider";
import ForceFullPageNavigation from "@/components/shared/NavigationProgress";

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
  title: "Tenth Rock Waste Solutions | Nationwide Commercial Waste Management",
  description: "Leading commercial waste management solutions across 48 states. Dumpster rental, emergency overflow, event services, and centralized waste programs for businesses.",
};

function deriveWpOrigin(): string | null {
  const url = process.env.WORDPRESS_GRAPHQL_URL || process.env.WORDPRESS_REST_URL;
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
        {wpOrigin && (
          <>
            <link rel="preconnect" href={wpOrigin} crossOrigin="anonymous" />
            <link rel="dns-prefetch" href={wpOrigin} />
          </>
        )}
        <CookieConsent />
      </head>
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <GlobalScripts />
        <Script
          id="equally-accessibility-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('load', function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "https://widget.prod.equally.ai/equally-widget.min.js";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'equallyWidget'));!window.EQUALLY_AI_API_KEY&&(window.EQUALLY_AI_API_KEY="slGVp8SplRks0wxkiCSnZpByGx1qLXiM",intervalId=setInterval(function(){window.EquallyAi&&(clearInterval(intervalId),window.EquallyAi=new EquallyAi)},500));`,
          }}
        />
        <ForceFullPageNavigation />
        <MenuProvider>
          {children}
        </MenuProvider>
        <Toaster />
      </body>
    </html>
  );
}
