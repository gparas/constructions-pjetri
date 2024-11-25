"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { CarouselProps } from "./types";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../carousel-arrow-buttons";

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="my-12">
      <div className="container">
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {images.map((item, index) => (
              <div key={index} className={styles.embla__slide}>
                <Image
                  priority={index === 0}
                  src={item.src}
                  alt={item.alt}
                  placeholder="blur"
                  fill
                  sizes="50vw"
                  className={styles.embla__slide__img}
                />
              </div>
            ))}
          </div>
          <div className={styles.embla__buttons}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
