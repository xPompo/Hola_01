import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { motion, useAnimation } from "framer-motion";
import { variantItemX } from "../AnimationVariants";
import { useInView } from "react-intersection-observer";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import img2 from "../../Data/t02.jpg"; //==> slider image number 1 <==//
import img3 from "../../Data/t04.jpg"; //==> slider image number 2 <==//
import img4 from "../../Data/t08.jpg"; //==> slider image number 3 <==//
import img5 from "../../Data/t05.jpg"; //==> slider image number 4 <==//
import img6 from "../../Data/t06.jpg"; //==> slider image number 5 <==//
import img7 from "../../Data/t07.jpg"; //==> slider image number 6 <==//
import img8 from "../../Data/t01.jpg"; //==> slider image number 7 <==//

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

function OurTeam() {
  //---- Data Slider START Here ----//
  //----Include as many slider data for your team members ----//
  const TEAM_DATA = [
    {
      img: img2,
      order: "imgdown",
      name: "Marquis",
      jopDes: "Founder – MD, Facts",
    },
    {
      img: img3,
      order: "imgup",
      name: "Danika Hirthe",
      jopDes: "Skin care Trainer",
    },
    {
      img: img4,
      order: "imgdown",
      name: "Lois Rodriguez",
      jopDes: "Nail Specialist",
    },
    {
      img: img5,
      order: "imgup",
      name: "Leanna Hirthee",
      jopDes: "Hairdresser",
    },
    {
      img: img6,
      order: "imgdown",
      name: "Faustino Trantow",
      jopDes: "Nail Specialist",
    },
    {
      img: img7,
      order: "imgup",
      name: "Allbina Walter",
      jopDes: "Event Manager",
    },
    {
      img: img8,
      order: "imgdown",
      name: "Brannon Jacobs",
      jopDes: "Administrator",
    },
  ];
  // //----Target Scroll Animation START----//
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  // //----Target Scroll Animation END----//
  return (
    <div className="our-team-section">
      <div className="bg"></div>
      <motion.div
        ref={ref}
        variants={variantItemX}
        animate={controls}
        initial="hidden"
      >
        <div className="global-headers">
          <p>best of The Best</p>
          <h1>Meet Our Team.</h1>
        </div>
        <Swiper
          autoplay={{ delay: 2500 }}
          speed={600}
          slidesPerView={5}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {TEAM_DATA.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="row">
                  <img className={item.order} src={item.img} alt="pic" />
                  <h1 className="title">{item.name}</h1>
                  <p className="subtitle">{item.jopDes}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}
export default OurTeam;
