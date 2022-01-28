import React from "react";
import BlogItems from "./BlogItems";
import "./style/blogposts.css";
import blogImg from "../../images/blogImg.jpg";
import blogImg1 from "../../images/blogImg2.jpg";
import blogImg2 from "../../images/blogImg3.jpg";
import BlogNav from "./BlogNav";
import RecentPosts from "./RecentPosts";
import BlogTags from "./BlogTags";

const BlogPosts = ({flexType}) => {
  const blogCategories = [
    "INSURANCE",
    "ANNOUNCEMENT",
    "BANKING",
    "SECURITY",
    "REGULATION",
    "MARKET UPDATES",
  ];
  const blogArchive = [
    "JANUARY 2021",
    "DECEMBER 2021",
    "NOVEMBER 2021",
    "OCTOBER 2021",
    "SEPTEMBER 2021",
  ];






  return (
    <section id="blogPosts">
      <div className="container-lg">
        <div className={`row justify-content-center ${flexType}`}>
          <div className="col-lg-8 col-md-12">
            <BlogItems
              postImg={blogImg}
              postHeader="HOW CRYPTOCURRENCY BEGUN AND ITS IMPACT TO FINANCIAL TRANSACTIONS"
              postTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ..."
            />
            <BlogItems
              postImg={blogImg1}
              postHeader="CRYPTOCURRENCY - WHO ARE INVOLVED WITH IT? WORDS ABOUT MEMBERS"
              postTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ..."
            />
            <BlogItems
              postImg={blogImg2}
              postHeader="RISKS & REWARDS OF INVESTING IN BITCOIN. PROS AND CONS"
              postTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ..."
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <BlogNav links={blogCategories} navHeader="CATEGORIES" />
            <BlogNav links={blogArchive} navHeader="ARCHIVE" />
            <RecentPosts navHeader="RECENT POSTS" />
            <BlogTags navHeader="POPULAR TAGS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
