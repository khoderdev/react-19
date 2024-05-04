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
} from "../../redux/slices/orderSlice";
import Modal from "./Modal";

interface Props {
  disableActions?: boolean;
}

const OrdersControl: React.FC<Props> = ({ disableActions = false, }) => {
  const deliveryStatus = useSelector((state) => state.order.deliveryStatus);
  const dispatch = useDispatch();
  const [Status, setNewStatus] = useState("");
  const [DrugName, setNewDrugName] = useState("");
  const [Quantity, setNewQuantity] = useState("");
  const [Manufacturer, setNewManufacturer] = useState("");
  const [ManufacturerCountry, setNewManufacturerCountry] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useSelector((state) => state.order.data);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(e.target.value);
  };

  const handleDrugNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDrugName(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewManufacturer(e.target.value);
  };

  const handleManufacturerCountryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewManufacturerCountry(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      // Dispatch actions to update the status and other details
      dispatch(updateDeliveryStatus(Status));
      dispatch(updateDrugName(DrugName));
      dispatch(updateQuantity(Quantity));
      dispatch(updateManufacturer(Manufacturer));
      dispatch(updateManufacturerCountry(ManufacturerCountry));

      // Add the new order to the server
      await dispatch(
        addOrder({
          Status,
          DrugName,
          Quantity,
          Manufacturer,
          ManufacturerCountry,
        })
      );

      // Close the modal after submission
      closeModal();
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);


  const OrdersTable = ({ data }) => {
    // Filter out the message object from the data array
    const orders = data.filter(order => order.id);

    return (
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Drug Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Manufacturer</th>
            <th className="px-4 py-2">Manufacturer Country</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.DrugName}</td>
              <td className="border px-4 py-2">{order.Quantity}</td>
              <td className="border px-4 py-2">{order.Manufacturer}</td>
              <td className="border px-4 py-2">{order.ManufacturerCountry}</td>
              <td className="border px-4 py-2">{order.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };




  return (
    <>
      <button
        onClick={openModal}
        className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add New
      </button>

      {/* Modal for adding new order */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="max-w-md mx-auto px-4 py-8">
          <div className="text-xl md:text-2xl my-10 text-center">
            Order status Control
          </div>
          <p className="mb-4 text-green-sec">
            Current Status:{" "}
            <span className="text-red-pri font-semibold">
              {" "}
              {deliveryStatus}
            </span>
          </p>
          <select
            value={Status}
            onChange={handleStatusChange}
            className={`w-full border rounded-md px-3 py-2 mb-4 ${Status ? "border-green-pri" : ""
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
            submit
          </button>
        </div>
      </Modal>

      <h1>Table</h1>
      <OrdersTable data={data || []} />
    </>
  );
};

export default OrdersControl;
