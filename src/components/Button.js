import React from "react";
import { useDispatch } from "react-redux";
import { calcActions } from "../Features/calcSlice";

export default function Button({ digit }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(calcActions.addDigit(digit))}>
      {digit}
    </button>
  );
}
