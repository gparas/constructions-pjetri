"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";
import PlanIcon from "@/icons/renovation";
import HouseWorkIcon from "@/icons/house-work";

import Actions from "../actions";

const RenovationType = () => {
  const dispatch = useDispatch();
  const renovationType = useSelector(selectors.getRenovationType);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeRenovationType(event.target.value));
  };
  const OPTIONS = ["Ολική ανακαίνιση", "Μερική ανακαίνιση"];
  return (
    <>
      <div className="grid grid-cols-2 gap-4 flex-grow sm:flex-grow-0">
        {OPTIONS.map((option, index) => {
          const Icon = index === 0 ? HouseWorkIcon : PlanIcon;
          return (
            <div key={option}>
              <input
                className="hidden"
                type="radio"
                name="options"
                id={`option-${index}`}
                value={option}
                onChange={handleChange}
                defaultChecked={renovationType === option}
                required
              />
              <label className="custom-check-label" htmlFor={`option-${index}`}>
                <Icon width={64} height={64} />
                <span>{option}</span>
              </label>
            </div>
          );
        })}
      </div>
      <Actions disableNext={!renovationType} />
    </>
  );
};

export default RenovationType;
