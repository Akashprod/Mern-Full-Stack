import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <>
      <label className="form-control">
        <div className="label mr-1 mb-1">
          <span className="label-text">{label}</span>
        </div>

        <input
          type={type}
          placeholder= {`please type your ${label}`}
          defaultValue={defaultValue}
          required
          name={name}
          className="input input-bordered"
        />
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>
    </>
  );
};

export default FormInput;
