import { configureStore } from "@reduxjs/toolkit";
// import orderReducer from "./slices/orderSliceOld1";
import todoReducer from "./slices/todoSlice";
import userReducer from "./slices/userSlice";
import ordersReducer from "./slices/ordersSlice";
import logger from "redux-logger";

type RootState = {
  // order: ReturnType<typeof orderReducer>;
  todos: ReturnType<typeof todoReducer>;
  user: ReturnType<typeof userReducer>;
  orders: ReturnType<typeof ordersReducer>;
};

export type { RootState };

export const store = configureStore({
  reducer: {
    // order: orderReducer,
    todos: todoReducer,
    user: userReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
