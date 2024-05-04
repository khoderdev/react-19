import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import todoReducer from "./slices/todoSlice";
import logger from "redux-logger";

type RootState = {
  order: ReturnType<typeof orderReducer>;
  todos: ReturnType<typeof todoReducer>; 
};

export type { RootState };

export const store = configureStore({
  reducer: {
    order: orderReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
