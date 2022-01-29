import React from "react";
import "./style/slider.css";
import SliderItem from "../../images/slideritem.jpg";
import SliderItem1 from "../../images/slideritem2.jpg";
import SliderItem2 from "../../images/slideritem3.jpg";

export default function Slider() {
  return (
    <section className="slider-main">
      <div id="slideControl" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              style={{ backgroundImage: `url(${SliderItem})` }}
              className="w-100 h-100 item first-item "
            ></div>
            <div className="first-info">
              <div className="row m-0 w-100 h-100 justify-content-center align-items-center">
                <div className="col-md-12 text-center">
                  <h3 className="slide-title">
                    <span>BITCOIN </span>
                    EXCHANGE <br />
                    YOU CAN <span>TRUST</span>
                  </h3>
                  <button className="slide-button">OUR PRICES</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{ backgroundImage: `url(${SliderItem1})` }}
              className=" item second-item ">
              </div>
            <div className="first-info">
              <div className="row m-0 w-100 h-100 justify-content-center align-items-center">
                <div className="col-md-12 text-center">
                  <h3 className="slide-title">
                    <span>SECURE </span>
                    AND
                    <br />
                    <span>EASY WAY</span> TO BITCOIN
                  </h3>
                  <button className="slide-button">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{ backgroundImage: `url(${SliderItem2})` }}
              className=" item thirth-item "
            ></div>
            <div className="first-info">
              <div className="row m-0 w-100 h-100 justify-content-center align-items-center">
                <div className="col-md-12 text-center">
                  <h3 className="slide-title">
                    <span>SECURE </span>
                    AND
                    <br />
                    <span>EASY WAY</span> TO BITCOIN
                  </h3>
                  <button className="slide-button">OUR PRICES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slideControl"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slideControl"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
