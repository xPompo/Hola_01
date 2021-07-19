import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useIsPresent,
  AnimateSharedLayout,
} from "framer-motion";
import { variantParentScroll__Y } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

//---- Data Gallary Filter START Here ----//
const DUMMY_DATA = {
  title: "Portfolio Masonry.",
  subTitle: "Creative way to showcase your works at their absolute best.",
  filter1: "All",
  filter2: "Skin Care",
  filter3: "Health Care",
  filter4: "Makeup",
};

function PortfolioMasonry() {
  //---- Data Gallary  START Here ----//
  //----Change images in (Portfoliomasonery.scss) file ----//
  const FILTER_DATA = [
    { All: "All", id: "Skin", img: "img-1", data_name: "Mind and Body" },
    { All: "All", id: "Health", img: "img-2", data_name: "Aroma Therapy" },
    { All: "All", id: "Skin", img: "img-3", data_name: "Mind and Body" },
    { All: "All", id: "Makeup", img: "img-4", data_name: "Beauty Makeup" },
    { All: "All", id: "Health", img: "img-5", data_name: "Aroma Therapy" },
    { All: "All", id: "Skin", img: "img-6", data_name: "Mind and Body" },
    { All: "All", id: "Makeup", img: "img-7", data_name: "Beauty Makeup" },
    { All: "All", id: "Health", img: "img-8", data_name: "Aroma Therapy" },
  ];
  const [pathId, setPathId] = useState("");
  const [pathAll, setPathAll] = useState("All");
  // //----Target Scroll Animation START----//
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  // //----Target Scroll Animation END----//
  const [activeAll, setActiveAll] = useState(true);
  const [activeSkin, setActiveSkin] = useState(false);
  const [activeHealth, setActiveHealth] = useState(false);
  const [activeMakeup, setActiveMakeup] = useState(false);

  const allHandler = () => {
    setPathId(null);
    setPathAll("All");
    setActiveAll(true);
    setActiveSkin(false);
    setActiveHealth(false);
    setActiveMakeup(false);
  };
  const skinHandler = () => {
    setPathId("Skin");
    setPathAll(null);
    setActiveAll(false);
    setActiveSkin(true);
    setActiveHealth(false);
    setActiveMakeup(false);
  };
  const healthHandler = () => {
    setPathId("Health");
    setPathAll(null);
    setActiveAll(false);
    setActiveSkin(false);
    setActiveHealth(true);
    setActiveMakeup(false);
  };
  const makeupHandler = () => {
    setPathId("Makeup");
    setPathAll(null);
    setActiveAll(false);
    setActiveSkin(false);
    setActiveHealth(false);
    setActiveMakeup(true);
  };
  const present = useIsPresent();
  console.log(present);

  return (
    /* Head  part  */
    <div className="portfolio-masonry">
      <div className="container">
        <div className="row">
          <div className="col">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, duration: 0.6, ease: "easeOut" },
              }}
              className="title"
            >
              {DUMMY_DATA.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.3, duration: 0.5, ease: "easeOut" },
              }}
              className="subtitle"
            >
              {DUMMY_DATA.subTitle}
            </motion.p>
          </div>
        </div>
        {/* filter bar part  */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, duration: 0.8, ease: "easeOut" },
          }}
          className="row"
        >
          <div className="bar">
            <ul className="list">
              <li className="list-item">
                <button
                  className={activeAll ? "active" : null}
                  onClick={allHandler}
                >
                  <hr className="dot"></hr>
                  {DUMMY_DATA.filter1}
                </button>
              </li>
              <li className="list-item">
                <button
                  className={activeSkin ? "active" : null}
                  onClick={skinHandler}
                >
                  <hr className="dot"></hr>
                  {DUMMY_DATA.filter2}
                </button>
              </li>
              <li className="list-item">
                <button
                  className={activeHealth ? "active" : null}
                  onClick={healthHandler}
                >
                  <hr className="dot"></hr>
                  {DUMMY_DATA.filter3}
                </button>
              </li>
              <li className="list-item">
                <button
                  className={activeMakeup ? "active" : null}
                  onClick={makeupHandler}
                >
                  {DUMMY_DATA.filter4}
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* gallary part  */}
        <motion.div
          ref={ref}
          variants={variantParentScroll__Y}
          initial="hidden"
          animate={controls}
          className="row row-cols-md-2 row-cols-1 py-5 g-5"
        >
          <AnimateSharedLayout>
            <AnimatePresence>
              {FILTER_DATA.filter(
                (el) => el.id === pathId || el.All === pathAll
              ).map((item) => {
                return (
                  <motion.div
                    key={item.img}
                    layout
                    initial={{ opacity: 0, y: 80 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, stiffness: 700, damping: 1 },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    className="col"
                  >
                    <Link to="/ProjectDetails">
                      <div
                        data-name={item.data_name}
                        className={item.img}
                      ></div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </AnimateSharedLayout>
        </motion.div>
      </div>
    </div>
  );
}

export default PortfolioMasonry;
