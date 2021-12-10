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

export default function Navbars() {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md">
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
                    <a href="/" className="nav-link">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
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
                      className="nav-link dropdown-toggle"
                    >
                      BLOG <CaretDownFill />{" "}
                    </a>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className="dropdown-menu drop-nav"
                    >
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          RIGHT SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          LEFT SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          GRID NO SIDEBAR
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
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
                      className="nav-link dropdown-toggle"
                    >
                      PAGES <CaretDownFill />
                    </a>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className="dropdown-menu drop-nav w-border"
                    >
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          REGISTER PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          LOGIN PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          SHOPPING CART
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          SHOPPING CHECKOUT
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          FAQ PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          404 PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          SERVER ERROR PAGE
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          TERMS OF SERVICES
                        </a>
                      </li>
                      <li className="drop-item">
                        <a href="/" className="drop-link">
                          COMING SOON
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      CONTACT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <CartFill />
                    </a>
                  </li>
                  <li className="nav-item">
                    <div
                      className="search-button nav-link"
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
