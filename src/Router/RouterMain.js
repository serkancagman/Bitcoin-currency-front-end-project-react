import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import BlogPageTwo from "../Pages/BlogPageTwo";
import BlogPageThree from "../Pages/BlogPageThree";
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
      <Route path="blog/2" element={<BlogPageTwo />} />
      <Route path="blog/3" element={<BlogPageThree />} />
    </Routes>
  );
};

export default RouterMain;
