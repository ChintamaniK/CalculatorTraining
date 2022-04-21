import React from "react";

export const EquationArea = (props) => {
  return <div className={`equation-area`}>
    <span>{props.text}</span>
    <br/>
    <span>{props.result}</span>
  </div>;
};
