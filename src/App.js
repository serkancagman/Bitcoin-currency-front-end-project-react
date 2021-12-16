import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/responsive.css";
import { useState, useEffect } from "react";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import { Services } from "./Pages/Services";
import { ErrorPage } from "./Pages/ErrorPage";
import axios from "axios";

function App() {
  const [toggled, setToggled] = useState(true);
  const handleSwitchTheme = () => {
    setToggled((s) => !s);
  };
  const [coinPrice, setCoinPrice] = useState("");
  const [coinVolume, setCoinVolume] = useState("");
  const [coinDayPrice, setCoinDayPrice] = useState("");

  useEffect(() => {
    const getData = async () => {
      const baseURL =
        "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true";
      const response = await axios(baseURL);
      setCoinPrice(response.data.market_data.current_price.usd);
      setCoinVolume(
        Math.floor(
          response.data.market_data.price_change_percentage_24h * 100,
        ) / 100,
      );
      setCoinDayPrice(Math.floor(response.data.market_data.high_24h.usd));
    };
    getData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/"
            element={<Home toggled={toggled}
             switchTheme={handleSwitchTheme}
             coinPrice={coinPrice}
             coinVolume={coinVolume}
             coinDayPrice={coinDayPrice}
             />}
          />
          <Route
            path="/about"
            element={
              <About toggled={toggled}
               switchTheme={handleSwitchTheme}
                            coinPrice={coinPrice}
             coinVolume={coinVolume}
             coinDayPrice={coinDayPrice}
                />
            }
          />
          <Route
            path="/services"
            element={
              <Services toggled={toggled} switchTheme={handleSwitchTheme}
                           coinPrice={coinPrice}
             coinVolume={coinVolume}
             coinDayPrice={coinDayPrice}
               />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
