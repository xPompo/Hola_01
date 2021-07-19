import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animY_rev } from "../AnimationVariants";
import log1 from "../../Data/Asset 15.png"; //==> Brand Logo number--1 <==//
import log2 from "../../Data/Asset 16.png"; //==> Brand Logo number--2 <==//
import log3 from "../../Data/Asset 17.png"; //==> Brand Logo number--3 <==//
import log4 from "../../Data/Asset 18.png"; //==> Brand Logo number--4 <==//

function PartnerServicePart() {
  //---- Brand Data START Here ----//
  //----Include as many brand Logos data as you wish ----//
  const BRAND_DATA = [
    {
      websiteName: "www.Pompo.com",
      logoBrand: log1,
      brandPath: "#",
    },
    {
      websiteName: "www.Pompo.com",
      logoBrand: log2,
      brandPath: "#",
    },
    {
      websiteName: "www.Pompo.com",
      logoBrand: log3,
      brandPath: "#",
    },
    {
      websiteName: "www.Pompo.com",
      logoBrand: log4,
      brandPath: "#",
    },
  ];
  //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  //----Target Scroll Animation END----//
  return (
    <div className="partner-Service-part">
      <div className="container-fluid">
        <div className="container">
          <motion.div
            ref={ref}
            variants={animY_rev}
            initial="hidden"
            animate={controls}
            className="row"
          >
            {BRAND_DATA.map((item, index) => {
              return (
                <div
                  key={index}
                  className="wrapperCol col-md-6 col-lg-3 col-sm-6 col-xs-12"
                >
                  <Link className="link" to={item.brandPath}>
                    <p className="website">{item.websiteName}</p>
                    <img src={item.logoBrand} alt="pic" />
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default PartnerServicePart;
