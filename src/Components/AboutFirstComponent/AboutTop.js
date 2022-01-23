import React from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
export const AboutTop = ({header,headerSecond,bottomHeader}) => {

  const { theme} = React.useContext(ThemeContext);

    return (
        <section className="about-first-item">
        <div className={`about-overlay${theme === "dark" ? "" : " about-after-light"}`}>
          <div className="container-lg">
            <div className="col-md-12 text-center">
              <div className="about-item-area">
                <h3 className="about-welcome">
                  {header} <span>{headerSecond}</span>
                </h3>
                <hr />
                <h6 className="about-bottom-info">
                  {" "}
                  <span className="about-bottom-first">HOME</span> / {bottomHeader}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
