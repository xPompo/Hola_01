import React from "react";
import HeroService from "../Componet/ServiceComp/Hero-service";
import FeaturesServicePart from "../Componet/ServiceComp/FeaturesServicePart";
import Pricing from "../Componet/HomeComp/Pricing";
import PartnerServicePart from "../Componet/ServiceComp/PartnerServicePart";
import FooterMain from "../Componet/FooterMain";
import HeaderMain from "../Componet/HeaderMain";
import { useLocation } from "react-router-dom";

function Services() {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderMain pathname={pathname} />
      <HeroService />
      <FeaturesServicePart />
      <PartnerServicePart />
      <Pricing />
      <FooterMain pathname={pathname} />
    </>
  );
}

export default Services;
