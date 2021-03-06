import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featuredPosts";
import { getFeaturedPosts } from "../lib/postsUtil";
import Head from "next/head";

function HomePage(props) {
  //API REQUEST WORKS TOO, BUT we want a fully pre-rendered page
  return (
    <div>
      <Head>
        <title>Emmanuel's Blog</title>
        <meta
          name="description"
          content="Hi, my name is Emmanuel and I am a web developer based in El Paso."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
}

export default HomePage;
//getServerSideProps works for every request
//getStaticProps
export function getStaticProps() {
  const featured = getFeaturedPosts();

  return {
    props: {
      posts: featured,
    },
  };
}
