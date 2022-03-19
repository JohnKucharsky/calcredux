import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: {
    currentOperand: "",
    previousOperand: "",
    operation: "",
  },
  reducers: {
    addDigit(state, action) {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload,
          overwrite: false,
        };
      }
      if (action.payload === "0" && state.currentOperand === "0") {
        return state;
      }
      if (action.payload === "." && state.currentOperand.includes(".")) {
        return state;
      }
      state.currentOperand = `${state.currentOperand}${action.payload}`;
    },
    deleteDigit(state) {
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: "",
        };
      }
      if (!state.currentOperand) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: "" };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    },
    clear() {
      return {
        currentOperand: "",
        previousOperand: "",
        operation: "",
      };
    },
    chooseOperation(state, action) {
      if (!state.currentOperand && !state.previousOperand) {
        return state;
      }
      if (!state.currentOperand) {
        return {
          ...state,
          operation: action.payload,
        };
      }
      if (!state.previousOperand) {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: "",
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload,
        currentOperand: "",
      };
    },
    evaluation(state) {
      if (!state.operation || !state.currentOperand || !state.previousOperand) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: "",
        operation: "",
        currentOperand: evaluate(state),
      };
    },
  },
});

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      console.log(current);
  }
  return computation.toString();
}

export const calcActions = calcSlice.actions;
export default calcSlice;
