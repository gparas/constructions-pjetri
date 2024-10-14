"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";

import Actions from "../actions";
import Header from "./header";

import { generateYearsArray } from "./utils";

const ConstructionYear = () => {
  const dispatch = useDispatch();
  const constructionYear = useSelector(selectors.getConstructionYear);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actions.changeConstructionYear(event.target.value));
  };

  const options = generateYearsArray();
  return (
    <>
      <Header
        title="Έτος Κατασκευής"
        subtitle="Παρακαλούμε επιλέξτε το έτος κατασκευής του κτιρίου."
      />
      <div className="flex-grow sm:flex-grow-0">
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue={constructionYear}
          onChange={handleChange}
        >
          <option value="">Παρακαλώ επιλέξτε</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <Actions disableNext={!constructionYear} />
    </>
  );
};

export default ConstructionYear;
