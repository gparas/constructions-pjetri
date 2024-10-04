"use client";

import cn from "classnames";
import Link from "next/link";
import { CldImage, CldImageProps } from "next-cloudinary";

interface Props extends CldImageProps {
  title: string;
  slug?: string;
}

const CoverImage = ({ title, slug, ...other }: Props) => {
  const image = (
    <CldImage
      className={cn("w-full rounded-lg", {
        "hover:opacity-75 transition-opacity duration-200": slug,
      })}
      width={1092}
      height={572}
      crop="fill"
      {...other}
    />
  );
  return slug ? (
    <Link href={`/blog/${slug}`} aria-label={title}>
      {image}
    </Link>
  ) : (
    image
  );
};

export default CoverImage;
