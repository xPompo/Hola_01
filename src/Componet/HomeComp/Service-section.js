import React, { useEffect } from "react";
import ServiceCard from "./serviceCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  variantParentScroll__Y,
  variantItemY,
  animY_rev,
} from "../AnimationVariants";
//----Import Your Icons Here As Shown Below ----//
import hair from "../../Data/hair.png"; //==> Icon Number 1 <==//
import brown from "../../Data/brown.png"; //==> Icon Number 2 <==//
import nail from "../../Data/nail.png"; //==> Icon Number 3 <==//
import makeup from "../../Data/makeup.png"; //==> Icon Number 4 <==//
import makeup1 from "../../Data/makeup1.png"; //==> Icon Number 5 <==//
//---- Data For Service-Home && Main-Service-Page ----//

const SERVICE_DATA_HEADTITLE = [
  {
    bigtitle: "services.",
    bigSubtitle: "best Quality",
  },
];
export const SERVICE_DATA = [
  {
    titleSpan: "N",
    titleH1: "ails",
    para: `Get your nails done for great mood. 
  Make your week, not just day.Try out styling and tinting your 
  brows and see the difference.`,
    icon: nail,
    button: "Discover More",
  },
  {
    titleSpan: "B",
    titleH1: "rows",
    para: `Try out styling and tinting your 
  brows and see the difference.Get your nails done for great mood. 
  Make your week, not just day.`,
    icon: brown,
    button: "Discover More",
  },
  {
    titleSpan: "H",
    titleH1: "air",
    para: `Stylish hair cuts, gorgeous styling
  , incredible color services.Try out styling and tinting your 
  brows and see the difference.`,
    icon: hair,
    button: "Discover More",
  },
  {
    titleSpan: "C",
    titleH1: "osmetology",
    para: `Indulge a little longer with customized 
    facial to  achieve your skin goals.Try out styling and tinting your 
    brows and see the difference.`,
    icon: makeup,
    button: "Discover More",
  },
  {
    titleSpan: "M",
    titleH1: "akeup",
    para: `Complete your service with beautiful makeup.Try out styling and tinting your 
    brows and see the difference.`,
    icon: makeup1,
    button: "Discover More",
  },
  {
    titleSpan: "N",
    titleH1: "ails",
    para: `Simple pleasures can make your 
  week, not just day.Try out styling and tinting your 
  brows and see the difference.`,
    icon: nail,
    button: "Discover More",
  },
];
//----  Service Component ----//
function ServiceSection() {
  //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  //----Target Scroll Animation END----//
  return (
    <div className="sevice-section">
      <motion.div
        ref={ref}
        variants={animY_rev}
        initial="hidden"
        animate={controls}
        className="overlay"
      ></motion.div>
      <motion.div
        ref={ref}
        variants={animY_rev}
        initial="hidden"
        animate={controls}
        className="bg-img"
      ></motion.div>

      <motion.div
        ref={ref}
        variants={variantParentScroll__Y}
        initial="hidden"
        animate={controls}
        className="container"
      >
        <motion.div variants={variantItemY} className="global-headers">
          <p className="col-12">{SERVICE_DATA_HEADTITLE[0].bigSubtitle}</p>
          <h1 className="col-12">{SERVICE_DATA_HEADTITLE[0].bigtitle}</h1>
        </motion.div>
        <div className=" row ">
          <motion.div
            variants={variantItemY}
            className="col-sm-12 col-md-12 col-lg-6"
          >
            <ServiceCard
              titleH1={SERVICE_DATA[0].titleH1}
              titleSpan={SERVICE_DATA[0].titleSpan}
              para={SERVICE_DATA[0].para}
              Icon={SERVICE_DATA[0].icon}
              button={SERVICE_DATA[0].button}
            />
          </motion.div>
          <motion.div
            variants={variantItemY}
            className=" col-sm-12 col-md-12 col-lg-6"
          >
            <ServiceCard
              titleH1={SERVICE_DATA[1].titleH1}
              titleSpan={SERVICE_DATA[1].titleSpan}
              para={SERVICE_DATA[1].para}
              Icon={SERVICE_DATA[1].icon}
              button={SERVICE_DATA[1].button}
            />
          </motion.div>
          <motion.div
            variants={variantItemY}
            className="col-sm-12 col-md-12 col-lg-12"
          >
            <ServiceCard
              titleH1={SERVICE_DATA[2].titleH1}
              titleSpan={SERVICE_DATA[2].titleSpan}
              para={SERVICE_DATA[2].para}
              Icon={SERVICE_DATA[2].icon}
              button={SERVICE_DATA[2].button}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceSection;
