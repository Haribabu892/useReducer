import React, { createContext, useContext } from "react";
import ContextAcceptor from "./ContextAcceptor";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const App = () => {
  return (
    <GlobalContext.Provider value={{ firstname: "hari", lastName: "babui" }}>
      <div>
        <h1>use context</h1>
        <ContextAcceptor />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
