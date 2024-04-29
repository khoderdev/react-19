import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import counterSlice from "./slices/nameSlice";
import nameSlice from "./slices/nameSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    counter: counterSlice,
    name: nameSlice,
    user: userSlice,
  },
});
