import { Metadata } from "next";
import Header from "./header";
import Feature from "./feature";
import Steps from "./steps";
import Cta from "./cta";
import Faq from "./faq";

export const metadata: Metadata = {
  title: "Ανακαίνιση Μπάνιου",
  description:
    "Αναβαθμίστε το μπάνιο σας με εξειδικευμένες υπηρεσίες και κορυφαία ποιότητα κατασκευής.",
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
