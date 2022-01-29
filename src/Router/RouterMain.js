import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import BlogLeft from "../Pages/BlogLeft";
import CheckoutPage from "../Pages/CheckoutPage";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import PricingPage from "../Pages/PricingPage";
import RegisterPage from "../Pages/RegisterPage";
import { Services } from "../Pages/Services";
import ShopCartPage from "../Pages/ShopCartPage";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="pricing" element={<PricingPage/>} />
      <Route path="blog" element={<Blog/>} />
      <Route path="blogleft" element={<BlogLeft  />} />
      <Route path="shopcart" element={<ShopCartPage/>} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default RouterMain;
