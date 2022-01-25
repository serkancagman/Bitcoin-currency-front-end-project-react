import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const PreLoaderContext = React.createContext();

export const PreLoaderProvider = ({ children }) => {
  const [isLoadingPage, setIsLoadingPage] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 1000);
  }, []);

  const values = {
    isLoadingPage,
  };

  return (
    <PreLoaderContext.Provider value={values}>
      {children}
    </PreLoaderContext.Provider>
  );
};
