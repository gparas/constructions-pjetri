import { Metadata } from "next";
import Progress from "@/components/progress";
import Steps from "@/components/steps";

export const metadata: Metadata = {
  title: "Προσφορά",
  description:
    "Συμπληρώστε τα στοιχεία σας για να λάβετε προσφορά για την ανακαίνιση του χώρου σας.",
  alternates: {
    canonical: "/prosfora/",
  },
};

const OfferPage = () => {
  return (
    <>
      <Progress />
      <Steps />
    </>
  );
};

export default OfferPage;
