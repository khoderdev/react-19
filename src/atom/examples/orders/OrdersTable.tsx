import React, { useState, useEffect } from "react";
import Modal from "./Modal copy"; // Ensure you have a Modal component for adding/editing orders
import OrderForm from "./OrdersForm";
import getStatusColor from "../../../utils/statusColors";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    productId: "",
    quantity: "",
    status: "Pending",
    userId: "",
    warehouseId: "",
    branchId: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editOrderId, setEditOrderId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/orders/");
      if (!response.ok) throw new Error("Failed to fetch orders");
      const ordersData = await response.json();
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  const createOrder = async (data: {
    productId: string;
    quantity: string;
    status: string;
    userId: string;
    warehouseId: string;
    branchId: string;
  }) => {
    try {
      const response = await fetch("http://localhost:3005/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to create order");
      fetchOrders(); // Refresh orders list
    } catch (error) {
      console.error("Error creating order:", error.message);
    }
  };

  const updateOrder = async (
    id: never,
    data: {
      productId: string;
      quantity: string;
      status: string;
      userId: string;
      warehouseId: string;
      branchId: string;
    }
  ) => {
    try {
      const response = await fetch(`http://localhost:3005/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to update order");
      fetchOrders(); // Refresh orders list
    } catch (error) {
      console.error("Error updating order:", error.message);
    }
  };

  const deleteOrder = async (id: never) => {
    try {
      const response = await fetch(`http://localhost:3005/api/orders/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete order");
      fetchOrders(); // Refresh orders list
    } catch (error) {
      console.error("Error deleting order:", error.message);
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (editMode && editOrderId) {
      await updateOrder(editOrderId, formData);
      setEditMode(false);
      setEditOrderId(null);
    } else {
      await createOrder(formData);
    }
    setFormData({
      productId: "",
      quantity: "",
      status: "Pending",
      userId: "",
      warehouseId: "",
      branchId: "",
    });
    setShowForm(false);
  };

  const handleEdit = (order: never) => {
    setFormData({
      productId: order.productId || "",
      quantity: order.quantity || "",
      status: order.status || "Pending",
      userId: order.userId || "",
      warehouseId: order.warehouseId || "",
      branchId: order.branchId || "",
    });
    setEditMode(true);
    setEditOrderId(order.id);
    setShowForm(true);
  };

  const handleDelete = (orderId: React.SetStateAction<null>) => {
    setOrderToDelete(orderId);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    if (orderToDelete) {
      await deleteOrder(orderToDelete);
      setOrderToDelete(null);
      setShowConfirmation(false);
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex w-full justify-between items-center px-2 md:px-16 mb-4 border">
        <span>
          <ArrowLeftIcon
            className="w-8 md:w-8 cursor-pointer mr-1"
            onClick={handleGoBack}
          />
        </span>
        <h2 className="text-lg text-center font-semibold mb-8">Orders Table</h2>
        <div className=""></div>
      </div>
      <div className="overflow-x-auto flex flex-col justify-center items-center ">
        <button onClick={() => setShowForm(true)}>Add Order</button>

        {showForm && (
          <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
            <OrderForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              editMode={editMode}
            />
          </Modal>
        )}

        {showConfirmation && (
          <Modal onClose={() => setShowConfirmation(false)}>
            <p>Are you sure you want to delete this order?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={() => setShowConfirmation(false)}>No</button>
          </Modal>
        )}

        <div className="w-full md:w-2/3 overflow-x-auto mt-4">
          <table className="w-full divide-y divide-gray-700">
            <thead className="">
              <tr>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  Product ID
                </th>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  Warehouse ID
                </th>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  Branch ID
                </th>
                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {order.productId}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {order.quantity}
                  </td>
                  <td
                    className="px-6 py-3 whitespace-nowrap font-semibold"
                    style={{ color: getStatusColor(order.status) }}
                  >
                    {order.status}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {order.userId}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {order.warehouseId}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {order.branchId}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <button onClick={() => handleEdit(order)}>Edit</button>
                    <button onClick={() => handleDelete(order.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
