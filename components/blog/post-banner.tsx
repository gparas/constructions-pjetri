import React from "react";
import LearnMoreButton from "../learn-more";

interface Props {
  tags?: string;
}

const PostBanner = ({ tags }: Props) => {
  return (
    <div className="bg-gray-100 rounded-md p-6 mt-12">
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-2xl">
          {tags?.includes("bathroom")
            ? "Ολική Ανακαίνιση Μπάνιου"
            : "Είμαστε εδώ για να σας βοηθήσουμε!"}
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση.
        </p>
        <LearnMoreButton
          href={
            tags?.includes("bathroom") ? "/anakainisi/mpaniou/" : "/anakainisi/"
          }
        />
      </div>
    </div>
  );
};

export default PostBanner;
