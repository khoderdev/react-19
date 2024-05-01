
// Update and Render the Value Changes by Clicking on the Update button:

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateUserStatus } from "../../redux/slices/userSlice";

// function UserButtonsUpdate() {
//     // Selecting the userStatus from the Redux store state
//     const userStatus = useSelector((state) => state.user.userStatus);

//     // Getting the dispatch function from the Redux store
//     const dispatch = useDispatch();

//     // Local state to store the new status entered by the user
//     const [newStatus, setNewStatus] = useState("");

//     // Function to handle changes in the input field for new status
//     const handleStatusChange = (e) => {
//         // Updating the newStatus state with the value entered in the input field
//         setNewStatus(e.target.value);
//     };

//     // Function to handle updating the user status
//     const handleUpdateStatus = () => {
//         // Checking if the newStatus is not empty or invalid
//         if (newStatus) {
//             // Dispatching the updateUserStatus action with the new status
//             dispatch(updateUserStatus(newStatus));
//         } else {
//             // Logging an error if the newStatus is empty or invalid
//             console.error('New status is empty or invalid');
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold mb-4">User Status Update</h2>
//             {/* Displaying the current user status */}
//             <p className="mb-4 text-green-sec">
//                 Current Status: <span className="text-red-pri font-semibold"> {userStatus}</span>
//             </p>
//             {/* Input field for entering new status */}
//             <input
//                 type="text"
//                 value={newStatus}
//                 onChange={handleStatusChange}
//                 className="w-full border rounded-md px-3 py-2 mb-4"
//                 placeholder="Enter new status..."
//             />
//             {/* Button to update user status */}
//             <button
//                 onClick={handleUpdateStatus}
//                 className="btn-modal-normal text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//                 Update Status
//             </button>
//         </div>
//     );
// }

// export default UserButtonsUpdate;

// ----------------------------------------------------------

// Update and Render the Value Changes instantly:


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStatus } from "../../redux/slices/userSlice";

function UsersControl() {
    // Selecting the userStatus from the Redux store state
    const userStatus = useSelector((state) => state.user.userStatus);

    // Getting the dispatch function from the Redux store
    const dispatch = useDispatch();

    // Local state to store the new status entered by the user
    const [newStatus, setNewStatus] = useState("");

    // Function to handle changes in the input field for new status
    const handleStatusChange = (e) => {
        // Updating the newStatus state with the value entered in the input field
        const newValue = e.target.value;
        setNewStatus(newValue);
        // Dispatching the updateUserStatus action with the new status whenever the input value changes
        dispatch(updateUserStatus(newValue));
    };

    return (
        <div className="max-w-md mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">User Status Update</h2>
            {/* Displaying the current user status */}
            <p className="mb-4 text-green-sec">
                Current Status: <span className="text-red-pri font-semibold"> {userStatus}</span>
            </p>
            {/* Input field for entering new status */}
            <input
                type="text"
                value={newStatus}
                onChange={handleStatusChange}
                className="w-full border rounded-md px-3 py-2 mb-4"
                placeholder="Enter new status..."
            />
        </div>
    );
}

export default UsersControl;
