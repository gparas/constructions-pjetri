import { Metadata } from "next";
import Header from "@/components/home/header";
import Features from "@/components/home/features";
import Showcase from "@/components/home/showcase";

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Features />
      <Showcase />
    </>
  );
};

export default HomePage;
