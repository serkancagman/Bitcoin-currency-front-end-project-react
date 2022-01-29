import React from "react";
import { Link } from "react-router-dom";
import "./style/shopcheckout.css";
import { CountryData } from "../Helpers/CountryData";
import { ShopCartContext } from "../../Context/ShopCartContext";
import PaymentLogos from "../../images/payments.png";

const ShopCartCheckout = () => {
  const { price, mainPrice, total } = React.useContext(ShopCartContext);

  return (
    <section className="checkout">
      <div className="container">
        <div className="isCustomer">
          <h6 className="isCustomerHeader">
            Returning Customer ?{" "}
            <Link className="clicktoLogin" to="login">
              Click here to login.
            </Link>
          </h6>
        </div>
        <h5 className="checkoutHeader">BILLING DETAILS</h5>
        <div className="row g-4 justify-content-center flex-wrap">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="company"
              placeholder="COMPANY"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="email"
              placeholder="EMAIL"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="phone"
              placeholder="PHONE"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <select name="countries" className="checkoutInput text-start">
              {CountryData.map((country, i) => {
                return (
                  <option key={i} value={country.code}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-lg-12">
            <textarea
              className="w-100 adressTitle"
              name="adress"
              placeholder="STREET ADRESS"
              id=""
            ></textarea>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="apartment"
              placeholder="APARTMENT, SUITE , UNIT ETC. (OPTIONAL)"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="city"
              placeholder="TOWN/CITY"
              className="checkoutInput"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              name="postcode"
              placeholder="POST CODE"
              className="checkoutInput"
            />
          </div>
          <div className="createAccountRadio">
            <input type="checkbox" name="createAccount" /> Create an Account?
          </div>
        </div>

        <div className="row g-4 my-4 justfiy-content-center">
          <div className="col-lg-6 col-md-12">
            <table className="w-100">
              <colgroup>
                <col className="col-sm-6" />
                <col className="col-sm-6" />
              </colgroup>
              <thead className="checkoutThead">
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="checkoutTbody">
                <tr>
                  <td>0.179 BTC</td>
                  <td>${price}</td>
                </tr>
                <tr>
                  <th className="checkoutTH">SUBTOTAL</th>
                  <td>${total}</td>
                </tr>
                <tr>
                  <th className="checkoutTH">PRICE WITHOUT TAX</th>
                  <td>${total}</td>
                </tr>
                <tr>
                  <th className="checkoutTH">TOTAL</th>
                  <td>${Math.round(mainPrice * 100) / 100}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="checkoutPayment">
              <form action="">
                <div className="cheque">
                  <div className="chequeInput">
                    <input className="me-2" type="radio" name="payment" id="cheque" />
                     Cheque Payment
                  </div>

                  <span>
                    Please send us your cheque by Post to : 123 Disney Street
                    Slim Av. Brooklyn Bridge, NY, New York PO BOX 152
                  </span>
                </div>
                <div className="cheque">
                  <div className="chequeInput">
                    <input className="me-2" type="radio" name="payment" id="cheque" />
                    PayPal <span className="mx-3 paypalHeader">What is Paypal ?</span>
                  </div>

                  <img width="300" className="img-fluid" src={PaymentLogos} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCartCheckout;
