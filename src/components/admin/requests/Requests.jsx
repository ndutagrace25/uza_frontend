import React, { Component } from "react";
import { Navbar, Table } from "../../common";
import { Link } from "react-router-dom";

class Requests extends Component {
  state = {};
  render() {
    return (
      <div className="login">
        <Navbar
          title="Top Vintage Admin"
          user={
            <React.Fragment>
              <Link className="mr-2 mx-3 link-menu" to="/admin/menu">
                Home
              </Link>
              <Link className="link-menu">Logout</Link>
            </React.Fragment>
          }
        />
        <div className="container-fluid mt-3">
          <Table
            thead={
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Number of Requests</th>
              </tr>
            }
            tbody={
              <React.Fragment>
                <tr>
                  <th scope="row">1</th>
                  <td>Blue Shinny Top</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Brown Top</td>
                  <td>11</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Red Top</td>
                  <td>14</td>
                </tr>
              </React.Fragment>
            }
          />
        </div>
      </div>
    );
  }
}

export default Requests;
