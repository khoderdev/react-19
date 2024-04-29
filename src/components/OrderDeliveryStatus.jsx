// src/components/OrderDeliveryStatus.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDeliveryStatus } from "../redux/slices/orderSlice";


function OrderDeliveryStatus() {
  const deliveryStatus = useSelector((state) => state.order.deliveryStatus);
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState("");

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    dispatch(updateDeliveryStatus(newStatus));
  };

  return (
    <div>
      <h2>Order Delivery Status</h2>
      <p>Current Status: {deliveryStatus}</p>
      <input type="text" value={newStatus} onChange={handleStatusChange} />
      <button onClick={handleUpdateStatus}>Update Status</button>
    </div>
  );
}

export default OrderDeliveryStatus;
