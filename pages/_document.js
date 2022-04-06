//Allows to add html or entryy points??
import Document, { Html, Head, Main, NextScript } from "next/document";
//we put en
//we insert a portal
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Nunito+Sans:wght@300&display=swap" rel="stylesheet"/>
        </Head>
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
