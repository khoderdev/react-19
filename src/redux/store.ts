import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import todoReducer from "./slices/todoSlice";
import userReducer from "./slices/userSlice";
import ordersReducer from "./slices/ordersSlice";
import logger from "redux-logger";

type RootState = {
  auth: ReturnType<typeof authReducer>;
  todos: ReturnType<typeof todoReducer>;
  user: ReturnType<typeof userReducer>;
  orders: ReturnType<typeof ordersReducer>;
};

export type { RootState };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    user: userReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
