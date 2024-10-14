"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";

import Actions from "../actions";
import Header from "./header";

const WorkType = ({ options }: { options: string[] }) => {
  const dispatch = useDispatch();
  const workType = useSelector(selectors.getWorkType);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeWorkType(event.target.value));
  };

  return (
    <>
      <Header
        title="Επιλογή Εργασιών"
        subtitle="Δηλώστε τα είδη των εργασιών που απαιτούνται για την ανακαίνισή σας"
      />
      <div className="flex flex-col gap-3 flex-grow sm:flex-grow-0">
        {options.map((option, index) => {
          return (
            <div key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={option}
                id={`option-${index}`}
                defaultChecked={workType.includes(option)}
                onChange={handleChange}
                className="form-check-input"
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
