import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { variantItemXReverse, variantItemX } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";

function OurFeatures() {
  //----Target Scroll Animation START----//
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  //----Target Scroll Animation END----//

  //---- Data About OurFeatures START Here ----//
  //----Include as many Items data to the list as you wish ----//
  const LIST_DATA = [
    {
      number: "1-",
      title: "Green Beauty",
      subtitle:
        " Don’t worry, all our nails polishes and other products are non-toxic. We do care about you and our specialists.",
    },
    {
      number: "2-",
      title: "Cruelty-Free",
      subtitle: " Even nowadays some cosmetic products are tested on animals",
    },
    {
      number: "3-",
      title: "Professional Care",
      subtitle:
        " All products we use are professional and have proven effeciency.",
    },
  ];
  return (
    <div className="our-features">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <motion.div
              ref={ref}
              variants={variantItemXReverse}
              initial="hidden"
              animate={controls}
              className="col-md-6"
            >
              <div className="fe-img"></div>
            </motion.div>
            <motion.div
              variants={variantItemX}
              initial="hidden"
              animate={controls}
              className="col-md-6"
            >
              <h1 className="title py-sm-4">Our Philosophy.</h1>
              <p className="subtitle mb-4">
                All cosmetic forumulas are organic. The majority of all
                ingredients is natural.
              </p>
              <motion.ul
                variants={variantItemX}
                initial="hidden"
                animate={controls}
                className="list  ps-md-4 "
              >
                {LIST_DATA.map((item) => {
                  return (
                    <li key={item.number} className="list-item  ">
                      <h1 className="title-small">
                        <span>{item.number}</span> {item.title}
                      </h1>
                      <p className="subtitle-small">{item.subtitle}</p>
                    </li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;
