import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    updateDeliveryStatus(state, action) {
      state.deliveryStatus = action.payload;
      localStorage.setItem("deliveryStatus", action.payload);
    },
    updateDrugName(state, action) {
      state.DrugName = action.payload;
      localStorage.setItem("DrugName", action.payload);
    },
    updateQuantity(state, action) {
      state.Quantity = action.payload;
      localStorage.setItem("Quantity", action.payload);
    },
    updateManufacturer(state, action) {
      state.Manufacturer = action.payload;
      localStorage.setItem("Manufacturer", action.payload);
    },
    updateManufacturerCountry(state, action) {
      state.ManufacturerCountry = action.payload;
      localStorage.setItem("ManufacturerCountry", action.payload);
    },
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
