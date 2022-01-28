import React from "react";
import Logo from "../../images/main-logo.png";
import {
  CaretDownFill,
  CartFill,
  Search,
  List,
  X,
} from "react-bootstrap-icons";

import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Context/HeaderContext";
export default function Navbars() {
  const { theme} = React.useContext(ThemeContext);
  const {isNavSticky} = React.useContext(HeaderContext)
  const [activeSearch, setActiveSearch] = React.useState(false);

  


  return (
    <>
      <nav className={`navbar navbar-expand-md ${isNavSticky ? " stickyNav" : ""}`}>
        <div className={`navbar-area w-100 ${theme === "dark" ? "" : " light-second-bg"}`}>
          <div className="container-lg">
            <div className="navbar-wrapper">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <Link className="navbar-brand-mobile" to="/">
                  <img className="top-logo" src={Logo} alt="" />
                </Link>

                <div className="hamburger-menu">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                    aria-controls="#navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <List />{" "}
                  </button>
                </div>
              </div>

              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className={`nav-link${theme === "dark" ? "" : " light-main-font"}`}>
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className={`nav-link${theme === "dark" ? "" : " light-main-font"}`}>
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className={`nav-link${theme === "dark" ? "" : " light-main-font"}`}>
                      SERVICES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/pricing" className={`nav-link${theme === "dark" ? "" : " light-main-font"}`}>
                      PRICING
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className={`nav-link dropdown-toggle${theme === "dark" ? "" : " light-main-font"}`}
                    >
                      BLOG <CaretDownFill />{" "}
                    </Link>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className={`dropdown-menu drop-nav${theme === "dark" ? " dropDark" : " light-second-bg"}`}
                    >
                      <li className="drop-item">
                        <Link to="/blog" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          RIGHT SIDEBAR
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/blogleft" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          LEFT SIDEBAR
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          SINGLE POST
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className={`nav-link dropdown-toggle${theme === "dark" ? "" : " light-main-font"}`}
                    >
                      PAGES <CaretDownFill />
                    </Link>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className={`dropdown-menu drop-nav w-border${theme === "dark" ? " dropDark" : " light-second-bg"}`}
                    >
                      <li className="drop-item">
                        <Link to="register" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          REGISTER PAGE
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="login" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          LOGIN PAGE
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="shopcart" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          SHOPPING CART
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          SHOPPING CHECKOUT
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          FAQ PAGE
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/*" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          404 PAGE
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          SERVER ERROR PAGE
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          TERMS OF SERVICES
                        </Link>
                      </li>
                      <li className="drop-item">
                        <Link to="/" className={`drop-link${theme === "dark" ? " dropDarkLink" : " dropLightLink"}`}>
                          COMING SOON
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className={`nav-link${theme === "dark" ? " dropDarkLink" : " light-main-font"}`}>
                      CONTACT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className={`nav-link${theme === "dark" ? " dropDarkLink" : " light-main-font"}`}>
                      <CartFill />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div
                      className={`nav-link search-button${theme === "dark" ? "" : " light-main-font"}`}
                      onClick={() => setActiveSearch(true)}
                    >
                      <Search />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="search-area">
          <div
            className={
              activeSearch
                ? "container search-inputs open"
                : "container search-inputs"
            }
          >
            <form>
              <input
                type="text"
                id="search"
                placeholder="type your keyword and hit enter ..."
              />
            </form>
            <div
              className="close-search-bar"
              onClick={() => setActiveSearch(false)}
            >
              {" "}
              <X size="30px" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
