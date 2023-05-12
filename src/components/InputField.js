import React from "react";
import "./InputField.css";
const Inputfield = (props) => {
  return (
    <div className="input-parent">
      <p>{props.head}</p>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Inputfield;
