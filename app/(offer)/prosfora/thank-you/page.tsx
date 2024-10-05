import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ευχαριστούμε για την Υποβολή σας!",
  description:
    "Ευχαριστούμε που υποβάλατε τα στοιχεία σας! Η ομάδα μας θα επικοινωνήσει σύντομα μαζί σας με μια εξατομικευμένη προσφορά για την ανακαίνισή σας.",
  alternates: {
    canonical: "/prosfora/thank-you/",
  },
};

const ThankYouPage = () => {
  return (
    <>
      <div className="text-center mb-4">
        <svg
          viewBox="0 0 24 24"
          width={60}
          height={60}
          className="fill-primary mx-auto"
        >
          <path d="M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z" />
        </svg>
        <h1 className="mb-4 mt-8">
          Σας ευχαριστούμε που μας επιλέξατε για την ανακαίνισή σας!
        </h1>
        <p className="text-lg md:text-xl">
          Η ομάδα μας θα επεξεργαστεί τα στοιχεία σας και θα επικοινωνήσει
          σύντομα μαζί σας με την προσφορά σας.
        </p>
      </div>
      <div className="text-center">
        <p className="font-semibold">
          Για οποιαδήποτε ερώτηση επικοινωνήσετε μαζί μας
        </p>
        <p>
          Τηλέφωνο: <a href="tel:+306997833718">+30 699 7833718</a>
          <br />
          Email:{" "}
          <a href="mailto:info@constructions-pjetri.gr">
            info@constructions-pjetri.gr
          </a>
          <br />
          Διεύθυνση: Ρουμπέση 68, Νέος Κόσμος, 11744
        </p>
      </div>
    </>
  );
};

export default ThankYouPage;
