import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
        <div>
            <h2>Orders List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Drug Name</th>
                        <th>Quantity</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer Country</th>
                        <th>Status</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersList;
