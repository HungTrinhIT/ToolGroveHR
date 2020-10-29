import React from "react";
import "./Input.css";
const InputFiled = ({
  name,
  values,
  handleChange,
  errors,
  label,
  placeholder,
  touched,
  handleBlur,
}) => {
  return (
    <div className="input-wrp">
      <label>{label} *</label>
      <div className=" input-control input-effect">
        <input
          className="effect-20"
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          value={values[`${name}`]}
          onBlur={handleBlur}
        />
        <span className="focus-border">
          <i />
        </span>
      </div>
      <small>{touched[`${name}`] && errors[`${name}`]}</small>
    </div>
  );
};

export default InputFiled;
