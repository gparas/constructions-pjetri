"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";

import Actions from "../actions";

const WorkType = () => {
  const dispatch = useDispatch();
  const workType = useSelector(selectors.getWorkType);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeWorkType(event.target.value));
  };
  const OPTIONS = [
    "Υδραυλικά",
    "Ηλεκτρολογικά",
    "Βάψιμο",
    "Δάπεδα",
    "Τοποθέτηση πλακιδίων",
    "Γυψοσανίδες",
    "Αντικατάσταση κουφωμάτων",
    "Μονώσεις",
  ];
  return (
    <>
      <div className="flex flex-col gap-3 flex-grow sm:flex-grow-0">
        {OPTIONS.map((option, index) => {
          return (
            <div key={option} className="flex items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                value={option}
                id={`option-${index}`}
                defaultChecked={workType.includes(option)}
                onChange={handleChange}
              />
              <label className="text-base" htmlFor={`option-${index}`}>
                {option}
              </label>
            </div>
          );
        })}
      </div>
      <Actions disableNext={!workType.length} />
    </>
  );
};

export default WorkType;
