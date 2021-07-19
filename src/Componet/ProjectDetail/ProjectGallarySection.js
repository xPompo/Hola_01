import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { variantItemY } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";

function ProjectGallarySection() {
  // //----Target Scroll Animation START----//
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  // //----Target Scroll Animation END----//
  const linkData = { path: "/CarouselPortfolio" };

  return (
    <div className="project-gallary">
      <motion.div
        ref={ref}
        variants={variantItemY}
        initial="hidden"
        animate={controls}
        className="container-fluid"
      >
        <div className="row gy-4">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-1"></div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-2"></div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-3"></div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-4"></div>
            </Link>
          </div>
        </div>
        <div className="row gy-4 ">
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-5"></div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-6"></div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <Link to={linkData.path}>
              <div data-name="Discover" className="img-7"></div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectGallarySection;
