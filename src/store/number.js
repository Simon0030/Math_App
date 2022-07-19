import { createSlice } from "@reduxjs/toolkit";

const number = Math.floor(Math.random() * 1000) + 1;

const initialNumber = { number: number};

const numberSlice = createSlice({
  name: 'number',
  initialState: initialNumber,
  reducers: {
    updateNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const numberActions = numberSlice.actions;

export default numberSlice.reducer;