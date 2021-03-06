import React, { useEffect, useState } from "react";
import { Button, CustomButton } from "../components/Button";
import { EquationArea } from "../components/EquationArea";
import { Header } from "../components/Header";
import { NumberPanel } from "../components/NumberPanel";

import './Calculator.scss';

export const Calculator = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("")

  const setClickedValue = (buttonValue) => {
    setEquation(equation + "" + buttonValue);
  }

  useEffect(() => {
    console.log(equation);
  }, [equation]);

  const calculateResults = (event) => {
    try {
      setResult(eval(equation));
    } catch (error) {
      setResult('ERROR');
    }
    
  }

  const clearEquation = () => {
    setEquation("");
    setResult("");
  }

  return (
    <div className="calculator">
      <Header></Header>
      <EquationArea text={equation} result={result}></EquationArea>
      <NumberPanel setValue={setClickedValue} ></NumberPanel>
      <CustomButton special text="Calculate results" handleClick={calculateResults}></CustomButton>
      <CustomButton text="Clear results" handleClick={clearEquation}></CustomButton>
    </div>
  );
};
