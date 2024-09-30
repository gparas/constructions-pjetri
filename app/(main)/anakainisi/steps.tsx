const STEPS = [
  {
    title: "Επίσκεψη στον Χώρο",
    description:
      "Επισκεπτόμαστε τον χώρο σας και προτείνουμε λύσεις με χρονοδιάγραμμα και κόστος πλήρως προσαρμοσμένο στις ανάγκες σας.",
  },
  {
    title: "Έναρξη Εργασιών",
    description:
      "Ξεκινάμε την υλοποίηση, με συνεχείς ελέγχους για την τήρηση προδιαγραφών και την πρόοδο του έργου.",
  },
  {
    title: "Παράδοση Έργου",
    description:
      "Ολοκληρώνουμε το έργο και σας παραδίδουμε έναν πλήρως ανακαινισμένο χώρο, έτοιμο να καλύψει κάθε σας ανάγκη.",
  },
];

const Steps = () => {
  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 w-full lg:w-10/12 mx-auto">
          <div className="lg:col-span-3">
            <h2 className="mb-3">
              Τα Βασικά Βήματα για την Ολοκλήρωση της Ανακαίνισής σας
            </h2>
            <p className="subtitle mb-4">
              Από την ιδέα στην πράξη. Ανακαινίστε με ασφάλεια και σιγουριά σε
              κάθε βήμα
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:col-start-5 lg:col-span-3">
            {STEPS.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-primary text-2xl font-bold">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
