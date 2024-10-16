import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-4-1.jpg";
import ImgTwo from "@/assets/images/projects/project-4-2.jpg";
import ImgThree from "@/assets/images/projects/project-4-3.jpg";
import ImgFour from "@/assets/images/projects/project-4-4.jpg";

import ShowcaseGrid from "@/components/showcase-grid";

const Insulation = () => {
  return (
    <section className="my-16">
      <div className="container">
        <header className="mb-8 text-center md:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-2">Μόνωση Ταρατσών</h2>
          <p className="text-lg md:text-xl">
            Εξασφαλίστε τη μέγιστη ενεργειακή απόδοση του κτιρίου σας με τις
            λύσεις μόνωσης ταρατσών.
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

export default Insulation;
