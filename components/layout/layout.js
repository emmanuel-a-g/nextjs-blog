import { Fragment } from "react";
import MainNavigation from "./mainNavigation";
import Footer from '../footer/footer';
function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer/>
    </Fragment>
  );
}
export default Layout;
