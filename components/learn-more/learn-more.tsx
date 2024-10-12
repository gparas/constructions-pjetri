import Link from "next/link";

const LearnMoreButton = ({ ...other }) => {
  return (
    <Link href="/anakainisi" className="btn" {...other}>
      Μάθετε περισσότερα
    </Link>
  );
};

export default LearnMoreButton;
