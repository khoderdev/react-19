// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   deliveryStatus: localStorage.getItem("deliveryStatus") || "",
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     updateDeliveryStatus(state, action) {
//       state.deliveryStatus = action.payload;
//       localStorage.setItem("deliveryStatus", action.payload);
//     },
//   },
// });

// export const { updateDeliveryStatus } = orderSlice.actions;
// export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    updateDeliveryStatus(state, action) {
      const { orderId, newStatus } = action.payload;
      state.orders = state.orders.map((order) =>
        order.id === orderId ? { ...order, deliveryStatus: newStatus } : order
      );
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const { addOrder, updateDeliveryStatus } = orderSlice.actions;
export default orderSlice.reducer;
