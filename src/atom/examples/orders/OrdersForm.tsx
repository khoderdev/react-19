import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersAtom, isSubmitting, successMessageTimeoutAtom } from '../../store';
import { useAtom } from 'jotai';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';


const Form = () => {
    // Destructure and get the orders atom and its setter function from the store using Jotai's useAtom hook
    const [orders, setOrdersAtom] = useAtom(ordersAtom);
    // Destructure and get the submitting state atom and its setter function from the store using Jotai's useAtom hook
    const [submitting, setSubmitting] = useAtom(isSubmitting);
    // Initialize a state variable formData using useState, representing the form data with default values
    const [formData, setFormData] = useState({
        DrugName: '',
        Quantity: '',
        Manufacturer: '',
        ManufacturerCountry: '',
        Status: 'Pending',
    });
    // Initialize a state variable successMessage using useState, representing the success message status with default value as false
    const [successMessage, setSuccessMessage] = useState(true);
    // Get successMessageTimeoutAtom directly from the store using Jotai's useAtom hook
    const [successMessageTimeout, setSuccessMessageTimeout] = useAtom(successMessageTimeoutAtom);
    const navigate = useNavigate()
    // Define a handleChange function to handle changes in form input fields
    const handleChange = (e) => {
        // Destructure the name and value from the event target
        const { name, value } = e.target;
        // Update the formData state object based on the changed input field
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Define a handleSubmit function to handle form submission
    const handleSubmit = async (e) => { // Make the handleSubmit function asynchronous
        // Prevent the default form submission behavior
        e.preventDefault();
        // Set the submitting state to true to indicate form submission is in progress
        setSubmitting(true);
        // Create a new order object with the form data and a random id
        const newOrder = {
            ...formData,
            id: Math.random().toString(36).substring(2, 9),
        };
        // Update the orders atom with the new order by appending it to the existing orders
        setOrdersAtom(prevOrders => [...prevOrders, newOrder]);

        // Reset the form data after submission
        setFormData({
            DrugName: '',
            Quantity: '',
            Manufacturer: '',
            ManufacturerCountry: '',
            Status: 'Pending',
        });

        // Set submitting to false after 1000 milliseconds to simulate a delay
        setTimeout(async () => { // Make the setTimeout callback asynchronous
            setSubmitting(false);

            // After submission, set the success message to true and define a timeout to reset it after 3000 milliseconds
            setSuccessMessage(true);
            const timeout = setTimeout(() => {
                setSuccessMessage(false);
            }, 3000); // Change the timeout duration to 3000 milliseconds (3 seconds)
            // Set the success message timeout atom to the defined timeout
            setSuccessMessageTimeout(timeout);

            // Add the API request here
            try {
                const response = await fetch("http://localhost:3005/orders/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) {
                    throw new Error("Failed to submit order");
                }
                // Handle successful response if needed
            } catch (error) {
                console.error("Error submitting order:", error.message);
                // Handle error if needed
            }
        }, 1000); // Change the timeout duration to 1000 milliseconds (1 second)
    };


    const handleGoBack = () => {
        navigate('/jotai/orders/list')
    };

    return (
        <form className='flex flex-col w-full items-center' onSubmit={handleSubmit}>
            <div className='flex w-full items-center px-4 md:px-16'>
                <span className='flex'>
                    <ArrowLeftIcon className='w-8 md:w-12 cursor-pointer mr-1' onClick={handleGoBack} />
                </span>
                <p>Go to orders</p>
            </div>
            <h4 className='flex'>Add new order  </h4>
            {successMessage && (
                <p className='text-xl font-semibold border rounded-md p-4 shadow-md shadow-[#22c55ea8] !text-green-pri text-center my-6'>Order has been Submitted successfully!</p>
            )}
            <div className='flex flex-col md:w-[30%] justify-center gap-4'>
                <div>
                    <label htmlFor="DrugName">Drug Name:</label>
                    <input
                        type="text"
                        id="DrugName"
                        name="DrugName"
                        value={formData.DrugName}
                        onChange={handleChange}
                        required
                        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                    />
                </div>
                <div>
                    <label htmlFor="Quantity">Quantity:</label>
                    <input
                        type="number"
                        id="Quantity"
                        name="Quantity"
                        value={formData.Quantity}
                        onChange={handleChange}
                        required
                        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                    />
                </div>
                <div>
                    <label htmlFor="Manufacturer">Manufacturer:</label>
                    <input
                        type="text"
                        id="Manufacturer"
                        name="Manufacturer"
                        value={formData.Manufacturer}
                        onChange={handleChange}
                        required
                        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                    />
                </div>
                <div>
                    <label htmlFor="ManufacturerCountry">Country:</label>
                    <input
                        type="text"
                        id="ManufacturerCountry"
                        name="ManufacturerCountry"
                        value={formData.ManufacturerCountry}
                        onChange={handleChange}
                        required
                        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
                    />
                </div>
                <button className='btn-bg-green' type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default Form;
