import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/responsive.css";
import { useState } from "react";
import { Home } from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const [toggled, setToggled] = useState(true);
  const handleSwitchTheme = () => {
    setToggled((s) => !s);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home toggled={toggled} switchTheme={handleSwitchTheme} />}
          />
          <Route path="/about" element={<About toggled={toggled} switchTheme={handleSwitchTheme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
