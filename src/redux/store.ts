import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import todoReducer from "./slices/todoSlice";
import userReducer from "./slices/userSlice";
import logger from "redux-logger";

type RootState = {
  order: ReturnType<typeof orderReducer>;
  todos: ReturnType<typeof todoReducer>;
  user: ReturnType<typeof userReducer>;
};

export type { RootState };

export const store = configureStore({
  reducer: {
    order: orderReducer,
    todos: todoReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
