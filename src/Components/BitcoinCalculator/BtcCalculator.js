import React from "react";
import { CurrencyBitcoin } from "react-bootstrap-icons";
import "../BitcoinCalculator/bitcoincalculator.css"

export default function BtcCalculator() {
  return (
    <section className="calculator">
      <div className="calculator-area">
        <div className="container-lg">
          <div className="col-md-12 cal">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 className="cal-header my-4 text-center">
                <span>BITCOIN</span> CALCULATOR
              </h3>
              <p className="cal-text text-center">
                FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE
                CONVERTER
              </p>
              <div className=" row justify-content-center align-items-center">
                <div className="col-sm-5 text-center">
                  <div className=" row justify-content-center algin-items-center">
                    <input id="bitcoin" type="text" />
                    <div className="cal-icon">
                      {" "}
                      <CurrencyBitcoin size="35px" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 text-center">=</div>
                <div className="col-sm-5 text-center">
                  <input id="money" type="text" />
                  <select>
                    <option value="USD" key="">
                      USD
                    </option>
                  </select>
                </div>
                <span className="my-3 data-cal-info text-center">
                  * Data updated every 15 minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
