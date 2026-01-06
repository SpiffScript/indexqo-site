import type { ServiceItem } from "../../types";
import {
  LayoutGrid,
  Fingerprint,
  Search,
  Globe,
  Component,
} from "lucide-react";

export const structuralItems: ServiceItem[] = [
  {
    id: "web",
    title: "Web Architecture",
    description:
      "High-performance, minimal-debt digital infrastructure designed for information density and speed. No bloat.",
    icon: LayoutGrid,
  },
  {
    id: "brand",
    title: "Brand Systems",
    description:
      "Visual and verbal standards that enforce consistency. We build guardrails, not mood boards.",
    icon: Fingerprint,
  },
  {
    id: "seo",
    title: "Visibility Architecture",
    description:
      "Structural SEO that ensures your business is indexed correctly by machines and recognized by humans.",
    icon: Search,
  },
  {
    id: "domain",
    title: "Domain Hygiene",
    description:
      "Consolidation and protection of digital assets. Securing your namespace against dilution.",
    icon: Globe,
  },
  {
    id: "design",
    title: "Design Implementation",
    description:
      "Systematic deployment of UI/UX assets across all channels to eliminate visual entropy.",
    icon: Component,
  },
];
