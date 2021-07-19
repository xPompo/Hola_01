import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { variantParentScroll__Y } from "../AnimationVariants";
import BlogCard from "./BlogCard";
import img1 from "../../Data/blog1.jpg"; //==> Card image Number--1 <==//
import img2 from "../../Data/b2.jpg"; //==> Card image Number--2 <==//
import img3 from "../../Data/b3.jpg"; //==> Card image Number--3 <==//

function OurBlog() {
  //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  //----Target Scroll Animation END----//

  //---- Blog Card Data START Here ----//
  //----Include as many Blogs data as you wish ----//
  const HEADER_DATA = [
    { key: 0, BigTitle: "Latest news", BigSubTitle: "OUR BLOG" },
  ];
  const CARD_DATA = [
    {
      key: 1,
      title: "Aroma Therapy",
      subtitle: "/MAY 20, 2021",
      description: "Aroma Therapy and Aroma Massages",
      button: "Discover More",
      img: img1,
      btnPath: "#",
    },
    {
      key: 2,
      title: "Mind and Body",
      subtitle: "/MAY 20, 2021",
      description: "10 Tips for Healthy Mind and Body",
      button: "Discover More",
      img: img2,
      btnPath: "#",
    },
    {
      key: 3,
      title: "Healthy Hair",
      subtitle: "/MAY 20, 2021",
      description: "Healthy Hair: 10 Easy Tips",
      button: "Discover More",
      img: img3,
      btnPath: "#",
    },
  ];

  //----  Blog Component ----//
  return (
    <motion.div
      ref={ref}
      variants={variantParentScroll__Y}
      initial="hidden"
      animate={controls}
      className="container4 "
    >
      <div className="bg-img"></div>
      <div className="container">
        <div className="row">
          <div className="global-headers">
            <p>{HEADER_DATA[0].BigTitle}</p>
            <h1>{HEADER_DATA[0].BigSubTitle}</h1>
          </div>
        </div>
        <div className="row gx-4 ">
          {CARD_DATA.map((item) => {
            return (
              <BlogCard
                key={item.key}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                button={item.button}
                btnPath={item.btnPath}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default OurBlog;
