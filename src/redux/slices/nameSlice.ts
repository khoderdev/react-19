// import { createSlice } from "@reduxjs/toolkit";

// const nameSlice = createSlice({
//   name: "name",
//   initialState: { n: "Tonai" },
//   reducers: {
//     setName(state, action) {
//       state.n = action.payload;
//     },
//   },
// });

// export const { setName } = nameSlice.actions;
// export default nameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameStatus: localStorage.getItem("name") || "",
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    updateNameStatus(state, action) {
      state.nameStatus = action.payload;
      localStorage.setItem("name", action.payload);
    },
  },
});

export const { updateNameStatus } = nameSlice.actions;
export default nameSlice.reducer;
