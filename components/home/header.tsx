import Illustration from "./illustration";

const Header = () => {
  return (
    <header className="py-12">
      <div className="container">
        <div className="flex flex-wrap items-center md:flex-row-reverse gap-y-6">
          <div className="w-full md:w-7/12">
            <Illustration />
          </div>
          <div className="w-full md:w-5/12">
            <h1 className="mb-4">Μεταμορφώστε το Χώρο σας</h1>
            <p className="text-lg md:text-xl">
              Εξειδικευμένες λύσεις στην κατασκευή και ανακαίνιση οικιακών και
              επαγγελματικών χώρων με αφοσίωση στην ποιότητα και τη λεπτομέρεια.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
