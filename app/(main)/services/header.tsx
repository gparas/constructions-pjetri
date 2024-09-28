import Image from "next/image";
import HeaderImg from "@/assets/images/services/header.jpg";
import LearnMoreButton from "@/components/learn-more/learn-more";

const Header = () => {
  return (
    <header className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 flex-row-reverse gap-6">
          <Image
            src={HeaderImg}
            alt="header"
            priority
            placeholder="blur"
            className="rounded-lg"
            sizes="100vw"
          />
          <div className="md:-order-1">
            <h1 className="mb-6">Κατασκευή &amp; Ανακαίνιση</h1>
            <p className="subtitle mb-8">
              Από το 2005, ειδικευόμαστε στην κατασκευή και ανακαίνιση
              κατοικιών, πολυκατοικιών και επαγγελματικών χώρων.
            </p>
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
