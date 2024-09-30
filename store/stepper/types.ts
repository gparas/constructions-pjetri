export interface State {
  activeStep: number;
  renovationType: string;
  buildingType: string;
  constructionYear: string;
  workType: string[];
  timeframe: string;
  budget: string;
}

export interface Step {
  step:
    | "renovationType"
    | "buildingType"
    | "constructionYear"
    | "timeframe"
    | "budget";
  value: string;
}
