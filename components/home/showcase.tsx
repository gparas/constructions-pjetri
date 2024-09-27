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
          <h2 className="display-6 mb-6">Πρόσφατα Έργα μας</h2>
          <p className="subtitle">Ποιότητα και καινοτομία σε κάθε μας έργο</p>
        </header>
        <div className="row">
          <div className="col-md-6 mb-6 mb-md-0">
            <Link href="/projects" className="d-block h-100">
              <Image
                src={ImgOne}
                alt="showcase-1"
                className="d-block w-100 h-auto"
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <Link href="/projects" className="d-block">
                  <Image
                    src={ImgTwo}
                    alt="showcase-2"
                    className="d-block w-100 h-auto"
                  />
                </Link>
              </div>
              <div className="col-6">
                <Link href="/projects" className="d-block">
                  <Image
                    src={ImgThree}
                    alt="showcase-3"
                    className="d-block w-100 h-auto"
                  />
                </Link>
              </div>
              <div className="mt-6 col-12">
                <Link href="/projects" className="d-block">
                  <Image
                    src={ImgFour}
                    alt="showcase-4"
                    className="d-block w-100 h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
