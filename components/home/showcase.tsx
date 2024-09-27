import Image from "next/image";
import ImgOne from "@/assets/images/home/showcase-1.jpg";
import ImgTwo from "@/assets/images/home/showcase-2.jpg";
import ImgThree from "@/assets/images/home/showcase-3.jpg";
import ImgFour from "@/assets/images/home/showcase-4.jpg";
import Link from "next/link";

const Showcase = () => {
  return (
    <section>
      <div className="container">
        <header className="mb-12 md:mb-20 text-center">
          <h2 className="mb-2">Πρόσφατα Έργα Μας</h2>
          <p className="subtitle">Ποιότητα και καινοτομία σε κάθε μας έργο</p>
        </header>
        <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-1 md:grid-cols-4 gap-4">
          <div className="row-span-2 md:col-span-2">
            <Link
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgOne} alt="showcase-1" className="h-full" />
            </Link>
          </div>
          <div className="row-span-1 md:col-span-2 grid grid-cols-2 gap-4">
            <Link
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgTwo} alt="showcase-2" />
            </Link>
            <Link
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgThree} alt="showcase-3" />
            </Link>
          </div>
          <div className="row-span-1 md:col-span-2">
            <Link
              href="/projects"
              className="hover:opacity-75 transition-opacity ease-in-out"
            >
              <Image src={ImgFour} alt="showcase-4" className="h-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
