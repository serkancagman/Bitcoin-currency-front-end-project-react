import React from "react";
import "./style/services.css"
import serviceIcon from "../../images/guaranteesicon.png"
import serviceIcon2 from "../../images/guaranteesicon2.png"
import serviceIcon3 from "../../images/guaranteesicon3.png"
import serviceIcon4 from "../../images/guaranteesicon4.png"
import serviceIcon5 from "../../images/guaranteesicon5.png"
import serviceIcon6 from "../../images/guaranteesicon6.png"


import { ServiceItem } from "./ServiceItem";
import { ThemeContext } from "../../Context/ThemeContext";

export const ServicesMain = () => {
  const {theme} = React.useContext(ThemeContext)


  return (
    <section className={`main-services ${theme === "dark" ? "" : " lightServices"}`}>
      <div className="container-lg">
        <div className="row flex-wrap justify-content-center align-items-center">
          
        <ServiceItem 
        serviceIcon={serviceIcon}
        serviceHeader="Bitcoin Escrow Service"
        serviceInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ServiceItem 
        serviceIcon={serviceIcon2}
        serviceHeader="Bitcoin Mining"
        serviceInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ServiceItem 
        serviceIcon={serviceIcon3}
        serviceHeader="Software Development"
        serviceInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ServiceItem 
        serviceIcon={serviceIcon4}
        serviceHeader="Bitcoin Transaction"
        serviceInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ServiceItem 
        serviceIcon={serviceIcon5}
        serviceHeader="Bitcoin Exchange"
        serviceInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ServiceItem 
        serviceIcon={serviceIcon6}
        serviceHeader="Bitcoin Investment"
        serviceInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />

        </div>
      </div>
    </section>
  );
};
