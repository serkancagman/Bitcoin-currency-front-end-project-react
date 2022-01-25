import AboutUs from "../Components/AboutUs/AboutUs";
import Slider from "../Components/Banner/Slider";
import BtcCalculator from "../Components/BitcoinCalculator/BtcCalculator";
import BitcoinNews from "../Components/BitcoinNews/BitcoinNews";
import Package from "../Components/BuyandSell/Package";
import Experts from "../Components/Experts/Experts";
import Footer from "../Components/Footer/Footer";
import Guarantees from "../Components/Guarantees/Guarantees";
import HeaderMain from "../Components/Header/Header";
import StyleSite from "../Components/Stylesite/StyleSite";
import "../Components/responsive.css";
import React from "react";
import PreLoader from "../Components/PreLoader/PreLoader";
import { PreLoaderContext } from "../Context/PreLoader";

export const Home = () => {
  const { isLoadingPage } = React.useContext(PreLoaderContext);

  return (
    <>
      {isLoadingPage ? (
        <PreLoader />
      ) : (
        <>
          <HeaderMain />
          <StyleSite />
          <Slider />
          <AboutUs />
          <Guarantees />
          <Package />
          <BtcCalculator />
          <Experts />
          <BitcoinNews />
          <Footer />
        </>
      )}
    </>
  );
};
