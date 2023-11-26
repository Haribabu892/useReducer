import React from "react";
import { useSearchParams } from "react-router-dom";

const UseSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        active
      </button>
      <button onClick={() => setSearchParams({})}>all</button>
      {searchParams.get("filter") === "active" ? (
        <h1>showing active users</h1>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};

export default UseSearchParams;
