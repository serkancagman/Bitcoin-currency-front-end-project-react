import React from "react";
import Wallet from "../../images/walleticon.png";
import Change from "../../images/changeicon.png";
import Pocket from "../../images/bitcoinpocketicon.png";
import Bitchain from "../../images/bitchain.png";
import "../AboutUs/aboutus.css"
import { useState } from "react";

<<<<<<< HEAD
export default function AboutUs() {
=======
export default function AboutUs({toggled}) {
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
  const [elementOne, setElementOne] = useState(true);
  const [elementTwo, setElementTwo] = useState(false);
  const [elementThree, setElementThree] = useState(false);

  const showElementOne = () => {
    setElementOne(true);
    setElementTwo(false);
    setElementThree(false);
  };
  const showElementTwo = () => {
    setElementOne(false);
    setElementTwo(true);
    setElementThree(false);
  };
  const showElementThree = () => {
    setElementOne(false);
    setElementTwo(false);
    setElementThree(true);
  };

  return (
<<<<<<< HEAD
    <section className="about-us">
      <div className="container-lg">
        <div className="about-cards">
        <div className="card-main-header">
=======
    <section className={`about-us${toggled ? "" : " bg-second"}`}>
      <div className="container-lg">
        <div className="about-cards">
        <div className={`card-main-header${toggled ? "" : " bg-light"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-4">
              <div className="row icon-flex justify-content-center ">
                <img className="card-icon " src={Wallet} alt="" />
                <div className="card-info">
<<<<<<< HEAD
                  <h3 className="card-main">Download Bitcoin Wallet</h3>
                  <p>
=======
                  <h3 className={`card-main${toggled ? "" : " text-main-dark"}`}>Download Bitcoin Wallet</h3>
                  <p className={toggled ? "" : " text-second-dark"}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                    Get it on PC or Mobile to create, send and receive bitcoins.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="row icon-flex justify-content-center ">
                <img className="card-icon" src={Change} alt="" />
                <div className="card-info">
<<<<<<< HEAD
                  <h3 className="card-main">Buy/Sell with Wallet</h3>
                  <p>Enter receiver's address, specify the amount and send.</p>
=======
                  <h3 className={`card-main${toggled ? "" : " text-main-dark"}`}>Buy/Sell with Wallet</h3>
                  <p className={toggled ? "" : " text-second-dark"}>Enter receiver's address, specify the amount and send.</p>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="row icon-flex justify-content-center ">
                <img className="card-icon" src={Pocket} alt="" />
                <div className="card-info">
<<<<<<< HEAD
                  <h3 className="card-main">Add coins to your Wallet</h3>
                  <p>
=======
                  <h3 className={`card-main${toggled ? "" : " text-main-dark"}`}>Add coins to your Wallet</h3>
                  <p className={toggled ? "" : " text-main-dark"}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                    Add bitcoins you’ve created or exchanged via credit card.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="about-us-main">
          <div className="col-md-12">
<<<<<<< HEAD
            <h2 className="about-header my-4">
=======
            <h2 className={`about-header my-4${toggled ? "" : " text-main-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
              ABOUT <span>US</span>
            </h2>
            <div className="d-flex justify-content-center align-items-center ">
              <span className="line "></span>
<<<<<<< HEAD
              <p className="about-title">
=======
              <p className={`about-title${toggled ? "" : " text-second-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER
                BITCOIN RELATED INFO
              </p>
              <span className="line"></span>
            </div>
          </div>
          <div className="row py-5 justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <img className="img-fluid my-2" src={Bitchain} alt="" />
            </div>
            <div className="col-lg-6 we-are-area">
<<<<<<< HEAD
              <h3 className="about-inner-header">WE ARE BAYYA</h3>
              <p className="about-inner-text">
=======
              <h3 className={`about-inner-header${toggled ? "" : " text-main-dark"}`}>WE ARE BAYYA</h3>
              <p className={`about-inner-text${toggled ? "" : " text-second-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                A place for everyone who wants to simply buy and sell Bitcoins.
                Deposit funds using your Visa/MasterCard or bank transfer.
                Instant buy/sell of Bitcoins at fair price is guaranteed.
                Nothing extra. Join over 700,000 users from all over the world
                satisfied with our services.
              </p>
              <div className="our-info my-2">
                <h4 
                role="button" 
                onClick={()=> showElementOne()}
                className={elementOne ? "element-header elementselect": "element-header" }>
                
                OUR MISSION
                </h4>
                <h4 role="button" onClick={()=> showElementTwo()} className={elementTwo ? "element-header elementselect": "element-header" }>
                  OUR ADVANTAGES{" "}
                </h4>
                <h4 role="button" onClick={()=> showElementThree()} className={elementThree ? "element-header elementselect": "element-header" }>
                  OUR GUARANTEES
                </h4>
              </div>
<<<<<<< HEAD
              <div className="element-result">
=======
              <div className={`element-result${toggled ? "" : " text-second-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
                <p className={elementOne ? "element-result-text result-title in" : "element-result-text"}>
                  Bitcoin is based on a protocol known as the blockchain, which
                  allows to create, transfer and verify ultra-secure financial
                  data without interference of third parties.
                </p>
                <p className={elementTwo ? "element-result-text result-title in" : "element-result-text"}>
                  Our mission as an official partner of Bitcoin Foundation is to
                  help you enter and better understand the world of #1
                  cryptocurrency and avoid any issues you may encounter.
                </p>
                <p className={elementThree ? "element-result-text result-title in" : "element-result-text"}>
                  We are here because we are passionate about open, transparent
                  markets and aim to be a major driving force in widespread
                  adoption, we are the first and the best in cryptocurrency.
                </p>
              </div>
              <button className="about-button my-3">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
