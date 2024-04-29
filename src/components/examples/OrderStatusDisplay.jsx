import React, { useEffect, useState } from "react";

function OrderStatusDisplay() {
  const [deliveryStatus, setDeliveryStatus] = useState(
    localStorage.getItem("deliveryStatus") || ""
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setDeliveryStatus(localStorage.getItem("deliveryStatus") || "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <h3>Order Status Display</h3>
      <h2>
        Updated Delivery Status:
        <span className="text-red-pri ml-4 font-semibold">
          {deliveryStatus}
        </span>
      </h2>
    </div>
  );
}

export default OrderStatusDisplay;
