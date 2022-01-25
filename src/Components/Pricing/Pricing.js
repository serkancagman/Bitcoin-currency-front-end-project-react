import React from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import PricingBoxes from "./PricingBoxes";
import "./style/pricing.css";
const Pricing = () => {

    const {theme} = React.useContext(ThemeContext)

  return (
    <section id="pricing" className={theme === "dark" ? "bgDark" : "bgLight"} >
      <div className="container-lg">
        <div className="priceHeader my-5">
          <h3 className={`pricingHeader ${theme === "dark" ? "" :" textDark"}`}>BUY BITCOINS</h3>
          <p className="pricingSub">
            Buy bitcoins with your credit card or cash here! Register to Bayya
            and get your bitcoins today.
          </p>
        </div>

        <div className="row my-2 g-3 justify-content-center align-items-center">
          <PricingBoxes
            buyPrice="GET 0.007 BTC"
            sellPrice="100"
            currencyIcon="bi-currency-dollar"
          />
          <PricingBoxes
            buyPrice="GET 0.015 BTC"
            sellPrice="300"
            currencyIcon="bi-currency-dollar"
          />
          <PricingBoxes
            buyPrice="GET 0.031 BTC"
            sellPrice="500"
            currencyIcon="bi-currency-dollar"
          />
          <PricingBoxes
            buyPrice="GET 0.081 BTC"
            sellPrice="1,000"
            currencyIcon="bi-currency-dollar"
          />
        </div>

        <div className="priceHeader my-5">
          <h3 className={`pricingHeader ${theme === "dark" ? "" :" textDark"}`}>SELL BITCOINS</h3>
          <p className="pricingSub">
            Sell easy, fast and secure Bitcoin. The money will be transferred to
            your PayPal or bank account.
          </p>
        </div>
        <div className="row my-2 g-3 justify-content-center align-items-center">
          <PricingBoxes
            buyPrice="GET 100 USD"
            sellPrice="0.2"
            currencyIcon="bi-currency-bitcoin"
          />
          <PricingBoxes
            buyPrice="GET 1000 USD"
            sellPrice="0.5"
            currencyIcon="bi-currency-bitcoin"
          />
          <PricingBoxes
            buyPrice="GET 3000 USD"
            sellPrice="1"
            currencyIcon="bi-currency-bitcoin"
          />
          <PricingBoxes
            buyPrice="GET 9000 USD"
            sellPrice="2"
            currencyIcon="bi-currency-bitcoin"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
