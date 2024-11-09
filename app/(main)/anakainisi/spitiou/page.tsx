import { Metadata } from "next";
import LandingPage from "@/components/landing-page";
import { CONFIG } from "./constants";

export const metadata: Metadata = {
  title: "Ολική Ανακαίνιση Σπιτιού",
  description: "Αλλάξτε το Σπίτι Σας Με 550€/τ.μ.",
  alternates: {
    canonical: "/anakainisi/spitiou/",
  },
};

const AnakainisiMpaniouPage = () => <LandingPage {...CONFIG} />;

export default AnakainisiMpaniouPage;
