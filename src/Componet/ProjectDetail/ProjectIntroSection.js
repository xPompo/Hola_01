import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { variantItemY } from "../AnimationVariants";

function ProjectIntroSection() {
  //---- Data Details START Here ----//
  const HEAD_FATA = [
    {
      number: "01",
      title: "Introduction",
      subtitle:
        "We all have different hair typess and have to choose haircare products according to it. But still there are some tips that are applicable to all hair types. We tried to collect them all in this article. See below what we have found for you.",
    },
  ];
  //----Include as many list item data as you wish ----//
  const INFO_DATA = [
    {
      listItem: "Aenean sollicitudin.",
    },
    {
      listItem: "lorem quis bibendum auctor.",
    },
    {
      listItem: "Proident occaecat adipisicing minim.",
    },
    {
      listItem: "Proident occaecat adipisicing minim.",
    },
  ];
  //---- Data Details END Here ----//
  // //----Target Scroll Animation START----//
  const { ref, inView } = useInView({ threshold: 0.15 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  // //----Target Scroll Animation END----//

  return (
    <div className="project-intro-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={variantItemY}
          initial="hidden"
          animate={controls}
          className="row "
        >
          <div className="col-xl-4 col-lg-12 col-md-12 mb-md-2 intro-title">
            <h1 className="title">
              <span>{HEAD_FATA[0].number}</span> {HEAD_FATA[0].title}
            </h1>
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12 dis-text">
            <p className="discription-text">{HEAD_FATA[0].subtitle}</p>
            <nav>
              <ul className="list">
                {INFO_DATA.map((item, index) => {
                  return (
                    <li key={index} className="list-item">
                      <hr className="line"></hr> <p>{item.listItem}</p>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectIntroSection;
