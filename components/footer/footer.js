import { Fragment } from "react";
import classes from "./footer.module.css";

function Footer() {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <p className={classes.line}>@ 2022 Emmanuel</p>
      </footer>
    </Fragment>
  );
}

export default Footer;
