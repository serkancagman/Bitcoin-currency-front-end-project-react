import "./Components/responsive.css";
import { HeaderProvider } from "./Context/HeaderContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { CoinPriceProvider } from "./Context/CoinPriceContext";
import { PreLoaderProvider } from "./Context/PreLoader";

import RouterMain from "./Router/RouterMain";

function App() {
  return (
    <>
      <PreLoaderProvider>
        <ThemeProvider>
          <CoinPriceProvider>
            <HeaderProvider>
              <RouterMain />
            </HeaderProvider>
          </CoinPriceProvider>
        </ThemeProvider>
      </PreLoaderProvider>
    </>
  );
}

export default App;
