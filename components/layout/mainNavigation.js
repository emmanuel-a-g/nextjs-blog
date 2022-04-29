import Logo from "./logo";
import Link from "next/link";
import classes from "./mainNavigation.module.css"

function MainNavigation() {
  return (
      <header className={classes.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav className={classes.nav}>
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
  );
}

export default MainNavigation;
