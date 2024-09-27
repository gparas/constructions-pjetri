"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

const LearnMoreButton = ({ ...other }) => {
  return (
    <Link
      href="/anakainisi"
      className="btn"
      onClick={() =>
        sendGAEvent({
          action: "click_button",
          category: "interaction",
          label: "learn_more",
          value: "/anakainisi",
        })
      }
      {...other}
    >
      Μάθετε περισσότερα
    </Link>
  );
};

export default LearnMoreButton;
