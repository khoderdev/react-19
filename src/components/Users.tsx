// Users.js
import React, { useEffect } from 'react';
import { NameConsumer } from '../contexts/NameContext';

function Users() {

    useEffect(() => {
        console.log('Users component re-rendered. Name:', name);
    }, [name]);

    console.log('Rendering from Users Component');

    return (
        <>
            <div className="text-center text-3xl mb-16">Users</div>
            <NameConsumer>
                {({ name }) => (
                    <h2>Name: {name}</h2>
                )}
            </NameConsumer>
        </>
    );
}

export default Users;


// // import React, { useEffect } from 'react';
// // import { useName, NameConsumer } from '../contexts/NameContext';

// // function Users() {
// //     const { name } = useName();

// //     useEffect(() => {
// //         console.log('Users component re-rendered. Name:', name);
// //     }, [name]);

// //     console.log('Rendering from Users Component');

// //     return (
// //         <>
// //             <div className="text-center text-3xl mb-16">Users</div>
// //             <h2>Name: {name}</h2>
// //         </>
// //     );
// // }

// // export default Users;


// import React, { useEffect } from 'react';
// import { useName } from '../contexts/NameContext';

// function Users() {
//     const { name } = useName();

//     useEffect(() => {
//         console.log('Users component re-rendered. Name:', name);
//     }, [name]);

//     console.log('Rendering from Users Component');

//     return (
//         <>
//             <div className="text-center text-3xl mb-16">Users</div>
//             <h2>Name: {name}</h2>
//         </>
//     );
// }

// export default Users;
