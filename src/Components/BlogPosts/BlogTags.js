import React from "react";
import { Link } from "react-router-dom";

const BlogTags = ({ navHeader }) => {
  return (
    <div className="blogNav my-4">
      <h4 className="blogasideH">{navHeader}</h4>
      <div className="blogTags d-flex flex-wrap">
        <Link to="/#" className="tagLink mx-1">
          currency
        </Link>
        <Link to="/#" className="tagLink">
          crypto
        </Link>
        <Link to="/#" className="tagLink">
          trading
        </Link>
        <Link to="/#" className="tagLink">
          wallet
        </Link>
        <Link to="/#" className="tagLink">
          mining
        </Link>
        <Link to="/#" className="tagLink">
          transaction
        </Link>
        <Link to="/#" className="tagLink">
          financial
        </Link>
        <Link to="/#" className="tagLink">
          security
        </Link>
      </div>
    </div>
  );
};

export default BlogTags;
