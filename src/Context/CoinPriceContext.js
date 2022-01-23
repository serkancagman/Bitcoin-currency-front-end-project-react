import React from "react";

import axios from "axios";

export const CoinPriceContext = React.createContext();

export const CoinPriceProvider = ({ children }) => {

  const [coinPrice, setCoinPrice] = React.useState("");
  const [coinVolume, setCoinVolume] = React.useState("");
  const [coinDayPrice, setCoinDayPrice] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const getData = async () => {
      const baseURL =
        "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
      const response = await axios(baseURL);
      setCoinPrice(response.data.market_data.current_price.usd);
      setCoinVolume(
        Math.floor(
          response.data.market_data.price_change_percentage_24h * 100
        ) / 100
      );
      setCoinDayPrice(Math.floor(response.data.market_data.high_24h.usd));
      setIsLoading(false)
    };
    getData();
  }, []);

  const values = {
    coinPrice,
    coinVolume,
    coinDayPrice,
    isLoading
  };

  return  <CoinPriceContext.Provider value={values}>{children}</CoinPriceContext.Provider>
  
};
