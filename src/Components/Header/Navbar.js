import React from "react";
import Logo from "../../images/main-logo.png";
import {
  CaretDownFill,
  CartFill,
  Search,
  List,
  X,
} from "react-bootstrap-icons";
import { useState } from "react";

export default function Navbars({toggled}) {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <>
      <nav className={`navbar navbar-expand-md${toggled ? "" : " light-second-bg"}`}>
        <div className="navbar-area w-100">
          <div className="container-lg">
            <div className="navbar-wrapper">
              <div className="row w-100 justify-content-between align-items-center">
                <a className="navbar-brand-mobile" href="/">
                  <img className="top-logo" src={Logo} alt="" />
                </a>

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
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
                      PRICING
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className={`nav-link dropdown-toggle${toggled ? "" : " light-main-font"}`}
                    >
                      BLOG <CaretDownFill />{" "}
                    </a>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className={`dropdown-menu drop-nav${toggled ? "" : " light-second-bg"}`}
                    >
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          RIGHT SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          LEFT SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          GRID NO SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          SINGLE POST
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className={`nav-link dropdown-toggle${toggled ? "" : " light-main-font"}`}
                    >
                      PAGES <CaretDownFill />
                    </a>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className={`dropdown-menu drop-nav w-border${toggled ? "" : " light-second-bg"}`}
                    >
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          REGISTER PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          LOGIN PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          SHOPPING CART
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          SHOPPING CHECKOUT
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          FAQ PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          404 PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          SERVER ERROR PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          TERMS OF SERVICES
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
                          COMING SOON
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
                      CONTACT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
                      <CartFill />
                    </a>
                  </li>
                  <li className="nav-item">
                    <div
                      className={`nav-link search-button${toggled ? "" : " light-main-font"}`}
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
