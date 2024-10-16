import { Metadata } from "next";
import LandingPage from "@/components/landing-page";
import { CONFIG } from "./constants";

export const metadata: Metadata = {
  title: "Ανακαίνιση",
  description:
    "Ανακαινίστε τον Χώρο σας Σήμερα με ασφάλεια και σιγουριά. Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση. Λάβετε προσφορά για την ανακαίνιση του χώρου σας μέσα σε 24 ώρες.",
  alternates: {
    canonical: "/anakainisi/",
  },
};

const AnakainisiPage = () => <LandingPage {...CONFIG} />;

export default AnakainisiPage;
