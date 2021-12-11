import React from "react";
import { useState } from "react";
import BuyandSell from "./BuyandSell"

export default function Package({toggled}) {
  const [sell, setSell] = useState(false);

  return (
    <section className={`package${toggled ? "" : " bg-second"}`}>
      <div className="container-lg">
        <div className="package-area">
          <div className="col-md-12 text-center">
            <h1 className={`package-header my-4${toggled ? "" : " text-dark-main"}`}>
              AFFORDABLE <span> PACKAGES</span>
            </h1>
            <div className="d-flex justify-content-center align-items-center title-area">
              <span className="line "></span>
              <p className={`about-title${toggled ? "" : " text-second-dark"}`}>
                A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER
                BITCOIN RELATED INFO
              </p>
              <span className="line"></span>
            </div>
            <div className="buy-sell my-5 text-center">
              <div className="buy-sell-area d-flex justify-content-center align-items-center">
                <span role="button" onClick={() => setSell(false)}>
                  BUY
                </span>{" "}
                <span role="button" onClick={() => setSell(true)}>
                  SELL
                </span>
                <div
                  className={
                    sell ? "select-background" : "select-buy select-background"
                  }
                ></div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center flex-wrap price-area my-5">
              <BuyandSell
              sellStatus={sell}
              dollarPrice={100}
              coinPrice={0.007}
              />
              <BuyandSell
              sellStatus={sell}
              dollarPrice={300}
              coinPrice={0.015}
              />
              <BuyandSell
              sellStatus={sell}
              dollarPrice={500}
              coinPrice={0.031}
              />
              <BuyandSell
              sellStatus={sell}
              dollarPrice={1000}
              coinPrice={0.081}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
