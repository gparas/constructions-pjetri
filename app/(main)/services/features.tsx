import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
    title: "Κεραμοσκεπές",
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
    <Box component="section" py={6} textAlign="center">
      <Container>
        <Box component="header" mb={[4, 8]}>
          <Typography variant="h2" component="h1" mb={2}>
            Υψηλής Ποιότητας Υπηρεσίες
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            maxWidth={768}
            mx="auto"
          >
            Από το 2005, ειδικευόμαστε στην κατασκευή και ανακαίνιση κατοικιών,
            πολυκατοικιών και επαγγελματικών χώρων.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }} mb={2}>
                <Icon color="primary" sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="h2" mb={1}>
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
