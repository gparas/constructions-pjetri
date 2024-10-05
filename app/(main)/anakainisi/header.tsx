import OfferButton from "./offer-button";

const AnakainisiHeader = () => {
  return (
    <header className="py-12 text-center">
      <div className="container">
        <h1 className="mb-2">Ανακαινίστε τον Χώρο σας Σήμερα</h1>
        <p className="text-lg md:text-xl mb-6">
          Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση.
        </p>
        <OfferButton />
      </div>
    </header>
  );
};

export default AnakainisiHeader;
