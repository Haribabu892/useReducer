import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return <div> {id === "1" && <p>this is first user details</p>}</div>;
};

export default UserDetails;
