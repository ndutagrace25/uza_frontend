import React, { Component } from "react";
import { Navbar, Searchbox } from "../common";

import { ProductCard } from ".";

class Main extends Component {
  state = {
    allProducts: {},
    categories: [
      { value: "Dresses", label: "Dresses" },
      { value: "Tops", label: "Tops" },
      { value: "Watches", label: "Watches" },
    ],
    category: null,
  };

  handleChange = (category) => {
    this.setState({ category });
    console.log(`Option selected:`, category);
  };

  render() {
    const { category, categories } = this.state;
    return (
      <React.Fragment>
        <Navbar title="Top Vintage" />
        <div className="container-fluid">
          {/* search container */}
          <div className="col-md-12 col-lg-12 col-sm-12 mt-3 d-flex justify-content-end search">
            <Searchbox
              value={category}
              options={categories}
              onChange={this.handleChange}
            />
          </div>
          {/* Product Container */}
          <div className="d-flex justify-content-between flex-wrap col-md-12 col-lg-12 col-sm-12 align-items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
