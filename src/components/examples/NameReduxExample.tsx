// // NameReduxExample.js
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setName } from "../../redux/slices/nameSlice"; // Correct import

// function NameReduxExample() {
//     const n = useSelector(state => state.name.n); // Correct state access
//     const dispatch = useDispatch();

//     return (
//         <>
//             <h3 className="text-center text-3xl mt-4 font-medium">Redux Example</h3>
//             <div className='py-16'>
//                 <h1 className='text-red-pri text-center font-semibold'>{n} </h1>
//                 <div className='flex justify-center items-center pt-4 gap-4 h-full'>
//                     <button className='rounded-lg p-1 !w-52 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch(setName("Ahmid"))}>name 1</button>
//                     <button className='rounded-lg p-1 !w-52 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg' onClick={() => dispatch(setName("Ucef"))}>name 2</button>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default NameReduxExample;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Updated import to use useSelector
import { updateNameStatus } from '../../redux/slices/nameSlice'; // Updated import to use updateNameStatus
import NameReduxDisplay from './NameReduxDisplay';

function NameReduxExample() {
  const dispatch = useDispatch();
  const nameStatus = useSelector(state => state.name.nameStatus); // Using useSelector to access nameStatus from Redux store

  useEffect(() => {
    const handleStorageChange = () => {
      dispatch(updateNameStatus(localStorage.getItem('name') || '')); // Dispatching the action to update nameStatus in Redux store
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch]); // Adding dispatch as a dependency for useEffect

  const handleSetName = (name) => {
    dispatch(updateNameStatus(name)); // Dispatching the action to update nameStatus in Redux store
  };

  return (
    <>
      <h3 className="text-center text-3xl mt-4 font-medium">Redux Example</h3>
      <div className="py-16">
        <NameReduxDisplay nameStatus={nameStatus} />
        <div className="flex justify-center items-center pt-4 gap-4 h-full">
          <button
            className="rounded-lg p-1 !w-52 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg"
            onClick={() => handleSetName('Ahmid')}
          >
            name 1
          </button>
          <button
            className="rounded-lg p-1 !w-52 flex justify-center items-center !border-2 !border-green-sec text-xl !font-bold hover:bg-green-sec hover:transition-all hover:border-4 hover:border-black-bg"
            onClick={() => handleSetName('Ucef')}
          >
            name 2
          </button>
        </div>
      </div>
    </>
  );
}

export default NameReduxExample;
