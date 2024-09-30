import LearnMoreButton from "../learn-more";

const Banner = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="bg-gray-100 rounded-md p-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2>Ανακαινίστε τον Χώρο σας Σήμερα</h2>
            <p className="subtitle mb-4">
              Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση.
            </p>
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
