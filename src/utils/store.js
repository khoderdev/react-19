import { configureStore } from "@reduxjs/toolkit";
import rightDrawerSlice from "./rightDrawerSlice";

const combinedReducer = {
  rightDrawer: rightDrawerSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
