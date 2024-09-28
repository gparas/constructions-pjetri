import { Metadata } from "next";
import Contact from "@/components/contact";
import Header from "./header";
import Features from "./features";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description: "Δείτε τις υπηρεσίες που προσφέρουμε.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
  },
};

const ServicesPage = () => {
  return (
    <>
      <Header />
      <Features />
      <Contact />
    </>
  );
};

export default ServicesPage;
