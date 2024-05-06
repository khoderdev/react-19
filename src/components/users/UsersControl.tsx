// import { userNameAtom } from "../../atom/store";
// import { useAtom } from "jotai";

// function Users() {
//   const [userName, setUserName] = useAtom(userNameAtom);
//   const firstUserName = "Khoder"; // First name
//   const secondUserName = "Tonai"; // Second name

//   // Function to update userName and trigger localStorage update
//   const toggleUserName = () => {
//     const nextName =
//       userName === firstUserName ? secondUserName : firstUserName; // Toggle between two names
//     setUserName(nextName); // Update userName with next name
//   };

//   return (
//     <div>
//       <h1>{userName}</h1>
//       <button onClick={toggleUserName}>Change Name</button>
//     </div>
//   );
// }

// export default Users;

import { useAtom } from 'jotai';
import { userNameAtom } from "../../atom/store";

function Users() {
    const [userName, setUserName] = useAtom(userNameAtom);
    const firstUserName = "Khoder"; // First name
    const secondUserName = "Tonai"; // Second name

    // Function to update userName and trigger localStorage update
    const toggleUserName = () => {
        const nextName =
            userName === firstUserName ? secondUserName : firstUserName; // Toggle between two names
        setUserName(nextName); // Update userName with next name
    };

    return (
        <div>
            <h1>{userName}</h1>
            <button onClick={toggleUserName}>Change Name</button>
        </div>
    );
}

export default Users;
