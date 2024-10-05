import Link from "next/link";
import Button from "@mui/material/Button";

const LearnMoreButton = () => {
  return (
    <Button
      component={Link}
      href="/anakainisi"
      variant="contained"
      size="large"
      disableElevation
    >
      Μάθετε περισσότερα
    </Button>
  );
};

export default LearnMoreButton;
