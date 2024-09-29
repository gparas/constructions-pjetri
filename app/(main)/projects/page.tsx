import { Metadata } from "next";
import House from "./house";
import Kitchen from "./kitchen";
import Bathroom from "./bathroom";
import Insulation from "./insulation";
import StoreRenovation from "./store-renovation";

export const metadata: Metadata = {
  title: "Έργα",
  description: "Δείτε τα έργα που έχουμε ολοκληρώσει.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
  },
};

const ProjectsPage = () => {
  return (
    <>
      <House />
      <Kitchen />
      <Bathroom />
      <Insulation />
      <StoreRenovation />
    </>
  );
};

export default ProjectsPage;
