import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
