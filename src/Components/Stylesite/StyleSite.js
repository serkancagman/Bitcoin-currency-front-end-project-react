import React, { useState } from "react";
import { DropletFill, GearWideConnected, X } from "react-bootstrap-icons";
import "./stylesite.css";
export default function StyleSite({ toggled, switchTheme }) {
  const [showSetting, setShowSetting] = useState(false);

  const getSetting = () => {
    setShowSetting(true);
  };
  const outSetting = () => {
    setShowSetting(false);
  };

  return (
    <div className="customize">
      <div
        onClick={() => getSetting()}
        className={`open-button p-3${showSetting ? " out-open-button" : ""}`}
      >
        <GearWideConnected width={25} height={25} />
      </div>
      <div
        className={`style-menu position-relative p-2 bg-light${
          showSetting ? " show-style-menu" : ""
        }`}
      >
        <div className="style-area d-flex flex-column">
          <h6 className="my-2 style-header">STYLE SWITCHER</h6>
          <div className="my-2 color-area d-flex flex-row">
            <DropletFill className="gold-color" width={30} height={30} />
            <DropletFill className="blue-select" width={30} height={30} />
          </div>
          <h6>BODY SKIN</h6>
          <div
            onClick={switchTheme}
            className={`body-style${toggled ? " night" : ""}`}
          >
            <div className="notch"></div>
            <div className="shapes">
              <div className="shape sm"></div>
              <div className="shape sm"></div>
              <div className="shape md"></div>
              <div className="shape lg"></div>
            </div>
          </div>
          <div role="button" onClick={()=> outSetting()} className="close-setting">
            <X size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
