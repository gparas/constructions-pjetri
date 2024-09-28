import ConstructionIcon from "@/icons/construction";
import InsulationIcon from "@/icons/insulation";
import RenovationIcon from "@/icons/renovation";
import RoofIcon from "@/icons/roof";
import PaintIcon from "@/icons/paint";
import DemolitionIcon from "@/icons/demolition";
import ScrewdriverIcon from "@/icons/screwdriver";
import WindowIcon from "@/icons/window";
import MaintenanceIcon from "@/icons/maintenance";

const FEATURES = [
  {
    title: "Ανακαινίσεις",
    description:
      "Αναλαμβάνουμε ανακαινίσεις σπιτιών και επαγγελματικών χώρων, προσαρμοζόμενοι στις ανάγκες και τις προτιμήσεις σας",
    icon: RenovationIcon,
  },
  {
    title: "Κατασκευές",
    description:
      "Oλοκληρωμένες λύσεις για τη δημιουργία νέων κτιριακών δομών διασφαλίζοντας υψηλή ποιότητα και ανθεκτικότητα",
    icon: ConstructionIcon,
  },
  {
    title: "Μονώσεις",
    description:
      "Εγγυόμαστε την ενεργειακή απόδοση του κτιρίου σας με την εφαρμογή προηγμένων τεχνικών μόνωσης",
    icon: InsulationIcon,
  },
  {
    title: "Κεραμοσkεπές",
    description:
      "Προσφέρουμε εγκατάσταση και επισκευή κεραμοσκεπών, χρησιμοποιώντας υλικά υψηλής ποιότητας",
    icon: RoofIcon,
  },
  {
    title: "Ελαιοχρωματισμοί",
    description:
      "Προσφέρουμε επαγγελματικούς ελαιοχρωματισμούς, εσωτερικά και εξωτερικά, με ποιοτικά υλικά και προσοχή στις λεπτομέρειες.",
    icon: PaintIcon,
  },
  {
    title: "Κατεδαφαίσεις",
    description:
      "Αναλαμβάνουμε τα γκρεμίσματα με ασφάλεια και ακρίβεια, προετοιμάζοντας τον χώρο για τη νέα σας κατασκευή ή ανακαίνιση.",
    icon: DemolitionIcon,
  },
  {
    title: "Στήσιμο ραφιών",
    description:
      "Προσθέστε πρακτικό αποθηκευτικό χώρο με επαγγελματικά στημένα ράφια, τέλεια ενσωματωμένα στον χώρο σας.",
    icon: ScrewdriverIcon,
  },
  {
    title: "Επιδιορθώσεις ρολών παραθύρων",
    description:
      "Αποκαθιστούμε τη λειτουργικότητα των ρολών παραθύρων σας, εξασφαλίζοντας την ασφάλεια και την ενεργειακή απόδοση.",
    icon: WindowIcon,
  },
  {
    title: "Συντηρήσεις",
    description:
      "Προσφέρουμε πλήρες φάσμα υπηρεσιών συντήρησης για να διατηρείται ο χώρος σας σε τέλεια κατάσταση, προλαμβάνοντας μελλοντικά προβλήματα.",
    icon: MaintenanceIcon,
  },
];

const Features = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="display-6">Υψηλής Ποιότητας Υπηρεσίες</h2>
          <p className="subtitle">
            Μετατρέπουμε τις ιδέες σας σε πραγματικότητα με πάθος και
            εξειδίκευση.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 text-center md:text-left">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <Icon
                  width={48}
                  height={48}
                  className="fill-primary mx-auto md:mx-0"
                />
                <h3 className="mb-4 mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
