import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {children}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
