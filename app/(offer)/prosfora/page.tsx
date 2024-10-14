import { Metadata } from "next";
import Stepper from "./stepper";

export const metadata: Metadata = {
  title: "Προσφορά",
  description:
    "Συμπληρώστε τα στοιχεία σας για να λάβετε προσφορά για την ανακαίνιση του χώρου σας.",
  alternates: {
    canonical: "/prosfora/",
  },
};

const OfferPage = () => <Stepper />;

export default OfferPage;
