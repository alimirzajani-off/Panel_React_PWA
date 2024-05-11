import React, { useState } from "react";
import "./RadioGroup.scss";

const RadioGroup = ({
  className = "",
  value,
  onChange,
  name,
  title,
  items,
}) => {
  return (
    <div className={`Radio ${className} flex flex-wrap`}>
      <div className="R-title">
        <h4>{title}</h4>
      </div>
      <div className="R-options">
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              checked={value === item.value}
              onChange={onChange}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
