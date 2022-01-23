import React from "react";
import { ThemeContext } from "../../Context/ThemeContext";
export default function GuaranteesBox({ imgUrl, header, title }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="col-md-6">
      <div className="guarantees-item">
        <img src={imgUrl} alt="" />
        <h3 className={`guarantees-header${theme === "dark" ? "" : " text-dark-main"}`}>
          {header}
        </h3>
        <p className={`guarantees-title${theme === "dark" ? "" : " text-second-dark"}`}>
          {title}
        </p>
      </div>
    </div>
  );
}
