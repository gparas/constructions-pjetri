"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
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
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <CldImage
                src="constructions-pjetri/home/showcase-1.jpg"
                alt="showcase-1"
                className="h-full"
                width={538}
                height={538}
                crop="fill"
                gravity="center"
                sizes="(min-width: 1200px) 538px, (min-width: 1000px) 448px, (min-width: 780px) 328px, (min-width: 580px) 492px, calc(100vw - 48px)"
              />
            </Link>,
            <Link
              key="showcase-2"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <CldImage
                src="constructions-pjetri/home/showcase-2.jpg"
                alt="showcase-2"
                width={261}
                height={261}
                crop="fill"
                sizes="(min-width: 1200px) 261px, (min-width: 1000px) 216px, (min-width: 780px) 156px, (min-width: 580px) 238px, calc(50vw - 32px)"
              />
            </Link>,
            <Link
              key="showcase-3"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <CldImage
                src="constructions-pjetri/home/showcase-3.jpg"
                alt="showcase-3"
                width={261}
                height={261}
                crop="fill"
                sizes="(min-width: 1200px) 261px, (min-width: 1000px) 216px, (min-width: 780px) 156px, (min-width: 580px) 238px, calc(50vw - 32px)"
              />
            </Link>,
            <Link
              key="showcase-4"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <CldImage
                src="constructions-pjetri/home/showcase-4.jpg"
                alt="showcase-4"
                width={538}
                height={261}
                crop="fill"
                sizes="(min-width: 1200px) 538px, (min-width: 1000px) 448px, (min-width: 780px) 328px, (min-width: 580px) 492px, calc(100vw - 48px)"
              />
            </Link>,
          ]}
        />
      </div>
    </section>
  );
};

export default Showcase;
