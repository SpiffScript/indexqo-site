import React from "react";

import { Container } from "./ui/Container";

import { PhilosophyHero } from "./philosophy/PhilosophyHero";
import { PhilosophyFraming } from "./philosophy/PhilosophyFraming";
import { PhilosophyWorldview } from "./philosophy/PhilosophyWorldview";
import { PhilosophySignalAlignment } from "./philosophy/PhilosophySignalAlignment";
import { PhilosophyFragmentation } from "./philosophy/PhilosophyFragmentation";
import { PhilosophyInPractice } from "./philosophy/PhilosophyInPractice";

export const Philosophy: React.FC = () => {
  return (
    <main className="relative bg-stone-50">
        <PhilosophyHero />
      <Container>
        <PhilosophyFraming />
        <PhilosophyWorldview />
        <PhilosophySignalAlignment />
        <PhilosophyFragmentation />
        <PhilosophyInPractice />
      </Container>
    </main>
  );
};
