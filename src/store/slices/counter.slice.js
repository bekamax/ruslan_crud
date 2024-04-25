import { createSlice } from "@reduxjs/toolkit";

const INIt_STATE = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counet",
  initialState: INIt_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter --;
    },
  },
});
export const {decrement,increment}=counterSlice.actions