import React from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper/core";
import { Link } from "react-router-dom";
import img1 from "../../Data/port2.jpg"; //==> slider image number--1 <==//
import img2 from "../../Data/port6.jpg"; //==> slider image number--2 <==//
import img3 from "../../Data/port4.jpg"; //==> slider image number--3 <==//
import img4 from "../../Data/be1.jpg"; //==> slider image number--4 <==//
import img5 from "../../Data/be2.jpg"; //==> slider image number--5 <==//

SwiperCore.use([Mousewheel]);

function CarouselPortfolio() {
  //---- Data Slider START Here ----//
  //----Include as many slides data as you wish ----//
  const PORTFOLIO_DATA = [
    {
      subtitle: "Aroma Therapy",
      title: "MAY 25, 2021",
      img: img1,
    },
    {
      subtitle: "Mind and Body",
      title: "JAN 3, 2021",
      img: img2,
    },
    {
      subtitle: "Healthy Hair",
      title: "AUG 14, 2021",
      img: img3,
    },
    {
      subtitle: "Brows Care",
      title: "FEB 22, 2021",
      img: img4,
    },
    {
      subtitle: "Skin Care",
      title: "MAY 10, 2021",
      img: img5,
    },
  ];

  return (
    <div className="carousel-portfolio">
      <Swiper
        loop={true}
        mousewheel={true}
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
        speed={1000}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={2}
        spaceBetween={100}
        className="mySwiper"
      >
        {PORTFOLIO_DATA.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="slider-container">
                  <img
                    className={isActive ? "bg-img active" : "bg-img"}
                    src={item.img}
                    alt="pic"
                  />
                  <div className={isActive ? "active-header" : "header-hidden"}>
                    <Link to="/ProjectDetails">
                      <p className="subtitle">{item.title}</p>
                      <h1 className="title">{item.subtitle}</h1>
                    </Link>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          {({ isActive }) => (
            <div className="slider-container">
              <img
                className={isActive ? "bg-img active" : "bg-img"}
                src={img2}
                alt="pic"
              />
              <div className={isActive ? "active-header" : "header-hidden"}>
                <Link to="/ProjectDetails">
                  <p className="subtitle">{DUMMY_DATA.title2}</p>
                  <h1 className="title">{DUMMY_DATA.subtitle2}</h1>
                </Link>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="slider-container">
              <img
                className={isActive ? "bg-img active" : "bg-img"}
                src={img3}
                alt="pic"
              />
              <div className={isActive ? "active-header" : "header-hidden"}>
                <Link to="/ProjectDetails">
                  <p className="subtitle">{DUMMY_DATA.title3}</p>
                  <h1 className="title">{DUMMY_DATA.subtitle3}</h1>
                </Link>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="slider-container">
              <img
                className={isActive ? "bg-img active" : "bg-img"}
                src={img4}
                alt="pic"
              />
              <div className={isActive ? "active-header" : "header-hidden"}>
                <Link to="/ProjectDetails">
                  <p className="subtitle">{DUMMY_DATA.title4}</p>
                  <h1 className="title">{DUMMY_DATA.subtitle4}</h1>
                </Link>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="slider-container">
              <img
                className={isActive ? "bg-img active" : "bg-img"}
                src={img5}
                alt="pic"
              />
              <div className={isActive ? "active-header" : "header-hidden"}>
                <Link to="/ProjectDetails">
                  <p className="subtitle">{DUMMY_DATA.title5}</p>
                  <h1 className="title">{DUMMY_DATA.subtitle5}</h1>
                </Link>
              </div>
            </div>
          )}
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default CarouselPortfolio;
