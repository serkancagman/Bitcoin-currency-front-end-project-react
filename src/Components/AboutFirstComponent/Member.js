import React from "react";

export const Member = ({toggled}) => {
  return (
    <section className={`member-area${toggled ? "" : " bg-light-area"}`}>
      <div className="member-layout">
        <div className="member-main">
          <div className="container-lg">
            <div className={`member-sec${toggled ? "" : " bg-light"}`}>
              <div className="col-md-12 text-center">
                <h1 className={`member-header${toggled ? "" : " text-main-dark"}`}>
                  BAYYA<span className="member-orange"> NUMBERS</span>
                </h1>
                <p className="member-inner">
                  LEADING CRYPTOCURRENCY EXCHANGE SINCE DAY ONE OF BITCOIN
                  DISTRIBUTION
                </p>
                <div className="my-5 row justify-content-center align-items-center">
                  <div className="col-lg-3 col-md-6 col-sm-12 text-center taks">
                    <h1 className={`number-header${toggled ? "" : " text-main-dark"}`}>$77.45B</h1>
                    <p className={`number-bottom${toggled ? "" : " text-main-dark"}`}>MARKET CAP</p>
                    
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-center taks">
                    <h1 className={`number-header${toggled ? "" : " text-main-dark"}`}>165k</h1>
                    <p className={`number-bottom${toggled ? "" : " text-main-dark"}`}>DAILY TRANSACTIONS</p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-center taks">
                    <h1 className={`number-header${toggled ? "" : " text-main-dark"}`}>1726</h1>
                    <p className={`number-bottom${toggled ? "" : " text-main-dark"}`}>ACTIVE ACCOUNTS</p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <h1 className={`number-header${toggled ? "" : " text-main-dark"}`}>17</h1>
                    <p className={`number-bottom${toggled ? "" : " text-main-dark"}`}>YEARS ON THE MARKET</p>
                  </div>
                </div>
                <div className="number-btn d-flex justify-content-center align-items-center">
                      <button className="see-price mx-2">SEE PRICING</button>
                      or
                      <button className="register-price mx-2">REGISTER NOW</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
