import slice from "./slice";

const { changeActiveStep, changeValue, changeWorkType } = slice.actions;

const changeRenovationType = (value: string) =>
  changeValue({ step: "renovationType", value });

const changeBuildingType = (value: string) =>
  changeValue({ step: "buildingType", value });

const changeConstructionYear = (value: string) =>
  changeValue({ step: "constructionYear", value });

const changeTimeframe = (value: string) =>
  changeValue({ step: "timeframe", value });

const changeBudget = (value: string) => changeValue({ step: "budget", value });

const actions = {
  changeActiveStep,
  changeRenovationType,
  changeBuildingType,
  changeConstructionYear,
  changeWorkType,
  changeTimeframe,
  changeBudget,
};

export default actions;
