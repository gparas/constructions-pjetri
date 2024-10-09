import { Metadata } from "next";
import Header from "./header";
import Feature from "./feature";
import Steps from "./steps";
import Cta from "./cta";
import Faq from "./faq";

export const metadata: Metadata = {
  title: "Ανακαίνιση",
  description:
    "Ανακαινίστε τον Χώρο σας Σήμερα με ασφάλεια και σιγουριά. Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση. Λάβετε προσφορά για την ανακαίνιση του χώρου σας μέσα σε 24 ώρες.",
  alternates: {
    canonical: "/anakainisi/mpaniou/",
  },
};

const AnakainisiPage = () => {
  return (
    <>
      <Header />
      <Feature />
      <Steps />
      <Faq />
      <Cta />
    </>
  );
};

export default AnakainisiPage;
