import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/postsUtil";
import { Fragment } from "react";
import Head from "next/head";
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
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta name="description" content="A list of all my programming posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    // revalidate: 600,
  };
}
