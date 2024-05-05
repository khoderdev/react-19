// import { useEffect, useState } from 'react';
// import Modal from './Modal';
// import getStatusColor from '../../../utils/statusColors';
// import { ordersAtom } from '../../store';
// import { useAtom } from 'jotai';

// const OrdersTable = () => {
//     const [orders, setOrdersAtom] = useAtom(ordersAtom);
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         DrugName: '',
//         Quantity: '',
//         Manufacturer: '',
//         ManufacturerCountry: '',
//         Status: 'Pending',
//     });
//     const [editMode, setEditMode] = useState(false);
//     const [editOrderId, setEditOrderId] = useState(null);
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);

//     // Ensure orders is initialized as an array
//     useEffect(() => {
//         if (!Array.isArray(orders)) {
//             setOrdersAtom([]);
//         }
//     }, [orders, setOrdersAtom]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({ ...prevData, [name]: value }));
//     };

//     const handleStatusChange = (e) => {
//         const { value } = e.target;
//         setFormData(prevData => ({ ...prevData, Status: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (editMode && editOrderId !== null) {
//             // Update existing order
//             const updatedOrders = orders.map(order =>
//                 order.id === editOrderId ? formData : order
//             );
//             setOrdersAtom(updatedOrders);
//             setEditMode(false);
//             setEditOrderId(null);
//         } else {
//             // Add new order
//             const newOrder = {
//                 ...formData,
//                 id: Math.random().toString(36).substring(2, 9),
//             };
//             setOrdersAtom(prevOrders => [...prevOrders, newOrder]);
//         }
//         setShowForm(false);
//         setFormData({
//             DrugName: '',
//             Quantity: '',
//             Manufacturer: '',
//             ManufacturerCountry: '',
//             Status: 'Pending',
//         });
//     };

//     const handleEditOrder = (id) => {
//         // Find the order to edit
//         const orderToEdit = orders.find(order => order.id === id);
//         if (orderToEdit) {
//             // Set the form data to the order's data
//             setFormData(orderToEdit);
//             // Show the form
//             setShowForm(true);
//             // Set edit mode and editOrderId
//             setEditMode(true);
//             setEditOrderId(id);
//         }
//     };

//     const handleCancelEdit = () => {
//         setShowForm(false);
//         setEditMode(false);
//         setEditOrderId(null);
//         setFormData({
//             DrugName: '',
//             Quantity: '',
//             Manufacturer: '',
//             ManufacturerCountry: '',
//             Status: 'Pending',
//         });
//     };

//     const handleCancelCreate = () => {
//         setShowForm(false);
//         setFormData({
//             DrugName: '',
//             Quantity: '',
//             Manufacturer: '',
//             ManufacturerCountry: '',
//             Status: 'Pending',
//         });
//     };

//     const handleDeleteOrder = (id) => {
//         // Set the order to delete and show confirmation modal
//         setOrderToDelete(id);
//         setShowConfirmation(true);
//     };

//     const confirmDelete = () => {
//         // Filter out the order to delete
//         const updatedOrders = orders.filter(order => order.id !== orderToDelete);
//         setOrdersAtom(updatedOrders);
//         // Hide the confirmation modal
//         setShowConfirmation(false);
//     };

//     const handleCancelDelete = () => {
//         // Reset the order to delete and hide the confirmation modal
//         setOrderToDelete(null);
//         setShowConfirmation(false);
//     };


import { useState } from 'react';
import Modal from './Modal';
import getStatusColor from '../../../utils/statusColors';
import { ordersAtom } from '../../store';
import { useAtom } from 'jotai';

const OrdersTable = () => {
    // Initialize ordersAtom directly with a default empty array
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
            const updatedOrders = orders.map(order =>
                order.id === editOrderId ? formData : order
            );
            setOrdersAtom(updatedOrders);
            setEditMode(false);
            setEditOrderId(null);
        } else {
            // Add new order
            const newOrder = {
                ...formData,
                id: Math.random().toString(36).substring(2, 9),
            };
            setOrdersAtom(prevOrders => [...prevOrders, newOrder]);
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
        <div className="overflow-x-auto">
            <h2 className="text-lg font-semibold">Orders Table</h2>
            <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-2" onClick={() => setShowForm(true)}>Create</button>
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
                        <button onClick={confirmDelete} className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded">Delete</button>
                        <button onClick={handleCancelDelete} className="bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded ml-2">Cancel</button>
                    </div>
                </div>
            </Modal>
            <table className="table-auto divide-y divide-gray-200 mt-4">
                <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-[#fff] text-left uppercase tracking-wider">Drug Name</th>
                        <th className="px-6 py-3 text-[#fff] text-left uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-[#fff] text-left uppercase tracking-wider">Manufacturer</th>
                        <th className="px-6 py-3 text-[#fff] text-left uppercase tracking-wider">Country</th>
                        <th className="px-6 py-3 text-[#fff] text-left uppercase tracking-wider">Status</th>
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
                                <button onClick={() => handleEditOrder(order.id)} className="btn-bg-green">Edit</button>
                                <button onClick={() => handleDeleteOrder(order.id)} className="btn-bordered-red">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
