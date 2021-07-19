import React from "react";
import Slider from "../Componet/HomeComp/Slider";
import Experience from "../Componet/HomeComp/Experience";
import ServiceSection from "../Componet/HomeComp/Service-section";
import Portfolio from "../Componet/HomeComp/Portfolio";
import Partner from "../Componet/HomeComp/Partner";
import OurBlog from "../Componet/HomeComp/OurBlog";
import Pricing from "../Componet/HomeComp/Pricing";
import HeaderMain from "../Componet/HeaderMain";
import FooterMain from "../Componet/FooterMain";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderMain pathname={pathname} />
      <Slider />
      <Experience pathname={pathname} />
      <ServiceSection />
      <Portfolio />
      <Pricing />
      <Partner />
      <OurBlog />
      <FooterMain pathname={pathname} />
    </>
  );
}

export default Home;
