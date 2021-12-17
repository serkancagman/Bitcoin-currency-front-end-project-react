import React from "react";
import PersonOne from "../../images/member1.jpg";
import PersonTwo from "../../images/member2.jpg";
import PersonThree from "../../images/member3.jpg";
import PersonFour from "../../images/member4.jpg";
import Persons from "./Persons";
import "./experts.css"
<<<<<<< HEAD
export default function Experts() {
  return (
    <section className="experts">
      <div className="container-lg">
        <h2 className="text-center person-header">
=======
export default function Experts({toggled}) {
  return (
    <section className={`experts${toggled ? "" : " bg-second"}`}>
      <div className="container-lg">
        <h2 className={`text-center person-header${toggled ? "" : " text-main-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
          OUR <span>EXPERTS</span>
        </h2>
        <div className="d-flex my-5 justify-content-center align-items-center title-area">
              <span className="line "></span>
<<<<<<< HEAD
              <p className="about-title">
=======
              <p className={`about-title${toggled ? "" : " text-second-dark"}`}>
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
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
