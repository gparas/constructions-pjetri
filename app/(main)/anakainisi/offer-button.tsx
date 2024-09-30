"use client";

import { sendGAEvent } from "@next/third-parties/google";

const OfferButton = ({ ...other }) => {
  return (
    <a
      href="https://anakainisi.constructions-pjetri.gr"
      className="btn btn-action-1"
      target="_blank"
      onClick={() =>
        sendGAEvent({
          action: "click_button",
          category: "interaction",
          label: "offer",
          value: "anakainisi.constructions-pjetri.gr",
        })
      }
      {...other}
    >
      Ζητήστε Προσφορά Τώρα
    </a>
  );
};

export default OfferButton;
