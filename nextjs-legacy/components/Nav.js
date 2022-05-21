// import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
const Nav = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const openMobileMenuHandler = () => {
    setOpenMobileMenu((prev) => !prev);
  };
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles["nav-container"]}>
        <ul
          className={`${navStyles["navbar-items"]} ${
            openMobileMenu ? "active" : ""
          }`}
          onClick={closeMobileMenu}
        >
          <li className={`${navStyles["nav-item"]}`}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={navStyles["nav-item"]}>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className={navStyles["nav-item"]}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={navStyles["nav-item"]}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={navStyles["buttons"]} onClick={openMobileMenuHandler}>
          <div className={navStyles["button"]}></div>
          <div className={navStyles["button"]}></div>
          <div className={navStyles["button"]}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
