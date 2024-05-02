import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDeliveryStatus,
  updateDrugName,
  updateQuantity,
  updateManufacturerCountry,
  updateManufacturer,
} from "../../redux/slices/orderSlice";

function OrdersControl() {
  const deliveryStatus = useSelector((state) => state.order.deliveryStatus);
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState("");
  const [newDrugName, setNewDrugName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newManufacturer, setNewManufacturer] = useState("");
  const [newManufacturerCountry, setNewManufacturerCountry] = useState("");

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleDrugNameChange = (e) => {
    setNewDrugName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setNewManufacturer(e.target.value);
  };

  const handleManufacturerCountryChange = (e) => {
    setNewManufacturerCountry(e.target.value);
  };

  const handleUpdateStatus = () => {
    dispatch(updateDeliveryStatus(newStatus));
    dispatch(updateDrugName(newDrugName));
    dispatch(updateQuantity(newQuantity));
    dispatch(updateManufacturer(newManufacturer));
    dispatch(updateManufacturerCountry(newManufacturerCountry));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="text-xl md:text-2xl my-10 text-center">
        Order status Control
      </div>
      <p className="mb-4 text-green-sec">
        Current Status:{" "}
        <span className="text-red-pri font-semibold"> {deliveryStatus}</span>
      </p>
      <select
        value={newStatus}
        onChange={handleStatusChange}
        className={`w-full border rounded-md px-3 py-2 mb-4 ${
          newStatus ? "border-green-pri" : ""
        }`}
      >
        <option value="">Select status...</option>
        <option value="Pending">Pending</option>
        <option value="Delivered">Delivered</option>
        <option value="Canceled">Canceled</option>
      </select>

      <label>
        Drug Name
        <input
          type="text"
          value={newDrugName}
          onChange={handleDrugNameChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <label>
        Quantity
        <input
          type="text"
          value={newQuantity}
          onChange={handleQuantityChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <label>
        Manufacturer
        <input
          type="text"
          value={newManufacturer}
          onChange={handleCountryChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <label>
        Manufacturer Country
        <input
          type="text"
          value={newManufacturerCountry}
          onChange={handleManufacturerCountryChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <button
        onClick={handleUpdateStatus}
        className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Update Status
      </button>
    </div>
  );
}

export default OrdersControl;
