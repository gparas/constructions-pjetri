import Link from "next/link";
import Image from "next/image";
import ImgOne from "@/assets/images/home/showcase-1.jpg";
import ImgTwo from "@/assets/images/home/showcase-2.jpg";
import ImgThree from "@/assets/images/home/showcase-3.jpg";
import ImgFour from "@/assets/images/home/showcase-4.jpg";

import ShowcaseGrid from "../showcase-grid";

const Showcase = () => {
  return (
    <section>
      <div className="container">
        <header className="mb-12 md:mb-20 text-center">
          <h2 className="mb-2">Πρόσφατα Έργα Μας</h2>
          <p className="subtitle">Ποιότητα και καινοτομία σε κάθε μας έργο</p>
        </header>
        <ShowcaseGrid
          items={[
            <Link
              key="showcase-1"
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgOne} alt="showcase-1" className="h-full" />
            </Link>,
            <Link
              key="showcase-2"
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgTwo} alt="showcase-2" />
            </Link>,
            <Link
              key="showcase-3"
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgThree} alt="showcase-3" />
            </Link>,
            <Link
              key="showcase-4"
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgFour} alt="showcase-4" className="h-full" />
            </Link>,
          ]}
        />
      </div>
    </section>
  );
};

export default Showcase;
