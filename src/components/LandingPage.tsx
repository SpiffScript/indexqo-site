// src/components/LandingPage.tsx
import React from "react";

// Landing sections (compiler order)
import { HeroClarity } from "./landing/HeroClarity";
import { IndexQoWhy } from "./landing/IndexQoWhy";
import { Doctrine } from "./landing/Doctrine";
import { StructuralOperations } from "./landing/StructuralOperations";
import { StructuralClosingStrip } from "./landing/StructuralClosingStrip";

export const LandingPage: React.FC = () => {
  return (
    <main>
      <HeroClarity />
      <IndexQoWhy />
      <Doctrine />
      <StructuralOperations />
      <StructuralClosingStrip />
    </main>
  );
};

export default LandingPage;
