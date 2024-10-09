import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  slug?: string;
  sizes?: string;
  priority?: boolean;
  src: string;
}

const CoverImage = ({ src, title, slug, sizes, priority }: Props) => {
  const image = (
    <Image
      src={src}
      className={cn("w-full rounded-lg", {
        "hover:opacity-75 transition-opacity duration-200": slug,
      })}
      width={1200}
      height={630}
      sizes={sizes}
      priority={priority}
      alt={title}
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
