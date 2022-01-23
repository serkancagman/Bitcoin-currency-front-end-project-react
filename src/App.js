import {Routes, Route } from "react-router-dom";
import "./Components/responsive.css";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import { Services } from "./Pages/Services";
import { ErrorPage } from "./Pages/ErrorPage";
import { HeaderProvider } from "./Context/HeaderContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { CoinPriceProvider } from "./Context/CoinPriceContext";

function App() {
  

  return (
    <>
      <ThemeProvider>
        <CoinPriceProvider>
          <HeaderProvider>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route
              path="/"
              element={
                <Home/>
              }
            />
            <Route
              path="/about"
              element={
                <About/>
              }
            />
            <Route
              path="/services"
              element={
                <Services/>
              }
            />
          </Routes>
          </HeaderProvider>
          </CoinPriceProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
