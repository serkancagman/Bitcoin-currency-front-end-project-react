import "./Components/responsive.css";
import { HeaderProvider } from "./Context/HeaderContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { CoinPriceProvider } from "./Context/CoinPriceContext";
import { PreLoaderProvider } from "./Context/PreLoader";

import RouterMain from "./Router/RouterMain";
import { ShopCartProvider } from "./Context/ShopCartContext";

function App() {
  return (
    <>
      <PreLoaderProvider>
        <ThemeProvider>
          <CoinPriceProvider>
            <HeaderProvider>
              <ShopCartProvider>
                <RouterMain />
              </ShopCartProvider>
            </HeaderProvider>
          </CoinPriceProvider>
        </ThemeProvider>
      </PreLoaderProvider>
    </>
  );
}

export default App;
