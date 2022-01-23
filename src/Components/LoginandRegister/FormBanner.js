import React from "react";
import BannerItem from "./images/Loginbanner.jpg";
import BannerItem1 from "./images/Loginbanner1.jpg";
import BannerItem2 from "./images/Loginbanner2.jpg";
const FormBanner = () => {
  return (
    <>
      <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block d-xl-block">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <div>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active carButton"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                className="carButton"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                className="carButton"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active h-100">
              <img
                src={BannerItem}
                className="d-block w-100 carouselImg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
              <div className="slideInfo">
              Bitcoin doubled in 7 days. You should not expect anything more. Excellent customer service!
                <p className="customName my-2">
                  - SLIM HAMDI, <span>TUNISIA</span>
                </p>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img src={BannerItem1} className=" w-100 carouselImg" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
              <div className="slideInfo">
              My family and me want to thank you for helping us find a great opportunity to make money online. Very happy with how things are going!
                <p className="customName my-2">
                  - RAWIA CHNITI, <span>RUSSIA</span>
                </p>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                src={BannerItem2}
                className="d-block w-100 carouselImg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
              <div className="slideInfo">
                This is a realistic program for anyone looking for site to
                invest. Paid to me regularly, keep up good work!
                <p className="customName my-2">
                  - LUCY SMITH, <span>ENGLAND</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBanner;
