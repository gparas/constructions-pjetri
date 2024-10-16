import ConstructionIcon from "@/icons/construction";
import InsulationIcon from "@/icons/insulation";
import RenovationIcon from "@/icons/renovation";
import RoofIcon from "@/icons/roof";
import PaintIcon from "@/icons/paint";
import DemolitionIcon from "@/icons/demolition";
import ScrewdriverIcon from "@/icons/screwdriver";
import WindowIcon from "@/icons/window";
import ToolIcon from "@/icons/tool";

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
    icon: ToolIcon,
  },
];

const Features = () => {
  return (
    <section className="my-12">
      <div className="container">
        <header className="mb-12 md:mb-20 text-center lg:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-3">Υψηλής Ποιότητας Υπηρεσίες</h2>
          <p className="text-lg md:text-xl">
            Από το 2005, ειδικευόμαστε στην κατασκευή και ανακαίνιση κατοικιών,
            πολυκατοικιών και επαγγελματικών χώρων.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 text-center">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <Icon width={64} height={64} className="text-primary mx-auto" />
                <h3 className="mb-4 mt-6 text-xl">{feature.title}</h3>
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
