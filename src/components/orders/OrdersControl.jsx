import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDeliveryStatus,
  updateDrugName,
  updateQuantity,
  updateManufacturerCountry,
  updateManufacturer,
  fetchOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../../redux//slices/orderSlice";

function OrdersControl() {
  const deliveryStatus = useSelector((state) => state.order.deliveryStatus);
  const dispatch = useDispatch();
  const [Status, setNewStatus] = useState("");
  const [DrugName, setNewDrugName] = useState("");
  const [Quantity, setNewQuantity] = useState("");
  const [Manufacturer, setNewManufacturer] = useState("");
  const [ManufacturerCountry, setNewManufacturerCountry] = useState("");

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

  const handleSubmit = () => {
    // Dispatch actions to update the status and other details
    dispatch(updateDeliveryStatus(Status));
    dispatch(updateDrugName(DrugName));
    dispatch(updateQuantity(Quantity));
    dispatch(updateManufacturer(Manufacturer));
    dispatch(updateManufacturerCountry(ManufacturerCountry));

    // You can also dispatch an action to submit the form data to the server if needed
    dispatch(
      addOrder({
        Status,
        DrugName,
        Quantity,
        Manufacturer,
        ManufacturerCountry,
      })
    );
  };

  useEffect(() => {
    // Dispatch fetchOrders action when the component mounts
    dispatch(fetchOrders());
  }, [dispatch]);

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
        value={Status}
        onChange={handleStatusChange}
        className={`w-full border rounded-md px-3 py-2 mb-4 ${
          Status ? "border-green-pri" : ""
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
          value={DrugName}
          onChange={handleDrugNameChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <label>
        Quantity
        <input
          type="number"
          value={Quantity}
          onChange={handleQuantityChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <label>
        Manufacturer
        <input
          type="text"
          value={Manufacturer}
          onChange={handleCountryChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <label>
        Manufacturer Country
        <input
          type="text"
          value={ManufacturerCountry}
          onChange={handleManufacturerCountryChange}
          className="w-full border rounded-md px-3 py-2 mb-4"
        />
      </label>

      <button
        onClick={handleSubmit}
        className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Update Status
      </button>
    </div>
  );
}

export default OrdersControl;
