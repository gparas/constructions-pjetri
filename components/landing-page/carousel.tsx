"use client";

import Image from "next/image";
import { CarouselProps } from "./types";

const Carousel = ({ images }: CarouselProps) => {
  return (
    <section className="my-12">
      <div className="container">
        <div
          className="carousel  flex flex-nowrap gap-4"
          style={{
            overflowX: "auto",
            scrollSnapType: "x mandatory",
          }}
        >
          {images.map((item, index) => (
            <Image
              key={index}
              priority={index === 0}
              src={item.src}
              alt={item.alt}
              placeholder="blur"
              className="rounded-md w-10/12 lg:w-5/12"
              style={{
                scrollSnapAlign: "center",
              }}
            />
          ))}
          <style jsx>{`
            .carousel {
              -ms-overflow-style: none;
            }
            .carousel::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
