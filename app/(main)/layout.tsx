import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Banner />
      <Contact />
      <Footer />
    </>
  );
};

export default MainLayout;
