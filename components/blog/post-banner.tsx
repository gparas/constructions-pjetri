import React from "react";
import LearnMoreButton from "../learn-more";

const PostBanner = () => {
  return (
    <div className="bg-gray-100 rounded-md p-6 mt-12">
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-2xl">Είμαστε εδώ για να σας βοηθήσουμε!</h2>
        <p className="subtitle mb-4">
          Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση.
        </p>
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default PostBanner;
