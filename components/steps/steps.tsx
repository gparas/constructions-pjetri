"use client";

import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";
import Progress from "../progress";
import { StepProps } from "@/interfaces/step";

interface Props {
  steps: { component: FC<StepProps>; props?: StepProps }[];
}

const Steps: FC<Props> = ({ steps }) => {
  const dispatch = useDispatch();
  const activeStep = useSelector(selectors.getActiveStep);

  useEffect(() => {
    dispatch(actions.resetSteps());
  }, [dispatch]);

  const { component: ActiveStepComponent, props: activeStepProps } =
    steps[activeStep];
  return (
    <>
      <Progress value={(activeStep / (steps.length - 1)) * 100} />
      <div className="flex flex-col flex-grow  gap-10">
        <ActiveStepComponent {...activeStepProps} />
      </div>
    </>
  );
};

export default Steps;
