import Logo from "./logo";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./mainNavigation.module.css"
function MainNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li className="navItem">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="navItem">
            <Link href="/apps">My Apps</Link>
          </li>
            <li className="navItem">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
