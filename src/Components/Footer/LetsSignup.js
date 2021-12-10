import React from "react";
import Payment from "../../images/payments.png";

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
                        <a className="footer-link" href="/">
                          HOME
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          SERVICES
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          BLOG
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          ABOUT
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          PRICING
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" col-sm-4 col-xl-2">
                    <h5 className="footer-nav-header">HELP & SUPPORT</h5>
                    <ul className="footer-nav">
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          FAQ
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          TERMS OF SERVICES
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          404 PAGE
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          REGISTER
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          LOGIN
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          COMING SOON
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" col-sm-4 col-xl-2">
                    <h5 className="footer-nav-header">CONTACT US</h5>
                    <ul className="footer-nav">
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          CONTACT@SERKAN.COM
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          +90 539420 2962
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          TURKEY, ISTANBUL
                        </a>
                      </li>
                      <li className="footer-item">
                        <a className="footer-link" href="/">
                          MON-SAT 08AM - 05PM
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 right-area-footer col-sm-12">
                    <div className="d-flex flex-column">
                      <div className="row justify-content-center flex-wrap align-items-center">
                        <div className="col-sm-6 col-lg-6 text-center">
                          <div className="footer-right-header price-right">195,432K</div>
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
