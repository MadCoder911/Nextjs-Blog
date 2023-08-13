import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
