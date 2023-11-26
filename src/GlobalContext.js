import React, { createContext, useContext } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GloballyContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ firstname: "hari", lastName: "babu" }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GloballyContext;
