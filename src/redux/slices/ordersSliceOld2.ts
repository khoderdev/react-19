// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addOrderToServer,
//   deleteOrderFromServer,
//   fetchOrdersFromServer,
//   generateSequenceId,
//   updateOrderOnServer,
// } from "./ordersApi";
// import {
//   getItemFromLocalStorage,
//   setItemInLocalStorage,
// } from "../../utils/localStorage";

// // Define the initial state
// const initialState = {
//   orders: [],
//   status: "idle",
//   error: null,
// };

// // Define an async thunk to fetch orders from the API
// export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
//   return fetchOrdersFromServer();
// });

// // Define an async thunk to add an order to the server
// export const addOrder = createAsyncThunk(
//   "orders/addOrder",
//   async (orderData) => {
//     try {
//       // Assign a sequential ID
//       orderData.id = generateSequenceId();

//       // Add order to the server
//       const addedOrder = await addOrderToServer(orderData);

//       // Save the order in local storage
//       const storedOrders = getItemFromLocalStorage("orders") || [];
//       const updatedOrders = [...storedOrders, addedOrder];
//       setItemInLocalStorage("orders", updatedOrders);

//       return addedOrder;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// // Define an async thunk to update an order on the server and sync local storage
// export const updateOrder = createAsyncThunk(
//   "orders/updateOrder",
//   async ({ orderId, updatedOrderData }) => {
//     try {
//       // Update order on the server
//       const updatedOrder = await updateOrderOnServer(orderId, updatedOrderData);

//       // Get the orders from local storage
//       let storedOrders = getItemFromLocalStorage("orders") || [];

//       // Find the index of the order to be updated
//       const orderIndex = storedOrders.findIndex(
//         (order) => order.id === orderId
//       );

//       // Update the order in local storage
//       if (orderIndex !== -1) {
//         storedOrders[orderIndex] = updatedOrder;
//         setItemInLocalStorage("orders", storedOrders);
//       }

//       return updatedOrder;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// // Define an async thunk to delete an order from the server and sync local storage
// export const deleteOrder = createAsyncThunk(
//   "orders/deleteOrder",
//   async (orderId) => {
//     try {
//       // Delete order from the server
//       await deleteOrderFromServer(orderId);

//       // Get the orders from local storage
//       let storedOrders = getItemFromLocalStorage("orders") || [];

//       // Filter out the deleted order
//       const updatedOrders = storedOrders.filter(
//         (order) => order.id !== orderId
//       );

//       // Update the orders in local storage
//       setItemInLocalStorage("orders", updatedOrders);

//       return orderId;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// // Define the order slice
// const ordersSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOrders.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchOrders.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.orders = action.payload;
//       })
//       .addCase(fetchOrders.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default ordersSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addOrderToServer,
  deleteOrderFromServer,
  fetchOrdersFromServer,
  updateOrderOnServer,
} from "./ordersApiOld1";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "../../utils/localStorage";

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
    try {
      // Add order to the server
      const addedOrder = await addOrderToServer(orderData);

      // Save the order in local storage
      const storedOrders = getItemFromLocalStorage("orders") || [];
      const updatedOrders = [...storedOrders, addedOrder];
      setItemInLocalStorage("orders", updatedOrders);

      return addedOrder;
    } catch (error) {
      throw error;
    }
  }
);

// Define an async thunk to update an order on the server and sync local storage
export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderId, updatedOrderData }) => {
    try {
      // Update order on the server
      const updatedOrder = await updateOrderOnServer(orderId, updatedOrderData);

      // Get the orders from local storage
      let storedOrders = getItemFromLocalStorage("orders") || [];

      // Find the index of the order to be updated
      const orderIndex = storedOrders.findIndex(
        (order) => order.id === orderId
      );

      // Update the order in local storage
      if (orderIndex !== -1) {
        storedOrders[orderIndex] = updatedOrder;
        setItemInLocalStorage("orders", storedOrders);
      }

      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }
);

// Define an async thunk to delete an order from the server and sync local storage
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (orderId) => {
    try {
      // Delete order from the server
      await deleteOrderFromServer(orderId);

      // Get the orders from local storage
      let storedOrders = getItemFromLocalStorage("orders") || [];

      // Filter out the deleted order
      const updatedOrders = storedOrders.filter(
        (order) => order.id !== orderId
      );

      // Update the orders in local storage
      setItemInLocalStorage("orders", updatedOrders);

      return orderId;
    } catch (error) {
      throw error;
    }
  }
);

// Define the order slice
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        console.log("fetchOrders pending...");
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        console.log("fetchOrders fulfilled with orders:", action.payload);
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        console.error("fetchOrders rejected with error:", action.error);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;
