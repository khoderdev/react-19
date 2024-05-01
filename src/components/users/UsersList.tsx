import React, { useEffect, useState } from "react";

function UsersList() {
    const [userStatus, setUserStatus] = useState(
        localStorage.getItem("userStatus") || ""
    );

    useEffect(() => {
        const handleStorageChange = () => {
            setUserStatus(localStorage.getItem("userStatus") || "");
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <>
            <div className="text-2xl my-10 text-center">
                Order Status Display
            </div>
            <h2>
                Users List and Status:
                <span className="text-red-pri ml-4 font-semibold">
                    {userStatus}
                </span>
            </h2>
        </>
    );
}

export default UsersList;
