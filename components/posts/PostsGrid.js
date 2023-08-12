import PostItem from "./PostItem";
import styles from "./posts-grid.module.css";
const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => {
        return <PostItem key={post.slug} {...post} />;
      })}
    </ul>
  );
};
export default PostsGrid;
