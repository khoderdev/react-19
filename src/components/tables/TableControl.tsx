import { useState, useEffect } from 'react';
import { fetchOrdersFromServer, updateOrderOnServer, deleteOrderFromServer } from '../../redux/slices/ordersApiOld1';
import OrdersTable from './OrdersTable';

const OrdersTableControl = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const orders = await fetchOrdersFromServer();
            setData(orders);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateOrder = async (updatedOrder: { id: any; }) => {
        try {
            await updateOrderOnServer(updatedOrder.id, updatedOrder);
            // Update the local data with the updated order
            const updatedData = data.map(order => (order.id === updatedOrder.id ? updatedOrder : order));
            setData(updatedData);
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };

    const deleteOrder = async (orderId: number) => {
        try {
            await deleteOrderFromServer(orderId);
            // Remove the deleted order from the local data
            const updatedData = data.filter(order => order.id !== orderId);
            setData(updatedData);
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    return (
        <div>
            <h1>Orders</h1>
            <OrdersTable data={data} updateOrder={updateOrder} deleteOrder={deleteOrder} />

        </div>
    );
};

export default OrdersTableControl;
