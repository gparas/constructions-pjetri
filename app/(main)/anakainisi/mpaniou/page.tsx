import { Metadata } from "next";
import LandingPage from "@/components/landing-page";
import { CONFIG } from "./constants";

export const metadata: Metadata = {
  title: "Ανακαίνιση Μπάνιου",
  description:
    "Αναβαθμίστε το μπάνιο σας με εξειδικευμένες υπηρεσίες και κορυφαία ποιότητα κατασκευής.",
  alternates: {
    canonical: "/anakainisi/mpaniou/",
  },
};

const AnakainisiMpaniouPage = () => <LandingPage {...CONFIG} />;

export default AnakainisiMpaniouPage;
