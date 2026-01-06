// src/data/servicesOfferings.ts

export type ServiceKey =
  | "web"
  | "messaging"
  | "seo"
  | "local"
  | "content"
  | "assets";

export type Service = {
  key: ServiceKey;
  title: string;
  teaser: string; // left-side short copy
  detail: string; // right-side detailed copy
  bullets: string[];
  includes?: string[];
};

export const SERVICES: Service[] = [
  {
    key: "web",
    title: "Web & Structural Design",
    teaser: "Structure first. A site people can navigate with confidence.",
    detail:
      "Web presence built as structure – not decoration. We design the pathways that help customers understand what you do, self-select quickly, and engage with fewer questions.",
    bullets: [
      "Information architecture and page flow",
      "Site builds, rebuilds, and structured landing experiences",
      "Conversion paths that match operational reality",
    ],
    includes: [
      "Single-page builds",
      "IA + navigation rebuild",
      "Service page structure",
      "Copy-to-layout alignment",
    ],
  },
  {
    key: "messaging",
    title: "Messaging & Narrative Clarity",
    teaser: "Reduce ambiguity. Tighten interpretation across touchpoints.",
    detail:
      "We remove mixed signals and tighten how your business is understood. Messaging is treated as operational output – built to reduce friction and prevent misunderstanding.",
    bullets: [
      "Service definitions and positioning language",
      "Page-level messaging that holds together across the site",
      "Consistent voice without brand theater",
    ],
    includes: [
      "Homepage rewrite",
      "Service descriptions",
      "Offer structure cleanup",
      "FAQs that reduce friction",
    ],
  },
  {
    key: "seo",
    title: "SEO & Visibility Foundations",
    teaser: "Discoverability that reflects what you actually offer.",
    detail:
      "Search visibility built on top of clear structure. We focus on technical and structural foundations so the right customers can find – and understand – what you do.",
    bullets: [
      "Technical and structural SEO foundations",
      "Information hierarchy that supports discoverability",
      "Search alignment with real services and intent",
    ],
    includes: [
      "On-page essentials",
      "Metadata + structure pass",
      "Indexing / sitemap checks",
      "Structured internal linking",
    ],
  },
  {
    key: "local",
    title: "Local Presence & Listings",
    teaser: "Own the map. Control what customers see before they click.",
    detail:
      "Local visibility is often the first impression. We align listings, categories, descriptions, and proof signals so customers see the right story before they ever reach your site.",
    bullets: [
      "Google Business Profile structure and optimization",
      "Directory consistency and listing cleanup",
      "Review posture and proof-signal alignment",
    ],
    includes: [
      "GBP tune-up",
      "Category + service alignment",
      "Citation cleanup",
      "Local landing structure",
    ],
  },
  {
    key: "content",
    title: "Content Systems & Publishing",
    teaser: "Content as structure – not volume. Built to support services.",
    detail:
      "When content exists, it should carry meaning and reinforce service understanding. We build simple publishing structures that reduce drift and support discovery without turning into content churn.",
    bullets: [
      "Service-supporting content structure (not random posts)",
      "Reusable page patterns and publishing guardrails",
      "Clarity-first copy that doesn’t collapse into jargon",
    ],
    includes: [
      "Service content outlines",
      "FAQ + knowledge structure",
      "Copy standards",
      "Publishing cadence (lightweight)",
    ],
  },
  {
    key: "assets",
    title: "Brand & Operational Assets",
    teaser: "Materials that help customers choose – quickly and correctly.",
    detail:
      "Menus and customer-facing materials built as decision tools. The goal is clarity at the moment a customer is choosing – and consistency over time.",
    bullets: [
      "Operational assets that reduce uncertainty",
      "Design systems that keep materials consistent over time",
      "Digital and print-ready execution",
    ],
    includes: [
      "Menu design systems",
      "Service sheets",
      "Capability one-pagers",
      "Signage / print-ready files",
    ],
  },
];
