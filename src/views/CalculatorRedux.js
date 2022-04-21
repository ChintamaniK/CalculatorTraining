import React, { useEffect, useState } from "react";
import { Button, CustomButton } from "../components/Button";
import { EquationArea } from "../components/EquationArea";
import { Header } from "../components/Header";
import { NumberPanel } from "../components/NumberPanel";

import { connect } from 'react-redux'

import './Calculator.scss';
import { calculateResults } from "../actions/calculator.action";

const Calculator = (props) => {
  const dispatch = props.dispatch;
  const [equation, setEquation] = useState("");
  // const [result, setResult] = useState("")

  const setClickedValue = (buttonValue) => {
    setEquation(equation + "" + buttonValue);
  }

  useEffect(() => {
    console.log(equation);
  }, [equation]);

  // const calculateResults = (event) => {
  //   try {
  //     setResult(eval(equation));
  //   } catch (error) {
  //     setResult('ERROR');
  //   }

  // }

  const clearEquation = () => {
    setEquation("");
    // setResult("");
  }

  return (
    <div className="calculator">
      <Header></Header>
      <EquationArea text={equation} result={props.result}></EquationArea>
      <NumberPanel setValue={setClickedValue} ></NumberPanel>
      <CustomButton special text="Calculate results" handleClick={() => dispatch(calculateResults(equation))}></CustomButton>
      <CustomButton text="Clear results" handleClick={clearEquation}></CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {

  console.log(state)

  const result = state.calcInfo.result;
  return {
    result
  }
}


export default connect(mapStateToProps)(Calculator);

