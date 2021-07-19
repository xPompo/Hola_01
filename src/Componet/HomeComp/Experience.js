import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  variantParent,
  variantParentStagger,
  variantItemY,
} from "../AnimationVariants";
//----Import Your Images Here As Shown Below ----//
import img1 from "../../Data/fl-2.jpg"; //==> Image Number 1 <==//
import img2 from "../../Data/fl-1.jpg"; //==> Image Number 2 <==//
import img3 from "../../Data/fl-3.jpg"; //==> Image Number 3 <==//
//---- Data START Here ----//
const DUMMY_DATA = {
  Bigtitle: "Our Great Story",
  BigSubTitle:
    " We started as a small beauty studio in Islington, London. Our main idea was to create the best beauty studio in the world.Can there be compromises in the best studio in the world? Our answer is always no, we care about the best quality, we hire the best specialists and provide the best customer service.",
  numberOfYears: "35",
  exp: "years of experience",
};
//----  Experience Component ----//
function Experience() {
  // //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  // //----Target Scroll Animation END----//
  return (
    <div className="exp-section">
      <motion.div
        variants={variantParent}
        animate={controls}
        initial="hidden"
        ref={ref}
        className="container"
      >
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-md-4">
            <h1 className="title">{DUMMY_DATA.Bigtitle}</h1>
          </div>
          <div className="col-md-12 col-lg-8">
            <p className="subtitle">{DUMMY_DATA.BigSubTitle}</p>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-12 ">
                <h1 className="title-35">{DUMMY_DATA.numberOfYears}</h1>
              </div>
              <h1 className="col-lg-5 col-md-6 col-sm-6 col-12 subtitle-years">
                {DUMMY_DATA.exp}
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container-fluid">
        <motion.div
          ref={ref}
          variants={variantParentStagger}
          initial="hidden"
          animate={controls}
          className="row imageItems"
        >
          <motion.img
            variants={variantItemY}
            className="col-md-3 img-l-r"
            src={img2}
            alt="pic"
          />
          <motion.img
            variants={variantItemY}
            className="col-md-6 img-centered"
            src={img1}
            alt="pic"
          />
          <motion.img
            variants={variantItemY}
            className="col-md-3 img-l-r"
            src={img3}
            alt="pic"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
