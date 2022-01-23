import React from "react";
import "./style/guarantees.css"
import GuaranteesBox from "./GuaranteesBox";
import iconOne from "../../images/guaranteesicon.png";
import iconTwo from "../../images/guaranteesicon2.png";
import iconThree from "../../images/guaranteesicon3.png";
import iconFour from "../../images/guaranteesicon4.png";
import iconFive from "../../images/guaranteesicon5.png";
import iconSix from "../../images/guaranteesicon6.png";
import { PlayFill } from "react-bootstrap-icons";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Guarantees() {

  const {theme} = React.useContext(ThemeContext);

  return (
    <section className={`guarantees${theme === "dark" ? "" : "bg-light"}`}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="guarantees-area">
              <GuaranteesBox
                header="STRONG SECURITY"
                title="Protection against DDoS attacks,
            full data encryption"
                imgUrl={iconOne}
                
              />
              <GuaranteesBox
                header="WORLD COVERAGE"
                title="Providing services in 99% countries
                around all the globe"
                imgUrl={iconTwo}
                
              />
              <GuaranteesBox
                header="PAYMENT OPTIONS"
                title="Popular methods: Visa, MasterCard,
                bank transfer, cryptocurrency"
                imgUrl={iconThree}
                
              />
              <GuaranteesBox
                header="MOBILE APP"
                title="Trading via our Mobile App, Available
                in Play Store & App Store"
                imgUrl={iconFour}
                
              />
              <GuaranteesBox
                header="COST EFFICIENCY"
                title="Reasonable trading fees for takers
                and all market makers"
                imgUrl={iconFive}
                
              />
              <GuaranteesBox
                header="HIGH LIQUIDITY"
                title="Fast access to high liquidity orderbook
                for top currency pairs"
                imgUrl={iconSix}
                
              />
            </div>
          </div>
          <div className="col-lg-4">
          <div className="guarantees-video">
          <div className="guarantees-video-title">
            <div role="button" className="play-button">
            <span>
            <PlayFill
            className="play-icon"
            size="70px"
            />
            </span>
               
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
