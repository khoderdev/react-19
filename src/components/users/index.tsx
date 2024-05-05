import React from 'react'
import { Link } from 'react-router-dom'

function UsersPage() {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl mb-10">Users Page</div>
            <div className="flex justify-center items-center space-x-4">
                <Link to='/users/control' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
                    Control
                </Link>
                <Link to='/users/list' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
                    List
                </Link>
            </div>
        </div>
    )
}

export default UsersPage