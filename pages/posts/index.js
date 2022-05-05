import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/postsUtil";
import Head from "next/head";
import Footer from "../../components/footer/footer";
const dummy = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

function AllPostsPage(props) {
  return (
    <div style={{all: "unset"}}>
      <Head>
        <title>My Posts</title>
        <meta name="description" content="A list of all my apllications" />
      </Head>
      <AllPosts posts={props.posts} />
    </div>
  );
}
export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts(true);

  return {
    props: {
      posts: allPosts,
    },
    // revalidate: 600,
  };
}
