import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GlobalScripts } from "@/components/scripts/GlobalScripts";
import { fetchMenu, flatten } from "@/lib/menus";
import { MenuProvider, type NavMenus } from "@/components/shared/MenuProvider";
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

async function loadNavMenus(): Promise<NavMenus> {
  const [
    primary,
    headerCtas,
    locationsDropdown,
    footerServices,
    footerIndustries,
    footerCompany,
    footerLegal,
    footerSocial,
  ] = await Promise.all([
    fetchMenu("primary"),
    fetchMenu("header-ctas"),
    fetchMenu("locations-dropdown"),
    fetchMenu("footer-services"),
    fetchMenu("footer-industries"),
    fetchMenu("footer-company"),
    fetchMenu("footer-legal"),
    fetchMenu("footer-social"),
  ]);
  return {
    primary,
    headerCtas,
    locationsDropdown,
    footerServices: flatten(footerServices),
    footerIndustries: flatten(footerIndustries),
    footerCompany: flatten(footerCompany),
    footerLegal: flatten(footerLegal),
    footerSocial: flatten(footerSocial),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wpOrigin = deriveWpOrigin();
  const navMenus = await loadNavMenus();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {wpOrigin && (
          <>
            <link rel="preconnect" href={wpOrigin} crossOrigin="anonymous" />
            <link rel="dns-prefetch" href={wpOrigin} />
          </>
        )}
      </head>
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <GlobalScripts />
        <ForceFullPageNavigation />
        <MenuProvider value={navMenus}>
          {children}
        </MenuProvider>
        <Toaster />
      </body>
    </html>
  );
}
