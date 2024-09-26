import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

const HomePages = () => {
  return <div>HomePages</div>;
};

export default HomePages;
