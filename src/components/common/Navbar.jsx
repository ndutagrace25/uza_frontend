import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav class="navbar navbar-light">
      <div class="container-fluid d-flex justify-content-center">
        <span class="navbar-brand mb-0 h1 text-light">{title}</span>
      </div>
    </nav>
  );
};

export default Navbar;
