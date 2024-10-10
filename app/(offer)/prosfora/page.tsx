import { Metadata } from "next";
import Steps from "@/components/steps";

export const metadata: Metadata = {
  title: "Προσφορά",
  description:
    "Συμπληρώστε τα στοιχεία σας για να λάβετε προσφορά για την ανακαίνιση του χώρου σας.",
  alternates: {
    canonical: "/prosfora/",
  },
};

const OfferPage = () => <Steps />;

export default OfferPage;
