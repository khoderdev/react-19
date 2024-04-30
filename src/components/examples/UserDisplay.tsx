import React, { useEffect, useState } from "react";

function UserStatus() {
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
        <div>
            <h2>
                User Status:
                <span className="text-red-pri ml-4 font-semibold">
                    {userStatus}
                </span>
            </h2>
        </div>
    );
}

export default UserStatus;
