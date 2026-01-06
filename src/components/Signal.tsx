import React from "react";

import { SignalHeroImage } from "./signal/SignalHeroImage";
import { SignalIntro } from "../components/signal/SignalIntro";
import { SignalErosion } from "../components/signal/SignalErosion";
import { SignalStandard } from "../components/signal/SignalStandard";
import { SignalBuild } from "../components/signal/SignalBuild";
import { SignalNext } from "../components/signal/SignalNext";

export const Signal: React.FC = () => {
  return (
    <>
      <SignalHeroImage />
      <SignalIntro />
      <SignalErosion />
      <SignalStandard />
      <SignalBuild />
      <SignalNext />
    </>
  );
};

export default Signal;
