// import React, { useState, useEffect } from 'react'

// function Table() {
//     const [query, setQuery] = useState("");
//     const [displayMessage, setDisplayMessage] = useState("");

//     useEffect(() => {
//         const timeOutId = setTimeout(() => setDisplayMessage(query), 500);
//         return () => clearTimeout(timeOutId);
//     }, [query]);

//     return (
//         <>
//             <input
//                 className='w-52 rounded-lg p-2'
//                 type="text"
//                 value={query}
//                 onChange={event => setQuery(event.target.value)}
//             />
//             <div className='w-full flex justify-center items-center'>
//                 <h1>{displayMessage}</h1>
//             </div>
//         </>
//     );
// }

// export default Table

// export const first = (payload) => ({
//   type: second,
//   payload
// })


// const initialState = {}

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case first:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {

// }

// const Table = createSlice({
//   name: second,
//   initialState,
//   reducers: {}
// });

// export const {} = Table.actions

// export default Table.reducer

import React from 'react'
import { connect } from 'react-redux'

export const Table = (props) => {
  return (
    <div>Table</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Table)