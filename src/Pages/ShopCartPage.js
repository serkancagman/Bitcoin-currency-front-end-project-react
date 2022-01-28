import React from "react";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import HeaderMain from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { AboutTop } from "../Components/AboutFirstComponent/AboutTop";
const ShopCartPage = () => {
  return (
    <>
      <HeaderMain />
      <AboutTop
        header="SHOPPING"
        headerSecond="CART"
        bottomHeader="SHOPPING CART"
      />
      <ShoppingCart />
      <Footer />
    </>
  );
};

export default ShopCartPage;
