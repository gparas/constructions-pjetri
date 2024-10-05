import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LearnMoreButton from "../learn-more";
import { grey } from "@mui/material/colors";

const Banner = () => {
  return (
    <Box component="section">
      <Container>
        <Box bgcolor={grey[100]} textAlign="center" p={3} borderRadius={1}>
          <Typography variant="h3" component="h2">
            Ανακαινίστε τον Χώρο σας Σήμερα
          </Typography>
          <Typography component="p" variant="subtitle1" mb={2}>
            Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση.
          </Typography>
          <LearnMoreButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
