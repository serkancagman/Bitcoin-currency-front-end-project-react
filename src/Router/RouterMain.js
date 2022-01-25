import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import PricingPage from "../Pages/PricingPage";
import RegisterPage from "../Pages/RegisterPage";
import { Services } from "../Pages/Services";

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
    </Routes>
  );
};

export default RouterMain;
