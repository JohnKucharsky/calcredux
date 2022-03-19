import React from "react";
import { useDispatch } from "react-redux";
import { calcActions } from "../Features/calcSlice";

export default function Operand({ operand }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(calcActions.chooseOperation(operand))}>
      {operand}
    </button>
  );
}
