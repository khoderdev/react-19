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
            <h2 className="mt-20">
                Users List and Status:
                <span className="text-red-pri ml-4 font-semibold">
                    {userStatus}
                </span>
            </h2>
        </>
    );
}

export default UsersList;
