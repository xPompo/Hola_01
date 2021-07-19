import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  mainItemAnim,
  letter,
  MainText,
  splitText,
} from "../AnimationVariants";
//----Import Your Slide Images Here As Shown Below ----//
import img1 from "../../Data/be1.jpg"; //==> slider image number 1 <==//
import img2 from "../../Data/be2.jpg"; //==> slider image number 2 <==//

SwiperCore.use([Autoplay, Pagination, Navigation]);

//---- Data Slider START Here ----//
//----Include as many slider data as you wish ----//
export const SLIDER_DATA = [
  {
    index: 0,
    title: "Beauty in Your Life",
    subtitle: `Stylish hair cuts, gorgeous styling, incredible color 
  services and best hair treatments. Choose your dream service!`,
    button: "Discover More",
    img: img1,
  },
  {
    index: 1,
    title: "The place with its soul.",
    subtitle: `Get your nails done for great mood. Simple pleasures 
    can make your week, not just day.`,
    button: "Discover More",
    img: img2,
  },
];

//----  Slider Component ----//
function Slider() {
  return (
    <div className="container1">
      <Swiper
        loop={isFinite}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        speed={2000}
        className="mySwiper"
      >
        {SLIDER_DATA.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              {({ isActive }) => (
                <>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        variants={mainItemAnim}
                        initial="hide"
                        animate="show"
                        exit="out"
                        className="swiperItems"
                      >
                        <motion.h1
                          variants={MainText}
                          initial="hide"
                          animate="show"
                          exit="out"
                        >
                          {SLIDER_DATA[item.index].title
                            .split("")
                            .map((item, index) => {
                              return (
                                <motion.span
                                  key={item + "-" + index}
                                  style={{ position: "relative" }}
                                  variants={splitText}
                                >
                                  {item}
                                </motion.span>
                              );
                            })}
                        </motion.h1>
                        <motion.p variants={letter}>{item.subtitle}</motion.p>
                        <motion.button variants={letter}>
                          {item.button}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img src={item.img} alt="slider" />
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
