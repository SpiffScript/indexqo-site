// src/components/solutions/SolutionsServiceMap.tsx

import React from "react";
import { Container } from "../ui/Container";

type ServiceGroup = {
  phase: string;
  description: string;
  services: string[];
};

const serviceGroups: ServiceGroup[] = [
  {
    phase: "Baseline",
    description:
      "Establishing a clear, shared understanding of what exists and how it’s currently perceived.",
    services: [
      "Website and structure audit",
      "Search and directory presence review",
      "Messaging and positioning assessment",
      "Signal consistency analysis",
    ],
  },
  {
    phase: "Rebuild",
    description:
      "Correcting misalignment and rebuilding the surface area that carries meaning.",
    services: [
      "Website rebuilds or refinements",
      "Messaging and copy realignment",
      "Brand and visual cleanup",
      "Structural SEO foundations",
    ],
  },
  {
    phase: "Stewardship",
    description:
      "Ongoing alignment as the business evolves, so drift doesn’t return.",
    services: [
      "Ongoing site stewardship",
      "Content and signal updates",
      "Search and visibility maintenance",
      "Change management and advisory",
    ],
  },
];

export const SolutionsServiceMap: React.FC = () => {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-20">
        <div className="max-w-5xl">
          {/* Section label */}
          <p className="text-xs uppercase tracking-widest text-stone-500">
            How services fit
          </p>
          <div className="mt-3 h-px w-10 bg-stone-200" />

          {/* Lead */}
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-stone-600">
            <p>
              IndexQo services are not sold as standalone tactics. They are
              applied deliberately within the system — based on where alignment
              is needed and what must be protected next.
            </p>
            <p>
              The same services can appear in different phases depending on the
              state of the business. What matters is sequence, not labels.
            </p>
          </div>

          {/* Mapping grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <div
                key={group.phase}
                className="border border-stone-200 p-6"
              >
                <h3 className="text-lg font-semibold text-stone-900">
                  {group.phase}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {group.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-stone-600">
                  {group.services.map((service) => (
                    <li key={service} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 h-px w-full bg-stone-200" />
        </div>
      </Container>
    </section>
  );
};
