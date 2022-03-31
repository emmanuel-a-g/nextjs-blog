import classes from "./postsGrid.module.css"
import PostItem from "./postItem"

function PostsGrid(props) {
  const posts = props.posts;

  return (
    <ul className={classes.grid}>
    {posts.map((post, idx) => <PostItem key={idx} post={post}/>)}
    </ul>
  )
}

export default PostsGrid