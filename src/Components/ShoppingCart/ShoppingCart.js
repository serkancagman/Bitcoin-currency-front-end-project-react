import React from "react";
import "./style/shopcart.css";
import { ShopCartContext } from "../../Context/ShopCartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { quantity, handleChange, mainPrice, total, price, setQuantity } =
    React.useContext(ShopCartContext);

  return (
    <section className="py-5" id="shopCart">
      <div className="container">
        <div className="col-sm-12">
          <table className="table text-white">
            <thead>
              <tr className="tHeader">
                <th className="trashHeader"></th>
                <th className="cartProductHeader">PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody className="tableItems">
              <tr className="fs-6">
                <td className="deleteCartItem text-center">
                  <span>
                    <i className="bi bi-trash"></i>
                  </span>
                </td>
                <td>
                  <span className="shopProduct">0.179 BTC</span>
                </td>
                <td className="shopPrice">${price}</td>
                <td className="shopQuantity">
                  <div className="cartQuantity">
                    <input
                      type="button"
                      id="minusItem"
                      onClick={() => setQuantity(Number(quantity) - 1)}
                      value="-"
                    />
                    <input
                      type="text"
                      value={quantity}
                      maxLength="2"
                      onChange={handleChange}
                      id="quantity"
                    />
                    <input
                      type="button"
                      onClick={() => setQuantity(Number(quantity) + 1)}
                      id="plusItem"
                      value="+"
                    />
                  </div>
                </td>
                <td className="totalPrice">${total}</td>
              </tr>
            </tbody>
          </table>
          <div className="cartOption">
            <input
              type="text"
              placeholder="COUPON CODE"
              name="coupon"
              id="couponInput"
            />
            <button className="couponBtn">APPLY COUPON</button>
          </div>
          <div className="cartTotal">
            <h6 className="totalHeader">CART TOTALS</h6>
            <div className="totalPrice">
              <span className="totalPriceText">Price Without Tax</span>
              <span className="totalPriceValue">${total}</span>
            </div>
            <div className="totalMainPrice">
              <span className="totalPriceTitle">Total</span>
              <span className="totalPriceValueLast">
                ${Math.round(mainPrice * 100) / 100}
              </span>
            </div>
          </div>
          <div className="cartBtn">
            <Link to="/checkout" className="checkoutBtn">PROCEED TO CHECKOUT</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
