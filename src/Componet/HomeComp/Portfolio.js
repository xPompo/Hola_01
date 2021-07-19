import React, { useEffect } from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { variantItemX } from "../AnimationVariants";
//----Import Your Images Here As Shown Below ----//
import img1 from "../../Data/port1.jpg"; //==> Image Number 1 <==//
import img2 from "../../Data/port2.jpg"; //==> Image Number 2 <==//
import img3 from "../../Data/port3.jpg"; //==> Image Number 3 <==//
import img4 from "../../Data/port4.jpg"; //==> Image Number 4 <==//
import img5 from "../../Data/port5.jpg"; //==> Image Number 5 <==//
import img6 from "../../Data/port6.jpg"; //==> Image Number 6 <==//
//---- Data START Here ----//
const HEADER_DATA = [
  { key: 0, bigtitle: "Latest Work.", bigSubtitle: "Discover Our" },
];
//---- You can Include As Many Slides As You Wish  ----//
const SLIDER_DATA = [
  {
    key: 1,
    subtitle: "gorgeous styling",
    title: "Little Beauty in Your Life",
    img: img1,
  },
  {
    key: 2,
    subtitle: "incredible colors",
    title: "Inspiring new Styles",
    img: img2,
  },
  {
    key: 3,
    subtitle: "Minimalism goals",
    title: "Indulge a little longer",
    img: img3,
  },
  {
    key: 4,
    subtitle: "Body & Skin",
    title: "Inspiring Beauty Life",
    img: img4,
  },
  {
    key: 5,
    subtitle: "Mind & Body goals",
    title: "Healthy Mind and Body",
    img: img5,
  },
  {
    key: 6,
    subtitle: "best treatments",
    title: "Inspiring new Styles",
    img: img6,
  },
];

SwiperCore.use([Pagination, Navigation]);
//----  Latest Work Component ----//
function Portfolio() {
  //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  //----Target Scroll Animation END----//
  return (
    <div className="portfolio-section">
      <motion.div
        ref={ref}
        variants={variantItemX}
        animate={controls}
        initial="hidden"
      >
        {/* Header */}
        <div className="global-headers">
          <p>{HEADER_DATA[0].bigSubtitle}</p>
          <h1>{HEADER_DATA[0].bigtitle}</h1>
        </div>
        {/* slider progress */}
        <Swiper
          loop={Infinity}
          centeredSlides={true}
          centeredSlidesBounds={true}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            412: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
          spaceBetween={40}
          slidesPerView={2}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          className="mySwiper"
        >
          {SLIDER_DATA.map((item) => {
            return (
              <SwiperSlide key={item.key}>
                <img src={item.img} alt="Images" />
                <p>{item.subtitle}</p>
                <h1>{item.title}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Portfolio;
