import React from "react";
import { Navbar } from "../../common";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="login">
      <Navbar
        title="Top Vintage Admin"
        user={<React.Fragment>Logout</React.Fragment>}
      />
      <div className="container mt-3">
        <div className="d-flex justify-content-center flex-wrap">
          <Link
            className="card link-menu d-flex justify-content-center align-items-center p-5 shadow col-md-4 col-lg-4 col-sm-4 m-2"
            style={{ cursor: "pointer" }}
            to="/admin/category"
          >
            Category
          </Link>
          <div
            className="card d-flex justify-content-center align-items-center p-5 shadow col-md-4 col-lg-4 col-sm-4 m-2"
            style={{ cursor: "pointer" }}
          >
            Products
          </div>
          <Link
            className="card link-menu d-flex justify-content-center align-items-center p-5 shadow col-md-4 col-lg-4 col-sm-4 m-2"
            style={{ cursor: "pointer" }}
            to="/admin/requests"
          >
            Requests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
