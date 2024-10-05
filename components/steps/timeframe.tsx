"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";

import Actions from "../actions";

const Timeframe = () => {
  const dispatch = useDispatch();
  const timeframe = useSelector(selectors.getTimeframe);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeTimeframe(event.target.value));
  };
  const OPTIONS = ["Άμεση έναρξη", "Εντός 1-3 μηνών", "Εντός 6 μηνών"];
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
                defaultChecked={timeframe === option}
                required
              />
              <label
                className="custom-check-label p-4"
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

export default Timeframe;
