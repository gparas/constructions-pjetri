import Link from "next/link";
import { BannerProps } from "./types";

const Banner = ({ title, description, href }: BannerProps) => {
  return (
    <section className="my-12">
      <div className="container">
        <div className="bg-gray-100 rounded-md p-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2>{title}</h2>
            <p className="text-lg md:text-xl mb-4">{description}</p>
            <Link href={href} className="btn">
              Ζητήστε Προσφορά Τώρα
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
