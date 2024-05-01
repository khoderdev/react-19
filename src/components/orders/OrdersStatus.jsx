import React, { useEffect, useState } from "react";

function OrdersStatus() {
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
      <div className="text-2xl my-10 text-center">
        Order Status Display
      </div>
      <h2>
        Updated Delivery Status:
        <span className="text-red-pri ml-4 font-semibold">
          {deliveryStatus}
        </span>
      </h2>
    </div>
  );
}

export default OrdersStatus;
