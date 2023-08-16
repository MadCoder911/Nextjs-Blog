import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all Ahmed's blog posts" />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
};
export default AllPostsPage;

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  console.log(allPosts, "911");
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 20,
  };
};
