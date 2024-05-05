// Define an asynchronous function to submit user data
const submitData = async (userData) => {
    // Extract username and email from the form data object
    const newUser = {
        username: userData.get('username'), // Get the value of the 'username' input field
        email: userData.get('email') // Get the value of the 'email' input field
    }
    // Log the extracted user data to the console
    console.log(newUser)
}

// Define a React functional component called Action
const Action = () => {
    return (
        <>
            <h3>action example</h3>
            {/* Define a form with an onSubmit action */}
            <form action={submitData}>
                {/* Input field for username */}
                <div>
                    <label>User Name</label>
                    <input type="text" name='username' /> {/* 'name' attribute is used to identify the input field */}
                </div>
                {/* Input field for email */}
                <div>
                    <label>Email</label>
                    <input type="text" name="email" /> {/* 'name' attribute is used to identify the input field */}
                </div>
                {/* Submit button */}
                <button type='submit'>Submit</button> {/* Button type set to 'submit' to trigger form submission */}
            </form>
        </>
    )
}

export default Action; // Export the Action component as default
