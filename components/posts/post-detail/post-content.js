const Dummy_POST = {
  title: "Getting started with NextJs",
  image: "getting-started-with-nextjs.png",
  excerpt:
    "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSr.",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "# This is a first post",
};
import ReactMarkdown from "react-markdown";
import styles from "./post-content.module.css";
import PostHeader from "./post-header";
export const PostContent = () => {
  const imagePath = `/images/posts/${Dummy_POST.slug}/${Dummy_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={Dummy_POST.title} image={imagePath} />
      <ReactMarkdown>{Dummy_POST.content}</ReactMarkdown>
    </article>
  );
};
