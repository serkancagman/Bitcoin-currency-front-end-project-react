import React from "react";
import "./aboutcomponent.css";
import BitChain from "../../images/bitchain.png";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { Member } from "./Member";
import Experts from "../Experts/Experts";
import { AboutTop } from "./AboutTop";
export const AboutFirstComponent = ({toggled}) => {
  return (
    <>
      <AboutTop 
      header="ABOUT"
      headerSecond="US"
      bottomHeader="ABOUT"
      toggled={toggled}
      />
      <section className={`we-are-about${toggled ? "" : " bg-light-area"}`}>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <img className="img-fluid" src={BitChain} alt="" />
            </div>
            <div className="col-md-6 we-are-all">
              <h5 className={`we-are-header${toggled ? "" : " text-main-dark"}`}>WE ARE BAYYA</h5>
              <p className={`info-about${toggled ? "" : " text-second-dark"}`}>
                A place for everyone who wants to simply buy and sell Bitcoins.
                Deposit funds using your Visa/MasterCard or bank transfer.
                Instant buy/sell of Bitcoins at fair price is guaranteed.
                Nothing extra. Join over 700,000 users from all over the world
                satisfied with our services.
              </p>
              <div className="attention">
              <h5 className={`we-are-header${toggled ? "" : " text-main-dark"}`}>
              <ExclamationTriangleFill
              className="warning-icon"
              /> RISK WARNING
              </h5>
              <p className={`info-about${toggled ? "" : " text-second-dark"}`}>
              Bitcoin is not legal tender and is not backed by any government. Accounts and value balances are not subject to any government backed deposit insurance or any other government protections.
              </p>
              </div>
              <button className="info-btn">OUR SERVICES</button>
            </div>
          </div>
        </div>
      </section>
      <Member
      toggled={toggled}
      />
      <Experts
      toggled={toggled}
      />
    </>
  );
};
