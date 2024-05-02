// // OrdersTableReadOnly.tsx
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import OrdersTable from './OrdersTable';
// import { fetchOrders } from '../../redux/slices/ordersSlice';

// function OrdersTableReadOnly() {
//     const dispatch = useDispatch();
//     const orders = useSelector((state) => state.orders.orders);

//     useEffect(() => {
//         // Fetch orders when component mounts
//         dispatch(fetchOrders());
//     }, [dispatch]);

//     return (
//         <>
//             <div>Table List</div>
//             <OrdersTable disableActions data={orders} />
//         </>
//     );
// }
// export default OrdersTableReadOnly;






// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from 'react-redux';
// // import OrdersTable from './OrdersTable';
// // import { fetchOrders } from '../../redux/slices/ordersSlice';


// // function OrdersTableReadOnly() {
// //     const dispatch = useDispatch();
// //     const orders = useSelector((state) => state.orders.orders);
// //     const [deliveryStatus, setDeliveryStatus] = useState(
// //         localStorage.getItem("deliveryStatus") || ""
// //     );

// //     useEffect(() => {
// //         const handleStorageChange = () => {
// //             setDeliveryStatus(localStorage.getItem("deliveryStatus") || "");
// //         };

// //         window.addEventListener("storage", handleStorageChange);

// //         return () => {
// //             window.removeEventListener("storage", handleStorageChange);
// //         };
// //     }, []);

// //     return (
// //         <>
// //             <div>Table List</div>
// //             <OrdersTable disableActions data={orders} />
// //         </>
// //     );
// // }

// // export default OrdersTableReadOnly;
// OrdersTableReadOnly.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersTable from './OrdersTable';
import { fetchOrders } from '../../redux/slices/ordersSlice';

function OrdersTableReadOnly() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);

    useEffect(() => {
        console.log("Fetching orders...");
        dispatch(fetchOrders());
    }, [dispatch]);

    useEffect(() => {
        console.log("Updating local storage with orders:", orders);
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]); // Listen for changes in the orders state

    console.log("Rendering OrdersTableReadOnly with orders:", orders);

    return (
        <>
            <div>Table List</div>
            <OrdersTable disableActions data={orders} />
        </>
    );
}

export default OrdersTableReadOnly;
