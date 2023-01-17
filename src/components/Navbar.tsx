import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/posts">posts</Link>
      <Link to="/addpost">add post</Link>
    </div>
  );
};

export default Navbar;
