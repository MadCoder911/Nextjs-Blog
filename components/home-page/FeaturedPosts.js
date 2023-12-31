import PostsGrid from "../posts/PostsGrid";
import styles from "./featured-posts.module.css";
const FeaturedPosts = (props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};
export default FeaturedPosts;
