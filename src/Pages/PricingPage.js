import React from 'react';
import { AboutTop } from '../Components/AboutFirstComponent/AboutTop';
import Footer from '../Components/Footer/Footer';
import HeaderMain from '../Components/Header/Header';
import Pricing from '../Components/Pricing/Pricing';
import StyleSite from '../Components/Stylesite/StyleSite';

const PricingPage = () => {
    
  return <>
  <HeaderMain/>
        <AboutTop header="OUR"
        headerSecond="PRICES"
        bottomHeader="PRICING" />
        <Pricing/>
        <StyleSite/>
    <Footer/>
  </>;
};

export default PricingPage;
