import { useState, useEffect } from 'react';
import Modal from './Modal';
import getStatusColor from '../../../utils/statusColors';
import { ordersAtom } from '../../store';
import { useAtom } from 'jotai';

const OrdersTable = () => {
    const [orders, setOrdersAtom] = useAtom(ordersAtom);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        DrugName: '',
        Quantity: '',
        Manufacturer: '',
        ManufacturerCountry: '',
        Status: 'Pending',
    });
    const [editMode, setEditMode] = useState(false);
    const [editOrderId, setEditOrderId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);

    const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:3005/orders/");
            if (!response.ok) {
                throw new Error("Failed to fetch orders");
            }
            const ordersData = await response.json();
            setOrdersAtom(ordersData);
        } catch (error) {
            console.error("Error fetching orders:", error.message);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []); // Fetch orders on component mount

    // API request function for creating a new order
    const createOrder = async (data) => {
        try {
            const response = await fetch("http://localhost:3005/orders/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Failed to create order");
            }
            // Handle successful response if needed
        } catch (error) {
            console.error("Error creating order:", error.message);
            // Handle error if needed
        }
    };

    const updateOrder = async (id, data) => {
        try {
            const response = await fetch(`http://localhost:3005/orders/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Failed to update order");
            }
            fetchOrders(); // Refresh orders after update
        } catch (error) {
            console.error("Error updating order:", error.message);
        }
    };

    const deleteOrder = async (id) => {
        try {
            const response = await fetch(`http://localhost:3005/orders/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete order");
            }
            fetchOrders(); // Refresh orders after delete
        } catch (error) {
            console.error("Error deleting order:", error.message);
        }
    };


    // Rest of the component remains unchanged
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleStatusChange = (e) => {
        const { value } = e.target;
        setFormData(prevData => ({ ...prevData, Status: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode && editOrderId !== null) {
            // Update existing order
            updateOrder(editOrderId, formData);
            const updatedOrders = orders.map(order =>
                order.id === editOrderId ? formData : order
            );
            setOrdersAtom(updatedOrders);
            setEditMode(false);
            setEditOrderId(null);
        } else {
            // Add new order
            createOrder(formData); // Call the createOrder function to submit the order
            setOrdersAtom(prevOrders => [...prevOrders, formData]); // Update the local state optimistically
        }
        setShowForm(false);
        setFormData({
            DrugName: '',
            Quantity: '',
            Manufacturer: '',
            ManufacturerCountry: '',
            Status: 'Pending',
        });
    };

    const handleEditOrder = (id) => {
        // Find the order to edit
        const orderToEdit = orders.find(order => order.id === id);
        if (orderToEdit) {
            // Set the form data to the order's data
            setFormData(orderToEdit);
            // Show the form
            setShowForm(true);
            // Set edit mode and editOrderId
            setEditMode(true);
            setEditOrderId(id);
        }
    };

    const handleCancelEdit = () => {
        setShowForm(false);
        setEditMode(false);
        setEditOrderId(null);
        setFormData({
            DrugName: '',
            Quantity: '',
            Manufacturer: '',
            ManufacturerCountry: '',
            Status: 'Pending',
        });
    };

    const handleCancelCreate = () => {
        setShowForm(false);
        setFormData({
            DrugName: '',
            Quantity: '',
            Manufacturer: '',
            ManufacturerCountry: '',
            Status: 'Pending',
        });
    };

    const handleDeleteOrder = (id) => {
        // Set the order to delete and show confirmation modal
        setOrderToDelete(id);
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        // Delete the order
        deleteOrder(orderToDelete);
        // Filter out the order to delete
        const updatedOrders = orders.filter(order => order.id !== orderToDelete);
        setOrdersAtom(updatedOrders);
        // Hide the confirmation modal
        setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
        // Reset the order to delete and hide the confirmation modal
        setOrderToDelete(null);
        setShowConfirmation(false);
    };

    return (
        <>
            <h2 className="text-lg text-center font-semibold mb-8">Orders Table</h2>
            <div className="overflow-x-auto flex flex-col justify-center items-center ">

                <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-semibold">Drug Name:</label>
                            <input
                                type="text"
                                name="DrugName"
                                value={formData.DrugName}
                                onChange={handleInputChange}
                                className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Quantity:</label>
                            <input
                                type="number"
                                name="Quantity"
                                value={formData.Quantity}
                                onChange={handleInputChange}
                                className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Manufacturer:</label>
                            <input
                                type="text"
                                name="Manufacturer"
                                value={formData.Manufacturer}
                                onChange={handleInputChange}
                                className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Country:</label>
                            <input
                                type="text"
                                name="ManufacturerCountry"
                                value={formData.ManufacturerCountry}
                                onChange={handleInputChange}
                                className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                            />
                        </div>
                        <div className=''>
                            <label className="block font-semibold">Status:</label>
                            <select
                                value={formData.Status}
                                onChange={handleStatusChange}
                                className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                            >
                                <option value="">Select status...</option>
                                <option value="Pending" style={{ color: getStatusColor('Pending') }}>Pending</option>
                                <option value="Accepted" style={{ color: getStatusColor('Accepted') }}>Accepted</option>
                                <option value="Rejected" style={{ color: getStatusColor('Rejected') }}>Rejected</option>
                                <option value="To be corrected" style={{ color: getStatusColor('To be corrected') }}>To be corrected</option>
                            </select>
                        </div>
                        <button type="submit" className="font-bold py-2 px-4 rounded">
                            {editMode ? 'Update' : 'Submit'}
                        </button>
                        <button onClick={editMode ? handleCancelEdit : handleCancelCreate} className=" font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </form>
                </Modal>
                <Modal isOpen={showConfirmation} onClose={handleCancelDelete}>
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">Confirm Deletion</p>
                        <p>Are you sure you want to delete this order?</p>
                        <div className="flex justify-end">
                            <button onClick={confirmDelete} className="">Delete</button>
                            <button onClick={handleCancelDelete} className="!border">Cancel</button>
                        </div>
                    </div>
                </Modal>

                <div className='w-full md:w-1/2 items-end flex flex-col'>
                    <button className="btn-main-lg !bg-green-pri hover:!bg-white-bg dark:hover:!bg-black-contents dark:text-black-text !font-medium hover:!text-black-text dark:hover:!text-white-text" onClick={() => setShowForm(true)}>Create</button>
                </div>

                <div className='w-full md:w-1/2 overflow-x-auto mt-4'>
                    <table className="w-full divide-y divide-gray-700">
                        <thead className="">
                            <tr>
                                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">Drug</th>
                                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">Manufacturer</th>
                                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">Country</th>
                                <th className="px-6 py-3 dark:text-white text-left uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-red-pri text-left uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-3 whitespace-nowrap">{order.DrugName}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{order.Quantity}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{order.Manufacturer}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{order.ManufacturerCountry}</td>
                                    <td className="px-6 py-3 whitespace-nowrap font-semibold" style={{ color: getStatusColor(order.Status) }}>{order.Status}</td>
                                    <td className="px-6 py-3 whitespace-nowrap flex gap-2">
                                        <button onClick={() => handleEditOrder(order.id)} className="btn-bg-green hover:text-black-text dark:hover:text-white-text">Edit</button>
                                        <button onClick={() => handleDeleteOrder(order.id)} className="btn-bordered-red hover:bg-red-pri dark:hover:bg-red-pri bg-white-bg dark:bg-black-bg">Delete</button>
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