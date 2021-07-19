import React from "react";
import CarouselPortfolio from "../Componet/CarouselPortfolioComp/CarouselPortfolio";
import HeaderMain from "../Componet/HeaderMain";
import { useLocation } from "react-router-dom";

function CarouselPage() {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderMain pathname={pathname} />
      <CarouselPortfolio />
    </>
  );
}

export default CarouselPage;
