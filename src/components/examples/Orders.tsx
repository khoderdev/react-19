import axios from 'axios'; // Import axios for making HTTP requests
import React, { useState } from 'react'; // Import React and useState hook

// Define a React functional component called Action
const Action = () => {
    // Define state variables for form inputs
    const [drugName, setDrugName] = useState("");
    const [quantity, setQuantity] = useState("");

    // Define a function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            // Make a POST request to the specified URL with the order data
            const response = await axios.post('http://localhost:3005/orders/create', {
                DrugName: drugName, // Get the value of the 'DrugName' input field
                Quantity: quantity // Get the value of the 'Quantity' input field
            });

            // Log the response data to the console
            console.log(response.data);
        } catch (error) {
            // Log any errors to the console
            console.error('Error submitting data:', error);
        }
    }

    // Return the JSX markup for the Action component
    return (
        <>
            <h3>action example</h3>
            {/* Define a form with an onSubmit event handler */}
            <form onSubmit={handleSubmit}>
                {/* Input field for DrugName */}
                <div>
                    <label>Drug Name</label>
                    <input
                        type="text"
                        name='DrugName'
                        value={drugName}
                        onChange={(e) => setDrugName(e.target.value)}
                    /> {/* 'name' attribute is used to identify the input field */}
                </div>
                {/* Input field for Quantity */}
                <div>
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    /> {/* 'name' attribute is used to identify the input field */}
                </div>
                {/* Submit button */}
                <button type='submit'>Submit</button> {/* Button type set to 'submit' to trigger form submission */}
            </form>
        </>
    )
}

export default Action; // Export the Action component as default




// import axios from 'axios'; // Import axios for making HTTP requests

// // Define an asynchronous function to submit order data to the specified URL
// const submitData = async (orderData) => {
//     try {
//         // Make a POST request to the specified URL with the order data
//         const response = await axios.post('http://localhost:3005/orders/create', {
//             DrugName: orderData.get('DrugName'), // Get the value of the 'DrugName' input field
//             Quantity: orderData.get('Quantity') // Get the value of the 'Quantity' input field
//         });
//         // Log the response data to the console
//         console.log(response.data);
//     } catch (error) {
//         // Log any errors to the console
//         console.error('Error submitting data:', error);
//     }
// }

// // Define a React functional component called Action
// const Action = () => {
//     // Define a function to handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         const formData = new FormData(event.target); // Create a FormData object from the form data
//         submitData(formData); // Call the submitData function with the form data
//     }

//     // Return the JSX markup for the Action component
//     return (
//         <>
//             <h3>action example</h3>
//             {/* Define a form with an onSubmit event handler */}
//             <form onSubmit={handleSubmit}>
//                 {/* Input field for DrugName */}
//                 <div>
//                     <label>Drug Name</label>
//                     <input type="text" name='DrugName' /> {/* 'name' attribute is used to identify the input field */}
//                 </div>
//                 {/* Input field for Quantity */}
//                 <div>
//                     <label>Quantity</label>
//                     <input type="number" name="Quantity" /> {/* 'name' attribute is used to identify the input field */}
//                 </div>
//                 {/* Submit button */}
//                 <button type='submit'>Submit</button> {/* Button type set to 'submit' to trigger form submission */}
//             </form>
//         </>
//     )
// }

// export default Action; // Export the Action component as default




// // // Define an asynchronous function to submit user data
// // const submitData = async (orderData) => {
// //     // Extract DrugName and Quantity from the form data object
// //     const newOrder = {
// //         DrugName: orderData.get('DrugName'), // Get the value of the 'Drug Name' input field
// //         Quantity: orderData.get('Quantity') // Get the value of the 'Quantity' input field
// //     }
// //     // Log the extracted user data to the console
// //     console.log(newOrder)
// // }

// // const Action = () => {
// //     return (
// //         <>
// //             <h3>action example</h3>
// //             {/* Define a form with an onSubmit action */}
// //             <form action={submitData}>
// //                 {/* Input field for username */}
// //                 <div>
// //                     <label>Drug Name</label>
// //                     <input type="text" name='DrugName' /> {/* 'name' attribute is used to identify the input field */}
// //                 </div>
// //                 {/* Input field for email */}
// //                 <div>
// //                     <label>Quantity</label>
// //                     <input type="number" name="Quantity" /> {/* 'name' attribute is used to identify the input field */}
// //                 </div>
// //                 {/* Submit button */}
// //                 <button type='submit'>Submit</button> {/* Button type set to 'submit' to trigger form submission */}
// //             </form>
// //         </>
// //     )
// // }

// // export default Action;



