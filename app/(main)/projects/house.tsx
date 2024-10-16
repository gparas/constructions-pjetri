import Link from "next/link";
import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-1-1.jpg";
import ImgTwo from "@/assets/images/projects/project-1-2.jpg";
import ImgThree from "@/assets/images/projects/project-1-3.jpg";

const House = () => {
  return (
    <section className="my-16">
      <div className="container">
        <header className="mb-8 text-center md:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-2">Ανακαίνιση Διαμερίσματος</h2>
          <p className="text-lg md:text-xl">
            Ανανεώστε το διαμέρισμά σας με τις κατασκευαστικές και αισθητικές
            λύσεις που προσφέρουμε.
          </p>
        </header>
        <div className="mb-4">
          <Link
            href="/anakainisi/"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <Image
              src={ImgOne}
              alt="house-1"
              priority
              placeholder="blur"
              className="d-block w-100 h-auto"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/anakainisi/"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <Image
              src={ImgTwo}
              alt="house-2"
              placeholder="blur"
              className="d-block w-100 h-auto"
            />
          </Link>
          <Link
            href="/anakainisi/"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <Image
              src={ImgThree}
              alt="house-3"
              placeholder="blur"
              className="d-block w-100 h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default House;
