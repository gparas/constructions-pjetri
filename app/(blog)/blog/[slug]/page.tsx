import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import ReactMarkdown from "markdown-to-jsx";
import PostHeader from "@/components/blog/post-header";
import PostBanner from "@/components/blog/post-banner";

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
    alternates: {
      canonical: "/blog/" + post.slug + "/",
    },
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="pt-12 pb-6">
      <div className="container lg:max-w-4xl">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          excerpt={post.excerpt}
        />
        <ReactMarkdown
          options={{
            overrides: {
              h2: {
                component: "h2",
                props: { className: "mb-4 text-xl" },
              },
              h3: {
                component: "h2",
                props: { className: "mb-4" },
              },
              p: {
                component: "p",
                props: { className: "text-lg mb-6" },
              },
              ul: {
                component: "ul",
                props: { className: "text-lg mb-6" },
              },
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
        <PostBanner />
      </div>
    </article>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
