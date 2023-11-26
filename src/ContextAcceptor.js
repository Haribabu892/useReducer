import React from "react";
import { useGlobalContext } from "./App";

const ContextAcceptor = () => {
  const { firstname, lastName } = useGlobalContext();
  return <div>{`${firstname} ${lastName}`}</div>;
};

export default ContextAcceptor;
