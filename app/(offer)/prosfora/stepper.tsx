"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import Steps from "@/components/steps";
import Loader from "@/components/loader";
import { StepProps } from "@/interfaces/step";
import { WORK_TYPE_OPTIONS } from "./constants";

const dynamicStep = (path: string): FC<StepProps> =>
  dynamic(() => import(`@/components/steps/${path}`), {
    loading: () => <Loader />,
  }) as FC<StepProps>;

const stepsConfig: (
  | string
  | { component: FC<StepProps>; props?: StepProps }
)[] = [
  "renovation-type",
  "building-type",
  "construction-year",
  {
    component: dynamicStep("work-type"),
    props: {
      options: WORK_TYPE_OPTIONS,
    },
  },
  "timeframe",
  "contact",
];

const steps = stepsConfig.map((step) => {
  if (typeof step === "string") {
    return { component: dynamicStep(step) };
  }
  return step;
});

const Stepper = () => <Steps steps={steps} />;

export default Stepper;
