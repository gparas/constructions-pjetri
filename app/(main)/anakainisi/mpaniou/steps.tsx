import Image from "next/image";
import Bathroom from "@/assets/images/anakainisi/bathroom-1.jpg";

const STEPS = [
  {
    title: "Αποξήλωση του παλαιού μπάνιου",
    description:
      "Καθαρίζουμε τον χώρο αφαιρώντας όλες τις παλιές εγκαταστάσεις.",
  },
  {
    title: "Αλλαγή αποχέτευσης",
    description:
      "Εγκαθιστούμε νέα συστήματα αποχέτευσης Valsir, γνωστά για την αξιοπιστία και την αντοχή τους.",
  },
  {
    title: "Αλλαγή σωληνώσεων",
    description:
      "Αντικαθιστούμε όλες τις σωληνώσεις για μέγιστη ασφάλεια και διάρκεια ζωής.",
  },
  {
    title: "Προσαρμογή του χώρου",
    description:
      "Η διαμόρφωση του χώρου γίνεται σύμφωνα με τις αισθητικές και λειτουργικές σας ανάγκες.",
  },
  {
    title: "Τοποθέτηση πλακιδίων",
    description:
      "Τοποθετούμε τα πλακίδια της επιλογής σας με προσοχή στη λεπτομέρεια.",
  },
  {
    title: "Τοποθέτηση ειδών υγιεινής",
    description:
      "Εγκαθιστούμε νιπτήρες, ντουζιέρες, κρεμαστές λεκάνες και μπαταρίες με επαγγελματική ακρίβεια.",
  },
];

const Steps = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 w-full lg:w-10/12 mx-auto">
          <div className="lg:col-span-4">
            <h2 className="mb-3">Τα Βασικά Βήματα της Ανακαίνισης:</h2>
            <p className="text-lg md:text-xl">
              Από την ιδέα στην πράξη. Ανακαινίστε με ασφάλεια και σιγουριά σε
              κάθε βήμα
            </p>
            <Image
              src={Bathroom}
              alt="bathroom"
              className="rounded-lg shadow-xl hidden md:block mt-12"
            />
          </div>
          <div className="flex flex-col gap-8 lg:col-start-6 lg:col-span-3">
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
