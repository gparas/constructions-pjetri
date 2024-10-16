import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-3-1.jpg";
import ImgTwo from "@/assets/images/projects/project-3-2.jpg";
import ImgThree from "@/assets/images/projects/project-3-3.jpg";
import ImgFour from "@/assets/images/projects/project-3-4.jpg";

import ShowcaseGrid from "@/components/showcase-grid";

const Bathroom = () => {
  return (
    <section className="my-16">
      <div className="container">
        <header className="mb-8 text-center lg:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-2">Ανακαίνιση Μπάνιου</h2>
          <p className="text-lg md:text-xl">
            Ολοκληρωμένες λύσεις για την ανανέωση και βελτίωση του μπάνιου σας
          </p>
        </header>
        <ShowcaseGrid
          items={[
            <Image
              key={"bathroom-1"}
              src={ImgOne}
              alt="bathroom-3"
              className="h-full"
            />,
            <Image key={"bathroom-2"} src={ImgTwo} alt="bathroom-3" />,
            <Image key={"bathroom-3"} src={ImgThree} alt="bathroom-3" />,
            <Image
              key={"bathroom-4"}
              src={ImgFour}
              alt="bathroom-3"
              className="h-full"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default Bathroom;
