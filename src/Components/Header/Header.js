import Logo from "../../images/main-logo.png";
import LightLogo from "../../images/logo-white.png"
import { PersonPlusFill, PersonFill } from "react-bootstrap-icons";
import Navbars from "./Navbar";
import "./header.css"

export default function HeaderMain({toggled}) {
  return (
    <>
      <header>
        <div className={`header-top-wrapper${toggled ? " " : " bg-light"}`}>
          <div className="container-lg">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-2 col-xl-2 text-center">
                <a className="navbar-brand" href="/">
                  <img className="top-logo" src={toggled ? `${Logo}` : `${LightLogo}`  } alt="" />
                </a>
              </div>

              <div className=" col-lg-7 col-xl-7">
                <ul className="status-area">
                  <li className="status-list">
                    <h5 className={`status-header${toggled ? "" : " light-main-font"}`}>9,500 USD</h5>
                    <span className={`status-info${toggled ? "" : " light-title-font"}`}>Last tride price</span>
                  </li>
                  <li className="status-list">
                    <h5 className={`status-header${toggled ? "" : " light-main-font"}`}>+5.26%</h5>
                    <span className={`status-info${toggled ? "" : " light-title-font"}`}>24 hour price</span>
                  </li>
                  <li className="status-list">
                    <h5 className={`status-header${toggled ? "" : " light-main-font"}`}>12.820 BTC</h5>
                    <span className={`status-info${toggled ? "" : " light-title-font"}`}>24 hour volume</span>
                  </li>
                  <li className="status-list">
                    <h5 className={`status-header${toggled ? "" : " light-main-font"}`}>2,231,775</h5>
                    <span className={`status-info${toggled ? "" : " light-title-font"}`}>Active traders</span>
                  </li>
                  <li className="status-list position-relative">
                    <h5 className={`status-header btc-live${toggled ? "" : " light-main-font"}`} >49217.28</h5>
                    <span className={`status-info${toggled ? "" : " light-title-font"}`}>Live Bitcoin price</span>
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
        <Navbars 
        toggled={toggled}
        />
      </header>
    </>
  );
}
