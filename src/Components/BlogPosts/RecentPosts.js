import React from "react";
import { Link } from "react-router-dom";
import { blogArchive } from "../Helpers/RecentPostData";

const RecentPosts = ({ navHeader }) => {
  return (
    <div className="blogNav my-4">
      <h4 className="blogasideH">{navHeader}</h4>
      <ul className="blogList">
        {blogArchive.map((navitems, i) => {
          return (
            <li key={i} className="recentItem">
              <div className="recentPosts">
                <Link to={navitems.link} className="recentImgLink">
                  <img src={navitems.imgURL} alt="..." className="recentImg" />
                </Link>
                <div className="recentInner">
                  <Link to={navitems.link} className="recentHeader">
                    {navitems.header}
                  </Link>
                  <p className="m-0 recentTitle">
                    <i className="bi bi-clock me-1"></i> {navitems.title}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentPosts;
