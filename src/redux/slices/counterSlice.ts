import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { x: 0 },
  reducers: {
    plus(state) {
      state.x += 1;
    },
    minus(state) {
      state.x -= 1;
    },
    reset(state) {
      state.x = 0;
    },
  },
});

export const { plus, minus, reset } = counterSlice.actions;
export default counterSlice.reducer;
