import React from "react";
import { AboutFirstComponent } from "../Components/AboutFirstComponent/AboutFirstComponent";
import Footer from "../Components/Footer/Footer";
import HeaderMain from "../Components/Header/Header";
import StyleSite from "../Components/Stylesite/StyleSite";

const About = () => {
  return (
    <>
      <HeaderMain />
      <StyleSite />
      <AboutFirstComponent />
      <Footer />
    </>
  );
};

export default About;
