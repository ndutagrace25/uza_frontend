import React, { Component } from "react";
import { Navbar, Table } from "../../common";
import { Link } from "react-router-dom";

class Categories extends Component {
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
          <div className="my-2">
            <button className="btn btn-sm btn-success d-flex">
              <span className="button-text m-0">Add Category</span>
            </button>
          </div>
          <Table
            thead={
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col" colSpan="2">
                  Actions
                </th>
              </tr>
            }
            tbody={
              <React.Fragment>
                <tr>
                  <th scope="row">1</th>
                  <td>Tops</td>
                  <td>
                    <button className="badge btn btn-sm btn-info">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button className="badge btn btn-sm btn-danger">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Dresses</td>
                  <td>
                    <button className="badge btn btn-sm btn-info">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button className="badge btn btn-sm btn-danger">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Trousers</td>
                  <td>
                    <button className="badge btn btn-sm btn-info">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button className="badge btn btn-sm btn-danger">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            }
          />
        </div>
      </div>
    );
  }
}

export default Categories;
