// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchOrdersFromServer,
//   addOrderToServer,
//   updateOrderOnServer,
//   deleteOrderFromServer,
// } from "../../components/orders/ordersApi";

// // Define async thunk actions for fetching, adding, updating, and deleting orders
// export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
//   return fetchOrdersFromServer();
// });

// export const addOrder = createAsyncThunk(
//   "orders/addOrder",
//   async (orderData) => {
//     try {
//       console.log("Adding order:", orderData); // Log the payload
//       const addedOrder = await addOrderToServer(orderData);
//       console.log("Added order:", addedOrder); // Log the response
//       return addedOrder;
//     } catch (error) {
//       console.error("Error adding order:", error);
//       throw error;
//     }
//   }
// );

// export const updateOrder = createAsyncThunk(
//   "orders/updateOrder",
//   async ({ orderId, updatedOrderData }) => {
//     try {
//       const updatedOrder = await updateOrderOnServer(orderId, updatedOrderData);
//       return updatedOrder;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const deleteOrder = createAsyncThunk(
//   "orders/deleteOrder",
//   async (orderId) => {
//     try {
//       await deleteOrderFromServer(orderId);
//       return orderId;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// const initialState = {
//   deliveryStatus: localStorage.getItem("deliveryStatus") || "",
//   DrugName: localStorage.getItem("DrugName") || "",
//   Quantity: localStorage.getItem("Quantity") || "",
//   Manufacturer: localStorage.getItem("Manufacturer") || "",
//   ManufacturerCountry: localStorage.getItem("ManufacturerCountry") || "",
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     updateDeliveryStatus(state, action) {
//       state.deliveryStatus = action.payload;
//       localStorage.setItem("deliveryStatus", action.payload);
//     },
//     updateDrugName(state, action) {
//       state.DrugName = action.payload;
//       localStorage.setItem("DrugName", action.payload);
//     },
//     updateQuantity(state, action) {
//       state.Quantity = action.payload;
//       localStorage.setItem("Quantity", action.payload);
//     },
//     updateManufacturer(state, action) {
//       state.Manufacturer = action.payload;
//       localStorage.setItem("Manufacturer", action.payload);
//     },
//     updateManufacturerCountry(state, action) {
//       state.ManufacturerCountry = action.payload;
//       localStorage.setItem("ManufacturerCountry", action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOrders.fulfilled, (state, action) => {
//         // Update state with fetched orders
//         state.orders = action.payload;
//         state.status = "succeeded";
//       })
//       .addCase(addOrder.fulfilled, (state, action) => {
//         console.log("Order added successfully:", action.payload);
//       })
//       .addCase(addOrder.rejected, (state, action) => {
//         console.error("Error adding order:", action.error); // Log the rejected action
//         // Handle error if needed
//       })
//       .addCase(updateOrder.fulfilled, (state, action) => {
//         // Handle fulfilled state if needed
//       })
//       .addCase(deleteOrder.fulfilled, (state, action) => {
//         // Handle fulfilled state if needed
//       });
//   },
// });

// export const {
//   updateDeliveryStatus,
//   updateDrugName,
//   updateQuantity,
//   updateManufacturer,
//   updateManufacturerCountry,
// } = orderSlice.actions;

// export default orderSlice.reducer;

// //////////////////////////////////////////////////////////

/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchOrdersFromServer,
  addOrderToServer,
  updateOrderOnServer,
  deleteOrderFromServer,
} from "../../components/orders/ordersApi";

import {
  AddOrderPayload,
  UpdateOrderPayload,
  OrderSliceState,
  UpdateDeliveryStatusAction,
  UpdateDrugNameAction,
  UpdateQuantityAction,
  UpdateManufacturerAction,
  UpdateManufacturerCountryAction,
  FetchOrdersFulfilledAction,
  AddOrderFulfilledAction,
  AddOrderRejectedAction,
  UpdateOrderFulfilledAction,
  DeleteOrderFulfilledAction,
} from "../../types/orderTypes";

// Define async thunk actions using the correct payload types
export const fetchOrders = createAsyncThunk<
  FetchOrdersFulfilledAction["payload"]
>("orders/fetchOrders", async () => {
  return fetchOrdersFromServer();
});

export const addOrder = createAsyncThunk<AddOrderFulfilledAction["payload"]>(
  "orders/addOrder",
  async (orderData: AddOrderPayload) => {
    try {
      console.log("Adding order:", orderData);
      const addedOrder = await addOrderToServer(orderData);
      console.log("Added order:", addedOrder);
      return addedOrder;
    } catch (error) {
      console.error("Error adding order:", error);
      throw error;
    }
  }
);

export const updateOrder = createAsyncThunk<
  UpdateOrderFulfilledAction["payload"]
>(
  "orders/updateOrder",
  async ({ orderId, updatedOrderData }: UpdateOrderPayload) => {
    try {
      const updatedOrder = await updateOrderOnServer(orderId, updatedOrderData);
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteOrder = createAsyncThunk<
  DeleteOrderFulfilledAction["payload"]
>("orders/deleteOrder", async (orderId: string) => {
  try {
    await deleteOrderFromServer(orderId);
    return orderId;
  } catch (error) {
    throw error;
  }
});

const initialState: OrderSliceState = {
  deliveryStatus: localStorage.getItem("deliveryStatus") || "",
  DrugName: localStorage.getItem("DrugName") || "",
  Quantity: localStorage.getItem("Quantity") || "",
  Manufacturer: localStorage.getItem("Manufacturer") || "",
  ManufacturerCountry: localStorage.getItem("ManufacturerCountry") || "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateDeliveryStatus(state, action: UpdateDeliveryStatusAction) {
      state.deliveryStatus = action.payload;
      localStorage.setItem("deliveryStatus", action.payload);
    },
    updateDrugName(state, action: UpdateDrugNameAction) {
      state.DrugName = action.payload;
      localStorage.setItem("DrugName", action.payload);
    },
    updateQuantity(state, action: UpdateQuantityAction) {
      state.Quantity = action.payload;
      localStorage.setItem("Quantity", action.payload);
    },
    updateManufacturer(state, action: UpdateManufacturerAction) {
      state.Manufacturer = action.payload;
      localStorage.setItem("Manufacturer", action.payload);
    },
    updateManufacturerCountry(state, action: UpdateManufacturerCountryAction) {
      state.ManufacturerCountry = action.payload;
      localStorage.setItem("ManufacturerCountry", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOrders.fulfilled,
        (state, action: FetchOrdersFulfilledAction) => {
          state.orders = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(addOrder.fulfilled, (state, action: AddOrderFulfilledAction) => {
        console.log("Order added successfully:", action.payload);
      })
      .addCase(addOrder.rejected, (state, action: AddOrderRejectedAction) => {
        console.error("Error adding order:", action.error);
      })
      .addCase(
        updateOrder.fulfilled,
        (state, action: UpdateOrderFulfilledAction) => {
          // Handle fulfilled state if needed
        }
      )
      .addCase(
        deleteOrder.fulfilled,
        (state, action: DeleteOrderFulfilledAction) => {
          // Handle fulfilled state if needed
        }
      );
  },
});

export const {
  updateDeliveryStatus,
  updateDrugName,
  updateQuantity,
  updateManufacturer,
  updateManufacturerCountry,
} = orderSlice.actions;

export default orderSlice.reducer;
