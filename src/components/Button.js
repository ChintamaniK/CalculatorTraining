import React from "react";

export const Button = (props) => {
  return (
    <div className="button" onClick={props.handleClick} tabIndex={0}>
      {props.text}
    </div>
  );
};
