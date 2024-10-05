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
          src={coverImage}
          alt={title}
          sizes="(min-width: 768px) 50vw, 100vw"
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
