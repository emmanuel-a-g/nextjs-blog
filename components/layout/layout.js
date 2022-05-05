import MainNavigation from "./mainNavigation";
import styles from "./layout.module.css";
function Layout(props) {
  return (
    <div className={styles.layout}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <p>© 2022 Emmanuel</p>
      </footer>
    </div>
  );
}
export default Layout;
