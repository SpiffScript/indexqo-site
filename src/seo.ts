// src/seo.ts
// Single-file SEO helper for IndexQo (Vite + React Router)
// Usage (example): call applyRouteSEO(location.pathname) inside a small component that runs on route change.

export type SeoMeta = {
  title: string;
  description: string;
  canonicalPath?: string; // defaults to current pathname
  noindex?: boolean;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string; // absolute URL preferred
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
};

export const BRAND_NAME = "IndexQo";

/**
 * Set this to your production origin (no trailing slash).
 * Example: "https://indexqo.com"
 */
export const SITE_ORIGIN = "https://www.indexqo.com";

/**
 * Optional: set a default OG image for social sharing (absolute URL).
 * If you don’t have one yet, leave it empty and it will be omitted.
 */
export const DEFAULT_OG_IMAGE = "";

// ---- Route map (keyed by pathname) ----

export const SEO_BY_PATH: Record<string, SeoMeta> = {
  "/": {
    title: `${BRAND_NAME} | Web, SEO, and Brand Clarity`,
    description:
      "Operator-grade websites, SEO foundations, and brand messaging that stays consistent across your site, listings, and customer touchpoints.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/signal": {
    title: `${BRAND_NAME} Signal | Find What’s Costing You Leads`,
    description:
      "Quick signal checks to spot the gaps: messaging, UX friction, local presence, and trust issues that quietly drain conversions.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/services": {
    title: `${BRAND_NAME} Services | Websites, SEO, and Digital Maintenance`,
    description:
      "Build, improve, and maintain your digital foundation: site structure, performance, technical SEO, content support, and ongoing upkeep.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/solutions": {
    title: `${BRAND_NAME} Solutions | Packages Built for Real Operators`,
    description:
      "Clear options for owners who want momentum: foundational fixes, structured upgrades, and steady improvements that compound over time.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/brandqo": {
    title: `${BRAND_NAME} BrandQo | Messaging and Visual Consistency`,
    description:
      "Align what you say and what customers experience. Clean messaging, consistent visuals, and brand standards that scale with your team.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/philosophy": {
    title: `${BRAND_NAME} Philosophy | Clarity, Consistency, and Trust`,
    description:
      "A practical approach to building trust: fewer mixed signals, stronger alignment, and systems that make your marketing feel effortless.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/next-steps": {
    title: `${BRAND_NAME} Next Steps | What Happens After You Reach Out`,
    description:
      "A clean, low-friction process: what we ask, what we review, and what you can expect after the first conversation.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/about": {
    title: `${BRAND_NAME} About | Why This Exists`,
    description:
      "Built for small business operators who want enterprise-grade clarity without agency fluff. Simple, direct, and process-driven.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/contact": {
    title: `${BRAND_NAME} Contact | Start With a Clear Conversation`,
    description:
      "Tell us what you’re working on and what’s not clicking. We’ll respond with next steps and a clean path forward.",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  "/privacy": {
    title: `${BRAND_NAME} Privacy Policy`,
    description:
      "How IndexQo handles data, contact submissions, analytics, and privacy practices.",
    noindex: true,
    ogType: "website",
    twitterCard: "summary",
  },

  "/terms": {
    title: `${BRAND_NAME} Terms of Service`,
    description:
      "Terms covering site usage, limitations, and general conditions for IndexQo.",
    noindex: true,
    ogType: "website",
    twitterCard: "summary",
  },
};

// ---- Public API ----

export function applyRouteSEO(pathname: string) {
  const meta = SEO_BY_PATH[pathname] ?? fallbackSEO(pathname);
  applySEO(meta, pathname);
}

// ---- Implementation ----

function fallbackSEO(pathname: string): SeoMeta {
  const clean = pathname && pathname !== "/" ? ` | ${humanizePath(pathname)}` : "";
  return {
    title: `${BRAND_NAME}${clean}`,
    description:
      "Operator-grade websites, SEO foundations, and brand messaging that stays consistent across your customer touchpoints.",
    ogType: "website",
    twitterCard: "summary_large_image",
  };
}

function applySEO(meta: SeoMeta, pathname: string) {
  const canonicalPath = meta.canonicalPath ?? pathname ?? "/";
  const canonicalUrl = toAbsoluteUrl(canonicalPath);

  const title = meta.title?.trim() || BRAND_NAME;
  const description = (meta.description || "").trim();

  const ogTitle = (meta.ogTitle || title).trim();
  const ogDescription = (meta.ogDescription || description).trim();
  const ogType = meta.ogType || "website";

  const ogImage = (meta.ogImage || DEFAULT_OG_IMAGE || "").trim();
  const twitterCard = meta.twitterCard || "summary_large_image";

  // Title
  document.title = title;

  // Meta basics
  setMetaTag("name", "description", description);

  // Robots
  if (meta.noindex) {
    setMetaTag("name", "robots", "noindex, nofollow");
  } else {
    // Don’t force robots if you’d rather manage it elsewhere; remove this line if you want.
    setMetaTag("name", "robots", "index, follow");
  }

  // Canonical
  setLinkTag("canonical", canonicalUrl);

  // Open Graph
  setMetaTag("property", "og:title", ogTitle);
  setMetaTag("property", "og:description", ogDescription);
  setMetaTag("property", "og:type", ogType);
  setMetaTag("property", "og:url", canonicalUrl);
  if (ogImage) setMetaTag("property", "og:image", ogImage);
  else removeMetaTag("property", "og:image");

  // Twitter
  setMetaTag("name", "twitter:card", twitterCard);
  setMetaTag("name", "twitter:title", ogTitle);
  setMetaTag("name", "twitter:description", ogDescription);
  if (ogImage) setMetaTag("name", "twitter:image", ogImage);
  else removeMetaTag("name", "twitter:image");
}

function toAbsoluteUrl(path: string) {
  const origin = (SITE_ORIGIN || "").replace(/\/+$/, "");
  const p = (path || "/").startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

function humanizePath(pathname: string) {
  return pathname
    .replace(/^\//, "")
    .split("/")
    .filter(Boolean)
    .map((seg) =>
      seg
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    )
    .join(" / ");
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  const head = document.head;
  const value = content || "";
  let el = head.querySelector<HTMLMetaElement>(`meta[${attr}="${cssEscape(key)}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function removeMetaTag(attr: "name" | "property", key: string) {
  const el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${cssEscape(key)}"]`);
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

function setLinkTag(rel: string, href: string) {
  const head = document.head;
  let el = head.querySelector<HTMLLinkElement>(`link[rel="${cssEscape(rel)}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Very small escape helper for attribute selectors.
// (If you’d rather avoid this entirely, you can remove cssEscape usage and keep keys simple.)
function cssEscape(value: string) {
  return value.replace(/"/g, '\\"');
}
