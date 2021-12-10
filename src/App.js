import AboutUs from "./Components/AboutUs/AboutUs";
import BitcoinNews from "./Components/BitcoinNews/BitcoinNews";
import BtcCalculator from "./Components/BitcoinCalculator/BtcCalculator";
import Experts from "./Components/Experts/Experts";
import Footer from "./Components/Footer/Footer";
import Guarantees from "./Components/Guarantees/Guarantees";
import HeaderMain from "./Components/Header/Header";
import Package from "./Components/BuyandSell/Package";
import Slider from "./Components/Banner/Slider";
import './Components/responsive.css'
import StyleSite from "./Components/Stylesite/StyleSite";
import { useState } from "react";


function App() {

  const [toggled,setToggled] = useState(true);
  const handleSwitchTheme = ()=>{
      setToggled((s)=> !s);
  }

  return (
    <>
    
    <HeaderMain/>
    <StyleSite
    toggled={toggled}
    switchTheme={handleSwitchTheme}
    />
    <Slider/>
    <AboutUs/>
    <Guarantees/>
    <Package/>
    <BtcCalculator/>
    <Experts/>
    <BitcoinNews/>
    <Footer/>
    
    </>
  );
}

export default App;
