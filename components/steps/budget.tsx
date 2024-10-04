"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";

import Actions from "../actions";

const Budget = () => {
  const dispatch = useDispatch();
  const budget = useSelector(selectors.getBudget);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeBudget(event.target.value));
  };
  const OPTIONS = ["5.000€ - 10.000€", "10.000€ - 20.000€", "Πάνω από 20.000€"];
  return (
    <>
      <div className="flex flex-col gap-3 flex-grow sm:flex-grow-0 w-full sm:w-96 mx-auto">
        {OPTIONS.map((option, index) => {
          return (
            <div key={option}>
              <input
                className="hidden"
                type="radio"
                name="options"
                id={`option-${index}`}
                value={option}
                onChange={handleChange}
                defaultChecked={budget === option}
                required
              />
              <label
                className="custom-check-label items-start p-4"
                htmlFor={`option-${index}`}
              >
                <span>{option}</span>
              </label>
            </div>
          );
        })}
      </div>
      <Actions />
    </>
  );
};

export default Budget;
