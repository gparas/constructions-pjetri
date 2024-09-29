import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-5-1.jpg";
import ImgTwo from "@/assets/images/projects/project-5-2.jpg";
import ImgThree from "@/assets/images/projects/project-5-3.jpg";
import ImgFour from "@/assets/images/projects/project-5-4.jpg";

import ShowcaseGrid from "@/components/showcase-grid";

const StoreRenovation = () => {
  return (
    <section>
      <div className="container">
        <header className="mb-12 md:mb-20 text-center md:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-2">Ανακαίνιση καταστήματος</h2>
          <p className="subtitle">
            Ποιοτικές ανακαινίσεις καταστημάτων που αυξάνουν την ελκυστικότητα
            και τη λειτουργικότητα.
          </p>
        </header>
        <ShowcaseGrid
          items={[
            <Image
              src={ImgOne}
              key={"store-renovation-1"}
              alt="store-renovation-3"
              className="h-full"
            />,
            <Image
              src={ImgTwo}
              key={"store-renovation-2"}
              alt="store-renovation-3"
            />,
            <Image
              src={ImgThree}
              key={"store-renovation-3"}
              alt="store-renovation-3"
            />,
            <Image
              src={ImgFour}
              key={"store-renovation-4"}
              alt="store-renovation-3"
              className="h-full"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default StoreRenovation;
