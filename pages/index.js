import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
const DUMMY_POSTS = [
  {
    title: "Getting started with NextJs",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSr.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with NextJs2",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSr.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with NextJs3",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSr.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
];
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};
export default HomePage;
