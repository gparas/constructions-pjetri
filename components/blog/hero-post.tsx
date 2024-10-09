import Link from "next/link";
import formatDate from "@/lib/date-formatter";

import CoverImage from "./cover-image";
import { Post } from "@/interfaces/post";

const HeroPost = ({ post }: { post: Post }) => {
  const { title, coverImage, date, excerpt, slug } = post;
  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-8 md:mb-16">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            priority
            sizes="100vw"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-x-8">
          <div>
            <div className="text-lg mb-3 text-gray-500">{formatDate(date)}</div>
            <h3 className="text-3xl lg:text-4xl">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
          </div>
          <div>
            <p className="text-xl leading-relaxed">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
