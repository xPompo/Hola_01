import React from "react";
import { motion } from "framer-motion";

function ProjectHeroSection() {
  //---- Data Details START Here ----//
  const HEAD_DATA = [
    { title: "Achieve your skin goals", subtitle: "Healthy Skin Care" },
  ];

  const PROJECT_DETAILS_DATA = [
    {
      key: 0,
      Head: "CLIENT",
      Body: "Augusta Weber",
    },
    {
      key: 1,
      Head: "DATE",
      Body: "6 AUGUST 2019",
    },
    {
      key: 2,
      Head: "CATEGORIES",
      Body: "Skin, Skin Care",
    },
    {
      key: 3,
      Head: "TAGS",
      Body: "Beauty , Healthy , Skin",
    },
  ];
  //---- Data Details END Here ----//
  //---- Animation Data START  ----//
  const animYparent = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.8 },
    },
  };
  const animY = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.6, duration: 0.5, ease: "easeOut" },
    },
  };
  const animX = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1.5, duration: 0.6, ease: "easeOut" },
    },
  };
  //---- Animation Data END  ----//
  return (
    <div className="hero-part">
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
        }}
        className="hero-img"
      ></motion.div>
      <div className="container">
        <motion.div
          variants={animX}
          initial="hidden"
          animate="visible"
          className="row"
        >
          <div className="col">
            <p className="subtitle">{HEAD_DATA[0].subtitle}</p>
            <h1 className="title">{HEAD_DATA[0].title}</h1>
          </div>
        </motion.div>
        <motion.div
          variants={animYparent}
          initial="hidden"
          animate="visible"
          className="row"
        >
          {PROJECT_DETAILS_DATA.map((item) => {
            return (
              <motion.div
                key={item.key}
                variants={animY}
                initial="hidden"
                animate="visible"
                className="col-lg-3 col-md-6 col-sm-6 subtitle-small1"
              >
                <h3 className="title-small">{item.Head}</h3>
                <h3 className="subtitle-small">{item.Body}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectHeroSection;
