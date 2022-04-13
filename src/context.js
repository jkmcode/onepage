import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isContact, setIsContact] = useState(false);
  const [isAobutUs, setIsAobutAs] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const openContact = () => {
    setIsContact(true);
  };

  const closeContact = () => {
    setIsContact(false);
  };

  const openAboutUs = () => {
    setIsAobutAs(true);
  };

  const closeAboutUs = () => {
    setIsAobutAs(false);
  };

  const openHome = () => {
    setIsHome(true);
  };

  const closeHome = () => {
    setIsHome(false);
  };

  return (
    <AppContext.Provider
      value={{
        isContact,
        isAobutUs,
        isHome,
        openContact,
        closeContact,
        openAboutUs,
        closeAboutUs,
        openHome,
        closeHome,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
