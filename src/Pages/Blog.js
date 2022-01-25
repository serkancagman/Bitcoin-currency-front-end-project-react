import React from 'react';
import { AboutTop } from '../Components/AboutFirstComponent/AboutTop';
import BlogPosts from '../Components/BlogPosts/BlogPosts';
import Footer from '../Components/Footer/Footer';
import HeaderMain from '../Components/Header/Header';

const Blog = () => {
  return <>
    <HeaderMain/>

    <AboutTop 
    header="BLOG"
    headerSecond="POSTS"
    bottomHeader="BLOG"
    />

    <BlogPosts/>

    <Footer/>
  </>;
};

export default Blog;
