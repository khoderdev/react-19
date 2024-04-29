// src/features/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryStatus: localStorage.getItem("deliveryStatus") || "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateDeliveryStatus(state, action) {
      state.deliveryStatus = action.payload;
      localStorage.setItem("deliveryStatus", action.payload); // Save to local storage
    },
  },
});

export const { updateDeliveryStatus } = orderSlice.actions;
export default orderSlice.reducer;
