import { getAllPosts } from "@/lib/api";
import HeroPost from "@/components/blog/hero-post";
import MoreStories from "@/components/blog/more-posts";

const BlogPage = () => {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  return (
    <>
      <HeroPost post={heroPost} />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
};

export default BlogPage;
