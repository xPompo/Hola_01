import React from "react";
import ProjectHeroSection from "../Componet/ProjectDetail/ProjectHeroSection";
import HeaderMain from "../Componet/HeaderMain";
import FooterMain from "../Componet/FooterMain";
import { useLocation } from "react-router-dom";
import ProjectIntroSection from "../Componet/ProjectDetail/ProjectIntroSection";
import ProjectGallarySection from "../Componet/ProjectDetail/ProjectGallarySection";
import ProjectDesSection from "../Componet/ProjectDetail/ProjectDesSection";

function ProjectDetails() {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderMain pathname={pathname} />
      <ProjectHeroSection />
      <ProjectIntroSection />
      <ProjectGallarySection />
      <ProjectDesSection />
      <FooterMain pathname={pathname} />
    </>
  );
}

export default ProjectDetails;
