"use client";

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";
import HomeIcon from "@/icons/home";
import ShopIcon from "@/icons/shop";

import Actions from "../actions";

const BuildingType = () => {
  const dispatch = useDispatch();
  const buildingType = useSelector(selectors.getBuildingType);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeBuildingType(event.target.value));
  };
  const OPTIONS = ["Οικιακό", "Επαγγελματικό"];
  return (
    <>
      <div className="grid grid-cols-2 gap-4 flex-grow sm:flex-grow-0">
        {OPTIONS.map((option, index) => {
          const Icon = index === 0 ? HomeIcon : ShopIcon;
          return (
            <div key={option}>
              <input
                className="hidden peer"
                type="radio"
                name="options"
                id={`option-${index}`}
                value={option}
                onChange={handleChange}
                defaultChecked={buildingType === option}
                required
              />
              <label className="custom-check-label" htmlFor={`option-${index}`}>
                <Icon width={64} height={64} />
                <span className="block text-center truncate w-full text-gray-600">
                  {option}
                </span>
              </label>
            </div>
          );
        })}
      </div>
      <Actions disableNext={!buildingType} />
    </>
  );
};

export default BuildingType;
