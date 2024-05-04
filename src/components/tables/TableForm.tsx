// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addOrder, updateOrder, deleteOrder } from "../../redux/slices/ordersSlice";
// import { AsyncThunkAction } from "@reduxjs/toolkit";
// import { RootState } from "../../redux/store";

// function TableForm() {
//     const dispatch = useDispatch();
//     const [formData, setFormData] = useState({
//         id: "",
//         DrugName: "",
//         Quantity: "",
//         Manufacturer: "",
//         ManufacturerCountry: "",
//         Status: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     let nextId = 1;

//     const generateUniqueId = () => {
//         return nextId++;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault(); 

//         if (formData.id) {
//             // If ID exists, dispatch update action
//             dispatch(updateOrder({ id: formData.id, newData: formData }) as AsyncThunkAction<unknown, void, { state: RootState }>);
//         } else {
//             // If ID doesn't exist, generate a unique ID and dispatch add action
//             const id = generateUniqueId(); // Using the generateUniqueId function
//             dispatch(addOrder({ ...formData, id: id }) as AsyncThunkAction<unknown, void, { state: RootState }>);
//         }

//         // Reset form data
//         setFormData({
//             id: "",
//             DrugName: "",
//             Quantity: "",
//             Manufacturer: "",
//             ManufacturerCountry: "",
//             Status: "",
//         });
//     };


//     const handleDelete = (id) => {
//         // Dispatch delete action
//         dispatch(deleteOrder(id));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name="DrugName"
//                 value={formData.DrugName}
//                 onChange={handleChange}
//                 placeholder="Drug Name"
//             />
//             <input
//                 type="text"
//                 name="Quantity"
//                 value={formData.Quantity}
//                 onChange={handleChange}
//                 placeholder="Quantity"
//             />
//             <input
//                 type="text"
//                 name="Manufacturer"
//                 value={formData.Manufacturer}
//                 onChange={handleChange}
//                 placeholder="Manufacturer"
//             />
//             <input
//                 type="text"
//                 name="ManufacturerCountry"
//                 value={formData.ManufacturerCountry}
//                 onChange={handleChange}
//                 placeholder="Manufacturer Country"
//             />
//             <select name="Status" value={formData.Status} onChange={handleChange}>
//                 <option value="">Select status...</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Accepted">Accepted</option>
//                 <option value="Rejected">Rejected</option>
//                 <option value="To be Corrected">To be Corrected</option>
//             </select>
//             <button type="submit">{formData.id ? "Update" : "Add"}</button>
//             {formData.id && (
//                 <button type="button" onClick={() => handleDelete(formData.id)}>
//                     Delete
//                 </button>
//             )}
//         </form>
//     );
// }

// export default TableForm;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder, updateOrder, deleteOrder } from "../../redux/slices/ordersSliceOld2";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

function TableForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        DrugName: "",
        Quantity: "",
        Manufacturer: "",
        ManufacturerCountry: "",
        Status: "Pending",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.id) {
            // If ID exists, dispatch update action
            dispatch(updateOrder({ id: formData.id, newData: formData }) as AsyncThunkAction<unknown, void, { state: RootState }>);
        } else {
            // If ID doesn't exist, dispatch add action without ID
            dispatch(addOrder(formData) as AsyncThunkAction<unknown, void, { state: RootState }>);
        }

        // Reset form data
        setFormData({
            DrugName: "",
            Quantity: "",
            Manufacturer: "",
            ManufacturerCountry: "",
            Status: "",
        });
    };


    const handleDelete = (id) => {
        // Dispatch delete action
        dispatch(deleteOrder(id));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="DrugName"
                value={formData.DrugName}
                onChange={handleChange}
                placeholder="Drug Name"
            />
            <input
                type="text"
                name="Quantity"
                value={formData.Quantity}
                onChange={handleChange}
                placeholder="Quantity"
            />
            <input
                type="text"
                name="Manufacturer"
                value={formData.Manufacturer}
                onChange={handleChange}
                placeholder="Manufacturer"
            />
            <input
                type="text"
                name="ManufacturerCountry"
                value={formData.ManufacturerCountry}
                onChange={handleChange}
                placeholder="Manufacturer Country"
            />
            {/* <input
                type="text"
                name="ManufacturerCountry"
                value={formData.Status}
                onChange={handleChange}
                readOnly
            /> */}
            {/* <select name="Status" value={formData.Status} onChange={handleChange}>
                <option value="">Select status...</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
                <option value="To be Corrected">To be Corrected</option>
            </select> */}
            <button type="submit">{formData.id ? "Update" : "Add"}</button>
            {formData.id && (
                <button type="button" onClick={() => handleDelete(formData.id)}>
                    Delete
                </button>
            )}
        </form>
    );
}

export default TableForm;


