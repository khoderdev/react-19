// // Features.js
// import React from 'react';
// import { useName } from '../contexts/NameContext';

// function Features() {
//     const { handleChangeName } = useName();

//     return (
//         <>
//             <div className="text-center text-3xl mb-16">Features
//             </div>
//             <button className='btn-main-normal' onClick={handleChangeName}>Change Name</button>
//         </>
//     );
// }

// export default Features;


import React from 'react';
import { NameConsumer } from '../contexts/NameContext';

function Features() {
    
    return (
        <NameConsumer>
            {({ setName }) => (
                <div>
                    <button onClick={() => setName('Ucef')}>Change Name</button>
                </div>
            )}
        </NameConsumer>
    );
}

export default Features;


// //////////////////////



// import React from 'react';
// import { useName } from '../contexts/NameContext';

// export default function Features() {
//     const { name, setName } = useName();

//     console.log('Name in Features:', name); // Check the name state

//     const handleChangeName = () => {
//         setName('Peter'); // Call setName from context to change the name
//     };

//     return (
//         <>
//             <div className="text-center text-3xl mb-16">Features</div>
//             <button className='btn-main-normal' onClick={handleChangeName}>Change Name</button>
//         </>
//     );
// }
