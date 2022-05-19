import MainNavigation from "./mainNavigation";
import styles from "./layout.module.css";
function Layout(props) {
  return (
    <div className={styles.layout}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <div className={styles.links}>
          [&nbsp;<a href="https://github.com/emmanuel-a-g" target="_blank">
            <img
              src="/static/github64x.png"
              width={24}
              height={24}
              alt="github icon, click to open link"
            />
          </a>
          <a href="https://linkedin.com/in/emmanuel-a-g" target="_blank">
            <img
              src="/static/linked64x.png"
              width={24}
              height={24}
              alt="linkedin icon, click to open link"
            />
          </a>&nbsp;]
        </div>
        <a
          className={styles.portfolio}
          href="https://emmanuelgarcia.dev"
          target="_blank"
          title="Link to emmanuel's portfolio"
        >
          <p style={{margin: "0"}}>© 2022 Emmanuel</p>
        </a>
      </footer>
    </div>
  );
}
export default Layout;
