import cn from "classnames";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  title: string;
  slug?: string;
}

const CoverImage = ({ title, slug, ...other }: Props) => {
  const image = (
    <Image
      className={cn("w-full rounded-lg", {
        "hover:opacity-75 transition-opacity duration-200": slug,
      })}
      width={1092}
      height={573}
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
