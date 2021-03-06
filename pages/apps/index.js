import AllApps from "../../components/posts/allApps";
import { getAllApps } from "../../lib/postsUtil";
import Head from "next/head";

function AllAppsPage(props) {
  return (
    <div>
      <Head>
        <title>My Apps</title>
        <meta name="description" content="A list of all my programming posts" />
      </Head>
      <AllApps posts={props.posts} />
    </div>
  );
}
export default AllAppsPage;

export function getStaticProps() {
  const allApps = getAllApps();

  return {
    props: {
      posts: allApps,
    },
  };
}
