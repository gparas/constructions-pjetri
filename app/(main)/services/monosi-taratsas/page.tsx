import { Metadata } from "next";
import LandingPage from "@/components/landing-page";
import { CONFIG } from "./constants";

export const metadata: Metadata = {
  title: "Μόνωση Ταράτσας",
  description:
    "Εξασφαλίστε μέγιστη εξοικονόμηση ενέργειας και προστασία από τις καιρικές συνθήκες",
  alternates: {
    canonical: "/services/monosi-taratsas/",
  },
};

const MonosiTaratsasPage = () => <LandingPage {...CONFIG} />;

export default MonosiTaratsasPage;
