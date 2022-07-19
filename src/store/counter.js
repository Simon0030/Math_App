import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    adding(state, action) {
      state.counter = state.counter + action.payload;
    },
    subtraction(state, action) {
      state.counter = state.counter - action.payload;
    },
    multiplication(state, action) {
      state.counter = state.counter * action.payload;
    },
    division(state, action) {
      state.counter = state.counter / action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;