import { Metadata } from "next";
import Features from "./features";
import Banner from "@/components/banner";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description: "Δείτε τις υπηρεσίες που προσφέρουμε.",
  alternates: {
    canonical: "/services/",
  },
};

const ServicesPage = () => {
  return (
    <>
      <Features />
      <Banner />
    </>
  );
};

export default ServicesPage;
