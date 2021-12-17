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

<<<<<<< HEAD
export default function Navbars() {
=======
export default function Navbars({toggled}) {
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <>
<<<<<<< HEAD
      <nav className="navbar navbar-expand-md">
=======
      <nav className={`navbar navbar-expand-md${toggled ? "" : " light-second-bg"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
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
<<<<<<< HEAD
                    <a href="/" className="nav-link">
=======
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
<<<<<<< HEAD
                    <a href="/" className="nav-link">
=======
                    <a href="/about" className={`nav-link${toggled ? "" : " light-main-font"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
<<<<<<< HEAD
                    <a href="/" className="nav-link">
=======
                    <a href="/services" className={`nav-link${toggled ? "" : " light-main-font"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
<<<<<<< HEAD
                    <a href="/" className="nav-link">
=======
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
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
<<<<<<< HEAD
                      className="nav-link dropdown-toggle"
=======
                      className={`nav-link dropdown-toggle${toggled ? "" : " light-main-font"}`}
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                    >
                      BLOG <CaretDownFill />{" "}
                    </a>
                    <ul
                      aria-labelledby="dropdownMenuLink"
<<<<<<< HEAD
                      className="dropdown-menu drop-nav"
                    >
                      <li className="drop-item">
                        <a href="/" className="drop-link">
=======
                      className={`dropdown-menu drop-nav${toggled ? "" : " light-second-bg"}`}
                    >
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          RIGHT SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          LEFT SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          GRID NO SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
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
<<<<<<< HEAD
                      className="nav-link dropdown-toggle"
=======
                      className={`nav-link dropdown-toggle${toggled ? "" : " light-main-font"}`}
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                    >
                      PAGES <CaretDownFill />
                    </a>
                    <ul
                      aria-labelledby="dropdownMenuLink"
<<<<<<< HEAD
                      className="dropdown-menu drop-nav w-border"
                    >
                      <li className="drop-item">
                        <a href="/" className="drop-link">
=======
                      className={`dropdown-menu drop-nav w-border${toggled ? "" : " light-second-bg"}`}
                    >
                      <li className="drop-item">
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          REGISTER PAGE
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          LOGIN PAGE
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          SHOPPING CART
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          SHOPPING CHECKOUT
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          FAQ PAGE
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          404 PAGE
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          SERVER ERROR PAGE
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          TERMS OF SERVICES
                        </a>
                      </li>
                      <li className="drop-item">
<<<<<<< HEAD
                        <a href="/" className="drop-link">
=======
                        <a href="/" className={`drop-link${toggled ? "" : " text-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                          COMING SOON
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
<<<<<<< HEAD
                    <a href="/" className="nav-link">
=======
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                      CONTACT
                    </a>
                  </li>
                  <li className="nav-item">
<<<<<<< HEAD
                    <a href="/" className="nav-link">
=======
                    <a href="/" className={`nav-link${toggled ? "" : " light-main-font"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                      <CartFill />
                    </a>
                  </li>
                  <li className="nav-item">
                    <div
<<<<<<< HEAD
                      className="search-button nav-link"
=======
                      className={`nav-link search-button${toggled ? "" : " light-main-font"}`}
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
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
