import React from "react";
import { dress } from "../images";

const ProductCard = () => {
  return (
    <div className="shadow product mt-3 mx-1 py-3 col-md-3 col-sm-3 col-lg-2 d-flex justify-content-center flex-column align-items-center">
      <div className="border-bottom">
        <img
          src={dress}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="mt-2">
        <div className="d-flex flex-column">
          {/* <i className="fas fa-circle"></i> */}
          <span>
            <strong>Item: </strong>Awesome Dress
          </span>
          <span>
            <strong>Sizes: </strong> 30, 20
          </span>
          <span>
            <strong>Colors: </strong> Red, Blue, Yellow
          </span>
        </div>
      </div>
      <div className="my-2 d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-sm btn-success d-block">
          Request Item
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
