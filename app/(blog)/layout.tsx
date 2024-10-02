import { Metadata } from "next";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Blog",
  description: "Διαβάστε τα τελευταία άρθρα μας.",
  alternates: {
    canonical: "/blog/",
  },
};

const OfferLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  );
};

export default OfferLayout;
