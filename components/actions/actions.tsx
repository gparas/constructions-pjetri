"use client";

import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";
import Disclaimer from "./disclaimer";

interface Props {
  disableNext?: boolean;
  lastStep?: boolean;
}

const Actions = ({ disableNext, lastStep }: Props) => {
  const dispatch = useDispatch();
  const activeStep = useSelector(selectors.getActiveStep);

  const handleNext = () => {
    if (lastStep) return;
    const value = activeStep + 1;
    dispatch(actions.changeActiveStep(value));
  };
  const handlePrev = () => {
    const value = activeStep - 1;
    dispatch(actions.changeActiveStep(value));
  };
  return (
    <>
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          className="btn-link gap-4"
          disabled={activeStep === 0}
          type={lastStep ? "submit" : "button"}
          style={{ visibility: activeStep === 0 ? "hidden" : "visible" }}
        >
          <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
          </svg>
          <span>Πίσω</span>
        </button>
        <button
          onClick={handleNext}
          className="btn gap-4"
          disabled={disableNext}
        >
          {lastStep ? <span>Υποβολή</span> : <span>Συνέχεια</span>}
          <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
      {lastStep && <Disclaimer />}
    </>
  );
};

export default Actions;
