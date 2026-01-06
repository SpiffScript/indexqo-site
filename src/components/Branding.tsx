import React from "react";
import { BrandQoHero } from "./branding/BrandQoHero";
import { Recognition } from "./branding/Recognition";
import { InternalFirst } from "./branding/InternalFirst";
import { IdentitySurfaces } from "./branding/IdentitySurfaces";
import { BrandOperations } from "./branding/BrandOperations";
import { ImplementationInterface } from "./branding/ImplementationInterface";
import { BrandQoNext } from "./branding/BrandQoNext";
import { BrandQoClosingStrip } from "./branding/BrandQoClosingStrip";

export const Branding: React.FC = () => {
  return (
    <main className="relative">
      {/* SECTION A: THE HERO (Pinned) */}
      {/* This container stays pinned to the top (sticky).
          h-screen ensure it fills the viewport while the other content
          slides over it.
      */}
      <div className="sticky top-0 z-0 h-screen w-full">
        <BrandQoHero />
      </div>

      {/* SECTION B: THE WHITE SHEET (Slides Over) */}
      {/* z-10 and bg-white are critical here to physically cover
          the pinned Hero section as the user scrolls.
      */}
      <div className="relative z-10 bg-white shadow-[0_-10px_50px_rgba(0,0,0,0.2)]">
        <Recognition />
        <InternalFirst />
        <IdentitySurfaces />
        <BrandOperations />
        <ImplementationInterface />
        <BrandQoNext />
        <BrandQoClosingStrip />
        </div>
    </main>
  );
};
