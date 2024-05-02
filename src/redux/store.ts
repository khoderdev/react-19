import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";

type RootState = {
  order: ReturnType<typeof orderReducer>;
};

export type { RootState };

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
