import React from 'react'
import "../BuyandSell/buyandsell.css"


export default function BuyCard({sellStatus,dollarPrice,coinPrice}) {
    return (
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
        <div className={sellStatus ? "price-container-all flip mx-auto" : " price-container-all mx-auto"}>
        <div className= "price-wrapper w-100 h-100 text-center p-3" >
          <div className="quantity">
            {" "}
            <p> GET {coinPrice} BTC</p>
            <p className="price-for">FOR</p>
          </div>
          <div className="price-title">
            <p className="price">{dollarPrice}</p>
          </div>
          <button className="buy-btn">ORDER NOW</button>
        </div>
        <div className="price-wrapper-sell w-100 h-100 text-center p-3">
          <div className="quantity">
            {" "}
            <p>GET {dollarPrice} USD</p>
            <p className="price-for">FOR</p>
          </div>
          <div className="price-title">
            <p className="price-btc">{coinPrice}</p>
          </div>
          <button className="buy-btn">SELL NOW</button>
        </div>
        </div>
        </div>
        
       
    )
}
