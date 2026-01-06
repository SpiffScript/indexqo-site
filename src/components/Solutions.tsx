import React from "react";
import { SolutionsHero } from "./solutions/SolutionsHero";
import { SolutionsProblem } from "./solutions/SolutionsProblem"
import { SolutionsModel } from "./solutions/SolutionsModel";
import { SolutionsOutcome } from "./solutions/SolutionsOutcome"
import { SolutionsDelivery } from "./solutions/SolutionsDelivery"
import { Container } from "./ui/Container"; // Assuming this is your UI component

export const Solutions: React.FC = () => {
  return (
    <Container>
       <SolutionsHero />
       <SolutionsProblem />
       <SolutionsModel />
       <SolutionsOutcome />
       <SolutionsDelivery />
    </Container>
  );
};
