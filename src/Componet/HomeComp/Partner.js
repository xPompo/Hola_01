import React, { useEffect } from "react";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { variantItemY } from "../AnimationVariants";
//----Import Your partner Logo Here As Shown Below ----//
import log1 from "../../Data/Asset 15.png"; //==> Your partner Logo Brand--1 <==//
import log2 from "../../Data/Asset 16.png"; //==> Your partner Logo Brand--2 <==//
import log3 from "../../Data/Asset 17.png"; //==> Your partner Logo Brand--3 <==//
import log4 from "../../Data/Asset 18.png"; //==> Your partner Logo Brand--4 <==//
import log5 from "../../Data/Asset 19.png"; //==> Your partner Logo Brand--5 <==//
import log6 from "../../Data/Asset 20.png"; //==> Your partner Logo Brand--6 <==//
import log7 from "../../Data/Asset 21.png"; //==> Your partner Logo Brand--7 <==//

SwiperCore.use([Autoplay]);

//---- Data partner START Here ----//
//----Include as many partner Logos as you wish ----//
const PARTNER_DATA = [
  { key: 0, linkPath: "#", logoBrand: log1 },
  { key: 1, linkPath: "#", logoBrand: log2 },
  { key: 2, linkPath: "#", logoBrand: log3 },
  { key: 3, linkPath: "#", logoBrand: log4 },
  { key: 4, linkPath: "#", logoBrand: log5 },
  { key: 5, linkPath: "#", logoBrand: log6 },
  { key: 6, linkPath: "#", logoBrand: log7 },
];

//----  Partner Component ----//
function Partner() {
  //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  //----Target Scroll Animation END----//
  return (
    <div className="partner-section">
      <motion.div
        ref={ref}
        variants={variantItemY}
        initial="hidden"
        animate={controls}
        className="container-fluid"
      >
        <Swiper
          speed={1000}
          loop={Infinity}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {PARTNER_DATA.map((item) => {
            return (
              <SwiperSlide key={item.key}>
                <Link to={item.linkPath}>
                  <img src={item.logoBrand} alt="pic" width={100} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}
export default Partner;
