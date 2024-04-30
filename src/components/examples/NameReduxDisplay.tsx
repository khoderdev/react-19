// import React, { useEffect, useState } from "react";

// function NameReduxDisplay() {
//   const [nameStatus, setNameStatus] = useState(
//     localStorage.getItem("nameStatus") || ""
//   );

//   useEffect(() => {
//     const handleStorageChange = () => {
//         setNameStatus(localStorage.getItem("nameStatus") || "");
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   return (
//     <div>
//       <h3>Order Status Display</h3>
//       <h2>
//         Updated Delivery Status:
//         <span className="text-red-pri ml-4 font-semibold">
//           {nameStatus}
//         </span>
//       </h2>
//     </div>
//   );
// }

// export default NameReduxDisplay;
import React from 'react';

function NameReduxDisplay({ nameStatus }) {
  return (
    <div>
      <h3>Name Redux Display</h3>
      <h2>
        Updated Name Status:
        <span className="text-red-pri ml-4 font-semibold">
          {nameStatus}
        </span>
      </h2>
    </div>
  );
}

export default NameReduxDisplay;

