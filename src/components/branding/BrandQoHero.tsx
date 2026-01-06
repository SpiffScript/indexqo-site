import React from "react";
import { Container } from "../ui/Container";

export const BrandQoHero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] overflow-hidden bg-black">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src="/images/brandqo/neglect-tree.jpg"
          alt="Two trees: one thriving, one stripped bare"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25" />
      </div>

      {/* Content layer */}
      <Container className="relative z-10 flex h-full items-end px-6 py-40 sm:px-10 sm:py-44 lg:px-14 lg:py-56">
        <div className="relative max-w-[800px]">

          {/* THE ACCENT LINE - Stays at the absolute 0 position */}
          <div className="absolute left-0 top-1 w-px h-36 bg-white/40" />

          {/* TOP BLOCK: Heading is indented to the right of the line */}
          <div className="pl-10">
            <h1 className="text-4xl font-bold tracking-tight text-white/95 sm:text-6xl lg:text-6xl leading-[1.1]">
              Neglect doesn’t <br />
              announce itself.
            </h1>
          </div>

          {/* BOTTOM BLOCK: No padding, so "It" starts at the same 0 as the line */}
          <div className="mt-8 pl-0">
            <p className="text-lg italic text-white/90 sm:text-xl">
              It compounds.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BrandQoHero;
