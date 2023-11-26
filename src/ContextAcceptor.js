import React from "react";
import { useGlobalContext } from "./GlobalContext";

const ContextAcceptor = () => {
  const { firstname, lastName } = useGlobalContext();
  return (
    <h2>
      {firstname} {lastName}
    </h2>
  );
};

export default ContextAcceptor;
