import React from "react";
import AboutHeader from "../Componet/AboutComp/AboutHeader";
import WhoWeAre from "../Componet/AboutComp/About-WhoWeAre";
import OurFeatures from "../Componet/AboutComp/About-OurFeatures";
import OurTeam from "../Componet/AboutComp/OurTeam";
import HeaderMain from "../Componet/HeaderMain";
import { useLocation } from "react-router-dom";
import FooterMain from "../Componet/FooterMain";

function About() {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderMain pathname={pathname} />
      <AboutHeader />
      <WhoWeAre />
      <OurFeatures />
      <OurTeam />
      <FooterMain pathname={pathname} />
    </>
  );
}

export default About;
