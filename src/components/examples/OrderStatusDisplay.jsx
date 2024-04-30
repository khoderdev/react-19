// import React, { useEffect, useState } from "react";

// function OrderStatusDisplay() {
//   const [deliveryStatus, setDeliveryStatus] = useState(
//     localStorage.getItem("deliveryStatus") || ""
//   );

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setDeliveryStatus(localStorage.getItem("deliveryStatus") || "");
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   return (
//     <div>
//       <h3>Order Status Display</h3>
//       <h2>
//         Updated Delivery Status:
//         <span className="text-red-pri ml-4 font-semibold">
//           {deliveryStatus}
//         </span>
//       </h2>
//     </div>
//   );
// }

// export default OrderStatusDisplay;
import React from "react";
import { useSelector } from "react-redux";

function OrderStatusDisplay() {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div>
      <h3>Order Status Display</h3>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Delivery Status: {order.deliveryStatus}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderStatusDisplay;
