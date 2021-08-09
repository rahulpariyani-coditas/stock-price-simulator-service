import React from "react";
import "./label.css";

const Label = (props) => {
  return (
    <div className="labelWrapper">
      <span className="title">{props.title}</span>
      <span className="children">{props.children}</span>
    </div>
  );
};

export default Label;
