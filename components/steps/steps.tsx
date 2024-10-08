"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stepper";
import Loader from "../loader";
import Progress from "../progress";

const RenovationType = dynamic(() => import("./renovation-type"), {
  loading: () => <Loader />,
});
const BuildingType = dynamic(() => import("./building-type"), {
  loading: () => <Loader />,
});
const ConstructionYear = dynamic(() => import("./construction-year"), {
  loading: () => <Loader />,
});
const WorkType = dynamic(() => import("./work-type"), {
  loading: () => <Loader />,
});
const Timeframe = dynamic(() => import("./timeframe"), {
  loading: () => <Loader />,
});
const Contact = dynamic(() => import("./contact"), {
  loading: () => <Loader />,
});

const steps = [
  RenovationType,
  BuildingType,
  ConstructionYear,
  WorkType,
  Timeframe,
  Contact,
];
const titles = [
  "Είδος Ανακαίνισης",
  "Τύπος Κτιρίου",
  "Έτος Κατασκευής",
  "Επιλογή Εργασιών",
  "Προϋπολογισμός",
];
const subtitles = [
  "Επιλέξτε το είδος ανακαίνισης που σας ενδιαφέρει",
  "Η ανακαίνιση αφορά οικιακό ή επαγγελματικό χώρο",
  "Παρακαλούμε εισαγάγετε το έτος κατασκευής του κτιρίου.",
  "Δηλώστε τα είδη των εργασιών που απαιτούνται για την ανακαίνισή σας",
  "Ενημερώστε μας για το πότε θέλετε να ξεκινήσει η ανακαίνιση",
  "Συμπληρώστε τα στοιχεία σας για να σας στείλουμε την προσφορά",
];

const Steps = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(selectors.getActiveStep);

  useEffect(() => {
    dispatch(actions.resetSteps());
  }, [dispatch]);

  const Step = steps[activeStep];
  const title = titles[activeStep];
  const subtitle = subtitles[activeStep];
  return (
    <>
      <Progress value={(activeStep / (steps.length - 1)) * 100} />
      <div className="flex flex-col flex-grow  gap-10">
        <header className="text-center">
          {title && <h1 className="mb-2">{title}</h1>}
          <p className="text-lg md:text-xl">{subtitle}</p>
        </header>
        <Step />
      </div>
    </>
  );
};

export default Steps;
