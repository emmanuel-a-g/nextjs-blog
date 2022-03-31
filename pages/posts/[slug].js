import PostContent from "../../components/posts/postDetail/postContent";
import { getPostData, getPostsFiles } from "../../lib/postsUtil";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}
export default PostDetailPage;

export function getStaticProps(context) {
  //we always get context
  const { params } = context;
  const { slug } = params;
  const data = getPostData(slug);

  return {
    props: {
      post: data,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  //can we just pre-generate the most important ones??
  const fileNames = getPostsFiles();

  const slugs = fileNames.map((name) => name.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
    // fallback: "blocking",
    //to prevent pre-generating the posts that dont matter
  };
}
