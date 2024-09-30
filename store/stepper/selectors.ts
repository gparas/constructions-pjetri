import { RootState } from "../types";
import { REDUCER_NAME } from "./constants";

const getActiveStep = (state: RootState) => state[REDUCER_NAME].activeStep;

const getRenovationType = (state: RootState) =>
  state[REDUCER_NAME].renovationType;

const getBuildingType = (state: RootState) => state[REDUCER_NAME].buildingType;

const getConstructionYear = (state: RootState) =>
  state[REDUCER_NAME].constructionYear;

const getWorkType = (state: RootState) => state[REDUCER_NAME].workType;

const getTimeframe = (state: RootState) => state[REDUCER_NAME].timeframe;

const getBudget = (state: RootState) => state[REDUCER_NAME].budget;

const getSteps = (state: RootState) => state[REDUCER_NAME];

const selectors = {
  getActiveStep,
  getRenovationType,
  getBuildingType,
  getConstructionYear,
  getWorkType,
  getTimeframe,
  getBudget,
  getSteps,
};

export default selectors;
