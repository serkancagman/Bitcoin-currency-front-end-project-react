import React from "react";
import { Link } from "react-router-dom";

const BlogItems = ({ postImg, postHeader, postTitle }) => {
  return (
    <>
      <div className="postWrapper">
        <article>
          <Link className="postLink" to="/#">
            {postHeader}
          </Link>
          <figure className="blogFigure">
            <Link className="postLink" to="/#">
              <img src={postImg} alt="..." className="img-fluid" />
            </Link>
          </figure>

          <p className="PostTitle">{postTitle}</p>
          <Link className="postButton" to="/#">
            READ MORE
          </Link>
          <div className="postInfo">
            <div className="postOwner">
              <Link className="text-decoration-none blogowner mx-2" to="/#">
                <i className="bi mx-1 bi-person-fill"> </i> admin
              </Link>
              <span className="blogCalendar mx-2">
                {" "}
                <i class="bi mx-1 bi-calendar-range"> </i> 23 Agust 2021
              </span>
              <Link to="/#" className="blogComment mx-2">
                <i class="bi bi-chat-dots-fill"></i> 15 comments
              </Link>
              <span className="postTag mx-2">
                <i class="bi mx-1 bi-tags-fill"></i>cryptocurrency, market,
                trading
              </span>
              <Link to="/#" className="permalink mx-2 text-decoration-none">
                <i class="bi bi-link-45deg"></i> permalink
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogItems;
