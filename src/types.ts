import type { LucideIcon } from "lucide-react";

export const ROUTES = {
  HOME: "/",
  SIGNAL: "/signal",
  SERVICES: "/services",
  SOLUTIONS: "/solutions",
  BRANDQO: "/brandqo",
  PHILOSOPHY: "/philosophy",
  NEXT_STEPS: "/next-steps",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  ACCEPTABLEUSE: "/acceptable-use",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export type NavItem = {
  label: string;
  href: RoutePath;
  // For things like HOME: exists, but we intentionally don't show it in nav
  showInNav?: boolean;
};

export type CTA = {
  label: string;
  href: RoutePath | string;
  // keep flexible for now — your CtaButton variants can evolve without fighting this file
  variant?: "primary" | "secondary" | "dark" | "outline" | string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type OfferingTier = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type ProcessStep = {
  number: string; // "01", "02", etc.
  title: string;
  description: string;
};

export type FitCriteria = {
  label: string;
  items: string[];
};
