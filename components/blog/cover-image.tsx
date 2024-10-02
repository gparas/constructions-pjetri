import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  priority?: boolean;
  slug?: string;
};

const CoverImage = ({ title, src, slug, priority }: Props) => {
  const image = (
    <Image
      src={src}
      priority={priority}
      alt={`Cover Image for ${title}`}
      className={cn("w-full rounded-lg", {
        "hover:opacity-75 transition-opacity duration-200": slug,
      })}
      width={1200}
      height={630}
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
