"use client";

import { createContext, useContext, type ReactNode } from "react";
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

export function MenuProvider({ value, children }: { value: NavMenus; children: ReactNode }) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useNavMenus(): NavMenus {
  return useContext(MenuContext);
}
