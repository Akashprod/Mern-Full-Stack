import React, { useState } from "react";
import { formatPrice } from "../utils.js";

const FormRange = ({ name, label, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedValue, setSelectedValue] = useState(price || maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label ">
        <span className=" label-text capitalize mr-1 mb-1">{label}</span>
        <span className="mr-1 mb-1">{formatPrice(selectedValue)}</span>
      </label>

      <input
        className={`cursor-pointer range range-primary ${size}`}
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        step={step}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      />

      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
