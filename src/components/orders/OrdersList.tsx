import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getStatusColor from '../../utils/statusColors';

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    // const dispatch = useDispatch();

    // Subscribe to orders state from Redux store
    const ordersFromStore = useSelector(state => state.orders.orders);

    // Update local state when orders state in Redux store changes
    useEffect(() => {
        setOrders(ordersFromStore);
    }, [ordersFromStore]);

    // Function to handle changes in localStorage
    useEffect(() => {
        const handleLocalStorageChange = () => {
            const storedOrders = localStorage.getItem('orders');
            if (storedOrders) {
                setOrders(JSON.parse(storedOrders));
            }
        };
        // Subscribe to changes in localStorage
        window.addEventListener('storage', handleLocalStorageChange);

        // Initialize orders from localStorage on component mount
        handleLocalStorageChange();

        // Clean up the subscription on component unmount
        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <div className="overflow-x-auto">
            <h2 className="text-lg font-semibold">Orders List</h2>
            <div className="min-w-full">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Drug Name</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Manufacturer</th>
                            <th className="px-4 py-2">Country</th>
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
                                <td className="border px-4 py-2">
                                    <span style={{ color: getStatusColor(order.Status) }}>{order.Status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );

};

export default OrdersList;
