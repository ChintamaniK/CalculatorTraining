import React from "react";
import { Button } from "../components/Button";
import { EquationArea } from "../components/EquationArea";
import { Header } from "../components/Header";
import { NumberPanel } from "../components/NumberPanel";

export const Calculator = () => {
  return (
    <div>
      <Header></Header>
      <EquationArea></EquationArea>
      <NumberPanel></NumberPanel>
      <Button text="Calculate results"></Button>
    </div>
  );
};
