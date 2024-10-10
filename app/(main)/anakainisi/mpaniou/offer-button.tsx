import Link from "next/link";

const OfferButton = ({ ...other }) => {
  return (
    <Link href="/prosfora/" className="btn" {...other}>
      Ζητήστε Προσφορά Τώρα
    </Link>
  );
};

export default OfferButton;
