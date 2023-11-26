import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About Page <br />
      <Link to="featured">featured</Link>
      <br />
      <Link to="new">new</Link>
      <Outlet />
    </div>
  );
};

export default About;
