import ConstructionIcon from "@/icons/construction";
import InsulationIcon from "@/icons/Insulation";
import RenovationIcon from "@/icons/renovation";
import RoofIcon from "@/icons/roof";

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
    title: "Κεραμοσκεπές",
    description:
      "Προσφέρουμε εγκατάσταση και επισκευή κεραμοσκεπών, χρησιμοποιώντας υλικά υψηλής ποιότητας",
    icon: RoofIcon,
  },
];
const Features = () => {
  return (
    <section className="text-center bg-slate-50">
      <div className="container">
        <header className="flex flex-col w-full md:w-9/12 lg:w-7/12 items-center mb-12 md:mb-20 mx-auto gap-4">
          <h2>Ολοκληρωμένες Υπηρεσίες</h2>
          <p className="subtitle">
            Προσφέρουμε αξιόπιστες λύσεις διασφαλίζοντας την ανθεκτικότητα και
            την ομορφιά του χώρου σας με προσοχή στις λεπτομέρειες.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <Icon width={64} height={64} className="fill-primary mx-auto" />
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
