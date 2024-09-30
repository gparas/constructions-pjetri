"use client";

import { selectors } from "@/store/stepper";
import { useSelector } from "react-redux";

const Progress = () => {
  const activeStep = useSelector(selectors.getActiveStep);
  const progresWidth = (activeStep / 6) * 100;
  return (
    <div className="w-1/3 bg-gray-200 rounded-full h-2 mx-auto">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${progresWidth}%` }}
      ></div>
    </div>
  );
};

export default Progress;
