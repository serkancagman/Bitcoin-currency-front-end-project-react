import React from "react";
import PersonOne from "../../images/member1.jpg";
import PersonTwo from "../../images/member2.jpg";
import PersonThree from "../../images/member3.jpg";
import PersonFour from "../../images/member4.jpg";
import Persons from "./Persons";
import "./experts.css"
export default function Experts() {
  return (
    <section className="experts">
      <div className="container-lg">
        <h2 className="text-center person-header">
          OUR <span>EXPERTS</span>
        </h2>
        <div className="d-flex my-5 justify-content-center align-items-center title-area">
              <span className="line "></span>
              <p className="about-title">
              A TALENTED TEAM OF CRYPTOCURRENCY EXPERTS BASED IN LONDON
              </p>
              <span className="line"></span>
            </div>
        <div className="row justify-content-center align-items-center">
          <Persons
          imgUrl={PersonOne}
          personName="LINA MARZOUKI"
          job="Ceo Founder"
          />
          <Persons
          imgUrl={PersonTwo}
          personName="MARCO VERRATTI"
          job="Director"
          />
          <Persons
          imgUrl={PersonThree}
          personName="EMILIA BELLA"
          job="Bitcoin Consultant"
          />
          <Persons
          imgUrl={PersonFour}
          personName="ANTONIO CONTE"
          job="Bitcoin Developer"
          />
        </div>
      </div>
    </section>
  );
}
