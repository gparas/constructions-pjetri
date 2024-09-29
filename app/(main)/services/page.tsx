import { Metadata } from "next";
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
      <Features />
    </>
  );
};

export default ServicesPage;
