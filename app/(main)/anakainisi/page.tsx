import { Metadata } from "next";
import Header from "./header";
import Feature from "./feature";
import Steps from "./steps";
import Cta from "./cta";
import Faq from "./faq";
import Carousel from "./carousel";

export const metadata: Metadata = {
  title: "Ανακαίνιση Χώρου | Ανακαινίστε τον Χώρο σας με Ασφάλεια",
  description:
    "Ανακαινίστε τον χώρο σας με ασφάλεια και σιγουριά. Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση. Λάβετε προσφορά για την ανακαίνιση του χώρου σας μέσα σε 24 ώρες.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/anakainisi`,
  },
};

const AnakainisiPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Feature />
      <Steps />
      <Faq />
      <Cta />
    </>
  );
};

export default AnakainisiPage;
