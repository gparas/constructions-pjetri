import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import InstagramIcon from "@/icons/instagram";
import FacebookIcon from "@/icons/facebook";

import Logo from "../logo";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Box component="footer" pt={2} pb={3} bgcolor={grey[100]}>
      <Container>
        <Grid container alignItems="center" textAlign="center">
          <Grid size={{ xs: 12, md: "auto" }}>
            <Logo />
          </Grid>
          <Grid size={{ xs: 12, md: "grow" }}>
            <Button component={Link} href="/services" color="inherit">
              Υπηρεσίες
            </Button>
            <Button component={Link} href="/projects" color="inherit">
              Έργα
            </Button>
            <Button component={Link} href="/blog" color="inherit">
              blog
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: "auto" }}>
            <IconButton
              href="https://www.facebook.com/people/%CE%9A%CE%B1%CF%84%CE%B1%CF%83%CE%BA%CE%B5%CF%85%CE%AD%CF%82-%CE%95%CF%80%CE%B9%CF%83%CE%BA%CE%B5%CF%85%CE%B5%CF%85%CE%B5%CF%82-pjetri/100063702662482/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/saimir_pjetri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }} />
        <Grid
          container
          alignItems="center"
          textAlign={{ xs: "center", md: "initial" }}
        >
          <Grid size={{ xs: 12, md: "grow" }}>
            <Button
              component={Link}
              href="/privacy-policy"
              color="inherit"
              size="small"
              sx={{ fontWeight: 400 }}
            >
              Πολιτική Απορρήτου
            </Button>
            <Button
              component={Link}
              href="/terms-and-conditions"
              color="inherit"
              size="small"
              sx={{ fontWeight: 400 }}
            >
              Όροι Χρήσης
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: "auto" }}>
            <Typography variant="body2">Copyright © {date} pjerti</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
