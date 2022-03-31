import classes from "./postContent.module.css";
import PostHeader from "./postHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
//react syntax higlighter is huge!!
//we change it to a lighter build!!
import { PrismLight as SyntaxHighlighter} from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent(props) {
  const imagePath = `/images/posts/${props.post.image}`;
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`images/posts/${image.properties.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return (
        <p>{paragraph.children}</p>
      )
    },
    code(code) {
      const { className, children } = code;
      const lang = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={lang} children={children}/>
      )
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {props.post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
