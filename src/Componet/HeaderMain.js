import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
import logo from "../Data/LOGO.svg"; //==> logo brand BLACK <==//
import logoW from "../Data/LOGO_W.svg"; //==> logo brand White <==//
import Hm from "./Hm"; //==> Header For small Screens <==//

export const NAV_DATA = [
  { title: "Home", path: "/Home" },
  { title: "About", path: "/About" },
  { title: "Service", path: "/Services" },
  { title: "Contact", path: "/Contact" },
];
export const DROPDOWN_DATA = [
  {
    title: "Carousel",
    path: "/CarouselPortfolio",
  },
  {
    title: "Project Detail",
    path: "/ProjectDetails",
  },
  {
    title: "Masonry 2 col",
    path: "/Masonry",
  },
];
function HeaderMain({ pathname }) {
  const DATA_BRAND_NAME = [
    {
      logoName: "logo",
      menu: "menu",
    },
  ];
  const [icon, setIcon] = useState(true);
  const [navBg, setNavBg] = useState(false);
  const [dropdownShow, setDropbdownShow] = useState(true);

  const clickHandler = () => {
    setIcon((prevState) => !prevState);
  };
  const overlayClick = () => {
    setIcon(true);
  };
  const dropdownHandler = () => {
    setDropbdownShow((prevState) => !prevState);
  };

  useEffect(() => {
    let mounted = true;
    const changeBgnav = () => {
      if (window.scrollY >= 150 && mounted) {
        setNavBg(true);
      } else if (window.scrollY < 149) {
        setNavBg(false);
      }
    };
    window.scrollTo(0, 0);
    window.addEventListener("scroll", changeBgnav);
    return () => {
      window.removeEventListener("scroll", changeBgnav);
      mounted = false;
      setNavBg(false);
    };
  }, [pathname]);

  return (
    <div className="header-main">
      <div
        className={navBg ? "navbar-main-header scroll" : "navbar-main-header"}
      >
        <div className="container">
          <div className="row row-cols-md-2">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 1 },
                ease: "easeInOut",
              }}
              className="col navbrand"
            >
              {/* //----  you can use Fonts Logo Here ----// */}
              {/* //----  just comment out image logo line and uncomment this one  ----// */}
              {/* <h1
                className={
                  (pathname === "/Home" ||
                    pathname === "/Services" ||
                    pathname === "/ProjectDetails") &&
                  !navBg
                    ? "h1-style"
                    : null
                }
              >
                <Link to={pathname}>{DATA_BRAND_NAME[0].logoName}</Link>
              </h1> */}
              {/* /////////////////////////////////////////////////////// */}
              {/* //----  you can use Image Logo Here ----// */}
              <Link to={pathname}>
                <img
                  width={100}
                  src={
                    (pathname === "/Home" ||
                      pathname === "/Services" ||
                      pathname === "/ProjectDetails") &&
                    !navBg
                      ? logoW //----  Black logo  ----//
                      : logo //----  White logo  ----//
                  }
                  alt="brand"
                />
              </Link>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 1 },
                ease: "easeInOut",
              }}
              className="col navlist-header"
            >
              {NAV_DATA.map((item, index) => (
                <li key={index} className="navitem">
                  <NavLink
                    className={
                      (pathname === "/Home" ||
                        pathname === "/Services" ||
                        pathname === "/ProjectDetails") &&
                      !navBg
                        ? "a-style"
                        : null
                    }
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li className="navitem">
                <button
                  className={
                    (pathname === "/Home" ||
                      pathname === "/Services" ||
                      pathname === "/ProjectDetails") &&
                    !navBg
                      ? "a-style"
                      : null
                  }
                  onClick={dropdownHandler}
                >
                  {DATA_BRAND_NAME[0].menu}
                  <IoIcons.IoMdArrowDropdown />
                </button>
                {!dropdownShow && <Dropdown />}
              </li>
            </motion.ul>
          </div>
          <div className="wrapperIcon">
            <div
              onClick={clickHandler}
              className={
                (pathname === "/Home" ||
                  pathname === "/Services" ||
                  pathname === "/ProjectDetails") &&
                !navBg
                  ? "menuicon"
                  : "colorIcon"
              }
            >
              {icon ? (
                <HiIcons.HiOutlineMenuAlt3 />
              ) : (
                <AiIcons.AiOutlineClose
                  style={{ color: dropdownShow && "white" }}
                />
              )}
            </div>
            {!icon && (
              <div className="head-small">
                <Hm />
              </div>
            )}
          </div>
        </div>
        {!icon && <div onClick={overlayClick} className="overlay" />}
      </div>
    </div>
  );
}

export default HeaderMain;
