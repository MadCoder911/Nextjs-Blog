import { getPageFiles } from "next/dist/server/get-page-files";
import { PostContent } from "../../components/posts/post-detail/post-content";
import { getPostsData, getPostsFiles } from "../../lib/posts-util";
const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;

  const data = getPostsData(slug);

  return {
    props: {
      post: data,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFiles = getPostsFiles();
  const slugs = postFiles.map((fn) => fn.replace(/\.md$/, ""));

  return {
    paths: slugs.map((s) => ({ params: { slug: s } })),
    fallback: false,
  };
};

export default PostDetailPage;
