import classes from "./allPosts.module.css"
import PostsGrid from "./postsGrid";
function AllApps(props) {
  return (
    <section className={classes.posts}>
      <h1>Apps</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default AllApps;
