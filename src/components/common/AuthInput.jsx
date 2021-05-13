import React from "react";

const AuthInput = ({ icon, placeholder }) => {
  return (
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          {icon}
        </span>
        <input
          type="text"
          class="form-control"
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default AuthInput;
