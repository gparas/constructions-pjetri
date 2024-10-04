import { Post } from "@/interfaces/post";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-4xl font-bold">Περισσότερα άρθρα</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-12">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
