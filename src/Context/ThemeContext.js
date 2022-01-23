import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "dark");
    const [showSetting, setShowSetting] = React.useState(false);

  React.useEffect(()=>{
    setTheme(localStorage.getItem("theme"))
  },[])


    const handleSwitchTheme = () => {
      if(theme === "dark"){
        localStorage.setItem("theme","light")
        setTheme("light")
      }
      else{
        localStorage.setItem("theme","dark")
        setTheme("dark")
      }
    };




    const handleSetting = () => {
      setShowSetting((showSetting) => !showSetting);
    };

    const values ={
        theme,
        setTheme,
        handleSwitchTheme,
        handleSetting,
        showSetting


    }















    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}