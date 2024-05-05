import React from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userNameAtom } from '../../atom/store'


function UsersPage() {
    const [userName,] = useAtom(userNameAtom);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl mb-10">Users Page</div>
            <div className="flex justify-center items-center space-x-4">
                <Link to='/users/control' className="bg-blue-sec hover:bg-blue-pri text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Control
                </Link>
                <Link to='/users/list' className="bg-blue-sec hover:bg-blue-pri text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    List
                </Link>
            </div>
            <h1>{userName}</h1>
        </div>
    )
}

export default UsersPage