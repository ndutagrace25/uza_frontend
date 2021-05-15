import React, { Component } from "react";
import { AuthInput } from "../../common";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center flex-column shadow p-5 col-md-3 col-lg-3 col-sm-3 bg-white">
          <div className="p-3 fw-bold">Top Vintage</div>
          <div className="">
            <AuthInput
              icon={<i className="fas fa-user text-info "></i>}
              placeholder="Username"
            />
            <AuthInput
              icon={<i className="fas fa-lock text-info"></i>}
              placeholder="Password"
            />
            <div className="d-grid gap-2">
              <Link className="btn btn-success" to="/admin/menu">
                Login
              </Link>
            </div>
          </div>
          <Link to="/admin/reset-password" className="link mt-2">
            Forgot Password?
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
