import React from "react";
import { AboutHero } from "./about/AboutHero";
import { IndexMeaning } from "./about/IndexMeaning";
import { WhatIndexQoDoes } from "./about/WhatIndexQoDoes";
import { StructureAndOutcome } from "./about/StructureAndOutcome";
import { AboutFaq } from "./about/AboutFaq";
import { WhoItsFor } from "./about/WhoItsFor";
import { SuccessEvidence } from "./about/SuccessEvidence";
import { ScaleAuditCta } from "./about/ScaleAuditCta";
import { Container } from "../components/ui/Container";

export const About: React.FC = () => {
  return (
    <>
      {/* Hero stays full-bleed */}
      <AboutHero />

      {/* Structured narrative sections */}
      <Container>
        <IndexMeaning />
        <WhatIndexQoDoes />
        <StructureAndOutcome />
        <AboutFaq />
        <WhoItsFor />
        <SuccessEvidence />
        <ScaleAuditCta />
      </Container>
    </>
  );
};
