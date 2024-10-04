import React from "react";
import OfferButton from "./offer-button";

const Cta = () => {
  return (
    <section className="pt-0 pb-8">
      <div className="container">
        <div className="bg-gray-100 rounded-md p-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2>Ετοιμοι να Ξεκινήσουμε</h2>
            <p className="text-lg md:text-xl mb-4">
              Λάβετε προσφορά για την ανακαίνιση του χώρου σας μέσα σε 24 ώρες.
            </p>
            <OfferButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
