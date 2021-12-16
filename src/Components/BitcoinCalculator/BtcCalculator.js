import React, { useState } from "react";
import { CurrencyBitcoin } from "react-bootstrap-icons";
import "../BitcoinCalculator/bitcoincalculator.css"

export default function BtcCalculator({toggled,coinPrice}) {

  const [newPrice,setNewPrice] = useState("");
  const changeMoney = ({target:{value}}) =>{
    const inputPrice = Number(value.trim());
    const calculator = (inputPrice / coinPrice).toFixed(5);
    setNewPrice(calculator)
  }

  return (
    <section className={`calculator${toggled ? "" : " bg-main-light"}`}>
    <div className="calculator-layout">
      <div className="calculator-area">
        <div className="container-lg">
          <div className={`cal col-md-12${toggled ? "" : " bg-light"}`}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 className={`cal-header my-4 text-center${toggled ? "" : " text-dark-main"}`}>
                <span>BITCOIN</span> CALCULATOR
              </h3>
              <p className={`cal-text text-center${toggled ? "" : " text-dark-second"}`}>
                FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE
                CONVERTER
              </p>
              <div className=" row justify-content-center align-items-center">
                <div className="col-sm-5 text-center">
                  <div className=" d-flex justify-content-center algin-items-center">
                  <input onChange={changeMoney} id="money" type="text" />
                  <select>
                    <option value="USD" key="">
                      USD
                    </option>
                  </select>
                    
                  </div>
                </div>
                <div className="col-sm-2 text-center">=</div>
                <div className="col-sm-5 text-center">
                <div className=" d-flex justify-content-center algin-items-center">
                <input defaultValue={newPrice}  id="bitcoin" type="text" />
                    <div className="cal-icon">
                      {" "}
                      <CurrencyBitcoin size="35px" />
                    </div>
                </div>
                  
                </div>
                <span className="my-3 data-cal-info text-center">
                  * Data updated every 15 minutes
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
