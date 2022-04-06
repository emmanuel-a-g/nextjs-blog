//UTILITY FUNCTIONS
import fs from "fs";
import path from "path";
//Split metadata and markdown content with this
import matter from "gray-matter";
const postsDir = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDir);
}


export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes extension md
  //Read content of file
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8")
  //The configured properties
  const {data, content} = matter(fileContent);
  const postData = {slug: postSlug, ...data, content};
  return postData;
}
export function getAllPosts() {
  //reads all file names of the directory
  const postFiles = fs.readdirSync(postsDir);
  const allPosts = postFiles.map(file => {
    return getPostData(file)
  })
  const sorted = allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
  return sorted;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featured = allPosts.filter(post => post.isFeatured === true)
  return featured
}

export function getAllApps() {
  const allPosts = getAllPosts()
  const myApps = allPosts.filter(post => post.isApp && post.isApp === true)
  return myApps; 
}