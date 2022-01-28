import React from "react";
import "./style/shopcart.css";
const ShoppingCart = () => {
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(589.31);
  const [total, setTotal] = React.useState(price);
  const [mainPrice, setMainPrice] = React.useState(607,31);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  React.useEffect(() => {
    let totalPrice = quantity * price;
    let LastPrice = totalPrice * 2 /100  + total;
    if(quantity <= 0){
        setQuantity(1);}

    setTotal(Math.round(totalPrice * 100) / 100);
    setMainPrice(LastPrice)

  },[quantity,price,mainPrice]);

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
                  <span><i className="bi bi-trash"></i></span>
                </td>
                <td>
                  <span className="shopProduct">0.179 BTC</span>
                </td>
                <td className="shopPrice">${price}</td>
                <td className="shopQuantity">
                  <div className="cartQuantity">
                    <input type="button" id="minusItem" onClick={()=> setQuantity(Number(quantity) -1)} value="-" />
                    <input
                      type="text"
                      value={quantity}
                      maxLength="2"
                      onChange={handleChange}
                      id="quantity"
                    />
                    <input type="button" onClick={()=> setQuantity(Number(quantity) +1)} id="plusItem" value="+" />
                  </div>
                </td>
                <td className="totalPrice">${total}</td>
              </tr>
            </tbody>
          </table>
          <div className="cartOption">
            <input type="text" placeholder="COUPON CODE" name="coupon" id="couponInput" />
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
                    <span className="totalPriceValueLast">${Math.round(mainPrice * 100)/100}</span>
                </div>
                </div>
            <div className="cartBtn">
                <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
