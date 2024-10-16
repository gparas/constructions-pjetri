import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-6-1.jpg";
import ImgTwo from "@/assets/images/projects/project-6-2.jpg";
import ImgThree from "@/assets/images/projects/project-6-3.jpg";
import ImgFour from "@/assets/images/projects/project-6-4.jpg";

import ShowcaseGrid from "@/components/showcase-grid";

const Signs = () => {
  return (
    <section className="my-16">
      <div className="container">
        <header className="mb-8 text-center md:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-2">Σημάνσεις</h2>
          <p className="text-lg md:text-xl">
            Καλύπτουμε κάθε ανάγκη με προσαρμοσμένες λύσεις σήμανσης με υλικά
            που εγγυώνται αντοχή και ορατότητα.
          </p>
        </header>
        <ShowcaseGrid
          items={[
            <Image
              src={ImgOne}
              key={"insulation-1"}
              alt="insulation-3"
              className="h-full"
            />,
            <Image key={"insulation-2"} src={ImgTwo} alt="insulation-3" />,
            <Image key={"insulation-3"} src={ImgThree} alt="insulation-3" />,
            <Image
              src={ImgFour}
              key={"insulation-4"}
              alt="insulation-3"
              className="h-full"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default Signs;
