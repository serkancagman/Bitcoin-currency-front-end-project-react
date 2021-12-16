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

export const Home = ({
  toggled,
  switchTheme,
  coinPrice,
  coinVolume,
  coinDayPrice,
}) => {
  return (
    <>
      <HeaderMain toggled={toggled}
      coinPrice={coinPrice}
      coinVolume={coinVolume}
      coinDayPrice={coinDayPrice} />
      <StyleSite toggled={toggled} switchTheme={switchTheme} />
      <Slider />
      <AboutUs toggled={toggled} />
      <Guarantees toggled={toggled} />
      <Package toggled={toggled} />
      <BtcCalculator toggled={toggled} 
      coinPrice={coinPrice}
      />
      <Experts toggled={toggled} />
      <BitcoinNews toggled={toggled} />
      <Footer toggled={toggled} />
    </>
  );
};
