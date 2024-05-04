import React, { useEffect, useState } from 'react';

const OrdersTable = () => {
    const [orders, setOrders] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        DrugName: '',
        Quantity: '',
        Manufacturer: '',
        ManufacturerCountry: '',
        Status: 'Pending'
    });
    const [editMode, setEditMode] = useState(false);
    const [editOrderId, setEditOrderId] = useState(null);

    useEffect(() => {
        // Function to handle changes in localStorage
        const handleLocalStorageChange = () => {
            const storedOrders = localStorage.getItem('orders');
            if (storedOrders) {
                setOrders(JSON.parse(storedOrders));
            }
        };

        // Subscribe to changes in localStorage
        window.addEventListener('storage', handleLocalStorageChange);

        // Initialize orders from localStorage
        handleLocalStorageChange();

        // Clean up the subscription on component unmount
        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode && editOrderId !== null) {
            // Update existing order
            const updatedOrders = orders.map(order =>
                order.id === editOrderId ? formData : order
            );
            setOrders(updatedOrders);
            localStorage.setItem('orders', JSON.stringify(updatedOrders));
            setEditMode(false);
            setEditOrderId(null);
        } else {
            // Add new order
            const newOrder = {
                ...formData,
                id: Math.random().toString(36).substring(2, 9)
            };
            setOrders([...orders, newOrder]);
            localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
        }
        setShowForm(false);
        setFormData({
            DrugName: '',
            Quantity: '',
            Manufacturer: '',
            ManufacturerCountry: '',
            Status: 'Pending'
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

    const handleDeleteOrder = (id) => {
        // Filter out the order to delete
        const updatedOrders = orders.filter(order => order.id !== id);
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
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
            Status: 'Pending'
        });
    };

    return (
        <div>
            <h2>Orders Table</h2>
            <button onClick={() => setShowForm(true)}>Create</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Drug Name:
                        <input
                            type="text"
                            name="DrugName"
                            value={formData.DrugName}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Quantity:
                        <input
                            type="text"
                            name="Quantity"
                            value={formData.Quantity}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Manufacturer:
                        <input
                            type="text"
                            name="Manufacturer"
                            value={formData.Manufacturer}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Manufacturer Country:
                        <input
                            type="text"
                            name="ManufacturerCountry"
                            value={formData.ManufacturerCountry}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">{editMode ? 'Update' : 'Submit'}</button>
                    {editMode && (
                        <button type="button" onClick={handleCancelEdit}>Cancel</button>
                    )}
                </form>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Drug Name</th>
                        <th>Quantity</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer Country</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.DrugName}</td>
                            <td>{order.Quantity}</td>
                            <td>{order.Manufacturer}</td>
                            <td>{order.ManufacturerCountry}</td>
                            <td>{order.Status}</td>
                            <td>
                                <button onClick={() => handleEditOrder(order.id)}>Edit</button>
                                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
