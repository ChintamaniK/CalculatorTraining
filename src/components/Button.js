import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  width:${(props) => props.special ? '200px' : '20px'};
  border: 1px solid lightgray;
  margin: 5px;
  padding: 5px;
  background-color:${(props) => props.special ? 'blue' : 'white'};
`;

export const CustomButton = (props) => {
  return (
    <StyledButton onClick={props.handleClick} tabIndex={0} special={props.special}>
      {props.text}
    </StyledButton>
  );
};

export const Button = (props) => {
  return (
    <div className="button" onClick={props.handleClick} tabIndex={0}>
      {props.text}
    </div>
  );
};
