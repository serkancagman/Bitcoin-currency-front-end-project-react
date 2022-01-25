import React from "react";

export const HeaderContext = React.createContext();

export const HeaderProvider = ({ children }) => {
  const [navPosition, setNavPosition] = React.useState({ position: "" });
  const [isNavSticky, setIsNavSticky] = React.useState(false);
  
  const currentScreen = window.innerWidth;
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);



  React.useEffect(() => {
    if (currentScreen >= 992) {

      if (navPosition.position >= 92) {
        setIsNavSticky(true);
      } else{
        setIsNavSticky(false);
      }

    } else if (currentScreen >= 767) {
      if (navPosition.position >= 200) {
        setIsNavSticky(true);
      } else{
        setIsNavSticky(false);
      }
    } else {
      setIsNavSticky(false);
    }
  }, [navPosition]);


  const handleScroll = () => {
    let currentPos;
    currentPos = window.pageYOffset;
    setNavPosition({ position: currentPos });
  };
  const values = {
    isNavSticky,
  };

  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};
