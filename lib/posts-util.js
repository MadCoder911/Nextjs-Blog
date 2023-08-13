import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDir = path.join(process.cwd(), "posts");

const getPostsData = (fileName) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); // remove file extention from name
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);
  const allPosts = postFiles.map((pf) => {
    return getPostsData(pf);
  });

  const sorted = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sorted;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured === true);
  return featuredPosts;
};
