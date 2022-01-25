import React from "react";

const PricingBoxes = ({buyPrice, sellPrice, currencyIcon}) => {
  return <div className="col-md-6 col-lg-3">
        <div className="pricingInner text-light text-center">
            <h2>{buyPrice} <span>FOR</span> </h2>
            <div className="mainPrice">
                <span className={`bi ${currencyIcon}`}></span>
                <span>{sellPrice}</span>
            </div>
            <button className="buyButton my-2 w-100 py-2">ORDER NOW</button>
        </div>
  </div>;
};

export default PricingBoxes;
