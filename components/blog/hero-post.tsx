import Link from "next/link";
import { Post } from "@/interfaces/post";
import formatDate from "@/lib/date-formatter";

import CoverImage from "./cover-image";

const HeroPost = async ({ post }: { post: Post }) => {
  const { title, coverImage, date, excerpt, slug } = post;
  return (
    <section>
      <div className="container">
        <div className="mb-8 md:mb-16">
          <CoverImage
            slug={slug}
            title={title}
            alt={title}
            src={coverImage}
            priority
            width={1092}
            height={572}
            sizes="(min-width: 1200px) 1092px, (min-width: 1000px) 912px, (min-width: 780px) 672px, (min-width: 580px) 492px, calc(100vw - 48px)"
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
