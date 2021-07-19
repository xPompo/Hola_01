import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { variantItemY } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";

function ProjectDesSection() {
  //---- Data Details START Here ----//
  const HEAD_DATA = [
    {
      number: "02",
      title: "Describtion",
      subtitle: `We all have different hair typess and 
        have to choose haircare products according to it. 
        But still there are some tips that are applicable 
        to all hair types. We tried to collect them all 
        in this article. See below what we have found for you.`,
    },
  ];
  //---- Data Details END Here ----//
  // //----Target Scroll Animation START----//
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  // //----Target Scroll Animation END----//
  return (
    <div className="project-des-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={variantItemY}
          initial="hidden"
          animate={controls}
          className="row"
        >
          <div className="col-xl-4 col-lg-12 col-md-12 mb-md-2 intro-title">
            <h1 className="title">
              <span>{HEAD_DATA[0].number}</span> {HEAD_DATA[0].title}
            </h1>
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12 dis-text">
            <p className="discription-text">{HEAD_DATA[0].subtitle}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDesSection;
