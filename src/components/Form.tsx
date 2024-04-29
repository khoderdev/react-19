// Form.js
import React from 'react';

export default function Form({ firstName, setFirstName, lastName, setLastName }) {
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}
