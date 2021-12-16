import Logo from "../../images/main-logo.png";
import LightLogo from "../../images/logo-white.png";
import { PersonPlusFill, PersonFill } from "react-bootstrap-icons";
import Navbars from "./Navbar";
import { useState, useEffect } from "react";
import "./header.css";
import axios from "axios";

export default function HeaderMain({ toggled }) {
  const [coinPrice, setCoinPrice] = useState("");
  const [coinVolume, setCoinVolume] = useState("");
  const [coinDayPrice, setCoinDayPrice] = useState("");

  useEffect(() => {
    const getData = async () => {
      const baseURL =
        "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
      const response = await axios(baseURL);
      setCoinPrice(response.data.market_data.current_price.usd);
      setCoinVolume(
        Math.floor(
          response.data.market_data.price_change_percentage_24h * 100,
        ) / 100,
      );
      setCoinDayPrice(Math.floor(response.data.market_data.high_24h.usd));
    };
    getData();
  }, []);

  return (
    <>
      <header>
        <div className={`header-top-wrapper${toggled ? " " : " bg-light"}`}>
          <div className="container-lg">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-2 col-xl-2 text-center">
                <a className="navbar-brand" href="/">
                  <img
                    className="top-logo"
                    src={toggled ? `${Logo}` : `${LightLogo}`}
                    alt=""
                  />
                </a>
              </div>

              <div className=" col-lg-7 col-xl-7">
                <ul className="status-area">
                  <li className="status-list">
                    <h5
                      className={`status-header${
                        toggled ? "" : " light-main-font"
                      }`}
                    >
                      9,500 USD
                    </h5>
                    <span
                      className={`status-info${
                        toggled ? "" : " light-title-font"
                      }`}
                    >
                      Last tride price
                    </span>
                  </li>
                  <li className="status-list">
                    <h5
                      className={`status-header${
                        toggled ? "" : " light-main-font"
                      }`}
                    >
                      {coinVolume} %
                    </h5>
                    <span
                      className={`status-info${
                        toggled ? "" : " light-title-font"
                      }`}
                    >
                      24 hour price
                    </span>
                  </li>
                  <li className="status-list">
                    <h5
                      className={`status-header${
                        toggled ? "" : " light-main-font"
                      }`}
                    >
                      ${coinDayPrice}
                    </h5>
                    <span
                      className={`status-info${
                        toggled ? "" : " light-title-font"
                      }`}
                    >
                      High 24 Hour
                    </span>
                  </li>
                  <li className="status-list">
                    <h5
                      className={`status-header${
                        toggled ? "" : " light-main-font"
                      }`}
                    >
                      2,231,775
                    </h5>
                    <span
                      className={`status-info${
                        toggled ? "" : " light-title-font"
                      }`}
                    >
                      Active traders
                    </span>
                  </li>
                  <li className="status-list position-relative">
                    <h5
                      className={`status-header btc-live${
                        toggled ? "" : " light-main-font"
                      }`}
                    >
                      {coinPrice}
                    </h5>
                    <span
                      className={`status-info${
                        toggled ? "" : " light-title-font"
                      }`}
                    >
                      Live Bitcoin price
                    </span>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-3 col-xl-3">
                <div className="login-area row justify-content-center align-items-center">
                  <a className="login-btn mx-2" href="/login">
                    <PersonFill /> SIGN IN
                  </a>
                  <a className="register-btn mx-2" href="/register">
                    <PersonPlusFill /> REGISTER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbars toggled={toggled} />
      </header>
    </>
  );
}
