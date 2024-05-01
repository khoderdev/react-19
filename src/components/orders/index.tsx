import React from 'react'
import { Link } from 'react-router-dom'

function OrdersPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl mb-10">Orders Page</div>
            <div className="flex justify-center items-center space-x-4">
                <Link to='/orders/control' className="bg-blue-sec hover:bg-blue-pri text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Control
                </Link>
                <Link to='/orders/status' className="bg-blue-sec hover:bg-blue-pri text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Status
                </Link>
            </div>
        </div>
    )
}

export default OrdersPage