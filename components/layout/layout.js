import MainNavigation from "./mainNavigation";
import Footer from '../footer/footer';
import styles from "./layout.module.css";
function Layout(props) {
  return (
    <div className={styles.layout}>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer/>
    </div>
  );
}
export default Layout;
