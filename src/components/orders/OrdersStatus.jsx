import React, { useEffect, useState } from "react";

function OrdersStatus() {
  const [deliveryStatus, setDeliveryStatus] = useState(
    localStorage.getItem("deliveryStatus") || ""
  );
  const [drugName, setDrugName] = useState(
    localStorage.getItem("DrugName") || ""
  );
  const [quantity, setQuantity] = useState(
    localStorage.getItem("Quantity") || ""
  );
  const [manufacturer, setManufacturer] = useState(
    localStorage.getItem("Manufacturer") || ""
  );
  const [manufacturerCountry, setManufacturerCountry] = useState(
    localStorage.getItem("ManufacturerCountry") || ""
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setDeliveryStatus(localStorage.getItem("deliveryStatus") || "");
      setDrugName(localStorage.getItem("DrugName") || "");
      setQuantity(localStorage.getItem("Quantity") || "");
      setManufacturer(localStorage.getItem("Manufacturer") || "");
      setManufacturerCountry(localStorage.getItem("ManufacturerCountry") || "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <div className="text-2xl my-10 text-center">Order Status Display</div>

      <h2>
        Drug Name:
        <span className="text-blue-sec ml-4 font-semibold">{drugName}</span>
      </h2>
      <h2>
        Quantity:
        <span className="text-blue-sec ml-4 font-semibold">{quantity}</span>
      </h2>
      <h2>
        Manufacturer:
        <span className="text-blue-sec ml-4 font-semibold">{manufacturer}</span>
      </h2>
      <h2>
        Manufacturer Country:
        <span className="text-blue-sec ml-4 font-semibold">
          {manufacturerCountry}
        </span>
      </h2>
      <h2>
        Status:
        <span className="text-red-pri ml-4 font-semibold">
          {deliveryStatus}
        </span>
      </h2>
    </div>
  );
}

export default OrdersStatus;
