import React from "react";

const Navbar = ({ title, user }) => {
  return (
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <div className="d-flex justify-content-between"></div>
        <span class="navbar-brand mb-0 h1 text-light">{title}</span>
        <div className="d-flex text-white">{user}</div>
      </div>
    </nav>
  );
};

export default Navbar;
