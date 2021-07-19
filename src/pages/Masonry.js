import React from "react";
import HeaderMain from "../Componet/HeaderMain";
import FooterMain from "../Componet/FooterMain";
import PortfolioMasonry from "../Componet/MasonryComp/PortfolioMasonry";
import { useLocation } from "react-router-dom";

function Masonry() {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderMain pathname={pathname} />
      <PortfolioMasonry />
      <FooterMain pathname={pathname} />
    </>
  );
}

export default Masonry;
