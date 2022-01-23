import Logo from "../../images/main-logo.png";
import LightLogo from "../../images/logo-white.png";
import btcLoader from "../../images/btcLoader.gif"
import { PersonPlusFill, PersonFill } from "react-bootstrap-icons";
import Navbars from "./Navbar";
import "./style/header.css";
import React from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import {CoinPriceContext} from "../../Context/CoinPriceContext"
import { HeaderContext } from "../../Context/HeaderContext";
export default function HeaderMain() {

  const { theme } = React.useContext(ThemeContext);
  const { coinDayPrice, coinPrice, coinVolume, isLoading } = React.useContext(CoinPriceContext);
  const {isNavSticky} = React.useContext(HeaderContext)
  return (
    <>
      <header className={isNavSticky ? "forSticky" : ""}>
        <div className={`header-top-wrapper${theme === "dark" ? " " : " bg-light"}`}>
          <div className="container-lg">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-2 col-xl-2 text-center">
                <Link className="navbar-brand" to="/">
                  <img
                    className="top-logo"
                    src={theme === "dark" ? `${Logo}` : `${LightLogo}`}
                    alt=""
                  />
                </Link>
              </div>

              <div className=" col-lg-7 col-xl-7">
                <ul className="status-area">
                  <li className="status-list">
                    <div
                      className={`status-header${
                        theme === "dark" ? "" : " light-main-font"
                      }`}
                    >
                      9,500 USD
                    </div>
                    <span
                      className={`status-info${
                        theme === "dark" ? "" : " light-title-font"
                      }`}
                    >
                      Last tride price
                    </span>
                  </li>
                  <li className="status-list">
                    <div
                      className={`status-header${
                        theme === "dark" ? "" : " light-main-font"
                      }`}
                    >
                      {isLoading && <img style={{width:"20px"}} src={btcLoader} alt="" /> }
                      {coinVolume} %
                    </div>
                    <span
                      className={`status-info${
                        theme === "dark" ? "" : " light-title-font"
                      }`}
                    >
                      24 hour price
                    </span>
                  </li>
                  <li className="status-list">
                    <div
                      className={`status-header${
                        theme === "dark" ? "" : " light-main-font"
                      }`}
                    >
                      {isLoading && <img style={{width:"20px"}} src={btcLoader} alt="" /> }
                      ${coinDayPrice}
                    </div>
                    <span
                      className={`status-info${
                        theme === "dark" ? "" : " light-title-font"
                      }`}
                    >
                      High 24 Hour
                    </span>
                  </li>
                  <li className="status-list">
                    <div
                      className={`status-header${
                        theme === "dark" ? "" : " light-main-font"
                      }`}
                    >
                      2,231,775
                    </div>
                    <span
                      className={`status-info${
                        theme === "dark" ? "" : " light-title-font"
                      }`}
                    >
                      Active traders
                    </span>
                  </li>
                  <li className="status-list position-relative">
                    <div
                      className={`status-header btc-live${
                        theme === "dark" ? "" : " light-main-font"
                      }`}
                    >
                      {isLoading && <img style={{width:"20px"}} src={btcLoader} alt="" /> }
                      {coinPrice}
                    </div>
                    <span
                      className={`status-info${
                        theme === "dark" ? "" : " light-title-font"
                      }`}
                    >
                      Live Bitcoin price
                    </span>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-3 col-xl-3">
                <div className="login-area row justify-content-center align-items-center">
                  <Link className="login-btn mx-2" to="/login">
                    <PersonFill /> SIGN IN
                  </Link>
                  <Link className="register-btn mx-2" to="/register">
                    <PersonPlusFill /> REGISTER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbars/>
      </header>
    </>
  );
}
