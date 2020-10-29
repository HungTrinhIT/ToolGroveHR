import React from "react";
import "./Button.css";

const ButtonGrove = (props) => {
  return (
    <button type={props.type} className="button-primary">
      {props.label}
    </button>
  );
};

export default ButtonGrove;
