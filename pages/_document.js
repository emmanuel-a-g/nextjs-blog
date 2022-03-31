//Allows to add html or entryy points??
import Document, { Html, Head, Main, NextScript } from "next/document";
//we put en
//we insert a portal
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
          <body>
            <Main />
            <NextScript />
            <div id="notifications"></div>
          </body>
      </Html>
    );
  }
}
export default MyDocument; 