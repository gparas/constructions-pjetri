import Link from "next/link";
import formatDate from "@/lib/date-formatter";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, slug, date }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          alt={title}
          src={coverImage}
          width={514}
          height={268}
          gravity="center"
          sizes="(min-width: 1200px) 514px, (min-width: 1000px) 424px, (min-width: 780px) 304px, (min-width: 580px) 492px, calc(100vw - 48px)"
        />
      </div>
      <div className="mb-2 text-lg">{formatDate(date)}</div>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
    </div>
  );
};

export default PostPreview;
