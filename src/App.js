import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Featured from "./Featured";
import New from "./New";
import UserDetails from "./UserDetails";
import UseSearchParams from "./UseSearchParams";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="search" element={<UseSearchParams />} />
      </Routes>

      <button onClick={() => navigate("about")}>go to some page</button>
    </div>
  );
};

export default App;
