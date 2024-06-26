// import React, { useEffect, useState } from "react";

// function UsersList() {
//     const [userStatus, setUserStatus] = useState(
//         localStorage.getItem("userStatus") || ""
//     );

//     useEffect(() => {
//         const handleStorageChange = () => {
//             setUserStatus(localStorage.getItem("userStatus") || "");
//         };

//         window.addEventListener("storage", handleStorageChange);

//         return () => {
//             window.removeEventListener("storage", handleStorageChange);
//         };
//     }, []);

//     return (
//         <>
//             <div className="text-2xl my-10 text-center">
//                 Order Status Display
//             </div>
//             <h2>
//                 Users List and Status:
//                 <span className="text-red-pri ml-4 font-semibold">
//                     {userStatus}
//                 </span>
//             </h2>
//         </>
//     );
// }

// export default UsersList;


import { useAtom } from 'jotai'
import { userNameAtom } from '../../atom/store'

function UsersList() {
    const [userName,] = useAtom(userNameAtom);
    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl mb-10">Users Page</div>
            <h1>{userName}</h1>
        </div>
    )
}

export default UsersList