import Logo from "./logo";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./mainNavigation.module.css";
import { useState, useEffect } from "react";

function MainNavigation() {
  const [width, setWidth] = useState(null);
  const [sideBar, setSideBar] = useState(false);
  const router = useRouter();

  const breakpoint = 500;
  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  function handleSideBar() {
    setSideBar((prev) => !prev);
  }
  function handleMobile(path) {
    () => handleSideBar();
    router.push(path);
  }
  const desktop = (
    <ul>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <Link href="/apps">Apps</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
  const mobile = (
    <div className={classes.flexMobileRight}>
      <ul className={classes.navListMobile}>
        <li className={classes.hamburger} onClick={handleSideBar}>
          <img
            src="/menu.png"
            alt="menu"
            height={24}
            width={24}
          />
        </li>
        <aside
          className={sideBar ? classes.activeSide : classes.side}
          onClick={handleSideBar}
        >
          <ul className={classes.drawer}>
            <li
              className={classes.navItem}
              onClick={() => handleMobile("/")}
            >
              Home
            </li>
            <li
              className={classes.navItem}
              onClick={() => handleMobile("posts")}
            >
              Posts
            </li>
            <li
              className={classes.navItem}
              onClick={() => handleMobile("apps")}
            >
              Apps
            </li>
            <li
              className={classes.navItem}
              onClick={() => handleMobile("contact")}
            >
              Contact
            </li>
          </ul>
        </aside>
      </ul>
    </div>
  );

  return (
    <header className={classes.header}>
      <Link href="/">
        <a title="anchor to home page">
          <Logo />
        </a>
      </Link>
      <nav className={classes.nav}>{width > breakpoint ? desktop : mobile}</nav>
    </header>
  );
}

export default MainNavigation;
