import React from "react";
import { AboutTop } from "../Components/AboutFirstComponent/AboutTop";
import Footer from "../Components/Footer/Footer";
import HeaderMain from "../Components/Header/Header";
import ShopCartCheckout from "../Components/ShopCheckout/ShopCartCheckout";

const CheckoutPage = () => {
  return (
    <>
      <HeaderMain />
      <AboutTop
        header="SHOPPING"
        headerSecond="CHECKOUT"
        bottomHeader="SHOPPING CHECKOUT "
      />
      <ShopCartCheckout />

      <Footer />
    </>
  );
};

export default CheckoutPage;
