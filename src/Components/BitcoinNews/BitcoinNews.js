import React from "react";
import newOne from "../../images/blog-post-small-1.jpg";
import newTwo from "../../images/blog-post-small-2.jpg";
import newThree from "../../images/blog-post-small-3.jpg";
import "./style/bitcoinnews.css";
import { ThemeContext } from "../../Context/ThemeContext";
export default function BitcoinNews() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <section className={`news py-5${theme === "dark" ? "" : " bg-light"}`}>
      <div className="container-lg">
        <h2
          className={`m-0 text-center person-header${
            theme === "dark" ? "" : " text-main-dark"
          }`}
        >
          BITCOIN <span>NEWS</span>
        </h2>
        <div className="d-flex my-3 justify-content-center align-items-center title-area">
          <span className="line "></span>
          <p
            className={`about-title${
              theme === "dark" ? "" : " text-second-dark"
            }`}
          >
            A TALENTED TEAM OF CRYPTOCURRENCY EXPERTS BASED IN LONDON
          </p>
          <span className="line"></span>
        </div>
        <div className="row">
          <div className="col-md-4 new-main">
            <div className="news-area w-100 h-100 d-flex flex-column justify-content-center ">
              <img className="img-fluid" src={newOne} alt="Loading..." />
              <h5
                className={`new-header my-3${
                  theme === "dark" ? "" : " text-main-dark"
                }`}
              >
                How Cryptocurrency Begun and Its Impact To Financial
                Transactions
              </h5>
              <p
                className={`new-title${
                  theme === "dark" ? "" : " text-second-dark"
                }`}
              >
                incididunt ut labore et dolore magna aliqua. Ut enim aminim
                veniam, quis nostrud...
              </p>
              <button className="new-button">READ MORE</button>
              <div className="new-date text-center">
                <h6>01</h6>
                <p>JAN</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 new-main">
            <div className="news-area w-100 h-100 d-flex flex-column justify-content-center ">
              <img className="img-fluid" src={newTwo} alt="Loading..." />
              <h5
                className={`new-header my-3${
                  theme === "dark" ? "" : " text-main-dark"
                }`}
              >
                Cryptocurrency - Who Are Involved With It? Words about members
              </h5>
              <p
                className={`new-title${
                  theme === "dark" ? "" : " text-second-dark"
                }`}
              >
                incididunt ut labore et dolore magna aliqua. Ut enim aminim
                veniam, quis nostrud...
              </p>
              <button className="new-button">READ MORE</button>
              <div className="new-date text-center">
                <h6>10</h6>
                <p>APR</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 new-main">
            <div className="news-area w-100 h-100 d-flex flex-column justify-content-center ">
              <img className="img-fluid" src={newThree} alt="Loading..." />
              <h5
                className={`new-header my-3${
                  theme === "dark" ? "" : " text-main-dark"
                }`}
              >
                Risks & Rewards Of Investing In Bitcoin. Pros and Cons
              </h5>
              <p
                className={`new-title${
                  theme === "dark" ? "" : " text-second-dark"
                }`}
              >
                incididunt ut labore et dolore magna aliqua. Ut enim aminim
                veniam, quis nostrud...
              </p>
              <button className="new-button">READ MORE</button>
              <div className="new-date text-center">
                <h6>30</h6>
                <p>MAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
