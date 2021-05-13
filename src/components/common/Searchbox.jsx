import React from "react";
import Select from "react-select";

const Searchbox = ({ value, onChange, options }) => {
  return (
    <div className="col-md-2 col-sm-2 col-lg-2 select-item">
      <Select
        value={value}
        onChange={onChange}
        options={options}
        className="form-control-sm bg-white"
        placeholder="Select Category"
      />
    </div>
  );
};

export default Searchbox;
