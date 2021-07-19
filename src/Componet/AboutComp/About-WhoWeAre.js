import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { variantItemY, variantParentScroll__Y } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";

function WhoWeAre() {
  //----Target Scroll Animation START----//
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  //----Target Scroll Animation END----//

  //---- Data About Header START Here ----//
  //----Header Data ----//
  const HEAD_DATA = [
    {
      title: "Who We Are?",
      subtitle: `Dear friends, I would certainly love to meet you all in persone,
  so come and just say hi. If it’s not possible at the moment, I
  would loke to introduce myself‚ I’m Vicky, the founder of Cherie
  Beauty Studio. I’m certain that new haircut,professional makup
  or just getting your nails done — is a pretty easy way to make
  your day or week better.`,
    },
  ];
  //----About Us Info Data ----//
  const INFO_DATA = [
    {
      key: 0,
      title: "ABOUT US",
      subtitle:
        "guarantee that you will appreciate the atmosphere of our place. Looking forward to meeting you!",
    },
    {
      key: 1,
      title: "OUR GOALS",
      subtitle:
        "Our main goal was to create the best beauty studio in the world.Can there be any compromises in the best studio in the world?",
    },
    {
      key: 2,
      title: "OUR VALUES",
      subtitle:
        " I would certainly love to meet you all in persone, so come and just say hi. If it’s not possible at the moment, I would loke to introduce myself",
    },
  ];

  //----About Header Component ----//
  return (
    <div className="who-section">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          variants={variantParentScroll__Y}
          initial="hidden"
          animate={controls}
          className="container"
        >
          <motion.div variants={variantItemY} className="row py-4">
            <div className="col-md-5 col-sm-12 py-sm-2 ">
              <h1 className="title ">{HEAD_DATA[0].title}</h1>
            </div>
            <div className="col-md-7 col-sm-12 ">
              <p className="subtitle">{HEAD_DATA[0].subtitle}</p>
            </div>
          </motion.div>
          <div className="row py-4">
            {INFO_DATA.map((item) => {
              return (
                <motion.div
                  key={item.key}
                  variants={variantItemY}
                  className="col-md-4 col-sm-12 py-sm-4"
                >
                  <h1 className="small-title">{item.title}</h1>
                  <p className="small-subtitle">{item.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhoWeAre;
