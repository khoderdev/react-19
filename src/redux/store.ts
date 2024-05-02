import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import ordersReducer from "./slices/ordersSlice";

type RootState = {
  order: ReturnType<typeof orderReducer>;
  orders: ReturnType<typeof ordersReducer>;
};

export type { RootState };

export const store = configureStore({
  reducer: {
    order: orderReducer,
    orders: ordersReducer,
  },
});
