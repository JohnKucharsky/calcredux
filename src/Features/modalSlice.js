import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitForm = createAsyncThunk("submit", async (data) => {
  const res = await fetch(
    "https://submit-form-da0bb-default-rtdb.firebaseio.com/formData.json",
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
  const firebaseResponse = await res.json();
  return firebaseResponse;
});

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    response: "",
  },
  reducers: {
    toggle(state) {
      state.open = !state.open;
    },
  },
  extraReducers: {
    [submitForm.fulfilled]: (state, action) => {
      state.error = true;
      state.response = action.payload;
    },
    [submitForm.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
