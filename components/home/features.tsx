import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ConstructionIcon from "@/icons/construction";
import InsulationIcon from "@/icons/insulation";
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
    <Box component="section" py={6} textAlign="center" bgcolor={grey[50]}>
      <Container>
        <Box component="header" mb={[4, 8]}>
          <Typography variant="h2" mb={2}>
            Ολοκληρωμένες Υπηρεσίες
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            maxWidth={768}
            mx="auto"
          >
            Προσφέρουμε αξιόπιστες λύσεις διασφαλίζοντας την ανθεκτικότητα και
            την ομορφιά του χώρου σας με προσοχή στις λεπτομέρειες.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }} mb={2}>
                <Icon color="primary" sx={{ fontSize: 64, mb: 1 }} />
                <Typography variant="h5" component="h3" mb={1}>
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
