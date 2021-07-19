import React from "react";
import { motion } from "framer-motion";

function AboutHeader() {
  return (
    <div className="about-header-section">
      <div className="container-fluid1">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,

            transition: { duration: 1.1, delay: 1 },
          }}
          className="header-title"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.1, delay: 0.8 },
          }}
          className="container"
        >
          <div className="row">
            <h2 className="col">
              We started as a small <span>beauty salon</span> in Islington,
              London. Our <span>main idea</span> was to create the best beauty
              salon in the world. we hire the best <span>specialists</span> and
              provide the best customer service.
            </h2>
          </div>
        </motion.div>
      </div>
      <div className="hero-img "></div>
    </div>
  );
}

export default AboutHeader;
