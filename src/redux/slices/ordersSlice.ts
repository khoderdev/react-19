import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOrderToServer, deleteOrderFromServer, fetchOrdersFromServer, generateSequenceId, updateOrderOnServer } from "./ordersApi";

// Define the initial state
const initialState = {
  orders: [],
  status: "idle",
  error: null,
};

// Define an async thunk to fetch orders from the API
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return fetchOrdersFromServer();
});

// Define an async thunk to add an order to the server
export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (orderData) => {
    orderData.id = generateSequenceId(); // Assign a sequential ID
    return addOrderToServer(orderData);
  }
);

// Define an async thunk to update an order on the server
export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderId, updatedOrderData }) => {
    return updateOrderOnServer(orderId, updatedOrderData);
  }
);

// Define an async thunk to delete an order from the server
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (orderId) => {
    return deleteOrderFromServer(orderId);
  }
);

// Define the order slice
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;
