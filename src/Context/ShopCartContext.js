import React from "react";

export const ShopCartContext = React.createContext();

export const ShopCartProvider = ({ children }) => {


    const [quantity, setQuantity] = React.useState(1);
    const price =589.31;
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
  
    },[quantity,price,mainPrice,total]);


    const values = {
        quantity,
        handleChange,
        total,
        mainPrice,
        price,
        setQuantity

    }

    return <ShopCartContext.Provider value={values}>{children}</ShopCartContext.Provider>
}