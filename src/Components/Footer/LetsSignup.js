import React from "react";
import Payment from "../../images/payments.png";
import { Link } from "react-router-dom";
export default function LetsSignup() {
  return (
    <>
      <div className="lets-come">
        <div className="come-back">
          <div className="come-back-inner">
            <div className="container-lg h-100">
              <div className="col-sm-12 h-100">
                <div className="come-words ">
                  <h6 className="come-header">
                    GET STARTED TODAY WITH <span> BITCOIN</span>
                  </h6>
                  <p className="come-title">
                    Open account for free and start trading Bitcoins!
                  </p>
                  <button className="register-btn-footer">REGISTER NOW</button>
                </div>
              </div>
            </div>
            <div className="footer-links">
              <div className="container-lg">
                <div className="row justify-content-center ">
                  <div className="col-xs-4 col-sm-4 col-xl-2">
                    <h5 className="footer-nav-header">OUR COMPANY</h5>
                    <ul className="footer-nav">
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          HOME
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/services">
                          SERVICES
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          BLOG
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          ABOUT
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          PRICING
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className=" col-sm-4 col-xl-2">
                    <h5 className="footer-nav-header">HELP & SUPPORT</h5>
                    <ul className="footer-nav">
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          FAQ
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          TERMS OF SERVICES
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          404 PAGE
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          REGISTER
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          LOGIN
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          COMING SOON
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className=" col-sm-4 col-xl-2">
                    <h5 className="footer-nav-header">CONTACT US</h5>
                    <ul className="footer-nav">
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          CONTACT@SERKAN.COM
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          +90 539420 2962
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          TURKEY, ISTANBUL
                        </Link>
                      </li>
                      <li className="footer-item">
                        <Link className="footer-link" to="/">
                          MON-SAT 08AM - 05PM
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 right-area-footer col-sm-12">
                    <div className="d-flex flex-column">
                      <div className="row justify-content-center flex-wrap align-items-center">
                        <div className="col-sm-6 col-lg-6 text-center">
                          <div className="footer-right-header price-right">
                            195,432K
                          </div>
                          <p className="right-footer-title">MARKET CAP</p>
                        </div>
                        <div className="col-sm-6 col-lg-6 text-center">
                          <div className="footer-right-header">243K</div>
                          <p className="right-footer-title">
                            DAILY TRANSACTIONS
                          </p>
                        </div>
                        <div className="col-sm-6 col-lg-6 text-center">
                          <div className="footer-right-header">369K</div>
                          <p className="right-footer-title">ACTIVE ACCOUNTS</p>
                        </div>
                        <div className="col-sm-6 col-lg-6 text-center">
                          <div className="footer-right-header">127</div>
                          <p className="right-footer-title">
                            SUPPORTED COUNTRIES
                          </p>
                        </div>
                      </div>

                      <div className="payment-area col-sm-12">
                        <h5>SUPPORTED PAYMENTS</h5>
                        <img
                          width="150"
                          className="img-fluid"
                          src={Payment}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright p-1 w-100 text-center ">
              <h6>
                Copyright © 2021 Bayya All Rights Reserved | Created with Love
                by Serkan
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
