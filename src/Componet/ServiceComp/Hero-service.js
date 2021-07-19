import React from "react";
import { motion } from "framer-motion";
import { splitText_1, MainText_1 } from "../AnimationVariants";

function HeroService() {
  //---- Data Service Hero START Here ----//
  const DUMMY_DATA = [
    {
      maintitle: "Our Services",
      subtitle: "Home",
      slash: "/",
      afterSlash: "Service",
    },
  ];

  //----  Service Hero Component ----//
  return (
    <div className="hero-services-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="title">
              <motion.h1 variants={MainText_1} initial="hide" animate="show">
                {DUMMY_DATA[0].maintitle.split("").map((item, index) => {
                  return (
                    <motion.span
                      key={item + "-" + index}
                      style={{ position: "relative" }}
                      variants={splitText_1}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.8 },
                }}
                className="subtitle"
              >
                {DUMMY_DATA[0].subtitle}
                <span className="slash">{DUMMY_DATA[0].slash}</span>
                <span> {DUMMY_DATA[0].afterSlash}</span>
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: "100%",
                transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
              }}
              className="hero-img"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroService;
