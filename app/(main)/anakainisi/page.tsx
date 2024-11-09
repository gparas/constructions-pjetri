import { Metadata } from "next";
import Image from "next/image";
import LandingPage from "@/components/landing-page";
import House from "@/assets/images/anakainisi/showcase-4.jpg";
import Bathroom from "@/assets/images/anakainisi/bathroom-1.jpg";
import { CONFIG } from "./constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ανακαίνιση",
  description:
    "Ανακαινίστε τον Χώρο σας Σήμερα με ασφάλεια και σιγουριά. Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση. Λάβετε προσφορά για την ανακαίνιση του χώρου σας μέσα σε 24 ώρες.",
  alternates: {
    canonical: "/anakainisi/",
  },
};

const solutions = [
  {
    title: "Ολική Ανακαίνιση Σπιτιού",
    image: House,
    link: "spitiou",
  },
  {
    title: "Ολική Ανακαίνιση Μπάνιου",
    image: Bathroom,
    link: "mpaniou",
  },
];

const AnakainisiPage = () => (
  <>
    <LandingPage {...CONFIG}>
      <section className="my-12">
        <div className="container">
          <h1 className="text-center mb-8 text-3xl">
            Ολοκληρωμένες Λύσεις Ανακαίνισης
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-12">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.link}
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="h-72 relative rounded-lg shadow-sm overflow-hidden mb-4">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-xl">{solution.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </LandingPage>
  </>
);

export default AnakainisiPage;
