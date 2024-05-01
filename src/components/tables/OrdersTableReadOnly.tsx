// OrdersTableReadOnly.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersTable from './OrdersTable';
import { fetchOrders } from '../../redux/slices/ordersSlice';

function OrdersTableReadOnly() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);

    useEffect(() => {
        // Fetch orders when component mounts
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <>
            <div>Table List</div>
            <OrdersTable disableActions data={orders} />
        </>
    );
}

export default OrdersTableReadOnly;
