import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Illustration from "./illustration";

const Header = () => {
  return (
    <Box component="section" py={6}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Illustration />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} order={{ md: -1 }}>
            <Typography variant="h1" mb={2}>
              Μεταμορφώστε το Χώρο σας
            </Typography>
            <Typography component="p" variant="subtitle1">
              Εξειδικευμένες λύσεις στην κατασκευή και ανακαίνιση οικιακών και
              επαγγελματικών χώρων με αφοσίωση στην ποιότητα και τη λεπτομέρεια.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
