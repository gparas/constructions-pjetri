import Link from "next/link";

const OfferButton = ({ ...other }) => {
  return (
    <Link href="/prosfora/" className="btn btn-action-1" {...other}>
      Ζητήστε Προσφορά
    </Link>
  );
};

export default OfferButton;
