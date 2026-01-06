import React from "react";

import { NextStepsIntro } from "../components/next-steps/NextStepsIntro";
import { NextStepsSequence } from "../components/next-steps/NextStepsSequence";
import { NextStepsOutline } from "../components/next-steps/NextStepsOutline";
import { NextStepsFit } from "../components/next-steps/NextStepsFit"
import { NextStepsCall } from "../components/next-steps/NextStepsCall";
import { StandardsDivider } from "../components/next-steps/StandardsDivider"

export const NextSteps: React.FC = () => {
  return (
    <>
      <NextStepsIntro />
      <NextStepsSequence />
      <NextStepsOutline />

      <StandardsDivider />
      <NextStepsFit />
      <NextStepsCall />
    </>
  );
};

export default NextSteps;
