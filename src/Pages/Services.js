import React from "react";
import { AboutTop } from "../Components/AboutFirstComponent/AboutTop";
import Footer from "../Components/Footer/Footer";
import HeaderMain from "../Components/Header/Header";
import StyleSite from "../Components/Stylesite/StyleSite";
import {ServicesMain} from "../Components/ServicesMain/ServicesMain"


export const Services = ({ toggled, switchTheme }) => {
  return (
    <>
      <HeaderMain toggled={toggled} />
      <StyleSite toggled={toggled} switchTheme={switchTheme} />
      <AboutTop
        header="OUR"
        headerSecond="SERVICES"
        bottomHeader="SERVICES"
        toggled={toggled}
      />
      <ServicesMain />
      <Footer />
    </>
  );
};
