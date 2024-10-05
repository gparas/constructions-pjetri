import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import EmailIcon from "@/icons/email";
import LocationIcon from "@/icons/location";
import PhoneIcon from "@/icons/phone";

const CONTACT_INFO = [
  {
    title: "Καλέστε Μας",
    description: "+30 699 7833718",
    href: "tel:+306997833718",
    target: "",
    icon: PhoneIcon,
  },
  {
    title: "Επισκεφθείτε Μας",
    description: "Ρουμπέση 68, Νέος Κόσμος, 11744",
    href: "https://www.google.com/maps/dir/37.9433929,23.7220232/constructions-pjetri/@37.9470022,23.7137064,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a1bd24e7ba30a7:0x7d02add3c5cafb6d!2m2!1d23.7265408!2d37.9532356?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
    target: "_blank",
    icon: LocationIcon,
  },
  {
    title: "Στείλτε Μας Email",
    description: "info@constructions-pjetri.gr",
    href: "mailto:info@constructions-pjetri.gr",
    target: "",
    icon: EmailIcon,
  },
];
const Contact = () => {
  return (
    <Box component="section" py={6} textAlign="center">
      <Container>
        <Box component="header" mb={[3, 6]}>
          <Typography variant="h3" component="h1">
            Επικοινωνία
          </Typography>
          <Typography component="p" variant="subtitle1">
            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {CONTACT_INFO.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Icon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h5" component="h2" mb={1}>
                  {item.title}
                </Typography>
                <Link
                  href={item.href}
                  target={item.target}
                  color="text.primary"
                  underline="hover"
                  rel="noopener noreferrer"
                >
                  {item.description}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
