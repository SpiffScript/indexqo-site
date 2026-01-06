import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const BrandingHero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight text-stone-900 mb-12 max-w-5xl">
        Your business
        <br className="hidden md:block" />
        grew up.
        <span className="block text-stone-400 mt-2">
          Your presentation didn&apos;t.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed mb-12">
        IndexQo exists to help businesses present themselves like adults in the
        marketplace. No marketing theater. No decoration. Just clear, coherent,
        and calm authority.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <CtaButton variant="primary" href="/contact">
          Test Your Clarity
        </CtaButton>

        <CtaButton variant="secondary" href="/philosophy">
          Read the Rationale
        </CtaButton>
      </div>
    </section>
  );
};
