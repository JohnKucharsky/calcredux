import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import Operand from "./components/Operand";
import { calcActions } from "./Features/calcSlice";

export default function Calc() {
  const currentOperand = useSelector((state) => state.calc.currentOperand);
  const previousOperand = useSelector((state) => state.calc.previousOperand);
  const operation = useSelector((state) => state.calc.operation);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="calc-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand}
            {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button
          className="span-two"
          onClick={() => dispatch(calcActions.clear())}
        >
          AC
        </button>
        <button onClick={() => dispatch(calcActions.deleteDigit())}>DEL</button>
        <Operand operand="/" />

        <Button digit="1" />
        <Button digit="2" />
        <Button digit="3" />
        <Operand operand="*" />

        <Button digit="4" />
        <Button digit="5" />
        <Button digit="6" />
        <Operand operand="+" />

        <Button digit="7" />
        <Button digit="8" />
        <Button digit="9" />
        <Operand operand="-" />

        <Button digit="." />
        <Button digit="0" />
        <button
          className="span-two"
          onClick={() => dispatch(calcActions.evaluation())}
        >
          =
        </button>
      </div>
    </div>
  );
}
