import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    calc: calcSlice.reducer,
    modal: modalSlice.reducer,
  },
});
export default store;
