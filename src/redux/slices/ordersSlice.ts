import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    editOrder: (state, action) => {
      const { id, updatedOrder } = action.payload;
      const index = state.orders.findIndex((order) => order.id === id);
      if (index !== -1) {
        state.orders[index] = { ...state.orders[index], ...updatedOrder };
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.orders = state.orders.filter((order) => order.id !== id);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const { addOrder, editOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
