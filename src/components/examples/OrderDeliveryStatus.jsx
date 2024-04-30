// // src/components/OrderDeliveryStatus.js
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateDeliveryStatus } from "../redux/slices/orderSlice";

// function OrderDeliveryStatus() {
//   const deliveryStatus = useSelector((state) => state.order.deliveryStatus);
//   const dispatch = useDispatch();
//   const [newStatus, setNewStatus] = useState("");

//   const handleStatusChange = (e) => {
//     setNewStatus(e.target.value);
//   };

//   const handleUpdateStatus = () => {
//     dispatch(updateDeliveryStatus(newStatus));
//   };

//   return (
//     <div>
//       <h2>Order Delivery Status</h2>
//       <p>Current Status: {deliveryStatus}</p>
//       <input type="text" value={newStatus} onChange={handleStatusChange} />
//       <button onClick={handleUpdateStatus}>Update Status</button>
//     </div>
//   );
// }

// export default OrderDeliveryStatus;

// ////////////////////////////////////////////

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateDeliveryStatus } from "../../redux/slices/orderSlice";

// function OrderDeliveryStatus() {
//   const deliveryStatus = useSelector((state) => state.order.deliveryStatus);
//   const dispatch = useDispatch();
//   const [newStatus, setNewStatus] = useState("");

//   const handleStatusChange = (e) => {
//     setNewStatus(e.target.value);
//   };

//   const handleUpdateStatus = () => {
//     dispatch(updateDeliveryStatus(newStatus));
//   };

//   return (
//     <div className="max-w-md mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Order Delivery Status</h2>
//       <p className="mb-4 text-green-sec">
//         Current Status:{" "}
//         <span className="text-red-pri font-semibold"> {deliveryStatus}</span>
//       </p>
//       <input
//         type="text"
//         value={newStatus}
//         onChange={handleStatusChange}
//         className="w-full border rounded-md px-3 py-2 mb-4"
//         placeholder="Enter new status..."
//       />
//       <button
//         onClick={handleUpdateStatus}
//         className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Update Status
//       </button>
//     </div>
//   );
// }

// export default OrderDeliveryStatus;

// ///////////////////////////////////////////////

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, updateDeliveryStatus } from "../../redux/slices/orderSlice";

function OrderDeliveryStatus() {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState("");

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleAddOrder = () => {
    const orderId = Math.floor(Math.random() * 1000);
    dispatch(addOrder({ id: orderId, deliveryStatus: newStatus }));
    setNewStatus("");
  };

  const handleUpdateStatus = (orderId) => {
    dispatch(updateDeliveryStatus({ orderId, newStatus }));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Order Delivery Status</h2>
      <input
        type="text"
        value={newStatus}
        onChange={handleStatusChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        placeholder="Enter new status..."
      />
      <button
        onClick={handleAddOrder}
        className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add New Order
      </button>
      <div>
        {orders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Delivery Status: {order.deliveryStatus}</p>
            <input
              type="text"
              value={newStatus}
              onChange={handleStatusChange}
              className="w-full border rounded-md px-3 py-2 mb-4"
              placeholder="Enter new status..."
            />
            <button
              onClick={() => handleUpdateStatus(order.id)}
              className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Status
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderDeliveryStatus;
