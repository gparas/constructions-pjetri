import Link from "next/link";

const Banner = () => {
  return (
    <section className="my-12">
      <div className="container">
        <div className="bg-gray-100 rounded-md p-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2>Ετοιμοι να Ξεκινήσουμε</h2>
            <p className="text-lg md:text-xl mb-4">
              Λάβετε προσφορά για την ανακαίνιση του χώρου σας μέσα σε 24 ώρες.
            </p>
            <Link href="/prosfora/" className="btn">
              Ζητήστε Προσφορά
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
