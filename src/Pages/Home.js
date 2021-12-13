
import AboutUs from "../Components/AboutUs/AboutUs"
import Slider from "../Components/Banner/Slider"
import BtcCalculator from "../Components/BitcoinCalculator/BtcCalculator"
import BitcoinNews from "../Components/BitcoinNews/BitcoinNews"
import Package from "../Components/BuyandSell/Package"
import Experts from "../Components/Experts/Experts"
import Footer from "../Components/Footer/Footer"
import Guarantees from "../Components/Guarantees/Guarantees"
import HeaderMain from "../Components/Header/Header"
import StyleSite from "../Components/Stylesite/StyleSite"
import "../Components/responsive.css"



export const Home = ({toggled,switchTheme}) => {

    



    return (
        <>
            <HeaderMain
            toggled={toggled}
            />
            <StyleSite toggled={toggled}
            switchTheme={switchTheme} />
            <Slider/>
            <AboutUs
            toggled={toggled}
            />
            <Guarantees
            toggled={toggled}
            />
            <Package
            toggled={toggled}
            />
            <BtcCalculator
            toggled={toggled}
            />
            <Experts
            toggled={toggled}
            />
            <BitcoinNews
            toggled={toggled}
            />
            <Footer
            toggled={toggled}
            />
        </>
    )
}
