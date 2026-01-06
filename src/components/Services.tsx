import React from "react";
import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesMenu } from "../components/services/ServicesMenu";
import { BrandQoPanel } from "./services/BrandQoPanel";
import { ServicesDeclaration } from "./services/ServicesDeclaration";
import { ServicesCtaPanel } from "./services/ServicesCtaPanel";
import { Container } from "../components/ui/Container";

export const Services: React.FC = () => {
  return (
    <>
      <ServicesHero />

      <Container>
        {/* Static header block (never collapses) */}
        <section
          id="services"
          className="pt-14 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10"
        >
          {/* NOTE: Container already handles max-width + side padding,
              so we only keep the inner max-w-3xl constraint here. */}
          <div className="max-w-3xl">
            <div className="mb-4 border-l-2 border-slate-200 pl-4 text-xs uppercase tracking-wide text-slate-500">
              Services
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              The work begins where expectations form.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              IndexQo’s discipline is applied across internal and external structure – messaging,
              visibility, and durable artifacts that shape audience expectation – ensuring market
              expectation matches what you’re delivering.
            </p>
          </div>
          <div className="mt-8 h-px w-24 bg-sky-600" />
           <ServicesMenu />
          </section>

        <BrandQoPanel />
        <ServicesDeclaration />
        <ServicesCtaPanel />
      </Container>
    </>
  );
};
