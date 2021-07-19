import React, { useEffect } from "react";
import ServiceCard from "../HomeComp/serviceCard";
import { SERVICE_DATA } from "../HomeComp/Service-section";
import { motion, useAnimation } from "framer-motion";
import { variantParentScroll__Y, variantItemY } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";

function FeaturesServicePart() {
  //---- Data Service Head START Here ----//
  const Data = {
    BigTitle: "best Features",
    BigSubTitle: "service Menu.",
  };
  // //----Target Scroll Animation START----//
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  // //----Target Scroll Animation END----//
  const variant = {
    hidden: { height: 0, scale: 1.05 },
    visible: {
      height: "100%",
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  //---- Service feature Component ----//
  return (
    <div className="Features-Service-Part">
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={controls}
        className="bg-image"
      ></motion.div>
      <motion.div
        ref={ref}
        variants={variantItemY}
        initial="hidden"
        animate={controls}
        className="global-headers"
      >
        <p>{Data.BigSubTitle}</p>
        <h1>{Data.BigTitle}</h1>
      </motion.div>
      <div className="container ">
        <motion.div
          ref={ref}
          variants={variantParentScroll__Y}
          initial="hidden"
          animate={controls}
          className="row"
        >
          {SERVICE_DATA.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={variantItemY}
                className="col-sm-12 col-md-12 col-lg-4"
              >
                <ServiceCard
                  titleH1={item.titleH1}
                  titleSpan={item.titleSpan}
                  para={item.para}
                  Icon={item.icon}
                  button={item.button}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturesServicePart;
