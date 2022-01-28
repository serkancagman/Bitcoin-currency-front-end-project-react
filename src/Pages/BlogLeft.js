import React from "react";
import { AboutTop } from "../Components/AboutFirstComponent/AboutTop";
import BlogPosts from "../Components/BlogPosts/BlogPosts";
import Footer from "../Components/Footer/Footer";
import HeaderMain from "../Components/Header/Header";

const BlogLeft = () => {
  return (
    <>
      <HeaderMain />
      <AboutTop header="BLOG" headerSecond="POSTS" bottomHeader="BLOG" />
      <BlogPosts flexType="flex-row-reverse" />
      <Footer />
    </>
  );
};

export default BlogLeft;
