import Image from "next/image";
import ImgOne from "@/assets/images/projects/project-2-1.jpg";
import ImgTwo from "@/assets/images/projects/project-2-2.jpg";
import ImgThree from "@/assets/images/projects/project-2-3.jpg";
import ImgFour from "@/assets/images/projects/project-2-4.jpg";

const Kitchen = () => {
  return (
    <section className="py-12">
      <div className="container">
        <header className="mb-12 md:mb-20 text-center md:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="mb-2">Ανακαίνιση Κουζίνας</h2>
          <p className="text-lg md:text-xl">
            Παρέχουμε ολοκληρωμένες λύσεις που καλύπτουν κάθε ανάγκη
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src={ImgOne}
            alt="kitchen-2"
            placeholder="blur"
            sizes="100vw"
          />
          <Image
            src={ImgTwo}
            alt="kitchen-2"
            placeholder="blur"
            sizes="100vw"
          />
          <Image
            src={ImgThree}
            alt="kitchen-2"
            placeholder="blur"
            sizes="100vw"
          />
          <Image
            src={ImgFour}
            alt="kitchen-2"
            placeholder="blur"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
