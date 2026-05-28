"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { MenuNode, FlatLink } from "@/lib/menus";

export interface NavMenus {
  primary: MenuNode[] | null;
  headerCtas: MenuNode[] | null;
  locationsDropdown: MenuNode[] | null;
  footerServices: FlatLink[] | null;
  footerIndustries: FlatLink[] | null;
  footerCompany: FlatLink[] | null;
  footerLegal: FlatLink[] | null;
  footerSocial: FlatLink[] | null;
}

const EMPTY: NavMenus = {
  primary: null,
  headerCtas: null,
  locationsDropdown: null,
  footerServices: null,
  footerIndustries: null,
  footerCompany: null,
  footerLegal: null,
  footerSocial: null,
};

const MenuContext = createContext<NavMenus>(EMPTY);

// Menus are fetched client-side after the document streams, so the layout
// never blocks on 8 sequential WordPress REST calls. Navbar/Footer hold
// hardcoded defaults that absorb the initial render with no FOUC; the
// WP-driven overrides land via setState a moment later. Coordinates with
// Task #33, which will batch these into one WP request.
const LOCATIONS = [
  "primary",
  "header-ctas",
  "locations-dropdown",
  "footer-services",
  "footer-industries",
  "footer-company",
  "footer-legal",
  "footer-social",
] as const;

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menus, setMenus] = useState<NavMenus>(EMPTY);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      LOCATIONS.map(loc =>
        fetch(`/api/menus/${loc}`)
          .then(r => (r.ok ? r.json() : null))
          .catch(() => null),
      ),
    ).then(results => {
      if (cancelled) return;
      const [
        primary,
        headerCtas,
        locationsDropdown,
        footerServices,
        footerIndustries,
        footerCompany,
        footerLegal,
        footerSocial,
      ] = results;
      setMenus({
        primary: primary?.tree ?? null,
        headerCtas: headerCtas?.tree ?? null,
        locationsDropdown: locationsDropdown?.tree ?? null,
        footerServices: footerServices?.flat ?? null,
        footerIndustries: footerIndustries?.flat ?? null,
        footerCompany: footerCompany?.flat ?? null,
        footerLegal: footerLegal?.flat ?? null,
        footerSocial: footerSocial?.flat ?? null,
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return <MenuContext.Provider value={menus}>{children}</MenuContext.Provider>;
}

export function useNavMenus(): NavMenus {
  return useContext(MenuContext);
}
