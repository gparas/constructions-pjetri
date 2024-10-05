import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoIcon from "./icon";

const Logo = () => {
  return (
    <Button
      href="/"
      component={Link}
      color="inherit"
      size="large"
      startIcon={<LogoIcon color="primary" sx={{ width: 48, height: 48 }} />}
      sx={{ padding: 0 }}
    >
      <Typography component="span" fontWeight="bold">
        Pjerti
      </Typography>
    </Button>
  );
};

export default Logo;
