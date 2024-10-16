import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-4-1.jpg";
import ImgTwo from "@/assets/images/projects/project-4-2.jpg";
import ImgThree from "@/assets/images/projects/project-4-3.jpg";
import ImgFour from "@/assets/images/projects/project-4-4.jpg";

import ShowcaseGrid from "@/components/showcase-grid";
import Link from "next/link";

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
            <Link
              key={"insulation-1"}
              href="/services/monosi-taratsas/"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image src={ImgOne} alt="insulation-3" className="h-full" />
            </Link>,
            <Link
              key={"insulation-2"}
              href="/services/monosi-taratsas/"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image src={ImgTwo} alt="insulation-3" />
            </Link>,
            <Link
              key={"insulation-3"}
              href="/services/monosi-taratsas/"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image src={ImgThree} alt="insulation-3" />
            </Link>,
            <Link
              key={"insulation-4"}
              href="/services/monosi-taratsas/"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image src={ImgFour} alt="insulation-3" className="h-full" />
            </Link>,
          ]}
        />
      </div>
    </section>
  );
};

export default Insulation;
