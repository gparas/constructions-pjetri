"use client";

import Image from "next/image";
import First from "@/assets/images/anakainisi/showcase-1.jpg";
import Second from "@/assets/images/anakainisi/showcase-2.jpg";
import Third from "@/assets/images/anakainisi/showcase-3.jpg";
import Fourth from "@/assets/images/anakainisi/showcase-4.jpg";

const ITEMS = [
  {
    src: First,
    alt: "showcase-1",
  },
  {
    src: Second,
    alt: "showcase-2",
  },
  {
    src: Third,
    alt: "showcase-3",
  },
  {
    src: Fourth,
    alt: "showcase-4",
  },
];

const Carousel = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div
          className="carousel  flex flex-nowrap gap-4"
          style={{
            overflowX: "auto",
            scrollSnapType: "x mandatory",
          }}
        >
          {ITEMS.map((item, index) => (
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
