import React from "react";

const FormCheckBox = ({ name, label, size, defaultChecked }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label ">
        <span className="label-text capitalize mr-1 mb-1">{label}</span>
      </label>
      <input
        defaultChecked={defaultChecked}
        type="checkbox"
        name={name}
        className={` cursor-pointer checkbox  checkbox-bordered ${size}`}
      />
    </div>
  );
};

export default FormCheckBox;
