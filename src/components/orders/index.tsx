import React from 'react'
import { Link } from 'react-router-dom'

function OrdersPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl mb-10">Orders Page</div>
            <div className="flex justify-center items-center space-x-4">
                <Link to='/orders/control' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
                    Control
                </Link>
                <Link to='/orders/list' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
                    Status
                </Link>
            </div>
        </div>
    )
}

export default OrdersPage