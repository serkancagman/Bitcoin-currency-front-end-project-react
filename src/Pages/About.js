import React from 'react'
import { AboutFirstComponent } from '../Components/AboutFirstComponent/AboutFirstComponent';
import Footer from '../Components/Footer/Footer';
import HeaderMain from '../Components/Header/Header';
import StyleSite from '../Components/Stylesite/StyleSite';

const About = ({toggled,switchTheme,coinPrice,coinVolume,coinDayPrice}) => {
    console.log(toggled)
    console.log(switchTheme)
    return (
        
        <>
        <HeaderMain
        toggled={toggled}
        coinPrice={coinPrice}
        coinVolume={coinVolume}
        coinDayPrice={coinDayPrice}
        />
        <StyleSite
        toggled={toggled}
        switchTheme={switchTheme}
        />
        <AboutFirstComponent
        toggled={toggled}
        />
        <Footer/>   
        </>
        
    )
}

export default About; 

